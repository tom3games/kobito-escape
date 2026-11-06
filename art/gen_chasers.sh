#!/bin/zsh
cd ~/Desktop/claudecode/kobito-escape/art
G=~/.claude/skills/3d-homepage/scripts/codex_imagegen.py
python3 $G raw/cat_a.png prompts/cat_a.md raw/hero_e.png raw/mom_a.png --quality high --size 1536x1024 > logs/cat_a.log 2>&1 &
python3 $G raw/rom_a.png prompts/rom_a.md raw/hero_e.png raw/mom_a.png --quality high --size 1536x1024 > logs/rom_a.log 2>&1 &
wait
for k in cat_b cat_c cat_d; do
  python3 $G raw/$k.png prompts/$k.md raw/cat_a.png raw/mom_a.png --quality high --size 1536x1024 > logs/$k.log 2>&1 &
done
python3 $G raw/rom_b.png prompts/rom_b.md raw/rom_a.png raw/mom_a.png --quality high --size 1536x1024 > logs/rom_b.log 2>&1 &
wait
ls -la raw/cat_*.png raw/rom_*.png
