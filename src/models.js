// 程序化武器模型：AK、沙鹰、AWP、蝴蝶刀、爪子刀、M9 刺刀 + 第一人称手臂
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries, toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { skinMaterial } from './skins.js';
import { fbm, mulberry32, clamp, lerp, smooth } from './util.js';

const PI = Math.PI;

/* ---------------- 默认材质 ---------------- */
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
  return t;
}
function pxTex(w, h, fn) {
  return canvasTex(w, h, (ctx) => {
    const img = ctx.createImageData(w, h), d = img.data, o = [0, 0, 0];
    let i = 0;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      fn(x / w, y / h, o);
      d[i++] = clamp(o[0]) * 255; d[i++] = clamp(o[1]) * 255; d[i++] = clamp(o[2]) * 255; d[i++] = 255;
    }
    ctx.putImageData(img, 0, 0);
  });
}
let MAT = null;
export function materials() {
  if (MAT) return MAT;
  const woodTex = pxTex(512, 256, (u, v, o) => {
    const g = fbm(u * 3, v * 46 + fbm(u * 5, v * 3, 2, 3) * 6, 4, 7);
    const ring = Math.sin((v * 30 + fbm(u * 2, v * 2, 3, 9) * 14) * 2) * 0.5 + 0.5;
    const k = 0.55 + g * 0.5 + ring * 0.18;
    o[0] = 0.47 * k; o[1] = 0.235 * k; o[2] = 0.09 * k;
  });
  const gunTex = pxTex(512, 256, (u, v, o) => {
    const n = fbm(u * 14, v * 9, 4, 2), s = fbm(u * 90, v * 6, 2, 5);
    const k = 0.115 + n * 0.07 + (s > 0.72 ? 0.08 : 0);
    o[0] = k; o[1] = k * 1.03; o[2] = k * 1.1;
  });
  const oliveTex = pxTex(256, 128, (u, v, o) => {
    const k = 0.8 + fbm(u * 20, v * 12, 4, 6) * 0.4;
    o[0] = 0.2 * k; o[1] = 0.27 * k; o[2] = 0.13 * k;
  });
  const chromeTex = pxTex(256, 128, (u, v, o) => {
    const k = 0.62 + fbm(u * 3, v * 70, 3, 8) * 0.2; o[0] = k; o[1] = k; o[2] = k * 1.03;
  });
  MAT = {
    steel: new THREE.MeshStandardMaterial({ color: 0xc9cdd4, metalness: 1, roughness: 0.24, envMapIntensity: 1.2 }),
    darkSteel: new THREE.MeshStandardMaterial({ color: 0x2b2e34, metalness: 0.85, roughness: 0.38 }),
    black: new THREE.MeshStandardMaterial({ color: 0x050506, metalness: 0.4, roughness: 0.7 }),
    gunmetal: new THREE.MeshStandardMaterial({ map: gunTex, metalness: 0.85, roughness: 0.42 }),
    chrome: new THREE.MeshStandardMaterial({ map: chromeTex, metalness: 1, roughness: 0.22, envMapIntensity: 1.2 }),
    wood: new THREE.MeshPhysicalMaterial({ map: woodTex, metalness: 0, roughness: 0.5, clearcoat: 0.7, clearcoatRoughness: 0.25 }),
    polymer: new THREE.MeshStandardMaterial({ color: 0x131417, metalness: 0.1, roughness: 0.72 }),
    olive: new THREE.MeshStandardMaterial({ map: oliveTex, metalness: 0.05, roughness: 0.62 }),
    oliveGrip: new THREE.MeshStandardMaterial({ color: 0x1c2218, metalness: 0.1, roughness: 0.7 }),
    g10: new THREE.MeshStandardMaterial({ color: 0x15161a, metalness: 0.15, roughness: 0.55 }),
    titanium: new THREE.MeshStandardMaterial({ color: 0x4a5261, metalness: 1, roughness: 0.34, envMapIntensity: 1.1 }),
    brass: new THREE.MeshStandardMaterial({ color: 0xd2a94e, metalness: 1, roughness: 0.28 }),
    lens: new THREE.MeshPhysicalMaterial({ color: 0x1a0d33, metalness: 1, roughness: 0.04, emissive: 0x3a1a88, emissiveIntensity: 0.35, envMapIntensity: 2 }),
    glove: new THREE.MeshStandardMaterial({ color: 0x15171a, metalness: 0, roughness: 0.82, side: THREE.DoubleSide }),
    glovePad: new THREE.MeshStandardMaterial({ color: 0x2b2f36, metalness: 0.2, roughness: 0.5, side: THREE.DoubleSide }),
    sleeve: new THREE.MeshStandardMaterial({ color: 0x3a4431, metalness: 0, roughness: 0.95, side: THREE.DoubleSide }),
  };
  return MAT;
}

