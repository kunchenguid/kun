---
source: x
id: 2092019683469697499
url: "https://x.com/kunchenguid/status/2092019683469697499"
created_at: "2026-08-24T22:42:15.000Z"
type: quote
conversation_id: 2091690492241289536
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2091718393594528067"
  - "https://x.com/ai_ops_lead/status/2091853139309670702"
parents:
  - id: 2091718393594528067
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2091718393594528067"
    type: quoted
  - id: 2091853139309670702
    author: ai_ops_lead
    url: "https://x.com/ai_ops_lead/status/2091853139309670702"
    type: replied_to
---

### @kunchenguid

if you really prefer some manual control, here are a few things i recommend - 

1. run /compact when you know you are walking away from the agent. this allows you to not end up with a giant uncached request when you are back

2. if you hit a clear boundary between two tasks, and the new one doesn’t need to know what the previous one did, prefer just starting a new session rather than /compact

3. if the boundary is not that clear, but you roughly know what context is useful for the next task, run /compact with some custom instructions appended (yes most harnesses support this) for what you’d like to preserve into the summary - this is similar to a handoff

### @ai_ops_lead

@kunchenguid The exact cutoff depends on the model, but typically if you're over 150k tokens of usage and at a task boundary and plan on continuing to use the thread, it pays to compact. You can ask Codex to do the math.

### @kunchenguid

@ai_ops_lead that’s consistent with my recommendation 

what i’m calling out is people thinking it’s a free reset button or do it regardless of task boundary https://t.co/nHby6VWaAG
