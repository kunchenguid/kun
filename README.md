<h1 align="center">/kun</h1>

<p align="center">
  <a href="https://agentskills.io"
    ><img
      alt="Agent Skills"
      src="https://img.shields.io/badge/Agent%20Skills-package-blue?style=flat-square"
  /></a>
  <a href="https://x.com/kunchenguid"
    ><img
      alt="X"
      src="https://img.shields.io/badge/X-@kunchenguid-black?style=flat-square"
  /></a>
  <a href="https://discord.gg/Wsy2NpnZDu"
    ><img
      alt="Discord"
      src="https://img.shields.io/discord/1439901831038763092?style=flat-square&label=discord"
  /></a>
</p>

<h3 align="center">Think and build like a principal engineer</h3>

<p align="center">
  <img src="assets/kun.jpg" alt="Kun Chen" width="280" />
</p>

Hi, I'm [Kun](https://linktr.ee/kunchenguid), a member of the technical community. I previously worked as an L8 principal engineer at Meta, Microsoft and Atlassian.

This "/kun" skill here is a near-realtime distillation of my experience, knowledge, tools, workflows and skills. The instructions and knowledge base here is updated daily based on what I said and did.

Use this skill to apply my stack, think and build like a seasoned professional developer.

## Quick Start

```sh
# install (global recommended)
$ npx skills add kunchenguid/kun -g

# in your agent
/kun how should I improve my AGENTS.md?
/kun fix this nasty bug!
/kun how would you build a product that...
/kun <literally anything>
```

This is also [available as a Grok Bot](https://x.ai/bot/xK8W0ukRv4iZjglzz-FRE). 

## How It Works

The `/kun` skill file itself stays thin on purpose. On `/kun`, the agent runs the
public pull script (no LLM), then reads from a local cache and follows it.

```
daily automation                    /kun question
      │                                   │
      ▼                                   ▼
┌──────────────────────┐         ┌──────────────────────┐
│ refresh living docs  │         │ node pull-kun.mjs    │
│ on main (see below)  │         │ → ~/.cache/kun       │
└──────────┬───────────┘         │ (or $KUN_PULL_DIR)   │
           │                     └──────────┬───────────┘
           ▼                                ▼
   OPINIONS.md  TOOLS.md              read ENTRY + docs
   VOICE.md  ENTRY.md                 (+ selective content/)
   content/ MANIFEST                        │
           \______________________________/ │
                          │
                          ▼
                   concrete answer
```

### What the skill loads

1. Download `scripts/pull-kun.mjs` from this repo
   (`raw.githubusercontent.com`, jsDelivr fallback) and run
   `node … --dir <cache>` (default: `$KUN_PULL_DIR` or `~/.cache/kun`).
2. Read full local copies of `ENTRY.md`, `TOOLS.md`, `OPINIONS.md`, and
   `VOICE.md` from that cache.
3. When a question needs Kun's actual words, open matching files under
   `content/` in the cache — do not dump the whole tree into context.
4. If the pull fails, stop and say so; do not guess.

No GitHub CLI and no GitHub auth are required for end users.

### How the living docs stay fresh

Automation runs in Grok Bot and updates this repo daily (America/Los_Angeles):

- `OPINIONS.md` and `VOICE.md` from Kun's public X, Substack, and
  YouTube. New signals are merged and tightened into the existing map first;
  append only when something is truly new.
- `content/` archive of those public posts (plus `content/MANIFEST.json`) for
  raw-ledger / skill pulls via `scripts/pull-kun.mjs`.
- `TOOLS.md` for Kun-owned public, non-archived repos with a meaningful
  number of stars.

So `/kun` always reasons from the latest committed files on `main`, not from a
frozen copy inside the skill package.

### Public content ledger + incremental pull

Raw public posts live under `content/` (one markdown file per item) with
`content/MANIFEST.json` for consumers. Keep `OPINIONS.md` / `VOICE.md` compact;
do not treat `content/` as a second opinions dump.

```sh
# Incremental sync into ~/.cache/kun (or $KUN_PULL_DIR / --dir)
node scripts/pull-kun.mjs

# Or download the script alone and pull into a cache:
#   https://raw.githubusercontent.com/kunchenguid/kun/main/scripts/pull-kun.mjs
#   (jsDelivr: https://cdn.jsdelivr.net/gh/kunchenguid/kun@main/scripts/pull-kun.mjs)
node /path/to/pull-kun.mjs --dir ~/.cache/kun
```

`pull-kun.mjs` fetches remote `content/MANIFEST.json` (raw.githubusercontent.com,
jsDelivr fallback), downloads only new/changed content files, deletes local files
removed from the manifest, and hash-syncs `ENTRY.md`, `VOICE.md`, `OPINIONS.md`,
and `TOOLS.md`. First empty cache = full pull once; thereafter incremental.

## Contribution

This repo is literally Kun's own knowledge base so it deliberately does not accept PR contributions. 

Bug reports and suggestions are welcome as issues!