/* ---------------- 几何工具 ---------------- */
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
class Parts {
  constructor() { this.g = {}; }
  add(name, geo, p = [0, 0, 0], r = [0, 0, 0], s = [1, 1, 1]) {
    _m.compose(_p.set(p[0], p[1], p[2]), _q.setFromEuler(_e.set(r[0], r[1], r[2])), _s.set(s[0], s[1], s[2]));
    return this.addM(name, geo, _m);
  }
  addM(name, geo, matrix) {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    g.applyMatrix4(matrix);
    (this.g[name] || (this.g[name] = [])).push(g);
    geo.dispose();
    return this;
  }
  has(name) { return !!this.g[name]; }
  geo(name) {
    const list = this.g[name];
    if (!list) return null;
    const m = mergeGeometries(list, false);
    list.forEach((g) => g.dispose());
    return m;
  }
  mesh(name, mat) {
    const m = new THREE.Mesh(this.geo(name), mat);
    m.castShadow = true; m.name = name;
    return m;
  }
}
const rbox = (w, h, d, r = 0.004) => new RoundedBoxGeometry(w, h, d, 2, Math.min(r, Math.min(w, h, d) / 2 - 1e-4));
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cylY = (r, len, seg = 16, r2 = r) => new THREE.CylinderGeometry(r2, r, len, seg);
const cylZ = (r, len, seg = 16, r2 = r) => { const g = new THREE.CylinderGeometry(r2, r, len, seg); g.rotateX(PI / 2); return g; }; // r=前端(-Z)半径
const cylX = (r, len, seg = 16) => { const g = new THREE.CylinderGeometry(r, r, len, seg); g.rotateZ(PI / 2); return g; };

// 在 ZY 平面内的轮廓，沿 X 拉伸（枪托、弹匣等）
function extrudeZY(pts, width, bevel = 0.003, holes) {
  const sh = new THREE.Shape();
  pts.forEach(([z, y], i) => (i ? sh.lineTo(z, y) : sh.moveTo(z, y)));
  sh.closePath();
  if (holes) for (const h of holes) {
    const path = new THREE.Path();
    h.forEach(([z, y], i) => (i ? path.lineTo(z, y) : path.moveTo(z, y)));
    path.closePath(); sh.holes.push(path);
  }
  const depth = width - 2 * bevel;
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelOffset: -bevel, bevelSegments: 2, curveSegments: 8 });
  g.translate(0, 0, -depth / 2);
  g.rotateY(-PI / 2);
  return g;
}
// 在 XY 平面内的形状，沿 Z 拉伸（刀柄等）
function extrudeXY(shape, thick, bevel = 0.002, seg = 2) {
  const depth = thick - 2 * bevel;
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelOffset: -bevel, bevelSegments: seg, curveSegments: 12 });
  g.translate(0, 0, -depth / 2);
  return g;
}
// 枪类皮肤 UV：沿枪身(z)铺 u，高度(y)铺 v，保持 2:1
// 贴图沿枪身镜像铺两次；朝上的面按 x 展开，保证第一人称看到的机匣顶部也有完整图案
function gunUV(geos, yc = 0) {
  const bb = new THREE.Box3();
  for (const g of geos) { g.computeBoundingBox(); bb.union(g.boundingBox); }
  const L = bb.max.z - bb.min.z;
  for (const g of geos) {
    const p = g.attributes.position, nrm = g.attributes.normal, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) {
      const ny = nrm.getY(i), wrap = Math.abs(ny) > 0.6 ? (p.getX(i) + 0.03) * Math.sign(ny) : 0;
      uv.setXY(i, (p.getZ(i) - bb.min.z) / (L * 0.5), 0.5 + (p.getY(i) - yc + wrap) / (L * 0.25));
    }
    uv.needsUpdate = true;
  }
}
const bez = (a, c, b, t) => [(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]];
// 分段路径：segs = [[tEnd, fn(localT)]...]
const pathFn = (segs) => (t) => {
  let t0 = 0;
  for (const [t1, fn] of segs) { if (t <= t1 || t1 >= 1) return fn(clamp((t - t0) / (t1 - t0))); t0 = t1; }
  return segs[segs.length - 1][1](1);
};
const line = (a, b) => (t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];

