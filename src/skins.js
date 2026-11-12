// 程序化皮肤：所有贴图都用 canvas 现场绘制，无需任何外部素材
import * as THREE from 'three';
import { fbm, voronoi, mulberry32, clamp, lerp } from './util.js';

export const RARITY = [
  { name: '基础', color: '#9fb2c6' },
  { name: '军规级', color: '#4b69ff' },
  { name: '受限', color: '#8847ff' },
  { name: '保密', color: '#d32ce6' },
  { name: '隐秘', color: '#eb4b4b' },
  { name: '★ 罕见', color: '#ffcf40' },
];

const H = (hex) => [parseInt(hex.slice(1, 3), 16) / 255, parseInt(hex.slice(3, 5), 16) / 255, parseInt(hex.slice(5, 7), 16) / 255];
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
function ramp(stops, t, out) {
  t = clamp(t);
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const a = stops[i - 1], b = stops[i], k = (t - a[0]) / (b[0] - a[0] || 1);
      out[0] = lerp(a[1][0], b[1][0], k); out[1] = lerp(a[1][1], b[1][1], k); out[2] = lerp(a[1][2], b[1][2], k);
      return out;
    }
  }
  const l = stops[stops.length - 1][1]; out[0] = l[0]; out[1] = l[1]; out[2] = l[2]; return out;
}
const R = (list) => list.map(([p, hex]) => [p, H(hex)]);

