// 遊び方ごとの分布。node tools/sim.mjs [回数] [性格]
import { createHouse, START } from '../shared/house.js'
import { createRunner, stepRunner } from '../shared/runner.js'
import { createRun, stepRun, rankOf } from '../shared/chase.js'
import { createBot, botInput } from '../shared/bot.js'
const world = createHouse(), dt = 1 / 60
export function play(kind, seed, maxT = 300, onStep = null) {
  const me = createRunner({ id: 'me', spawn: START })
  const m = createRun(world, me, seed), b = createBot(kind, seed)
  while (!m.over && m.t < maxT) {
    const inp = botInput(b, me, m, world, dt)
    me.events.length = 0; stepRunner(me, inp, dt, world)
    stepRun(m, dt); m.events.length = 0
    if (onStep) onStep(m, me)
  }
  return { t: +m.t.toFixed(1), won: m.won, rank: rankOf(m), catches: m.catches.map(c => c.by), items: m.itemsGot.length, best: +m.best.toFixed(2), way: m.way, y: Math.round(me.y) }
}
if (process.argv[1] && process.argv[1].endsWith('sim.mjs')) {
  const N = +(process.argv[2] || 12), only = process.argv[3]
  const med = a => { const s = [...a].sort((p, q) => p - q); return s[s.length >> 1] }
  for (const k of ['skilled', 'normal', 'clumsy', 'ground', 'idle']) {
    if (only && only !== k) continue
    const rs = []; for (let i = 1; i <= N; i++) rs.push(play(k, i))
    const by = {}; rs.flatMap(r => r.catches).forEach(b => by[b] = (by[b] || 0) + 1)
    const ranks = [0, 1, 2, 3].map(x => rs.filter(r => r.rank === x).length)
    console.log(`${k.padEnd(8)} 脱出 ${rs.filter(r => r.won).length}/${N}  判定[回収,あと少し,脱出,無傷] ${ranks}  秒 中央${med(rs.map(r => r.t))} 最短${Math.min(...rs.map(r => r.t))} 最長${Math.max(...rs.map(r => r.t))}  進み 中央${med(rs.map(r => r.best))}  捕まる ${JSON.stringify(by)}  拾う 中央${med(rs.map(r => r.items))}`)
    if (process.env.V) console.log(rs.map(r => `${r.won ? 'W' : 'L'} ${r.t}s way${r.way} y${r.y} ${r.catches.join(',')}`).join('\n'))
  }
}
