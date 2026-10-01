---
source: x
id: 2097252182210867489
url: "https://x.com/kunchenguid/status/2097252182210867489"
created_at: "2026-09-08T09:14:19.000Z"
type: reply
conversation_id: 2097238983226868194
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/mattpocockuk/status/2097238983226868194"
parents:
  - id: 2097238983226868194
    author: mattpocockuk
    url: "https://x.com/mattpocockuk/status/2097238983226868194"
    type: replied_to
---

### @mattpocockuk

If you give me a drawer, I will eventually fill it with cables

If you give an agent a markdown file, it will eventually fill it with:

- unnecessary implementation details
- session-specific observations
- stale docs

### @kunchenguid

i wrote about this in more detail but basically i think we should treat most of the markdown files as a neural net

when agents execute the markdown files, it's a forward pass through the neural net. most people only do this

but to continuously improve the neural net we actually need backward passes to train them

the way i do it is through https://t.co/DkM9b4SF9s which scans all the transcripts, analyze which rules led to a good vs bad outcome, then figure out how the markdowns should be changed to reinforce the gains while reducing the losses

every time i run it i always get pleasantly surprised
