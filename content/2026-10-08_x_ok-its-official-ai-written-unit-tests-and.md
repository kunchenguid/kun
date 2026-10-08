---
source: x
id: 2108030810691629403
url: "https://x.com/kunchenguid/status/2108030810691629403"
created_at: "2026-10-08T03:04:45.000Z"
type: post
conversation_id: null
thread_complete: true
---

### @kunchenguid

ok it's official... AI-written unit tests and integration tests are empirically proven to be unhelpful. you should tell your agents to stop writing tests by themselves

on the deepswe eval set, banning sonnet 5.5 high from writing any tests actually resulted in slightly higher success rate (non stat-sig), with less time and token spent (stat-sig). this is pretty hard empirical evidence

across the tests that were written by the "tests allowed" baseline arm, 65% of them were unit tests, 35% were integration tests, neither bucket resulted in any improvement compared to not writing any tests at all

i also picked a random sample of 44 tasks subset where i completely disabled executing even existing tests - it also did not affect success rate at all

i spot checked many tests written in the baseline arm, and my intuition is that most tests are simply a repetition of the implementation

agent-written tests do not add any value because both the implementation and the tests were simply the agent's interpretation of our intent. the tests aren't any more accurate than the implementation itself

i suspect we can still extract some value from unit tests and integration tests if we describe them ourselves when we believe we can articulate our intent better through test cases than through requirements. but i have not proven this yet

also worth noting, during deepswe eval the agent wrote almost no e2e tests (only 17, compared to 3000+ unit/integration tests written). so this analysis does not prove nor disprove the value of e2e tests - i will do another eval specifically for that
