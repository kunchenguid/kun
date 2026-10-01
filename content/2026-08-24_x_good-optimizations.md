---
source: x
id: 2092010979718463590
url: "https://x.com/kunchenguid/status/2092010979718463590"
created_at: "2026-08-24T22:07:39.000Z"
type: reply
conversation_id: 2091988752847823133
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/rajesh_thallam/status/2092002794039644269"
parents:
  - id: 2092002794039644269
    author: rajesh_thallam
    url: "https://x.com/rajesh_thallam/status/2092002794039644269"
    type: replied_to
---

### @rajesh_thallam

Love this. I hit the same wall (too many fleet interruptions) running firstmate and what helped was stopping repeated wakes before they reached the main session. 

In my case, most wakes were the same situation coming back, e.g. the same PR still waiting on merge.
I tracked each situation rather than each check, surfaced it once to the main, and stayed quiet until the status changed. So a PR polled 30 times then costs one decision. 

Two things that also helped: 1) batching events that arrive close together within a certain interval so it wakes once, and 2) persisting pending events to disk so nothing is lost on a restart.

### @kunchenguid

@rajesh_thallam @pidotdev good optimizations!
