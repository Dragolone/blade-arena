// 场景：天空、光照、地图、碰撞、导航
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { fbm, mulberry32, clamp, rand } from './util.js';

export const HALF = 32;
const GRID = 64; // 导航格 1m

function makeTex(size, draw, { color = true, repeat = 1 } = {}) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); t.anisotropy = 8;
  if (color) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function specks(g, s, n, a, rng) {
  for (let i = 0; i < n; i++) {
    const v = rng() > 0.5 ? 255 : 0;
    g.fillStyle = `rgba(${v},${v},${v},${a * rng()})`;
    g.fillRect(rng() * s, rng() * s, 1 + rng() * 2.5, 1 + rng() * 2.5);
  }
}
function blotches(g, s, n, rng, col = '20,18,16', amax = 0.12) {
  for (let i = 0; i < n; i++) {
    const x = rng() * s, y = rng() * s, r = 20 + rng() * 90;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, `rgba(${col},${amax * rng()})`); gr.addColorStop(1, `rgba(${col},0)`);
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
}
function boxGeo(w, h, d, tile) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (tile) {
    const uv = g.attributes.uv, s = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, (uv.getX(k) * s[f][0]) / tile, (uv.getY(k) * s[f][1]) / tile); }
  }
  return g;
}

export class World {
  constructor(renderer) {
    this.scene = new THREE.Scene();
    this.colliders = [];
    this.barrels = [];
    this.lamps = [];
    this.spawns = [];
    this.time = 0;
    this._buildSky(renderer);
    this._buildLights();
    this._buildMaterials();
    this._buildMap();
    this._buildNav();
  }

