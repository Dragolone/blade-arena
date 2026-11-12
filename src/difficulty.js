// 难度：爽玩 = 强化开局满级；普通 / 困难 = 每波结束选一张强化卡，敌人伤害按倍率放大
export const DIFFICULTY = {
  casual: { name: '爽玩', desc: '强化开局全满，敌人伤害正常', hp: 1000, maxPerks: true, enemyHp: 1, enemyDmg: 1 },
  normal: { name: '普通', desc: '每波结束选一张强化卡，敌人伤害 ×4', hp: 1000, maxPerks: false, enemyHp: 1, enemyDmg: 4 },
  hard: { name: '困难', desc: '每波结束选一张强化卡，敌人生命 ×1.35、伤害 ×7', hp: 1000, maxPerks: false, enemyHp: 1.35, enemyDmg: 7 },
};
