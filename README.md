# 小人になって家の中を逃げろ

https://tom3games.github.io/kobito-escape/

賞味期限2019年のヨーグルトを食べて体が2cmになった。デンタルフロスを振り子にソファ・本棚・カーテンを渡り、ルンバと猫とおかんの掃除機から逃げて、冷蔵庫の上の非常口を目指す3Dのワイヤーアクション。スマホ縦持ち向け。

- 遊ぶ: index.html が dist/game.js を読む。js/ と shared/ を直したら `node tools/build.mjs`（verify.mjs も最初に実行）
- フォント: 画面の文字を足したら `tools/fonts.py` で fonts/ を作り直す（元の ttf は Google Fonts から）
- 検証: `node verify.mjs`（テスト中は無音）／釣り合い: `node tools/sim.mjs 16`／ワイヤーの届く向き: `node tools/reach.mjs`
- SNS 画像: `node og.mjs`／公開後の確認: `node live.mjs`
- 素材の出所: CREDITS.md
