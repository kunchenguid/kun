---
source: x
id: 2103921485266268644
url: "https://x.com/kunchenguid/status/2103921485266268644"
created_at: "2026-09-26T18:55:45.000Z"
type: reply
conversation_id: 2103920655305785636
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/gehariharan/status/2103920655305785636"
parents:
  - id: 2103920655305785636
    author: gehariharan
    url: "https://x.com/gehariharan/status/2103920655305785636"
    type: replied_to
---

### @gehariharan

After a week of pretty intensive use of @kunchenguid’s @myfirstmate, a few things have noticeably changed in how I work:
1. Parallelism without the orchestration overhead. I’m running far more things in parallel, but I rarely have to think about worktrees or coordinate individual agents myself. Firstmate abstracts away a lot of that complexity. One example : it noticed I had another machine sitting idle that was accessible over SSH and helped me set it up as an additional self-hosted runner to increase parallel capacity. I didn’t set out to optimize the infrastructure — it recognized the opportunity while we were working.
2. Much less cognitive context switching. I switch between threads far less and don’t have to maintain a mental map of tasks across projects. I’m increasingly managing intent and outcomes rather than agents and threads.
3. Model routing is much easier. Routing based on task complexity is configurable and personalized around the subscriptions/models I already have. Combined with quota-axi, it makes my quota usage considerably more efficient.
3. Firstmate + lavish-axi is fantastic for brainstorming. I can explore and iterate on ideas while other work continues in parallel, without losing visibility into what the crew is doing.

The biggest thing I’d still like:
When I come back after being away, I want an immediate, reliable answer to:
What finished? What’s running? What failed? What’s waiting on me?

/bearings + Lavish gets close, but sometimes the state falls behind because it wasn’t updated.
Ideally this shouldn’t depend on an agent remembering to update anything. If Firstmate already has durable state/files underneath, the “what needs me?” view could be derived directly from that source of truth.
Thanks for building it open-source🙏

### @kunchenguid

@gehariharan @myfirstmate working on the state visualization problem!
