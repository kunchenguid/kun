---
source: x
id: 2108272451255996900
url: "https://x.com/kunchenguid/status/2108272451255996900"
created_at: "2026-10-08T19:04:56.000Z"
type: reply
conversation_id: 2108030810691629403
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/mattpocockuk/status/2108238697539805304"
parents:
  - id: 2108238697539805304
    author: mattpocockuk
    url: "https://x.com/mattpocockuk/status/2108238697539805304"
    type: replied_to
---

### @mattpocockuk

@kunchenguid Yep I much prefer this more modest framing.

I agree we need to gather data, but I think folks dismiss anecdata because it's too fluffy and doesn't give us a firm number.

Which gives folks who are willing to make dishonest benchmarks an advantage in this space, if they're

### @kunchenguid

@mattpocockuk the way deepswe grades regression is that each task explicitly has two sets of tests that must pass:

- new behavior tests. these are verifying the change did what it's supposed to do. they would fail before the solution, and need to pass afterwards

- regression tests. these are curated tests specifically made to verify related behaviors don't regress. they would pass before the solution, and must remain passing afterwards

both sets are hidden from the agent, so the agent can't cheat

quality of the regression tests seems a bit uneven across tasks, but in aggregate across all failed tasks, ~10% failed due to being caught by these regression tests, so they are at least meaningful, not trivial
