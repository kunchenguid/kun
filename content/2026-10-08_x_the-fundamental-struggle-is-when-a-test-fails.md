---
source: x
id: 2108069278914392460
url: "https://x.com/kunchenguid/status/2108069278914392460"
created_at: "2026-10-08T05:37:36.000Z"
type: reply
conversation_id: null
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/Code_of_Kai/status/2108063741065441529"
parents:
  - id: 2108063741065441529
    author: Code_of_Kai
    url: "https://x.com/Code_of_Kai/status/2108063741065441529"
    type: replied_to
---

### @Code_of_Kai

@kunchenguid Great work! What about mutation testing?

### @kunchenguid

@Code_of_Kai the fundamental struggle is when a test fails, it’s unclear whether it’s the implementation or the test being wrong, and the agent can modify either of them to make the test pass

this means there has to be another source of truth for what the desired behavior should be

and as long as that truth exists, agents seem fully capable of translating that source of truth to the correct implementation without tests as an intermediate artifact

this is true regardless of what technique  is used to construct the tests. to make tests useful, the tests must have absolute authority assigned by humans explicitly, not autonomously written by AI
