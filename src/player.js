// 玩家：移动、跳跃、下蹲、视角、后坐力、受伤
import * as THREE from 'three';
import { clamp, damp, rand, lerp } from './util.js';
import { HALF } from './world.js';

const GRAV = 19, JUMP = 7.1, WALK = 5.3, SPRINT = 7.4, CROUCH = 2.7, RADIUS = 0.36;

export class Player {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.reset();
  }
  reset() {
    this.pos.set(0, 0, 24); this.vel.set(0, 0, 0);
    this.yaw = 0; this.pitch = 0; this.recP = 0; this.recY = 0;
    this.maxHp = 1000; this.hp = 1000; this.armor = 0; this.dead = false;
    this.height = 1.8; this.eye = 1.66; this.crouchK = 0; this.onGround = true; this.sprinting = false;
    this.speed2d = 0; this.stepDist = 0; this.landDip = 0; this.strafeTilt = 0; this.coyote = 0; this.jumpBuf = 0;
    this.shakeT = 0; this.hurtT = 0; this.fov = 78; this.regenT = 0; this.deadK = 0; this.airMax = 0;
  }
  addRecoil(up, side) { this.recP += up; this.recY += side; }

  look(dx, dy, sens) {
    this.yaw -= dx * sens; this.pitch = clamp(this.pitch - dy * sens, -1.5, 1.5);
  }

  damage(amount, fromX, fromZ) {
    if (this.dead || this.game.won || this.game.state !== 'playing') return;
    const g = this.game;
    let dmg = amount;
    if (this.armor > 0) { const ab = Math.min(this.armor, dmg * 0.6); this.armor -= ab; dmg -= ab; g.audio.shieldHit(); }
    this.hp -= dmg; this.hurtT = 1; this.shakeT = Math.min(0.5, this.shakeT + 0.18); this.regenT = 5;
    this.recP += rand(0.008, 0.02); this.recY += rand(-0.015, 0.015);
    g.audio.hurt();
    g.ui.damageFrom(Math.atan2(fromX - this.pos.x, fromZ - this.pos.z));
    if (this.hp <= 0) { this.hp = 0; this.dead = true; g.onPlayerDead(); }
  }
  heal(n) { this.hp = Math.min(this.maxHp, this.hp + n); }

  update(dt, input) {
    const g = this.game, w = g.world, ws = g.weapons, k = input.keys;
    // ----- 输入方向 -----
    let fx = 0, fz = 0;
    if (!this.dead) {
      if (k.KeyW) fz -= 1; if (k.KeyS) fz += 1; if (k.KeyA) fx -= 1; if (k.KeyD) fx += 1;
    }
    const il = Math.hypot(fx, fz);
    if (il > 0) { fx /= il; fz /= il; }
    const sn = Math.sin(this.yaw), cs = Math.cos(this.yaw);
    const wx = fx * cs + fz * sn, wz = -fx * sn + fz * cs;
    const wantCrouch = !this.dead && (k.ControlLeft || k.KeyC);
    // 起身时检查头顶
    let crouch = wantCrouch;
    if (!wantCrouch && this.crouchK > 0.05) {
      const hit = w.raycast(this.pos.x, this.pos.y + 1.0, this.pos.z, 0, 1, 0, 0.85, null);
      if (hit !== Infinity) crouch = true;
    }
    this.crouchK = damp(this.crouchK, crouch ? 1 : 0, 14, dt);
    this.height = lerp(1.8, 1.25, this.crouchK); this.eye = lerp(1.66, 1.12, this.crouchK);
    this.sprinting = !this.dead && k.ShiftLeft && fz < 0 && !crouch && this.onGround && !ws.scoped && ws.state !== 'reload';
    let max = crouch ? CROUCH : this.sprinting ? SPRINT : WALK;
    max *= ws.def.moveMul * (ws.scoped ? 0.5 : 1) * (1 + 0.08 * (g.perks.speed || 0));
    // ----- 加速 / 摩擦 -----
    const v = this.vel;
    if (this.onGround) {
      const acc = 70, fr = 11;
      const sp = Math.hypot(v.x, v.z);
      if (sp > 0) { const drop = Math.max(sp, 2) * fr * dt, ns = Math.max(0, sp - drop) / sp; v.x *= ns; v.z *= ns; }
      v.x += wx * acc * dt; v.z += wz * acc * dt;
      const s2 = Math.hypot(v.x, v.z); if (s2 > max) { v.x *= max / s2; v.z *= max / s2; }
    } else {
      const acc = 14;
      v.x += wx * acc * dt; v.z += wz * acc * dt;
      const s2 = Math.hypot(v.x, v.z), lim = Math.max(max, this.airMax || max); if (s2 > lim) { v.x *= lim / s2; v.z *= lim / s2; }
    }
    // ----- 跳跃 -----
    this.jumpBuf -= dt; this.coyote -= dt;
    if (input.pressed.Space && !this.dead) this.jumpBuf = 0.12;
    if (this.onGround) this.coyote = 0.1;
    if (this.jumpBuf > 0 && this.coyote > 0) {
      v.y = JUMP; this.jumpBuf = 0; this.coyote = 0; this.onGround = false; this.airMax = Math.hypot(v.x, v.z); g.audio.jump();
    }
    v.y -= GRAV * dt;
    const wasGround = this.onGround, vy0 = v.y;
    this.onGround = w.moveBody(this.pos, v, RADIUS, this.height, dt);
    this.pos.x = clamp(this.pos.x, -HALF + RADIUS, HALF - RADIUS); this.pos.z = clamp(this.pos.z, -HALF + RADIUS, HALF - RADIUS);
    if (this.onGround && !wasGround && vy0 < -4) { this.landDip = clamp(-vy0 * 0.012, 0, 0.14); g.audio.land(); }
    this.landDip = damp(this.landDip, 0, 8, dt);
    this.speed2d = Math.hypot(v.x, v.z);
    // 脚步
    if (this.onGround && this.speed2d > 1.5) {
      this.stepDist += this.speed2d * dt;
      if (this.stepDist > (this.sprinting ? 2.3 : 2.0)) { this.stepDist = 0; if (!crouch) g.audio.step(this.sprinting); }
    }
    // 缓慢回血（脱战 5 秒后）
    if (!this.dead) { this.regenT -= dt; const cap = this.maxHp * 0.3; if (this.regenT <= 0 && this.hp < cap) this.hp = Math.min(cap, this.hp + this.maxHp * 0.03 * dt); }
    // ----- 相机 -----
    this.recP = damp(this.recP, 0, ws.cd > -0.08 ? 3.5 : 9, dt); this.recY = damp(this.recY, 0, 7, dt);
    this.hurtT = Math.max(0, this.hurtT - dt * 1.6);
    this.shakeT = Math.max(0, this.shakeT - dt * 1.8);
    const cam = g.camera, sh = this.shakeT * this.shakeT;
    const lateral = -(v.x * cs - v.z * sn);
    this.strafeTilt = damp(this.strafeTilt, clamp(lateral / 7, -1, 1) * 0.02, 8, dt);
    const bobY = this.onGround ? Math.sin(ws.bob * 2) * 0.012 * clamp(this.speed2d / 5) : 0;
    cam.position.set(this.pos.x, this.pos.y + this.eye - this.landDip + bobY, this.pos.z);
    if (this.dead) { this.deadK = Math.min(1, (this.deadK || 0) + dt * 1.2); cam.position.y -= this.deadK * 1.1; }
    cam.rotation.set(
      clamp(this.pitch + this.recP, -1.55, 1.55) + rand(-1, 1) * sh * 0.08,
      this.yaw + this.recY + rand(-1, 1) * sh * 0.08,
      this.strafeTilt + rand(-1, 1) * sh * 0.06 + (this.dead ? this.deadK * 0.7 : 0),
    );
    const targetFov = ws.scoped ? 20 : 78 + (this.sprinting ? 6 : 0);
    this.fov = damp(this.fov, targetFov, ws.scoped ? 22 : 9, dt);
    if (Math.abs(cam.fov - this.fov) > 0.01) { cam.fov = this.fov; cam.updateProjectionMatrix(); }
  }
}
