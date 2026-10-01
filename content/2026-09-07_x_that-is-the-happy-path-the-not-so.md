---
source: x
id: 2097043686953759104
url: "https://x.com/kunchenguid/status/2097043686953759104"
created_at: "2026-09-07T19:25:50.000Z"
type: reply
conversation_id: 2097035514067272079
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/The_HappyPath/status/2097039542704337307"
parents:
  - id: 2097039542704337307
    author: The_HappyPath
    url: "https://x.com/The_HappyPath/status/2097039542704337307"
    type: replied_to
---

### @The_HappyPath

@kunchenguid What about decoupling the writing of unit tests with the rest of the code?
- Agent 1: writes unit tests (and potentially abstractions/interfaces) based on the  specs
- Agent 2: implements the functionality. Loops  over until the tests pass but cannot change the test files

### @kunchenguid

@The_HappyPath that is.. the happy path.. 😂

the not-so-happy and more common path is that the real requirements we have can’t be proven at an individual unit level
