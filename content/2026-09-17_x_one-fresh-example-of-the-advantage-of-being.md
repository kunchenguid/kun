---
source: x
id: 2100675262161826099
url: "https://x.com/kunchenguid/status/2100675262161826099"
created_at: "2026-09-17T19:56:25.000Z"
type: quote
conversation_id: 2100665809861476408
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2100468943853085061"
  - "https://x.com/kunchenguid/status/2100665809861476408"
parents:
  - id: 2100468943853085061
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2100468943853085061"
    type: quoted
  - id: 2100665809861476408
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2100665809861476408"
    type: replied_to
---

### @kunchenguid

alright - just got Jev deployed for a real production use case, which now performs at fable level quality but 10x faster and saves a ton of money

context - a powerful capability of firstmate is that as an orchestrator it intelligently routes each task to an appropriate agent (permutation of harness, model, and reasoning effort) based on custom user preference

by default, that's done by the firstmate agent and the LLM would have to do some thinking, make tool calls to read dispatch rules, quota data etc and then do the dispatch. this is slow and does cost a bit of LLM tokens

i just replaced this dispatch process with Jev. it makes the same decision with no thinking or tool calls, done in ~200ms, and for the 25 tasks i evaluated this with, it gives the exact same answer fable would have given... 

there's still a tool call needed to invoke Jev, done by the firstmate agent which uses an LLM. but even with that counted, the saving from Jev still resulted in a -71% reduction in cost and -90% reduction in wall time of completing the whole dispatching process

Jev API calls themselves are almost free.. i made 100+ calls, and my usage dashboard still shows $0.01 (which i think means "haven't reached $0.01 yet"). if we just look at the part Jev replaced and not the whole system, then the saving is on the magnitude of ~100x

if you also have Jev and you use firstmate, set TYPESAFE_API_KEY in your .env file in your firstmate repo to activate this

exciting times! i think this is starting to enable a whole new architectural paradigm for software. LLMs are just a small part of it. more on that soon

### @kunchenguid

haha - one by one, they all become firstmate, just a few months behind

and they all miss the vendor-agnostic aspect which made firstmate powerful https://t.co/i5wGTtkEPm

### @kunchenguid

one fresh example of the advantage of being vendor-agnostic - i could ship a jev integration in firstmate the same day jev was released. anthropic can't :)

https://t.co/f5Lc9bFeoP
