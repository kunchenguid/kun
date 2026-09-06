# TOOLS.md

Public tools Kun owns that meet eligibility: owned, public, not archived, not a fork, at least 80 stars, and self-starred. Use this file to know what exists and what it is for before reaching for something else.

## no-mistakes

https://github.com/kunchenguid/no-mistakes

`no-mistakes` is a local git proxy and validation gate. You push to a `no-mistakes` remote instead of `origin`; it spins up a disposable worktree, runs an AI-driven review/test/docs/lint pipeline, forwards the branch only after checks pass, and opens a clean PR. It is agent-agnostic (`claude`, `codex`, `grok`, and others) and also exposes a TUI plus a `/no-mistakes` agent skill.

It solves the gap between faster agent/human change production and the need for clean, evidence-backed PRs. Isolation keeps your working tree free while the gate runs; safe mechanical fixes apply automatically, and judgment calls park for you.

Follow the installation guide at https://kunchenguid.github.io/no-mistakes/, run `no-mistakes init` in a repo, then `git push no-mistakes`, bare `no-mistakes`, or `/no-mistakes` from a coding agent.

## firstmate

https://github.com/kunchenguid/firstmate

firstmate is an agent distro, not a model, harness, skill, MCP server, or installable app. The cloned repo (`AGENTS.md`, bundled skills, helpers) turns a general-purpose coding agent into a first mate that dispatches a crew of autonomous agents in visible session backends (tmux by default, plus herdr, zellij, cmux, or Orca), each in an isolated git worktree.

It solves tab-juggling when you want several project tasks in parallel. You talk to one liaison; it spawns crewmates, supervises them with event-driven zero-token watchers, and returns finished PRs, approved local merges, or scout investigation reports, with optional persistent secondmates and Relay for X/Discord mentions.

Clone the repo, authenticate `gh`, launch a verified primary harness inside it (Claude Code, Grok, or Pi are co-primary recommendations; Codex, OpenCode, and Cursor Agent CLI are also supported), and give the first mate work in chat. Git, GitHub CLI, and the chosen session backend are required.

## gnhf

https://github.com/kunchenguid/gnhf

gnhf (good night, have fun) is a ralph/autoresearch-style overnight orchestrator. One command starts an autonomous loop where each iteration has a coding agent make one small, committed, documented change toward an objective, with retries, rollback on failure, live terminal status, and an exit summary.

It solves waking up empty-handed after leaving agents unsupervised. Successful iterations land as commits on a branch with a log of what happened; failures reset or repair instead of leaving a dirty mess, and caps on iterations or tokens keep runs bounded.

Install with npm install -g gnhf or build from source with pnpm. Run from a clean git repo with gnhf and an objective string; optional flags cover max iterations, max tokens, worktrees, and push after each successful commit. Needs a supported coding-agent CLI; macOS, Linux, and Windows. Agent skill at skills/gnhf/SKILL.md covers Hands-Off and Companion modes.

## lavish-axi

https://github.com/kunchenguid/lavish-axi

lavish-axi (Lavish Editor) is an AXI CLI that opens agent-generated HTML artifacts in a local browser for collaborative review. You can pinpoint elements and selected text, edit Mermaid whiteboard diagrams the agent authored, and send feedback back to the agent without falling into screenshots and long prose change requests.

It solves the weak human-agent loop on rich HTML: agents already produce interactive artifacts, but collaboration usually loses that interactivity. Lavish keeps the loop local-first, token-efficient (TOON, long polling, contextual disclosure), and playbook-backed for common visualization tasks.

Recommended setup is `npx skills add kunchenguid/lavish-axi --skill lavish`; the skill teaches agents to run `npx -y lavish-axi` on demand. Alternatives: tell the agent to use the CLI directly, or `npm install -g lavish-axi` plus `lavish-axi setup hooks` / `setup plugin` for ambient session context. macOS, Linux, and Windows.

## axi

https://github.com/kunchenguid/axi

