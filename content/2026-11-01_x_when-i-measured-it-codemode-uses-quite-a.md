---
source: x
id: 2116785563697348705
url: "https://x.com/kunchenguid/status/2116785563697348705"
created_at: "2026-11-01T06:53:01.000Z"
type: reply
conversation_id: 2116782408347640132
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/zav_dev/status/2116782408347640132"
parents:
  - id: 2116782408347640132
    author: zav_dev
    url: "https://x.com/zav_dev/status/2116782408347640132"
    type: replied_to
---

### @zav_dev

@kunchenguid 

What is your opinion on AXI CLIs vs MCP + Codemode?

Do you still believe that agents perform better using AXI CLIs? 

How do you weigh the benefit of not having to maintain an AXI CLI (and just being able to use the out-of-the-box MCP)?

### @kunchenguid

@zav_dev when i measured it, codemode uses quite a bit more output tokens (to write the code) and when it make a mistake in the code it costs a lot to debug and self-correct, which makes latency a lot higher as well

https://t.co/cLRFATdJ0N has the eval data
