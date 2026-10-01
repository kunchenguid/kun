---
source: x
id: 2091741474530680893
url: "https://x.com/kunchenguid/status/2091741474530680893"
created_at: "2026-08-24T04:16:44.000Z"
type: reply
conversation_id: 2091690492241289536
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/ai_ops_lead/status/2091727465378979984"
parents:
  - id: 2091727465378979984
    author: ai_ops_lead
    url: "https://x.com/ai_ops_lead/status/2091727465378979984"
    type: replied_to
---

### @ai_ops_lead

Compaction is cached input and a relatively small amount of output. When you're at long context, it saves you a massive amount of cached input for ensuing requests. Cached input drives the largest percentage of token costs, so it directly addresses the problem.

Cache as often as you can without hurting task performance.

### @kunchenguid

@ai_ops_lead if you compact “as often as you can”, you will literally be reloading the same context over and over again but in an uncached way.. 

the place to do compaction is when previous context is no longer needed, but often people don’t really get these clean cuts
