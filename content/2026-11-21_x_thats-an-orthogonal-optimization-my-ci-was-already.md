---
source: x
id: 2124003495301071195
url: "https://x.com/kunchenguid/status/2124003495301071195"
created_at: "2026-11-21T04:54:30.000Z"
type: reply
conversation_id: 2123985561551778151
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/Mattcall/status/2124001850387202283"
parents:
  - id: 2124001850387202283
    author: Mattcall
    url: "https://x.com/Mattcall/status/2124001850387202283"
    type: replied_to
---

### @Mattcall

@kunchenguid All you need to do is make CI 3.5-7x more efficient. I’m doing 500-1,200 PRs a day now with no issues. My median CI time is now 2 min, with a max of 6.6 min (from 7-8 min and 35 min max).

### @kunchenguid

@Mattcall that's an orthogonal optimization

my CI was already heavily optimized, but no matter how efficient each CI job is, doing this batching would still reduces the cost further by an order of magnitude
