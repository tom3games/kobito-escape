#!/bin/zsh
cd ~/Desktop/claudecode/kobito-escape/art
G=~/.claude/skills/3d-homepage/scripts/codex_imagegen.py
for k in vac_a vac_b vac_c; do
  python3 $G raw/$k.png prompts/$k.md raw/mom_a.png raw/rom_a.png --quality high --size 1536x1024 > logs/$k.log 2>&1 &
done
wait
ls -la raw/vac_*.png
