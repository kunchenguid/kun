---
source: x
id: 2108048810584760516
url: "https://x.com/kunchenguid/status/2108048810584760516"
created_at: "2026-10-08T04:16:16.000Z"
type: reply
conversation_id: null
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/asmirkn/status/2108043344060330275"
parents:
  - id: 2108043344060330275
    author: asmirkn
    url: "https://x.com/asmirkn/status/2108043344060330275"
    type: replied_to
---

### @asmirkn

@kunchenguid i dont think a one pass eval can show this, tests pay off when you change the same code a second time and need to know nothing broke. did any deepswe task have a follow up change?

### @kunchenguid

@asmirkn i mentioned in my post - the 44 subset was run to check this

for that set, i completely disabled test execution. the agent can’t run any regression testing, yet its success rate has no difference (deepswe success rate checks for regression)

this means the agents today don’t need to run existing tests to prevent regression. it sounds counter intuitive but empirically that’s what’s happening
