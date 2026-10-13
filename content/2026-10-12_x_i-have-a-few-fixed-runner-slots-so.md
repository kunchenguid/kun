---
source: x
id: 2109731264572142072
url: "https://x.com/kunchenguid/status/2109731264572142072"
created_at: "2026-10-12T19:41:45.000Z"
type: reply
conversation_id: 2109714264516915363
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/HyrumHurst/status/2109729359338897885"
parents:
  - id: 2109729359338897885
    author: HyrumHurst
    url: "https://x.com/HyrumHurst/status/2109729359338897885"
    type: replied_to
---

### @HyrumHurst

@kunchenguid How are you handling two builds landing at once? Queue them or spin up separate runners?

### @kunchenguid

@HyrumHurst i have a few fixed runner slots so i don't overwhelm the mac mini

so a few builds will run in parallel, but too many will start to queue up. the queue is handled by github which is quite helpful
