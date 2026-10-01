---
source: x
id: 2097345968962507102
url: "https://x.com/kunchenguid/status/2097345968962507102"
created_at: "2026-09-08T15:27:00.000Z"
type: reply
conversation_id: 2097345968022892588
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/kunchenguid/status/2097345968622747801"
parents:
  - id: 2097345968622747801
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2097345968622747801"
    type: replied_to
---

### @kunchenguid

there's no blender, no compute use, no image generation. it's purely LLMs writing code

i used grok 4.6 as the orchestrator (firstmate), fable 5.1 for figuring out art direction, gpt 6 astra for the bulk of the implementation, opus 5 for hillclimbing performance optimizations, and muse spark 1.3 for some features like mouse control and persistence

these models get along much better than their makers :)

through this exercise, i learned a few things -

1. don't give astra anything that requires aesthetics - it just can't. fable is still the king at making beautiful things

2. astra is however great at implementing complex things without using many tokens. it seems it just knows what the correct implementation is, and there's very little trial and error or rework

3. even with these powerful models, A TON of human steering was still needed to create a look that i feel good about. the sun, moon, milky way and clouds, coloring, and the cel-shading art style - the LLMs just couldn't come up with coherent result without me providing inputs

### @kunchenguid

code is MIT open sourced at https://t.co/w5AeMJaO6r

i structured the code to make it easy to add objects, generators and biomes etc, so if you have a lot of tokens lying around and want to try some ideas, check it out, and PR welcome!
