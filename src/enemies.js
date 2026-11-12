// 敌人：机械士兵 AI、能量弹、Boss
import * as THREE from 'three';
import { rand, clamp, damp, pick, lerp } from './util.js';
import { HALF } from './world.js';

export const ENEMY_TYPES = {
  grunt: { name: '机械步兵', hp: 100, speed: 3.3, scale: 1, body: 0x39404b, accent: [3.4, 0.7, 0.2], bolt: 0xff6a2a, score: 100, ranged: true, range: [8, 26], fireDelay: [1.2, 2.2], burst: 1, burstGap: 0.1, boltDmg: 9, boltSpeed: 30, spread: 0.035 },
  rusher: { name: '突袭者', hp: 60, speed: 6.3, scale: 0.92, body: 0x4a1f24, accent: [4, 0.25, 0.3], score: 120, melee: true, meleeDmg: 13 },
  heavy: { name: '重装机兵', hp: 420, speed: 2.1, scale: 1.32, body: 0x4b4a33, accent: [3.2, 2.4, 0.3], bolt: 0xffd040, score: 300, ranged: true, range: [6, 24], fireDelay: [2.2, 3.4], burst: 5, burstGap: 0.12, boltDmg: 8, boltSpeed: 27, spread: 0.06 },
  boss: { name: '毁灭者', hp: 3200, speed: 2.5, scale: 2.3, body: 0x17181c, accent: [3.2, 0.5, 4.2], bolt: 0xc060ff, score: 2500, ranged: true, boss: true, range: [0, 40], fireDelay: [1.6, 2.4], burst: 1, burstGap: 0.085, boltDmg: 11, boltSpeed: 26, spread: 0.03, meleeDmg: 30 },
};

const G = {}; // 共享几何
function geo(key, w, h, d) { return G[key] || (G[key] = new THREE.BoxGeometry(w, h, d)); }
const accentMats = {};
function accentMat(type) {
  if (!accentMats[type]) { const c = ENEMY_TYPES[type].accent; accentMats[type] = new THREE.MeshBasicMaterial({ color: new THREE.Color(c[0], c[1], c[2]) }); }
  return accentMats[type];
}
const jointMat = new THREE.MeshStandardMaterial({ color: 0x15171a, metalness: 0.8, roughness: 0.5 });

