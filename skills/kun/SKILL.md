---
name: kun
description: >
  Summon Kun to solve your problems.
  Use on /kun or when asked how Kun thinks, builds, or solves problems.
user-invocable: true
metadata:
  short-description: "Summon Kun to solve your problems."
---

# /kun

The latest actual instructions of this skill needs to be loaded from `kunchenguid/kun`.
See steps below to load them and follow that to answer the user's request.
If the files cannot be fetched, stop and say so. Do not guess file contents.

## Loading instructions (session-cached)

Fetch and read the **FULL** content of files below:

- `https://raw.githubusercontent.com/kunchenguid/kun/main/ENTRY.md`
- `https://raw.githubusercontent.com/kunchenguid/kun/main/TOOLS.md`
- `https://raw.githubusercontent.com/kunchenguid/kun/main/OPINIONS.md`
- `https://raw.githubusercontent.com/kunchenguid/kun/main/VOICE.md`

Optional fallback if raw.githubusercontent.com fails:

- `https://cdn.jsdelivr.net/gh/kunchenguid/kun@main/<file>`

Rules:

1. If an instruction file above was already fully read and visible as prior messages in this session, skip re-download and re-read.
2. Otherwise GET the raw URL (jsDelivr only as fallback) and read their **full** content.
3. After load, follow `ENTRY.md` exactly to answer the user.
