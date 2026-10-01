---
source: x
id: 2103895901140042044
url: "https://x.com/kunchenguid/status/2103895901140042044"
created_at: "2026-09-26T17:14:05.000Z"
type: quote
conversation_id: 2103895901140042044
thread_complete: true
parent_urls:
  - "https://x.com/theo/status/2103774771788108008"
parents:
  - id: 2103774771788108008
    author: theo
    url: "https://x.com/theo/status/2103774771788108008"
    type: quoted
---

### @theo

I stayed up til 2am and spent $1,000 benchmarking Jev Router so you don't have to. 

Performance on DeepSWE was roughly the same as GPT-6 Astra on low. It costs slightly more, and it took almost 5x longer to run. https://t.co/Qm7XAb0AuY https://t.co/SKrxky4Hb0

### @kunchenguid

some good data here about model routing

first cursor model router, now openrouter + jev. people keep trying to build routers at _request level_ which is not going to work

the fundamental problem is that a prompt without surrounding context is simply not enough signal to judge complexity

easiest example to understand this - if you ask “how does this work” in a toy repo with just one html file, any dumb model can do it. but if you send the exact same prompt in linux kernel repo, hell breaks loose. how do you route that prompt?

the second problem is prompt caching. it means we can’t frequently change the model during a session in an economic way. one or two missteps here and there, and you find yourself spending more cost than simply using the best model all along

the right way to build a router is to do it at task level, not request level. this cannot be done by a model gateway which has to assume everything is a single continuous session. it needs to be a harness layer capability which can make use of a multi-agent architecture

a smart enough model first needs to do some digging and understand the complexity of the ask, then delegate substantial sub tasks to models with appropriate intelligence - even this is very hard to get right