function buildRobot(type) {
  const T = ENEMY_TYPES[type];
  const body = new THREE.MeshStandardMaterial({ color: T.body, metalness: 0.75, roughness: 0.42, emissive: 0x000000 });
  const acc = accentMat(type);
  const root = new THREE.Group();
  const meshes = [];
  const add = (parent, key, w, h, d, x, y, z, mat = body) => {
    const m = new THREE.Mesh(geo(key, w, h, d), mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); meshes.push(m); return m;
  };
  const hips = new THREE.Group(); root.add(hips);
  add(hips, 'torso', 0.54, 0.56, 0.32, 0, 1.13, 0);
  add(hips, 'chest', 0.44, 0.26, 0.08, 0, 1.24, 0.17);
  add(hips, 'core', 0.16, 0.07, 0.03, 0, 1.24, 0.215, acc);
  add(hips, 'pelvis', 0.42, 0.18, 0.26, 0, 0.8, 0, jointMat);
  add(hips, 'pack', 0.36, 0.4, 0.14, 0, 1.18, -0.22, jointMat);
  const head = new THREE.Group(); head.position.set(0, 1.47, 0); hips.add(head);
  add(head, 'head', 0.27, 0.27, 0.29, 0, 0.14, 0);
  add(head, 'visor', 0.23, 0.07, 0.03, 0, 0.16, 0.142, acc);
  add(head, 'neck', 0.12, 0.08, 0.12, 0, -0.02, 0, jointMat);
  const mkArm = (sx) => {
    const a = new THREE.Group(); a.position.set(sx * 0.345, 1.36, 0); hips.add(a);
    add(a, 'shoulder', 0.2, 0.18, 0.22, 0, 0, 0);
    add(a, 'uarm', 0.13, 0.32, 0.13, 0, -0.2, 0, jointMat);
    add(a, 'larm', 0.14, 0.3, 0.15, 0, -0.5, 0);
    return a;
  };
  const armL = mkArm(-1), armR = mkArm(1);
  if (T.melee) {
    for (const a of [armL, armR]) add(a, 'blade', 0.025, 0.6, 0.09, 0, -0.92, 0.02, acc);
  } else {
    add(armR, 'gun', 0.09, 0.5, 0.12, 0, -0.74, 0.04, jointMat);
    add(armR, 'gunTip', 0.05, 0.06, 0.05, 0, -1.0, 0.04, acc);
    if (T.boss) { add(armL, 'gun', 0.09, 0.5, 0.12, 0, -0.74, 0.04, jointMat); add(armL, 'gunTip', 0.05, 0.06, 0.05, 0, -1.0, 0.04, acc); add(hips, 'crown', 0.7, 0.05, 0.05, 0, 1.5, -0.1, acc); }
  }
  const mkLeg = (sx) => {
    const l = new THREE.Group(); l.position.set(sx * 0.15, 0.8, 0); hips.add(l);
    add(l, 'thigh', 0.18, 0.4, 0.2, 0, -0.2, 0);
    add(l, 'shin', 0.14, 0.4, 0.15, 0, -0.58, 0, jointMat);
    add(l, 'foot', 0.16, 0.09, 0.3, 0, -0.755, 0.05);
    return l;
  };
  const legL = mkLeg(-1), legR = mkLeg(1);
  root.scale.setScalar(T.scale);
  return { root, hips, head, armL, armR, legL, legR, meshes, body };
}

const _v = new THREE.Vector3(), _a = new THREE.Vector3(), _b = new THREE.Vector3(), _f = { x: 0, z: 0 };

export class Enemies {
  constructor(game) {
    this.game = game;
    this.list = [];
    this.bolts = [];
    const bg = new THREE.SphereGeometry(0.09, 8, 6); bg.scale(1, 1, 3.2);
    for (let i = 0; i < 90; i++) {
      const m = new THREE.Mesh(bg, new THREE.MeshBasicMaterial({ color: 0xffffff }));
      m.visible = false; m.frustumCulled = false; game.world.scene.add(m);
      this.bolts.push({ m, v: new THREE.Vector3(), life: 0, dmg: 0 });
    }
    this.bc = 0;
    this.slams = [];
  }

  get alive() { let n = 0; for (const e of this.list) if (!e.dead) n++; return n; }

  clear() {
    for (const e of this.list) this.game.world.scene.remove(e.root);
    this.list.length = 0;
    for (const b of this.bolts) { b.life = 0; b.m.visible = false; }
    this.slams.length = 0;
  }

  spawn(type, x, z, wave = 1) {
    const T = ENEMY_TYPES[type], r = buildRobot(type);
    const hpMul = 1 + (wave - 1) * 0.09;
    const e = Object.assign(r, {
      type, T, x, z, y: 0, vx: 0, vz: 0, yaw: Math.atan2(-x, -z),
      hp: T.hp * hpMul, maxHp: T.hp * hpMul, dmgMul: 1 + (wave - 1) * 0.045, speed: T.speed * (1 + Math.min(wave, 14) * 0.012) * rand(0.92, 1.08),
      dead: false, spawnT: 0.7, flash: 0, walk: rand(6), los: false, losT: rand(0.2),
      fireT: rand(0.6, 1.6), chargeT: 0, burstLeft: 0, burstT: 0, strafe: Math.random() < 0.5 ? 1 : -1, strafeT: rand(1, 2.5),
      atkT: 0, atkCd: 0, didHit: false, radius: 0.42 * T.scale, pattern: 0, summoned: 0, slamT: 0, aimPitch: 0,
    });
    e.root.position.set(x, 0, z); e.root.rotation.y = e.yaw; e.root.scale.setScalar(0.01);
    this.game.world.scene.add(e.root);
    this.list.push(e);
    const g = this.game; g.fx.burst(x, 0.3, z, 0, 1, 0, 26, T.accent, 6, 0.6, 0.08); g.fx.ring(x, 0.06, z, 0.3, 2.2 * T.scale, 0.45, new THREE.Color(T.accent[0], T.accent[1], T.accent[2]).getHex());
    g.sfx3d('spawn', x, 1, z);
    return e;
  }

