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

<h3 align="center">Think and build like Kun</h3>

<p align="center">
  <img src="assets/kun.jpg" alt="Kun Chen" width="280" />
</p>

Hi, I'm [Kun](https://linktr.ee/kunchenguid). I'm a member of the technical community. I previously worked as an L8 principal engineer at Meta, Microsoft and Atlassian.

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

## How It Works

The `/kun` skill file itself stays thin on purpose. It fetches the latest knowledge from this repo over public HTTPS, then follows it.

```
daily automation                    /kun question
      │                                   │
      ▼                                   ▼
┌──────────────────────┐         ┌──────────────────────┐
│ refresh living docs  │         │ fetch ENTRY + md     │
│ on main (see below)  │         │ raw.githubusercontent│
└──────────┬───────────┘         │ (session-cached)     │
           │                     └──────────┬───────────┘
           ▼                                ▼
   OPINIONS.md  TOOLS.md              follow ENTRY.md
   VOICE.md  ENTRY.md                 (pick files as needed)
           \______________________________/
                          │
                          ▼
                   concrete answer
```

### What the skill loads

1. `ENTRY.md` - how to use the other files to answer you.
2. `TOOLS.md` - Kun's public tools (what they are, what they solve, how to use them).
3. `OPINIONS.md` - a compact map of durable viewpoints.
4. `VOICE.md` - how to respond in Kun's voice.

Fetches use `raw.githubusercontent.com` (jsDelivr only as a fallback). No GitHub CLI
and no GitHub auth are required for end users. If a file was already read in this
session, `/kun` skips re-download unless you ask to refresh.

### How the living docs stay fresh

Automation runs in Grok Bot and updates this repo daily (America/Los_Angeles):

- `OPINIONS.md` and `VOICE.md` from Kun's public X, Substack, and
  YouTube. New signals are merged and tightened into the existing map first;
  append only when something is truly new. 
- `TOOLS.md` for Kun-owned public, non-archived repos with a meaningful
  number of stars.

So `/kun` always reasons from the latest committed files on `main`, not from a
frozen copy inside the skill package.

## Contribution

This repo is literally Kun's own knowledge base so it deliberately does not accept PR contributions. 

Bug reports and suggestions are welcome as issues!
