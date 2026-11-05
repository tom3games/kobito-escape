// 小人になって家の中を逃げろ。ワイヤーは空中出前 sky-delivery と同じ操作。追う役は shared/chase.js
import * as THREE from 'three'
import { FX } from './fx.js?v=2'
import { Q, LOW } from './quality.js?v=2'
import { CharRunnerModel, loadCharAssets, charAssets } from './charmodel.js?v=2'
import { buildHouse } from './house3d.js?v=2'
import { Roomba3d, Cat3d, Mom3d, Slipper3d, Toys3d, buildItems, buildOldMan, loadMomArt, momArt } from './chasers3d.js?v=2'
import { drawPaper, drawStamp } from './paper.js?v=2'
import { createHouse, START, GOAL, WAYS, F } from '../shared/house.js?v=2'
import { createRunner, stepRunner, findAnchor, rayHit, floorAt, RUN } from '../shared/runner.js?v=2'
import { CH, createRun, stepRun, rankOf, nearestThreats, momFace } from '../shared/chase.js?v=2'
import { createBot, botInput } from '../shared/bot.js?v=2'

window.__jsUp = true
const $ = id => document.getElementById(id)
const STEP = 1 / 60
const URL_ = 'https://tom3games.github.io/kobito-escape/'
const store = { get: k => { try { return localStorage.getItem(k) } catch (e) { return null } }, set: (k, v) => { try { localStorage.setItem(k, v) } catch (e) {} } }
const clamp = (v, a, b) => v < a ? a : v > b ? b : v

