---
source: x
id: 2103335401515819238
url: "https://x.com/kunchenguid/status/2103335401515819238"
created_at: "2026-09-25T04:06:52.000Z"
type: reply
conversation_id: 2103325882752598078
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/cloneisjun/status/2103333092836667884"
parents:
  - id: 2103333092836667884
    author: cloneisjun
    url: "https://x.com/cloneisjun/status/2103333092836667884"
    type: replied_to
---

### @cloneisjun

@kunchenguid when a medium implementation uncovers ambiguity, do you raise effort mid-run or hand it to a crewmate?

### @kunchenguid

good question! this is very important - in most cases, switching reasoning effort level will change either the shape of the request or a tiny part of the system prompt and breaks prompt caching

that means the next request will be a fully uncached request, which can be very expensive

only recently claude code enabled mid-session change of effort level without breaking cache - so i'd do it in CC, but in other harnesses need to first study how it handles effort change and prompt caching
