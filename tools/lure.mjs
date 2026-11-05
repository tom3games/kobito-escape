// おもちゃが効いている間に猫が捕まえた回数と、その外。node tools/lure.mjs [回数]
import { play } from './sim.mjs'
const N = +(process.argv[2] || 48)
for (const k of ['toyuser', 'normaltoy', 'ground']) {
  let lt = 0, lc = 0, ot = 0, oc = 0, dt = 1 / 60, was
  for (let s = 1; s <= N; s++) { let last = 0; play(k, s, 300, m => { const n = m.catches.filter(c => c.by === 'cat').length, hit = n > last; last = n; if (m.lure > 0) { lt += dt; if (hit) lc++ } else if (m.cat.state !== 'nap' && m.cat.state !== 'box') { ot += dt; if (hit) oc++ } }) }
  console.log(k.padEnd(10), `おもちゃ中 ${lt.toFixed(0)}秒で猫${lc}回（${(lc / lt * 60).toFixed(2)}/分）  それ以外 ${ot.toFixed(0)}秒で猫${oc}回（${(oc / ot * 60).toFixed(2)}/分）`)
}
