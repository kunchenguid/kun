---
source: x
id: 2100494796687340001
url: "https://x.com/kunchenguid/status/2100494796687340001"
created_at: "2026-09-17T07:59:19.000Z"
type: reply
conversation_id: 2100468943853085061
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/ArtifexPraxis/status/2100493936791802199"
parents:
  - id: 2100493936791802199
    author: ArtifexPraxis
    url: "https://x.com/ArtifexPraxis/status/2100493936791802199"
    type: replied_to
---

### @ArtifexPraxis

@kunchenguid One question I keep coming back around to is where does context pulled in by the main agent go? Straight into Jevs state as a context dump? 

I ask as you mentioned the lack of need for multiple tool calls - guessing those tool calls were decision making tools, not context tools?

### @kunchenguid

@ArtifexPraxis when firstmate is about to dispatch a crewmate to do a task, it first has to write a task brief anyway

that task brief + the user's dispatch rules + the user's quota data = input context to Jev here
