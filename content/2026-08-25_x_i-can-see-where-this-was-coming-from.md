---
source: x
id: 2092339895767544094
url: "https://x.com/kunchenguid/status/2092339895767544094"
created_at: "2026-08-25T19:54:39.000Z"
type: reply
conversation_id: 2092259436538495186
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/trq212/status/2092302273099796842"
parents:
  - id: 2092302273099796842
    author: trq212
    url: "https://x.com/trq212/status/2092302273099796842"
    type: replied_to
---

### @trq212

Hi Tobi, thanks for the feedback! We are working on making Claude Code more hackable, which will include being able to easily use Agents.MD or make other system prompt modifications. I’ll share more here when it’s ready to roll out.

Our reasoning for this was that we don't think that model families are interchangeable and the system prompt can have a big impact on performance.

I wrote here: https://t.co/WCXcDYJlwq on how Claude models like their skills, system prompt, Claude.MD, etc to be formatted. In Claude Code we have different system prompts per model.

That said, I know this is a lot of upkeep and not worth the squeeze for everyone. Feedback heard and I'll keep you posted.

In the immediate term, you can always @Agents.MD from your Claude.MD.

### @kunchenguid

i can see where this was coming from but i’d like to point out this is clearly the wrong philosophy

i use 5 different models regularly. other contributors in my repos use a dozen more

do we seriously maintain 17 different AGENTS.md files in the repo, each one fine tuned for a specific model, which btw becomes completely obsolete every several weeks? no one does that

it may make sense for a mainstream harness developer to maintain some of that inside of the harness like you did within claude code

it doesn’t sense to expect regular developers to suffer that tax

can we finally learn the bitter lesson and build towards a state where we are happy, not miserable?
