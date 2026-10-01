---
source: x
id: 2103981109562470857
url: "https://x.com/kunchenguid/status/2103981109562470857"
created_at: "2026-09-26T22:52:41.000Z"
type: quote
conversation_id: 2103979729443504300
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2103895901140042044"
  - "https://x.com/NeuroticEpi/status/2103980331036815684"
parents:
  - id: 2103895901140042044
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2103895901140042044"
    type: quoted
  - id: 2103980331036815684
    author: NeuroticEpi
    url: "https://x.com/NeuroticEpi/status/2103980331036815684"
    type: replied_to
---

### @kunchenguid

some good data here about model routing

first cursor model router, now openrouter + jev. people keep trying to build routers at _request level_ which is not going to work

the fundamental problem is that a prompt without surrounding context is simply not enough signal to judge complexity

easiest example to understand this - if you ask “how does this work” in a toy repo with just one html file, any dumb model can do it. but if you send the exact same prompt in linux kernel repo, hell breaks loose. how do you route that prompt?

the second problem is prompt caching. it means we can’t frequently change the model during a session in an economic way. one or two missteps here and there, and you find yourself spending more cost than simply using the best model all along

the right way to build a router is to do it at task level, not request level. this cannot be done by a model gateway which has to assume everything is a single continuous session. it needs to be a harness layer capability which can make use of a multi-agent architecture

a smart enough model first needs to do some digging and understand the complexity of the ask, then delegate substantial sub tasks to models with appropriate intelligence - even this is very hard to get right

### @NeuroticEpi

@kunchenguid i wonder why @AnthropicAI and @OpenAI don't have auto model routers?

### @kunchenguid

@NeuroticEpi @AnthropicAI @OpenAI gpt 5 already tried an auto model router and it didn’t quite work. because - https://t.co/OBmX67imNx
