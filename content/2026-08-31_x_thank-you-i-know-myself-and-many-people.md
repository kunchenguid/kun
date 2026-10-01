---
source: x
id: 2094489162045108389
url: "https://x.com/kunchenguid/status/2094489162045108389"
created_at: "2026-08-31T18:15:04.000Z"
type: reply
conversation_id: 2094305141591781783
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/jlehman_/status/2094481397234983046"
parents:
  - id: 2094481397234983046
    author: jlehman_
    url: "https://x.com/jlehman_/status/2094481397234983046"
    type: replied_to
---

### @jlehman_

It's a good question and one that we genuinely want to answer.

It's worth understanding that OpenClaw didn't begin life as a product, it started out as a hobby project and exploded. It wasn't originally designed to be what it became. Getting it to work the way that people want it to work retroactively is hard.

Some other insights in no particular order:

- OC has always been really hackable. Early on that meant making it massively configurable. Gracefully handling all possible configurations between upgrades is super tough, and many of the upgrade issues people have owe to config incompatibility between older versions and newer ones. We've tried to handle as many of those as we can, but the compatibility matrix is insane and sometimes we miss things. Going forward we're trying to cut down on config options and be much more cautious about introducing new ones.
- We refactored the entire state model of OC into SQLite. Transactionality and relational queries are way better than a hodgepodge of files and locks strewn about the codebase. This is a highly difficult state migration to pull off without seriously screwing things up so we took our time with it.

I've got more, I'll keep throwing them in here when prompted / when I think of them.

### @kunchenguid

thank you @jlehman_! i know myself and many people here are particularly interested in how agentic engineering practices (loops, graphs, agent swarms etc etc that @steipete often talked about) helped in this process and where they fell short

if agents helped solve some tough problems, if agents were attempted on something but failed, if fancy techniques ended up not practical at all, and development was mostly human juggling a few sessions at a time directly.. 

we want to know! :)
