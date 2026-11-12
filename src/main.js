// 刀锋竞技场 —— 主循环 / 游戏规则
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAPass } from 'three/examples/jsm/postprocessing/FXAAPass.js';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { AudioSys } from './audio.js';
import { Player } from './player.js';
import { WeaponSystem, SLOTS, DEFS, KNIFE_NAMES } from './weapons.js';
import { Enemies, ENEMY_TYPES } from './enemies.js';
import { UI } from './ui.js';
import { Showcase } from './showcase.js';
import { clamp, rand, pick } from './util.js';

const PERKS = [
  { id: 'dmg', icon: '💥', name: '穿甲弹芯', desc: '枪械伤害 +15%', max: 6 },
  { id: 'rate', icon: '⚡', name: '轻量枪机', desc: '射速 +10%', max: 4 },
  { id: 'reload', icon: '🔄', name: '快速换弹', desc: '换弹时间 -18%', max: 3 },
  { id: 'mag', icon: '📦', name: '扩容弹匣', desc: '弹匣容量 +30%', max: 3 },
  { id: 'recoil', icon: '🎯', name: '稳定握把', desc: '后坐力 -20%', max: 3 },
  { id: 'head', icon: '☠️', name: '爆头专家', desc: '爆头伤害 +25%', max: 4 },
  { id: 'knife', icon: '🗡️', name: '刀锋大师', desc: '刀伤害 +60%，刀杀回复 120 生命', max: 3 },
  { id: 'hp', icon: '❤️', name: '生命强化', desc: '生命上限 +250 并立即回满', max: 4 },
  { id: 'armor', icon: '🛡️', name: '战术护甲', desc: '每波开始获得 150 护甲', max: 2 },
  { id: 'leech', icon: '🩸', name: '嗜血', desc: '每次击杀回复 40 生命', max: 3 },
  { id: 'speed', icon: '👟', name: '肾上腺素', desc: '移动速度 +8%', max: 3 },
  { id: 'boom', icon: '🧨', name: '连锁爆破', desc: '被击杀的敌人有 25% 几率爆炸', max: 3 },
];
const KNIVES = ['butterfly', 'karambit', 'm9'];

// 第一人称武器层：清深度后叠加渲染到同一缓冲
class ViewModelPass extends Pass {
  constructor(scene, camera) { super(); this.scene = scene; this.camera = camera; this.needsSwap = false; }
  render(renderer, writeBuffer, readBuffer) {
    const old = renderer.autoClear; renderer.autoClear = false;
    renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
    renderer.clearDepth();
    renderer.render(this.scene, this.camera);
    renderer.autoClear = old;
  }
}

function load(key, def) { try { return Object.assign(def, JSON.parse(localStorage.getItem(key) || '{}')); } catch { return def; } }
function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch { /* 忽略 */ } }

