---
source: x
id: 2117495844010447138
url: "https://x.com/kunchenguid/status/2117495844010447138"
created_at: "2026-11-03T05:55:25.000Z"
type: quote
conversation_id: null
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2053598737126347218"
  - "https://x.com/poteto/status/2117437607940681849"
parents:
  - id: 2053598737126347218
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2053598737126347218"
    type: quoted
  - id: 2117437607940681849
    author: poteto
    url: "https://x.com/poteto/status/2117437607940681849"
    type: replied_to
---

### @kunchenguid

sharing some real data from me using agents on real projects. all my code changes are done with either opus 4.7 or gpt 5.5

a whopping 68% of the changes made by agents had a mistake in it, and got saved by no-mistakes

biggest source of gaps was a change made without updating https://t.co/6h4d1Vdt5R

### @poteto

maybe a hot take but i now consider adversarial reviews mostly a waste of tokens. far better to use those tokens on empirical combined with formal verification. i have updated pstack to use the interrogate skill less, and eventually i think i may remove it altogether

i have

### @kunchenguid

i’ve been trying to get rid of adversarial reviews for quite a while now, but unfortunately every time i stopped it, i would find myself simply delaying the discovery of real problems, and the later i find them the more they cost

as a data point, i had measured how many real problems my adversarial reviewers actually caught, and it’s a lot.. 

that said, a good adversarial review setup is necessary for the ROI to be justifiable. i think a few things are very important:

1. original user intent must be explicitly collected (usually can be found in session transcripts where user inputs are) and passed to the reviewers 

2. there needs to be a human in the loop for ambiguous decisions. any scope change / expansion needs to escalated to the human user for decision

3. reviewers need to treat complexity like a disease and actively point out simplification opportunities 

4. reviewers need to challenge the lack of empirical evidence and hold the implementer accountable to prove their change
