// HUD 与菜单
import * as THREE from 'three';
import { GUN_SKINS, KNIFE_SKINS, RARITY, skinThumb, findSkin } from './skins.js';
import { SLOTS, DEFS, KNIFE_NAMES } from './weapons.js';
import { clamp } from './util.js';
import { DIFFICULTY } from './difficulty.js';

const $ = (id) => document.getElementById(id);
const WEAPON_TABS = [['ak', 'AK-47'], ['deagle', '沙漠之鹰'], ['awp', 'AWP'], ['knife', '近战刀']];

export class UI {
  constructor(game) {
    this.game = game;
    this.el = {};
    for (const id of ['hud', 'menu', 'pause', 'over', 'cross', 'hit', 'vig', 'lowhp', 'dmgdir', 'nums', 'scope', 'wave', 'left', 'score', 'combo', 'boss', 'bossbar', 'bossname',
      'feed', 'banner', 'hp', 'hpbar', 'armor', 'armorbar', 'perkbar', 'wname', 'mag', 'res', 'slots', 'perkpick', 'perkcards', 'wtabs', 'ktabs', 'skins', 'skin-title',
      'best', 'bestwave', 'stats', 'pick', 'over-title', 'sens', 'sens-v', 'vol', 'vol-v', 'quality', 'nades', 'difficulty', 'diff-desc', 'loading', 'hint']) this.el[id] = $(id);
    this.hitT = 0; this.pickT = 0; this.bannerT = 0; this.bannerDur = 1; this.comboT = 0;
    this.arcs = []; this.nums = [];
    for (let i = 0; i < 26; i++) { const d = document.createElement('div'); d.style.display = 'none'; this.el.nums.appendChild(d); this.nums.push({ d, life: 0, p: new THREE.Vector3(), vy: 0 }); }
    this.nc = 0; this._v = new THREE.Vector3();
    this.tab = 'knife';
    this.cache = {};
    this._bind();
    this._buildSlots();
  }

  _bind() {
    const g = this.game, e = this.el;
    $('btn-start').onclick = () => { g.audio.init(); g.audio.ui(); g.startGame(); };
    $('btn-resume').onclick = () => { g.audio.ui(); g.resume(); };
    $('btn-quit').onclick = () => { g.audio.ui(); g.toMenu(); };
    $('btn-again').onclick = () => { g.audio.ui(); g.startGame(); };
    $('btn-menu').onclick = () => { g.audio.ui(); g.toMenu(); };
    const s = g.settings;
    e.sens.value = s.sens; e['sens-v'].textContent = (+s.sens).toFixed(2);
    e.vol.value = Math.round(s.volume * 100); e['vol-v'].textContent = Math.round(s.volume * 100);
    e.quality.value = s.quality;
    e.sens.oninput = () => { s.sens = +e.sens.value; e['sens-v'].textContent = s.sens.toFixed(2); g.saveSettings(); };
    e.vol.oninput = () => { s.volume = e.vol.value / 100; e['vol-v'].textContent = e.vol.value; g.audio.setVolume(s.volume); g.saveSettings(); };
    e.quality.onchange = () => { s.quality = e.quality.value; g.applyQuality(); g.saveSettings(); };
    const showDiff = () => { e['diff-desc'].textContent = DIFFICULTY[s.difficulty].desc; };
    e.difficulty.value = s.difficulty; showDiff();
    e.difficulty.onchange = () => { s.difficulty = e.difficulty.value; showDiff(); g.saveSettings(); };
  }

  /* ---------------- 军械库 ---------------- */
  buildArmory() {
    const g = this.game, lo = g.loadout, e = this.el;
    e.wtabs.innerHTML = '';
    for (const [id, name] of WEAPON_TABS) {
      const b = document.createElement('button');
      const skinName = id === 'knife' ? `${KNIFE_NAMES[lo.knife]} · ${findSkin('knife', lo.skins[lo.knife]).name}` : findSkin('gun', lo.skins[id]).name;
      b.innerHTML = `<span>${name}</span><small>${skinName}</small>`;
      if (id === this.tab) b.className = 'on';
      b.onclick = () => { g.audio.init(); g.audio.ui(); this.tab = id; this.buildArmory(); };
      e.wtabs.appendChild(b);
    }
    e.ktabs.innerHTML = '';
    const isKnife = this.tab === 'knife';
    e.ktabs.style.display = isKnife ? 'flex' : 'none';
    if (isKnife) for (const [id, name] of Object.entries(KNIFE_NAMES)) {
      const b = document.createElement('button'); b.textContent = name; if (lo.knife === id) b.className = 'on';
      b.onclick = () => { g.audio.init(); g.audio.equip(); lo.knife = id; g.saveLoadout(); this.buildArmory(); };
      e.ktabs.appendChild(b);
    }
    const modelId = isKnife ? lo.knife : this.tab, kind = isKnife ? 'knife' : 'gun';
    const list = isKnife ? KNIFE_SKINS : GUN_SKINS;
    e['skin-title'].textContent = `${isKnife ? KNIFE_NAMES[lo.knife] : DEFS[this.tab].name} · 皮肤（${list.length}）`;
    e.skins.innerHTML = '';
    for (const sk of list) {
      const d = document.createElement('div'); d.className = 'skin' + (lo.skins[modelId] === sk.id ? ' on' : '');
      const th = skinThumb(kind, sk.id), r = RARITY[sk.rarity];
      d.innerHTML = `<div class="th${th ? '' : ' stock'}"${th ? ` style="background-image:url(${th})"` : ''}></div><div class="rb" style="background:${r.color}"></div><div class="nm">${sk.name}</div><div class="ra" style="color:${r.color}">${r.name}</div>`;
      d.onclick = () => { g.audio.init(); g.audio.equip(); lo.skins[modelId] = sk.id; g.saveLoadout(); g.applyLoadout(); this.buildArmory(); };
      e.skins.appendChild(d);
    }
    g.showcase.show(modelId, lo.skins[modelId]);
    e.best.textContent = g.best.score; e.bestwave.textContent = g.best.wave;
  }

