---
source: x
id: 2108116395884212553
url: "https://x.com/kunchenguid/status/2108116395884212553"
created_at: "2026-10-08T08:44:50.000Z"
type: quote
conversation_id: null
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2108048810584760516"
  - "https://x.com/J_Bombar/status/2108115383106351294"
parents:
  - id: 2108048810584760516
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2108048810584760516"
    type: quoted
  - id: 2108115383106351294
    author: J_Bombar
    url: "https://x.com/J_Bombar/status/2108115383106351294"
    type: replied_to
---

### @kunchenguid

i mentioned in my post - the 44 subset was run to check this

for that set, i completely disabled test execution. the agent can’t run any regression testing, yet its success rate has no difference (deepswe success rate checks for regression)

this means the agents today don’t need to run existing tests to prevent regression. it sounds counter intuitive but empirically that’s what’s happening

### @J_Bombar

@kunchenguid Very interesting. I wouldn’t expect that. Now, what about the regression prevention?

### @kunchenguid

@J_Bombar only if the tests express true intent better than the implementation itself

my eval covered that and there’s no difference in regression when we disallow the agent from running existing test suite https://x.com/kunchenguid/status/2108048810584760516
