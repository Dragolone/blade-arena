// 特效：粒子、曳光、弹孔、弹壳、爆炸、冲击波、碎片、浮尘
import * as THREE from 'three';
import { rand, clamp } from './util.js';

const VS = `
attribute float size; attribute vec4 pcolor; varying vec4 vColor; uniform float scale;
void main(){ vColor = pcolor; vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`;
const FS = `
varying vec4 vColor;
void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, d);
  gl_FragColor = vec4(vColor.rgb, vColor.a * a); }`;

class Particles {
  constructor(scene, n, additive) {
    this.n = n; this.cursor = 0;
    this.pos = new Float32Array(n * 3).fill(-999); this.col = new Float32Array(n * 4); this.size = new Float32Array(n);
    this.vel = new Float32Array(n * 3); this.life = new Float32Array(n); this.max = new Float32Array(n);
    this.grav = new Float32Array(n); this.drag = new Float32Array(n); this.grow = new Float32Array(n);
    this.base = new Float32Array(n * 4);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 4));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS, uniforms: { scale: { value: 600 } },
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; this.points.renderOrder = additive ? 11 : 10;
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, life, size, r, g, b, a, grav = 9, drag = 0, grow = 0) {
    const i = this.cursor; this.cursor = (i + 1) % this.n;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = this.max[i] = life; this.size[i] = size; this.grav[i] = grav; this.drag[i] = drag; this.grow[i] = grow;
    this.base[i * 4] = r; this.base[i * 4 + 1] = g; this.base[i * 4 + 2] = b; this.base[i * 4 + 3] = a;
  }
  update(dt) {
    const { pos, vel, life, max, col, base, n } = this;
    for (let i = 0; i < n; i++) {
      if (life[i] <= 0) continue;
      life[i] -= dt;
      const j = i * 3, k = i * 4;
      if (life[i] <= 0) { pos[j + 1] = -999; col[k + 3] = 0; continue; }
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      vel[j] *= dr; vel[j + 1] = vel[j + 1] * dr - this.grav[i] * dt; vel[j + 2] *= dr;
      pos[j] += vel[j] * dt; pos[j + 1] += vel[j + 1] * dt; pos[j + 2] += vel[j + 2] * dt;
      if (pos[j + 1] < 0.02 && this.grav[i] > 0) { pos[j + 1] = 0.02; vel[j + 1] *= -0.35; vel[j] *= 0.6; vel[j + 2] *= 0.6; }
      this.size[i] += this.grow[i] * dt;
      const f = life[i] / max[i];
      col[k] = base[k]; col[k + 1] = base[k + 1]; col[k + 2] = base[k + 2]; col[k + 3] = base[k + 3] * Math.min(1, f * 2.2);
    }
    const a = this.points.geometry.attributes;
    a.position.needsUpdate = true; a.pcolor.needsUpdate = true; a.size.needsUpdate = true;
  }
}

export class FX {
  constructor(scene) {
    this.scene = scene;
    this.sparks = new Particles(scene, 1400, true);
    this.smoke = new Particles(scene, 500, false);
    // 曳光弹
    this.tracers = [];
    const tg = new THREE.BoxGeometry(1, 1, 1); tg.translate(0, 0, 0.5);
    for (let i = 0; i < 28; i++) {
      const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
      m.visible = false; m.frustumCulled = false; scene.add(m); this.tracers.push({ m, life: 0, max: 1 });
    }
    this.tc = 0;
    // 弹孔
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(0.28, 'rgba(8,6,5,0.95)'); gr.addColorStop(0.4, 'rgba(60,54,48,0.6)'); gr.addColorStop(0.7, 'rgba(20,18,16,0.25)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    const dt = new THREE.CanvasTexture(c); dt.colorSpace = THREE.SRGBColorSpace;
    const dm = new THREE.MeshBasicMaterial({ map: dt, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });
    const dg = new THREE.PlaneGeometry(0.16, 0.16);
    this.decals = []; this.dc = 0;
    for (let i = 0; i < 90; i++) { const m = new THREE.Mesh(dg, dm); m.visible = false; scene.add(m); this.decals.push(m); }
    // 闪光灯池（固定数量，避免着色器重编译）
    this.lights = [];
    for (let i = 0; i < 3; i++) { const l = new THREE.PointLight(0xffaa55, 0, 18, 2); scene.add(l); this.lights.push({ l, life: 0, max: 1, peak: 0 }); }
    this.lc = 0;
    // 弹壳
    this.shells = []; this.sc = 0;
    const sg = new THREE.CylinderGeometry(0.006, 0.006, 0.026, 8); sg.rotateX(Math.PI / 2);
    const sm = new THREE.MeshStandardMaterial({ color: 0xd9ad4f, metalness: 1, roughness: 0.3 });
    for (let i = 0; i < 18; i++) { const m = new THREE.Mesh(sg, sm); m.visible = false; scene.add(m); this.shells.push({ m, v: new THREE.Vector3(), w: new THREE.Vector3(), life: 0, floor: 0 }); }
    // 冲击波环
    this.rings = [];
    const rg = new THREE.RingGeometry(0.86, 1, 64); rg.rotateX(-Math.PI / 2);
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      m.visible = false; scene.add(m); this.rings.push({ m, life: 0, max: 1, r0: 0, r1: 1 });
    }
    this.debris = [];
    this._buildDust();
    this._v = new THREE.Vector3(); this._q = new THREE.Quaternion(); this._z = new THREE.Vector3(0, 0, 1);
  }

