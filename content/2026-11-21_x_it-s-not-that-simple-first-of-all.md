---
source: x
id: 2124080902309544144
url: "https://x.com/kunchenguid/status/2124080902309544144"
created_at: "2026-11-21T10:02:05.000Z"
type: reply
conversation_id: 2124066583589077005
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/smishy18/status/2124071333118255381"
parents:
  - id: 2124071333118255381
    author: smishy18
    url: "https://x.com/smishy18/status/2124071333118255381"
    type: replied_to
---

### @smishy18

@kunchenguid You mention that it might be hard for long term maintainability to be measured but would it be possible to say penalize a model for its code output depending on how much token burn another model inheriting the codebase needed + bugs/inefficiencies it could find?

### @kunchenguid

it’s not that simple

first of all how do you create those subsequent tasks in the training dataset? creating one task is hard enough. creating a sequence of tasks that reflect real world iterative development is a lot harder

and what if a decision makes the next 10 tasks better, but the 100-1000th tasks start to fall apart?

i think whoever nails this will basically define and dominate the next phase of coding models