  // 射线检测：返回 {e, t, head} 或 null
  raycast(o, d, maxDist, skip) {
    let best = maxDist, hit = null, head = false;
    for (const e of this.list) {
      if (e.dead || e.spawnT > 0.35 || (skip && skip.includes(e))) continue;
      const s = e.T.scale;
      // 头（球）
      const hx = e.x - o.x, hy = e.y + 1.61 * s - o.y, hz = e.z - o.z;
      const tc = hx * d.x + hy * d.y + hz * d.z;
      if (tc > 0) {
        const r = 0.21 * s + 0.02, d2 = hx * hx + hy * hy + hz * hz - tc * tc;
        if (d2 < r * r) { const t = tc - Math.sqrt(r * r - d2); if (t > 0 && t < best) { best = t; hit = e; head = true; } }
      }
      // 身体（AABB）
      const hw = 0.36 * s, x0 = e.x - hw, x1 = e.x + hw, z0 = e.z - hw, z1 = e.z + hw, y0 = e.y, y1 = e.y + 1.47 * s;
      const ix = 1 / (d.x || 1e-12), iy = 1 / (d.y || 1e-12), iz = 1 / (d.z || 1e-12);
      let t1 = (x0 - o.x) * ix, t2 = (x1 - o.x) * ix, tmin = Math.min(t1, t2), tmax = Math.max(t1, t2);
      t1 = (y0 - o.y) * iy; t2 = (y1 - o.y) * iy; tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
      t1 = (z0 - o.z) * iz; t2 = (z1 - o.z) * iz; tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
      if (tmax >= Math.max(tmin, 0) && tmin < best && tmin > 0) { best = tmin; hit = e; head = false; }
    }
    return hit ? { e: hit, t: best, head } : null;
  }

  damage(e, amount, info = {}) {
    if (e.dead) return false;
    e.hp -= amount; e.flash = 1;
    const g = this.game, p = info.point;
    if (p) g.fx.burst(p.x, p.y, p.z, -(info.dir?.x || 0) * 0.6, 0.4, -(info.dir?.z || 0) * 0.6, info.head ? 16 : 9, info.head ? [4, 3, 1.2] : [3.5, 1.8, 0.5], 5, 0.4, 0.05);
    if (e.hp <= 0) { this.kill(e, info); return true; }
    // 受击硬直（Boss 免疫）
    if (!e.T.boss) { e.vx *= 0.4; e.vz *= 0.4; if (info.knife) e.fireT = Math.max(e.fireT, 0.6); }
    return false;
  }

  kill(e, info = {}) {
    e.dead = true;
    const g = this.game, sc = g.world.scene, s = e.T.scale, cy = e.y + 1.1 * s;
    const dx = info.dir?.x || 0, dz = info.dir?.z || 0, force = info.force || 3;
    for (const m of e.meshes) {
      sc.attach(m);
      const ox = m.position.x - e.x, oy = m.position.y - cy, oz = m.position.z - e.z;
      g.fx.addDebris(m, ox * 5 + dx * force + rand(-1.5, 1.5), 2.5 + oy * 3 + rand(0, 3.5), oz * 5 + dz * force + rand(-1.5, 1.5), rand(2, 3.2));
    }
    sc.remove(e.root);
    g.fx.burst(e.x, cy, e.z, 0, 0.5, 0, 34 * s, e.T.accent, 8, 0.7, 0.07);
    g.fx.burst(e.x, cy, e.z, 0, 0.5, 0, 14, [4, 2.5, 0.8], 5, 0.5, 0.12);
    g.fx.puff(e.x, cy, e.z, 6, 0.5 * s, 0.2, 0.45, 1.2);
    g.fx.flash(e.x, cy, e.z, 0xffa050, 160 * s, 0.14, 14);
    if (e.T.boss) g.fx.explosion(e.x, 1.4, e.z, 1.8);
    g.sfx3d('enemyDie', e.x, cy, e.z);
    const i = this.list.indexOf(e); if (i >= 0) this.list.splice(i, 1);
    g.onEnemyKilled(e, info);
  }

