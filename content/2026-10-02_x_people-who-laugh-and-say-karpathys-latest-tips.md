---
source: x
id: 2105931853815296295
url: "https://x.com/kunchenguid/status/2105931853815296295"
created_at: "2026-10-02T08:04:14.000Z"
type: quote
conversation_id: 2105931853815296295
thread_complete: true
parent_urls:
  - "https://x.com/karpathy/status/2105819303471976479"
parents:
  - id: 2105819303471976479
    author: karpathy
    url: "https://x.com/karpathy/status/2105819303471976479"
    type: quoted
---

### @karpathy

We'll be spending a lot more time trying to understand the outputs of language models. A few thoughts, tips & tricks:

Writing. Something I've had success with: Ask your LLM to explain something in ASD-STE100, it's a controlled language specification originally developed for aerospace maintenance documentation. LLMs well-versed in this language and it comes with heavy constraints on clean writing style that I often find a lot more readable. Sometimes I've tried to soften it a bit e.g. ask for "80% of the way to ASD-STE100" because the spec is quite stringent. But even better:

Diagrams / images. Instead of writing, ask your LLM to create a diagram. These can be a lot easier to process, parse, and understand. But even better:

Web pages. Ask for output "in HTML" to get a beautiful, interactive webpage. LLMs are getting really good at frontend and can create beautiful experiences, animations, etc. But even better:

Explainer videos. The output format I am most bullish on is fully custom / bespoke explainer videos generated on any arbitrary topic. Experiment with things like "Create a 3b1b style video explainer on X. Use my ElevenLabs API key for audio narration". (you'd need an API key for the latter or you can ask your LLM to find you decent free alternatives that use your local compute). This is actually starting to work!

In summary:
- As LLMs get better, they will do more and more of the legwork autonomously, and a lot more of our work will rise up the abstractions into oversight and understanding.
- Luckily, LLMs can help here too because as intelligence and code are increasingly abundant, you can ask for large, custom, discardable software artifacts (e.g. web apps, video explainers) that would have never made sense to create before. Push the boundaries here and you'll be surprised.

### @kunchenguid

people who laugh and say karpathy's latest tips are outdated - i suspect the vast majority of them have not even tried the tips yet

i just tested the ASD-STE100 wording rule and it's surprisingly good at helping increase clarity of model response, even within html artifacts. but the trick is that the full ruleset is a bit too strict and you need to pick a subset

one prompt you can run super easily: 

"randomly sample 10 session transcripts where i worked with you interactively within the past week. apply ASD-STE100 rules to assistant responses and analyze which rules would have increased clarity, reduced confusion and improved the conversations, then document those rules in my user level AGENTS.md"

you might be impressed!
