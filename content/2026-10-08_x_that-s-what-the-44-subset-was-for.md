---
source: x
id: 2108038332278309237
url: "https://x.com/kunchenguid/status/2108038332278309237"
created_at: "2026-10-08T03:34:38.000Z"
type: reply
conversation_id: null
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/Thomas3cnl/status/2108036447475556638"
parents:
  - id: 2108036447475556638
    author: Thomas3cnl
    url: "https://x.com/Thomas3cnl/status/2108036447475556638"
    type: replied_to
---

### @Thomas3cnl

@kunchenguid Did any of those generated tests catch regressions from a later patch? The current-task success rate wouldn't measure that, even if the tests add no value while writing the first fix.

### @kunchenguid

@Thomas3cnl that’s what the 44 subset was for - banning test execution completely would block the agent from regression testing, but it didn’t affect outcome

the reason is that future agent work can modify existing tests just like they can modify existing implementation - no one knows which modifications are okay unless there’s another more accurate source of truth