// 放样刀身：S(t)=刀背曲线, E(t)=刀刃曲线（XY 平面），生成带研磨斜面的真实刀身截面
function loftBlade(S, E, { n = 44, thick = 0.005, grind = 0.45, taper = 0.7 } = {}) {
  const pos = [], uv = [], idx = [];
  const K = 6;
  for (let i = 0; i <= n; i++) {
    const t = i / n, s = S(t), e = E(t);
    const th = (thick / 2) * (1 - smooth(clamp((t - 0.6) / 0.4)) * taper);
    const mix = (k) => [lerp(e[0], s[0], k), lerp(e[1], s[1], k)];
    const g = mix(grind), sp = mix(0.9);
    const ring = [[e, 0, 1], [g, th, 1 - grind], [sp, th, 0.1], [s, 0, 0], [sp, -th, 0.1], [g, -th, 1 - grind]];
    for (const [p, z, v] of ring) { pos.push(p[0], p[1], z); uv.push(t, v); }
  }
  for (let i = 0; i < n; i++) for (let k = 0; k < K; k++) {
    const a = i * K + k, b = i * K + ((k + 1) % K), c = (i + 1) * K + k, d = (i + 1) * K + ((k + 1) % K);
    idx.push(a, c, d, a, d, b);
  }
  for (let k = 1; k < K - 1; k++) idx.push(0, k + 1, k); // 根部封口
  // 保证三角形朝外（有符号体积为正）
  let vol = 0;
  for (let i = 0; i < idx.length; i += 3) {
    const a = idx[i] * 3, b = idx[i + 1] * 3, c = idx[i + 2] * 3;
    vol += pos[a] * (pos[b + 1] * pos[c + 2] - pos[b + 2] * pos[c + 1])
      - pos[a + 1] * (pos[b] * pos[c + 2] - pos[b + 2] * pos[c])
      + pos[a + 2] * (pos[b] * pos[c + 1] - pos[b + 1] * pos[c]);
  }
  if (vol < 0) for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; }
  let g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g = g.toNonIndexed();
  g.computeVertexNormals();
  return toCreasedNormals(g, 0.5);
}

/* ---------------- 第一人称手臂 ---------------- */
// 握拳模型（本地坐标：握持轴 = Y，指节朝 -Z，手背朝 +X，拇指侧朝 +Y）
// basis: 把本地 XYZ 映射到武器空间的三个轴（可为左手系 = 镜像成左手）
export function buildHand({ pos = [0, 0, 0], basis = null, armTo = [0.12, -0.3, 0.5], scale = 1 } = {}) {
  const M = materials();
  const T = new THREE.Matrix4();
  if (basis) T.makeBasis(new THREE.Vector3(...basis[0]), new THREE.Vector3(...basis[1]), new THREE.Vector3(...basis[2]));
  T.scale(new THREE.Vector3(scale, scale, scale));
  T.setPosition(pos[0], pos[1], pos[2]);
  // 手掌 / 拇指（固定）
  const P = new Parts();
  P.add('glove', rbox(0.03, 0.09, 0.082, 0.013), [0.031, 0, 0.004]);
  P.add('glove', rbox(0.024, 0.026, 0.062, 0.011), [-0.022, 0.056, 0.004], [0, 0.35, 0.1]); // 拇指
  P.add('glove', rbox(0.03, 0.03, 0.04, 0.012), [0.012, 0.052, 0.032], [0, 0.2, 0]);      // 拇指根
  P.add('pad', rbox(0.012, 0.078, 0.022, 0.005), [0.043, 0, -0.03]);                       // 指节护甲
  P.add('pad', rbox(0.01, 0.05, 0.04, 0.004), [0.047, 0, 0.012]);
  // 四指：绕指根关节（平行握持轴）张开 / 握紧
  const PIV = [0.03, 0, -0.03];
  const F = new Parts();
  for (let i = 0; i < 4; i++) {
    const y = 0.034 - i * 0.0225, sh = i === 3 ? -0.004 : 0;
    F.add('glove', rbox(0.064, 0.0205, 0.03, 0.0095), [0.0 - PIV[0], y, -0.035 - sh - PIV[2]]);
    F.add('glove', rbox(0.026, 0.0205, 0.05, 0.0095), [-0.031 - PIV[0], y, -0.014 - sh - PIV[2]]);
  }
  const hand = new THREE.Group(); hand.matrixAutoUpdate = false; hand.matrix.copy(T);
  hand.add(P.mesh('glove', M.glove), P.mesh('pad', M.glovePad));
  const fingers = new THREE.Group(); fingers.position.set(PIV[0], PIV[1], PIV[2]); fingers.add(F.mesh('glove', M.glove)); hand.add(fingers);
  // 前臂（武器空间里直接指向 armTo）
  const A = new Parts();
  const wrist = new THREE.Vector3(0.022, -0.018, 0.045).applyMatrix4(T);
  const end = new THREE.Vector3(...armTo);
  const dir = end.clone().sub(wrist); const len = dir.length(); dir.normalize();
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
  const mk = (r1, r2, a, b) => {
    const g = new THREE.CylinderGeometry(r2 * scale, r1 * scale, b - a, 14);
    return [g, new THREE.Matrix4().compose(wrist.clone().addScaledVector(dir, (a + b) / 2), q, new THREE.Vector3(1, 1, 0.85))];
  };
  const [g1, m1] = mk(0.036, 0.04, -0.01, 0.06); A.addM('glove', g1, m1);       // 手套袖口
  const [g2, m2] = mk(0.04, 0.054, 0.05, len); A.addM('sleeve', g2, m2);        // 袖子
  const group = new THREE.Group();
  group.add(hand, A.mesh('glove', M.glove), A.mesh('sleeve', M.sleeve));
  group.userData.fingers = fingers; // rotation.y = -张开角
  return group;
}

