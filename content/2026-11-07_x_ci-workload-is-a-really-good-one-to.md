---
source: x
id: 2119171239797506144
url: "https://x.com/kunchenguid/status/2119171239797506144"
created_at: "2026-11-07T20:52:50.000Z"
type: reply
conversation_id: 2119159153209778632
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/CalvinGrunewald/status/2119159153209778632"
parents:
  - id: 2119159153209778632
    author: CalvinGrunewald
    url: "https://x.com/CalvinGrunewald/status/2119159153209778632"
    type: replied_to
---

### @CalvinGrunewald

Sandboxes/CI Runners are the biggest expense for fully agentic development outside of tokens. I just saw our CI bill grow an order of magnitude trying to make CI fast across all the PRs over the past month. It’s unsustainable. 

So I looked into the data (prepared by astra). My assumption is that anyone offering sandboxes/runners is just stacking their margin on whatever compute they use under the hood. You can see how this clearly works in the below figure. Fully productized runners are the most expensive by 2 orders of magnitude compared to the DIY version.

What is interesting is all these sandbox/runner products are likely using either OSS firecracker or containerd, with a proprietary orchestrator on top. And maybe some other pretty product stuff too that these companies like to think differentiate them (it doesn’t). 

But look at the data below. You can save a ton of money if you self solve orchestration and go direct with cloud providers. Or bring your own hardware. 

So it really comes down to orchestration. Is that worth this crazy premium Blacksmith and GitHub actions charge?

No. You can build your own; dare I say even vibe code it. Sure there are likely a lot of interesting lessons that companies learn by operating these systems over time that you won’t be able to vibe code yourself. But those things are not worth the 50x premium you might be paying for a company to “learn” this at scale, on your dollar. Moreover, you simplify a ton by building it to be single tenant, and in your VPC. 

So go build your own orchestrator. Or stop doing CI. The result is the same: stop paying these companies 10s of thousands of dollars for a commodity. 

This is possible now thanks to AI. At some point most companies will wake up and do this because the costs are not sustainable.

### @kunchenguid

@CalvinGrunewald CI workload is a really good one to self host because the load is quite measurable and predictable

i’ve been saving thousands of dollars every month through my own hardware
