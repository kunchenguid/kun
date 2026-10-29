---
source: x
id: 2115565245293039814
url: "https://x.com/kunchenguid/status/2115565245293039814"
created_at: "2026-10-28T22:03:54.000Z"
type: post
conversation_id: 2115565245293039814
thread_complete: true
---

### @kunchenguid

now that we all agreed to not review most of the code any more, CI became the next bottleneck

at agent speed, if our CI pipeline is simply "run all the build, lint, tests", it'll become a major slow down

here are a few things i suggest for how to optimize:

1. balance load between CI and CD

CI protects main branch. CD protects production. if you can tolerate some delay in deploying your main branch to production, then you can do less in CI and do more in CD

for example, for a cross platform app i made my CI pipeline skip most mac and windows tests because linux already covered the same functionality

the tradeoff is occasionally i'd catch a mac or windows-only bug in CD before release, but in exchange, my CI pipeline became 15x faster - well worth it

2. modularize your codebase such that changes are isolated

then you can make your CI only run build, lint, test for the module being touched

this requires careful consideration for cross-module protocols. they should likely be their own modules, so when they do change, you know you probably need to test all dependent modules

3. for large modules, invest in test selection

in CI, try to only run tests that are covering the areas being changed. doing accurate test selection is not easy though, and often requires continuous tuning

i have a nightly loop specifically doing audit of past test runs and tweak my test selection to be more accurate. a big codebase of mine got pretty good at this - 20x faster CI compared to running all tests, and almost never miss any real problem