// ---------------------------------------------------------------- 文言（日英）
const T = {
  ja: {
    logo1: '小人になって', logo2: '家の中を', logo3: '逃げろ', story: '賞味期限2019年のヨーグルトを食べたら、体が2cmになった。',
    flossLabel: 'フロス', start: '非常口へ', how: '遊び方', lang: 'EN', muteOn: '音 入', muteOff: '音 切', loading: '体が縮んでいます',
    howTitle: '冷蔵庫のメモ', ok: 'わかった', tooFar: '届かへん',
    howItems: [
      ['floss', '<b>フロスのケース</b>を押すと前の上へ糸が飛ぶ。もう1回で離す。家具を<b>タッチ</b>しても掛かる'],
      ['stick', '左のボタンで走る。壁に向かって走ると<b>登れる</b>。画面をなぞると見回す'],
      ['roomba', 'ルンバは<b>床だけ</b>。上へ逃げる'],
      ['cat', '猫はおしりを振ったら飛ぶ。<b>赤い輪</b>から離れる'],
      ['vac', 'おかんの掃除機は<b>吸い寄せる</b>。空中でも来る'],
      ['toy', 'ネズミに<b>走って当たる</b>と猫が追う。3回まで'],
      ['exit', '絆創膏3枚で終わり。<b>冷蔵庫の上の非常口</b>まで']
    ],
    credit: '音: Work With Sounds / Werstas, Gravity Sound (CC BY 4.0) ほか CC0。人物: KayKit, Kenney (CC0)。おかんは画像生成。詳しくは CREDITS.md',
    way: { sofa: 'ソファの上へ', shelf: '本棚の上へ', curtain: 'カーテンの上へ', exit: '冷蔵庫の上へ' },
    dist: d => d >= 100 ? `${Math.floor(d / 100)}m${String(Math.round(d % 100)).padStart(2, '0')}cm` : `${Math.round(d)}cm`, up: d => `上へ${d}cm`, down: d => `下へ${d}cm`,
    paused: 'ちょっと休憩', resume: '戻る', quit: 'やめる',
    hint1: 'ケースを押すと糸が飛ぶ', hint2: 'ルンバは床だけ。上へ', hintCat: '赤い輪から離れろ', hintVac: '吸い口から逃げろ',
    momIn: ['おかん', 'ちょっと掃除するでー'],
    momLines: ['なんか動いたな', 'ホコリようさんあるわ', 'これいつのやつ？', 'メルカリで売れるやろか', 'おとん、靴下また裏返しや', 'あの子どこ行ったんやろ', 'ヨーグルト知らん？', 'ゴキブリちゃうやろな', '帰省する言うてたのに'],
    momName: 'おかん', roomba2: 'もう1台買うたで', roach: 'ゴキブリや！！', roachMiss: 'どこ行ったんや', phone: 'ほんでな、あの奥さんがな', phoneEnd: 'ほな切るわ', late: '延長ホース出すで',
    spotLines: ['おった！', 'そこや！', '見えてるで！', '動いたな！'],
    toyLines: ['猫、298円に夢中', '血統書つきやのに', 'おもちゃに負ける猫', '命より298円'], toyRide: 'ルンバごと追っていった', toyBox: '猫は箱のほうが好き', toyEmpty: 'もうネズミは効かへん', lureEnd: '猫、飽きた', lureEndRide: 'ルンバ、我に返った', hintToy: 'ネズミで猫が釣れる',
    catBox: '猫は箱から出ない', catRide: '猫がルンバに乗っている', catWake: '猫が起きた',
    caught: { roomba: 'ルンバにはねられた', cat: 'ねこパンチ', vac: 'ホースに詰まって吐かれた', slipper: 'スリッパの直撃' },
    peeled: '壁からはがされた', oldMan: ['先住の小人', 'デュフフ ここ18年住んでる'], oldGive: '絆創膏をもらった',
    items: { coin: '500円玉。家賃の足し', glasses: 'おかんの老眼鏡。探してたやつ', hesokuri: 'おとんのヘソクリ', dvd: '確定申告2014（なぜか鍵つき）', ring: 'なくした結婚指輪', chip: 'ポテチ。絆創膏1枚ぶん元気' },
    itemNames: { coin: '500円玉', glasses: '老眼鏡', hesokuri: 'おとんのヘソクリ', dvd: '確定申告2014', ring: '結婚指輪' },
    again: 'もう一回', save: '画像を保存', post: 'Xでポスト', toTitle: 'タイトル',
    forms: {
      vac: { head: '紙パック点検票', sub: '吸引者: おかん', list: [['髪の毛', 'たくさん'], ['ポテチのかす', '14枚'], ['輪ゴム', '3本'], ['おとんの靴下の毛玉', '1玉']], you: ['息子', '1名（2cm）'], note: ['なんか詰まったと思ったら、あんたか。', '捨てるとこやったで。ヨーグルトの話はあとでしよか。'] },
      roomba: { head: 'ダストボックス点検票', sub: '回収者: ルンバ（目玉シールつき）', list: [['綿ぼこり', '大'], ['輪ゴム', '2本'], ['なくしたピアス', '片方']], you: ['息子', '1名（2cm）'], note: ['ルンバがなんか食べたと思ったら。ゴミの日は木曜やで。', '床を走るのはやめとき。ルンバの島やで。'] },
      cat: { head: '猫のおもちゃ台帳', sub: '飼い主の猫 記入', list: [['ねずみのおもちゃ', '3匹'], ['ペットボトルのふた', '5個'], ['おとんの靴ひも', '1本']], you: ['飼い主の息子', '1名（2cm）'], note: ['うちの猫がまた何か持ってきた。今日のは動きがええわ。', '猫のお尻が揺れたら、もう遅いで。'] },
      slipper: { head: '害虫駆除記録', sub: '実施者: おかん（スリッパ）', list: [['実施回数', '1回'], ['スリッパ', '左'], ['うちの壁', '少しへこんだ']], you: ['ゴキブリ（息子）', '1匹（2cm）'], note: ['でっかいゴキブリやと思ったのに、よう見たらあんたやんか。'] }
    },
    rowTime: '逃げた時間', rowPlace: '見つかった所', rowCaught: '捕まった回数', listHead: '中身', noteHead: 'おかんより', itemsHead: '持っていた物', foot: 'tom3games.github.io/kobito-escape',
    place: ['じゅうたんの上', 'ソファのあたり', '本棚のあたり', 'カーテンのあたり', '冷蔵庫の前'],
    time: s => `${Math.floor(s / 60)}分${String(Math.floor(s % 60)).padStart(2, '0')}秒`, times: n => `${n}回`,
    winHead: '息子へ', winNote: '冷蔵庫の上に小さい足跡があったで。ヨーグルト知らん？ 2019年のやつ、まだいけると思っててん。', winSign: '母より',
    winRowTime: '脱出までの時間', winRowCaught: '捕まった回数', winItems: '持ち出した物',
    winGag: ['非常口の先は、おとんの靴の中でした。', '非常口の先は、ご近所の回覧板の間でした。', '非常口の先は、となりの家の冷蔵庫の上でした。'],
    stamps: ['回収', 'あと少し', '脱出', '無傷で脱出'],
    postWin: (t, n) => `体が2cmになって実家から脱出した。${t}、捕まった回数${n}回 #小人になって家の中を逃げろ`,
    postLose: (h, t) => `体が2cmになって${h}に書かれた。${t}逃げた #小人になって家の中を逃げろ`
  },
  en: {
    logo1: 'Tiny Me:', logo2: 'Escape', logo3: 'the House', story: 'I ate a yogurt that expired in 2019. Now I am 2 cm tall.',
    flossLabel: 'FLOSS', start: 'To the exit', how: 'How to play', lang: 'JP', muteOn: 'Sound on', muteOff: 'Muted', loading: 'Your body is shrinking',
    howTitle: 'Note on the fridge', ok: 'Got it', tooFar: 'Too far',
    howItems: [
      ['floss', 'Press the <b>floss case</b> to shoot thread up and ahead. Press again to let go. Or <b>tap</b> furniture'],
      ['stick', 'The left button runs. Run into a wall to <b>climb</b>. Drag to look around'],
      ['roomba', 'The Roomba stays <b>on the floor</b>. Go up'],
      ['cat', 'When the cat wiggles, it jumps. Leave the <b>red ring</b>'],
      ['vac', 'Mom\'s vacuum <b>sucks you in</b>, even in mid-air'],
      ['toy', '<b>Run into</b> a toy mouse and the cat chases it. 3 uses'],
      ['exit', 'Three bandages and you are done. Reach the <b>exit on top of the fridge</b>']
    ],
    credit: 'Sounds: Work With Sounds / Werstas, Gravity Sound (CC BY 4.0) and CC0 packs. Characters: KayKit, Kenney (CC0). See CREDITS.md',
    way: { sofa: 'Up on the sofa', shelf: 'Top of the bookcase', curtain: 'Top of the curtain', exit: 'Top of the fridge' },
    dist: d => d >= 100 ? `${(d / 100).toFixed(1)} m` : `${Math.round(d)} cm`, up: d => `${d} cm up`, down: d => `${d} cm down`,
    paused: 'Short break', resume: 'Back', quit: 'Quit',
    hint1: 'Press the case to shoot thread', hint2: 'Roomba stays on the floor. Go up', hintCat: 'Leave the red ring', hintVac: 'Get away from the nozzle',
    momIn: ['Mom', 'Time to vacuum!'],
    momLines: ['Something moved', 'So much dust', 'How old is this?', 'Could I sell this online?', 'Dad, your socks again', 'Where did my boy go?', 'Seen my yogurt?', 'Better not be a roach', 'He said he was visiting'],
    momName: 'Mom', roomba2: 'I bought another one', roach: 'A ROACH!!', roachMiss: 'Where did it go', phone: 'So anyway, that neighbor', phoneEnd: 'Okay, bye now', late: 'Getting the long hose',
    spotLines: ['GOTCHA!', 'THERE!', 'I SEE YOU!', 'IT MOVED!'],
    toyLines: ['Pedigree cat, $2 toy', 'Cat has new priorities', 'Beaten by a toy', 'Worth more than you'], toyRide: 'The Roomba went too', toyBox: 'The box is better', toyEmpty: 'The cat is over mice', lureEnd: 'Cat got bored', lureEndRide: 'Roomba snapped out of it', hintToy: 'Mouse toys lure the cat',
    catBox: 'The cat will not leave its box', catRide: 'The cat is riding the Roomba', catWake: 'The cat woke up',
    caught: { roomba: 'Hit by the Roomba', cat: 'Cat punch', vac: 'Stuck in the hose, spat out', slipper: 'Slipper to the face' },
    peeled: 'Peeled off the wall', oldMan: ['Old resident', 'Doo-fu. Been here 18 years'], oldGive: 'He gave you a bandage',
    items: { coin: 'A 500-yen coin. Rent money', glasses: 'Mom\'s reading glasses', hesokuri: 'Dad\'s secret stash', dvd: 'Tax Return 2014 (with a lock?)', ring: 'The lost wedding ring', chip: 'A potato chip. One bandage back' },
    itemNames: { coin: '500-yen coin', glasses: 'reading glasses', hesokuri: 'Dad\'s stash', dvd: 'Tax Return 2014', ring: 'wedding ring' },
    again: 'Again', save: 'Save image', post: 'Post on X', toTitle: 'Title',
    forms: {
      vac: { head: 'DUST BAG INSPECTION', sub: 'Collected by: Mom', list: [['Hair', 'plenty'], ['Chip crumbs', '14'], ['Rubber bands', '3'], ['Sock fuzz (Dad)', '1 ball']], you: ['Son', '1 (2 cm)'], note: ['Thought something was stuck. It was you. We will talk about the yogurt later.', 'I nearly threw you out. We will talk about the yogurt later.'] },
      roomba: { head: 'ROOMBA BIN INSPECTION', sub: 'Collected by: Roomba (googly eyes)', list: [['Dust bunny', 'large'], ['Rubber bands', '2'], ['Lost earring', '1']], you: ['Son', '1 (2 cm)'], note: ['The Roomba ate something again. Trash day is Thursday.', 'Do not run on the floor. The floor belongs to the Roomba.'] },
      cat: { head: 'CAT TOY LEDGER', sub: 'Kept by: the cat', list: [['Toy mice', '3'], ['Bottle caps', '5'], ['Dad\'s shoelace', '1']], you: ['Owner\'s son', '1 (2 cm)'], note: ['The cat brought something again. This one moves nicely.', 'When the cat wiggles, it is already too late.'] },
      slipper: { head: 'PEST CONTROL RECORD', sub: 'By: Mom (slipper)', list: [['Attempts', '1'], ['Slipper', 'left'], ['Wall', 'slight dent']], you: ['Roach (son)', '1 (2 cm)'], note: ['I thought it was a huge roach. Then I looked closer. It was you.'] }
    },
    rowTime: 'Survived', rowPlace: 'Found near', rowCaught: 'Caught', listHead: 'Contents', noteHead: 'From Mom', itemsHead: 'You were holding', foot: 'tom3games.github.io/kobito-escape',
    place: ['the rug', 'the sofa', 'the bookcase', 'the curtain', 'the fridge'],
    time: s => `${Math.floor(s / 60)}m ${String(Math.floor(s % 60)).padStart(2, '0')}s`, times: n => `${n}`,
    winHead: 'To my son', winNote: 'Tiny footprints on top of the fridge. Seen my yogurt? I thought the 2019 one was still fine.', winSign: 'Mom',
    winRowTime: 'Time to escape', winRowCaught: 'Caught', winItems: 'You took',
    winGag: ['The exit led into Dad\'s shoe.', 'The exit led into the neighborhood bulletin.', 'The exit led to the top of the neighbor\'s fridge.'],
    stamps: ['COLLECTED', 'ALMOST', 'ESCAPED', 'UNSCATHED'],
    postWin: (t, n) => `I shrank to 2 cm and escaped the house in ${t}, caught ${n} times`,
    postLose: (h, t) => `I shrank to 2 cm and ended up in the ${h}. Survived ${t}`
  }
}
let lang = store.get('kob.lang') || ((navigator.language || 'ja').startsWith('ja') ? 'ja' : 'en')
const t = k => T[lang][k]
const HOW_ICONS = {
  floss: '<svg viewBox="0 0 40 40"><rect x="9" y="8" width="22" height="28" rx="4" fill="#7fd5bd" stroke="#123c33" stroke-width="2"/><rect x="9" y="8" width="22" height="10" rx="3" fill="#f4faf7" stroke="#123c33" stroke-width="2"/><path d="M20 8 C24 4 18 2 22 0" fill="none" stroke="#123c33" stroke-width="1.5"/></svg>',
  stick: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#f2eddf" stroke="#b9ae93" stroke-width="3"/><circle cx="15" cy="15" r="2.3" fill="#4a4336"/><circle cx="25" cy="15" r="2.3" fill="#4a4336"/><circle cx="15" cy="25" r="2.3" fill="#4a4336"/><circle cx="25" cy="25" r="2.3" fill="#4a4336"/></svg>',
  roomba: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#24262b"/><circle cx="14" cy="15" r="5" fill="#f8f8f4"/><circle cx="26" cy="15" r="5" fill="#f8f8f4"/><circle cx="14" cy="16" r="2.4"/><circle cx="26" cy="16" r="2.4"/></svg>',
  cat: '<svg viewBox="0 0 40 40"><path d="M6 6 L14 13 Q20 11 26 13 L34 6 L35 25 Q33 36 20 36 Q7 36 5 25Z" fill="#d98a3d"/><ellipse cx="14" cy="22" rx="3.5" ry="4.4" fill="#e6cd3e"/><ellipse cx="26" cy="22" rx="3.5" ry="4.4" fill="#e6cd3e"/><rect x="13.3" y="18" width="1.4" height="8"/><rect x="25.3" y="18" width="1.4" height="8"/></svg>',
  toy: '<svg viewBox="0 0 40 40"><use href="#mouseToy"/></svg>',
  vac: '<svg viewBox="0 0 40 40"><path d="M23 2 L28 4 L22 22 L16 20Z" fill="#8f9499"/><rect x="3" y="21" width="34" height="11" rx="3" fill="#2b2d31"/><rect x="5" y="30" width="30" height="3" fill="#b33a2b"/></svg>',
  exit: '<svg viewBox="0 0 68 76" style="color:#00a65a"><use href="#runner"/></svg>'
}
function applyLang() {
  document.documentElement.lang = lang
  for (const el of document.querySelectorAll('[data-t]')) { const v = t(el.dataset.t); if (typeof v === 'string') el.textContent = v }
  $('howList').innerHTML = t('howItems').map(([ic, s]) => `<li>${HOW_ICONS[ic]}<span>${s}</span></li>`).join('')
  $('btnMute').textContent = Snd.muted ? t('muteOff') : t('muteOn')
}