/* ---------------- 枪械通用封装 ---------------- */
function finishGun(P, cfg) {
  const M = materials();
  const group = new THREE.Group();
  const meshes = {};
  const paintNames = cfg.paint.filter((n) => P.has(n));
  const geos = {};
  for (const n of Object.keys(P.g)) geos[n] = P.geo(n);
  gunUV(paintNames.map((n) => geos[n]), cfg.uvY || 0);
  for (const n of Object.keys(geos)) {
    const m = new THREE.Mesh(geos[n], cfg.stock[n] || M.darkSteel);
    m.castShadow = true; m.name = n; meshes[n] = m;
  }
  // 可动部件分组
  const parts = {};
  for (const [pname, names] of Object.entries(cfg.moving || {})) {
    const g = new THREE.Group(); g.name = pname;
    names.forEach((n) => meshes[n] && g.add(meshes[n]));
    parts[pname] = g; group.add(g);
  }
  for (const m of Object.values(meshes)) if (!m.parent) group.add(m);
  const muzzle = new THREE.Object3D(); muzzle.position.set(...cfg.muzzle); group.add(muzzle);
  const eject = new THREE.Object3D(); eject.position.set(...cfg.eject); group.add(eject);
  return {
    kind: 'gun', group, parts, muzzle, eject,
    setSkin(id) {
      const sm = skinMaterial('gun', id);
      for (const n of paintNames) meshes[n].material = sm || cfg.stock[n] || M.darkSteel;
    },
  };
}

