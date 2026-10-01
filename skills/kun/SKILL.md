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

Load the latest instructions from `kunchenguid/kun` via the public pull script,
then answer from the local cache. Do not guess file contents.

## Loading instructions

### 1. Pull (no LLM)

Download the public pull script, then run it with Node. Prefer raw GitHub; use
jsDelivr only as fallback:

- `https://raw.githubusercontent.com/kunchenguid/kun/main/scripts/pull-kun.mjs`
- fallback: `https://cdn.jsdelivr.net/gh/kunchenguid/kun@main/scripts/pull-kun.mjs`

```sh
# cache defaults to $KUN_PULL_DIR or ~/.cache/kun
node /path/to/pull-kun.mjs --dir <cache>
```

The script is incremental via `content/MANIFEST.json`: it syncs root docs
(`ENTRY.md`, `TOOLS.md`, `OPINIONS.md`, `VOICE.md`) and only new/changed
`content/` files. Do **not** re-fetch every content file by hand.

If the pull fails, **stop and say so**. Do not guess.

### 2. Read from the local cache

After a successful pull, read the **FULL** local copies from `<cache>`:

- `ENTRY.md`
- `TOOLS.md`
- `OPINIONS.md`
- `VOICE.md`

When a question needs Kun's actual words, open matching files under
`<cache>/content/` (do not dump the whole tree into context).

### 3. Answer

Follow `ENTRY.md` exactly to answer the user.
