---
source: x
id: 2100816020932096060
url: "https://x.com/kunchenguid/status/2100816020932096060"
created_at: "2026-09-18T05:15:45.000Z"
type: reply
conversation_id: 2100694549362553153
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/DeccansoftAI/status/2100813792301273128"
parents:
  - id: 2100813792301273128
    author: DeccansoftAI
    url: "https://x.com/DeccansoftAI/status/2100813792301273128"
    type: replied_to
---

### @DeccansoftAI

@kunchenguid @tamarajtran @typesafeai Thanks for the comment. Can't we use the combination of both? Where in first level it removes absolutely unnecessary messages and tool calls from the context and LLM conpacts the rest?

### @kunchenguid

@DeccansoftAI @tamarajtran @typesafeai no, because when the LLM compacts the whole session, it's a fully cached prompt whose price is very low

but if you remove some of the messages from the history and then run a compaction request, it's a cache miss and will be charged at FULL price 10x-40x more expensive
