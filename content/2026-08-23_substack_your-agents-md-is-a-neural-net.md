---
source: substack
id: 212348719
url: "https://kunchenguid.substack.com/p/your-agentsmd-is-a-neural-net"
created_at: "2026-08-23T04:09:12.794Z"
type: newsletter
conversation_id: null
thread_complete: true
title: Your AGENTS.md is a Neural Net
---

# Your AGENTS.md is a Neural Net

*And here’s how to train a good one with gradient descent*

Your AGENTS.md is a Neural Net

And here’s how to train a good one with gradient descent

Kun Chen

Aug 23, 2026

75

13

13

Share

Many people find it difficult to maintain their . When I ask people how they keep it good the honest answer is usually “I write what I think the agents should know” or “I let my agents write it for me.” 

Same for me, for a long time. All I had was vibes. But I knew I could find a better solution. This post is the method I eventually landed on. 

The short version: handwrite your user level AGENTS.md that holds your preferences, and treat your project level ones like a neural net. Give it a size budget and train it on the sessions that actually ran.

The rest of the post is what that means concretely.

Practical field notes on agentic engineering, solo building, and what the frontier of software development looks like. Former L8 engineer at Meta, Microsoft, Atlassian.

Subscribe

Four bad states

Look at any project memory file older than a few months and it is in one of four states:

Empty. The file exists because a tool created it. The agent reads nothing useful and re-derives the same things every session.

Bloated. Every time an agent does something dumb, someone adds a rule in. A year later it is 900 lines, and every one of those lines is paid for on every single session, forever. Worse, instruction following gets diluted as the file grows, so the rules that matter are buried under rules that don’t.

Stale. Half the rules describe a build system that was replaced. The agent follows the stale instructions and make unnecessary mistakes.

Drifted. says one thing, says another, and whichever harness you are using today gets a different set of instructions.

The common problem is that the file is edited in a transactional way based on anecdotal observations, and it’s a lot easier to append than to consolidate and prune.

But the data that can tell you what to change already exists. Every agent session leaves a transcript on disk. Claude Code, Codex, pi, opencode, grok, Cursor: all of them write a log of what the agent was asked, what it did, which rule it followed, which one caused it to trip, how the user corrected it, and what it had to rediscover.

Two files, two very different jobs

First thing you should know is that our agent memory files can be written at two levels, and they deserve opposite treatment. Here’s how I think about it. 

The user-level file is mine, and I handwrite it. My global is my preferences and opinions: prefer quality over development cost, reproduce a bug end to end before fixing it, fix the flaky test you walked past even if it isn’t yours. These are preferences I own and they change rarely. Nobody else should edit them, no tool should “optimize” them, and especially not by agents. This file is small and it is written by hand, on purpose.

The project-level file is actually a neural net. It gets loaded into the system prompt of agent sessions that run on the project, and it steers the agent’s behavior not too differently from a fine-tuned LoRA that applies on top of the model you use. Instead of editing it like a file, it’s better to decide on a token budget and train it properly like a neural net.

Forward pass, backward pass

If you have never trained a neural net, the whole loop is this:

A network has weights: a bunch of numbers that determine how it behaves.

You run an input through it. That is the forward pass. The weights are used as-is; nothing changes. And you get some output.

You compare the output to what you wanted. The gap is the loss.

You work backwards from the loss to figure out which weights were responsible, and nudge each one slightly in the direction that would have reduced the gap. That is the backward pass, and the nudge is a gradient step.

Repeat. Many small steps, not one big rewrite. The step size is the learning rate; too large and you thrash, too small and you never get anywhere.

Two details matter for what comes next. You do not update on a single example, because one example is anecdotal and can be noisy; you batch. And the network has a fixed size - larger networks can store more knowledge, but becomes more costly at inference time. 

The mapping

Now swap the nouns:

The project is the weights. It is the thing that determines how the agent behaves in this repo before it reads a single line of code.

The budget is the “model size”. Larger models can contain more knowledge and produce better results, but it becomes more costly at inference time. So defining a budget is important for making the tradeoff explicit. 

Every agent session is a forward pass. The agent loads the file, does the work, and the file is not touched.

The gap between what the agent did and what you wanted is the loss. It rediscovered the schema. It ran when the repo uses pnpm. It violated a rule that was right there. It followed a rule that turned out to be wrong. All of that is in the transcript.

