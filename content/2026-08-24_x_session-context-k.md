---
source: x
id: 2091716344568037512
url: "https://x.com/kunchenguid/status/2091716344568037512"
created_at: "2026-08-24T02:36:53.000Z"
type: reply
conversation_id: 2091690492241289536
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/NurseryRhyme6/status/2091703038767690221"
parents:
  - id: 2091703038767690221
    author: NurseryRhyme6
    url: "https://x.com/NurseryRhyme6/status/2091703038767690221"
    type: replied_to
---

### @NurseryRhyme6

@kunchenguid 你的意思是，你宁愿让这500k上下文在后续任务里持续燃烧你的额度，你也不愿意一次性的将其压缩为10k以内的摘要？这10k仅触发一次cache miss，后续又会持续缓存命中，这点基本账你都无法算清？

### @kunchenguid

@NurseryRhyme6 这账可能比你想的复杂一点。经常新的session还是需要一些重复的context，所以又要把它们重新载入进来，但载入过程需要很多请求，并且完全没有缓存，载入完后很快又回到几百k，这就不省了
