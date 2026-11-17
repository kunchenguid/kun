---
source: x
id: 2122413681694986345
url: "https://x.com/kunchenguid/status/2122413681694986345"
created_at: "2026-11-16T19:37:08.000Z"
type: reply
conversation_id: 2122391325081579618
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/aslamhasankhan/status/2122409009294794911"
parents:
  - id: 2122409009294794911
    author: aslamhasankhan
    url: "https://x.com/aslamhasankhan/status/2122409009294794911"
    type: replied_to
---

### @aslamhasankhan

@kunchenguid The fixed 5 minute budget is a great forcing function, Kun. The tricky bit is when #3 catches something hours later and 20 PRs have landed on top. How do you figure out which merge actually broke it?

### @kunchenguid

@aslamhasankhan if you do the post-push rolling CI, you kinda don't really care which merge broke it any more :) you'd only care about getting it fixed

in a merge queue, you can bisect or have an agent analyze it
