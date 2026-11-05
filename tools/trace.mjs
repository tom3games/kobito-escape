import { play } from './sim.mjs'
const k = process.argv[2] || 'skilled', seed = +(process.argv[3] || 1), every = +(process.argv[4] || 5), maxT = +(process.argv[5] || 150)
let last = -99
const r = play(k, seed, maxT, (m, me) => { if (m.t - last >= every) { last = m.t; const c = m.cat; console.log(`t${m.t.toFixed(0).padStart(3)} way${m.way} me(${me.x.toFixed(0)},${me.y.toFixed(0)},${me.z.toFixed(0)}) v${Math.hypot(me.vx, me.vy, me.vz).toFixed(0)} ${me.rope ? 'R' : ''}${me.climbing ? 'C' : ''}${me.grounded ? 'G' : ''} cat ${c.state}(${c.x.toFixed(0)},${c.y.toFixed(0)},${c.z.toFixed(0)}) noz(${m.mom.noz.x.toFixed(0)},${m.mom.noz.y.toFixed(0)},${m.mom.noz.z.toFixed(0)}) d${(m.mom.dist || 0).toFixed(0)} lives${m.lives}`) } })
console.log(r)
