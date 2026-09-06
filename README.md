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

<h3 align="center">Summon Kun to solve your problems</h3>

**kun** is an [Agent Skill](https://agentskills.io) that uses [Kun](https://linktr.ee/kunchenguid)'s experience, 
knowledge, tools and skills to help you with any problem you might be having.

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

```
/kun question
      │
      ▼
┌─────────────────────┐
│ fetch ENTRY + md    │  raw.githubusercontent.com (session-cached)
└─────────┬───────────┘
          ▼
┌─────────────────────┐
│ follow ENTRY.md     │  follow TOOLS / OPINIONS / VOICE as needed
└─────────┬───────────┘
          ▼
     concrete answer
```

## Maintainers

This repo is literally Kun's own knowledge base so it deliberately does not accept PR contributions. 

Bug reports and suggestions are welcome as issues!
