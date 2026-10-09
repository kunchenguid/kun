---
source: x
id: 2108286301875449955
url: "https://x.com/kunchenguid/status/2108286301875449955"
created_at: "2026-10-08T19:59:59.000Z"
type: reply
conversation_id: 2108275853029146783
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/PawelHuryn/status/2108284137337483388"
parents:
  - id: 2108284137337483388
    author: PawelHuryn
    url: "https://x.com/PawelHuryn/status/2108284137337483388"
    type: replied_to
---

### @PawelHuryn

@kunchenguid Still one change per task, though. The tests the agent writes never get a second change to catch something. The grader doesn't run them, and nothing comes after. 

So the eval can't tell you whether they'd catch the next regression.

All this proves is that agents don't need tests to make a single change. That's correct. They understand the code they wrote without compiling it. But this says nothing about the benefits those tests would have in the future.

### @kunchenguid

@PawelHuryn yeah, not for the tests written by the agent during these tasks, but the test suite disabling arm tested the value of previously written tests and how well they help prevent agents from regressing existing behavior - and turns out they don’t

it’s a bit counter intuitive but it happened. it seems agents can look at existing code and infer the intent and expected behavior without running the test suite

or that it’s a sign that most test suites don’t really describe true intent better than the implementation itself