axi is the design-principles and catalog repo for AXI (Agent eXperience Interface): ten principles for agent-ergonomic CLIs that treat token budget as a first-class constraint, plus benchmarks and an official/community catalog of AXI tools. Site: https://axi.md/.

It solves the overhead of human-shaped CLIs and heavy MCP tool schemas when agents call external services. Published browser and GitHub benchmarks show reference AXIs beating raw MCP and plain CLI setups on success, cost, duration, and turns.

There is nothing to run as a product binary here; read the principles, then adopt reference AXIs such as `gh-axi` and `chrome-devtools-axi` (and point agents at them from `AGENTS.md` / `CLAUDE.md`). Use this repo when designing or evaluating agent-facing CLIs.

## treehouse

https://github.com/kunchenguid/treehouse

treehouse is a Go CLI that manages a pool of reusable, isolated git worktrees so each agent session gets a clean environment instantly. Worktrees return to the pool with dependencies and build cache intact instead of being thrown away after every session.

It solves slow, collision-prone parallel agent work: cloning repeatedly, sharing one dirty tree, or recreating worktrees that lose dependency folders and build caches. Conflict detection keeps leased worktrees from stepping on each other.

Follow the project docs for setup (platform script, Nix, Go toolchain, or build from source). From a repo, run `treehouse` to enter a pooled worktree subshell and `exit` to return it to the pool. Default root is `~/.treehouse/`; `--root .` keeps the pool in-project. macOS, Linux, and Windows.

## backpass

https://github.com/kunchenguid/backpass

backpass treats `AGENTS.md` / project skills as weights and closed agent transcripts as the loss signal. It collects local sessions from supported harnesses, proposes evidence-backed edits (adds, rewrites, removes, skill extractions) under a token budget, and never writes until you run `backpass apply`.

It solves the open loop where agent memory only improves when a human remembers a failure and edits by hand. Every mutating proposal needs verbatim quotes from at least two distinct sessions; analysis is local-first with secret redaction and no upload except into an agent you already authenticated.

Requires Node >= 22.5 and `acpx` on PATH. `npm install -g backpass` or `npx backpass`, then `backpass init`, `backpass`, and `backpass apply` in a repo (or `--scope user` for user-level memory). No API keys of its own; model calls go through acpx. macOS and Linux.

## dotfiles

https://github.com/kunchenguid/dotfiles

Kun's personal Mac setup managed with nix-darwin and home-manager: system settings, Homebrew casks/CLIs, Nix user packages, zsh/starship, Neovim and WezTerm (rose-pine moon), and shared agent configs so Claude, Codex, and OpenCode load one `AGENTS.md`.

It solves reproducible machine bootstrap for agentic engineering on Apple Silicon (Intel needs one `hostPlatform` line change). One repo and one switch path recreate the same environment instead of hand-tuning each Mac.

Clone, review username/host/Homebrew zap settings in "Make it yours", run `./bootstrap.sh` on a fresh machine, then `./rebuild.sh` for daily applies. Feature PRs are not accepted; bug issues are. This is a personal template to fork and adapt, not a multi-user product.

## chrome-devtools-axi

https://github.com/kunchenguid/chrome-devtools-axi

chrome-devtools-axi wraps chrome-devtools-mcp as an AXI-compliant CLI for browser automation: navigate, click, fill, extract, with combined operations, TOON output, stale-ref checks, and contextual next-step hints after every response.

It solves expensive, turn-heavy browser work through raw MCP or human-shaped browser CLIs. On the axi.md browser benchmark it posts the lowest tokens, cost, duration, and turns among compared setups at 100% task success.

Recommended: `npx skills add kunchenguid/chrome-devtools-axi --skill chrome-devtools-axi -g` so agents use `npx -y chrome-devtools-axi` on demand; or global install plus `chrome-devtools-axi setup hooks` for SessionStart ambient context. Point agents at real-browser tasks; simpler fetch/curl stays preferred for static pages.

## vision

https://github.com/kunchenguid/vision

vision is an Agent Skill that mines a repo's merged PRs or commit history, drafts a testable `VISION.md` acceptance policy, stress-tests it with hard hypotheticals, and iterates with you on a Lavish-backed interactive review board until the document stands alone for accept/resist decisions.

