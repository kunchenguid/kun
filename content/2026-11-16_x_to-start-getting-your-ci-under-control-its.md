---
source: x
id: 2122391325081579618
url: "https://x.com/kunchenguid/status/2122391325081579618"
created_at: "2026-11-16T18:08:18.000Z"
type: post
conversation_id: 2122391325081579618
thread_complete: true
---

### @kunchenguid

to start getting your CI under control, it's important to first understand there are a few different types of validations that exist

1. the code follows our rules
2. this change works
3. everything in the main branch works
4. the product is ready to release

traditionally, many codebases run all 4 on every PR as part of their CI pipeline. when every dev merges ~1 PR a day on average, that's doable

but as more and more people can merge 10s or 100s more PRs a day with effective use of agents, their CI starts to struggle. and buying more CI minutes or using faster CI is a losing battle

the solution is to 

- run only #1 and #2 on each PR

and #1 (mostly compile and lint) is typically fast enough that can run as pre-commit hooks as well

on each PR's CI pipeline, try to select only tests that are being edited and relevant to the change, because this is a high frequency bucket and you want to keep this extremely fast

consider assigning a fixed budget such as 5 minutes - whenever the pipeline exceeds that budget, ask an agent to optimize and get it back under the threshold

- run #3 using your merge queue or as a post-push rolling CI pipeline

this is typically your full test suite. running them on every PR at agent speed is simply too much overhead, but you also don't want to fully stop running the full suite, because some problems only occur when multiple changes combine

if you do this post-push, it means your main branch can have problems from time to time. counter-intuitively, that's okay. problems will exist no matter how many tests you run in your CI

when something breaks, fix forward. agents can do this very quickly. and you have a record of which commits pass the full suite - only create releases from those commits

- manage #4 using feature gates and phased rollouts

typically, you should get to a state where anything that could pass #3 is safe to release

in practice though, some problems will only happen with real traffic, so if you are running something at scale, you'd want some gates based on real telemetry

so the pipeline you could create is to release good commits to say 5% of your users, and progressively rollout further only when data looks good

once you have a clean separation of these 4 categories of gates, it'll be easy to know how to optimize and how to make tradeoffs between them