// ---------------------------------------------------------------- 音（録音素材だけ）
Snd.muted = store.get('kob.mute') === '1'
Snd.def({
  wire: ['snd/swish1.mp3', 'snd/swish2.mp3', 'snd/swish3.mp3'], pluck: ['snd/pluck1.mp3', 'snd/pluck2.mp3'], whoosh: 'snd/swish5.mp3',
  step: ['snd/step1.mp3', 'snd/step2.mp3'], bonk: ['snd/thwack1.mp3', 'snd/thwack2.mp3'], wood: ['snd/woodhit1.mp3', 'snd/woodhit2.mp3'],
  mew: ['snd/cat_mew1.mp3', 'snd/cat_mew2.mp3', 'snd/cat_mew3.mp3'], slap: 'snd/slap.mp3', suck: 'snd/suck.mp3', pop: ['snd/pop1.mp3', 'snd/pop2.mp3'],
  coin: 'snd/coin.mp3', paper: ['snd/paper1.mp3', 'snd/paper2.mp3'], door: 'snd/door.mp3', slam: 'snd/slam.mp3', ding: 'snd/ding.mp3', click: 'snd/click.mp3',
  grunt: ['snd/grunt1.mp3', 'snd/grunt2.mp3', 'snd/grunt3.mp3'], squeak: ['snd/squeak1.mp3', 'snd/squeak2.mp3'],
  win: 'snd/win.mp3', meh: 'snd/meh.mp3', lose: 'snd/lose.mp3'
})
const sfx = (n, o) => Snd.play(n, o)

// ---------------------------------------------------------------- 読み込みの進み具合（ロード画面）
const LM = THREE.DefaultLoadingManager, bootP = { done: 0, total: 0 }
LM.onStart = LM.onProgress = (url, a, b) => { bootP.done = a; bootP.total = b; bootP.at = performance.now(); window.__bootSet && window.__bootSet(0.3 + 0.7 * (b ? a / b : 0)) }
function bootWatch(onReady) {
  const t0 = performance.now()
  const tick = () => {
    if (((charAssets.ready || charAssets.failed) && momArt.done) || performance.now() - t0 > 12000) {
      window.__bootDone = true; window.__bootSet && window.__bootSet(1)
      const b = $('boot'); b.classList.add('out'); setTimeout(() => b.classList.add('hidden'), 380)
      onReady(); return
    }
    setTimeout(tick, 100)
  }
  tick()
}
window.__bootSet && window.__bootSet(0.25)

// ---------------------------------------------------------------- 描画の土台
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true })
renderer.setPixelRatio(Q.pixelRatio)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.08
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
$('view').appendChild(renderer.domElement)
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xdccfb6)
scene.fog = new THREE.FogExp2(0xe6d8bd, 0.0017)
// 窓（東）から差す光。影は自分の周りだけ
const sun = new THREE.DirectionalLight(0xfff0d8, 2.5)
sun.userData.dir = new THREE.Vector3(0.68, 0.62, -0.38).normalize()
sun.castShadow = true
const SR = LOW ? 55 : 85
sun.shadow.mapSize.set(Q.shadow, Q.shadow)
Object.assign(sun.shadow.camera, { left: -SR, right: SR, top: SR, bottom: -SR, near: 1, far: 460 })
sun.shadow.normalBias = 0.05; sun.shadow.bias = -0.0005
scene.add(sun, sun.target)
scene.add(new THREE.HemisphereLight(0xfff4e0, 0x8a6e4e, 1.55))
{ const env = new THREE.Scene(); env.background = new THREE.Color(0xc8bba2); const pm = new THREE.PMREMGenerator(renderer), add = (c, x, y, z, s) => { const m = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshBasicMaterial({ color: c })); m.position.set(x, y, z); env.add(m) }; add(0xffffff, 0, 30, 0, 18); add(0xffe9c0, 30, 10, 0, 16); add(0x5a4a3a, 0, -30, 0, 40); scene.environment = pm.fromScene(env, 0.05, 0.1, 100).texture; scene.environmentIntensity = 0.55 }
const camera = new THREE.PerspectiveCamera(64, 1, 0.2, 1500)
const world = createHouse()
const built = buildHouse(scene, renderer)
const fx = new FX(scene, world)
const items3d = buildItems(scene)
const oldMan = buildOldMan(scene); oldMan.g.position.set(CH.old.x, CH.old.y, CH.old.z); oldMan.g.rotation.y = 1.2
const roomba3d = [new Roomba3d(scene), new Roomba3d(scene)]
const cat3d = new Cat3d(scene)
const mom3d = new Mom3d(scene)
const slipper3d = new Slipper3d(scene)
const toys3d = new Toys3d(scene)
loadMomArt()
// デンタルフロス
const ropeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 5).rotateX(Math.PI / 2).translate(0, 0, 0.5), new THREE.MeshBasicMaterial({ color: 0xeafff5, fog: false }))
ropeMesh.visible = false; scene.add(ropeMesh)
const aimMark = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.8, 24), new THREE.MeshBasicMaterial({ color: 0xc6ffe6, transparent: true, opacity: 0.95, depthTest: false, side: THREE.DoubleSide, fog: false }))
aimMark.renderOrder = 5; aimMark.visible = false; scene.add(aimMark)

// ---------------------------------------------------------------- 状態
let mode = 'title'
let me = null, run = null, model = null, demo = null
let paused = false, dbgPause = false, endAt = 0, photoCv = null, hitStop = 0, fovKick = 0, flashA = 0, sayT = 0, lineT = 0, lineI = 0, hinted = {}, firstWire = false, stampAt = 0, stampD = null
const cam = { hd: 0, pitch: 0.22, pos: new THREE.Vector3(), off: new THREE.Vector3(0, 3, -6), look: new THREE.Vector3(), lookOff: new THREE.Vector3(0, 1, 10), fov: 64, bank: 0 }
const _v = new THREE.Vector3()
// 人物の素材が読めなかった時の代わり（遊べなくしない）
class FallbackModel {
  constructor() { this.group = new THREE.Group(); const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 1.05, 4, 10), new THREE.MeshStandardMaterial({ color: 0xf2efe6 })); m.position.y = 0.9; m.castShadow = true; this.group.add(m); this.handWorld = new THREE.Vector3() }
  update(s) { this.group.position.set(s.x, s.y, s.z); this.group.rotation.y = s.yaw; this.handWorld.set(s.x, s.y + 1.5, s.z) }
  dispose() {}
}
function newModel() { if (model) { scene.remove(model.group); model.dispose(); model = null } model = charAssets.ready ? new CharRunnerModel() : new FallbackModel(); scene.add(model.group) }
loadCharAssets().then(() => { if (charAssets.ready && !(model instanceof CharRunnerModel)) newModel() })

