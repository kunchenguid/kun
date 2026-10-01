---
source: x
id: 2091718393594528067
url: "https://x.com/kunchenguid/status/2091718393594528067"
created_at: "2026-08-24T02:45:01.000Z"
type: reply
conversation_id: 2091690492241289536
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/kunchenguid/status/2091690492241289536"
parents:
  - id: 2091690492241289536
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2091690492241289536"
    type: replied_to
---

### @kunchenguid

just realized many people didn't know this, so sharing here in case it helps

DO NOT manually "/compact" your agent sessions too often!

in almost all agent harnesses, "/compact" will use a ton of tokens by itself... it's not free. it's an extra LLM call to do the summarization, and by default it uses the same model that's running your session

so if you have a fable session at 500k context, and you run "/compact", it's a 500k-token request sent to fable to get the summary, and it'll cost a lot of fable output tokens ($50/mtok... or equivalent amount of subscription quota) when producing it

the reason it has to use the same model is to make sure the summarization request hits prompt caching. so this is not something you can "fix" by using a smaller model like haiku to compact - using a different model will turn the summarization step into an uncached request which can be even more expensive

what's worse is that after compaction, the new session will not hit any cache. so if it needs to re-read some files to recover context, it's all UNCACHED read, which is ~10x more expensive than what's loaded in your previous session

so... yeah, don't manually "/compact" unless you really know what you're doing and have a good measurable way to know if you are hitting the sweet spot. most of the time, you should just rely on default behavior of 1p agent harnesses and let it auto compact at the default threshold

### @kunchenguid

if you really prefer some manual control, here are a few things i recommend - 

1. run /compact when you know you are walking away from the agent. this allows you to not end up with a giant uncached request when you are back

2. if you hit a clear boundary between two tasks, and the new one doesn’t need to know what the previous one did, prefer just starting a new session rather than /compact

3. if the boundary is not that clear, but you roughly know what context is useful for the next task, run /compact with some custom instructions appended (yes most harnesses support this) for what you’d like to preserve into the summary - this is similar to a handoff
