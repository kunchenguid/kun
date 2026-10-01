---
source: x
id: 2094079445074162118
url: "https://x.com/kunchenguid/status/2094079445074162118"
created_at: "2026-08-30T15:07:00.000Z"
type: post
conversation_id: 2094079445074162118
thread_complete: true
---

### @kunchenguid

i've had enough of all the over-engineering happening during adversarial review loops, causing no-mistakes runs to take a long time and sometimes create scope creep, usually caused by cough... sol.. cough..

so i just spent a whole day tracking down the traces and improved agent instructions in no-mistakes to specifically combat over-engineering

mostly did two things:
1. scope expansion now gets escalated to human review more often
2. auto fixes now attempts solving problems through simplification over adding machinery

in my own private eval set this worked really well!

if you've been using no-mistakes, update to 1.60.2+ now. if not, here it is - https://t.co/6ldO9b8Cxx