// ---------------------------------------------------------------- 入力（タッチ: なぞる=見回す／軽くタッチ=ワイヤー）
let pendingWire = null
const gest = new Map(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2()
renderer.domElement.addEventListener('pointerdown', e => { Snd.init(); if (mode !== 'play' || paused) return; gest.set(e.pointerId, { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), moved: false }) })
addEventListener('pointermove', e => {
  const g = gest.get(e.pointerId); if (!g) return
  const dx = e.clientX - g.lx, dy = e.clientY - g.ly; g.lx = e.clientX; g.ly = e.clientY
  if (!g.moved && Math.hypot(e.clientX - g.x, e.clientY - g.y) > 12) g.moved = true
  if (!g.moved) return
  cam.hd -= dx * 0.00792; cam.pitch = clamp(cam.pitch + dy * 0.00528, -0.35, 1)   // 感度は空中出前の最新と同じ（2026-11-05 本人「ほんの少しだけ上げて」）
})
addEventListener('pointerup', e => { const g = gest.get(e.pointerId); if (!g) return; gest.delete(e.pointerId); if (!g.moved && performance.now() - g.t < 450 && mode === 'play' && !paused) aimAt(e.clientX, e.clientY) })
addEventListener('pointercancel', e => gest.delete(e.pointerId))
function aimAt(cx, cy) {
  const rc = renderer.domElement.getBoundingClientRect()
  ndc.set((cx - rc.left) / rc.width * 2 - 1, -((cy - rc.top) / rc.height) * 2 + 1)
  ray.setFromCamera(ndc, camera)
  const o = ray.ray.origin, d = ray.ray.direction
  const b = me && me.rope ? null : rayHit(world, o.x, o.y, o.z, d.x, d.y, d.z, 400, me ? Math.max(0, (me.x - o.x) * d.x + (me.y + 1 - o.y) * d.y + (me.z - o.z) * d.z - 1) : 0)
  let at = b
  // 地面ワイヤー: 空中にいて、床や家具の上面をちゃんとタップした時だけ。掛かる物にも当たる時はそちらを優先
  if (me && !me.rope && !me.grounded && !me.climbing) {
    const g = groundRay(o, d, RUN.wireRange + 60)
    const tb = b ? Math.hypot(b.x - o.x, b.y - o.y, b.z - o.z) : Infinity
    if (g && !(tb < g.t + 6)) at = { x: g.x, y: g.y, z: g.z, ground: true }
  }
  pendingWire = { at, sx: cx, sy: cy }
}
function groundRay(o, d, maxT) {
  const below = k => { const x = o.x + d.x * k, y = o.y + d.y * k, z = o.z + d.z * k; return y <= floorAt(world, x, z, y).h }
  for (let k = 1; k < maxT; k += 1) {
    if (!below(k)) continue
    let a = k - 1, b2 = k
    for (let i = 0; i < 6; i++) { const m = (a + b2) / 2; if (below(m)) b2 = m; else a = m }
    const x = o.x + d.x * b2, z = o.z + d.z * b2
    return { x, y: floorAt(world, x, z, o.y + d.y * b2 + 0.5).h, z, t: b2 }
  }
  return null
}
// スティックは左下に固定（2026-11-03 本人）
const stick = { x: 0, y: 0, id: null }
{
  const el = $('stick'), knob = el.querySelector('.knob')
  const ctr = () => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, R: r.width / 2 } }
  const upd = e => { const c = ctr(); let dx = (e.clientX - c.x) / c.R, dy = (e.clientY - c.y) / c.R; const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l } stick.x = dx; stick.y = dy; knob.style.transform = `translate(${dx * c.R * 0.56}px,${dy * c.R * 0.56}px)` }
  const grab = e => { stick.id = e.pointerId; upd(e); el.classList.remove('pulse') }
  el.addEventListener('pointerdown', e => { Snd.init(); if (stick.id != null) return; e.preventDefault(); e.stopPropagation(); grab(e) })
  addEventListener('pointermove', e => {
    if (e.pointerId === stick.id) { upd(e); return }
    if (stick.id == null && gest.has(e.pointerId)) { const c = ctr(); if (Math.hypot(e.clientX - c.x, e.clientY - c.y) < c.R) { gest.delete(e.pointerId); grab(e) } }
  }, true)
  const end = e => { if (e.pointerId !== stick.id) return; stick.id = null; stick.x = stick.y = 0; knob.style.transform = '' }
  addEventListener('pointerup', end, true); addEventListener('pointercancel', end, true)
  $('btnWire').addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); Snd.init(); pendingWire = { at: null, key: true } })
}
function screenBasis() { const e = camera.matrixWorld.elements; const rx = e[0], rz = e[2], fx = -e[8], fz = -e[10]; const a = Math.hypot(rx, rz) || 1, b = Math.hypot(fx, fz) || 1; return { r: { x: rx / a, z: rz / a }, f: { x: fx / b, z: fz / b } } }
function gather() {
  let thr = 0, wallY = null, wallX = null, moveDir = null
  const { r: SR2, f: SF } = screenBasis()
  if (stick.id != null) {
    const mag = Math.min(1, Math.hypot(stick.x, stick.y))
    if (mag > 0.15) {
      const dx = SR2.x * stick.x - SF.x * stick.y, dz = SR2.z * stick.x - SF.z * stick.y, l = Math.hypot(dx, dz) || 1
      moveDir = { x: dx / l, z: dz / l }; thr = Math.min(1, mag * 1.3)
    }
    if (me.climbing) {
      const cl = me.climbing, sideSign = SR2.x * cl.nz - SR2.z * cl.nx >= 0 ? 1 : -1
      wallY = Math.abs(stick.y) > 0.25 ? -stick.y : 0; wallX = Math.abs(stick.x) > 0.25 ? stick.x * sideSign : 0
    }
  }
  const inp = { throttle: thr, brake: 0, steer: 0, jump: false, wire: false, wallY, wallX, moveDir }
  inp.wireYaw = moveDir ? Math.atan2(moveDir.x, moveDir.z) : Math.atan2(SF.x, SF.z)
  if (pendingWire) { inp.wire = true; if (pendingWire.at) inp.wireAt = pendingWire.at; me._tap = pendingWire; pendingWire = null }
  return inp
}

// ---------------------------------------------------------------- 画面の切り替え
function show(id) { for (const s of ['title', 'how', 'pause', 'result']) $(s).classList.toggle('hidden', s !== id); $('hud').classList.toggle('hidden', mode !== 'play'); $('danger').style.opacity = 0; flashA = 0 }
function resetChase3d() { for (const k in items3d) items3d[k].visible = true; oldMan.g.visible = false; slipper3d.update(null, 9); cat3d.ring.visible = cat3d.fill.visible = false }
function toTitle() {
  mode = 'title'; paused = false; me = null; run = null; endAt = 0; stampD = null
  const r = createRunner({ id: 'demo', spawn: START })
  demo = { r, m: createRun(world, r, 7), b: createBot('skilled', 7), seed: 7 }
  resetChase3d(); newModel(); cam.hd = 0; cam.pitch = 0.3
  show('title')
  Snd.loop('bgm', 'snd/bgm_title.mp3', 0.2); Snd.loop('amb', 'snd/city_street_loop.wav', 0.1); Snd.loop('vac', null); Snd.loop('rmb', null); Snd.loop('wind', null); Snd.loop('purr', null); Snd.loop('frg', null)
}
function startRun(seed = Math.floor(Math.random() * 1e6)) {
  Snd.init(); sfx('click')
  mode = 'play'; paused = false; demo = null; endAt = 0; stampD = null; photoCv = null; hitStop = 0; lineT = 11; lineI = seed % 9; hinted = {}; firstWire = false; momDoor = false; spotI = seed % 4; toyI = seed % 4; cutT = 0; $('momCut').classList.add('hidden')
  me = createRunner({ id: 'me', spawn: START }); run = createRun(world, me, seed); run.seed = seed
  resetChase3d(); newModel()
  oldMan.g.visible = run.rare.oldMan
  cam.hd = 0; cam.pitch = 0.22; cam.off.set(0, 3, -6); cam.lookOff.set(0, 1, 10)
  show(null)
  $('stick').classList.add('pulse'); $('btnWire').classList.add('pulse')
  drawPlasters(CH.lives); drawToys(CH.toy.uses)
  Snd.loop('bgm', 'snd/bgm_play.mp3', 0.15); Snd.loop('amb', 'snd/city_street_loop.wav', 0.1); Snd.loop('frg', 'snd/fridge_loop.wav', 0.0001); Snd.loop('rmb', 'snd/roomba_loop.wav', 0.0001); Snd.loop('vac', 'snd/vacuum_loop.wav', 0.0001); Snd.loop('wind', 'snd/wind_loop.wav', 0.0001); Snd.loop('purr', 'snd/purr_loop.wav', 0.0001)
  say(t('hint1'), 3)
}
function setPause(p) { if (mode !== 'play') return; paused = p; $('pause').classList.toggle('hidden', !p) }
// 別のアプリへ行ったら止める。音も止めて、戻ったら鳴らす
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { if (mode === 'play' && run && !run.over) setPause(true); if (Snd.ctx) Snd.ctx.suspend() }
  else if (Snd.ctx && Snd.ctx.state === 'suspended' && !window.__muteOk) Snd.ctx.resume()
})
let plastersN = -1
function drawPlasters(n) {
  const el = $('plasters')
  if (el.children.length !== CH.lives) el.innerHTML = '<i class="pl"></i>'.repeat(CH.lives)
  for (let i = 0; i < CH.lives; i++) el.children[i].classList.toggle('off', i >= n)
  plastersN = n
}