  /* ---------- 天空与环境光 ---------- */
  _buildSky(renderer) {
    const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 21), THREE.MathUtils.degToRad(-128));
    this.sunDir = sunDir;
    const mkSky = (scale) => {
      const sky = new Sky(); sky.scale.setScalar(scale);
      // 天空着色器输出的是很亮的 HDR 值，压低后才不会把泛光和环境反射冲成一片白
      sky.material.fragmentShader = sky.material.fragmentShader.replace('gl_FragColor = vec4( texColor, 1.0 );', 'vec3 skyC = texColor * 0.3; gl_FragColor = vec4( skyC / ( 1.0 + skyC ), 1.0 );');
      const u = sky.material.uniforms;
      u.turbidity.value = 6.5; u.rayleigh.value = 2.2; u.mieCoefficient.value = 0.006; u.mieDirectionalG.value = 0.86;
      u.sunPosition.value.copy(sunDir); if (u.showSunDisc) u.showSunDisc.value = 0;
      if (u.cloudCoverage) { u.cloudCoverage.value = 0.38; u.cloudDensity.value = 0.45; u.cloudElevation.value = 0.55; }
      return sky;
    };
    this.sky = mkSky(9000);
    this.scene.add(this.sky);
    // 自绘太阳：小而极亮的圆盘（触发泛光）+ 一圈柔和光晕
    const glowTex = makeTex(256, (g, s) => {
      const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      gr.addColorStop(0, 'rgba(255,225,170,1)'); gr.addColorStop(0.12, 'rgba(255,190,120,0.55)'); gr.addColorStop(0.4, 'rgba(255,150,90,0.14)'); gr.addColorStop(1, 'rgba(255,120,60,0)');
      g.fillStyle = gr; g.fillRect(0, 0, s, s);
    });
    glowTex.wrapS = glowTex.wrapT = THREE.ClampToEdgeWrapping;
    this.sunGroup = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(9, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(16, 10, 4.5), fog: false, depthWrite: false }));
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(260, 260), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, fog: false, depthWrite: false, color: new THREE.Color(1.1, 0.95, 0.8) }));
    this.sunGroup.add(glow, disc); this.sunGroup.renderOrder = -1;
    this.scene.add(this.sunGroup);
    // 用天空烘焙环境贴图 → 金属反射
    const envScene = new THREE.Scene();
    envScene.add(mkSky(900));
    const ground = new THREE.Mesh(new THREE.CircleGeometry(800, 24), new THREE.MeshBasicMaterial({ color: 0x3a332c }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -6; envScene.add(ground);
    const pm = new THREE.PMREMGenerator(renderer);
    this.envMap = pm.fromScene(envScene, 0, 0.1, 2000).texture;
    pm.dispose();
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.75;
    this.scene.fog = new THREE.FogExp2(0xcf9a78, 0.0085);
  }

  _buildLights() {
    this.hemi = new THREE.HemisphereLight(0xa9c4ff, 0x6b4e3a, 0.85);
    this.scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xffc48a, 4.6);
    sun.position.copy(this.sunDir).multiplyScalar(80);
    sun.castShadow = true;
    sun.shadow.mapSize.set(4096, 4096);
    const c = sun.shadow.camera; c.left = -50; c.right = 50; c.top = 50; c.bottom = -50; c.near = 10; c.far = 180;
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.035; sun.shadow.radius = 2.2;
    this.scene.add(sun); this.scene.add(sun.target);
    this.sun = sun;
  }

  _buildMaterials() {
    const rng = mulberry32(1234);
    const floorTex = makeTex(1024, (g, s) => {
      g.fillStyle = '#7b766e'; g.fillRect(0, 0, s, s);
      blotches(g, s, 60, rng, '30,26,22', 0.16); blotches(g, s, 30, rng, '200,190,175', 0.08);
      specks(g, s, 26000, 0.09, rng);
      // 伸缩缝
      g.strokeStyle = 'rgba(28,26,24,0.85)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(0, 2); g.lineTo(s, 2); g.moveTo(2, 0); g.lineTo(2, s); g.moveTo(s / 2, 0); g.lineTo(s / 2, s); g.moveTo(0, s / 2); g.lineTo(s, s / 2); g.stroke();
      // 裂缝
      g.strokeStyle = 'rgba(22,20,18,0.7)'; g.lineWidth = 1.3;
      for (let i = 0; i < 10; i++) {
        let x = rng() * s, y = rng() * s, a = rng() * 6.28; g.beginPath(); g.moveTo(x, y);
        for (let k = 0; k < 14; k++) { a += (rng() - 0.5) * 1.1; x += Math.cos(a) * 16; y += Math.sin(a) * 16; g.lineTo(x, y); }
        g.stroke();
      }
    }, { repeat: 8 });
    const floorBump = makeTex(512, (g, s) => { g.fillStyle = '#808080'; g.fillRect(0, 0, s, s); specks(g, s, 30000, 0.35, rng); blotches(g, s, 30, rng, '0,0,0', 0.3); }, { color: false, repeat: 16 });
    // 粗糙度：局部积水般的光滑区，夕阳下会出现长条高光
    const floorRough = (() => {
      const size = 256, c = document.createElement('canvas'); c.width = c.height = size;
      const g = c.getContext('2d'), img = g.createImageData(size, size), d = img.data;
      for (let y = 0, i = 0; y < size; y++) for (let x = 0; x < size; x++, i += 4) {
        const n = fbm(x / 38, y / 38, 4, 77);
        const wet = clamp((n - 0.56) * 9);
        const v = 232 - wet * 128 + (fbm(x / 6, y / 6, 2, 5) - 0.5) * 30;
        d[i] = d[i + 1] = d[i + 2] = clamp(v / 255) * 255; d[i + 3] = 255;
      }
      g.putImageData(img, 0, 0);
      const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping; t.repeat.set(3, 3); return t;
    })();
    const wallTex = makeTex(512, (g, s) => {
      g.fillStyle = '#928d85'; g.fillRect(0, 0, s, s);
      blotches(g, s, 30, rng, '40,34,28', 0.14); specks(g, s, 9000, 0.08, rng);
      for (let i = 0; i < 26; i++) { // 流挂水渍
        const x = rng() * s, w = 3 + rng() * 14, gr = g.createLinearGradient(0, 0, 0, s * (0.3 + rng() * 0.7));
        gr.addColorStop(0, `rgba(30,25,20,${0.05 + rng() * 0.16})`); gr.addColorStop(1, 'rgba(30,25,20,0)');
        g.fillStyle = gr; g.fillRect(x, 0, w, s);
      }
      g.strokeStyle = 'rgba(30,28,25,0.7)'; g.lineWidth = 3; g.strokeRect(0, 0, s, s);
      g.beginPath(); g.moveTo(0, s / 2); g.lineTo(s, s / 2); g.stroke();
      g.fillStyle = 'rgba(18,16,14,0.6)';
      for (const [x, y] of [[40, 40], [s - 40, 40], [40, s / 2 - 40], [s - 40, s / 2 - 40], [40, s / 2 + 40], [s - 40, s / 2 + 40], [40, s - 40], [s - 40, s - 40]]) { g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); }
    });
    const wallBump = makeTex(256, (g, s) => { g.fillStyle = '#808080'; g.fillRect(0, 0, s, s); specks(g, s, 9000, 0.3, rng); g.strokeStyle = '#000'; g.lineWidth = 3; g.strokeRect(0, 0, s, s); g.beginPath(); g.moveTo(0, s / 2); g.lineTo(s, s / 2); g.stroke(); }, { color: false });
    const crateTex = makeTex(512, (g, s) => {
      g.fillStyle = '#8a5f33'; g.fillRect(0, 0, s, s);
      for (let i = 0; i < 6; i++) {
        const y = (i * s) / 6;
        g.fillStyle = `rgba(${i % 2 ? '50,28,8' : '170,120,60'},${0.1 + rng() * 0.12})`; g.fillRect(0, y, s, s / 6);
        for (let k = 0; k < 24; k++) { g.fillStyle = `rgba(40,22,6,${rng() * 0.2})`; g.fillRect(rng() * s, y + rng() * (s / 6), 30 + rng() * 160, 1 + rng() * 2); }
        g.fillStyle = 'rgba(20,10,2,0.7)'; g.fillRect(0, y, s, 3);
      }
      specks(g, s, 5000, 0.07, rng);
      g.strokeStyle = '#5e3c18'; g.lineWidth = 50; g.strokeRect(25, 25, s - 50, s - 50);
      g.lineWidth = 40; g.beginPath(); g.moveTo(40, 40); g.lineTo(s - 40, s - 40); g.stroke();
      g.strokeStyle = 'rgba(15,8,0,0.6)'; g.lineWidth = 3; g.strokeRect(50, 50, s - 100, s - 100); g.strokeRect(1, 1, s - 2, s - 2);
      g.fillStyle = '#2b2b2b';
      for (const [x, y] of [[25, 25], [s - 25, 25], [25, s - 25], [s - 25, s - 25]]) { g.beginPath(); g.arc(x, y, 7, 0, 7); g.fill(); }
    });
    const crateBump = makeTex(256, (g, s) => {
      g.fillStyle = '#707070'; g.fillRect(0, 0, s, s);
      for (let i = 0; i < 6; i++) { g.fillStyle = '#000'; g.fillRect(0, (i * s) / 6, s, 2); }
      g.strokeStyle = '#d0d0d0'; g.lineWidth = 25; g.strokeRect(12, 12, s - 24, s - 24); g.lineWidth = 20; g.beginPath(); g.moveTo(20, 20); g.lineTo(s - 20, s - 20); g.stroke();
    }, { color: false });
    const contBump = makeTex(256, (g, s) => {
      for (let x = 0; x < s; x += 16) { const gr = g.createLinearGradient(x, 0, x + 16, 0); gr.addColorStop(0, '#202020'); gr.addColorStop(0.3, '#e0e0e0'); gr.addColorStop(0.7, '#e0e0e0'); gr.addColorStop(1, '#202020'); g.fillStyle = gr; g.fillRect(x, 0, 16, s); }
      g.fillStyle = '#f0f0f0'; g.fillRect(0, 0, s, 10); g.fillRect(0, s - 10, s, 10);
    }, { color: false });
    const contTex = (col, label) => makeTex(512, (g, s) => {
      g.fillStyle = col; g.fillRect(0, 0, s, s);
      for (let x = 0; x < s; x += 32) { const gr = g.createLinearGradient(x, 0, x + 32, 0); gr.addColorStop(0, 'rgba(0,0,0,0.28)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.1)'); gr.addColorStop(1, 'rgba(0,0,0,0.28)'); g.fillStyle = gr; g.fillRect(x, 0, 32, s); }
      blotches(g, s, 26, rng, '70,35,12', 0.3); specks(g, s, 5000, 0.07, rng);
      g.fillStyle = 'rgba(0,0,0,0.4)'; g.fillRect(0, 0, s, 18); g.fillRect(0, s - 18, s, 18);
      g.fillStyle = 'rgba(255,255,255,0.75)'; g.font = 'bold 54px Helvetica, Arial'; g.fillText(label, 60, 150);
      g.font = 'bold 22px Menlo, monospace'; g.fillText('MAX GROSS 30,480 KG', 60, 190);
    });
    const S = (o) => new THREE.MeshStandardMaterial(o);
    this.mat = {
      floor: S({ map: floorTex, bumpMap: floorBump, bumpScale: 0.6, roughnessMap: floorRough, roughness: 1, metalness: 0.02, envMapIntensity: 0.9 }),
      wall: S({ map: wallTex, bumpMap: wallBump, bumpScale: 0.8, roughness: 0.93 }),
      wallDark: S({ map: wallTex, bumpMap: wallBump, bumpScale: 0.8, roughness: 0.9, color: 0x9a938a }),
      crate: S({ map: crateTex, bumpMap: crateBump, bumpScale: 1.2, roughness: 0.82 }),
      metal: S({ color: 0x2a2d31, metalness: 0.85, roughness: 0.45 }),
      barrier: S({ map: wallTex, bumpMap: wallBump, bumpScale: 0.8, roughness: 0.88, color: 0xc9c2b6 }),
      cont: [['#9c3a26', 'KARGO'], ['#27527e', 'OCEANIC'], ['#3e6e3b', 'EVERLINE'], ['#b98a1e', 'SOLAR'], ['#1f7a78', 'TIDE'], ['#b9b9b4', 'NORD']].map(([c, l]) =>
        S({ map: contTex(c, l), bumpMap: contBump, bumpScale: 2.5, roughness: 0.55, metalness: 0.35 })),
    };
  }

  /* ---------- 地图 ---------- */
  box(x, z, w, d, h, mat, { y = 0, tile = 3, collide = true, cast = true, nav = true } = {}) {
    const m = new THREE.Mesh(boxGeo(w, h, d, tile), mat);
    m.position.set(x, y + h / 2, z); m.castShadow = cast; m.receiveShadow = true;
    this.scene.add(m);
    if (collide) {
      const c = { minX: x - w / 2, maxX: x + w / 2, minY: y, maxY: y + h, minZ: z - d / 2, maxZ: z + d / 2, active: true, nav };
      this.colliders.push(c); return c;
    }
    return m;
  }

  _buildMap() {
    const M = this.mat, sc = this.scene;
    // 地面
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(2 * HALF + 2, 2 * HALF + 2), M.floor);
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; sc.add(floor);
    // 外墙 + 扶壁
    const W = 2 * HALF + 2;
    this.box(0, -HALF - 0.5, W, 1, 7, M.wall); this.box(0, HALF + 0.5, W, 1, 7, M.wall);
    this.box(-HALF - 0.5, 0, 1, W, 7, M.wall); this.box(HALF + 0.5, 0, 1, W, 7, M.wall);
    for (const k of [-24, -12, 0, 12, 24]) {
      this.box(k, -HALF + 0.3, 1.2, 0.6, 7.5, M.wallDark); this.box(k, HALF - 0.3, 1.2, 0.6, 7.5, M.wallDark);
      this.box(-HALF + 0.3, k, 0.6, 1.2, 7.5, M.wallDark); this.box(HALF - 0.3, k, 0.6, 1.2, 7.5, M.wallDark);
    }
    // 墙顶灯带（发光 → 泛光）
    const strip = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 1.3, 0.45) });
    for (const [x, z, w, d] of [[0, -HALF + 0.02, W - 2, 0.06], [0, HALF - 0.02, W - 2, 0.06], [-HALF + 0.02, 0, 0.06, W - 2], [HALF - 0.02, 0, 0.06, W - 2]]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.07, d), strip); m.position.set(x, 6.2, z); sc.add(m);
    }

    // 中央凉亭：柱 + 顶 + 霓虹
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) this.box(sx * 4.6, sz * 4.6, 0.9, 0.9, 4.3, M.wallDark, { tile: 2 });
    this.box(0, 0, 11.4, 11.4, 0.45, M.metal, { y: 4.3, nav: false });
    const neon = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.25, 2.6, 3.4) });
    for (const [x, z, w, d] of [[0, -5.3, 10.2, 0.08], [0, 5.3, 10.2, 0.08], [-5.3, 0, 0.08, 10.2], [5.3, 0, 0.08, 10.2]]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, d), neon); m.position.set(x, 4.22, z); sc.add(m);
    }
    const pl = new THREE.PointLight(0x55e6ff, 55, 16, 2); pl.position.set(0, 3.7, 0); sc.add(pl);
    this.lamps.push({ light: pl, base: 55, flicker: 0.04 });

    // 集装箱
    const C = M.cont, LX = [6.06, 2.44], LZ = [2.44, 6.06];
    const cont = (x, z, along, mi, y = 0) => this.box(x, z, along[0], along[1], 2.6, C[mi], { y, tile: 2.6 });
    cont(-15, -11, LX, 0); cont(-14.3, -11, LX, 1, 2.6);
    cont(16, 9, LZ, 1); cont(13, -17, LX, 2); cont(-17, 15, LZ, 3);
    cont(7, 17.5, LX, 4); cont(-5, -21, LZ, 0); cont(24.5, -8, LZ, 5); cont(24.5, -8.4, LZ, 2, 2.6);
    // 高墙
    const tall = (x, z, w, d) => this.box(x, z, w, d, 3.4, M.wall, { tile: 3.4 });
    tall(-23, 1, 0.5, 9); tall(22.5, 4.5, 0.5, 7); tall(2, -12, 8, 0.5); tall(-8.5, 11.5, 0.5, 7);
    // 矮掩体
    const low = (x, z, alongX) => {
      this.box(x, z, alongX ? 3.6 : 0.6, alongX ? 0.6 : 3.6, 1.1, M.barrier, { tile: 2.2 });
      const m = new THREE.Mesh(new THREE.BoxGeometry(alongX ? 3.62 : 0.62, 0.12, alongX ? 0.62 : 3.62), this._hazardMat());
      m.position.set(x, 1.0, z); sc.add(m);
    };
    low(8.5, -9, true); low(-9.5, -16, false); low(10.5, 2.5, false); low(20, 17, true); low(-21, -19, true);
    low(-25, 22, true); low(27, -21, false); low(0, 12.5, true); low(-13, 3, true); low(15, -3.5, true);
    // 木箱
    const crate = (x, z, s = 1.2, y = 0) => this.box(x, z, s, s, s, M.crate, { y, tile: s });
    crate(3.0, 0.6); crate(1.7, 0.2, 0.8); crate(-11.2, -7.4); crate(-9.9, -7.6, 0.8);
    crate(19.0, 4.5); crate(19.1, 5.75); crate(19.05, 5.1, 0.9, 1.2);
    crate(10.8, -14.6); crate(-19.5, 9.5); crate(-14.2, 19.6); crate(-14.4, 20.9, 0.8);
    crate(3.2, 20.6); crate(-3.2, -16.2); crate(-3.0, -16.3, 0.8, 1.2); crate(21.2, -14);
    crate(-25.4, -9); crate(-26.5, -10.2); crate(-25.9, -9.6, 0.9, 1.2);
    crate(26, 12.5); crate(-10.5, 25.5); crate(12.5, 26); crate(13.6, 25.3, 0.8); crate(-27, 14);
    crate(-2.6, -1.4, 0.8); crate(17.5, -24.5); crate(-18.5, -26); crate(6.5, 8.5); crate(-6, -8.6, 0.9);

    // 路灯
    const lampMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(4.5, 2.6, 1.0) });
    const lamp = (x, z, dx, dz) => {
      this.box(x, z, 0.16, 0.16, 5.2, M.metal, { nav: false });
      const arm = new THREE.Mesh(new THREE.BoxGeometry(Math.abs(dx) * 1.2 + 0.1, 0.1, Math.abs(dz) * 1.2 + 0.1), M.metal);
      arm.position.set(x + dx * 0.6, 5.15, z + dz * 0.6); arm.castShadow = true; sc.add(arm);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.5), lampMat); head.position.set(x + dx * 1.2, 5.06, z + dz * 1.2); sc.add(head);
      const l = new THREE.PointLight(0xffb060, 90, 20, 2); l.position.set(x + dx * 1.2, 4.8, z + dz * 1.2); sc.add(l);
      this.lamps.push({ light: l, base: 90, flicker: 0.03, head });
    };
    lamp(-11.5, 8.5, 1, -1); lamp(11.5, -8.5, -1, 1); lamp(-21, -23, 1, 1); lamp(21, 23, -1, -1);
    // 洋红霓虹招牌
    const signTex = makeTex(512, (g, s) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, s, s);
      g.shadowColor = '#ff2bd6'; g.shadowBlur = 28; g.fillStyle = '#ff7ae9'; g.font = 'bold 150px Helvetica, Arial'; g.textAlign = 'center';
      g.fillText('ARENA', s / 2, 215); g.shadowColor = '#19e6ff'; g.fillStyle = '#9af4ff'; g.font = 'bold 120px Helvetica, Arial'; g.fillText('刀锋 07', s / 2, 400);
    });
    const signMat = new THREE.MeshBasicMaterial({ map: signTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: new THREE.Color(2.6, 2.6, 2.6) });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), signMat); sign.position.set(HALF - 0.05, 4.2, 14); sign.rotation.y = -Math.PI / 2; sc.add(sign);
    const sign2 = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), signMat); sign2.position.set(-HALF + 0.05, 4.2, -15); sign2.rotation.y = Math.PI / 2; sc.add(sign2);
    const sl = new THREE.PointLight(0xff3bd0, 45, 15, 2); sl.position.set(HALF - 2, 3.5, 14); sc.add(sl);
    this.lamps.push({ light: sl, base: 45, flicker: 0.12 });

    // 油桶（可引爆）
    this._buildBarrels([[1.6, -2.2], [-12.5, -13.6], [14.4, 12.8], [-15, 10.5], [9.5, -12.4], [22.6, -17.6], [-21.6, -5.4], [-3.4, 14.5], [19.4, -0.6], [-9, -2.6], [5, 25], [-24, 26]]);

    // 出生点
    const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(5.5, 0.5, 0.25), transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false });
    for (const [x, z] of [[-27, -27], [27, -27], [-28, 28.5], [27, 27], [-6, -29], [6, -29], [-29, -6], [-29, 6], [29, -4], [29, 8], [18, -29], [-18, 29]]) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 40), ringMat); ring.rotation.x = -Math.PI / 2; ring.position.set(x, 0.03, z); sc.add(ring);
      const inner = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.5, 6), ringMat); inner.rotation.x = -Math.PI / 2; inner.position.set(x, 0.03, z); sc.add(inner);
      this.spawns.push({ x, z, ring, inner });
    }
  }

  _hazardMat() {
    if (!this._hz) {
      const t = makeTex(128, (g, s) => {
        g.fillStyle = '#e2b21a'; g.fillRect(0, 0, s, s); g.fillStyle = '#17171a';
        for (let i = -s; i < s * 2; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 16, 0); g.lineTo(i + 16 - s, s); g.lineTo(i - s, s); g.fill(); }
      });
      t.repeat.set(4, 1);
      this._hz = new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 });
    }
    return this._hz;
  }

  _buildBarrels(list) {
    const tex = makeTex(256, (g, s) => {
      g.fillStyle = '#a3261c'; g.fillRect(0, 0, s, s);
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(0, 70, s, 8); g.fillRect(0, 178, s, 8);
      g.fillStyle = '#e8c21a'; g.fillRect(0, 104, s, 48); g.fillStyle = '#18181a'; g.font = 'bold 30px Helvetica, Arial';
      g.fillText('易燃 ⚠ FLAMMABLE ⚠', 6, 139);
    });
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.45, metalness: 0.5 });
    const geo = new THREE.CylinderGeometry(0.33, 0.33, 0.95, 18);
    for (const [x, z] of list) {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, 0.475, z); m.rotation.y = rand(6.28); m.castShadow = m.receiveShadow = true; this.scene.add(m);
      const c = { minX: x - 0.3, maxX: x + 0.3, minY: 0, maxY: 0.95, minZ: z - 0.3, maxZ: z + 0.3, active: true, nav: false };
      this.colliders.push(c);
      const b = { x, z, mesh: m, collider: c, alive: true }; c.barrel = b;
      this.barrels.push(b);
    }
  }
  resetBarrels() { for (const b of this.barrels) { b.alive = true; b.mesh.visible = true; b.collider.active = true; } }

  /* ---------- 导航（流场） ---------- */
  _buildNav() {
    this.blocked = new Uint8Array(GRID * GRID);
    const r = 0.42;
    for (let gz = 0; gz < GRID; gz++) for (let gx = 0; gx < GRID; gx++) {
      const x = gx - HALF + 0.5, z = gz - HALF + 0.5;
      for (const c of this.colliders) {
        if (!c.nav || c.minY > 1.7 || c.maxY < 0.3) continue;
        if (x > c.minX - r && x < c.maxX + r && z > c.minZ - r && z < c.maxZ + r) { this.blocked[gz * GRID + gx] = 1; break; }
      }
    }
    this.flow = new Int16Array(GRID * GRID);
    this._queue = new Int32Array(GRID * GRID);
  }
  cellOf(x, z) { return clamp(Math.floor(z + HALF), 0, GRID - 1) * GRID + clamp(Math.floor(x + HALF), 0, GRID - 1); }
  isBlocked(x, z) { return this.blocked[this.cellOf(x, z)] === 1; }
  updateFlow(px, pz) {
    const f = this.flow, q = this._queue, B = this.blocked;
    f.fill(-1);
    let head = 0, tail = 0;
    const gx0 = clamp(Math.floor(px + HALF), 0, GRID - 1), gz0 = clamp(Math.floor(pz + HALF), 0, GRID - 1);
    // 玩家站在箱子上时，从周围最近的可走格开始
    for (let rad = 0; rad <= 3 && tail === 0; rad++) {
      for (let dz = -rad; dz <= rad; dz++) for (let dx = -rad; dx <= rad; dx++) {
        const gx = gx0 + dx, gz = gz0 + dz;
        if (gx < 0 || gz < 0 || gx >= GRID || gz >= GRID) continue;
        const i = gz * GRID + gx;
        if (!B[i] && f[i] < 0) { f[i] = 0; q[tail++] = i; }
      }
    }
    while (head < tail) {
      const i = q[head++], d = f[i] + 1, gx = i % GRID, gz = (i / GRID) | 0;
      if (gx > 0 && !B[i - 1] && f[i - 1] < 0) { f[i - 1] = d; q[tail++] = i - 1; }
      if (gx < GRID - 1 && !B[i + 1] && f[i + 1] < 0) { f[i + 1] = d; q[tail++] = i + 1; }
      if (gz > 0 && !B[i - GRID] && f[i - GRID] < 0) { f[i - GRID] = d; q[tail++] = i - GRID; }
      if (gz < GRID - 1 && !B[i + GRID] && f[i + GRID] < 0) { f[i + GRID] = d; q[tail++] = i + GRID; }
    }
  }
  // 沿流场下降方向（写入 out.x/out.z，已归一化）；无路可走返回 false
  flowDir(x, z, out) {
    const f = this.flow, B = this.blocked;
    const gx = clamp(Math.floor(x + HALF), 0, GRID - 1), gz = clamp(Math.floor(z + HALF), 0, GRID - 1);
    let best = 1e9, bx = 0, bz = 0;
    const cur = f[gz * GRID + gx];
    for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dz) continue;
      const nx = gx + dx, nz = gz + dz;
      if (nx < 0 || nz < 0 || nx >= GRID || nz >= GRID) continue;
      const i = nz * GRID + nx;
      if (B[i] || f[i] < 0) continue;
      if (dx && dz && (B[gz * GRID + nx] || B[nz * GRID + gx])) continue; // 不切角
      const cost = f[i] + (dx && dz ? 0.4 : 0);
      if (cost < best) { best = cost; bx = nx; bz = nz; }
    }
    if (best > 1e8) return false;
    if (cur >= 0 && best >= cur + 0.5 && cur !== 0) { /* 局部极小，仍朝最佳邻格走 */ }
    const tx = bx - HALF + 0.5 - x, tz = bz - HALF + 0.5 - z, l = Math.hypot(tx, tz) || 1;
    out.x = tx / l; out.z = tz / l;
    return true;
  }

  /* ---------- 碰撞 ---------- */
  // 射线 vs 所有碰撞盒 + 地面。返回命中距离（无命中返回 Infinity），hit 写入法线与碰撞体
  raycast(ox, oy, oz, dx, dy, dz, maxDist, hit) {
    let best = maxDist, nx = 0, ny = 0, nz = 0, bc = null;
    if (dy < -1e-6) { const t = -oy / dy; if (t > 0 && t < best) { best = t; ny = 1; } }
    const ix = 1 / (dx || 1e-12), iy = 1 / (dy || 1e-12), iz = 1 / (dz || 1e-12);
    const cs = this.colliders;
    for (let i = 0; i < cs.length; i++) {
      const c = cs[i];
      if (!c.active) continue;
      let t1 = (c.minX - ox) * ix, t2 = (c.maxX - ox) * ix, axis = 0;
      let tmin = Math.min(t1, t2), tmax = Math.max(t1, t2);
      t1 = (c.minY - oy) * iy; t2 = (c.maxY - oy) * iy;
      let a = Math.min(t1, t2), b = Math.max(t1, t2);
      if (a > tmin) { tmin = a; axis = 1; } if (b < tmax) tmax = b;
      t1 = (c.minZ - oz) * iz; t2 = (c.maxZ - oz) * iz;
      a = Math.min(t1, t2); b = Math.max(t1, t2);
      if (a > tmin) { tmin = a; axis = 2; } if (b < tmax) tmax = b;
      if (tmax < 0 || tmin > tmax || tmin < 0 || tmin >= best) continue;
      best = tmin; bc = c; nx = ny = nz = 0;
      if (axis === 0) nx = dx > 0 ? -1 : 1; else if (axis === 1) ny = dy > 0 ? -1 : 1; else nz = dz > 0 ? -1 : 1;
    }
    if (best >= maxDist) return Infinity;
    if (hit) { hit.nx = nx; hit.ny = ny; hit.nz = nz; hit.collider = bc; }
    return best;
  }
  // 两点之间是否被遮挡
  blockedLine(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az, l = Math.hypot(dx, dy, dz);
    if (l < 1e-4) return false;
    return this.raycast(ax, ay, az, dx / l, dy / l, dz / l, l - 0.05, null) !== Infinity;
  }
  // AABB 角色移动（逐轴分离）。返回是否落地
  moveBody(p, v, r, h, dt) {
    const cs = this.colliders, n = cs.length;
    let ground = false, i, c;
    p.x += v.x * dt;
    for (i = 0; i < n; i++) { c = cs[i]; if (c.active && p.x + r > c.minX && p.x - r < c.maxX && p.z + r > c.minZ && p.z - r < c.maxZ && p.y + h > c.minY && p.y < c.maxY) { p.x = v.x > 0 ? c.minX - r : c.maxX + r; v.x = 0; } }
    p.z += v.z * dt;
    for (i = 0; i < n; i++) { c = cs[i]; if (c.active && p.x + r > c.minX && p.x - r < c.maxX && p.z + r > c.minZ && p.z - r < c.maxZ && p.y + h > c.minY && p.y < c.maxY) { p.z = v.z > 0 ? c.minZ - r : c.maxZ + r; v.z = 0; } }
    p.y += v.y * dt;
    for (i = 0; i < n; i++) {
      c = cs[i];
      if (c.active && p.x + r > c.minX && p.x - r < c.maxX && p.z + r > c.minZ && p.z - r < c.maxZ && p.y + h > c.minY && p.y < c.maxY) {
        if (v.y <= 0) { p.y = c.maxY; ground = true; } else p.y = c.minY - h;
        v.y = 0;
      }
    }
    if (p.y <= 0) { p.y = 0; if (v.y < 0) v.y = 0; ground = true; }
    return ground;
  }
  // 圆形（敌人）被碰撞盒推出
  pushOut(p, r, h) {
    const cs = this.colliders;
    for (let i = 0; i < cs.length; i++) {
      const c = cs[i];
      if (!c.active || c.minY > h || c.maxY < 0.3) continue;
      const cx = clamp(p.x, c.minX, c.maxX), cz = clamp(p.z, c.minZ, c.maxZ);
      let dx = p.x - cx, dz = p.z - cz; const d2 = dx * dx + dz * dz;
      if (d2 >= r * r) continue;
      if (d2 > 1e-8) { const d = Math.sqrt(d2); p.x = cx + (dx / d) * r; p.z = cz + (dz / d) * r; }
      else {
        // 在盒内：沿最近面推出
        const l = p.x - c.minX, rr = c.maxX - p.x, f = p.z - c.minZ, bk = c.maxZ - p.z, m = Math.min(l, rr, f, bk);
        if (m === l) p.x = c.minX - r; else if (m === rr) p.x = c.maxX + r; else if (m === f) p.z = c.minZ - r; else p.z = c.maxZ + r;
      }
    }
  }
  // 玩家头顶到太阳是否无遮挡（给第一人称武器做明暗）
  sunVisible(x, y, z) {
    const s = this.sunDir;
    return this.raycast(x, y, z, s.x, s.y, s.z, 120, null) === Infinity;
  }

  update(dt, camPos) {
    this.time += dt;
    if (camPos) { this.sunGroup.position.copy(camPos).addScaledVector(this.sunDir, 480); this.sunGroup.lookAt(camPos); }
    const t = this.time;
    for (const l of this.lamps) {
      const n = Math.sin(t * 13.7 + l.base) * Math.sin(t * 7.3 + l.base * 2) * l.flicker;
      l.light.intensity = l.base * (1 + n);
    }
    if (this.sky.material.uniforms.time) this.sky.material.uniforms.time.value = t;
    for (const s of this.spawns) { s.inner.rotation.z = t * 0.8; }
  }
}
