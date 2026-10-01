---
source: x
id: 2100800776620900454
url: "https://x.com/kunchenguid/status/2100800776620900454"
created_at: "2026-09-18T04:15:10.000Z"
type: reply
conversation_id: 2100694549362553153
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/tamarajtran/status/2100694549362553153"
parents:
  - id: 2100694549362553153
    author: tamarajtran
    url: "https://x.com/tamarajtran/status/2100694549362553153"
    type: replied_to
---

### @tamarajtran

found the perfect use case for @typesafeai Jev: 

instant compaction

in 2026, why is compaction still a summarization prompt?

Jev can make it instant by scoring every tool call and dropping what’s irrelevant https://t.co/h6NzKzNpCg

### @kunchenguid

umm.. since this is somehow spreading so widely, i feel obligated to point out that this is unfortunately a bad idea

the fundamental flaws -

1. it only selectively remove some tool calls. user and assistant messages are kept FOREVER, which means the compaction summary will only keep growing and never shrink. so long running tasks will eventually completely run out of context window and cannot self recover, defeating the primary purpose of compaction which is to free up the context window so the agent can keep going

2. this operation leaves a lot more stuff in the context window than a real compaction, which means the next request after doing this becomes a massive uncached prompt which in some cases even more expensive than letting the long cached session continue, which defeats the other purpose of compaction which is cost saving

i suggest running some evals such as deepswe, programbench etc to actually measure the cost and performance tradeoff and share it if you are truly convinced this is practical
