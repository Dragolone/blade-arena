// 手雷：G 键快速投掷。第一人称投掷动作 + 世界中的弹跳物理 + 引信爆炸
import * as THREE from 'three';
import { buildHand } from './models.js';
import { kf, kfv, clamp, rand } from './util.js';

const PER_WAVE = 3;            // 每波补满的数量
const FUSE = 1.7;              // 出手后多久爆炸（秒）
const THROW_TIME = 0.55;       // 第一人称投掷动作时长
const RELEASE = 0.24;          // 动作进行到这里出手
const SPEED = 17, GRAV = 18, BOUNCE = 0.38, RADIUS = 0.07;
const DMG = 300, BLAST = 5.5;

function grenadeMesh() {
  const g = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: 0x3b4a2c, metalness: 0.35, roughness: 0.6 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x9a9fa6, metalness: 1, roughness: 0.3 });
  const shell = new THREE.Mesh(new THREE.SphereGeometry(0.036, 18, 14), body); shell.scale.set(1, 1.18, 1); g.add(shell);
  for (let i = 0; i < 3; i++) { // 外壳上的凹槽
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.0335 - Math.abs(i - 1) * 0.008, 0.0028, 6, 24), body);
    r.rotation.x = Math.PI / 2; r.position.y = (i - 1) * 0.022; g.add(r);
  }
  const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.013, 0.022, 12), metal); fuse.position.y = 0.049; g.add(fuse);
  const spoon = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.062, 0.005), metal); spoon.position.set(0, 0.03, 0.035); spoon.rotation.x = 0.18; g.add(spoon);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.011, 0.0022, 6, 18), metal); ring.position.set(0.018, 0.058, 0); ring.rotation.y = Math.PI / 2; g.add(ring);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

export class Grenades {
  constructor(game) {
    this.game = game;
    this.count = PER_WAVE; this.max = PER_WAVE;
    this.live = [];
    this.throwT = -1; this.released = false;
    this._v = new THREE.Vector3(); this._d = new THREE.Vector3(); this._r = new THREE.Vector3(); this._u = new THREE.Vector3();
    this._hit = {}; this._pose = [0, 0, 0, 0, 0, 0];
    // 第一人称：一只握着手雷的手，跟随相机
    this.vm = new THREE.Group(); this.vm.visible = false;
    const hand = buildHand({ pos: [0, 0, 0], armTo: [0.06, -0.32, 0.42], scale: 1 });
    const held = grenadeMesh(); held.position.set(-0.006, 0.045, -0.022); held.scale.setScalar(0.9);
    this.vm.add(hand, held);
    this.vm.traverse((o) => { if (o.isMesh) { o.frustumCulled = false; o.castShadow = false; } });
    game.weapons.root.add(this.vm);
  }

  get busy() { return this.throwT >= 0; }
  refill() { this.count = this.max; this.game.ui.setGrenades(this.count); }
  reset() {
    for (const n of this.live) this.game.world.scene.remove(n.m);
    this.live.length = 0; this.throwT = -1; this.vm.visible = false; this.refill();
  }

  throw() {
    const g = this.game;
    if (this.busy || this.count <= 0 || g.player.dead) { if (this.count <= 0 && !this.busy) g.audio.dry(); return; }
    const ws = g.weapons;
    if (ws.state === 'inspect') { ws.state = 'idle'; ws.events.length = 0; }
    ws.setScope(false); ws.wantScope = false;
    this.count--; g.ui.setGrenades(this.count);
    this.throwT = 0; this.released = false; this.vm.visible = true;
    g.audio.click(0.02, 1.6, 0.5);          // 拔保险
    g.audio.swish(true, RELEASE - 0.08);
  }

  // 投掷时主武器下沉的程度（0..1），给 WeaponSystem 用
  dip() { return this.throwT < 0 ? 0 : kf(this.throwT, [[0, 0], [0.1, 1], [THROW_TIME - 0.12, 1], [THROW_TIME, 0]]); }