/* ---------------- AK-47 ---------------- */
export function buildAK() {
  const M = materials();
  const P = new Parts();
  P.add('skin', rbox(0.044, 0.06, 0.27, 0.006), [0, 0, 0]);
  P.add('skin', rbox(0.04, 0.028, 0.25, 0.013), [0, 0.035, 0.005]);
  P.add('metal', rbox(0.03, 0.018, 0.05, 0.004), [0, 0.047, -0.125]);
  P.add('metal', box(0.018, 0.008, 0.004), [0, 0.06, -0.105]);
  // 护木
  P.add('furn', rbox(0.048, 0.046, 0.19, 0.014), [0, -0.004, -0.23]);
  P.add('furn', rbox(0.04, 0.028, 0.15, 0.013), [0, 0.034, -0.215]);
  for (let i = 0; i < 3; i++) P.add('dark', box(0.05, 0.006, 0.022), [0, 0.012, -0.175 - i * 0.045]);
  // 握把 / 枪托
  P.add('furn', rbox(0.034, 0.1, 0.046, 0.012), [0, -0.075, 0.108], [-0.32, 0, 0]);
  P.add('furn', extrudeZY([[0.132, 0.022], [0.4, 0.004], [0.405, -0.1], [0.385, -0.106], [0.132, -0.028]], 0.036, 0.007));
  P.add('metal', rbox(0.038, 0.112, 0.008, 0.003), [0, -0.049, 0.408], [0.04, 0, 0]);
  // 枪管组
  P.add('metal', cylZ(0.0075, 0.36), [0, 0.008, -0.43]);
  P.add('metal', cylZ(0.0085, 0.12), [0, 0.036, -0.35]);
  P.add('metal', rbox(0.022, 0.044, 0.026, 0.004), [0, 0.022, -0.415]);
  P.add('metal', rbox(0.014, 0.05, 0.022, 0.003), [0, 0.036, -0.565]);
  P.add('metal', box(0.003, 0.016, 0.003), [0, 0.068, -0.565]);
  P.add('metal', box(0.003, 0.02, 0.016), [0.008, 0.066, -0.565]);
  P.add('metal', box(0.003, 0.02, 0.016), [-0.008, 0.066, -0.565]);
  P.add('metal', cylZ(0.0115, 0.045), [0, 0.008, -0.628]);
  P.add('dark', cylZ(0.005, 0.002), [0, 0.008, -0.6515]);
  P.add('metal', cylZ(0.004, 0.26), [0, -0.012, -0.44]);
  // 拉机柄 / 抛壳窗 / 快慢机
  P.add('dark', box(0.002, 0.016, 0.11), [0.0225, 0.022, -0.02]);
  P.add('bolt', cylX(0.005, 0.03), [0.035, 0.022, 0.0]);
  P.add('metal', box(0.002, 0.008, 0.075), [0.0228, -0.006, 0.06], [0.22, 0, 0]);
  // 扳机
  P.add('metal', box(0.014, 0.003, 0.078), [0, -0.058, 0.052]);
  P.add('metal', box(0.014, 0.03, 0.003), [0, -0.044, 0.014]);
  P.add('metal', box(0.005, 0.022, 0.005), [0, -0.042, 0.06], [0.35, 0, 0]);
  // 弧形弹匣
  const zc = -0.275, yc = -0.026, pts = [];
  for (let i = 0; i <= 8; i++) { const a = (i / 8) * 0.64; pts.push([zc + 0.28 * Math.cos(a), yc - 0.28 * Math.sin(a)]); }
  for (let i = 8; i >= 0; i--) { const a = (i / 8) * 0.64; pts.push([zc + 0.218 * Math.cos(a), yc - 0.218 * Math.sin(a)]); }
  P.add('mag', extrudeZY(pts, 0.03, 0.004));
  return finishGun(P, {
    paint: ['skin', 'furn', 'mag'],
    stock: { skin: M.gunmetal, furn: M.wood, mag: M.darkSteel, dark: M.black, bolt: M.steel },
    moving: { mag: ['mag'], bolt: ['bolt'] },
    muzzle: [0, 0.008, -0.66], eject: [0.03, 0.025, -0.02], uvY: 0.012,
  });
}

/* ---------------- 沙漠之鹰 ---------------- */
export function buildDeagle() {
  const M = materials();
  const P = new Parts();
  // 套筒（可后坐）
  P.add('slide', rbox(0.03, 0.034, 0.215, 0.005), [0, 0.03, -0.035]);
  P.add('slide', rbox(0.016, 0.009, 0.125, 0.003), [0, 0.0495, -0.07]);
  for (let i = 0; i < 6; i++) P.add('slideDark', box(0.0312, 0.022, 0.0022), [0, 0.03, 0.03 + i * 0.0065]);
  P.add('slideDark', cylZ(0.0068, 0.004), [0, 0.033, -0.1435]);
  P.add('slideMetal', box(0.004, 0.007, 0.01), [0, 0.057, -0.125]);
  P.add('slideMetal', box(0.02, 0.007, 0.007), [0, 0.0505, 0.064]);
  // 套筒座
  P.add('skin', rbox(0.028, 0.026, 0.178, 0.005), [0, 0.002, -0.03]);
  P.add('skin', rbox(0.029, 0.034, 0.034, 0.008), [0, -0.006, 0.058]);
  // 握把
  P.add('grip', rbox(0.032, 0.105, 0.05, 0.013), [0, -0.058, 0.046], [-0.22, 0, 0]);
  for (let i = 0; i < 5; i++) P.add('dark', box(0.0335, 0.004, 0.03), [0, -0.035 - i * 0.014, 0.041 + i * 0.0032], [-0.22, 0, 0]);
  // 扳机 / 击锤
  P.add('metal', box(0.01, 0.003, 0.052), [0, -0.046, -0.012]);
  P.add('metal', box(0.01, 0.036, 0.003), [0, -0.029, -0.038]);
  P.add('metal', box(0.005, 0.02, 0.005), [0, -0.026, 0.004], [0.3, 0, 0]);
  P.add('metal', box(0.008, 0.018, 0.01), [0, 0.02, 0.079], [-0.5, 0, 0]);
  // 弹匣
  P.add('mag', rbox(0.024, 0.1, 0.034, 0.004), [0, -0.06, 0.047], [-0.22, 0, 0]);
  P.add('mag', rbox(0.033, 0.008, 0.054, 0.003), [0, -0.113, 0.0585], [-0.22, 0, 0]);
  return finishGun(P, {
    paint: ['slide', 'skin'],
    stock: { slide: M.chrome, skin: M.chrome, grip: M.polymer, dark: M.black, slideDark: M.black, slideMetal: M.darkSteel, mag: M.darkSteel },
    moving: { slide: ['slide', 'slideDark', 'slideMetal'], mag: ['mag'] },
    muzzle: [0, 0.033, -0.15], eject: [0.018, 0.045, 0.0], uvY: 0.02,
  });
}

