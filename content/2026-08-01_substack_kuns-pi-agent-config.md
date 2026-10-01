---
source: substack
id: 209396564
url: "https://kunchenguid.substack.com/p/kuns-pi-agent-config"
created_at: "2026-08-01T17:39:50.765Z"
type: newsletter
conversation_id: null
thread_complete: true
title: "Kun's Pi Agent Config"
---

# Kun's Pi Agent Config

*Minimal, practical, and elegant*

Kun's Pi Agent Config

Minimal, practical, and elegant

Kun Chen

Aug 01, 2026

54

6

2

Share

It’s the 67th time I got asked how I’ve configured my Pi agent - it’s time to write it down and share! This is not going to be “here’s 100 fancy tricks you can do with Pi”. This is “here’s what I actually use and can’t live without.”

When and why do I use Pi

I use Pi heavily for any model that’s not Claude, because Anthropic banned 3rd party harnesses from using their subscription quota. There are some workarounds, but none is perfect - so for Claude I’m stuck with Claude Code. For any other LLM, I pretty much only use Pi at this point, barring some exceptions.

I pick Pi because it’s provider-neutral, minimal, and deeply customizable. I believe this is how agent harnesses should be, because the AI models are constantly advancing, and the harness needs to be flexible enough to evolve with them.

Practical field notes on agentic engineering, solo building, and what the frontier of software development looks like. Former L8 engineer at Meta, Microsoft, Atlassian.

Subscribe

Main settings

Some of these are personal preferences, but a few important ones -

 helps create a less noisy terminal. I don’t find any value in watching what the LLM is thinking in its own head.

 is a no-brainer because if I sent multiple steering prompts I of course want all of them to go out asap.

 is important to me because I like to keep queuing follow up prompts when the model is working. Having all of the queued prompts sent all at once is a lot more efficient than letting them go out one by one.

3rd party extensions

You can see from the settings file above I only have a few 3rd party extensions. I’ll quickly explain what they are and why I use them here.

 is a no-brainer because the stock Pi is so minimal that it doesn’t even have the ability to search and browse web content.

 is what allows me to activate fast mode when using gpt models. It’s a very simple extension that just has an on/off toggle to control whether requests to Codex backend activates fast mode. Fast mode uses 2x tokens for 2.5x speed, so use it with the tradeoff in mind.

 makes Pi use OpenAI’s secret sauce “server side compaction” whenever the context window is too long and needs to be compacted. The server side compaction is what Codex uses by default, and is what makes Codex so good at long running tasks despite gpt models have a short context window there. 

Model overrides

This is an interesting one. OpenAI’s gpt models actually can support longer context requests, but whenever the request goes above 272k input tokens, it will double the cost. See https://developers.openai.com/api/docs/pricing for details. 

The settings above makes Pi set the context window length for those models at 272k, so whenever the request becomes larger than that, it will do compaction and dial it back down. This helps avoid draining our quota or API cost more quickly than we want.

Color theme

 is totally a personal choice. What you should know is that you can just talk to Pi and ask it to make you any theme you want. Point it at an official color theme you like, and it’ll do it for you.

Terminal title

This is a custom extension built to print live agent status as terminal title. With this extension, if I spin up many terminal tabs of Pi agents, I can easily see which agent is working or waiting for my input.

Published config

All the config above is shared in my public dotfiles repo - https://github.com/kunchenguid/dotfiles. Feel free to copy/fork or do whatever you like with it. 

And there’s a little bonus hides in here - https://github.com/kunchenguid/dotfiles/tree/main/home/.pi/agent/extensions/calm. This is another custom extension that adds a “/calm” command in your Pi, which allows you to toggle on/off a calm mode. 

When calm mode is on, it hides all tool calls from the agent, making the terminal extremely clean and peaceful. It also replaces the “Thinking” indicator with a little boat that sails on calm seas.

That’s everything - no fancy skills or workflows. Just the minimum to give me the core primitives I need, help me achieve good efficiency, and remove distractions. 

Practical field notes on agentic engineering, solo building, and what the frontier of software development looks like. Former L8 engineer at Meta, Microsoft, Atlassian.

Subscribe

54

6

2

Share