// ---------------------------------------------------------------- 画面の文字（同時に1つ。読める長さは出す）
function say(html, sec) {
  const plain = html.replace(/<[^>]+>/g, '')
  const need = 0.9 + plain.length * 0.09
  const el = $('say'); el.innerHTML = html; el.classList.remove('hidden'); sayT = Math.max(sec || 0, need)
}
const sayWho = (who, line) => say(`<small>${who}</small>${line}`)
let momDoor = false, spotI = 0, toyI = 0, cutT = 0
// おかんの顔のカットイン（文字なし。3D の板は遠い・後ろにいることが多いので、顔はここで見せる）
function momCut(k, sec = 1.5) { const im = momArt.faces[k]; if (!im) return; const el = $('momCut'), i2 = el.firstElementChild; i2.src = im.src; el.dataset.k = k; el.classList.remove('hidden'); el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; cutT = sec; log.push({ src: 'g', t: 'cut', k, at: run ? +run.t.toFixed(2) : 0 }) }
const momSay = line => sayWho(t('momName'), line)
function compassAng(gx, gz, px, pz) {
  const e = camera.matrixWorld.elements, fx = -e[8], fz = -e[10], rx = -fz, rz = fx
  const dx = gx - px, dz = gz - pz
  return Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz)
}
const U2CM = 1 / 0.75
function updateHud(dt) {
  $('tClock').textContent = `${Math.floor(run.t / 60)}:${String(Math.floor(run.t % 60)).padStart(2, '0')}`
  if (plastersN !== run.lives) drawPlasters(run.lives)
  if (toysN !== run.toyUses) drawToys(run.toyUses)
  const lk = run.lure > 0 ? run.lure / CH.toy.lure : 0; if ($('toyBar')._k !== lk) { $('toyBar')._k = lk; $('toyBar').style.transform = `scaleX(${lk.toFixed(3)})`; $('toys').classList.toggle('live', lk > 0) }
  if (cutT > 0) { cutT -= dt; if (cutT <= 0) $('momCut').classList.add('hidden') }
  if (!hinted.t && run.toyUses > 0 && run.t > 2 && sayT <= 0) for (const y of run.toys) if (y.state === 'idle' && Math.hypot(y.x - me.x, y.y - me.y, y.z - me.z) < 42) { hinted.t = 1; say(t('hintToy')); break }
  const w = WAYS[run.way]
  const nm = t('way')[w.key]; if ($('signName')._v !== nm) { $('signName')._v = nm; $('signName').textContent = nm }
  const dh = Math.hypot(w.x - me.x, w.z - me.z) * U2CM, dy = (w.y - me.y) * U2CM
  const txt = Math.abs(dy) > 14 && dh < 60 ? (dy > 0 ? t('up') : t('down'))(Math.round(Math.abs(dy))) : t('dist')(dh) + (dy > 30 ? ' ' + t('up')(Math.round(dy)) : '')
  if ($('signDist')._v !== txt) { $('signDist')._v = txt; $('signDist').textContent = txt }
  camera.updateMatrixWorld()
  $('signArrow').style.transform = `rotate(${compassAng(w.x, w.z, me.x, me.z)}rad)`
  if (sayT > 0) { sayT -= dt; if (sayT <= 0) $('say').classList.add('hidden') }
  // 画面の外から来る物の向き
  const list = nearestThreats(run), W = innerWidth, H = innerHeight, seen = {}
  let worst = 0
  for (const th of list) {
    const k = th.k; if (seen[k] && seen[k] < th.d) continue; seen[k] = th.d
    const el = threatEl[k]; if (!el) continue
    const lim = k === 'roomba' ? (me.y < 10 ? 95 : 0) : 100
    worst = Math.max(worst, th.d < 40 ? (k === 'roomba' && me.y >= 10 ? 0 : 1 - th.d / 40) : 0)
    _v.set(th.x, th.y, th.z).project(camera)
    const behind = _v.z > 1, on = !behind && Math.abs(_v.x) < 0.95 && Math.abs(_v.y) < 0.95
    if (th.d > lim || on) { el.classList.add('hidden'); continue }
    el.classList.remove('hidden')
    const a = compassAng(th.x, th.z, me.x, me.z), R2 = Math.min(W, H) * 0.42, cx = W / 2 + Math.sin(a) * R2, cy = H * 0.5 - Math.cos(a) * Math.min(H * 0.34, R2 * 1.6)
    el.style.transform = `translate(${clamp(cx, 26, W - 26).toFixed(0)}px,${clamp(cy, 96, H - 200).toFixed(0)}px)`
  }
  for (const k in threatEl) if (seen[k] == null) threatEl[k].classList.add('hidden')
  $('danger').style.opacity = (worst * 0.75).toFixed(2)
}
let toysN = -1
function drawToys(n) {
  const el = $('toyTokens')
  if (el.children.length !== CH.toy.uses) el.innerHTML = '<svg class="ty" viewBox="0 0 40 40"><use href="#mouseToy"/></svg>'.repeat(CH.toy.uses)
  for (let i = 0; i < CH.toy.uses; i++) el.children[i].classList.toggle('off', i >= n)
  toysN = n
}
const threatEl = {}; for (const el of document.querySelectorAll('.threat')) threatEl[el.dataset.k] = el