/* ---------------- AWP ---------------- */
export function buildAWP() {
  const M = materials();
  const P = new Parts();
  P.add('skin', extrudeZY(
    [[-0.4, -0.012], [-0.4, 0.02], [-0.37, 0.028], [0.11, 0.028], [0.15, 0.05], [0.4, 0.05], [0.41, -0.09], [0.36, -0.102],
      [0.13, -0.112], [0.085, -0.112], [0.07, -0.036], [-0.3, -0.036]],
    0.05, 0.009,
    [[[0.155, 0.022], [0.31, 0.022], [0.315, -0.068], [0.165, -0.078]]],
  ));
  P.add('metal', rbox(0.04, 0.112, 0.012, 0.004), [0, -0.022, 0.416]);
  // 机匣 / 枪管
  P.add('skin', rbox(0.038, 0.036, 0.3, 0.012), [0, 0.045, -0.06]);
  P.add('metal', cylZ(0.009, 0.52, 16, 0.0115), [0, 0.045, -0.47]);
  P.add('metal', cylZ(0.0155, 0.065), [0, 0.045, -0.755]);
  for (let i = 0; i < 3; i++) P.add('dark', box(0.034, 0.007, 0.008), [0, 0.045, -0.737 - i * 0.017]);
  P.add('dark', cylZ(0.006, 0.002), [0, 0.045, -0.7885]);
  // 瞄准镜
  P.add('metal', cylZ(0.016, 0.26, 20), [0, 0.105, -0.03]);
  P.add('metal', cylZ(0.027, 0.07, 24, 0.0165), [0, 0.105, -0.19]);
  P.add('metal', cylZ(0.027, 0.035, 24), [0, 0.105, -0.2425]);
  P.add('metal', cylZ(0.0165, 0.05, 24, 0.022), [0, 0.105, 0.125]);
  P.add('metal', cylZ(0.022, 0.03, 24), [0, 0.105, 0.165]);
  P.add('metal', cylY(0.0115, 0.022, 14), [0, 0.13, -0.03]);
  P.add('metal', cylX(0.0115, 0.022, 14), [0.026, 0.105, -0.03]);
  P.add('metal', rbox(0.018, 0.034, 0.022, 0.003), [0, 0.076, -0.1]);
  P.add('metal', rbox(0.018, 0.034, 0.022, 0.003), [0, 0.076, 0.05]);
  const l1 = new THREE.CircleGeometry(0.0245, 24); l1.rotateY(PI); P.add('lens', l1, [0, 0.105, -0.2595]);
  P.add('lens', new THREE.CircleGeometry(0.019, 24), [0, 0.105, 0.1795]);
  // 拉机柄
  P.add('bolt', cylX(0.005, 0.04), [0.036, 0.047, 0.07]);
  P.add('bolt', new THREE.SphereGeometry(0.0105, 14, 10), [0.06, 0.042, 0.07]);
  // 弹匣 / 扳机
  P.add('mag', rbox(0.03, 0.05, 0.078, 0.005), [0, -0.052, -0.04]);
  P.add('metal', box(0.012, 0.003, 0.06), [0, -0.06, 0.04]);
  P.add('metal', box(0.005, 0.02, 0.005), [0, -0.046, 0.045], [0.3, 0, 0]);
  return finishGun(P, {
    paint: ['skin'],
    stock: { skin: M.olive, dark: M.black, lens: M.lens, bolt: M.steel, mag: M.darkSteel },
    moving: { mag: ['mag'], bolt: ['bolt'] },
    muzzle: [0, 0.045, -0.8], eject: [0.03, 0.05, 0.0], uvY: -0.01,
  });
}