  _buildDust() {
    const n = 700, pos = new Float32Array(n * 3), ph = new Float32Array(n);
    for (let i = 0; i < n; i++) { pos[i * 3] = rand(-30, 30); pos[i * 3 + 1] = rand(0.2, 6); pos[i * 3 + 2] = rand(-30, 30); ph[i] = rand(100); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('phase', new THREE.BufferAttribute(ph, 1));
    this.dustMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, scale: { value: 600 } },
      vertexShader: `attribute float phase; uniform float time; uniform float scale; varying float vA;
        void main(){ vec3 p = position; p.x += sin(time*0.11+phase)*1.4; p.y += sin(time*0.17+phase*1.7)*0.5; p.z += cos(time*0.09+phase*1.3)*1.4;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = 0.035*scale/max(0.3,-mv.z); gl_Position = projectionMatrix*mv;
        vA = (0.5+0.5*sin(time*0.6+phase*3.0)) * smoothstep(0.6, 3.0, -mv.z) * smoothstep(30.0, 12.0, -mv.z); }`,
      fragmentShader: `varying float vA; void main(){ float d = length(gl_PointCoord-0.5); gl_FragColor = vec4(2.2,1.6,1.0, smoothstep(0.5,0.0,d)*vA*0.55); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const p = new THREE.Points(g, this.dustMat); p.frustumCulled = false; this.scene.add(p);
  }

  // 火花：沿法线半球飞溅
  burst(x, y, z, nx, ny, nz, count, color, speed = 5, life = 0.45, size = 0.05) {
    for (let i = 0; i < count; i++) {
      let vx = rand(-1, 1), vy = rand(-1, 1), vz = rand(-1, 1);
      const l = Math.hypot(vx, vy, vz) || 1, s = speed * rand(0.3, 1);
      vx = (vx / l + nx * 0.9) * s; vy = (vy / l + ny * 0.9) * s; vz = (vz / l + nz * 0.9) * s;
      this.sparks.emit(x, y, z, vx, vy, vz, life * rand(0.5, 1), size * rand(0.6, 1.3), color[0], color[1], color[2], 1, 10, 1.2);
    }
  }
  puff(x, y, z, count, size = 0.3, shade = 0.5, alpha = 0.35, life = 0.9, spread = 0.6) {
    for (let i = 0; i < count; i++) {
      const s = shade * rand(0.7, 1.1);
      this.smoke.emit(x + rand(-0.1, 0.1), y + rand(-0.1, 0.1), z + rand(-0.1, 0.1), rand(-spread, spread), rand(0.1, spread * 1.3), rand(-spread, spread), life * rand(0.6, 1.2), size * rand(0.7, 1.3), s, s * 0.96, s * 0.9, alpha, -0.3, 1.5, size * 1.6);
    }
  }
  tracer(from, to, color = 0xffd9a0, width = 0.018, life = 0.07) {
    const t = this.tracers[this.tc]; this.tc = (this.tc + 1) % this.tracers.length;
    const d = this._v.subVectors(to, from), len = d.length();
    if (len < 0.5) return;
    t.m.position.copy(from); t.m.scale.set(width, width, len);
    t.m.quaternion.setFromUnitVectors(this._z, d.multiplyScalar(1 / len));
    t.m.material.color.set(color).multiplyScalar(3); t.m.material.opacity = 1; t.m.visible = true; t.life = t.max = life;
  }
  decal(x, y, z, nx, ny, nz, size = 1) {
    const m = this.decals[this.dc]; this.dc = (this.dc + 1) % this.decals.length;
    m.position.set(x + nx * 0.012, y + ny * 0.012, z + nz * 0.012);
    m.quaternion.setFromUnitVectors(this._z, this._v.set(nx, ny, nz));
    m.rotateZ(rand(6.28)); m.scale.setScalar(size * rand(0.8, 1.2)); m.visible = true;
  }
  flash(x, y, z, color, intensity, dur = 0.08, dist = 18) {
    const f = this.lights[this.lc]; this.lc = (this.lc + 1) % this.lights.length;
    f.l.position.set(x, y, z); f.l.color.set(color); f.l.distance = dist; f.peak = intensity; f.life = f.max = dur; f.l.intensity = intensity;
  }
  shell(pos, vel, floorY) {
    const s = this.shells[this.sc]; this.sc = (this.sc + 1) % this.shells.length;
    s.m.position.copy(pos); s.v.copy(vel); s.w.set(rand(-20, 20), rand(-20, 20), rand(-20, 20)); s.life = 1.6; s.floor = floorY; s.m.visible = true;
  }
  ring(x, y, z, r0, r1, dur, color) {
    const r = this.rings.find((q) => q.life <= 0) || this.rings[0];
    r.m.position.set(x, y, z); r.life = r.max = dur; r.r0 = r0; r.r1 = r1; r.m.material.color.set(color).multiplyScalar(2.5); r.m.visible = true;
    return r;
  }
  explosion(x, y, z, scale = 1) {
    this.burst(x, y, z, 0, 0.6, 0, Math.floor(70 * scale), [4, 1.6, 0.3], 13 * scale, 0.8, 0.12);
    this.burst(x, y, z, 0, 0.3, 0, Math.floor(40 * scale), [5, 3.5, 1.2], 6 * scale, 0.5, 0.3);
    for (let i = 0; i < 14 * scale; i++) this.sparks.emit(x + rand(-0.5, 0.5) * scale, y + rand(0, 0.8) * scale, z + rand(-0.5, 0.5) * scale, rand(-2, 2), rand(1, 4), rand(-2, 2), rand(0.25, 0.5), rand(0.9, 1.8) * scale, 3.5, 1.5, 0.3, 0.9, -2, 2, 2);
    this.puff(x, y + 0.5, z, Math.floor(16 * scale), 1.1 * scale, 0.16, 0.6, 2.2, 1.6 * scale);
    this.flash(x, y + 0.8, z, 0xff9040, 900 * scale, 0.3, 30);
    this.ring(x, 0.08, z, 0.5, 6.5 * scale, 0.4, 0xffb060);
  }
  addDebris(mesh, vx, vy, vz, life = 2.6) {
    this.debris.push({ m: mesh, vx, vy, vz, wx: rand(-9, 9), wy: rand(-9, 9), wz: rand(-9, 9), life, s0: mesh.scale.x });
  }

  update(dt, viewportH, fov, time) {
    const scale = viewportH / (2 * Math.tan((fov * Math.PI) / 360));
    this.sparks.mat.uniforms.scale.value = scale; this.smoke.mat.uniforms.scale.value = scale;
    this.dustMat.uniforms.scale.value = scale; this.dustMat.uniforms.time.value = time;
    this.sparks.update(dt); this.smoke.update(dt);
    for (const t of this.tracers) {
      if (t.life <= 0) continue;
      t.life -= dt;
      if (t.life <= 0) t.m.visible = false; else t.m.material.opacity = t.life / t.max;
    }
    for (const f of this.lights) {
      if (f.life <= 0) continue;
      f.life -= dt; f.l.intensity = f.life > 0 ? f.peak * (f.life / f.max) : 0;
    }
    for (const s of this.shells) {
      if (s.life <= 0) continue;
      s.life -= dt;
      if (s.life <= 0) { s.m.visible = false; continue; }
      s.v.y -= 12 * dt; s.m.position.addScaledVector(s.v, dt);
      s.m.rotation.x += s.w.x * dt; s.m.rotation.y += s.w.y * dt; s.m.rotation.z += s.w.z * dt;
      if (s.m.position.y < s.floor + 0.01) { s.m.position.y = s.floor + 0.01; s.v.y *= -0.4; s.v.x *= 0.5; s.v.z *= 0.5; s.w.multiplyScalar(0.5); }
    }
    for (const r of this.rings) {
      if (r.life <= 0) continue;
      r.life -= dt;
      if (r.life <= 0) { r.m.visible = false; continue; }
      const k = 1 - r.life / r.max, rad = r.r0 + (r.r1 - r.r0) * k;
      r.m.scale.set(rad, 1, rad); r.m.material.opacity = clamp(1.2 - k); r.radius = rad;
    }
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i]; d.life -= dt;
      if (d.life <= 0) { this.scene.remove(d.m); this.debris.splice(i, 1); continue; }
      d.vy -= 14 * dt;
      const p = d.m.position; p.x += d.vx * dt; p.y += d.vy * dt; p.z += d.vz * dt;
      d.m.rotation.x += d.wx * dt; d.m.rotation.y += d.wy * dt; d.m.rotation.z += d.wz * dt;
      if (p.y < 0.12) { p.y = 0.12; d.vy *= -0.35; d.vx *= 0.6; d.vz *= 0.6; d.wx *= 0.5; d.wy *= 0.5; d.wz *= 0.5; }
      if (d.life < 0.5) d.m.scale.setScalar(d.s0 * (d.life / 0.5));
    }
  }
}
