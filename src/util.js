// 通用数学 / 动画工具
export const PI = Math.PI;
export const TAU = Math.PI * 2;
export const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const smooth = (t) => t * t * (3 - 2 * t);
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
export const easeIn = (t) => t * t * t;
export const easeOutBack = (t) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
// 与帧率无关的指数趋近
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

// 标量关键帧: keys = [[t, v, ease?], ...]
export function kf(t, keys) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const a = keys[i - 1], b = keys[i];
      const e = b[2] || smooth;
      return lerp(a[1], b[1], e((t - a[0]) / (b[0] - a[0])));
    }
  }
  return keys[keys.length - 1][1];
}

// 向量关键帧: keys = [[t, [..]], ...]，写入 out
export function kfv(t, keys, out) {
  const n = keys[0][1].length;
  let a = keys[0], b = keys[0], k = 0;
  if (t >= keys[keys.length - 1][0]) { a = b = keys[keys.length - 1]; }
  else if (t > keys[0][0]) {
    for (let i = 1; i < keys.length; i++) {
      if (t <= keys[i][0]) { a = keys[i - 1]; b = keys[i]; k = (b[2] || smooth)((t - a[0]) / (b[0] - a[0])); break; }
    }
  }
  for (let i = 0; i < n; i++) out[i] = lerp(a[1][i], b[1][i], k);
  return out;
}

export function mulberry32(seed) {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- 值噪声 / fbm（贴图生成用） ----
function hash2(x, y, s) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(s + 1, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
export function vnoise(x, y, s = 0) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi, s), b = hash2(xi + 1, yi, s), c = hash2(xi, yi + 1, s), d = hash2(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm(x, y, oct = 4, s = 0) {
  let v = 0, amp = 0.5, f = 1, tot = 0;
  for (let i = 0; i < oct; i++) { v += vnoise(x * f, y * f, s + i * 17) * amp; tot += amp; amp *= 0.5; f *= 2.03; }
  return v / tot;
}
// Voronoi：返回 [最近距离, 次近距离, 单元随机值]
export function voronoi(x, y, s = 0) {
  const xi = Math.floor(x), yi = Math.floor(y);
  let d1 = 9, d2 = 9, id = 0;
  for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
    const cx = xi + i, cy = yi + j;
    const px = cx + hash2(cx, cy, s), py = cy + hash2(cx, cy, s + 7);
    const d = Math.hypot(px - x, py - y);
    if (d < d1) { d2 = d1; d1 = d; id = hash2(cx, cy, s + 13); } else if (d < d2) d2 = d;
  }
  return [d1, d2, id];
}
