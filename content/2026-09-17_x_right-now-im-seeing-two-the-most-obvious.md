---
source: x
id: 2100476218512748616
url: "https://x.com/kunchenguid/status/2100476218512748616"
created_at: "2026-09-17T06:45:30.000Z"
type: reply
conversation_id: 2100468943853085061
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/v10se/status/2100473419569500543"
parents:
  - id: 2100473419569500543
    author: v10se
    url: "https://x.com/v10se/status/2100473419569500543"
    type: replied_to
---

### @v10se

@kunchenguid Does this enhance/make any model a better orchestrator or what are the implications here?

### @kunchenguid

right now i'm seeing two -

the most obvious implication is cost reduction. it's a massive saving whenever we can replace LLM calls with this

the non-obvious one is that it forces us to think about our software differently. LLMs make us all build agent loops. this enables us to explore a different architecture - a combination of deterministic logic (code), intelligent decision making (Jev), and occasional generation of content (LLM)
