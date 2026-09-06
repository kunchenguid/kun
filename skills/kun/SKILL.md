---
name: kun
description: >
  Answer questions using Kun Chen's latest TOOLS, OPINIONS, and VOICE
  profiles from the public kun repo. Use on /kun or when asked how Kun
  builds, writes, or which of his tools to use.
user-invocable: true
metadata:
  short-description: "Latest Kun tools, opinions, and voice from kun repo"
---

# /kun

Load Kun's living instruction files from `kunchenguid/kun`, then follow
them. Do not embed or invent their contents in this skill file.

## Host requirement

- HTTPS fetch only. No GitHub CLI and no GitHub auth required for end users.
- If the files cannot be fetched, stop and say so. Do not guess file contents.

## Load (session-cached)

Fetch from the default branch `main` (public raw URLs):

- `https://raw.githubusercontent.com/kunchenguid/kun/main/ENTRY.md`
- `https://raw.githubusercontent.com/kunchenguid/kun/main/TOOLS.md`
- `https://raw.githubusercontent.com/kunchenguid/kun/main/OPINIONS.md`
- `https://raw.githubusercontent.com/kunchenguid/kun/main/VOICE.md`

Optional fallback if raw.githubusercontent.com fails:

- `https://cdn.jsdelivr.net/gh/kunchenguid/kun@main/<file>`

Rules:

1. If a file was already read in this session for `/kun`, skip re-download and re-read.
2. Otherwise GET the raw URL (jsDelivr only as fallback). Do not use `gh` or the Contents API for normal loads.
3. After load, follow `ENTRY.md` exactly to answer the user.
4. Do not commit, push, or modify the kun repo unless the user explicitly asks for a write task outside this skill.