// ---------------------------------------------------------------- 出来事
const log = []
function onRunnerEvent(e) {
  log.push({ src: 'r', ...e, at: run ? +run.t.toFixed(2) : 0 })
  if (e.t === 'wire') { sfx('wire', { vol: 0.7 }); sfx('pluck', { vol: 0.35, delay: 0.05, rate: 1.3 }); if (!firstWire) { firstWire = true; $('btnWire').classList.remove('pulse'); $('stick').classList.remove('pulse') } }
  else if (e.t === 'wireMiss') {
    sfx('wire', { vol: 0.35, rate: 1.3 })
    const el = $('miss'); el.classList.remove('hidden'); el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; clearTimeout(el._t); el._t = setTimeout(() => el.classList.add('hidden'), 800)
  }
  else if (e.t === 'land') { sfx('step', { vol: Math.min(1, 0.3 + e.impact / 20) }); if (e.impact > 14) { sfx('bonk', { vol: 0.5 }); fx.addShake(Math.min(0.6, e.impact / 40)) } }
  else if (e.t === 'bonk') { sfx('bonk', { vol: 0.8 }); fx.addShake(0.4) }
  else if (e.t === 'unwire' && !e.auto) { const v = Math.hypot(me.vx, me.vy, me.vz); if (v > 16) { sfx('whoosh', { vol: Math.min(0.8, v / 50), rate: 0.9 + Math.random() * 0.2 }); fovKick = Math.min(6, (v - 16) * 0.3) } }
}
function onRunEvent(e) {
  log.push({ src: 'm', ...e, at: +run.t.toFixed(2) })
  const C = T[lang]
  if (e.t === 'roombaOn') { sfx('click', { vol: 0.7, rate: 0.7 }); if (!hinted.r) { hinted.r = 1; say(t('hint2')) } }
  else if (e.t === 'roomba2') { momSay(t('roomba2')); sfx('door') }
  else if (e.t === 'catWake') { sfx('mew', { vol: 0.8 }); if (!e.quiet) say(t('catWake')) }
  else if (e.t === 'crouch' && e.quiet) sfx('mew', { vol: 0.25, rate: 1.3 })
  else if (e.t === 'crouch') { if (!hinted.c) { hinted.c = 1; say(t('hintCat')) } sfx('mew', { vol: 0.35, rate: 1.1 }) }
  else if (e.t === 'leap') sfx('whoosh', { vol: 0.5, rate: 0.75 })
  else if (e.t === 'catLand') { const nv = clamp(1 - e.near / 120, 0.1, 1); sfx('wood', { vol: nv }); fx.addShake(0.45 * nv); fx.dust(e.x, e.y + 1, e.z, 16, [0.78, 0.72, 0.62], 1.5) }
  else if (e.t === 'swipe') sfx('whoosh', { vol: 0.5, rate: 1.3 })
  else if (e.t === 'momIn') { sfx('door', { vol: 1 }); sfx('slam', { vol: 0.8, delay: 0.25 }); sayWho(C.momIn[0], C.momIn[1]); fx.addShake(0.6); momCut('normal', 1.8) }
  else if (e.t === 'momSpot') { const L = t('spotLines'); momSay(L[spotI++ % L.length]); momCut('spot', 1.4); sfx('grunt', { vol: 0.7, rate: 0.7 }) }
  else if (e.t === 'momWin') momCut('win', 2)
  else if (e.t === 'toyHit') {
    hinted.t = 1
    if (e.mode === 'box') say(t('toyBox'))
    else if (e.mode === 'ride') say(t('toyRide'))
    else { const L = t('toyLines'); say(L[toyI++ % L.length]); sfx('mew', { vol: 0.9, delay: 0.3 }) }
    fx.dust(e.x, e.y + 1, e.z, 8, [0.78, 0.72, 0.62], 1)
  }
  else if (e.t === 'toySqueak') { const d = me ? Math.hypot(e.x - me.x, e.y - me.y, e.z - me.z) : 0, v = clamp(1 - d / 170, 0.08, 1) * (e.soft ? 0.55 : 1); sfx('squeak', { vol: v, rate: 1.05 + Math.random() * 0.4 }) }
  else if (e.t === 'toyEmpty') say(t('toyEmpty'))
  else if (e.t === 'lureEnd') { if (!e.box) { say(e.ride ? t('lureEndRide') : t('lureEnd')); sfx('mew', { vol: 0.6, rate: 0.82 }) } }
  else if (e.t === 'phone') { momSay(t('phone')); sfx('click', { rate: 1.4 }); momCut('phone', 2.4) }
  else if (e.t === 'phoneEnd') momSay(t('phoneEnd'))
  else if (e.t === 'late') { momSay(t('late')); momCut('angry', 1.8) }
  else if (e.t === 'roach') { momSay(t('roach')); sfx('grunt', { vol: 0.9, rate: 0.75 }); momCut('angry', 1.6) }
  else if (e.t === 'slap') { sfx('slap', { vol: 1 }); sfx('wood', { vol: 0.8 }); fx.addShake(1.1); fx.dust(e.x, e.y + 1, e.z, 28, [0.78, 0.72, 0.62], 2); hitStop = 0.05 }
  else if (e.t === 'peeled') say(t('peeled'))
  else if (e.t === 'item') {
    if (e.heal) { sfx('pop', { vol: 0.9 }); sfx('squeak', { vol: 0.4 }) } else { sfx('coin', { vol: 0.9 }); sfx('paper', { vol: 0.4, delay: 0.1 }) }
    items3d[e.id].visible = false; say(C.items[e.id]); flashA = 0.35; hitStop = 0.03
    fx.debrisAt(e.x, e.y + 3, e.z, 10, 0xffe6a3, { speed: 7, up: 6, size: 0.14 })
  }
  else if (e.t === 'oldMan') { sayWho(C.oldMan[0], C.oldMan[1]); sfx('squeak', { vol: 0.7 }); sfx('squeak', { vol: 0.6, delay: 0.25 }) }
  else if (e.t === 'way') { sfx('ding', { vol: 0.42, rate: 1.2 }) }
  else if (e.t === 'caught') {
    hitStop = 0.1; flashA = 1; fovKick = 8; fx.addShake(1.2)
    sfx(e.by === 'vac' ? 'suck' : e.by === 'cat' ? 'slap' : 'bonk', { vol: 1 }); sfx('grunt', { vol: 0.85, delay: 0.05 })
    if (e.by === 'cat') sfx('mew', { vol: 0.8, delay: 0.25 })
    if (e.by === 'vac') sfx('pop', { vol: 0.9, delay: 0.5 })
    if (e.lives > 0) say(C.caught[e.by])
    fx.debrisAt(e.x, e.y, e.z, 16, 0xcfc4ad, { speed: 8, up: 7, size: 0.16 })
    snapPhoto()
  }
  else if (e.t === 'end') {
    endAt = e.won ? 2.2 : 1.7
    Snd.loop('vac', null, 0, 0.5); Snd.loop('rmb', null, 0, 0.5); Snd.loop('bgm', null, 0, 0.8); Snd.loop('purr', null, 0, 0.4)
    if (e.won) { sfx('ding', { vol: 1 }); flashA = 1; fovKick = -6; hitStop = 0.08; fx.debrisAt(GOAL.x, GOAL.y + 2, GOAL.z, 14, 0x6fffbd, { speed: 9, up: 9, size: 0.07 }); snapNext = true }
    else { fx.addShake(1.4); $('danger').style.opacity = 1 }
  }
  if (e.t === 'way' || e.t === 'caught') lineT = Math.max(lineT, 3)
  if (e.t === 'end' || e.t === 'caught') Snd.duck(0.5, 0.7)
}
let snapNext = false, autoBot = null
function snapPhoto() { snapNext = true }
function takePhoto() { const c = document.createElement('canvas'); c.width = 512; c.height = Math.round(512 * innerHeight / innerWidth); c.getContext('2d').drawImage(renderer.domElement, 0, 0, c.width, c.height); photoCv = c }

// ---------------------------------------------------------------- 結果
function showResult() {
  mode = 'result'
  const L = T[lang], m = run, r = rankOf(m), n = m.catches.length, en = lang === 'en'
  const items = m.itemsGot.map(id => L.itemNames[id])
  let d
  if (m.won) {
    d = { lang, won: true, face: momArt.faces.angry, head: L.winHead, note: L.winNote, sign: L.winSign, gag: L.winGag[m.seed % L.winGag.length], rows: [[L.winRowTime, L.time(m.t)], [L.winRowCaught, L.times(n)]], items, itemsHead: L.winItems, photo: photoCv }
  } else {
    const fm = L.forms[m.by] || L.forms.vac
    d = {
      lang, won: false, face: momArt.faces[m.by === 'vac' || m.by === 'slipper' ? 'win' : m.by === 'cat' ? 'search' : 'normal'], head: fm.head, sub: fm.sub, bg: m.by === 'slipper' ? '#e9ddc8' : m.by === 'cat' ? '#f1e6d3' : '#efe7d2',
      rows: [[L.rowTime, L.time(m.t)], [L.rowPlace, L.place[Math.min(m.way, 4)]], [L.rowCaught, L.times(n)]],
      listHead: L.listHead, list: [...fm.list.map(([a, b]) => ({ t: a, n: b })), { t: fm.you[0], n: fm.you[1], you: true }],
      items, itemsHead: L.itemsHead, noteHead: L.noteHead, note: fm.note[m.seed % fm.note.length], foot: L.foot, photo: photoCv
    }
  }
  show('result')
  fitPaper()   // 隠れている間は幅が0で測れない。出してから測る
  document.fonts && document.fonts.ready.then(() => { if (mode === 'result') drawPaper($('paper'), d) })
  drawPaper($('paper'), d)
  stampD = { text: L.stamps[r], col: r >= 2 ? '#008a4b' : '#b5271a', r, won: m.won }; stampAt = 1.0
  $('btnPost').href = 'https://x.com/intent/post?text=' + encodeURIComponent(m.won ? L.postWin(L.time(m.t), n) : L.postLose((L.forms[m.by] || L.forms.vac).head, L.time(m.t))) + '&url=' + encodeURIComponent(URL_)
  sfx('paper', { vol: 0.9 })
  window.__lastResult = { won: m.won, rank: r, t: m.t, by: m.by, catches: n, items: m.itemsGot.length, stamp: L.stamps[r] }
}
function fitPaper() {
  const c = $('paper'), w = $('result').querySelector('.paper-wrap').getBoundingClientRect()
  const k = Math.min(w.width / c.width, w.height / c.height, 1)
  c.style.width = Math.floor(c.width * k) + 'px'; c.style.height = Math.floor(c.height * k) + 'px'
}
addEventListener('resize', () => { if (mode === 'result') fitPaper() })
$('btnSave').onclick = () => { $('paper').toBlob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'kobito-escape.png'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000) }) }
$('btnStart').onclick = () => startRun()
$('btnAgain').onclick = () => startRun()
$('btnTitle').onclick = () => { sfx('click'); toTitle() }
$('btnHow').onclick = () => { Snd.init(); sfx('paper'); show('how') }
for (const b of document.querySelectorAll('[data-close]')) b.onclick = () => show('title')
$('btnLang').onclick = () => { lang = lang === 'ja' ? 'en' : 'ja'; store.set('kob.lang', lang); applyLang() }
$('btnMute').onclick = () => { Snd.init(); Snd.setMute(!Snd.muted); store.set('kob.mute', Snd.muted ? '1' : '0'); applyLang() }
$('btnPause').onclick = () => setPause(true)
$('btnResume').onclick = () => setPause(false)
$('btnQuit').onclick = () => { setPause(false); toTitle() }