  show(which) {
    const e = this.el;
    e.menu.classList.toggle('hidden', which !== 'menu');
    e.hud.classList.toggle('hidden', which === 'menu');
    e.pause.classList.toggle('hidden', which !== 'pause');
    e.over.classList.toggle('hidden', which !== 'over');
    if (which === 'menu') this.buildArmory();
  }

  /* ---------------- HUD ---------------- */
  _buildSlots() {
    this.el.slots.innerHTML = '';
    this.slotEls = SLOTS.map((id, i) => { const d = document.createElement('div'); d.innerHTML = `<b>${i + 1}</b><span></span>`; this.el.slots.appendChild(d); return d; });
  }
  setWeapon(ws) {
    const e = this.el, lo = this.game.loadout;
    SLOTS.forEach((id, i) => {
      this.slotEls[i].className = id === ws.cur ? 'on' : '';
      this.slotEls[i].lastChild.textContent = id === 'knife' ? KNIFE_NAMES[lo.knife] : DEFS[id].name;
    });
    const skin = ws.cur === 'knife' ? findSkin('knife', lo.skins[lo.knife]) : findSkin('gun', lo.skins[ws.cur]);
    e.wname.innerHTML = `${ws.displayName} <span style="color:${RARITY[skin.rarity].color}">| ${skin.name}</span>`;
    if (ws.def.type === 'gun') {
      const a = ws.ammo[ws.cur];
      e.mag.textContent = a.mag; e.res.textContent = '/ ' + a.reserve; e.mag.className = a.mag <= a.max * 0.25 ? 'low' : '';
    } else { e.mag.textContent = '∞'; e.res.textContent = ''; e.mag.className = ''; }
  }
  setGrenades(n) { this.el.nades.innerHTML = 'G ' + [0, 1, 2].map((i) => `<i class="${i < n ? '' : 'off'}"></i>`).join(''); }
  setScope(on) { this.el.scope.classList.toggle('on', on); this.el.cross.style.display = on ? 'none' : ''; }
  hitmarker(head, kill) { this.hitT = kill ? 0.32 : 0.18; this.el.hit.className = kill ? 'kill' : head ? 'head' : ''; }
  banner(text, dur = 2.2) { this.el.banner.textContent = text; this.bannerT = this.bannerDur = dur; }
  feed(html, cls = '') {
    const d = document.createElement('div'); d.className = cls; d.innerHTML = html; this.el.feed.appendChild(d);
    while (this.el.feed.children.length > 6) this.el.feed.firstChild.remove();
    setTimeout(() => d.remove(), 3600);
  }
  combo(n) { if (n < 2) return; this.el.combo.textContent = `${n} 连杀  ×${(1 + (n - 1) * 0.25).toFixed(2)}`; this.comboT = 2.2; }
  damageFrom(worldAngle) {
    const d = document.createElement('div'); d.className = 'arc'; this.el.dmgdir.appendChild(d);
    this.arcs.push({ d, a: worldAngle, t: 1.1 });
  }
  dmgNumber(p, amount, head, crit) {
    const n = this.nums[this.nc]; this.nc = (this.nc + 1) % this.nums.length;
    n.p.copy(p); n.p.y += 0.15; n.life = 0.75; n.vy = 1.3; n.ox = (Math.random() - 0.5) * 40;
    n.d.textContent = Math.round(amount); n.d.className = crit ? 'crit' : head ? 'head' : ''; n.d.style.display = '';
  }
  setPerks(perks, defs) {
    this.el.perkbar.innerHTML = defs.filter((p) => perks[p.id]).map((p) => `<span>${p.icon}<i>${perks[p.id]}</i></span>`).join('');
  }
  showPerks(options) {
    const e = this.el;
    if (!options) { e.perkpick.classList.add('hidden'); return; }
    e.perkcards.innerHTML = options.map((p, i) => `<div class="pcard"><span class="key">${i + 1}</span><div class="icon">${p.icon}</div><div class="nm">${p.name}</div><div class="ds">${p.desc}</div><div class="lv">等级 ${p.lv} → ${p.lv + 1}</div></div>`).join('');
    e.perkpick.classList.remove('hidden');
  }
  pickupFlash(type) { const el = this.el.pick; el.className = type; this.pickT = 0.45; }
  gameOver(st, win) {
    const e = this.el;
    e['over-title'].textContent = win ? '胜 利' : '阵 亡'; e['over-title'].style.color = win ? '#ffcf40' : '';
    const acc = st.shots ? Math.round((st.hits / st.shots) * 100) : 0;
    e.stats.innerHTML = [
      ['到达波次', st.wave, st.newWave], ['总得分', st.score, st.newScore], ['击杀', st.kills], ['爆头', st.heads], ['刀杀', st.knifeKills], ['命中率', acc + '%'],
    ].map(([k, v, rec]) => `<div class="${rec ? 'rec' : ''}">${k}${rec ? ' · 新纪录!' : ''}<b>${v}</b></div>`).join('');
    this.show('over');
  }