/* ---------------- 刀通用 ---------------- */
function finishKnife(group, bladeMesh, extra) {
  const M = materials();
  return Object.assign({
    kind: 'knife', group, parts: {},
    setSkin(id) {
      const sm = skinMaterial('knife', id);
      if (sm) sm.side = THREE.DoubleSide;
      bladeMesh.material = sm || M.steel;
    },
  }, extra);
}
function bladeMeshOf(geo) {
  const m = new THREE.Mesh(geo, materials().steel);
  m.castShadow = true; m.name = 'blade';
  return m;
}

/* ---------------- M9 刺刀 ---------------- */
export function buildM9() {
  const M = materials();
  const S = pathFn([[0.6, line([0.017, 0], [0.017, 0.112])], [1, (t) => bez([0.017, 0.112], [0.0085, 0.142], [0.003, 0.186], t)]]);
  const E = pathFn([[0.55, line([-0.017, 0], [-0.017, 0.1])], [1, (t) => bez([-0.017, 0.1], [-0.017, 0.162], [0.003, 0.186], t)]]);
  const blade = bladeMeshOf(loftBlade(S, E, { thick: 0.0052, grind: 0.42, n: 48 }));
  const P = new Parts();
  for (let i = 0; i < 9; i++) P.add('dark', box(0.0045, 0.0032, 0.0056), [0.0162, 0.03 + i * 0.0068, 0], [0, 0, 0.5]); // 锯齿
  P.add('steel', rbox(0.064, 0.011, 0.017, 0.004), [0.004, -0.0045, 0]);
  const ring = new THREE.TorusGeometry(0.0095, 0.0032, 10, 22); ring.rotateX(PI / 2);
  P.add('steel', ring, [0.043, -0.0045, 0]);
  P.add('handle', cylY(0.0128, 0.1, 18), [0, -0.06, 0], [0, 0, 0], [1.18, 1, 0.92]);
  for (let i = 0; i < 7; i++) P.add('handle', cylY(0.0141, 0.0045, 18), [0, -0.022 - i * 0.0125, 0], [0, 0, 0], [1.18, 1, 0.92]);
  P.add('steel', rbox(0.033, 0.016, 0.021, 0.005), [0, -0.117, 0]);
  P.add('dark', cylZ(0.003, 0.022, 10), [0, -0.117, 0]);
  const group = new THREE.Group();
  group.add(blade, P.mesh('dark', M.black), P.mesh('steel', M.steel), P.mesh('handle', M.oliveGrip));
  return finishKnife(group, blade, { type: 'm9', gripY: -0.062 });
}

/* ---------------- 爪子刀 Karambit ---------------- */
export const KARAMBIT_RING = [0, -0.113, 0];
export function buildKarambit() {
  const M = materials();
  const S = (t) => bez([0.018, 0], [0.023, 0.1], [-0.064, 0.106], t);
  const E = (t) => bez([-0.016, 0], [-0.011, 0.07], [-0.064, 0.106], t);
  const blade = bladeMeshOf(loftBlade(S, E, { thick: 0.0048, grind: 0.5, n: 48, taper: 0.8 }));
  const P = new Parts();
  const sh = new THREE.Shape();
  sh.moveTo(-0.0155, 0.002);
  sh.quadraticCurveTo(-0.019, -0.022, -0.0135, -0.04);
  sh.quadraticCurveTo(-0.018, -0.062, -0.0115, -0.098);
  sh.lineTo(0.0115, -0.098);
  sh.quadraticCurveTo(0.018, -0.06, 0.0195, -0.03);
  sh.quadraticCurveTo(0.02, -0.01, 0.0175, 0.002);
  sh.closePath();
  P.add('g10', extrudeXY(sh, 0.0145, 0.004, 3));
  P.add('steel', rbox(0.037, 0.011, 0.0125, 0.003), [0.001, -0.001, 0]);
  for (const [x, y] of [[0.002, -0.022], [0.002, -0.052], [0.001, -0.082]]) P.add('steel', cylZ(0.0032, 0.0152, 12), [x, y, 0]);
  P.add('steel', new THREE.TorusGeometry(0.0155, 0.0046, 12, 30), KARAMBIT_RING);
  const group = new THREE.Group();
  group.add(blade, P.mesh('g10', M.g10), P.mesh('steel', M.steel));
  return finishKnife(group, blade, { type: 'karambit', gripY: -0.05 });
}