Reading the transcripts and updating the AGENTS.md file is the backward pass. Work out which instructions were responsible for the loss, which ones earned their keep, and make small updates to the weights that reduce it, within the budget.

You can see they are shockingly similar. Thinking of AGENTS.md this way also leans into the reality - most people will not actually carefully read the content very often. It’s already a blackbox in practice.

What’s missing is that most people stopped at the forward pass - they use the AGENTS.md file in each agent session - and what they lack is the backward pass to refine the weights based on loss.

What a backward pass looks like in practice

You can do this by hand, and I did for a while. The discipline has five parts, and each one maps onto something from the training loop.

Evidence comes from transcripts, not from anecdotes. The loss signal should be from the agents’ session logs, not your recollection of being annoyed last Tuesday. Treat each list item or paragraph of the AGENTS.md file as an addressable unit, and for every unit ask: in which sessions did this matter, was it followed, was it violated, was it wrong? Also ask the inverse: what did the agent get wrong that no unit covers?

Batch before you update. One bad session can happen for random reasons. You should never rewrite the weights based on that. Only when you have a batch of data can you identify what’s truly a pattern vs just noise. This single constraint removes most of the bloat, because most pasted-in rules were reactions to one incident that never recurred.

Small steps. A handful of edits per pass, something like five, each one an add, a remove, a rewrite, or an extraction to a skill. Not a rewrite of the file. A large step on a memory file is indistinguishable from starting over, and you lose everything that was working.

Respect the budget, and use skills as the release valve. Pick a budget for the always-loaded file, for example 5,000 tokens. At or near it, updates are zero-sum: every addition names the removal or extraction that pays for it. The release valve is skills. Broad instructions (matter in something like 20% of sessions or more, or are safety-critical) stay in the memory file. Narrow ones with a detectable trigger become a skill. Narrow ones with no detectable trigger are deletion candidates.

Doing this by hand rigorously can be a real improvement over random edits based on anecdotes. But it’s tedious: finding the transcripts, reading megabytes of tool-call noise, keeping the quotes honest, counting tokens. Which is the part a tool should do.

The tool that does the backward pass

So I built backpass to run this loop easily in a repeatable way. You can use it by running in a repo you recently worked on.

And its shape is just the method above turned into a pipeline. One run is one gradient step.

It collects samples from the local transcript stores of common agent harnesses directly from disk, and ties each session to the repo by cwd or git remote. 

It distills each transcript to what carries the loss signal (what was asked, what the agent said, a one-line shape of each tool call), which is a 96-99% reduction with no model involved. Calculating the loss is a cheap model call per transcript that produces the evidence against each addressable unit, and anything without a verbatim quote is discarded in code, not in a prompt. 

Gradients are aggregated deterministically: per-unit positive and negative counts, a relevance share, near-duplicate gaps clustered across sessions, and any gap seen in fewer than two sessions dropped. 

Then the gradient-descent step, one high-reasoning call, proposes the edits, and the gates run mechanically: at most five edits, two sessions for a new rule, a quote on every edit, and the post-edit file fits the budget. A violation gets exactly one re-prompt naming the breach; a second one fails loudly and writes nothing. Token deltas are measured from the actual text, because model-reported numbers are never to be trusted.

Nothing writes until I review. uses lavish-axi to present a list of proposed edits, each with the diff and the evidences, I accept or reject each, and rejections are remembered so the same edit does not come back without new evidence. The flags are the training knobs under their real names: is model size, is learning rate, is batch size, is the training window.

The rhythm I have settled into: one run a week per active repo, read the proposals, reject the ones where the model over-reached, accept the rest. Over time, the AGENTS.md just becomes more and more efficient and effective.

Why I think this is the right shape

Anyone could have asked an agent to “clean up this file” a year ago. What really matters a lot here is the scientific rigor: real transcripts as the only input, verbatim quotes as the only admissible evidence, a fixed budget, a small step size, a minimum batch, and a human gate that writes. 

Run in your repo if you’d like to have a try. I’ve also open sourced the tool under MIT. If you want to study the loop it automated, you can find it at github.com/kunchenguid/backpass.

Practical field notes on agentic engineering, solo building, and what the frontier of software development looks like. Former L8 engineer at Meta, Microsoft, Atlassian.

Subscribe

75

13

13

Share
