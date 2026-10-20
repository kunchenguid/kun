---
source: x
id: 2111912129737699553
url: "https://x.com/kunchenguid/status/2111912129737699553"
created_at: "2026-10-18T20:07:43.000Z"
type: quote
conversation_id: 2111841732308668832
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2111846378066559020"
  - "https://x.com/Rolezn/status/2111907053723869234"
parents:
  - id: 2111846378066559020
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2111846378066559020"
    type: quoted
  - id: 2111907053723869234
    author: Rolezn
    url: "https://x.com/Rolezn/status/2111907053723869234"
    type: replied_to
---

### @kunchenguid

i think there is a way

i don’t have millions of $ to experiment post training techniques to validate this myself but my hypothesis is that in post training we should not run each task in isolation

instead we should run thousands of tasks ideally with some dependency relationships one after another all on the same branch. afterwards we can measure a lot of things, such as how often earlier implementations got regressed or how costly it is to add new features etc to assess and reward long term maintainability

### @Rolezn

@kunchenguid Could agents be trained on successive changes to the same repo, with rewards that account for the cost of revisiting their earlier design choices?

### @kunchenguid

@Rolezn yeah that’s my hypothesis for how it could be done https://t.co/uiEXA1SkwF
