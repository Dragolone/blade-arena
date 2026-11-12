// 军械库 3D 展台
import * as THREE from 'three';
import { BUILDERS } from './models.js';
import { clamp, damp } from './util.js';

export class Showcase {
  constructor(game) {
    this.game = game;
    const sc = (this.scene = new THREE.Scene());
    sc.background = new THREE.Color(0x06070a);
    sc.fog = new THREE.Fog(0x06070a, 5, 13);
    sc.environment = game.world.envMap; sc.environmentIntensity = 0.8;
    this.camera = new THREE.PerspectiveCamera(30, 1, 0.05, 40);
    this.dist = 3.0; this.distT = 3.0; this.yaw = 0.5; this.pitch = 0.08; this.auto = true; this.idle = 0;

    const floor = new THREE.Mesh(new THREE.CircleGeometry(9, 48), new THREE.MeshStandardMaterial({ color: 0x0c0d11, metalness: 0.7, roughness: 0.32 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; sc.add(floor);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.12, 48), new THREE.MeshStandardMaterial({ color: 0x15171c, metalness: 0.85, roughness: 0.3 }));
    ped.position.y = 0.06; ped.receiveShadow = true; ped.castShadow = true; sc.add(ped);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.012, 8, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 1.6, 0.4) }));
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.125; sc.add(ring);
    this.ring = ring;
    // 背景光柱
    for (let i = 0; i < 7; i++) {
      if (i === 3) continue;
      const a = -1.2 + i * 0.4, c = i % 2 ? new THREE.Color(0.2, 1.4, 1.9) : new THREE.Color(1.9, 0.3, 1.3);
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.035, 3.2, 0.035), new THREE.MeshBasicMaterial({ color: c }));
      m.position.set(Math.sin(a) * 5.5, 1.6, -Math.cos(a) * 5.5); sc.add(m);
    }
    const key = new THREE.SpotLight(0xfff1dd, 42, 10, 0.5, 0.7, 2); key.position.set(1.6, 3.6, 2.4); key.target.position.set(0, 1, 0);
    key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0003; key.shadow.radius = 4; sc.add(key, key.target);
    const rim1 = new THREE.PointLight(0x40d8ff, 22, 9, 2); rim1.position.set(-2.2, 1.6, -1.8); sc.add(rim1);
    const rim2 = new THREE.PointLight(0xff40c0, 22, 9, 2); rim2.position.set(2.4, 1.0, -2.0); sc.add(rim2);
    const fill = new THREE.PointLight(0xffd0a0, 14, 9, 2); fill.position.set(-1.5, 1.4, 2.6); sc.add(fill);
    sc.add(new THREE.HemisphereLight(0x8090b0, 0x101014, 0.35));

    this.pivot = new THREE.Group(); this.pivot.position.set(0, 1.08, 0); sc.add(this.pivot);
    this.models = {}; this.cur = null; this.time = 0;
  }

  show(id, skin) {
    if (!this.models[id]) {
      const m = BUILDERS[id]();
      const wrap = new THREE.Group();
      if (m.kind === 'gun') m.group.rotation.y = Math.PI / 2; else m.group.rotation.z = -0.9;
      wrap.add(m.group);
      // 居中 + 统一显示尺寸
      wrap.updateMatrixWorld(true);
      const bb = new THREE.Box3().setFromObject(wrap), c = bb.getCenter(new THREE.Vector3()), s = bb.getSize(new THREE.Vector3());
      const k = (id === 'deagle' ? 0.72 : m.kind === 'gun' ? 1.3 : 0.82) / Math.max(s.x, s.y, s.z);
      m.group.position.sub(c); wrap.scale.setScalar(k);
      wrap.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      this.pivot.add(wrap);
      this.models[id] = { m, wrap };
    }
    for (const [k, v] of Object.entries(this.models)) v.wrap.visible = k === id;
    this.models[id].m.setSkin(skin);
    if (this.cur !== id) { this.cur = id; this.yaw = 0.55; this.auto = true; }
  }
  drag(dx, dy) { this.yaw += dx * 0.008; this.pitch = clamp(this.pitch + dy * 0.005, -0.5, 0.9); this.auto = false; this.idle = 0; }
  zoom(d) { this.distT = clamp(this.distT + d * 0.0015, 1.8, 4.5); }

  update(dt, aspect) {
    this.time += dt;
    if (!this.auto) { this.idle += dt; if (this.idle > 4) this.auto = true; }
    if (this.auto) this.yaw += dt * 0.35;
    this.dist = damp(this.dist, this.distT, 8, dt);
    this.pivot.rotation.y = this.yaw;
    this.pivot.position.y = 1.08 + Math.sin(this.time * 1.2) * 0.02;
    const cam = this.camera;
    if (cam.aspect !== aspect) { cam.aspect = aspect; cam.updateProjectionMatrix(); }
    cam.position.set(0, 1.12 + Math.sin(this.pitch) * this.dist, Math.cos(this.pitch) * this.dist);
    cam.lookAt(0, 1.05, 0);
    this.ring.material.color.setRGB(3.2 + Math.sin(this.time * 2) * 0.6, 1.6, 0.4);
  }
}
