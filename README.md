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

<h3 align="center">Always-current Kun: tools, opinions, and voice</h3>

**kun** is an [Agent Skill](https://agentskills.io) that loads Kun Chen's living
profiles and answers with them. The skill package stays thin on purpose: it
fetches the latest markdown from this repo at runtime, then follows `ENTRY.md`.

Living docs at the repo root (updated by automation from public writing and
Kun's starred tools):

- `TOOLS.md`  -  what his public tools are and how to use them
- `OPINIONS.md`  -  compact map of durable viewpoints (not a tweet log)
- `VOICE.md`  -  how Kun sounds when writing or posting as Kun
- `ENTRY.md`  -  how the agent should use those files to answer you

## Quick Start

```sh
# install (global recommended)  -  requires this repo to be public
$ npx skills add kunchenguid/kun -g

# in your agent
/kun how should I pick a coding harness?
# or: /kun which tool helps with overnight agent loops?
```

No GitHub CLI and no GitHub auth are required for end users. The skill fetches
public raw URLs (with an optional jsDelivr fallback) and skips re-fetch in the
same session unless you ask to refresh.

## Usage

| Invoke | Example |
| ------ | ------- |
| Slash | `/kun ...` |
| Natural language | "what would Kun think about X" / "which of Kun's tools for Y" |

## How It Works

```
/kun question
      │
      ▼
┌─────────────────────┐
│ fetch ENTRY + md    │  raw.githubusercontent.com (session-cached)
└─────────┬───────────┘
          ▼
┌─────────────────────┐
│ follow ENTRY.md     │  pick TOOLS / OPINIONS / VOICE as needed
└─────────┬───────────┘
          ▼
     concrete answer
```

## Maintainers

Opinions/voice and tools docs are updated on this private-or-public repo by
Kun's opinions-voice crewmate. Do not treat `dotfiles-private` as the write
target for these files.
