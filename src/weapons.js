// 武器系统：第一人称模型、动画（切枪 / 开火 / 换弹 / 检视 / 刀攻击）、射击逻辑
import * as THREE from 'three';
import { BUILDERS, buildHand, KARAMBIT_RING, BFLY_PIN } from './models.js';
import { kf, kfv, clamp, lerp, damp, rand, smooth, easeOut, easeOutBack, PI, TAU } from './util.js';
import { nm } from './i18n.js';

export const SLOTS = ['ak', 'deagle', 'knife', 'awp'];
export const KNIVES = {
  butterfly: { name: '蝴蝶刀', en: 'Butterfly Knife' }, karambit: { name: '爪子刀', en: 'Karambit' },
  m9: { name: 'M9 刺刀', en: 'M9 Bayonet' }, flip: { name: '折叠刀', en: 'Flip Knife' },
};
export const KNIFE_IDS = Object.keys(KNIVES);
export const knifeName = (id) => nm(KNIVES[id]);
export const DEFS = {
  ak: {
    name: 'AK-47', type: 'gun', auto: true, rpm: 600, dmg: 34, headMul: 4, mag: 30, reserve: 120, reloadTime: 2.4, refillAt: 1.35, drawTime: 0.6, inspectTime: 4.4,
    recoilUp: 0.021, recoilSide: 0.007, kick: 0.045, kickRot: 0.06, spread: { base: 0.0012, move: 0.035, air: 0.09, shot: 0.0032, max: 0.028 },
    sfx: 'rifle', tracer: 0xffd28a, pos: [0.2, -0.21, -0.47], rot: [0, 0, 0], moveMul: 0.92, flash: 1,
  },
  deagle: {
    name: '沙漠之鹰', en: 'Desert Eagle', type: 'gun', auto: false, rpm: 270, dmg: 62, headMul: 3.4, mag: 7, reserve: 35, reloadTime: 2.1, refillAt: 1.2, drawTime: 0.45, inspectTime: 4.0,
    recoilUp: 0.05, recoilSide: 0.012, kick: 0.05, kickRot: 0.32, spread: { base: 0.002, move: 0.03, air: 0.08, shot: 0.022, max: 0.05 },
    sfx: 'pistol', tracer: 0xffe6b0, pos: [0.19, -0.165, -0.5], rot: [0, 0, 0], moveMul: 1.0, flash: 1.2,
  },
  knife: { name: '刀', en: 'Knife', type: 'knife', drawTime: 0.7, inspectTime: 5.0, slashDmg: 50, stabDmg: 130, range: 2.5, moveMul: 1.12, pos: [0.185, -0.185, -0.45], rot: [-0.42, 0.62, 0.12] },
  awp: {
    name: 'AWP', type: 'gun', auto: false, rpm: 41, dmg: 170, headMul: 2.5, mag: 5, reserve: 20, reloadTime: 3.3, refillAt: 2.0, drawTime: 0.9, inspectTime: 4.6,
    recoilUp: 0.07, recoilSide: 0.01, kick: 0.09, kickRot: 0.12, spread: { base: 0.0, move: 0.06, air: 0.15, shot: 0, max: 0.2, noScope: 0.07 },
    sfx: 'awp', tracer: 0xc8f0ff, pos: [0.19, -0.215, -0.42], rot: [0, 0, 0], moveMul: 0.82, scope: true, pierce: true, flash: 1.6,
  },
};

const Z6 = [0, 0, 0, 0, 0, 0];
const GUN_INSPECT = [
  [0, Z6], [0.12, [-0.07, 0.035, 0.05, 0.22, 0.75, 0.85]], [0.38, [-0.07, 0.05, 0.05, 0.3, 0.9, 1.0]],
  [0.52, [0.01, 0.04, 0.02, 0.36, -0.32, -0.5]], [0.82, [0.01, 0.05, 0.02, 0.4, -0.42, -0.6]], [1, Z6],
];
const KB = [0.185, -0.185, -0.45, -0.42, 0.62, 0.12]; // 持刀基础姿态（DEFS.knife 的 pos + rot）
const acc = (t) => t * t, lin = (t) => t, dec = (t) => 1 - (1 - t) * (1 - t);
// 刀攻击：绝对姿态关键帧 [px,py,pz, rx,ry,rz]。第 0 帧在出刀时替换成当前姿态，所以连击能顺势衔接
// 横切严格在水平面内：手腕转到掌心朝上 / 朝下（rz = ∓90°），刀身放平，之后只绕竖直轴扫过去，手的高度不变
const HP2 = Math.PI / 2;
const SLASH_F = [ // 正手：右 → 左，掌心朝上，刀刃领先
  [0, KB], [0.09, [0.3, -0.17, -0.45, 0, 1.15, -HP2]], [0.2, [0.13, -0.17, -0.53, 0, 2.2, -HP2], acc],
  [0.3, [-0.01, -0.17, -0.48, 0, 3.0, -HP2], lin], [0.58, [-0.04, -0.175, -0.46, 0, 3.15, -HP2], dec], [1, KB],
];
const SLASH_B = [ // 反手：左 → 右，掌心朝下
  [0, KB], [0.09, [-0.06, -0.17, -0.46, 0.08, 0.55, HP2]], [0.2, [0.08, -0.17, -0.53, 0.08, -0.3, HP2], acc],
  [0.3, [0.26, -0.17, -0.48, 0.08, -1.1, HP2], lin], [0.58, [0.29, -0.175, -0.46, 0.08, -1.2, HP2], dec], [1, KB],
];
const STAB = [ // 重击：收到腰侧 → 直刺
  [0, KB], [0.15, [0.25, -0.22, -0.3, -0.5, 0.4, 0.2]], [0.27, [0.04, -0.14, -0.7, -0.85, 0.25, 0.35], acc],
  [0.5, [0.04, -0.15, -0.66, -0.82, 0.25, 0.35], dec], [1, KB],
];
const HOOK = [ // 爪子刀重击：举起 → 向下钩扎
  [0, KB], [0.17, [0.2, 0.0, -0.38, 0.2, 0.5, 0.1]], [0.29, [0.07, -0.2, -0.6, -0.9, 0.3, 0.3], acc],
  [0.52, [0.06, -0.23, -0.58, -0.95, 0.3, 0.3], dec], [1, KB],
];
const SLASH_HIT = 0.2, HEAVY_HIT = { m9: 0.27, butterfly: 0.27, karambit: 0.29, flip: 0.27 };
// 检视展示：前臂基本不动，靠翻腕（绕前臂轴旋转）依次亮出刀的两面
const KNIFE_ARM = [0.12, -0.45, 0.4]; // 持刀前臂末端（肘部方向）
const FOREARM = new THREE.Vector3(KNIFE_ARM[0] - 0.022, KNIFE_ARM[1] + 0.018, KNIFE_ARM[2] - 0.045).normalize();
const qAxis = (x, y, z, a) => new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(x, y, z), a);
const Q_SHOW1 = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.15, 1.3, 0, 'ZYX'));           // 掌心朝自己
const Q_SHOWM = qAxis(0, 0, 1, -0.2).multiply(Q_SHOW1.clone().multiply(new THREE.Quaternion().setFromAxisAngle(FOREARM, -PI / 2)));
const Q_SHOW2 = qAxis(0, 0, 1, -0.4).multiply(Q_SHOW1.clone().multiply(new THREE.Quaternion().setFromAxisAngle(FOREARM, -PI))); // 手背朝自己
const P_SHOW1 = [0.03, -0.17, -0.42], P_SHOW2 = [0.09, -0.13, -0.42];

