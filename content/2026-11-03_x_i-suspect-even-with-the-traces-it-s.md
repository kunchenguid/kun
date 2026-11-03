---
source: x
id: 2117490685817557043
url: "https://x.com/kunchenguid/status/2117490685817557043"
created_at: "2026-11-03T05:34:55.000Z"
type: reply
conversation_id: null
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/kartikb753/status/2117488498282549721"
parents:
  - id: 2117488498282549721
    author: kartikb753
    url: "https://x.com/kartikb753/status/2117488498282549721"
    type: replied_to
---

### @kartikb753

@kunchenguid oncall gets weird when the change that broke prod came out of an agent session. the deploy needs a link back to that session's trace, otherwise the postmortem starts with nobody knowing why the change was made

### @kunchenguid

@kartikb753 i suspect even with the traces it’s still hard to understand because it’ll be agents promoting agents in layers and layers of nested loops and automation
