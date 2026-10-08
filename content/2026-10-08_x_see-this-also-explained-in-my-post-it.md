---
source: x
id: 2108054021588279475
url: "https://x.com/kunchenguid/status/2108054021588279475"
created_at: "2026-10-08T04:36:59.000Z"
type: quote
conversation_id: null
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2108048810584760516"
  - "https://x.com/adrian1977/status/2108052496530989405"
parents:
  - id: 2108048810584760516
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2108048810584760516"
    type: quoted
  - id: 2108052496530989405
    author: adrian1977
    url: "https://x.com/adrian1977/status/2108052496530989405"
    type: replied_to
---

### @kunchenguid

i mentioned in my post - the 44 subset was run to check this

for that set, i completely disabled test execution. the agent can’t run any regression testing, yet its success rate has no difference (deepswe success rate checks for regression)

this means the agents today don’t need to run existing tests to prevent regression. it sounds counter intuitive but empirically that’s what’s happening

### @adrian1977

@kunchenguid Aren't the tests useful for future work though? Don't the tests keep the code grounded by what previous agents did, rather than drifting from the original intent?

### @kunchenguid

@adrian1977 see this. also explained in my post - it looks like agent-written tests don’t express your intent any better than the implementation itself https://x.com/kunchenguid/status/2108048810584760516
