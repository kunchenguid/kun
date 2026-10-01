---
source: x
id: 2092404187376283742
url: "https://x.com/kunchenguid/status/2092404187376283742"
created_at: "2026-08-26T00:10:07.000Z"
type: reply
conversation_id: 2092349661147529706
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/kunchenguid/status/2092349661147529706"
parents:
  - id: 2092349661147529706
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2092349661147529706"
    type: replied_to
---

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

### @kunchenguid

a lot of people say “it’s so easy to workaround it”

just look at this

i’m not criticizing the user but rather this is a perfect example that shows the horribly inefficient things people end up doing

if you don’t immediately get it, this does not load the content into system prompt, and it causes an extra turn for the agent for every single session to read the file