/* ---------------- 蝴蝶刀 Butterfly ---------------- */
export const BFLY_PIN = 0.006; // 两个轴销相对刀身中线的 x 偏移
export function buildButterfly() {
  const M = materials();
  const S = pathFn([[0.62, line([0.0105, 0], [0.0105, 0.07])], [1, (t) => bez([0.0105, 0.07], [0.009, 0.097], [-0.002, 0.114], t)]]);
  const E = pathFn([[0.5, line([-0.0105, 0], [-0.0105, 0.058])], [1, (t) => bez([-0.0105, 0.058], [-0.0115, 0.1], [-0.002, 0.114], t)]]);
  const blade = bladeMeshOf(loftBlade(S, E, { thick: 0.0034, grind: 0.5, n: 40 }));
  // 刀根 + 轴销
  const T = new Parts();
  T.add('steel', rbox(0.021, 0.018, 0.0034, 0.001), [0, -0.007, 0]);
  T.add('brass', cylZ(0.0028, 0.0125, 12), [-BFLY_PIN, -0.004, 0]);
  T.add('brass', cylZ(0.0028, 0.0125, 12), [BFLY_PIN, -0.004, 0]);
  const handleGeo = () => {
    const sh = new THREE.Shape();
    const w = 0.0052, top = 0.007, bot = -0.118, r = 0.003;
    sh.moveTo(-w, top - r); sh.quadraticCurveTo(-w, top, -w + r, top); sh.lineTo(w - r, top); sh.quadraticCurveTo(w, top, w, top - r);
    sh.lineTo(w, bot + r); sh.quadraticCurveTo(w, bot, w - r, bot); sh.lineTo(-w + r, bot); sh.quadraticCurveTo(-w, bot, -w, bot + r); sh.closePath();
    for (let i = 0; i < 6; i++) { const h = new THREE.Path(); h.absarc(0, -0.022 - i * 0.017, 0.0029, 0, PI * 2, true); sh.holes.push(h); }
    return extrudeXY(sh, 0.0108, 0.0016, 2);
  };
  const mkHandle = (latch) => {
    const P = new Parts();
    P.add('ti', handleGeo());
    P.add('dark', box(0.0022, 0.1, 0.0112), [0, -0.058, 0]);       // 中缝（刀槽）
    if (latch) P.add('brass', rbox(0.004, 0.012, 0.012, 0.0015), [0.004, -0.121, 0]);
    const g = new THREE.Group();
    g.add(P.mesh('ti', M.titanium), P.mesh('dark', M.black));
    if (latch) g.add(P.mesh('brass', M.brass));
    return g;
  };
  const group = new THREE.Group();
  // 安全柄 A 固定在手里；刀身绕 A 的轴销转；B 柄绕刀身另一轴销转
  const handleA = mkHandle(false); handleA.position.set(-BFLY_PIN, -0.004, 0); group.add(handleA);
  const bladePivot = new THREE.Group(); bladePivot.position.set(-BFLY_PIN, -0.004, 0); group.add(bladePivot);
  const bladeHolder = new THREE.Group(); bladeHolder.position.set(BFLY_PIN, 0.004, 0); bladePivot.add(bladeHolder);
  bladeHolder.add(blade, T.mesh('steel', M.steel), T.mesh('brass', M.brass));
  const handleBPivot = new THREE.Group(); handleBPivot.position.set(BFLY_PIN * 2, 0, 0); bladePivot.add(handleBPivot);
  handleBPivot.add(mkHandle(true));
  const k = finishKnife(group, blade, { type: 'butterfly', gripY: -0.075 });
  k.parts = { bladePivot, handleBPivot };
  return k;
}

export const BUILDERS = { ak: buildAK, deagle: buildDeagle, awp: buildAWP, butterfly: buildButterfly, karambit: buildKarambit, m9: buildM9 };