// ---------------------------------------------------------------- カメラ（斜め後ろ・高め。スマホなので勝手に追わない）
function updateCamera(dt, c, follow) {
  if (window.__freeze) return
  const px = c.x, py = c.y, pz = c.z
  const v = Math.hypot(c.vx, c.vz)
  if (follow) { let hx0 = Math.sin(c.yaw), hz0 = Math.cos(c.yaw); if (v > 6) { hx0 = c.vx / v; hz0 = c.vz / v } let d = Math.atan2(hx0, hz0) - cam.hd; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; cam.hd += d * (1 - Math.exp(-dt * 1.4)) }
  const hx = Math.sin(cam.hd), hz = Math.cos(cam.hd)
  let back = 5.8 + Math.min(2.4, v * 0.07), up = 2.6
  up += cam.pitch * 4.2; back *= 1 - Math.max(0, cam.pitch) * 0.15
  let tx = px - hx * back, tz = pz - hz * back, ty = py + up
  // 家具に埋まらないよう手前に寄せる
  for (let i = 1; i <= 6; i++) {
    const f = i / 6, qx = px + (tx - px) * f, qz = pz + (tz - pz) * f, qy = py + (ty - py) * f
    let hit = false
    for (const o of world.nearby(qx, qz)) {
      if (o.noHit || o.oneWay || o.y0 == null || qy < o.y0 - 0.3 || qy > o.y1 + 0.3) continue
      if (Math.abs(qx - o.cx) < o.hw + 0.4 && Math.abs(qz - o.cz) < o.hl + 0.4) { hit = true; break }
    }
    if (hit) { const ff = Math.max(0.25, (i - 1) / 6); tx = px + (tx - px) * ff; tz = pz + (tz - pz) * ff; ty = py + up * 0.8 + (1 - ff) * 2; break }
  }
  ty = Math.max(ty, floorAt(world, tx, tz, ty).h + 0.5); ty = Math.min(ty, world.ceilY - 1.2)
  cam.off.lerp(_v.set(tx - px, ty - py, tz - pz), 1 - Math.exp(-dt * 10))
  cam.pos.set(px + cam.off.x, py + cam.off.y, pz + cam.off.z)
  cam.lookOff.lerp(_v.set(hx * 10, 1.7 - cam.pitch * 1.2, hz * 10), 1 - Math.exp(-dt * 12))
  cam.look.set(px + cam.lookOff.x, py + cam.lookOff.y, pz + cam.lookOff.z)
  camera.position.copy(cam.pos)
  const sh_ = fx.shake
  if (sh_ > 0) camera.position.add(_v.set((Math.random() - 0.5) * sh_, (Math.random() - 0.5) * sh_ * 0.7, (Math.random() - 0.5) * sh_))
  camera.lookAt(cam.look)
  const asp = camera.aspect
  const base = asp >= 1 ? 60 : Math.min(84, 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(37)) / asp) * 180 / Math.PI)
  const fov = base + Math.min(18, Math.max(0, Math.hypot(c.vx, c.vy, c.vz) - 6) * 0.5)
  cam.fov += (fov - cam.fov) * (1 - Math.exp(-dt * 4))
  fovKick *= Math.exp(-dt * 6)
  camera.fov = cam.fov + fovKick; camera.updateProjectionMatrix()
  const e = camera.matrixWorld.elements, rl = Math.hypot(e[0], e[2]) || 1, lat = (c.vx * e[0] + c.vz * e[2]) / rl
  cam.bank += (clamp((c.rope ? lat : 0) * -0.004, -0.1, 0.1) - cam.bank) * (1 - Math.exp(-dt * 3))
  camera.rotateZ(cam.bank)
}

