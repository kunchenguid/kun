---
source: x
id: 2100321145543344544
url: "https://x.com/kunchenguid/status/2100321145543344544"
created_at: "2026-09-16T20:29:17.000Z"
type: quote
conversation_id: 2100321145543344544
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2098256018836963382"
parents:
  - id: 2098256018836963382
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2098256018836963382"
    type: quoted
---

### @kunchenguid

ok everyone, i took one for the team

here's the data we all wanted to see - real token value of each LLM subscription, empirically measured through usage on my real subscriptions

- supergrok heavy has now become the highest value at $12k worth of tokens (40x ROI)

- the $200 plan from openai and anthropic roughly give the same amount of token value, $7k give or take

- cursor ultra's ROI is the lowest among mainstream subscriptions, roughly half of OAI or Ant. for individual consumers i'm afraid this no longer makes sense to purchase

this was done in a clean environment. i ran each provider across 5 whole % points of my quota through repeated eval tasks in open source repos, and measured the total token value from all the agent sessions based on API pricing

caveat 1 - this only measures their coding agent quota (which is the majority of the offered value), and does not include things like chat bot or grok bot

caveat 2 - none of the providers commit to never changing this, so this is a snapshot of what the offering looks like today. i cannot guarantee it won't change again

caveat 3 - the token value assumes you exhaust your subscription completely, which may not be realistic in real world usage

### @kunchenguid

reminder that claude quota reduction is already in effect since Sept. 14

i reran my evals and my empirically measured value for a claude $200 plan has reduced from $7200/mo to about $6000, sitting below the value of ChatGPT Pro 20x

if you only use fable (i know some people indeed do this), then that's another 50% cut on the value you get, putting you at $3000/mo

still WAY cheaper than paying at API pricing, but gradually they are crawling back the subsidization

i think we're entering an era where stacking multiple subscriptions will be somewhat mainstream