It solves values that live only in shipped history: contributors and coding agents otherwise re-litigate what the project refuses to become. Principles must cite real evidence; generic engineering virtues are banned, and unreadable history makes the skill refuse rather than invent.

Add the skill with the skills CLI from kunchenguid/vision (global recommended), then `/vision` (or `/vision owner/repo`) inside the target repo. Needs `gh` or `gh-axi` for PR history when available, git history as fallback, and `npx -y lavish-axi` for the review board. Harness-agnostic.

## gh-axi

https://github.com/kunchenguid/gh-axi

gh-axi is the GitHub AXI: a token-efficient wrapper around the official `gh` CLI for agents, with TOON output, live dashboard defaults, contextual next steps, and structured errors across issues, PRs, stacks, workflow runs, Projects, secrets/variables, gists, and more.

It solves agents burning tokens and turns on raw `gh` JSON or eager GitHub MCP schemas. On the axi.md GitHub benchmark it is the only compared condition at 100% success, at lower cost than raw `gh` and far cheaper than GitHub MCP variants.

Install the skill with `npx skills add kunchenguid/gh-axi --skill gh-axi -g` (agents then use `npx -y gh-axi`), or install globally and optionally `gh-axi setup hooks`. Requires Node 20+, `gh` authenticated via `gh auth login`; stacked PRs need `gh extension install github/gh-stack`. macOS, Linux, and Windows.

## whathappened

https://github.com/kunchenguid/whathappened

whathappened is a Grok Build Agent Skill that turns an X firehose around a breaking topic into a short neutral briefing: what happened, where the conversation is, a public opinion map with camps, live debates, and receipt links. Adaptive time windows favor freshness.

It solves dunks, quote-tweet chains, and conflicting "official" takes with no single place to read them. Briefings stay X-first (one optional web lookup only to resolve who/what), with steelmanned camps instead of a vibes paragraph.

Add into Grok Build with the skills CLI from kunchenguid/whathappened (global recommended), or copy `skills/whathappened` to `~/.grok/skills/whathappened`, then `/whathappened <topic>`. **Grok Build only**: it needs Grok's native X tools; other agents can add the package but cannot run it for real.

## baby-menu

https://github.com/kunchenguid/baby-menu

baby-menu is a macOS menu-bar Electron app whose popover can run your coding agent to edit the menu on the fly. Ask in plain English for a widget or layout; the agent writes an extension under `~/.baby-menu/extensions`, hot-reloads it, and offers Keep/Undo based on the real diff.

It solves fixed menu-bar apps that never match the exact mix of system and agent metrics you want (CPU next to Claude usage next to calendar, and so on). Personal software evolves by conversation instead of waiting for someone else's release.

Requires macOS 13+, Homebrew, and an authenticated agent CLI such as `claude` or `codex` on PATH. Install with `brew install --cask kunchenguid/tap/baby-menu`, open the app, and ask in the composer. Settings cover launch-at-login and embedded/custom ACP agents.

## quota-axi

https://github.com/kunchenguid/quota-axi

quota-axi is a data-only AXI CLI that reports local quota/usage windows for Claude, Codex, Cursor, GitHub Copilot, Grok, Kimi, Z.AI, Alibaba, OpenCode Go, and Antigravity in one TOON-shaped call. It never routes, recommends, proxies, logs in, imports browser cookies, or mints credentials (beyond optional delegated vendor CLI refresh).

It solves agents choosing work without knowing remaining subscription capacity, and humans parsing vendor dashboards that are not shaped for shell automation. Normalized scopes, runway, and attention blocks give routing-aware callers evidence without inventing numbers.

Run `npx -y quota-axi` (or install globally). On macOS, Claude/Cursor Keychain credentials may need a one-time `quota-axi --allow-keychain-prompt` with Always Allow. Use `--provider`, `--json`, and `--full` as needed. Local-first against first-party endpoints; macOS, Linux, and Windows.
