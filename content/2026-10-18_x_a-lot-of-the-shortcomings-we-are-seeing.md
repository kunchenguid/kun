---
source: x
id: 2111841732308668832
url: "https://x.com/kunchenguid/status/2111841732308668832"
created_at: "2026-10-18T15:27:59.000Z"
type: post
conversation_id: 2111841732308668832
thread_complete: true
---

### @kunchenguid

a lot of the shortcomings we are seeing with coding agents today ultimately boil down to limitations in post training

why agents don’t write good tests by default? why do they spit out a ton of useless comments? why do vibe coded codebases all turn into a mess without human steering and intervention? 

because in current RLVR pipelines, we reward task resolution. as long as the agents wrote code that could pass predefined hidden tests, that’s a success

whether the architecture is clean, whether the code is easy to maintain and evolve, whether the comments are actually helpful in future work, whether the test cases help catch real problems down the road - none of these make a difference in how the model was rewarded when the reward is done at task level

we have been “fixing” a lot of these problems with system prompts, skills, and harness features, which is very necessary in the near term

but i think eventually the post training pipeline will keep evolving and take more and more of these long term considerations into account

when it does, we will finally have agents that can write good code by default. anyone will be able to build very complex software as long as they can articulate their intent clearly

experienced engineers will not have an advantage any more just because they know a little more than average people on how to write good code (including myself)

and i think that’ll be a very beautiful world
