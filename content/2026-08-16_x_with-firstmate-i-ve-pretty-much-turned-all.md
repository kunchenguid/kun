---
source: x
id: 2088854639303438846
url: "https://x.com/kunchenguid/status/2088854639303438846"
created_at: "2026-08-16T05:05:29.000Z"
type: reply
conversation_id: null
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/derekcheng/status/2088852147656167750"
parents:
  - id: 2088852147656167750
    author: derekcheng
    url: "https://x.com/derekcheng/status/2088852147656167750"
    type: replied_to
---

### @derekcheng

@kunchenguid @cerebras @OpenAI Not sure if the asynchrony thing will go away. First, a lot of time is spent in cpu and I/o bound tool calls. Second, seems like the trend with increasing intelligent is less steering needed…

### @kunchenguid

@derekcheng @cerebras @OpenAI with firstmate i’ve pretty much turned all cpu/io bound operations into the background :)

they do still take time but they don’t have to block the agent - they can wake the agent up when they are done. so the agent is always available to keep talking about other things with me