  update(dt) {
    const g = this.game, e = this.el, pl = g.player, ws = g.weapons;
    // 数值
    const hp = Math.ceil(pl.hp);
    if (this.cache.hp !== hp) { this.cache.hp = hp; e.hp.textContent = hp; e.hpbar.style.width = clamp(pl.hp / pl.maxHp) * 100 + '%'; }
    const ar = Math.ceil(pl.armor);
    if (this.cache.ar !== ar) { this.cache.ar = ar; e.armor.textContent = ar; e.armorbar.style.width = clamp(pl.armor / 300) * 100 + '%'; }
    if (this.cache.wave !== g.wave) { this.cache.wave = g.wave; e.wave.textContent = g.wave; }
    const left = g.enemies.alive + g.spawnQueue.length;
    if (this.cache.left !== left) { this.cache.left = left; e.left.textContent = left; }
    if (this.cache.score !== g.stats.score) { this.cache.score = g.stats.score; e.score.textContent = g.stats.score; }
    // 准星
    const gap = ws.def.type === 'knife' ? 3 : 2.5 + ws.spreadNow * 400;
    e.cross.style.setProperty('--g', gap.toFixed(1) + 'px');
    // 命中标记
    if (this.hitT > 0) { this.hitT -= dt; e.hit.style.opacity = clamp(this.hitT / 0.12); const s = 1 + this.hitT * 1.5; e.hit.style.transform = `scale(${s})`; } else e.hit.style.opacity = 0;
    e.vig.style.opacity = pl.hurtT * 0.7;
    if (this.pickT > 0) { this.pickT -= dt; e.pick.style.opacity = clamp(this.pickT / 0.45) * 0.55; } else e.pick.style.opacity = 0;
    const hf = pl.hp / pl.maxHp;
    e.lowhp.style.opacity = hf < 0.3 && !pl.dead ? (0.35 + 0.25 * Math.sin(g.time * 6)) * (1 - hf / 0.3) + 0.15 : pl.dead ? 0.8 : 0;
    // 横幅
    if (this.bannerT > 0) {
      this.bannerT -= dt; const k = this.bannerT / this.bannerDur;
      e.banner.style.opacity = clamp(Math.min(k * 4, (1 - k) * 8)); e.banner.style.transform = `scale(${1 + (1 - k) * 0.06})`;
    } else e.banner.style.opacity = 0;
    if (this.comboT > 0) { this.comboT -= dt; e.combo.style.opacity = clamp(this.comboT * 2); } else e.combo.style.opacity = 0;
    // 受击方向
    for (let i = this.arcs.length - 1; i >= 0; i--) {
      const a = this.arcs[i]; a.t -= dt;
      if (a.t <= 0) { a.d.remove(); this.arcs.splice(i, 1); continue; }
      const rel = a.a - pl.yaw, r = Math.sin(rel), f = -Math.cos(rel);
      a.d.style.transform = `rotate(${Math.atan2(r, f)}rad)`; a.d.style.opacity = clamp(a.t * 1.6);
    }
    // 伤害数字
    const cam = g.camera, w = innerWidth, h = innerHeight;
    for (const n of this.nums) {
      if (n.life <= 0) continue;
      n.life -= dt;
      if (n.life <= 0) { n.d.style.display = 'none'; continue; }
      n.p.y += n.vy * dt; n.vy -= 2 * dt;
      this._v.copy(n.p).project(cam);
      if (this._v.z > 1) { n.d.style.opacity = 0; continue; }
      n.d.style.left = (this._v.x * 0.5 + 0.5) * w + n.ox + 'px'; n.d.style.top = (-this._v.y * 0.5 + 0.5) * h + 'px';
      n.d.style.opacity = clamp(n.life * 3);
    }
    // Boss 血条
    const boss = g.enemies.list.find((x) => x.T.boss && !x.dead);
    e.boss.classList.toggle('on', !!boss);
    if (boss) e.bossbar.style.width = clamp(boss.hp / boss.maxHp) * 100 + '%';
  }
}
