---
source: x
id: 2094113915030704439
url: "https://x.com/kunchenguid/status/2094113915030704439"
created_at: "2026-08-30T17:23:58.000Z"
type: quote
conversation_id: 2093912739295195318
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2094110182746083606"
  - "https://x.com/kunchenguid/status/2093912739295195318"
parents:
  - id: 2094110182746083606
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2094110182746083606"
    type: quoted
  - id: 2093912739295195318
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2093912739295195318"
    type: replied_to
---

### @kunchenguid

i realize my post may sound dismissive of the work put into OMP so want to first clarify that’s totally not my intention. i can see the huge effort it takes to maintain a well packaged set of capability that people actually find useful

the LLM response above was clearly guided by you though. my post never endorsed any frontier lab harnesses. in fact, i’ve repeatedly tweeted criticism about their harnesses and suggested that that should focus on the model and let the community take over harness work

the main point my post makes is that a fat harness is not a durable investment. the energy can be better spent on researching ways to build better models rather than patching around them. that said, the bitter lesson is a long term view. creating something immediately useful today is still valuable - didn’t mean to discount that!

### @kunchenguid

while maintaining my open source projects i noticed many people started using something called Oh My Pi

out of curiosity i took a look and gave it a go myself, and oh my.. 

it’s a giant pile of harness tricks bundled into one. each trick seems to do well on benchmarks. but…

this is EXACTLY what the bitter lesson told us to avoid. it may indeed work well at the time it’s evaluated, but every model release can invalidate a bunch of these results

unless every single part of the package gets rigorously re-evaluated on every model release, we simply can’t trust the bundle is actually helping. and in the long run, the bitter lesson has shown us over and over again that these tricks will not survive

that’s the core reason i’ve kept my own pi config extremely minimal. a simple harness gets better every time a stronger model comes out. a complex pile of tricks silently become a burden without you knowing

### @kunchenguid

would like to add some colors that my post was not meant to dismiss the value OMP brings today - it takes a lot of effort to put together a harness that can do good work with the variety of models we have today. that’s valuable as-is

my point is more about raising awareness that fat harness is not a durable investment as the models inevitably become more and more capable out of the box
