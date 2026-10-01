---
source: x
id: 2103277022235766963
url: "https://x.com/kunchenguid/status/2103277022235766963"
created_at: "2026-09-25T00:14:53.000Z"
type: post
conversation_id: 2103277022235766963
thread_complete: true
---

### @kunchenguid

alright! as the dust settles around this insane week of model releases, i've stabilized around a new model line-up so sharing here for reference

this time my approach is a bit more structured. i've bucketed various LLMs into a few categories:

1. interactive orchestrators

these are models that i use as firstmate (and second mates), because they are fast, efficient, pleasant to talk to, intelligent enough to understand my intent, and have good enough judgment to steer the crew around it

for me, this bucket is opus 5.5 and grok 4.7

viable budget alternatives when my subscription quota runs out: muse spark 1.3, deepseek v4 flash

2. premium intelligence

these are models that i only use for highly ambiguous or creative tasks that i decide to truly need the extra intelligence and justifies the cost

i also use this bucket to handle escalations - when crewmates started arguing with each other, when a review-loop started spiraling out of control, when a simple change somehow ended up with a giant PR - i call these models to untangle the mess

for me, this is currently gpt 6 astra and fable 5.1 (or opus 5.5 when fable quota is tight)

3. planners

these models are the ones i trust as default for planning new features and investigating complex bugs. they would produce a spec that get implemented by a cheaper model

i almost exclusively use opus 5.5 for this right now because of its incredible ROI, whenever i don't need the premium intelligence

4. implementers

these are efficient workhorses that when given a well defined spec they can produce solid implementation

i use opus 5.5, gpt 6 sol, and grok 4.7 for this right now, and again the budget options: muse spark 1.3 and deepseek v4 flash (i'm sure there are many other viable alternatives as well - i just haven't got enough time to try them out)

among these models i currently find sol to be the best adversarial code reviewer (i haven't tried astra for this, as it's a bit too expensive to run at such high volume)

5. trivial fixers

these are the models i use for extremely trivial changes like a one-liner fix or config change. they really don't need much intelligence because often times what needs to be changed was already defined

for these i use gpt 6 luna and again the budget options if quota is tight

the way i actually make use of the categorization is that i told these routing preferences to firstmate, and it can then help me route the right task to the right model (which is now made very efficient because of Jev)

one last thing i'll point out is you can see how versatile opus 5.5 is in my line up - it can do pretty much everything! this is the first model that spanned across almost every bucket in my setup, which is quite a massive advantage because it means if i have to choose only one subscription it would have to be anthropic at the moment