// 逐像素绘制（低分辨率计算后放大，省时间）
function pixels(ctx, w, h, fn, scale = 2) {
  const sw = Math.ceil(w / scale), sh = Math.ceil(h / scale);
  const c = document.createElement('canvas'); c.width = sw; c.height = sh;
  const cx = c.getContext('2d'), img = cx.createImageData(sw, sh), d = img.data, out = [0, 0, 0];
  let i = 0;
  for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
    fn((x + 0.5) / sw, (y + 0.5) / sh, out);
    d[i++] = clamp(out[0]) * 255; d[i++] = clamp(out[1]) * 255; d[i++] = clamp(out[2]) * 255; d[i++] = 255;
  }
  cx.putImageData(img, 0, 0);
  ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(c, 0, 0, w, h);
}
function grain(ctx, w, h, n, alpha, rng) {
  for (let i = 0; i < n; i++) {
    const v = rng() > 0.5 ? 255 : 0;
    ctx.fillStyle = `rgba(${v},${v},${v},${alpha * rng()})`;
    ctx.fillRect(rng() * w, rng() * h, 1 + rng() * 2, 1 + rng() * 1.5);
  }
}
function scratches(ctx, w, h, n, rng, color = 'rgba(255,255,255,0.12)') {
  ctx.strokeStyle = color; ctx.lineWidth = 1;
  for (let i = 0; i < n; i++) {
    const x = rng() * w, y = rng() * h, l = 10 + rng() * 60, a = (rng() - 0.5) * 0.5;
    ctx.globalAlpha = 0.3 + rng() * 0.7;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

// 多普勒系列共用
function dopplerPaint(stops, seed) {
  const st = R(stops);
  return (ctx, w, h) => pixels(ctx, w, h, (u, v, o) => {
    const q = fbm(u * 3.2 + 5, v * 1.3 + 9, 3, seed);
    const r = fbm(u * 2.2 - 3, v * 1.1 + 2, 3, seed + 40);
    const n = fbm(u * 4.5 + q * 3.2, v * 1.6 + r * 3.2, 4, seed + 80);
    ramp(st, clamp((n - 0.25) * 2.0), o);
    const sh = 0.85 + 0.3 * fbm(u * 30, v * 8, 2, seed + 3);
    o[0] *= sh; o[1] *= sh; o[2] *= sh;
  }, 1);
}

/* ============================ 刀皮肤 ============================ */
// 画布 512x128：u 沿刀身（根部→刀尖），v 横向
export const KNIFE_SKINS = [
  {
    id: 'vanilla', name: '原版 · 精钢', rarity: 1, metal: 1, rough: 0.26,
    paint(ctx, w, h) {
      pixels(ctx, w, h, (u, v, o) => {
        const n = fbm(u * 3, v * 90, 3, 1), m = fbm(u * 60, v * 4, 2, 2);
        const c = 0.66 + n * 0.18 + m * 0.06; o[0] = c; o[1] = c * 1.01; o[2] = c * 1.03;
      }, 1);
    },
  },
  {
    id: 'fade', name: '渐变之色', rarity: 5, metal: 1, rough: 0.14, clearcoat: 1,
    paint(ctx, w, h) {
      const st = R([[0, '#f6c12c'], [0.3, '#ff7a3c'], [0.5, '#ff3f8e'], [0.72, '#9b3bff'], [1, '#2f62ff']]);
      pixels(ctx, w, h, (u, v, o) => {
        const t = u * 0.92 + (v - 0.5) * 0.22 + (fbm(u * 5, v * 3, 3, 4) - 0.5) * 0.1 + 0.04;
        ramp(st, t, o);
      }, 1);
    },
  },
  {
    id: 'doppler', name: '多普勒', rarity: 5, metal: 1, rough: 0.16, clearcoat: 1,
    paint: dopplerPaint([[0, '#03040c'], [0.3, '#141a66'], [0.48, '#6a1fb0'], [0.6, '#e21d4f'], [0.74, '#3a1470'], [1, '#04040e']], 11),
  },
  {
    id: 'gamma', name: '伽玛多普勒', rarity: 5, metal: 1, rough: 0.16, clearcoat: 1,
    paint: dopplerPaint([[0, '#020a05'], [0.3, '#0b4a22'], [0.5, '#1fd066'], [0.62, '#c8ff3a'], [0.76, '#0d5a3a'], [1, '#02100a']], 23),
  },
  {
    id: 'ruby', name: '红宝石', rarity: 5, metal: 1, rough: 0.12, clearcoat: 1,
    paint: dopplerPaint([[0, '#1a0006'], [0.35, '#6e0016'], [0.55, '#ff1238'], [0.7, '#ff5a70'], [0.85, '#8a001c'], [1, '#22000a']], 31),
  },
  {
    id: 'sapphire', name: '蓝宝石', rarity: 5, metal: 1, rough: 0.12, clearcoat: 1,
    paint: dopplerPaint([[0, '#00061c'], [0.35, '#04207a'], [0.55, '#1668ff'], [0.7, '#56c4ff'], [0.85, '#0a2c9a'], [1, '#000a22']], 47),
  },
  {
    id: 'tiger', name: '虎牙', rarity: 4, metal: 1, rough: 0.2, clearcoat: 0.6,
    paint(ctx, w, h) {
      const base = R([[0, '#ff9d00'], [0.5, '#ffc21a'], [1, '#ffe46a']]);
      const dark = H('#b85400');
      pixels(ctx, w, h, (u, v, o) => {
        ramp(base, v * 0.8 + u * 0.2, o);
        const warp = fbm(u * 4, v * 2, 3, 5) * 2.2;
        const s = Math.sin(u * 46 + warp * 3 + Math.sin(v * 5) * 1.2);
        // 条纹从刀背、刀刃两侧交替伸出并逐渐变细
        const side = Math.sin(u * 23 + warp * 1.5) > 0 ? v : 1 - v;
        const m = sstep(0.35, 0.8, s) * sstep(0.95, 0.25, side);
        o[0] = lerp(o[0], dark[0], m); o[1] = lerp(o[1], dark[1], m); o[2] = lerp(o[2], dark[2], m);
      }, 1);
    },
  },
  {
    id: 'web', name: '深红之网', rarity: 4, metal: 0.75, rough: 0.3, clearcoat: 0.5,
    paint(ctx, w, h) {
      const rng = mulberry32(77);
      pixels(ctx, w, h, (u, v, o) => {
        const n = fbm(u * 8, v * 3, 3, 6);
        o[0] = 0.62 + n * 0.2; o[1] = 0.03 + n * 0.05; o[2] = 0.07 + n * 0.05;
      }, 2);
      ctx.strokeStyle = '#0a0406'; ctx.lineCap = 'round';
      const centers = [[w * 0.2, h * 0.3], [w * 0.55, h * 0.75], [w * 0.86, h * 0.35]];
      for (const [cx, cy] of centers) {
        const spokes = 9 + Math.floor(rng() * 3), a0 = rng() * 6.28, ang = [];
        for (let i = 0; i < spokes; i++) ang.push(a0 + (i / spokes) * 6.283 + (rng() - 0.5) * 0.25);
        ctx.lineWidth = 2.2;
        for (const a of ang) { ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * w * 0.3, cy + Math.sin(a) * w * 0.3); ctx.stroke(); }
        ctx.lineWidth = 1.5;
        for (let r = 14; r < w * 0.26; r += 13 + rng() * 9) {
          ctx.beginPath();
          for (let i = 0; i < spokes; i++) {
            const a = ang[i % spokes], b = ang[(i + 1) % spokes] + (i + 1 >= spokes ? 6.283 : 0);
            const x1 = cx + Math.cos(a) * r, y1 = cy + Math.sin(a) * r;
            const x2 = cx + Math.cos(b) * r, y2 = cy + Math.sin(b) * r, am = (a + b) / 2;
            if (i === 0) ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(cx + Math.cos(am) * r * 0.82, cy + Math.sin(am) * r * 0.82, x2, y2);
          }
          ctx.stroke();
        }
      }
    },
  },
  {
    id: 'slaughter', name: '屠夫', rarity: 4, metal: 1, rough: 0.15, clearcoat: 1,
    paint(ctx, w, h) {
      const st = R([[0, '#7a0410'], [0.3, '#d3162a'], [0.5, '#ff5262'], [0.7, '#c20f24'], [1, '#6a020c']]);
      pixels(ctx, w, h, (u, v, o) => {
        const q = fbm(u * 3, v * 1.5, 3, 8);
        const n = fbm(u * 5 + q * 2, v * 2 + q * 2, 3, 9);
        const b = Math.sin(n * 34) * 0.5 + 0.5;
        ramp(st, sstep(0.2, 0.8, b), o);
      }, 1);
    },
  },
  {
    id: 'damascus', name: '大马士革钢', rarity: 3, metal: 1, rough: 0.3,
    paint(ctx, w, h) {
      pixels(ctx, w, h, (u, v, o) => {
        const n = fbm(u * 4, v * 2, 4, 12);
        const l = Math.sin((v * 5 + n * 9 + u * 2) * 6.283) * 0.5 + 0.5;
        const c = 0.3 + sstep(0.25, 0.75, l) * 0.5; o[0] = c; o[1] = c; o[2] = c * 1.04;
      }, 1);
    },
  },
  {
    id: 'bluesteel', name: '蓝钢', rarity: 2, metal: 1, rough: 0.3,
    paint(ctx, w, h) {
      const st = R([[0, '#0f1622'], [0.4, '#24385a'], [0.7, '#4e6f9c'], [1, '#8fa9c8']]);
      pixels(ctx, w, h, (u, v, o) => { ramp(st, fbm(u * 6, v * 2.5, 4, 14) * 1.3 - 0.1, o); }, 1);
      scratches(ctx, w, h, 40, mulberry32(5), 'rgba(200,220,255,0.18)');
    },
  },
  {
    id: 'night', name: '暗夜', rarity: 2, metal: 0.6, rough: 0.5,
    paint(ctx, w, h) {
      ctx.fillStyle = '#101216'; ctx.fillRect(0, 0, w, h);
      const rng = mulberry32(9); grain(ctx, w, h, 2500, 0.08, rng); scratches(ctx, w, h, 25, rng, 'rgba(180,190,200,0.2)');
    },
  },
  {
    id: 'lava', name: '熔岩', rarity: 4, metal: 0.4, rough: 0.55, emissiveIntensity: 3,
    paint(ctx, w, h) { pixels(ctx, w, h, (u, v, o) => lavaPx(u * 9, v * 2.3, o, false), 1); },
    emissive(ctx, w, h) { pixels(ctx, w, h, (u, v, o) => lavaPx(u * 9, v * 2.3, o, true), 1); },
  },
];

function lavaPx(x, y, o, emissive) {
  const wx = x + fbm(x * 1.5, y * 1.5, 2, 3) * 0.6, wy = y + fbm(x * 1.5 + 9, y * 1.5, 2, 4) * 0.6;
  const [d1, d2] = voronoi(wx, wy, 21);
  const g = Math.pow(sstep(0.16, 0.0, d2 - d1), 1.6);
  if (emissive) { o[0] = g; o[1] = g * 0.38; o[2] = g * 0.05; return; }
  const b = 0.05 + fbm(x * 6, y * 6, 3, 2) * 0.07;
  o[0] = b + g * 0.9; o[1] = b + g * 0.3; o[2] = b + g * 0.03;
}

/* ============================ 枪皮肤 ============================ */
// 画布 1024x512：u 沿枪身（枪口→枪托），v 自上而下
export const GUN_SKINS = [
  { id: 'stock', name: '原厂', rarity: 0, stock: true },
  {
    id: 'redline', name: '红线', rarity: 3, metal: 0.55, rough: 0.38, clearcoat: 0.4,
    paint(ctx, w, h) {
      ctx.fillStyle = '#0c0d10'; ctx.fillRect(0, 0, w, h);
      // 碳纤维编织
      for (let y = 0; y < h; y += 8) for (let x = 0; x < w; x += 8) {
        const odd = ((x + y) / 8) & 1;
        const g = ctx.createLinearGradient(x, y, x + (odd ? 8 : 0), y + (odd ? 0 : 8));
        g.addColorStop(0, '#1b1d22'); g.addColorStop(1, '#090a0c');
        ctx.fillStyle = g; ctx.fillRect(x, y, 8, 8);
      }
      const rng = mulberry32(3);
      // 红色主线 + 细线
      ctx.save(); ctx.translate(0, h * 0.5); ctx.rotate(-0.045);
      ctx.fillStyle = '#d4121c'; ctx.fillRect(-20, -h * 0.085, w + 40, h * 0.17);
      ctx.fillStyle = '#ff3a3a'; ctx.fillRect(-20, -h * 0.085, w + 40, 5);
      ctx.fillStyle = '#7a0a10'; ctx.fillRect(-20, h * 0.085 - 6, w + 40, 6);
      ctx.fillStyle = '#e8e8e8'; ctx.fillRect(-20, -h * 0.13, w + 40, 4); ctx.fillRect(-20, h * 0.12, w + 40, 4);
      ctx.restore();
      scratches(ctx, w, h, 70, rng, 'rgba(230,230,230,0.16)'); grain(ctx, w, h, 3000, 0.06, rng);
    },
  },
  {
    id: 'agent', name: '星际特工', rarity: 4, metal: 0.25, rough: 0.42, clearcoat: 0.7,
    paint(ctx, w, h) {
      const rng = mulberry32(42);
      ctx.fillStyle = '#eceae4'; ctx.fillRect(0, 0, w, h);
      const poly = (pts, col) => { ctx.fillStyle = col; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x * w, y * h) : ctx.moveTo(x * w, y * h))); ctx.closePath(); ctx.fill(); };
      // 黑色装甲板
      for (let i = 0; i < 9; i++) {
        const x = rng(), y = rng(), a = 0.08 + rng() * 0.16, b = 0.1 + rng() * 0.3, sk = (rng() - 0.5) * 0.2;
        poly([[x, y], [x + a, y + sk * 0.4], [x + a + sk, y + b], [x + sk * 0.6, y + b * 0.85]], '#15161a');
      }
      // 橙色高亮
      for (let i = 0; i < 7; i++) {
        const x = rng(), y = rng(), a = 0.05 + rng() * 0.14, b = 0.06 + rng() * 0.22, sk = (rng() - 0.5) * 0.25;
        poly([[x, y], [x + a, y - sk * 0.3], [x + a + sk, y + b], [x + sk, y + b]], '#ff7a14');
      }
      ctx.strokeStyle = '#15161a'; ctx.lineWidth = 3;
      for (let i = 0; i < 10; i++) { const x = rng() * w, y = rng() * h; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 60 + rng() * 200, y); ctx.lineTo(x + 100 + rng() * 240, y + (rng() - 0.5) * 120); ctx.stroke(); }
      ctx.fillStyle = '#15161a'; ctx.font = 'bold 26px Menlo, monospace';
      ['XR-07', 'SECTOR 9', 'A-113', '▲ CAUTION'].forEach((t) => ctx.fillText(t, rng() * w * 0.8, 40 + rng() * (h - 60)));
      grain(ctx, w, h, 5000, 0.07, rng); scratches(ctx, w, h, 50, rng, 'rgba(60,60,60,0.25)');
    },
  },
  {
    id: 'neon', name: '霓虹幻彩', rarity: 4, metal: 0.5, rough: 0.3, clearcoat: 1, emissiveIntensity: 0.16,
    paint(ctx, w, h) { neonPaint(ctx, w, h, 1); },
    emissive(ctx, w, h) { neonPaint(ctx, w, h, 0.9); },
  },
  {
    id: 'dragon', name: '炎龙', rarity: 5, metal: 0.8, rough: 0.3, clearcoat: 0.8,
    paint(ctx, w, h) {
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, '#2a0503'); bg.addColorStop(0.5, '#6e0d05'); bg.addColorStop(1, '#1c0302');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      // 龙鳞
      const s = 34;
      for (let row = 0; row * s * 0.55 < h + s; row++) for (let col = -1; col * s < w + s; col++) {
        const x = col * s + (row & 1 ? s / 2 : 0), y = row * s * 0.55;
        const t = fbm(x / 160, y / 160, 3, 5);
        const g = ctx.createRadialGradient(x, y + s * 0.2, 2, x, y, s * 0.62);
        g.addColorStop(0, t > 0.5 ? '#ffd35a' : '#ff8a1e'); g.addColorStop(0.55, t > 0.5 ? '#d9860f' : '#b3260a'); g.addColorStop(1, '#3a0703');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, s * 0.56, 0, Math.PI); ctx.fill();
        ctx.strokeStyle = 'rgba(20,2,0,0.8)'; ctx.lineWidth = 2; ctx.stroke();
      }
      // 火焰纹
      const rng = mulberry32(8);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 14; i++) {
        const x = rng() * w, y = h * (0.6 + rng() * 0.5), g = ctx.createLinearGradient(x, y, x + 80, y - 180);
        g.addColorStop(0, 'rgba(255,190,40,0.55)'); g.addColorStop(1, 'rgba(255,60,0,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x, y);
        ctx.bezierCurveTo(x + 50, y - 60, x - 30, y - 120, x + 60 + rng() * 60, y - 200 - rng() * 80);
        ctx.bezierCurveTo(x + 30, y - 110, x + 90, y - 50, x + 60, y); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    },
  },
  {
    id: 'gold', name: '黄金时代', rarity: 5, metal: 1, rough: 0.22, clearcoat: 0.3,
    paint(ctx, w, h) {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#f2c14a'); g.addColorStop(0.5, '#d9a12a'); g.addColorStop(1, '#b8811a');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      const rng = mulberry32(19);
      // 雕花卷草纹
      ctx.lineCap = 'round';
      for (let i = 0; i < 46; i++) {
        let x = rng() * w, y = rng() * h, a = rng() * 6.28, r = 26 + rng() * 40;
        ctx.strokeStyle = 'rgba(92,56,6,0.75)'; ctx.lineWidth = 3;
        ctx.beginPath();
        for (let k = 0; k < 40; k++) { const rr = r * (1 - k / 44); const px = x + Math.cos(a + k * 0.32) * rr, py = y + Math.sin(a + k * 0.32) * rr; k ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
        ctx.stroke();
        ctx.strokeStyle = 'rgba(255,240,170,0.5)'; ctx.lineWidth = 1; ctx.beginPath();
        for (let k = 0; k < 40; k++) { const rr = r * (1 - k / 44) - 2.5; const px = x + Math.cos(a + k * 0.32) * rr, py = y + Math.sin(a + k * 0.32) * rr; k ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
        ctx.stroke();
        // 叶片
        ctx.fillStyle = 'rgba(92,56,6,0.55)';
        for (let k = 0; k < 3; k++) { const aa = a + k * 2.1, px = x + Math.cos(aa) * r * 1.1, py = y + Math.sin(aa) * r * 1.1; ctx.beginPath(); ctx.ellipse(px, py, 11, 4.5, aa + 0.8, 0, 6.3); ctx.fill(); }
      }
      grain(ctx, w, h, 2500, 0.05, rng);
    },
  },
  {
    id: 'camo', name: '深海迷彩', rarity: 2, metal: 0.3, rough: 0.6,
    paint(ctx, w, h) {
      const cols = ['#0d1b2e', '#16395c', '#2b6a94', '#7fb4cf'];
      const cell = 16;
      for (let y = 0; y < h; y += cell) for (let x = 0; x < w; x += cell) {
        const n = fbm(x / 150, y / 150, 3, 30) + (fbm(x / 40, y / 40, 2, 31) - 0.5) * 0.3;
        ctx.fillStyle = cols[n < 0.4 ? 0 : n < 0.52 ? 1 : n < 0.63 ? 2 : 3]; ctx.fillRect(x, y, cell, cell);
      }
      grain(ctx, w, h, 5000, 0.07, mulberry32(4));
    },
  },
  {
    id: 'lava', name: '熔岩核心', rarity: 5, metal: 0.35, rough: 0.6, emissiveIntensity: 3.2,
    paint(ctx, w, h) { pixels(ctx, w, h, (u, v, o) => lavaPx(u * 14, v * 7, o, false), 2); },
    emissive(ctx, w, h) { pixels(ctx, w, h, (u, v, o) => lavaPx(u * 14, v * 7, o, true), 2); },
  },
  {
    id: 'thunder', name: '紫电', rarity: 4, metal: 0.6, rough: 0.35, clearcoat: 0.6, emissiveIntensity: 2.6,
    paint(ctx, w, h) {
      const g = ctx.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#0b0714'); g.addColorStop(1, '#150a26');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      grain(ctx, w, h, 4000, 0.06, mulberry32(2)); bolts(ctx, w, h, '#b06bff', '#f0deff');
    },
    emissive(ctx, w, h) { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h); bolts(ctx, w, h, '#7a2cff', '#c9a0ff'); },
  },
  {
    id: 'glacier', name: '冰川', rarity: 3, metal: 0.4, rough: 0.2, clearcoat: 1,
    paint(ctx, w, h) {
      const st = R([[0, '#0b2a4a'], [0.35, '#1d6fa8'], [0.6, '#7fd0f0'], [0.85, '#e6faff'], [1, '#ffffff']]);
      pixels(ctx, w, h, (u, v, o) => {
        const [d1, d2, id] = voronoi(u * 10, v * 5, 5);
        ramp(st, id * 0.75 + (d2 - d1) * 0.5, o);
        const e = sstep(0.05, 0.0, d2 - d1); o[0] += e * 0.5; o[1] += e * 0.5; o[2] += e * 0.5;
      }, 2);
    },
  },
];