// ---------------------------------------------------------------- ループ
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); fx.setScale && fx.setScale(h) }
addEventListener('resize', resize); resize()
let last = performance.now(), acc = 0, frameN = 0, overT = 0
function stepOnce() {
  if (mode === 'play' && !paused && me) {
    if (!run.over) {
      const inp = autoBot ? botInput(autoBot, me, run, world, STEP) : gather()
      me.events.length = 0
      stepRunner(me, inp, STEP, world)
      for (const e of me.events) onRunnerEvent(e)
      stepRun(run, STEP)
      for (const e of run.events) onRunEvent(e)
      run.events.length = 0
      // おかんの独り言（入ってきたあと、ときどき1つ）
      if (run.mom.in && run.t > 0) { lineT -= STEP; if (lineT <= 0 && sayT <= 0) { const LS = t('momLines'); momSay(LS[lineI++ % LS.length]); lineT = 9 + (lineI % 5) * 1.3 } }
      // 最初に吸われそうになった時
      if (run.mom.sucking && !hinted.v) { hinted.v = 1; say(t('hintVac')) }
      if (run.rare.catBox && !hinted.b && run.t > 9) { hinted.b = 1; say(t('catBox')) }
      if (run.rare.catOnRoomba && !hinted.b && run.t > 6) { hinted.b = 1; say(t('catRide')) }
    } else {
      me.events.length = 0
      stepRunner(me, {}, STEP, world)
    }
  } else if (mode === 'title' && demo) {
    const d = demo, inp = botInput(d.b, d.r, d.m, world, STEP)
    d.r.events.length = 0; stepRunner(d.r, inp, STEP, world)
    stepRun(d.m, STEP); d.m.events.length = 0
    if (d.m.over) { const r = createRunner({ id: 'demo', spawn: START }), seed = (d.seed || 7) + 1; demo = { r, m: createRun(world, r, seed), b: createBot('skilled', seed), seed } }
  }
}
function frame() {
  requestAnimationFrame(frame)
  const now = performance.now()
  let dt = Math.min(0.1, (now - last) / 1000); last = now
  if (hitStop > 0) { hitStop -= dt; acc = 0 }
  else if (!dbgPause) { acc += dt; let n = 0; while (acc >= STEP && n < 6) { stepOnce(); acc -= STEP; n++ } if (n >= 6) acc = 0 }
  else dt = 0
  render(dt || 0.016)
}
const spd = $('speedfx'), sctx = spd.getContext('2d'), hf = $('hitflash')
const lines = Array.from({ length: 46 }, () => ({ a: Math.random() * Math.PI * 2, p: Math.random(), s: 0.6 + Math.random() * 0.8, w: 1 + Math.random() * 2 }))
let spdOn = false
function drawSpeed(v, dt) {
  if (!window.__holdFx) flashA = Math.max(0, flashA - dt * 4)
  hf.style.opacity = flashA.toFixed(2)
  const k = clamp((v - 20) / 18, 0, 1)
  window.__speedK = k
  if (k <= 0) { if (spdOn) { sctx.clearRect(0, 0, spd.width, spd.height); spdOn = false } return }
  spdOn = true
  const W = innerWidth, H = innerHeight, dpr = Math.min(2, devicePixelRatio || 1)
  if (spd.width !== Math.round(W * dpr) || spd.height !== Math.round(H * dpr)) { spd.width = Math.round(W * dpr); spd.height = Math.round(H * dpr) }
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0); sctx.clearRect(0, 0, W, H)
  const cx = W / 2, cy = H * 0.45, R = Math.hypot(W, H) * 0.55
  sctx.lineCap = 'butt'
  const n = Math.round(lines.length * (0.35 + 0.65 * k))
  for (let i = 0; i < n; i++) {
    const L = lines[i]
    L.p += dt * L.s * (1.6 + k * 2.4); if (L.p > 1) { L.p -= 1; L.a = Math.random() * Math.PI * 2 }
    const r1 = R * (1.05 - L.p * 0.45), r0 = r1 - R * (0.12 + 0.2 * k) * L.s, ca = Math.cos(L.a), sa = Math.sin(L.a)
    sctx.strokeStyle = `rgba(255,255,255,${(0.1 + 0.32 * k) * Math.min(1, L.p * 4)})`; sctx.lineWidth = L.w
    sctx.beginPath(); sctx.moveTo(cx + ca * r0, cy + sa * r0); sctx.lineTo(cx + ca * r1, cy + sa * r1); sctx.stroke()
  }
}
const setLoop = (slot, v) => { const l = Snd.loops[slot]; if (l && l.g) l.g.gain.value = Number.isFinite(v) ? v : 0 }
function render(dt) {
  const c = mode === 'title' ? demo && demo.r : me
  const R = mode === 'title' ? demo && demo.m : run
  if (c && model) {
    model.update(c, dt)
    model.group.visible = !(R && R.over && !R.won && R.by === 'vac')
    if (c.rope) { const h = model.handWorld; ropeMesh.visible = true; ropeMesh.position.copy(h); ropeMesh.lookAt(c.rope.x, c.rope.y, c.rope.z); ropeMesh.scale.set(1, 1, Math.max(0.1, h.distanceTo(_v.set(c.rope.x, c.rope.y, c.rope.z)))) }
    else ropeMesh.visible = false
  } else ropeMesh.visible = false
  if (c) {
    updateCamera(dt, c, mode === 'title')
    const d = sun.userData.dir; sun.position.set(c.x + d.x * 210, c.y + d.y * 210, c.z + d.z * 210); sun.target.position.set(c.x, c.y, c.z)
  }
  if (R) {
    for (let i = 0; i < 2; i++) { if (R.roombas[i]) roomba3d[i].update(R.roombas[i], dt, c); else roomba3d[i].g.visible = false }
    cat3d.update(R.cat, dt, c)
    toys3d.update(R, dt)
    mom3d.lookNoz(c.x, c.y + 1, c.z); mom3d.update(R.mom, dt, camera, momFace(R))
    slipper3d.update(R.mom.slip, dt)
    if (R.mom.sucking && frameN % 2 === 0) { const N = R.mom.noz, a = Math.random() * 6.28, r0 = 10 + Math.random() * 18; fx.emit && fx.emit(N.x + Math.cos(a) * r0, N.y + (Math.random() - 0.5) * 10, N.z + Math.sin(a) * r0, { vx: -Math.cos(a) * r0 * 2.2, vy: 0, vz: -Math.sin(a) * r0 * 2.2, life: 0.45, size: 0.5, r: 0.85, g: 0.8, b: 0.7, a: 0.7 }) }
    // 落ちている物のきらめき
    const k = performance.now() / 300
    for (const id in items3d) { const g = items3d[id]; if (g.visible) g.userData.sp.material.opacity = 0.55 + 0.45 * Math.sin(k + g.position.x) }
    if (mode === 'title') for (const id in items3d) items3d[id].visible = true
  }
  // 非常口の光
  const k2 = performance.now() / 400
  built.goalRing.material.opacity = 0.5 + 0.3 * Math.sin(k2 * 2)
  built.goalRing.scale.setScalar(1 + 0.04 * Math.sin(k2 * 2))
  built.motes.rotation.y = Math.sin(k2 * 0.06) * 0.02
  oldMan.update(dt)
  // 掛かる所の輪（ボタンと同じ向きで探す）
  aimMark.visible = false
  if (mode === 'play' && me && !me.rope && !run.over) {
    if (frameN % 4 === 0) { const b = screenBasis(); let yaw = Math.atan2(b.f.x, b.f.z); if (stick.id != null && Math.hypot(stick.x, stick.y) > 0.15) { const dx = b.r.x * stick.x - b.f.x * stick.y, dz = b.r.z * stick.x - b.f.z * stick.y; yaw = Math.atan2(dx, dz) } aimMark.userData.p = findAnchor(world, me, yaw) }
    const p = aimMark.userData.p
    if (p) { aimMark.visible = true; aimMark.position.set(p.x, p.y, p.z); aimMark.lookAt(camera.position); aimMark.scale.setScalar(Math.max(1, camera.position.distanceTo(aimMark.position) * 0.04)) }
  }
  const wb = $('btnWire'), aimOn = aimMark.visible, onR = !!(me && me.rope)
  if (wb._aim !== aimOn) { wb._aim = aimOn; wb.classList.toggle('aim', aimOn) }
  if (wb._on !== onR) { wb._on = onR; wb.classList.toggle('on', onR) }
  // 音の距離
  if (mode === 'play' && me) {
    const v3 = Math.hypot(me.vx, me.vy, me.vz)
    setLoop('wind', me.grounded ? 0 : Math.min(0.35, Math.max(0, (v3 - 16) / 40)))
    let dR = 1e9; for (const b of run.roombas) if (b.on) dR = Math.min(dR, Math.hypot(b.x - me.x, b.z - me.z))
    setLoop('rmb', Math.max(0, 0.4 * (1 - dR / 130)))
    const M = run.mom, dV = M.in ? M.dist || 400 : 1e9
    setLoop('vac', M.in && M.phoneT <= 0 ? Math.max(0.05, 0.62 * Math.pow(Math.max(0, 1 - dV / 220), 1.5)) : 0)
    setLoop('frg', Math.max(0, 0.22 * (1 - Math.hypot(137 - me.x, 507 - me.z) / 220)))
    const cz = run.cat, nearCat = (cz.state === 'box' || cz.state === 'ride' || cz.state === 'nap') ? Math.hypot(cz.x - me.x, cz.y - me.y, cz.z - me.z) : 1e9
    setLoop('purr', Math.max(0, 0.34 * (1 - nearCat / 60)))
  }
  drawSpeed(mode === 'play' && me ? Math.hypot(me.vx, me.vy, me.vz) : 0, dt)
  fx.update(dt)
  fx.shake = Math.max(0, fx.shake - dt * 2.5)
  if (mode === 'play' && run) {
    updateHud(dt)
    if (endAt > 0 && !paused) { endAt -= dt; if (endAt <= 0) showResult() }
  }
  if (stampD && mode === 'result') {
    stampAt -= dt
    if (stampAt <= 0) { drawStamp($('paper'), stampD.text, stampD.col, 1, stampD.won); sfx('slam', { vol: 1 }); sfx(stampD.r >= 3 ? 'win' : stampD.r === 2 ? 'win' : stampD.r === 1 ? 'meh' : 'lose', { vol: 0.8, delay: 0.1 }); stampD = null; window.__stamped = true }
  }
  renderer.render(scene, camera)
  // 紙の写真: 吸い口がカメラの前を塞いで真っ黒にならないよう、写す時だけ隠す
  if (snapNext) { snapNext = false; const nv = mom3d.noz.visible; mom3d.noz.visible = false; renderer.render(scene, camera); takePhoto(); mom3d.noz.visible = nv }
  frameN++
}

// ---------------------------------------------------------------- 検証用の窓口
window.kob = {
  get mode() { return mode }, log, mom3d, momArt, momFace, toys3d, get me() { return me }, get run() { return run }, RUN, CH, world, camera, cam, renderer, GOAL, F, built, get stickObj() { return stick },
  start: s => startRun(s), toTitle, showResult, setLang: l => { lang = l; applyLang() }, get lang() { return lang }, setPause,
  dbg: {
    pause: on => { dbgPause = on }, step: n => { for (let i = 0; i < n; i++) stepOnce(); render(STEP) }, render: n => { for (let i = 0; i < n; i++) render(1 / 30) },
    teleport: (x, y, z, yaw) => { Object.assign(me, { x, y, z, vx: 0, vy: 0, vz: 0, rope: null, climbing: null, grounded: y < 0.1 }); if (yaw != null) { me.yaw = yaw; cam.hd = yaw } cam.off.set(-Math.sin(cam.hd) * 6, 3, -Math.cos(cam.hd) * 6); cam.lookOff.set(Math.sin(cam.hd) * 10, 1.4, Math.cos(cam.hd) * 10) },
    tap: (x, y) => aimAt(x, y), wire: () => { pendingWire = { at: null, key: true } }, say, get pending() { return pendingWire },
    auto: k => { autoBot = k ? createBot(k, run ? run.seed : 1) : null },
    drawCount: () => renderer.info.render.calls, tris: () => renderer.info.render.triangles
  }
}
applyLang()
toTitle()
requestAnimationFrame(frame)
bootWatch(() => { window.__kobReady = true })