  fireBolt(x, y, z, dx, dy, dz, speed, dmg, color, size = 1) {
    const b = this.bolts[this.bc]; this.bc = (this.bc + 1) % this.bolts.length;
    b.m.position.set(x, y, z); b.v.set(dx, dy, dz).multiplyScalar(speed);
    b.m.lookAt(x + dx, y + dy, z + dz); b.m.scale.setScalar(size);
    b.m.material.color.set(color).multiplyScalar(3.2); b.m.visible = true; b.life = 4; b.dmg = dmg; b.color = color;
  }

  _shoot(e, spreadMul = 1, yawOff = 0) {
    const g = this.game, pl = g.player, s = e.T.scale;
    const side = e.T.boss && e.burstLeft % 2 === 0 ? -1 : 1;
    const fx = Math.sin(e.yaw), fz = Math.cos(e.yaw);
    const mx = e.x + fx * 0.75 * s - fz * -0.345 * s * side, my = e.y + 1.36 * s, mz = e.z + fz * 0.75 * s + fx * -0.345 * s * side;
    // 预判 + 散布
    const dist = Math.hypot(pl.pos.x - mx, pl.pos.z - mz), lead = (dist / e.T.boltSpeed) * rand(0.35, 0.9);
    _v.set(pl.pos.x + pl.vel.x * lead - mx, pl.pos.y + pl.height * 0.62 - my, pl.pos.z + pl.vel.z * lead - mz).normalize();
    const sp = e.T.spread * spreadMul;
    _v.x += rand(-sp, sp); _v.y += rand(-sp, sp) * 0.7; _v.z += rand(-sp, sp);
    if (yawOff) { const c = Math.cos(yawOff), sn = Math.sin(yawOff), x = _v.x * c + _v.z * sn, z = -_v.x * sn + _v.z * c; _v.x = x; _v.z = z; }
    _v.normalize();
    this.fireBolt(mx, my, mz, _v.x, _v.y, _v.z, e.T.boltSpeed, e.T.boltDmg * e.dmgMul, e.T.bolt, e.T.boss ? 1.5 : e.type === 'heavy' ? 1.15 : 1);
    g.fx.burst(mx, my, mz, _v.x, _v.y, _v.z, 4, e.T.accent, 3, 0.2, 0.06);
    g.sfx3d('enemyShot', mx, my, mz);
  }

