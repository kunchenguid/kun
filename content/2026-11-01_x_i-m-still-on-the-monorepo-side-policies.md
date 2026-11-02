---
source: x
id: 2116945346853241154
url: "https://x.com/kunchenguid/status/2116945346853241154"
created_at: "2026-11-01T17:27:56.000Z"
type: reply
conversation_id: 2116913244682199220
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/CalvinGrunewald/status/2116913244682199220"
parents:
  - id: 2116913244682199220
    author: CalvinGrunewald
    url: "https://x.com/CalvinGrunewald/status/2116913244682199220"
    type: replied_to
---

### @CalvinGrunewald

When I left big tech to do a startup going all in on agents, I thought a monorepo was the way to go- give the agents access to everything. It intuitively made sense. Maybe I was biased by the level of intelligence a year ago. 

Like these posts, I no longer think a monorepo is optimal, but not for the reasons below. Today’s frontier models are perfectly able to deal with history/projects/etc in a monorepo. 

The primary issues I’m seeing are around how they impact bottlenecks after coding. CI/CD is much simpler to maintain and optimize on smaller repos. Monorepos encourage blanket policies (like code review) across all projects and that is definitely not what you want. Deploy safety and ordering becomes chaos (even more so than in human only monorepos). 

What I find to be a better workflow is have one dir with all your repos checked out, use your harness in yolo mode, and just tell it what you want. It will figure cross project dependencies out.

One other note: I am still a fan of the modular monolith design pattern. I think there is a ton of leverage in that design for agents. The main tweak is to just not include all the smaller/supporting services in the same repo.

### @kunchenguid

@CalvinGrunewald i’m still on the monorepo side. :) policies etc are all solvable, right? a monorepo can make every workflow conditional based on what’s changing, exactly like how a multi-repo setup would
