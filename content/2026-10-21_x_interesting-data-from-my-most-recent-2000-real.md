---
source: x
id: 2112714875264979449
url: "https://x.com/kunchenguid/status/2112714875264979449"
created_at: "2026-10-21T01:17:33.000Z"
type: post
conversation_id: null
thread_complete: true
---

### @kunchenguid

interesting data from my most recent 2000 real tasks

all of these tasks' outcome got accepted by me, so consider them all successful. when a model didn't give me good results, i would get it to do more iterations until it succeeded

the main caveat is the "plan" bucket - if i didn't like a model's plan, i would sometimes just abandon it and it wouldn't show up here. sometimes i also explicitly ask astra / fable for difficult plans. so take the plan row with a grain of salt. the other rows are mostly randomized and fair

reasoning effort was set at xhigh for plan, medium for others

explaining the task types:
- research: these are mostly answering my questions
- plan: these are technical planning. it could be designing a new feature, or reproducing a bug
- implement: implementing an already defined spec
- fix: fix a bug that's already reproduced

a few interesting signals:

- sol 6.1 and sonnet 5.5 are almost exact equivalents, and they are both 5-10x more efficient at my implement and fix tasks than opus and astra

- grok 4.7 is efficient at read-only tasks, but quite expensive for writing code - this is likely because of its high price point for cached tokens so long coding sessions become very costly

- astra is a lot more expensive than opus 5.5, despite its token efficiency advantage. this is awkward because if sonnet matches sol, opus is better than astra, fable 5.5 is coming, and openai's subscription's $ value is getting cut in half, how do they compete?
