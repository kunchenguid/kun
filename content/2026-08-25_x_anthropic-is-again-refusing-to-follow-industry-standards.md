---
source: x
id: 2092349661147529706
url: "https://x.com/kunchenguid/status/2092349661147529706"
created_at: "2026-08-25T20:33:27.000Z"
type: quote
conversation_id: 2092349661147529706
thread_complete: true
parent_urls:
  - "https://x.com/trq212/status/2092302273099796842"
parents:
  - id: 2092302273099796842
    author: trq212
    url: "https://x.com/trq212/status/2092302273099796842"
    type: quoted
---

### @trq212

Hi Tobi, thanks for the feedback! We are working on making Claude Code more hackable, which will include being able to easily use Agents.MD or make other system prompt modifications. I’ll share more here when it’s ready to roll out.

Our reasoning for this was that we don't think that model families are interchangeable and the system prompt can have a big impact on performance.

I wrote here: https://t.co/WCXcDYJlwq on how Claude models like their skills, system prompt, Claude.MD, etc to be formatted. In Claude Code we have different system prompts per model.

That said, I know this is a lot of upkeep and not worth the squeeze for everyone. Feedback heard and I'll keep you posted.

In the immediate term, you can always @Agents.MD from your Claude.MD.

### @kunchenguid

Anthropic is again refusing to follow industry standards like AGENTS.md, and insists that CLAUDE.md needs to be special

now here's what's wrong with their stance:

1. the underlying attitude from Anthropic is that they know better than everyone else

OpenAI is doing it wrong. the open source community is doing it wrong. everyone is doing it wrong

only we anthropic know the best way, and we will not budge

2. the idea that every model needs a separate AGENTS.md is not even self-consistent

if that's the case, why do we have a CLAUDE.md?

it should be 
- CLAUDE_FABLE_5.md
- CLAUDE_OPUS_5.md
- CLAUDE_OPUS_4_8.md
...

every repo should pay the tax to maintain dozens of different variations for every single model that's ever used by any contributor, and every one needs to be constantly, rigorously evaluated with millions of tokens

oh and every model becomes obsolete every several weeks, so just allocate a team in your company to refresh your markdown files full time and not do any real work

3. they did commit to providing customization, which is nice. but that's different from following standards

the right way to do this is to acknowledge the industry already has a standard, and default to reading AGENTS.md

provide a way to read CLAUDE.md as an escape hatch, not the other work around

i love many things from anthropic, especially fable. i just wish they start to see there's a culture problem here, and they are gradually losing mindshare because of it
