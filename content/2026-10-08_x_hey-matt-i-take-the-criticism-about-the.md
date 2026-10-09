---
source: x
id: 2108221141827629126
url: "https://x.com/kunchenguid/status/2108221141827629126"
created_at: "2026-10-08T15:41:03.000Z"
type: reply
conversation_id: 2108030810691629403
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/mattpocockuk/status/2108156685785194532"
parents:
  - id: 2108156685785194532
    author: mattpocockuk
    url: "https://x.com/mattpocockuk/status/2108156685785194532"
    type: replied_to
---

### @mattpocockuk

@kunchenguid Also, the "it's official" line really rubs me up the wrong way here. Claiming official proof off a single 1-point benchmark diff feels like a huge overstatement.

Not only that, but sacrificing long-term codebase health for short-term gains feels mad to me.

### @kunchenguid

@mattpocockuk hey Matt - i take the criticism about the first line. i can see it did lead to a lot of people jumping to the wrong conclusion quickly. will be more thoughtful about how i open these posts

however i stand by the key point i presented here, which is that letting agents today write whatever tests they want autonomously (which btw is pretty much the default these days) is unhelpful

the 44 random subset touched on the “long term health” question - when testing was disabled wholesale, the agents didn’t actually end up regressing the codebases more (deepswe not only checks feature correctness but also regression as well)

i feel nervous when a lot of people on this thread opposing these points with absolutely no data suggesting otherwise. we can’t just assume “testing is important” means “agents are writing good tests for us”. we need to gather actual data to help us see what’s going on

as i stated in many comments, my post is absolutely not to suggest we abandon testing altogether, but quite the opposite, the data points make me see a stronger need for us to be more intentional about what tests to write and how we inject some of the wisdom we’ve learned about testing over the years into our agents, which clearly don’t have the right default behavior

hope this adds some colors! i will write a longer post about my recommendation once my e2e test eval is also done