function makeTrail() { // 横切刀光
  const N = 26, pos = [], col = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const k = i / N, a = 1.2 - k * 2.5, ro = 0.3, ri = 0.3 - 0.04 * k, c = k * k;
    pos.push(Math.sin(a) * ro, 0, -Math.cos(a) * ro, Math.sin(a) * ri, 0, -Math.cos(a) * ri);
    col.push(c, c, c, c * 0.35, c * 0.35, c * 0.35);
    if (i < N) { const j = i * 2; idx.push(j, j + 1, j + 2, j + 1, j + 3, j + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, side: THREE.DoubleSide, color: new THREE.Color(1.5, 1.7, 2.1) }));
  m.frustumCulled = false; m.visible = false; m.userData.count = N * 6;
  return m;
}

function makeFlash() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), s = 128;
  const gr = g.createRadialGradient(s / 2, s / 2, 2, s / 2, s / 2, s / 2);
  gr.addColorStop(0, 'rgba(255,255,235,1)'); gr.addColorStop(0.25, 'rgba(255,205,100,0.9)'); gr.addColorStop(1, 'rgba(255,120,20,0)');
  g.fillStyle = gr; g.translate(s / 2, s / 2);
  for (let i = 0; i < 5; i++) { g.rotate(TAU / 5); g.beginPath(); g.moveTo(0, 0); g.lineTo(-11, -s / 2); g.lineTo(11, -s / 2); g.closePath(); g.fill(); }
  g.beginPath(); g.arc(0, 0, s * 0.2, 0, 7); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, color: new THREE.Color(3, 2.4, 1.6) });
  const grp = new THREE.Group();
  const p1 = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.24), mat); grp.add(p1);
  const p2 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.1), mat); p2.rotation.y = PI / 2; p2.position.z = -0.08; grp.add(p2);
  const p3 = p2.clone(); p3.rotation.set(0, PI / 2, PI / 2); grp.add(p3);
  grp.visible = false;
  return grp;
}

export class WeaponSystem {
  constructor(game) {
    this.game = game;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(52, 1, 0.01, 8);
    this.scene.environment = game.world.envMap; this.scene.environmentIntensity = 0.9;
    this.hemi = new THREE.HemisphereLight(0xbcd0ff, 0x6a5040, 0.9); this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffc890, 3.4); this.sun.position.copy(game.world.sunDir); this.scene.add(this.sun);
    this.fill = new THREE.DirectionalLight(0xdfe6ff, 1.1); this.scene.add(this.fill); // 跟随相机的补光，保证皮肤任何朝向都看得清
    this.flashLight = new THREE.PointLight(0xffb060, 0, 3, 2); this.scene.add(this.flashLight);
    this.root = new THREE.Group(); this.scene.add(this.root);   // 跟随相机朝向
    this.sway = new THREE.Group(); this.root.add(this.sway);
    this.flash = makeFlash(); this.scene.add(this.flash);
    this.trail = makeTrail(); this.root.add(this.trail); this.trailT = 9; this.trailDir = 1;
    this.showQ = new THREE.Quaternion(); this.showK = 0; this._qt = new THREE.Quaternion();
    this.fingerOpen = 0; this.fingerCur = 0; this.hitStop = 0; this.pose = KB.slice(); this.atkKeys = SLASH_F;

