---
source: x
id: 2108112518778614208
url: "https://x.com/kunchenguid/status/2108112518778614208"
created_at: "2026-10-08T08:29:25.000Z"
type: quote
conversation_id: null
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2108048810584760516"
  - "https://x.com/julianharris/status/2108111666785198129"
parents:
  - id: 2108048810584760516
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2108048810584760516"
    type: quoted
  - id: 2108111666785198129
    author: julianharris
    url: "https://x.com/julianharris/status/2108111666785198129"
    type: replied_to
---

### @kunchenguid

i mentioned in my post - the 44 subset was run to check this

for that set, i completely disabled test execution. the agent can’t run any regression testing, yet its success rate has no difference (deepswe success rate checks for regression)

this means the agents today don’t need to run existing tests to prevent regression. it sounds counter intuitive but empirically that’s what’s happening

### @julianharris

This seems to fundamentally miss the point of a test

…which is a protection against intended side effects of previously written code. A benchmark I’d be interested in would be checking whole app as one of many incremental improvements over time. Ie regressions.

### @kunchenguid

@julianharris regression testing was explicitly covered in the eval. unfortunately agents don't miss a beat when regression testing is made unavailable

the real question is whether the tests express intent better than the implementation itself, and many tests (especially AI-generated ones without human input) don't do that very well
   https://x.com/kunchenguid/status/2108048810584760516