class Game {
  constructor() {
    this.debug = new URLSearchParams(location.search).has('debug');
    this.settings = load('ba_settings', { sens: 1, volume: 0.6, quality: 'high' });
    const lo = load('ba_loadout', {});
    this.loadout = { knife: lo.knife || 'butterfly', skins: Object.assign({ ak: 'redline', deagle: 'gold', awp: 'dragon', butterfly: 'fade', karambit: 'doppler', m9: 'tiger' }, lo.skins || {}) };
    this.best = load('ba_best', { score: 0, wave: 0 });
    this.perks = {};
    this.state = 'menu'; this.time = 0; this.wave = 0; this.spawnQueue = []; this.spawnT = 0; this.timers = [];
    this.stats = { score: 0, kills: 0, heads: 0, knifeKills: 0, shots: 0, hits: 0, wave: 0 };
    this.combo = 0; this.comboT = 0; this.phase = 'idle'; this.perkOptions = null; this.playerLit = true; this.litT = 0;
    this.pickups = [];

    // ---- 渲染器 ----
    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: this.debug }));
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.92;
    r.outputColorSpace = THREE.SRGBColorSpace;
    document.getElementById('game').appendChild(r.domElement);
    this.canvas = r.domElement;

    this.audio = new AudioSys(); this.audio.volume = this.settings.volume;
    this.world = new World(r);
    this.fx = new FX(this.world.scene);
    this.camera = new THREE.PerspectiveCamera(78, 1, 0.06, 600); this.camera.rotation.order = 'YXZ';
    this.ui = new UI(this);
    this.player = new Player(this);
    this.weapons = new WeaponSystem(this);
    this.enemies = new Enemies(this);
    this.showcase = new Showcase(this);
    this._buildPickups();

    // ---- 后期 ----
    const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType });
    this.composer = new EffectComposer(r, rt);
    this.worldPass = new RenderPass(this.showcase.scene, this.showcase.camera);
    this.vmPass = new ViewModelPass(this.weapons.scene, this.weapons.camera); this.vmPass.enabled = false;
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.5, 0.55, 1.12);
    this.fxaa = new FXAAPass();
    this.composer.addPass(this.worldPass); this.composer.addPass(this.vmPass); this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass()); this.composer.addPass(this.fxaa);

    this.input = { keys: {}, pressed: {}, dx: 0, dy: 0, lmb: false, rmb: false, lmbP: false, rmbP: false };
    this._bindInput();
    this.applyQuality();
    addEventListener('resize', () => this.resize());
    this.ui.show('menu');
    document.getElementById('loading').remove();
    this.clock = performance.now();
    this._loop = this._loop.bind(this);
    if (!this.debug) requestAnimationFrame(this._loop);
  }

  /* ---------------- 设置 / 存档 ---------------- */
  saveSettings() { save('ba_settings', this.settings); }
  saveLoadout() { save('ba_loadout', this.loadout); }
  applyLoadout() { this.weapons.setLoadout(this.loadout); this.ui.setWeapon(this.weapons); }
  applyQuality() {
    const q = this.settings.quality, r = this.renderer, sun = this.world.sun;
    const dpr = devicePixelRatio || 1;
    this.pixelRatio = q === 'ultra' ? Math.min(dpr, 2) : q === 'high' ? Math.min(dpr, 1.5) : q === 'mid' ? Math.min(dpr, 1.15) : Math.min(dpr, 0.9);
    const size = q === 'ultra' || q === 'high' ? 4096 : q === 'mid' ? 2048 : 1024;
    if (sun.shadow.mapSize.x !== size) { sun.shadow.mapSize.set(size, size); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    this.bloom.enabled = q !== 'low'; this.fxaa.enabled = q !== 'low';
    this.resize();
  }
  resize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setPixelRatio(this.pixelRatio); this.renderer.setSize(w, h);
    this.composer.setPixelRatio(this.pixelRatio); this.composer.setSize(w, h);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.weapons.camera.aspect = w / h; this.weapons.camera.updateProjectionMatrix();
  }

  /* ---------------- 输入 ---------------- */
  _bindInput() {
    const inp = this.input, c = this.canvas;
    addEventListener('keydown', (e) => {
      if (e.code === 'Tab' || (e.code === 'Space' && this.state === 'playing')) e.preventDefault();
      if (e.repeat) return;
      inp.keys[e.code] = true; inp.pressed[e.code] = true;
      if (this.state !== 'playing') return;
      const ws = this.weapons, n = '1234'.indexOf(e.key);
      if (this.perkOptions && n >= 0 && n < this.perkOptions.length) { this.choosePerk(n); return; }
      if (n >= 0) ws.equip(SLOTS[n]);
      else if (e.code === 'KeyQ') ws.equip(ws.last);
      else if (e.code === 'KeyR') ws.reload();
      else if (e.code === 'KeyF') ws.inspect();
      else if (e.code === 'KeyV') this.cycleKnife();
    });
    addEventListener('keyup', (e) => { inp.keys[e.code] = false; });
    addEventListener('blur', () => { inp.keys = {}; inp.lmb = inp.rmb = false; });
    addEventListener('mousemove', (e) => {
      if (this.state === 'playing' && (document.pointerLockElement === c || this.debug)) { inp.dx += e.movementX; inp.dy += e.movementY; }
      else if (this.state === 'menu' && this.dragging) this.showcase.drag(e.movementX, e.movementY);
    });
    c.addEventListener('mousedown', (e) => {
      if (this.state === 'menu') { this.dragging = true; return; }
      if (this.state !== 'playing') return;
      if (document.pointerLockElement !== c && !this.debug) { this.lock(); return; }
      if (e.button === 0) { inp.lmb = true; inp.lmbP = true; } else if (e.button === 2) { inp.rmb = true; inp.rmbP = true; }
    });
    addEventListener('mouseup', (e) => { this.dragging = false; if (e.button === 0) inp.lmb = false; else if (e.button === 2) inp.rmb = false; });
    addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('wheel', (e) => {
      if (this.state === 'menu') { this.showcase.zoom(e.deltaY); return; }
      if (this.state !== 'playing') return;
      const now = performance.now(); if (now - (this._wheelT || 0) < 140) return; this._wheelT = now;
      this.weapons.cycle(e.deltaY > 0 ? 1 : -1);
    }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      if (this.debug) return;
      const locked = document.pointerLockElement === c;
      if (!locked && this.state === 'playing') this.pause();
      else if (locked && this.state === 'paused') { this.state = 'playing'; this.ui.show('hud'); this.clock = performance.now(); }
    });
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'playing' && !this.debug) this.pause(); });
  }
  lock() {
    if (this.debug) return;
    try { const p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch { /* 忽略 */ }
  }
  pause() { if (this.state !== 'playing') return; this.state = 'paused'; this.input.keys = {}; this.input.lmb = this.input.rmb = false; this.ui.show('pause'); }
  resume() { if (this.debug) { this.state = 'playing'; this.ui.show('hud'); return; } this.lock(); }
  toMenu() {
    this.state = 'menu'; if (document.pointerLockElement) document.exitPointerLock();
    this.enemies.clear(); this.clearPickups(); this.ui.showPerks(null); this.perkOptions = null;
    this.ui.show('menu');
  }
  cycleKnife() {
    const lo = this.loadout; lo.knife = KNIVES[(KNIVES.indexOf(lo.knife) + 1) % KNIVES.length]; this.saveLoadout();
    this.ui.feed(`近战武器 → <b>${KNIFE_NAMES[lo.knife]}</b>`, 'sys');
    if (this.weapons.cur === 'knife') { this.weapons.state = 'holster'; this.weapons.equip('knife'); } else this.ui.setWeapon(this.weapons);
  }
  after(sec, fn) { this.timers.push({ t: sec, fn }); }
  shake(a) { this.player.shakeT = Math.min(0.7, this.player.shakeT + a); }
  sfx3d(name, x, y, z) {
    const cam = this.camera, dx = x - cam.position.x, dz = z - cam.position.z, d = Math.hypot(dx, dz, y - cam.position.y);
    const v = Math.pow(clamp(1 - d / 55), 1.6); if (v < 0.03) return;
    const pan = d > 0.5 ? (dx * Math.cos(this.player.yaw) - dz * Math.sin(this.player.yaw)) / d : 0;
    if (name === 'swish') this.audio.swish(false); else this.audio[name](v, pan * 0.8);
  }

  /* ---------------- 流程 ---------------- */
  startGame() {
    this.audio.init();
    this.enemies.clear(); this.clearPickups(); this.timers.length = 0;
    this.perks = {}; for (const p of PERKS) this.perks[p.id] = p.max; // 所有强化开局即满级
    this.ui.setPerks(this.perks, PERKS); this.ui.showPerks(null); this.perkOptions = null; this.won = false;
    this.player.reset(); this.player.maxHp += 250 * this.perks.hp; this.player.hp = this.player.maxHp; this.weapons.resetAmmo(); this.weapons.equip('ak', true);
    this.stats = { score: 0, kills: 0, heads: 0, knifeKills: 0, shots: 0, hits: 0, wave: 0 };
    this.wave = 0; this.combo = 0; this.spawnQueue = []; this.world.resetBarrels();
    this.state = 'playing'; this.ui.show('hud'); this.ui.cache = {};
    this.lock();
    this.phase = 'countdown';
    this.ui.banner('准备战斗', 2);
    this.after(2.2, () => this.nextWave());
    this.clock = performance.now();
  }
  nextWave() {
    if (this.state === 'menu' || this.state === 'over') return;
    const n = ++this.wave; this.stats.wave = n;
    this.world.resetBarrels(); this.weapons.refill(); this.ui.setWeapon(this.weapons);
    if (this.perks.armor) this.player.armor = Math.min(300, this.player.armor + 150 * this.perks.armor);
    const q = [];
    const boss = n % 5 === 0;
    const count = boss ? 4 + n : Math.min(44, 5 + Math.round(n * 2.4));
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      const heavyW = n >= 3 ? Math.min(0.2, 0.06 + n * 0.012) : 0, rushW = n >= 2 ? 0.3 : 0.12;
      q.push(r < heavyW ? 'heavy' : r < heavyW + rushW ? 'rusher' : 'grunt');
    }
    if (boss) q.splice(2, 0, 'boss');
    this.spawnQueue = q; this.spawnT = 0.6; this.phase = 'fight';
    this.ui.banner(boss ? `第 ${n} 波 · BOSS 来袭` : `第 ${n} 波`, 2.4);
    if (boss) this.audio.boss(); else this.audio.wave();
  }
  spawnAt(type, x, z) {
    x = clamp(x, -29, 29); z = clamp(z, -29, 29);
    if (this.world.isBlocked(x, z)) { x = this.player.pos.x + rand(-4, 4); z = this.player.pos.z + rand(-4, 4); }
    return this.enemies.spawn(type, x, z, this.wave);
  }
  _spawnNext() {
    const pl = this.player.pos;
    const cands = this.world.spawns.filter((s) => Math.hypot(s.x - pl.x, s.z - pl.z) > 15);
    const s = pick(cands.length ? cands : this.world.spawns);
    const type = this.spawnQueue.shift();
    this.enemies.spawn(type, s.x + rand(-0.6, 0.6), s.z + rand(-0.6, 0.6), this.wave);
  }
  _waveCleared() {
    this.phase = 'clear';
    this.ui.banner('波次清除', 1.8); this.audio.perk();
    this.stats.score += 200 + this.wave * 50;
    this.player.heal(150);
    this.after(1.6, () => this.offerPerks());
  }
  offerPerks() {
    if (this.state === 'menu' || this.state === 'over') return;
    const avail = PERKS.filter((p) => (this.perks[p.id] || 0) < p.max);
    const opts = [];
    while (opts.length < 3 && avail.length) { const p = avail.splice(Math.floor(Math.random() * avail.length), 1)[0]; opts.push(Object.assign({ lv: this.perks[p.id] || 0 }, p)); }
    if (!opts.length) { this.after(2, () => this.nextWave()); return; }
    this.perkOptions = opts; this.ui.showPerks(opts); this.phase = 'perk';
  }
  choosePerk(i) {
    const p = this.perkOptions[i]; if (!p) return;
    this.perks[p.id] = (this.perks[p.id] || 0) + 1;
    if (p.id === 'hp') { this.player.maxHp += 250; this.player.hp = this.player.maxHp; }
    if (p.id === 'mag') this.weapons.refill();
    this.perkOptions = null; this.ui.showPerks(null); this.ui.setPerks(this.perks, PERKS);
    this.audio.perk(); this.ui.feed(`获得强化 <b>${p.icon} ${p.name}</b>`, 'sys');
    this.phase = 'countdown'; this.ui.banner('下一波即将到来', 1.8);
    this.after(2.4, () => this.nextWave());
  }
  onPlayerDead() {
    this.audio.dead(); this.ui.showPerks(null); this.perkOptions = null;
    this.weapons.setScope(false);
    const st = this.stats;
    st.newScore = st.score > this.best.score; st.newWave = st.wave > this.best.wave;
    this.best.score = Math.max(this.best.score, st.score); this.best.wave = Math.max(this.best.wave, st.wave); save('ba_best', this.best);
    this.after(1.6, () => { this.state = 'over'; if (document.pointerLockElement) document.exitPointerLock(); this.ui.gameOver(st); });
  }

  /* ---------------- 战斗 ---------------- */
  fireBullet(def, spread, muzzle) {
    const cam = this.camera, o = cam.position, st = this.stats;
    const d = this._dir || (this._dir = new THREE.Vector3()), rgt = this._rgt || (this._rgt = new THREE.Vector3()), up = this._up || (this._up = new THREE.Vector3());
    cam.getWorldDirection(d); rgt.crossVectors(d, cam.up).normalize(); up.crossVectors(rgt, d);
    const a = rand(Math.PI * 2), rr = Math.sqrt(Math.random()) * spread;
    d.addScaledVector(rgt, Math.cos(a) * rr).addScaledVector(up, Math.sin(a) * rr).normalize();
    st.shots++;
    const hit = this._hit || (this._hit = {});
    const tw = this.world.raycast(o.x, o.y, o.z, d.x, d.y, d.z, 400, hit);
    const end = this._end || (this._end = new THREE.Vector3());
    const p = this.perks, skip = [];
    let endT = tw === Infinity ? 200 : tw, any = false;
    for (let n = 0; n < (def.pierce ? 4 : 1); n++) {
      const eh = this.enemies.raycast(o, d, tw === Infinity ? 400 : tw, skip);
      if (!eh) break;
      any = true; skip.push(eh.e);
      const pt = end.copy(o).addScaledVector(d, eh.t).clone();
      let dmg = def.dmg * (1 + 0.15 * (p.dmg || 0)) * (n > 0 ? 0.7 : 1);
      if (eh.head) dmg *= def.headMul * (1 + 0.25 * (p.head || 0));
      const killed = this.enemies.damage(eh.e, dmg, { head: eh.head, point: pt, dir: d, force: def.pierce ? 9 : 4, weapon: def.name });
      this.ui.hitmarker(eh.head, killed); this.ui.dmgNumber(pt, dmg, eh.head);
      if (eh.head) this.audio.head(); else this.audio.hit();
      if (!def.pierce) endT = eh.t;
    }
    if (any) st.hits++;
    end.copy(o).addScaledVector(d, endT);
    if ((!any || def.pierce) && tw !== Infinity) {
      const x = o.x + d.x * tw, y = o.y + d.y * tw, z = o.z + d.z * tw;
      const b = hit.collider && hit.collider.barrel;
      if (b && b.alive) this.explodeBarrel(b);
      else {
        this.fx.decal(x, y, z, hit.nx, hit.ny, hit.nz, def.pierce ? 1.5 : 1);
        this.fx.burst(x, y, z, hit.nx, hit.ny, hit.nz, 7, [3.2, 2.2, 1.0], 5, 0.3, 0.035);
        this.fx.puff(x + hit.nx * 0.05, y + hit.ny * 0.05, z + hit.nz * 0.05, 3, 0.16, 0.55, 0.35, 0.7, 0.5);
        if (Math.random() < 0.25) this.audio.ricochet(0);
      }
    }
    this.fx.tracer(muzzle, end, def.tracer, def.pierce ? 0.03 : 0.016, def.pierce ? 0.14 : 0.06);
    this.fx.flash(muzzle.x, muzzle.y, muzzle.z, 0xffb060, 16 * def.flash, 0.06, 11);
  }
  ejectShell() {
    const cam = this.camera, d = this._dir, rgt = this._rgt, up = this._up;
    const p = new THREE.Vector3().copy(cam.position).addScaledVector(d, 0.45).addScaledVector(rgt, 0.2).addScaledVector(up, -0.12);
    const v = new THREE.Vector3().copy(this.player.vel).addScaledVector(rgt, rand(1.6, 2.6)).addScaledVector(up, rand(1.5, 2.6)).addScaledVector(d, rand(-0.5, 0.5));
    this.fx.shell(p, v, this.player.pos.y);
  }
  knifeHit(heavy) {
    const cam = this.camera, o = cam.position, def = DEFS.knife;
    const d = this._dir || (this._dir = new THREE.Vector3()); cam.getWorldDirection(d);
    const hit = this._hit || (this._hit = {});
    const tw = this.world.raycast(o.x, o.y, o.z, d.x, d.y, d.z, def.range, hit);
    let eh = this.enemies.raycast(o, d, Math.min(def.range, tw));
    if (!eh) { // 宽容判定：前方锥形内最近的敌人
      let best = null, bd = def.range;
      for (const e of this.enemies.list) {
        if (e.dead || e.spawnT > 0.35) continue;
        const ex = e.x - o.x, ey = e.y + 1.1 * e.T.scale - o.y, ez = e.z - o.z, dist = Math.hypot(ex, ey, ez) - e.radius;
        if (dist < bd && (ex * d.x + ey * d.y + ez * d.z) / (dist + e.radius) > 0.72) { bd = dist; best = e; }
      }
      if (best && !this.world.blockedLine(o.x, o.y, o.z, best.x, best.y + 1.1, best.z)) eh = { e: best, t: Math.max(0.3, bd), head: false };
    }
    if (eh) {
      const e = eh.e, pt = new THREE.Vector3().copy(o).addScaledVector(d, eh.t);
      // 背刺：从敌人身后重击
      const back = heavy && Math.sin(e.yaw) * d.x + Math.cos(e.yaw) * d.z > 0.35 && !e.T.boss;
      let dmg = (heavy ? def.stabDmg : def.slashDmg) * (1 + 0.6 * (this.perks.knife || 0));
      if (back) dmg = Math.max(dmg * 3, e.hp);
      const killed = this.enemies.damage(e, dmg, { head: false, knife: true, back, point: pt, dir: d, force: heavy ? 7 : 4, weapon: KNIFE_NAMES[this.loadout.knife] });
      this.ui.hitmarker(back, killed); this.ui.dmgNumber(pt, dmg, false, back);
      this.audio.stab(); this.shake(heavy ? 0.16 : 0.07); this.stats.hits++;
      return true;
    } else if (tw !== Infinity) {
      const x = o.x + d.x * tw, y = o.y + d.y * tw, z = o.z + d.z * tw;
      const b = hit.collider && hit.collider.barrel;
      this.fx.burst(x, y, z, hit.nx, hit.ny, hit.nz, 10, [3.5, 2.6, 1.2], 4, 0.3, 0.035);
      this.audio.clank(); this.shake(0.06);
      if (b && b.alive && heavy) this.explodeBarrel(b);
    }
    return false;
  }
  explodeAt(x, z, radius, dmg, hurtPlayer, scale = 1) {
    this.fx.explosion(x, 0.5, z, scale); this.sfx3d('explosion', x, 0.5, z);
    const pl = this.player, dp = Math.hypot(pl.pos.x - x, pl.pos.z - z);
    this.shake(clamp(0.6 - dp / 30, 0, 0.6));
    if (hurtPlayer && dp < radius * 0.8 && Math.abs(pl.pos.y) < 3) pl.damage(55 * (1 - dp / (radius * 0.8)), x, z);
    for (const e of this.enemies.list.slice()) {
      const d = Math.hypot(e.x - x, e.z - z);
      if (d < radius + e.radius && !e.dead) {
        const dir = new THREE.Vector3(e.x - x, 0, e.z - z).normalize();
        this.enemies.damage(e, dmg * (1 - (d / (radius + e.radius)) * 0.7), { dir, force: 12, weapon: '爆炸', explosion: true });
      }
    }
    for (const b of this.world.barrels) if (b.alive && Math.hypot(b.x - x, b.z - z) < radius * 0.75) this.after(rand(0.1, 0.25), () => this.explodeBarrel(b));
  }
  explodeBarrel(b) {
    if (!b.alive) return;
    b.alive = false; b.mesh.visible = false; b.collider.active = false;
    this.explodeAt(b.x, b.z, 6.5, 320, true, 1);
  }
  onEnemyKilled(e, info) {
    const st = this.stats, pl = this.player, T = e.T;
    st.kills++; if (info.head) st.heads++; if (info.knife) st.knifeKills++;
    this.combo = this.comboT > 0 ? this.combo + 1 : 1; this.comboT = 4;
    const mult = 1 + (this.combo - 1) * 0.25;
    const pts = Math.round(T.score * (info.head ? 1.5 : 1) * (info.knife ? 2 : 1) * (info.back ? 1.5 : 1) * mult);
    st.score += pts;
    const tag = info.back ? '背刺' : info.head ? '爆头' : info.knife ? '刀杀' : info.explosion ? '炸飞' : '击杀';
    this.ui.feed(`${tag} · ${T.name} <b>+${pts}</b>`, info.head ? 'head' : info.knife ? 'knife' : '');
    this.ui.combo(this.combo); this.audio.kill();
    if (this.perks.leech) pl.heal(40 * this.perks.leech);
    if (info.knife && this.perks.knife) pl.heal(120);
    if (this.perks.boom && !info.explosion && Math.random() < 0.25 * this.perks.boom) this.after(0.05, () => this.explodeAt(e.x, e.z, 4.2, 150, false, 0.6));
    // 掉落
    const r = Math.random();
    if (T.boss) { this.dropPickup('health', e.x, e.z); this.dropPickup('ammo', e.x + 1, e.z); this.dropPickup('armor', e.x - 1, e.z); }
    else if (r < (pl.hp < pl.maxHp * 0.5 ? 0.24 : 0.12)) this.dropPickup('health', e.x, e.z);
    else if (r < 0.4) this.dropPickup('ammo', e.x, e.z);
    else if (r < 0.46 || e.type === 'heavy') this.dropPickup('armor', e.x, e.z);
    if (T.boss && !this.won) this.win();
  }
  // 击败 Boss：清场 → 胜利结算
  win() {
    this.won = true; this.phase = 'won'; this.spawnQueue.length = 0; this.ui.showPerks(null); this.perkOptions = null;
    this.weapons.setScope(false); this.weapons.wantScope = false;
    this.stats.score += 5000; this.ui.banner('BOSS 已击败 · 胜利', 3.2); this.audio.perk(); this.ui.feed('通关奖励 <b>+5000</b>', 'sys');
    let i = 0;
    for (const e of this.enemies.list.slice()) if (!e.T.boss) this.after(0.3 + 0.13 * i++, () => this.enemies.damage(e, 1e7, { explosion: true, force: 9, weapon: '清场' }));
    this.after(3.4, () => {
      const st = this.stats;
      st.newScore = st.score > this.best.score; st.newWave = st.wave > this.best.wave;
      this.best.score = Math.max(this.best.score, st.score); this.best.wave = Math.max(this.best.wave, st.wave); save('ba_best', this.best);
      this.state = 'over'; if (document.pointerLockElement) document.exitPointerLock(); this.ui.gameOver(st, true);
    });
  }

  /* ---------------- 掉落物 ---------------- */
  _buildPickups() {
    const mk = (c) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c[0], c[1], c[2]) });
    this.pickMat = { health: mk([0.4, 3.2, 0.6]), ammo: mk([3.2, 2.2, 0.4]), armor: mk([0.4, 1.8, 3.4]) };
    this.pickGeo = { health: new THREE.OctahedronGeometry(0.2), ammo: new THREE.BoxGeometry(0.3, 0.2, 0.2), armor: new THREE.IcosahedronGeometry(0.2) };
  }
  dropPickup(type, x, z) {
    const m = new THREE.Mesh(this.pickGeo[type], this.pickMat[type]); m.position.set(x, 0.9, z); m.scale.setScalar(0.01); this.world.scene.add(m);
    const a = rand(6.28), sp = rand(1.2, 2.8);
    this.pickups.push({ m, type, age: 0, vx: Math.cos(a) * sp, vz: Math.sin(a) * sp, vy: rand(4.5, 6.2), spd: 0 });
  }
  clearPickups() { for (const p of this.pickups) this.world.scene.remove(p.m); this.pickups.length = 0; }
  // 掉落小球：先弹出来，停顿一下，再加速飞向玩家被吸收（全图自动吸附）
  _updatePickups(dt) {
    const pl = this.player, sparks = this.fx.sparks;
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i], m = p.m, c = m.material.color; p.age += dt;
      m.rotation.y += dt * 7; m.rotation.x += dt * 3.5;
      if (p.age < 0.6) {
        p.vy -= 17 * dt; m.position.x += p.vx * dt; m.position.z += p.vz * dt;
        m.position.y += p.vy * dt; if (m.position.y < 0.35) { m.position.y = 0.35; p.vy *= -0.45; }
        m.scale.setScalar(Math.min(1, p.age / 0.14));
      } else if (!pl.dead) {
        const tx = pl.pos.x, ty = pl.pos.y + pl.height * 0.55, tz = pl.pos.z;
        const dx = tx - m.position.x, dy = ty - m.position.y, dz = tz - m.position.z, d = Math.hypot(dx, dy, dz) || 0.001;
        p.spd = Math.min(38, p.spd + 52 * dt); const step = Math.max(3, p.spd) * dt;
        if (d < step + 0.55) { this._collect(p); this.world.scene.remove(m); this.pickups.splice(i, 1); continue; }
        // 略带弧线：越近越直
        const lift = Math.min(1, d / 8) * 2.2 * dt;
        m.position.x += (dx / d) * step; m.position.y += (dy / d) * step + lift; m.position.z += (dz / d) * step;
        m.scale.setScalar(clamp(d / 1.6, 0.35, 1) * (1 + Math.sin(p.age * 24) * 0.14));
        for (let k = 0; k < 2; k++) sparks.emit(m.position.x + rand(-0.06, 0.06), m.position.y + rand(-0.06, 0.06), m.position.z + rand(-0.06, 0.06), rand(-0.4, 0.4), rand(-0.2, 0.5), rand(-0.4, 0.4), rand(0.25, 0.45), rand(0.05, 0.09), c.r, c.g, c.b, 0.9, 0, 2.5);
      }
    }
  }
  _collect(p) {
    const pl = this.player, m = p.m, c = m.material.color;
    if (p.type === 'health') { pl.heal(200); this.ui.feed('生命 <b>+200</b>', 'sys'); }
    else if (p.type === 'ammo') { this.weapons.addAmmo(0.35); this.ui.setWeapon(this.weapons); this.ui.feed('弹药补给', 'sys'); }
    else { pl.armor = Math.min(300, pl.armor + 100); this.ui.feed('护甲 <b>+100</b>', 'sys'); }
    this.audio.pickup(); this.ui.pickupFlash(p.type);
    this.fx.burst(m.position.x, m.position.y, m.position.z, 0, 0.6, 0, 16, [c.r, c.g, c.b], 3.5, 0.4, 0.06);
  }

  /* ---------------- 主循环 ---------------- */
  _loop(now) {
    requestAnimationFrame(this._loop);
    const dt = Math.min(0.05, (now - this.clock) / 1000); this.clock = now;
    this.step(dt);
  }
  step(dt) {
    this.time += dt;
    if (this.state === 'menu') {
      this.showcase.update(dt, innerWidth / innerHeight);
      this.worldPass.scene = this.showcase.scene; this.worldPass.camera = this.showcase.camera; this.vmPass.enabled = false;
      this.bloom.strength = 0.5;
    } else {
      if (this.state === 'playing') this._update(dt);
      this.worldPass.scene = this.world.scene; this.worldPass.camera = this.camera; this.vmPass.enabled = true;
      this.bloom.strength = 0.42;
    }
    this.composer.render(dt);
    const inp = this.input; inp.pressed = {}; inp.dx = inp.dy = 0; inp.lmbP = inp.rmbP = false;
  }
  _update(dt) {
    const inp = this.input, pl = this.player, ws = this.weapons;
    for (let i = this.timers.length - 1; i >= 0; i--) { const t = this.timers[i]; t.t -= dt; if (t.t <= 0) { this.timers.splice(i, 1); t.fn(); } }
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.combo = 0; }
    // 视角
    const sens = 0.0022 * this.settings.sens * (ws.scoped ? 0.28 : 1);
    if (!pl.dead) pl.look(inp.dx, inp.dy, sens);
    pl.update(dt, inp);
    // 武器
    if (!pl.dead) { ws.primary(inp.lmbP, inp.lmb); ws.secondary(inp.rmbP); }
    const sp = ws.def.spread;
    ws.spreadNow = sp ? sp.base + clamp(pl.speed2d / 6) * sp.move + (pl.onGround ? 0 : sp.air) + Math.min(sp.max, ws.shots * sp.shot) + (ws.def.scope && !ws.scoped ? sp.noScope : 0) : 0;
    ws.update(dt, inp);
    // 流场 / 光照采样
    this.litT -= dt;
    if (this.litT <= 0) { this.litT = 0.12; this.world.updateFlow(pl.pos.x, pl.pos.z); this.playerLit = this.world.sunVisible(pl.pos.x, pl.pos.y + pl.eye - 0.2, pl.pos.z); }
    // 刷怪
    if (this.phase === 'fight') {
      if (this.spawnQueue.length) {
        this.spawnT -= dt;
        const cap = Math.min(18, 6 + this.wave);
        if (this.spawnT <= 0 && this.enemies.alive < cap) { this._spawnNext(); this.spawnT = rand(0.35, 0.9) * Math.max(0.45, 1 - this.wave * 0.03); }
      } else if (this.enemies.alive === 0) this._waveCleared();
    }
    this.enemies.update(dt);
    this._updatePickups(dt);
    this.world.update(dt, this.camera.position);
    this.fx.update(dt, innerHeight, this.camera.fov, this.time);
    this.ui.update(dt);
  }
}

window.__game = new Game();