  update(dt) {
    const g = this.game, w = g.world, pl = g.player, list = this.list;
    const px = pl.pos.x, pz = pl.pos.z, py = pl.pos.y;
    for (let n = list.length - 1; n >= 0; n--) {
      const e = list[n];
      if (e.dead) continue;
      const T = e.T, s = T.scale;
      if (e.flash > 0) { e.flash = Math.max(0, e.flash - dt * 7); e.body.emissive.setScalar(e.flash * 0.9); }
      if (e.spawnT > 0) {
        e.spawnT -= dt;
        const k = clamp(1 - e.spawnT / 0.7);
        e.root.scale.setScalar(s * (0.2 + 0.8 * k * k * (3 - 2 * k)));
        continue;
      }
      const dx = px - e.x, dz = pz - e.z, dist = Math.hypot(dx, dz) || 0.001, ux = dx / dist, uz = dz / dist;
      e.losT -= dt;
      if (e.losT <= 0) { e.losT = rand(0.12, 0.22); e.los = !w.blockedLine(e.x, e.y + 1.5 * s, e.z, px, py + pl.height * 0.8, pz); }
      let wx = 0, wz = 0, mv = 1;
      const useFlow = () => { if (w.flowDir(e.x, e.z, _f)) { wx = _f.x; wz = _f.z; } else { wx = ux; wz = uz; } };

      if (T.melee) {
        if (e.atkT > 0) mv = 0.15;
        if (e.los && dist < 8) { wx = ux; wz = uz; } else useFlow();
        if (dist < 1.2) mv = 0;
        // 近战攻击
        e.atkCd -= dt;
        if (e.atkT > 0) {
          e.atkT -= dt;
          if (!e.didHit && e.atkT < 0.2) { e.didHit = true; if (dist < 2.3 && Math.abs(py - e.y) < 3) pl.damage(T.meleeDmg * e.dmgMul, e.x, e.z); }
        } else if (dist < 1.9 && Math.abs(py - e.y) < 3 && e.atkCd <= 0) { e.atkT = 0.45; e.atkCd = 0.95; e.didHit = false; g.sfx3d('swish', e.x, 1, e.z); }
      } else {
        const [rmin, rmax] = T.range;
        e.strafeT -= dt; if (e.strafeT <= 0) { e.strafeT = rand(1, 2.8); e.strafe = -e.strafe; }
        if (!e.los || dist > rmax) useFlow();
        else if (dist < rmin) { wx = -ux * 0.8 + -uz * e.strafe * 0.6; wz = -uz * 0.8 + ux * e.strafe * 0.6; mv = 0.8; }
        else if (dist > (rmin + rmax) * 0.5 && !T.boss) { wx = ux * 0.75 + -uz * e.strafe * 0.65; wz = uz * 0.75 + ux * e.strafe * 0.65; mv = 0.8; }
        else if (T.boss) { wx = ux; wz = uz; mv = dist > 6 ? 0.8 : 0; }
        else { wx = -uz * e.strafe; wz = ux * e.strafe; mv = 0.55; }
        if (e.chargeT > 0 || e.burstLeft > 0 || e.slamT > 0) mv *= 0.25;
        // 射击
        if (T.boss) this._bossAI(e, dt, dist);
        else {
          if (e.chargeT > 0) { e.chargeT -= dt; if (e.chargeT <= 0) { e.burstLeft = T.burst; e.burstT = 0; } }
          else if (e.burstLeft > 0) { e.burstT -= dt; if (e.burstT <= 0) { if (e.los) this._shoot(e); e.burstLeft--; e.burstT = T.burstGap; } }
          else if (e.los && dist < rmax + 5) { e.fireT -= dt; if (e.fireT <= 0) { e.fireT = rand(T.fireDelay[0], T.fireDelay[1]); e.chargeT = 0.38; g.sfx3d('charge', e.x, 1.4, e.z); } }
        }
      }
      // 群体分离
      for (let m = 0; m < list.length; m++) {
        const o = list[m]; if (o === e || o.dead) continue;
        const ox = e.x - o.x, oz = e.z - o.z, d2 = ox * ox + oz * oz, rr = e.radius + o.radius + 0.25;
        if (d2 < rr * rr && d2 > 1e-5) { const d = Math.sqrt(d2), k = (rr - d) / rr; wx += (ox / d) * k * 1.6; wz += (oz / d) * k * 1.6; }
      }
      const wl = Math.hypot(wx, wz);
      if (wl > 1) { wx /= wl; wz /= wl; }
      e.vx = damp(e.vx, wx * e.speed * mv, 7, dt); e.vz = damp(e.vz, wz * e.speed * mv, 7, dt);
      e.x += e.vx * dt; e.z += e.vz * dt;
      w.pushOut(e, e.radius, 1.6);
      e.x = clamp(e.x, -HALF + 0.8, HALF - 0.8); e.z = clamp(e.z, -HALF + 0.8, HALF - 0.8);
      // 朝向
      const sp = Math.hypot(e.vx, e.vz);
      const face = e.los || T.boss ? Math.atan2(dx, dz) : sp > 0.3 ? Math.atan2(e.vx, e.vz) : e.yaw;
      let dy = face - e.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
      e.yaw += dy * Math.min(1, dt * (T.boss ? 4 : 9));
      // 动画
      e.walk += sp * dt * (2.6 / s);
      const sw = Math.sin(e.walk) * clamp(sp / 3) * 0.75;
      e.legL.rotation.x = sw; e.legR.rotation.x = -sw;
      e.hips.position.y = Math.abs(Math.cos(e.walk)) * 0.04 * clamp(sp / 3);
      e.root.position.set(e.x, e.y, e.z); e.root.rotation.y = e.yaw; e.root.scale.setScalar(s);
      if (T.melee) {
        if (e.atkT > 0) { const k = 1 - e.atkT / 0.45, a = k < 0.5 ? lerp(0.6, -2.4, k * 2) : lerp(-2.4, 0.4, (k - 0.5) * 2); e.armL.rotation.x = a; e.armR.rotation.x = a * 0.9 - 0.2; }
        else { e.armL.rotation.x = 0.9 - sw * 0.3; e.armR.rotation.x = 0.9 + sw * 0.3; }
        e.hips.rotation.x = clamp(sp / 6) * 0.28;
      } else {
        const pitch = Math.atan2(py + pl.height * 0.6 - (e.y + 1.36 * s), dist);
        e.aimPitch = damp(e.aimPitch, e.los ? pitch : 0, 8, dt);
        const kick = e.burstLeft > 0 ? 0.08 : 0;
        e.armR.rotation.x = -Math.PI / 2 - e.aimPitch + kick + (e.chargeT > 0 ? Math.sin(e.chargeT * 60) * 0.02 : 0);
        e.armL.rotation.x = T.boss ? e.armR.rotation.x : -sw * 0.8;
        if (e.slamT > 0) { const k = clamp(1 - e.slamT / 0.9); e.armL.rotation.x = e.armR.rotation.x = lerp(-Math.PI / 2, -3.0, Math.min(1, k * 1.6)); }
        e.head.rotation.x = -e.aimPitch * 0.6;
      }
    }
    this._updateBolts(dt);
    this._updateSlams(dt);
  }

