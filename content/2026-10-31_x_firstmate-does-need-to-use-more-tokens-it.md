---
source: x
id: 2116661690670698879
url: "https://x.com/kunchenguid/status/2116661690670698879"
created_at: "2026-10-31T22:40:47.000Z"
type: reply
conversation_id: 2116658258899308778
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/abraun/status/2116658258899308778"
parents:
  - id: 2116658258899308778
    author: abraun
    url: "https://x.com/abraun/status/2116658258899308778"
    type: replied_to
---

### @abraun

@kunchenguid first off, LOVING firstmate.  Once question, do you have a video/doc on how to optimize?  I am finding firstmate can do a lot of extra stuff causing more token usage and also longer build times.  Seems like there is a lot of options for testing, validating, no-mistakes, etc.  When I go straight into the repo using Claude Code,  it is much quicker, however it lose a lot of the flexibility of firstmate.  Any pointers?

### @kunchenguid

firstmate does need to use more tokens - it’s like hiring a CTO which can’t be free

if you are working with a single project one task at a time, you should skip firstmate and only talk directly to a raw agent

the token spend becomes justifiable when you have a lot of tasks to juggle

in terms of optimizations, it really depends on each person’s usage. the best way is to use it for a while and then ask firstmate itself to identify opportunities for better performance and efficiency
