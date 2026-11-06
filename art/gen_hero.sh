#!/bin/zsh
cd ~/Desktop/claudecode/kobito-escape/art
G=~/.claude/skills/3d-homepage/scripts/codex_imagegen.py
python3 $G raw/hero_a.png prompts/hero_a.md raw/mom_a.png --quality high --size 1536x1024 > logs/hero_a.log 2>&1 || { echo FAIL a; exit 1; }
for k in hero_b hero_c hero_d hero_e; do
  python3 $G raw/$k.png prompts/$k.md raw/hero_a.png raw/mom_a.png --quality high --size 1536x1024 > logs/$k.log 2>&1 &
done
wait
ls -la raw/hero_*.png