  _bossAI(e, dt, dist) {
    const g = this.game, T = e.T, pl = g.player;
    // 召唤小怪
    const frac = e.hp / e.maxHp;
    if ((frac < 0.66 && e.summoned === 0) || (frac < 0.33 && e.summoned === 1)) {
      e.summoned++;
      for (let i = 0; i < 3; i++) { const a = e.yaw + (i - 1) * 2.1 + Math.PI; g.spawnAt('rusher', e.x + Math.sin(a) * 3, e.z + Math.cos(a) * 3); }
      g.ui.banner('毁灭者召唤了突袭者！', 1.6);
    }
    if (e.slamT > 0) {
      e.slamT -= dt;
      if (e.slamT <= 0) {
        g.fx.ring(e.x, 0.1, e.z, 1, 16, 0.85, 0xc060ff); this.slams.push({ x: e.x, z: e.z, t: 0, dur: 0.85, r1: 16, dmg: T.meleeDmg * e.dmgMul, hit: false });
        g.fx.burst(e.x, 0.2, e.z, 0, 1, 0, 60, T.accent, 10, 0.7, 0.1); g.fx.puff(e.x, 0.3, e.z, 10, 1.2, 0.3, 0.4, 1.4, 2.5);
        g.audio.slam(clamp(1.2 - dist / 40)); g.shake(0.5);
      }
      return;
    }
    if (e.burstLeft > 0) {
      e.burstT -= dt;
      if (e.burstT <= 0) {
        if (e.pattern === 0) { for (let i = -4; i <= 4; i++) this._shoot(e, 0.5, i * 0.085); e.burstLeft = 0; }
        else { this._shoot(e, 1.6); e.burstLeft--; e.burstT = T.burstGap; }
      }
      return;
    }
    if (e.chargeT > 0) {
      e.chargeT -= dt;
      if (e.chargeT <= 0) { e.burstLeft = e.pattern === 0 ? 1 : 14; e.burstT = 0; }
      return;
    }
    e.fireT -= dt;
    if (e.fireT <= 0) {
      e.fireT = rand(T.fireDelay[0], T.fireDelay[1]);
      if (dist < 9 && Math.random() < 0.75) { e.slamT = 0.9; g.sfx3d('charge', e.x, 2, e.z); g.ui.banner('震荡波！跳起来躲避', 1.1); }
      else { e.pattern = Math.random() < 0.5 ? 0 : 1; e.chargeT = 0.55; g.sfx3d('charge', e.x, 2, e.z); }
    }
  }

