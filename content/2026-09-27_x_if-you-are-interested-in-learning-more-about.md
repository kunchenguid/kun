---
source: x
id: 2104241434211889514
url: "https://x.com/kunchenguid/status/2104241434211889514"
created_at: "2026-09-27T16:07:07.000Z"
type: reply
conversation_id: 2104241432467067343
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/kunchenguid/status/2104241432467067343"
parents:
  - id: 2104241432467067343
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2104241432467067343"
    type: replied_to
---

### @kunchenguid

sharing a real world case study for how i optimized AGENTS.md for the firstmate repo and cut down its token count by almost 50% while improving its quality

i believe this is a low hanging fruit for improving how agents work in your projects that most people don't know about yet!

firstmate repo's AGENTS.md is big because it's what shapes all its core behaviors. previously i had manually done a few rounds of pruning and got it to be contained at ~30k tokens - that's still a lot to load at the start of every main firstmate session!

i had stopped pursuing further reduction because in the previous manual rounds, i observed regression when i tried to remove more instructions that were on the borderline

but with a recent nudge from @kamranali i decided to take another look, and i just realized this time i have backpass https://t.co/DkM9b4TcZ0 and A TON of real transcripts sitting there that can help! 

so i did a backpass run and had it analyze 100 recent session transcripts. it produced this proposal https://t.co/8AbFJoLmlP - sharing here openly so you can all see how it came up with each proposed edit, based on evidence identified from the transcripts

i reviewed the proposal and rejected two of the edits as i didn't fully agree with the rationale and ROI. most edits were accepted and it resulted in a -48% cut in token count

biggest win came from a lot of instructions getting moved into skills, based on observation that they weren't actually needed in most transcripts

besides token reduction, it also rewrote a few sections based on observing which instructions were followed vs missed, and what mistakes were made that could have benefited from explicit guidance

the result is this PR - https://t.co/Fmi4cWriue and i ran my private eval set to validate no regression in core behaviors

if you are not sure if your AGENTS.md is optimal (it's most likely not), you can also try backpass on it. i've been regularly optimizing my repos' memory files and skills with it, and i get pleasantly surprised - every, single, time

### @kunchenguid

if you are interested in learning more about how backpass works to reliably improve your agent memory, i wrote a blog post about it a while ago - https://t.co/Ib8ZkftFVV
