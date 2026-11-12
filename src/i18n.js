// 界面语言：中文 / English。
// 固定文案放在 STR 里；数据对象（皮肤、强化、敌人、难度、刀）各自带 `en` / `descEn` 字段，用 nm() / dsc() 取当前语言。
// index.html 里带 data-i18n（纯文本）或 data-i18n-html（含标签）的元素由 applyStatic() 统一刷新。

const STR = {
  // HUD
  wave: ['波次', 'WAVE'],
  enemiesLeft: ['剩余敌人', 'ENEMIES'],
  score: ['得分', 'SCORE'],
  hint: ['F 检视　G 手雷　V 切换刀型　R 换弹　Q 上一把武器', 'F inspect · G grenade · V switch knife · R reload · Q last weapon'],
  perkTitle: ['选择一项强化', 'CHOOSE A PERK'],
  perkKeys: ['按 <b>1</b> / <b>2</b> / <b>3</b> 选择', 'Press <b>1</b> / <b>2</b> / <b>3</b> to choose'],
  perkLevel: ['等级 {a} → {b}', 'Level {a} → {b}'],
  combo: ['{n} 连杀  ×{m}', '{n} KILL STREAK  ×{m}'],
  // 菜单
  title: ['刀锋竞技场', 'BLADE ARENA'],
  subtitle: ['BLADE ARENA', '刀 锋 竞 技 场'],
  start: ['开始游戏', 'START'],
  bestScore: ['最高分', 'Best score'],
  bestWave: ['最高波次', 'Best wave'],
  armory: ['军械库', 'ARMORY'],
  settings: ['设置', 'SETTINGS'],
  sens: ['鼠标灵敏度', 'Mouse sensitivity'],
  volume: ['音量', 'Volume'],
  difficulty: ['难度', 'Difficulty'],
  quality: ['画质', 'Graphics'],
  qUltra: ['极高', 'Ultra'],
  qHigh: ['高（推荐）', 'High (recommended)'],
  qMid: ['中', 'Medium'],
  qLow: ['低', 'Low'],
  skins: ['皮肤（{n}）', 'Skins ({n})'],
  equipped: ['已装备', 'EQUIPPED'],
  knifeTab: ['近战刀', 'Knife'],
  keys: [
    '<span><b>WASD</b> 移动</span><span><b>空格</b> 跳跃</span><span><b>Shift</b> 冲刺</span><span><b>Ctrl / C</b> 下蹲</span>' +
    '<span><b>左键</b> 开火 / 轻击</span><span><b>右键</b> 开镜 / 重刺</span><span><b>R</b> 换弹</span><span><b>F</b> 检视</span>' +
    '<span><b>1-4 / 滚轮 / Q</b> 切换武器</span><span><b>G</b> 手雷</span><span><b>V</b> 切换刀型</span><span><b>Esc</b> 暂停</span>',
    '<span><b>WASD</b> move</span><span><b>Space</b> jump</span><span><b>Shift</b> sprint</span><span><b>Ctrl / C</b> crouch</span>' +
    '<span><b>Left click</b> fire / slash</span><span><b>Right click</b> scope / heavy</span><span><b>R</b> reload</span><span><b>F</b> inspect</span>' +
    '<span><b>1-4 / wheel / Q</b> switch weapon</span><span><b>G</b> grenade</span><span><b>V</b> switch knife</span><span><b>Esc</b> pause</span>',
  ],
  tip: ['拖动鼠标旋转武器预览 · 滚轮缩放', 'Drag to rotate the preview · scroll to zoom'],
  paused: ['已暂停', 'PAUSED'],
  resume: ['继续游戏', 'RESUME'],
  toArmory: ['返回军械库', 'Back to armory'],
  again: ['再来一局', 'PLAY AGAIN'],
  victory: ['胜 利', 'VICTORY'],
  defeat: ['阵 亡', 'DEFEATED'],
  stWave: ['到达波次', 'Wave reached'],
  stScore: ['总得分', 'Total score'],
  stKills: ['击杀', 'Kills'],
  stHeads: ['爆头', 'Headshots'],
  stKnife: ['刀杀', 'Knife kills'],
  stAcc: ['命中率', 'Accuracy'],
  newRecord: [' · 新纪录!', ' · New record!'],
  // 战斗播报
  ready: ['准备战斗 · {d}', 'GET READY · {d}'],
  waveN: ['第 {n} 波', 'WAVE {n}'],
  waveBoss: ['第 {n} 波 · BOSS 来袭', 'WAVE {n} · BOSS INCOMING'],
  waveClear: ['波次清除', 'WAVE CLEARED'],
  nextWave: ['下一波即将到来', 'NEXT WAVE INCOMING'],
  bossDown: ['BOSS 已击败 · 胜利', 'BOSS DEFEATED · VICTORY'],
  bossSummon: ['毁灭者召唤了突袭者！', 'The Destroyer summoned rushers!'],
  bossSlam: ['震荡波！跳起来躲避', 'SHOCKWAVE! Jump to dodge'],
  knifeSwitch: ['近战武器 → <b>{k}</b>', 'Knife → <b>{k}</b>'],
  perkGot: ['获得强化 <b>{p}</b>', 'Perk gained: <b>{p}</b>'],
  winBonus: ['通关奖励 <b>+5000</b>', 'Victory bonus <b>+5000</b>'],
  pickHealth: ['生命 <b>+200</b>', 'Health <b>+200</b>'],
  pickAmmo: ['弹药补给', 'Ammo resupply'],
  pickArmor: ['护甲 <b>+100</b>', 'Armor <b>+100</b>'],
  tagBack: ['背刺', 'Backstab'],
  tagHead: ['爆头', 'Headshot'],
  tagKnife: ['刀杀', 'Knife kill'],
  tagBoom: ['炸飞', 'Blown up'],
  tagKill: ['击杀', 'Kill'],
};

export let lang = 'zh';
const idx = () => (lang === 'en' ? 1 : 0);

export function detectLang() {
  const l = (navigator.language || '').toLowerCase();
  return l.startsWith('zh') ? 'zh' : 'en';
}

export function t(key, vars) {
  const e = STR[key];
  if (!e) return key;
  let s = e[idx()];
  if (vars) s = s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ''));
  return s;
}
// 数据对象的名称 / 描述
export const nm = (o) => (lang === 'en' && o.en) || o.name;
export const dsc = (o) => (lang === 'en' && o.descEn) || o.desc;

export function applyStatic() {
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = t(el.dataset.i18n);
  for (const el of document.querySelectorAll('[data-i18n-html]')) el.innerHTML = t(el.dataset.i18nHtml);
}

export function setLang(l) {
  lang = l === 'en' ? 'en' : 'zh';
  applyStatic();
}