  _updateSlams(dt) {
    const pl = this.game.player;
    for (let i = this.slams.length - 1; i >= 0; i--) {
      const s = this.slams[i]; s.t += dt;
      const r = 1 + (s.r1 - 1) * (s.t / s.dur), d = Math.hypot(pl.pos.x - s.x, pl.pos.z - s.z);
      if (!s.hit && Math.abs(d - r) < 0.9) { s.hit = true; if (pl.onGround) pl.damage(s.dmg, s.x, s.z); }
      if (s.t >= s.dur) this.slams.splice(i, 1);
    }
  }

  _updateBolts(dt) {
    const g = this.game, w = g.world, pl = g.player, hit = {};
    for (const b of this.bolts) {
      if (b.life <= 0) continue;
      b.life -= dt;
      const p = b.m.position, sp = b.v.length(), step = sp * dt;
      const dx = b.v.x / sp, dy = b.v.y / sp, dz = b.v.z / sp;
      const t = w.raycast(p.x, p.y, p.z, dx, dy, dz, step, hit);
      // 命中玩家（线段到玩家竖直轴线的最近距离）
      _a.copy(p); _b.copy(p).addScaledVector(b.v, dt);
      const cy = clamp((_a.y + _b.y) / 2, pl.pos.y + 0.25, pl.pos.y + pl.height - 0.1);
      const sx = _b.x - _a.x, sy = _b.y - _a.y, sz = _b.z - _a.z, l2 = sx * sx + sy * sy + sz * sz;
      const k = clamp(((pl.pos.x - _a.x) * sx + (cy - _a.y) * sy + (pl.pos.z - _a.z) * sz) / l2);
      const qx = _a.x + sx * k - pl.pos.x, qy = _a.y + sy * k - cy, qz = _a.z + sz * k - pl.pos.z;
      if (qx * qx + qz * qz < 0.42 * 0.42 && Math.abs(qy) < 0.45 && k * step <= (t === Infinity ? step : t)) {
        pl.damage(b.dmg, p.x - dx * 3, p.z - dz * 3);
        b.life = 0; b.m.visible = false; continue;
      }
      if (t !== Infinity) {
        const hx = p.x + dx * t, hy = p.y + dy * t, hz = p.z + dz * t;
        _v.set(1, 1, 1); const c = b.m.material.color;
        g.fx.burst(hx, hy, hz, hit.nx, hit.ny, hit.nz, 7, [c.r, c.g, c.b], 4, 0.3, 0.06);
        if (hit.collider && hit.collider.barrel && hit.collider.barrel.alive) g.explodeBarrel(hit.collider.barrel);
        b.life = 0; b.m.visible = false; continue;
      }
      p.addScaledVector(b.v, dt);
      if (b.life <= 0 || Math.abs(p.x) > HALF + 2 || Math.abs(p.z) > HALF + 2 || p.y > 30) { b.life = 0; b.m.visible = false; }
    }
  }
}