function neonPaint(ctx, w, h, k) {
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#ff2bd6'); g.addColorStop(0.45, '#7a2cff'); g.addColorStop(1, '#19e6ff');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  const rng = mulberry32(6);
  for (let i = 0; i < 40; i++) {
    const x = rng() * w, y = rng() * h, s = 40 + rng() * 150, a = rng() * 6.28;
    ctx.fillStyle = rng() > 0.5 ? `rgba(8,4,26,${0.5 * k + 0.25})` : `rgba(255,255,255,${0.14 * k})`;
    ctx.beginPath();
    for (let j = 0; j < 3; j++) { const aa = a + j * 2.094 + (rng() - 0.5); ctx.lineTo(x + Math.cos(aa) * s, y + Math.sin(aa) * s); }
    ctx.closePath(); ctx.fill();
  }
  ctx.strokeStyle = '#e8ffff'; ctx.lineWidth = 2.5;
  for (let i = 0; i < 12; i++) { const x = rng() * w, y = rng() * h; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 80 + rng() * 160, y - 60 + rng() * 120); ctx.stroke(); }
  if (k < 1) { ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(0, 0, w, h); }
}
function bolts(ctx, w, h, glow, core) {
  const rng = mulberry32(64);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (let i = 0; i < 9; i++) {
    let x = rng() * w, y = rng() > 0.5 ? 0 : h * rng(), dir = 0.6 + rng() * 1.6;
    const pts = [[x, y]];
    for (let k = 0; k < 16; k++) { dir += (rng() - 0.5) * 1.3; x += Math.cos(dir) * (20 + rng() * 34); y += Math.sin(dir) * (20 + rng() * 34); pts.push([x, y]); }
    const draw = (lw, col, blur) => { ctx.shadowColor = glow; ctx.shadowBlur = blur; ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); pts.forEach(([px, py], j) => (j ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.stroke(); };
    draw(7, glow, 22); draw(2.2, core, 6);
    // 分叉
    const bi = 3 + Math.floor(rng() * 8); let [bx, by] = pts[bi], bd = dir + (rng() - 0.5) * 2;
    ctx.beginPath(); ctx.moveTo(bx, by);
    for (let k = 0; k < 6; k++) { bd += (rng() - 0.5) * 1.2; bx += Math.cos(bd) * 22; by += Math.sin(bd) * 22; ctx.lineTo(bx, by); }
    ctx.lineWidth = 1.6; ctx.strokeStyle = core; ctx.stroke();
  }
  ctx.shadowBlur = 0;
}

/* ============================ 材质缓存 ============================ */
const cache = new Map();
function buildCanvas(kind, skin, which) {
  const [w, h] = kind === 'gun' ? [1024, 512] : [512, 128];
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  skin[which](c.getContext('2d'), w, h);
  return c;
}
function entry(kind, skin) {
  const key = kind + ':' + skin.id;
  let e = cache.get(key);
  if (!e) {
    e = { canvas: skin.paint ? buildCanvas(kind, skin, 'paint') : null, mat: null, thumb: null };
    cache.set(key, e);
  }
  return e;
}
export function findSkin(kind, id) {
  const list = kind === 'gun' ? GUN_SKINS : KNIFE_SKINS;
  return list.find((s) => s.id === id) || list[0];
}
// 返回皮肤材质（原厂枪皮肤返回 null，由模型使用默认材质）
export function skinMaterial(kind, id) {
  const skin = findSkin(kind, id);
  if (skin.stock) return null;
  const e = entry(kind, skin);
  if (!e.mat) {
    const tex = new THREE.CanvasTexture(e.canvas);
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    tex.wrapS = tex.wrapT = THREE.MirroredRepeatWrapping;
    const m = new THREE.MeshPhysicalMaterial({
      map: tex, metalness: kind === 'knife' ? Math.min(skin.metal ?? 0.5, 0.8) : skin.metal ?? 0.5, roughness: skin.rough ?? 0.4,
      clearcoat: skin.clearcoat ?? 0, clearcoatRoughness: 0.12, envMapIntensity: 1.25,
    });
    if (skin.emissive) {
      const et = new THREE.CanvasTexture(buildCanvas(kind, skin, 'emissive'));
      et.colorSpace = THREE.SRGBColorSpace; et.wrapS = et.wrapT = THREE.MirroredRepeatWrapping;
      m.emissiveMap = et; m.emissive.set(0xffffff); m.emissiveIntensity = skin.emissiveIntensity ?? 2;
    }
    e.mat = m;
  }
  return e.mat;
}
// 皮肤缩略图（UI 用）
export function skinThumb(kind, id) {
  const skin = findSkin(kind, id);
  if (skin.stock) return null;
  const e = entry(kind, skin);
  if (!e.thumb) {
    const c = document.createElement('canvas'); c.width = 160; c.height = 80;
    const cx = c.getContext('2d');
    if (kind === 'gun') cx.drawImage(e.canvas, 200, 120, 520, 260, 0, 0, 160, 80);
    else cx.drawImage(e.canvas, 0, 0, e.canvas.width, e.canvas.height, 0, 0, 160, 80);
    e.thumb = c.toDataURL('image/jpeg', 0.85);
  }
  return e.thumb;
}
