---
source: x
id: 2095000784832434230
url: "https://x.com/kunchenguid/status/2095000784832434230"
created_at: "2026-09-02T04:08:04.000Z"
type: reply
conversation_id: 2094995775952740795
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/petergyang/status/2094995775952740795"
parents:
  - id: 2094995775952740795
    author: petergyang
    url: "https://x.com/petergyang/status/2094995775952740795"
    type: replied_to
---

### @petergyang

While I'm cleaning up my AI skills I have a question for the experts here. Sometimes I end up in this pattern:

1. I run my skill and it doesn't get it perfect in one shot
2. I do manual iteration with AI to get it right
3. I then ask AI something like: "How would you update the skill so we can one-shot this?" before reviewing and approving its edits.

The problem is AI often overfits on this one thread and over time the skill drifts. Any good solutions here?

### @kunchenguid

oh yeah - what you are missing is the “backward pass”

you need a process that don’t just look at one off anecdotes, but instead analyze a large sample of past session transcripts, distill the losses, then do gradient descent on your memory and skill files to fix the losses

this is it https://t.co/DkM9b4TcZ0
