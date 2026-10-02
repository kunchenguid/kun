---
source: x
id: 2105760727017632230
url: "https://x.com/kunchenguid/status/2105760727017632230"
created_at: "2026-10-01T20:44:15.000Z"
type: reply
conversation_id: 2105747234071388189
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/lbtech/status/2105747234071388189"
parents:
  - id: 2105747234071388189
    author: lbtech
    url: "https://x.com/lbtech/status/2105747234071388189"
    type: replied_to
---

### @lbtech

My Agentic Software Factory Toolkit
I turned one Linux machine into a software team of AI agents, and this is how I watch it work.

agent-stack runs ~70 Claude Code and Codex sessions as real teams, one per project: a lead, an architect, builders, test authors, reviewers, QA and an integrator, all coordinated by OpenRig over a durable work queue.

Every change goes the same way:
→ tests are written first and locked before any code
→ an agent builds it
→ a reviewer from the OTHER AI model family checks it
→ QA tests it
→ a merge gate decides "merge or hold" on that exact commit
→ a fresh agent then uses the feature end to end, like a person would

rig-console (in the video) is mission control: who's working, idle or stuck (always with the reason), work flowing through the pipeline per team, any agent's live terminal, model quotas and system health. Read-only, about 1% of one core.

Open source, with a demo mode you can run without a fleet:
https://t.co/uiKdeatN27
utalises OpenRig and maintains upstream
and builds ontop of it.

### @kunchenguid

@lbtech fancy! are you making some of the workflows configurable? one thing i learned is that everyone kind of does their project slightly differently so may want to have a different set of steps
