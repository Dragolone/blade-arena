// 音效：全部用 WebAudio 实时合成（噪声 + 振荡器 + 卷积混响），无音频文件
import { rand } from './util.js';

export class AudioSys {
  constructor() { this.ctx = null; this.volume = 0.6; }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ac = (this.ctx = new AC());
    this.master = ac.createGain(); this.master.gain.value = this.volume;
    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 5; comp.attack.value = 0.002; comp.release.value = 0.18;
    this.master.connect(comp); comp.connect(ac.destination);
    // 噪声缓冲
    this.noiseBuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    // 混响脉冲（指数衰减噪声）
    const len = Math.floor(ac.sampleRate * 1.6), ir = ac.createBuffer(2, len, ac.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const b = ir.getChannelData(ch); for (let i = 0; i < len; i++) b[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    this.reverb = ac.createConvolver(); this.reverb.buffer = ir;
    const rg = ac.createGain(); rg.gain.value = 0.5; this.reverb.connect(rg); rg.connect(this.master);
    // 环境风声
    const wind = ac.createBufferSource(); wind.buffer = this.noiseBuf; wind.loop = true;
    const wf = ac.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 320;
    const wg = ac.createGain(); wg.gain.value = 0.05;
    const lfo = ac.createOscillator(); lfo.frequency.value = 0.13; const lg = ac.createGain(); lg.gain.value = 0.03; lfo.connect(lg); lg.connect(wg.gain); lfo.start();
    wind.connect(wf); wf.connect(wg); wg.connect(this.master); wind.start();
  }
  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }
  _out(g, wet, pan) {
    const ac = this.ctx; let node = g;
    if (pan) { const p = ac.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); node = p; }
    node.connect(this.master);
    if (wet > 0) { const w = ac.createGain(); w.gain.value = wet; node.connect(w); w.connect(this.reverb); }
  }
  // 滤波噪声
  nz(dur, type, f0, f1, vol, { when = 0, q = 1, wet = 0, pan = 0, attack = 0.001 } = {}) {
    const ac = this.ctx; if (!ac) return;
    const t = ac.currentTime + when, s = ac.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
    const f = ac.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(f1, 20), t + dur);
    const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f); f.connect(g); this._out(g, wet, pan);
    s.start(t, Math.random()); s.stop(t + dur + 0.03);
  }
  tone(dur, type, f0, f1, vol, { when = 0, wet = 0, pan = 0, attack = 0.001 } = {}) {
    const ac = this.ctx; if (!ac) return;
    const t = ac.currentTime + when, o = ac.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(f1, 20), t + dur);
    const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); this._out(g, wet, pan);
    o.start(t); o.stop(t + dur + 0.03);
  }

  /* ---------------- 武器 ---------------- */
  rifle() { this.nz(0.26, 'lowpass', 5200, 260, 1.0, { wet: 0.5 }); this.nz(0.04, 'highpass', 4500, 2500, 0.5); this.tone(0.14, 'square', 170, 38, 0.38); this.tone(0.05, 'sawtooth', 900, 200, 0.12); }
  pistol() { this.nz(0.3, 'lowpass', 4200, 180, 1.1, { wet: 0.7 }); this.nz(0.03, 'highpass', 5000, 3000, 0.5); this.tone(0.2, 'square', 130, 30, 0.5); }
  awp() { this.nz(0.6, 'lowpass', 3600, 90, 1.3, { wet: 1.0 }); this.nz(0.05, 'highpass', 4000, 2000, 0.6); this.tone(0.35, 'square', 110, 24, 0.6); this.tone(0.5, 'sine', 60, 30, 0.5); }
  dry() { this.click(0, 0.7); }
  click(when = 0, p = 1, vol = 0.6) { this.nz(0.035, 'bandpass', 4200 * p, 3000 * p, vol, { when, q: 6 }); this.tone(0.03, 'triangle', 2600 * p, 1800 * p, vol * 0.3, { when }); }
  magOut() { this.click(0, 0.6, 0.6); this.nz(0.12, 'bandpass', 1200, 500, 0.35, { when: 0.02, q: 2 }); }
  magIn() { this.nz(0.08, 'bandpass', 900, 1600, 0.4, { q: 2 }); this.click(0.07, 0.75, 0.8); this.tone(0.06, 'sine', 260, 120, 0.3, { when: 0.07 }); }
  bolt() { this.click(0, 0.9, 0.7); this.nz(0.09, 'bandpass', 2400, 1200, 0.4, { when: 0.03, q: 3 }); this.click(0.13, 0.7, 0.8); }
  swish(heavy, when = 0) { this.nz(heavy ? 0.3 : 0.18, 'bandpass', heavy ? 600 : 1300, heavy ? 2600 : 4400, 0.55, { when, q: 1.5, attack: 0.03 }); }
  shing(when = 0, v = 1) { [3100, 4700, 6300].forEach((f, i) => this.tone(0.36 - i * 0.06, 'sine', f, f * 0.985, 0.07 * v, { when, wet: 0.4 })); this.nz(0.16, 'highpass', 6000, 3000, 0.1 * v, { when }); }
  stab() { this.nz(0.13, 'lowpass', 1000, 150, 0.9); this.tone(0.1, 'sine', 120, 50, 0.5); this.tone(0.07, 'square', 1700, 700, 0.12); }
  clank() { this.tone(0.16, 'triangle', 1900, 1500, 0.3, { wet: 0.4 }); this.tone(0.1, 'sine', 3200, 2900, 0.12); this.nz(0.06, 'bandpass', 3000, 2000, 0.5, { q: 3 }); }
  draw() { this.nz(0.12, 'bandpass', 800, 2400, 0.25, { q: 1.2, attack: 0.03 }); this.click(0.1, 0.8, 0.4); }
  scope() { this.click(0, 1.4, 0.3); }

  /* ---------------- 命中 / 反馈 ---------------- */
  hit() { this.tone(0.05, 'square', 1500, 1000, 0.13); this.nz(0.03, 'highpass', 3000, 2000, 0.15); }
  head() { this.tone(0.14, 'sine', 2300, 1900, 0.3, { wet: 0.3 }); this.tone(0.1, 'sine', 3450, 3100, 0.16, { when: 0.02 }); this.nz(0.05, 'bandpass', 2600, 1800, 0.3, { q: 3 }); }
  kill() { this.tone(0.09, 'sine', 880, 880, 0.2); this.tone(0.16, 'sine', 1320, 1320, 0.2, { when: 0.07, wet: 0.3 }); }
  hurt() { this.nz(0.16, 'lowpass', 700, 200, 0.7); this.tone(0.16, 'sawtooth', 190, 90, 0.25); }
  shieldHit() { this.tone(0.12, 'sine', 700, 1400, 0.16); this.nz(0.08, 'bandpass', 2000, 3000, 0.2, { q: 2 }); }
  step(run) { this.nz(0.07, 'lowpass', run ? 620 : 480, 110, run ? 0.24 : 0.16); }
  land() { this.nz(0.12, 'lowpass', 420, 80, 0.5); this.tone(0.1, 'sine', 90, 45, 0.3); }
  jump() { this.nz(0.08, 'lowpass', 500, 200, 0.18); }
  pickup() { this.tone(0.1, 'sine', 660, 990, 0.22); this.tone(0.16, 'sine', 990, 1320, 0.18, { when: 0.08, wet: 0.3 }); }
  ui() { this.tone(0.05, 'sine', 900, 1200, 0.12); }
  equip() { this.click(0, 1.1, 0.4); this.tone(0.14, 'sine', 520, 1040, 0.14, { when: 0.02, wet: 0.3 }); }
  perk() { [523, 659, 784, 1047].forEach((f, i) => this.tone(0.3, 'sine', f, f, 0.15, { when: i * 0.07, wet: 0.5 })); }
  wave() { this.tone(0.3, 'sawtooth', 196, 196, 0.11, { wet: 0.6 }); this.tone(0.5, 'sawtooth', 294, 294, 0.11, { when: 0.26, wet: 0.6 }); this.tone(0.6, 'sine', 588, 588, 0.08, { when: 0.26, wet: 0.6 }); }
  boss() { this.tone(1.4, 'sawtooth', 55, 48, 0.4, { wet: 0.8, attack: 0.2 }); this.tone(1.4, 'sawtooth', 82, 73, 0.25, { wet: 0.8, attack: 0.2 }); this.nz(1.2, 'lowpass', 200, 60, 0.5, { wet: 0.6, attack: 0.3 }); }
  dead() { this.tone(0.9, 'sawtooth', 220, 40, 0.3, { wet: 0.7 }); this.nz(0.7, 'lowpass', 900, 80, 0.5, { wet: 0.5 }); }

  /* ---------------- 世界（带距离衰减 / 声像） ---------------- */
  enemyShot(v, pan) { this.tone(0.16, 'sawtooth', 1500, 260, 0.2 * v, { pan, wet: 0.3 }); this.nz(0.1, 'bandpass', 2600, 800, 0.22 * v, { pan, q: 2 }); }
  enemyDie(v, pan) { this.nz(0.35, 'lowpass', 2400, 120, 0.7 * v, { pan, wet: 0.5 }); this.tone(0.3, 'square', 320, 40, 0.25 * v, { pan }); this.tone(0.2, 'sawtooth', 1800, 200, 0.1 * v, { pan, when: 0.03 }); }
  spawn(v, pan) { this.tone(0.4, 'sine', 180, 720, 0.14 * v, { pan, wet: 0.5, attack: 0.1 }); }
  explosion(v, pan) { this.nz(1.1, 'lowpass', 2200, 50, 1.5 * v, { pan, wet: 1 }); this.tone(0.7, 'sine', 85, 26, 0.9 * v, { pan }); this.nz(0.1, 'highpass', 2500, 1200, 0.5 * v, { pan }); }
  slam(v) { this.tone(0.5, 'sine', 70, 28, 0.9 * v); this.nz(0.5, 'lowpass', 600, 60, 0.9 * v, { wet: 0.8 }); }
  charge(v, pan) { this.tone(0.35, 'sawtooth', 300, 1400, 0.09 * v, { pan, attack: 0.2 }); }
  ricochet(pan) { const f = rand(2200, 4200); this.tone(0.22, 'sine', f, f * 0.55, 0.06, { pan, wet: 0.4 }); }
}
