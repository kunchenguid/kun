---
source: x
id: 2097928437960978823
url: "https://x.com/kunchenguid/status/2097928437960978823"
created_at: "2026-09-10T06:01:31.000Z"
type: reply
conversation_id: 2097911296578801739
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/jalalash/status/2097926924341563558"
parents:
  - id: 2097926924341563558
    author: jalalash
    url: "https://x.com/jalalash/status/2097926924341563558"
    type: replied_to
---

### @jalalash

@kunchenguid Yeah, it would be valuable to see what kind of issues get caught by reviewers. Collecting that data and analyzing them and using them as a feedbach to improve the harness to make no-mistakes😁 or less listakes

### @kunchenguid

i have collected a whole private eval set of all the problems caught over the months

it’s basically a mix of missing edge cases, missing ripple effects, over-engineering etc. it’s hard for the implementer to catch because its own trajectory convinced itself that it was doing the right thing

your can also use another mental model to think about this - if we throw in more compute, we can typically get better results. question is where does the compute go that would get us the highest ROI - i think after a certain point giving the implementer more compute just doesn’t yield as much as trying to discover problems from another angle