  _release() {
    const g = this.game, cam = g.camera, d = this._d, r = this._r, u = this._u;
    cam.getWorldDirection(d); r.crossVectors(d, cam.up).normalize(); u.crossVectors(r, d);
    const p = this._v.copy(cam.position).addScaledVector(d, 0.45).addScaledVector(r, 0.12).addScaledVector(u, -0.05);
    // 起点不能在墙里：从眼睛往出手点打一条射线
    const o = cam.position, dx = p.x - o.x, dy = p.y - o.y, dz = p.z - o.z, l = Math.hypot(dx, dy, dz);
    const t = g.world.raycast(o.x, o.y, o.z, dx / l, dy / l, dz / l, l, null);
    if (t !== Infinity) p.copy(o).addScaledVector(d, Math.max(0, t - 0.15));
    const m = grenadeMesh(); m.position.copy(p); g.world.scene.add(m);
    const v = new THREE.Vector3().copy(d).multiplyScalar(SPEED).addScaledVector(u, 2.6).add(g.player.vel);
    this.live.push({ m, v, fuse: FUSE, spin: new THREE.Vector3(rand(-14, 14), rand(-6, 6), rand(-14, 14)), lastBounce: 0 });
  }

  _explode(n) {
    const g = this.game, p = n.m.position;
    g.world.scene.remove(n.m);
    g.explodeAt(p.x, p.z, BLAST, DMG, true, 0.9, p.y);
  }

  update(dt) {
    const g = this.game, w = g.world, hit = this._hit;
    // ---- 第一人称投掷动作 ----
    if (this.throwT >= 0) {
      this.throwT += dt;
      const P = kfv(this.throwT, [
        [0, [0.2, -0.44, -0.44, 0, 0, 0]],
        [0.13, [0.17, -0.11, -0.4, 0.5, 0, -0.15]],             // 举到耳边蓄力
        [RELEASE, [0.06, -0.08, -0.64, -0.35, 0, 0.15]],        // 向前甩出
        [THROW_TIME, [0.12, -0.5, -0.52, -0.5, 0, 0.2]],        // 收手下沉
      ], this._pose);
      this.vm.position.set(P[0], P[1], P[2]); this.vm.rotation.set(P[3], P[4], P[5]);
      this.vm.children[1].visible = !this.released;
      if (!this.released && this.throwT >= RELEASE) { this.released = true; this._release(); }
      if (this.throwT >= THROW_TIME) { this.throwT = -1; this.vm.visible = false; }
    }
    // ---- 世界中的手雷 ----
    for (let i = this.live.length - 1; i >= 0; i--) {
      const n = this.live[i], p = n.m.position, v = n.v;
      n.fuse -= dt; n.lastBounce += dt;
      if (n.fuse <= 0) { this._explode(n); this.live.splice(i, 1); continue; }
      v.y -= GRAV * dt;
      // 分步推进，碰到碰撞盒或地面就反弹
      let remain = v.length() * dt;
      for (let k = 0; k < 3 && remain > 1e-5; k++) {
        const sp = v.length(); if (sp < 1e-4) break;
        const dx = v.x / sp, dy = v.y / sp, dz = v.z / sp;
        const t = w.raycast(p.x, p.y, p.z, dx, dy, dz, remain + RADIUS, hit);
        if (t === Infinity) { p.x += dx * remain; p.y += dy * remain; p.z += dz * remain; break; }
        const go = Math.max(0, t - RADIUS);
        p.x += dx * go; p.y += dy * go; p.z += dz * go; remain -= go;
        // 反射：法向分量反向并衰减，切向分量摩擦
        const vn = v.x * hit.nx + v.y * hit.ny + v.z * hit.nz;
        v.x -= (1 + BOUNCE) * vn * hit.nx; v.y -= (1 + BOUNCE) * vn * hit.ny; v.z -= (1 + BOUNCE) * vn * hit.nz;
        const fr = hit.ny > 0.5 ? 0.72 : 0.85; v.x *= fr; v.z *= fr; remain *= 0.5;
        if (Math.abs(vn) > 2.2 && n.lastBounce > 0.08) { n.lastBounce = 0; g.sfx3d('grenadeBounce', p.x, p.y, p.z); }
        n.spin.multiplyScalar(0.7);
      }
      if (p.y < RADIUS) { p.y = RADIUS; if (v.y < 0) v.y = 0; v.x *= 1 - 3 * dt; v.z *= 1 - 3 * dt; }
      n.m.rotation.x += n.spin.x * dt; n.m.rotation.y += n.spin.y * dt; n.m.rotation.z += n.spin.z * dt;
      // 引信火星
      if (Math.random() < 0.5) g.fx.sparks.emit(p.x, p.y + 0.05, p.z, rand(-0.3, 0.3), rand(0.3, 0.9), rand(-0.3, 0.3), 0.25, 0.04, 3.5, 2, 0.6, 1, 2, 1);
    }
  }
}
