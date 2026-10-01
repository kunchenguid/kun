---
source: x
id: 2097079905301504360
url: "https://x.com/kunchenguid/status/2097079905301504360"
created_at: "2026-09-07T21:49:45.000Z"
type: reply
conversation_id: 2097076598499668193
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/kunchenguid/status/2097076598499668193"
parents:
  - id: 2097076598499668193
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2097076598499668193"
    type: replied_to
---

### @kunchenguid

sharing my Grok @Bot setup as a template you can one-click install

you might have already heard of the "chief of staff" pattern that's being widely adopted

firstmate is THE chief of staff - it's probably the project that pushed the furthest on this pattern

it spins up other bots to get work done and actively improves their memory and instructions so they do better and better over time

it sets up a local sqlite db to manage tasks, delegation, results, and decisions, so persistent records are never lost

it uses cursor cloud agents for coding tasks, and grok bot for non-coding, to balance the resource and quota usage and avoid scalability bottlenecks

the most common feedback from people who have adopted firstmate is "there's no way to go back" :)

https://t.co/KC0bhgoPMi

add to your grok bot, and talk to it about everything, then watch your "agent civilization" grow - it's really productive and fun at the same time!

### @kunchenguid

poteto poteto poteto

some improvement opportunities i noticed when developing this template -

1. it seems in order to create a template, the bot needs to put all the data into a single tool call

when the data is large enough, this tool call becomes difficult for the agent to do correctly. my bot made multiple rounds of mistakes before getting it right, and because of that, i had to manually review everything to make sure it didn't mess things up

it might be good to allow the agent to first write the template data to files, then make the tool call by specifying where the files are

2. it's currently a bit hard for template developers to test the template in an isolated environment before publishing

my firstmate template for example has to write some global state on the computer. if i test it with my own account, it would conflict with my real data

it would be super useful for template developers to have a sandbox computer where they can test things out

3. it would be good to allow bot templates to be version controlled - like committed to a git repo

this has the benefit of better persistence of template data, as well as allowing open source collaborations

the overall idea of a bot marketplace is brilliant and this is probably the best implementation of reusable agents that's in the market right now - well done!
