---
source: x
id: 2117763911940505813
url: "https://x.com/kunchenguid/status/2117763911940505813"
created_at: "2026-11-03T23:40:37.000Z"
type: reply
conversation_id: 2117756472432148784
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/kartikb753/status/2117761413598912642"
parents:
  - id: 2117761413598912642
    author: kartikb753
    url: "https://x.com/kartikb753/status/2117761413598912642"
    type: replied_to
---

### @kartikb753

@kunchenguid with that many agent PRs, leftover state on a long-lived runner can let one branch pass on another branch's build output. does runner-up wipe the workspace between jobs?

### @kunchenguid

@kartikb753 yes each runner can run in a micro-vm which gets completely destroyed after use so zero pile up and maintenance
