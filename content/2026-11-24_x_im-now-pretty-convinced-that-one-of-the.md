---
source: x
id: 2125378087689068798
url: "https://x.com/kunchenguid/status/2125378087689068798"
created_at: "2026-11-24T23:56:38.000Z"
type: post
conversation_id: 2125378087689068798
thread_complete: true
---

### @kunchenguid

i'm now pretty convinced that one of the most important metrics to watch out for in your codebases when most work is done by agents is -

median $ cost per task

this screenshot is one of my recent codebases which grew from 100k to 1M lines of code over the past month from intense development

the median $ cost of a task kept growing as well. and each time i noticed it was rising, i did some analysis to understand why, and did optimizations to drive it back down

my task cost is actually pretty high because the repo is a cross-platform app and most features need to work on mac, linux, windows, and mobile

i'm reasonably happy that the cost only rose by 70% when the codebase is now 10x complexity. it wouldn't have been possible without lots of optimizations, because agents by default don't care about long term maintainability (explained in a previous tweet)

if i had left it unchecked, every task would have become a lot slower and more costly, and i wouldn't have been able to keep the pace of development

a prompt you can use to start understanding what's happening with your work -

"look at my past month's agent sessions' usage stats in this codebase to calculate a 7d sliding window median $ cost per task and report it as a chart"
