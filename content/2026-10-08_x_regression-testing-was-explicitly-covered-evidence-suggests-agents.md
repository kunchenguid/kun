---
source: x
id: 2108070227347120478
url: "https://x.com/kunchenguid/status/2108070227347120478"
created_at: "2026-10-08T05:41:22.000Z"
type: quote
conversation_id: null
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2108048810584760516"
  - "https://x.com/kishorelive/status/2108069346526585066"
parents:
  - id: 2108048810584760516
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2108048810584760516"
    type: quoted
  - id: 2108069346526585066
    author: kishorelive
    url: "https://x.com/kishorelive/status/2108069346526585066"
    type: replied_to
---

### @kunchenguid

i mentioned in my post - the 44 subset was run to check this

for that set, i completely disabled test execution. the agent can’t run any regression testing, yet its success rate has no difference (deepswe success rate checks for regression)

this means the agents today don’t need to run existing tests to prevent regression. it sounds counter intuitive but empirically that’s what’s happening

### @kishorelive

Such a terrible framing of the problem. Tests also help catch defects as new features land over time that adds subtle complexity. That's not covered here.

### @kunchenguid

@kishorelive regression testing was explicitly covered - evidence suggests agents don’t need the test suite to prevent regression https://x.com/kunchenguid/status/2108048810584760516