    this.views = {};
    this._buildViews();
    this.ammo = {}; this.resetAmmo();
    this.cur = 'ak'; this.last = 'deagle';
    this.state = 'draw'; this.t = 0;          // draw | idle | reload | inspect | attack | bolt
    this.cd = 0; this.shots = 0; this.shotDecay = 0;
    this.kick = 0; this.kickRot = 0; this.slideT = 1; this.flashT = 0;
    this.swayX = 0; this.swayY = 0; this.bob = 0; this.sprintK = 0; this.landK = 0; this.lit = 1;
    this.scoped = false; this.wantScope = false; this.scopeK = 0;
    this.atk = null; this.atkDir = 1; this.atkHit = false;
    this.events = []; // 动画触发的声音等
    this.A = [0, 0, 0, 0, 0, 0]; this.tmp = [0, 0, 0, 0, 0, 0];
    this._v = new THREE.Vector3(); this._v2 = new THREE.Vector3(); this._q = new THREE.Quaternion();
    this.spreadNow = 0;
    this.setLoadout(game.loadout);
    this.equip('ak', true);
  }

  resetAmmo() {
    const p = this.game.perks || {};
    for (const id of ['ak', 'deagle', 'awp']) {
      const mag = Math.round(DEFS[id].mag * (1 + 0.3 * (p.mag || 0)));
      this.ammo[id] = { mag, max: mag, reserve: DEFS[id].reserve };
    }
  }
  refill() { for (const id of ['ak', 'deagle', 'awp']) { const a = this.ammo[id]; const max = Math.round(DEFS[id].mag * (1 + 0.3 * (this.game.perks.mag || 0))); a.max = max; a.mag = max; a.reserve = DEFS[id].reserve; } }
  addAmmo(frac) { for (const id of ['ak', 'deagle', 'awp']) { const a = this.ammo[id]; a.reserve = Math.min(DEFS[id].reserve * 1.5, a.reserve + Math.ceil(DEFS[id].reserve * frac)); } }

  /* ---------- 构建第一人称模型 ---------- */
  _buildViews() {
    const mk = (id, def, model, hands) => {
      const holder = new THREE.Group(); holder.visible = false;
      holder.add(model.group);
      const v = { id, def, holder, model, hands: {} };
      for (const [k, h] of Object.entries(hands)) { holder.add(h); v.hands[k] = h; }
      this.sway.add(holder); this.views[id] = v;
      holder.traverse((o) => { if (o.isMesh) { o.frustumCulled = false; o.castShadow = false; } });
      return v;
    };
    const a = 0.32, gripBasis = (a) => [[1, 0, 0], [0, Math.cos(a), -Math.sin(a)], [0, Math.sin(a), Math.cos(a)]];
    const leftBasis = [[0, -1, 0], [0, 0, -1], [-1, 0, 0]];
    mk('ak', DEFS.ak, BUILDERS.ak(), {
      r: buildHand({ pos: [0.002, -0.082, 0.112], basis: gripBasis(a), armTo: [0.2, -0.42, 0.62], scale: 1.12 }),
      l: buildHand({ pos: [0, -0.012, -0.23], basis: leftBasis, armTo: [-0.3, -0.36, 0.3], scale: 1.32 }),
    });
    mk('deagle', DEFS.deagle, BUILDERS.deagle(), {
      r: buildHand({ pos: [0.002, -0.062, 0.05], basis: gripBasis(0.22), armTo: [0.16, -0.36, 0.7], scale: 1.1 }),
    });
    mk('awp', DEFS.awp, BUILDERS.awp(), {
      r: buildHand({ pos: [0.002, -0.078, 0.108], basis: gripBasis(0.16), armTo: [0.2, -0.42, 0.62], scale: 1.12 }),
      l: buildHand({ pos: [0, -0.012, -0.22], basis: leftBasis, armTo: [-0.3, -0.36, 0.3], scale: 1.34 }),
    });
    // 刀：握拳在 holder 原点，刀模型旋转成「刀身平面 = 视线 YZ 平面」
    for (const id of KNIFE_IDS) {
      const model = BUILDERS[id]();
      const mount = new THREE.Group(); mount.rotation.y = -PI / 2;
      const spin = new THREE.Group(); mount.add(spin);
      spin.add(model.group);
      const toss = new THREE.Group(); toss.add(mount); // 抛刀：只转刀不转手
      const v = mk(id, DEFS.knife, { group: toss }, { r: buildHand({ pos: [0, 0, 0], armTo: KNIFE_ARM, scale: 1 }) });
      v.model = model; v.mount = mount; v.spin = spin; v.toss = toss;
      if (id === 'karambit') { spin.position.set(...KARAMBIT_RING); model.group.position.set(-KARAMBIT_RING[0], -KARAMBIT_RING[1], -KARAMBIT_RING[2]); }
      // 让握把穿过拳心
      v.mountBase = new THREE.Vector3(0, -model.gripY, id === 'butterfly' ? BFLY_PIN : 0);
      mount.position.copy(v.mountBase);
    }
  }

  setLoadout(lo) {
    this.views.ak.model.setSkin(lo.skins.ak); this.views.deagle.model.setSkin(lo.skins.deagle); this.views.awp.model.setSkin(lo.skins.awp);
    for (const id of KNIFE_IDS) this.views[id].model.setSkin(lo.skins[id]);
  }
  get view() { return this.views[this.cur === 'knife' ? this.game.loadout.knife : this.cur]; }
  get def() { return DEFS[this.cur]; }
  get displayName() { return this.cur === 'knife' ? knifeName(this.game.loadout.knife) : nm(this.def); }

  equip(id, instant = false) {
    if (!instant && id === this.cur && this.state !== 'holster') return;
    if (id !== this.cur) this.last = this.cur;
    for (const v of Object.values(this.views)) v.holder.visible = false;
    this.cur = id; this.state = 'draw'; this.t = 0; this.events.length = 0;
    this.setScope(false); this.wantScope = false; this.atk = null; this.shots = 0;
    this.view.holder.visible = true;
    const a = this.game.audio;
    a.draw();
    if (id === 'knife') {
      const k = this.game.loadout.knife;
      if (k === 'butterfly') { this.ev(0.1, () => a.click(0, 1.3, 0.5)); this.ev(0.3, () => a.click(0, 1.5, 0.6)); this.ev(0.48, () => { a.click(0, 1.1, 0.7); a.shing(0, 0.7); }); }
      else if (k === 'karambit') { this.ev(0.08, () => a.swish(false)); this.ev(0.45, () => a.shing(0, 0.6)); }
      else if (k === 'flip') { this.ev(0.16, () => a.click(0, 1.2, 0.5)); this.ev(0.3, () => { a.click(0, 0.9, 0.8); a.shing(0, 0.8); }); }
      else this.ev(0.25, () => a.shing(0, 0.8));
    } else if (id === 'awp') this.ev(0.5, () => a.click(0, 0.8, 0.5)); else this.ev(0.3, () => a.click(0, 0.9, 0.5));
    this.game.ui.setWeapon(this);
  }
  ev(time, fn) { this.events.push({ time, fn }); }
  cycle(dir) { const i = SLOTS.indexOf(this.cur); this.equip(SLOTS[(i + dir + SLOTS.length) % SLOTS.length]); }

  setScope(on) {
    if (this.scoped === on) return;
    this.scoped = on; this.game.ui.setScope(on); if (on) this.game.audio.scope();
  }

  inspect() {
    if (this.state !== 'idle') return;
    this.state = 'inspect'; this.t = 0; this.events.length = 0; this.setScope(false); this.wantScope = false;
    const a = this.game.audio;
    if (this.cur === 'knife') {
      const k = this.game.loadout.knife, T = DEFS.knife.inspectTime;
      if (k === 'butterfly') { [0.05, 0.12, 0.2, 0.28, 0.36, 0.42].forEach((f, i) => this.ev(f * T, () => { a.click(0, 1.1 + (i % 3) * 0.2, 0.6); if (i === 5) a.shing(0, 0.6); })); this.ev(0.72 * T, () => a.swish(false)); }
      else if (k === 'karambit') { [0.07, 0.11, 0.16, 0.22, 0.29].forEach((f) => this.ev(f * T, () => a.swish(false))); this.ev(0.46 * T, () => a.click(0, 0.9, 0.5)); this.ev(0.74 * T, () => a.swish(false)); }
      else if (k === 'flip') { [[0.1, 1.3], [0.33, 1.3]].forEach(([f, p]) => this.ev(f * T, () => a.click(0, p, 0.6))); [0.19, 0.41].forEach((f) => this.ev(f * T, () => { a.click(0, 0.9, 0.8); a.shing(0, 0.7); })); this.ev(0.72 * T, () => a.swish(false)); }
      else { this.ev(0.33 * T, () => a.swish(false)); this.ev(0.75 * T, () => a.swish(false)); this.ev(0.95 * T, () => { a.click(0, 0.8, 0.6); a.shing(0, 0.5); }); }
    } else { this.ev(0.4, () => a.click(0, 0.7, 0.3)); this.ev(this.def.inspectTime * 0.5, () => a.click(0, 0.8, 0.3)); }
  }

  reload() {
    if (this.def.type !== 'gun' || this.state === 'reload' || this.state === 'draw') return;
    const am = this.ammo[this.cur];
    if (am.mag >= am.max || am.reserve <= 0) return;
    this.state = 'reload'; this.t = 0; this.events.length = 0; this.setScope(false); this.wantScope = false;
    const a = this.game.audio, d = this.def, k = this.reloadMul();
    this.ev(d.reloadTime * 0.14 * k, () => a.magOut());
    this.ev(d.refillAt * k - 0.12, () => a.magIn());
    this.ev(d.refillAt * k, () => { const need = am.max - am.mag, take = Math.min(need, am.reserve); am.mag += take; am.reserve -= take; this.game.ui.setWeapon(this); });
    this.ev(d.reloadTime * 0.74 * k, () => a.bolt());
  }
  reloadMul() { return Math.pow(0.82, this.game.perks.reload || 0); }

  /* ---------- 输入 ---------- */
  primary(pressed, held) {
    if (this.def.type === 'knife') { if (pressed || held) this.knifeAttack(false); return; }
    if ((this.def.auto && held) || pressed) this.fire();
  }
  secondary(pressed) {
    if (!pressed) return;
    if (this.def.type === 'knife') this.knifeAttack(true);
    else if (this.def.scope && (this.state === 'idle' || this.state === 'bolt')) { this.wantScope = !this.wantScope; if (this.state === 'idle') this.setScope(this.wantScope); }
  }

  knifeAttack(heavy) {
    if (this.state === 'draw' && this.t < 0.35) return;
    // 横切在收刀阶段就能接下一刀（正手 → 反手连击）
    if (this.state === 'attack' && this.t < this.atkDur * (this.atk === 'slash' ? 0.62 : 0.82)) return;
    const g = this.game, k = g.loadout.knife, from = this.pose.slice();
    this.state = 'attack'; this.t = 0; this.events.length = 0;
    let tpl, hitU;
    if (heavy) { this.atk = 'heavy'; this.atkDur = 0.9; tpl = k === 'karambit' ? HOOK : STAB; hitU = HEAVY_HIT[k]; }
    else { this.atk = 'slash'; this.atkDir = -this.atkDir; this.atkDur = 0.46; tpl = this.atkDir > 0 ? SLASH_F : SLASH_B; hitU = SLASH_HIT; }
    this.atkKeys = tpl.map((key, i) => (i === 0 ? [0, from] : key));
    const hitT = hitU * this.atkDur, dir = this.atkDir;
    g.audio.swish(heavy, Math.max(0, hitT - 0.09));
    if (!heavy) { this.trailT = -(hitT - 0.06); this.trailDir = dir; }
    this.ev(hitT, () => {
      const hit = g.knifeHit(heavy);
      g.player.addRecoil(heavy ? 0.014 : 0.004, heavy ? 0 : dir * 0.018); // 视角跟着刀势带一下
      if (hit) this.hitStop = heavy ? 0.08 : 0.05;                         // 命中顿帧
    });
  }

  fire() {
    const d = this.def, am = this.ammo[this.cur], g = this.game;
    if (this.cd > 0 || this.state === 'draw' || this.state === 'reload' || this.state === 'bolt') return;
    if (am.mag <= 0) { if (this.cd <= 0) { g.audio.dry(); this.cd = 0.25; this.reload(); } return; }
    if (this.state === 'inspect') { this.state = 'idle'; this.events.length = 0; }
    am.mag--;
    this.cd = 60 / d.rpm / (1 + 0.1 * (g.perks.rate || 0));
    // 散布
    const pl = g.player, sp = d.spread;
    let spread = sp.base + clamp(pl.speed2d / 6) * sp.move * (pl.crouchK > 0.5 ? 0.5 : 1) + (pl.onGround ? 0 : sp.air) + Math.min(sp.max, this.shots * sp.shot);
    if (d.scope && !this.scoped) spread += sp.noScope;
    g.fireBullet(d, spread, this.muzzleWorld(this._v));
    // 后坐力
    const rc = Math.pow(0.8, g.perks.recoil || 0), n = this.shots;
    const up = d.recoilUp * (n < 9 ? 1 : 0.45) * rc * (pl.crouchK > 0.5 ? 0.8 : 1);
    const side = d.recoilSide * (Math.sin(n * 0.75) * (n > 5 ? 1.7 : 0.5) + rand(-0.6, 0.6)) * rc;
    pl.addRecoil(up, side);
    this.shots++; this.shotDecay = 0.32;
    this.kick = Math.min(0.12, this.kick + d.kick); this.kickRot = Math.min(0.5, this.kickRot + d.kickRot);
    this.slideT = 0; this.flashT = 0.055;
    this.flashRoll = rand(TAU); this.flash.scale.setScalar(d.flash * rand(0.8, 1.25));
    g[`audio`][d.sfx]();
    g.ejectShell();
    g.shake(d.scope ? 0.22 : 0.05);
    if (d.scope) {
      this.setScope(false); this.state = 'bolt'; this.t = 0; this.events.length = 0;
      this.ev(0.38, () => g.audio.bolt());
    }
    if (am.mag === 0 && am.reserve > 0 && !d.scope) this.ev(this.t + 0.35, () => this.reload());
    g.ui.setWeapon(this);
  }

  muzzleWorld(out) {
    const v = this.view;
    if (!v.model.muzzle) return out.copy(this.game.camera.position);
    v.model.muzzle.getWorldPosition(out);
    return out.add(this.game.camera.position);
  }

  /* ---------- 每帧更新 ---------- */
  update(dt, look) {
    const g = this.game, pl = g.player, v = this.view, d = this.def, A = this.A, T = this.tmp;
    let adt = dt; if (this.hitStop > 0) { this.hitStop -= dt; adt = dt * 0.06; }
    this.dt = dt; this.t += adt; this.cd -= dt;
    if (this.shotDecay > 0) { this.shotDecay -= dt; if (this.shotDecay <= 0) this.shots = 0; }
    // 动画事件
    for (let i = this.events.length - 1; i >= 0; i--) if (this.t >= this.events[i].time) { const e = this.events.splice(i, 1)[0]; e.fn(); }
    // 状态结束
    const rk = this.reloadMul();
    if (this.state === 'draw' && this.t >= d.drawTime) this.state = 'idle';
    else if (this.state === 'reload' && this.t >= d.reloadTime * rk) this.state = 'idle';
    else if (this.state === 'inspect' && this.t >= d.inspectTime) this.state = 'idle';
    else if (this.state === 'attack' && this.t >= this.atkDur) { this.state = 'idle'; this.atk = null; }
    else if (this.state === 'bolt' && this.t >= 1.25) { this.state = 'idle'; if (this.wantScope) this.setScope(true); if (this.ammo.awp.mag === 0) this.reload(); }
    if (pl.sprinting && this.state === 'inspect') this.state = 'idle';

    A[0] = A[1] = A[2] = A[3] = A[4] = A[5] = 0; this.showK = 0; this.fingerOpen = 0;
    if (d.type === 'gun') this._animGun(v, d, A, T, rk); else this._animKnife(v, d, A, T);

    // 投掷手雷时主武器下沉让开
    const nd = g.grenades ? g.grenades.dip() : 0;
    if (nd > 0) { A[1] -= 0.22 * nd; A[3] -= 0.55 * nd; A[5] -= 0.2 * nd; }

    // 冲刺姿态
    const wantSprint = pl.sprinting && this.state === 'idle' ? 1 : 0;
    this.sprintK = damp(this.sprintK, wantSprint, 9, dt);
    if (d.type === 'gun') { const k = this.sprintK; A[0] -= 0.06 * k; A[1] -= 0.04 * k; A[3] -= 0.18 * k; A[4] += 0.55 * k; A[5] += 0.25 * k; }
    else { const k = this.sprintK; A[1] -= 0.03 * k; A[3] -= 0.2 * k; }

    // 后坐力弹簧
    this.kick = damp(this.kick, 0, 16, dt); this.kickRot = damp(this.kickRot, 0, 13, dt);
    A[2] += this.kick; A[3] += this.kickRot; A[1] += this.kickRot * 0.03;

    // 晃动 / 步伐
    const sx = clamp(look.dx * 0.0016, -0.07, 0.07), sy = clamp(look.dy * 0.0016, -0.07, 0.07);
    this.swayX = damp(this.swayX, sx, 9, dt); this.swayY = damp(this.swayY, sy, 9, dt);
    const moving = pl.onGround ? clamp(pl.speed2d / 5) : 0;
    this.bob += dt * (pl.sprinting ? 13 : 9.5) * moving;
    const bx = Math.sin(this.bob) * 0.008 * moving * (pl.sprinting ? 2 : 1), by = -Math.abs(Math.cos(this.bob)) * 0.007 * moving * (pl.sprinting ? 2 : 1);
    this.landK = damp(this.landK, clamp(-pl.vel.y * 0.004, -0.03, 0.04) - pl.landDip * 0.5, 10, dt);
    const breathe = Math.sin(g.time * 1.6) * 0.0016;
    this.sway.position.set(-this.swayX * 0.5 + bx, this.swayY * 0.4 + by + this.landK + breathe, 0);
    this.sway.rotation.set(this.swayY * 0.8 - this.landK * 1.5, -this.swayX * 1.1, -this.swayX * 0.9 - pl.strafeTilt * 1.2);

    v.holder.position.set(d.pos[0] + A[0], d.pos[1] + A[1], d.pos[2] + A[2]);
    v.holder.rotation.set(d.rot[0] + A[3], d.rot[1] + A[4], d.rot[2] + A[5]);
    if (this.showK > 0.001) v.holder.quaternion.slerp(this.showQ, this.showK);
    if (d.type === 'knife') { const P = this.pose, hp = v.holder.position, hr = v.holder.rotation; P[0] = hp.x; P[1] = hp.y; P[2] = hp.z; P[3] = hr.x; P[4] = hr.y; P[5] = hr.z; }
    else for (let i = 0; i < 6; i++) this.pose[i] = KB[i];
    // 手指张合
    this.fingerCur = damp(this.fingerCur, this.fingerOpen, 26, dt);
    if (v.hands.r) v.hands.r.userData.fingers.rotation.y = -this.fingerCur;
    // 刀光
    this.trailT += dt;
    const tr = this.trail, tt = this.trailT;
    tr.visible = tt > 0 && tt < 0.24 && d.type === 'knife';
    if (tr.visible) {
      tr.geometry.setDrawRange(0, Math.ceil(clamp(tt / 0.085) * 26) * 6);
      tr.material.opacity = clamp(1.15 - tt / 0.24) * 0.4;
      tr.position.set(0.08 * this.trailDir, -0.168, -0.4); tr.rotation.set(0, 0, 0); tr.scale.set(this.trailDir, 1, 1);
    }

    // 跟随相机朝向（让环境反射 / 阳光方向都在世界空间里正确）
    this.root.quaternion.copy(g.camera.quaternion);
    this.camera.quaternion.copy(g.camera.quaternion);
    // 阴影中变暗
    this.lit = damp(this.lit, g.playerLit ? 1 : 0, 6, dt);
    this.sun.intensity = lerp(0.25, 3.4, this.lit);
    this.fill.position.set(-0.35, 0.55, 1).applyQuaternion(g.camera.quaternion);
    this.hemi.intensity = lerp(0.7, 0.95, this.lit);
    this.scene.environmentIntensity = lerp(0.6, 0.95, this.lit);

    // 枪口焰
    this.flashT -= dt;
    const fOn = this.flashT > 0 && v.model.muzzle;
    this.flash.visible = !!fOn;
    if (fOn) { v.model.muzzle.getWorldPosition(this._v); this.flash.position.copy(this._v); this.flash.quaternion.copy(this.root.quaternion); this.flash.rotateZ(this.flashRoll || 0); this.flashLight.position.copy(this._v); }
    this.flashLight.intensity = fOn ? 2.5 : 0;

    // 开镜
    this.scopeK = damp(this.scopeK, this.scoped ? 1 : 0, 18, dt);
    v.holder.visible = this.scopeK < 0.6;
  }

  _animGun(v, d, A, T, rk) {
    const P = v.model.parts, t = this.t;
    // 复位可动部件
    if (P.mag) { P.mag.position.set(0, 0, 0); P.mag.rotation.set(0, 0, 0); P.mag.visible = true; }
    if (v.hands.l) v.hands.l.position.set(0, 0, 0);
    if (P.bolt) { P.bolt.position.set(0, 0, 0); P.bolt.rotation.set(0, 0, 0); }
    if (v.id === 'deagle') { v.model.group.rotation.x = 0; v.model.group.position.set(0, 0, 0); }
    // 套筒后坐
    this.slideT += this.dt / 0.09;
    if (P.slide) {
      const empty = this.ammo[v.id].mag === 0 && this.state !== 'reload';
      const s = this.slideT < 1 ? Math.sin(Math.min(1, this.slideT) * PI) : 0;
      P.slide.position.z = Math.max(s * 0.04, empty ? 0.034 : 0);
    }
    if (P.bolt && v.id === 'ak' && this.slideT < 1) P.bolt.position.z = Math.sin(this.slideT * PI) * 0.05;

    if (this.state === 'draw') {
      const k = 1 - easeOutBack(clamp(t / d.drawTime));
      A[1] -= 0.26 * k; A[3] -= 0.95 * k; A[5] += 0.5 * k; A[4] += 0.3 * k;
    } else if (this.state === 'inspect') {
      kfv(t / d.inspectTime, GUN_INSPECT, T);
      const sc = v.id === 'deagle' ? 1.15 : 1;
      A[0] += T[0]; A[1] += T[1]; A[2] += T[2] - (v.id === 'deagle' ? 0 : 0.02); A[3] += T[3] * sc; A[4] += T[4] * sc; A[5] += T[5];
      if (v.hands.l) { const lh = kf(t / d.inspectTime, [[0, 0], [0.08, 1], [0.9, 1], [1, 0]]); v.hands.l.position.set(-0.12 * lh, -0.55 * lh, 0.25 * lh); } // 左手离开
      if (v.id === 'deagle') { // 沙鹰：绕扳机护圈转枪——只转枪，手不动
        const u = t / d.inspectTime, a = u > 0.56 ? 0 : kf(u, [[0.4, 0], [0.56, -TAU * 2, smooth]]);
        const py = -0.03, pz = -0.012, c = Math.cos(a), s = Math.sin(a), G = v.model.group;
        G.rotation.x = a; G.position.set(0, py - (py * c - pz * s), pz - (py * s + pz * c));
        this.fingerOpen = kf(u, [[0.37, 0], [0.41, 1], [0.54, 1], [0.58, 0]]);
      }
    } else if (this.state === 'reload') {
      const u = t / (d.reloadTime * rk), ra = d.refillAt / d.reloadTime;
      const tilt = kf(u, [[0, 0], [0.1, 1], [0.66, 1], [0.76, -0.6], [0.88, -0.6], [1, 0]]);
      A[3] += 0.3 * Math.max(0, tilt) + 0.1 * Math.max(0, -tilt); A[5] -= 0.4 * tilt; A[1] -= 0.035 * Math.abs(tilt); A[4] += 0.12 * tilt;
      const out = kf(u, [[0.12, 0], [0.24, 1], [ra - 0.16, 1], [ra - 0.02, 0]]);
      if (P.mag) {
        P.mag.position.y = -0.34 * out; P.mag.position.z = 0.04 * out; P.mag.rotation.x = 0.35 * out;
        if (v.hands.l) v.hands.l.position.set(0.0, -0.3 * out, 0.22 * Math.min(1, out * 3));
      }
      A[1] -= kf(u, [[ra - 0.04, 0], [ra, 0.02], [ra + 0.06, 0]]); // 插入弹匣的顿挫
      const bolt = kf(u, [[0.7, 0], [0.78, 1], [0.84, 0]]);
      if (P.bolt) P.bolt.position.z = 0.06 * bolt;
      if (P.slide) P.slide.position.z = Math.max(P.slide.position.z * (u < 0.78 ? 1 : 0), 0.035 * bolt);
      A[2] += 0.015 * bolt;
    } else if (this.state === 'bolt') {
      const u = t / 1.25;
      const pull = kf(u, [[0.18, 0], [0.36, 1], [0.5, 1], [0.66, 0]]);
      const lift = kf(u, [[0.1, 0], [0.22, 1], [0.66, 1], [0.8, 0]]);
      if (P.bolt) { P.bolt.rotation.z = lift * 0.9; P.bolt.position.z = pull * 0.07; P.bolt.position.y = lift * 0.012; }
      A[5] -= 0.22 * lift; A[3] += 0.1 * lift; A[1] -= 0.02 * lift; A[2] += 0.02 * pull;
    }
  }

  // 检视展示阶段：s 为 0..1 的阶段进度
  _show(s, A) {
    const k = kf(s, [[0, 0], [0.16, 1], [0.84, 1], [1, 0]]), f = kf(s, [[0.4, 0], [0.56, 1]]), q = this.showQ;
    if (f < 0.5) q.copy(Q_SHOW1).slerp(Q_SHOWM, f * 2); else q.copy(Q_SHOWM).slerp(Q_SHOW2, f * 2 - 1);
    q.multiply(this._qt.setFromAxisAngle(FOREARM, Math.sin(this.t * 2.3) * 0.11)); // 端详时轻轻转腕
    this.showK = k;
    for (let i = 0; i < 3; i++) A[i] += (lerp(P_SHOW1[i], P_SHOW2[i], f) - KB[i]) * k;
  }

  _animKnife(v, d, A, T) {
    const t = this.t, id = v.id, P = v.model.parts;
    let b1 = 0, b2 = 0, spin = 0, ringK = 0, tossRot = 0, tossY = 0, fold = 0; // 蝴蝶刀两个角度；爪子刀转刀；M9 抛刀
    if (this.state === 'draw') {
      const u = clamp(t / d.drawTime), k = 1 - easeOut(u);
      A[1] -= 0.25 * k; A[3] += 0.8 * k; A[5] -= 0.4 * k;
      if (id === 'butterfly') {
        // 合拢 → 甩开
        b1 = kf(u, [[0, PI], [0.12, PI], [0.5, -0.25, easeOut], [0.68, 0.08], [0.8, 0]]);
        const phi = kf(u, [[0, TAU], [0.2, TAU], [0.7, -0.3], [0.85, 0.1], [1, 0]]);
        b2 = phi - b1;
        A[5] += Math.sin(u * PI) * 0.5; A[3] -= Math.sin(u * PI) * 0.25;
        this.fingerOpen = kf(u, [[0, 0.8], [0.6, 0.8], [0.85, 0]]);
      } else if (id === 'karambit') {
        spin = kf(u, [[0, -TAU * 2], [0.62, 0, dec]]);
        ringK = kf(u, [[0, 1], [0.6, 1], [0.9, 0]]);
      } else if (id === 'flip') {
        // 拔出时刀身合着，拇指一推甩开到位
        fold = kf(u, [[0, PI], [0.22, PI], [0.42, -0.14, dec], [0.52, 0.05], [0.6, 0]]);
        A[5] += kf(u, [[0.2, 0], [0.36, 0.35], [0.6, 0]]);
      } else { A[4] -= 1.2 * k; A[5] += 0.6 * k; }
    } else if (this.state === 'inspect') {
      const u = t / d.inspectTime;
      if (id === 'butterfly') {
        // 前段：甩刀（收 → 甩开 → 再收 → 甩开），每一下配合手腕一抖；后段：翻腕展示两面
        b1 = kf(u, [[0.03, 0], [0.1, PI], [0.18, TAU], [0.26, TAU + PI], [0.34, 2 * TAU]]);
        const phi = kf(u, [[0.03, 0], [0.1, 0.15], [0.18, -TAU], [0.26, -TAU], [0.34, -2 * TAU - 0.3], [0.39, -2 * TAU + 0.1], [0.42, -2 * TAU]]);
        b2 = phi - b1;
        const wr = kf(u, [[0, 0], [0.05, 1], [0.38, 1], [0.45, 0]]);
        const flick = kf(u, [[0.03, 0], [0.065, 1], [0.1, -0.4], [0.14, 1], [0.18, -0.4], [0.22, 1], [0.26, -0.4], [0.3, 1], [0.34, -0.3], [0.4, 0]]);
        A[0] -= 0.07 * wr; A[1] += 0.04 * wr + 0.012 * flick; A[2] += 0.03 * wr; A[3] += 0.18 * wr + 0.1 * flick; A[4] += 0.2 * wr; A[5] += 0.32 * flick * wr;
        this.fingerOpen = 0.85 * kf(u, [[0, 0], [0.04, 1], [0.38, 1], [0.44, 0]]);
        if (u > 0.43) this._show((u - 0.43) / 0.57, A);
      } else if (id === 'karambit') {
        // 前段：指环套在指节前转刀，转速逐渐慢下来再握回；后段：展示
        spin = u > 0.42 ? 0 : kf(u, [[0.06, 0], [0.42, -TAU * 6, dec]]);
        ringK = kf(u, [[0, 0], [0.06, 1], [0.42, 1], [0.5, 0]]);
        const wr = kf(u, [[0, 0], [0.07, 1], [0.42, 1], [0.5, 0]]);
        A[0] -= 0.06 * wr; A[1] += 0.03 * wr + Math.sin(u * 70) * 0.004 * wr; A[2] += 0.02 * wr; A[3] += 0.22 * wr; A[4] -= 0.3 * wr;
        if (u > 0.48) this._show((u - 0.48) / 0.52, A);
      } else if (id === 'flip') {
        // 折叠刀：合刀 → 手腕一抖甩开，连做两次，然后翻腕展示
        fold = kf(u, [[0.03, 0], [0.1, PI, acc], [0.14, PI], [0.19, -0.16, dec], [0.215, 0.06], [0.24, 0],
          [0.26, 0], [0.33, PI, acc], [0.36, PI], [0.41, -0.16, dec], [0.435, 0.06], [0.46, 0]]);
        const wr = kf(u, [[0, 0], [0.05, 1], [0.44, 1], [0.5, 0]]);
        const snap = kf(u, [[0.15, 0], [0.18, 1], [0.24, 0], [0.37, 0], [0.4, 1], [0.46, 0]]);
        A[0] -= 0.06 * wr; A[1] += 0.035 * wr; A[2] += 0.03 * wr; A[3] += 0.2 * wr; A[4] += 0.35 * wr; A[5] += 0.3 * snap - 0.1 * wr;
        if (u > 0.48) this._show((u - 0.48) / 0.52, A);
      } else {
        // M9：先展示两面，收势时向上抛一圈接住
        if (u < 0.74) this._show(u / 0.74, A);
        const p = clamp((u - 0.75) / 0.2);
        if (p > 0 && p < 1) { tossRot = -TAU * smooth(p); tossY = Math.sin(p * PI) * 0.19; }
        this.fingerOpen = kf(u, [[0.73, 0], [0.76, 1], [0.92, 1], [0.955, 0]]);
        A[1] += kf(u, [[0.71, 0], [0.74, -0.035], [0.79, 0.04], [0.9, 0.015], [0.95, -0.03], [1, 0]]);
        A[3] += kf(u, [[0.71, 0], [0.76, 0.25], [0.95, 0.1], [1, 0]]);
      }
    } else if (this.state === 'attack') {
      kfv(t / this.atkDur, this.atkKeys, T);
      for (let i = 0; i < 6; i++) A[i] += T[i] - KB[i];
    }
    if (P.bladePivot) { P.bladePivot.rotation.z = b1; P.handleBPivot.rotation.z = b2; }
    v.toss.rotation.x = tossRot; v.toss.position.y = tossY;
    if (P.fold) P.fold.rotation.z = fold;
    if (id === 'karambit') {
      // 转刀时把刀立成「螺旋桨」：刀身平面正对指节，指环位于指节前方
      v.spin.rotation.z = spin;
      v.mount.rotation.y = (-PI / 2) * (1 - ringK);
      v.mount.position.set(v.mountBase.x, lerp(v.mountBase.y, 0.143, ringK), lerp(v.mountBase.z, -0.068, ringK));
    }
  }
}
