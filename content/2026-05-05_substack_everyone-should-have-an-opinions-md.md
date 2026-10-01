---
source: substack
id: 196571741
url: "https://kunchenguid.substack.com/p/everyone-should-have-an-opinionsmd"
created_at: "2026-05-05T18:31:28.508Z"
type: newsletter
conversation_id: null
thread_complete: true
title: Everyone Should Have an OPINIONS.md
---

# Everyone Should Have an OPINIONS.md

*A game changer that wasn't possible without agents*

Everyone Should Have an OPINIONS.md

A game changer that wasn't possible without agents

Kun Chen

May 05, 2026

93

8

6

Share

If you write, build, post, or argue in public, you should have an .

This is different from an , or a knowledge base. is a compact, living map of what you actually believe.

I manage mine with the Hermes agent (OpenClaw would work too) and GPT 5.5. It is a markdown file in my dotfiles, updated daily by a cron job. It reads everything I write on X and Substack, extracts durable opinions, merges them into the existing structure, and commits the result back to GitHub. 

I did it as an experiment, but it turned out to be a lot more helpful than I expected. More on how I actually built it later in the post. But first let me walk you through why it’s useful.

The problem

Many of us leave a long trail of opinions across the internet. X posts, replies, quote tweets, blog posts, Substack essays, GitHub issues, podcast transcripts, YouTube transcripts, Discord messages, forum comments, internal docs.

This trail is super valuable, but it’s not something that’s easy to see, understand, or be sent to an agent for interrogation or as context. It is too long, too noisy, and chronological instead of conceptual. It mixes jokes, experiments, technical details, frustration, half formed thoughts, and actual durable beliefs.

What I want is something that reflects the essence of my opinions. A small file that says: these are the beliefs stable enough to matter.

What mine looks like

To give you a sense for what it looks like, here is my current shared as-is. If you asked me to articulate my opinions today, I could not have given you anything as good as this.

This is one of the things that weren’t possible without an agent.

The surprise: introspection

After I created this file for the first time, I asked the agent whether any of the opinions looked objectively wrong. That turned out to be one of the most useful interactions in the whole process.

It did not say “you are absolutely right”. It gave me extremely useful feedback. To list a few examples:

I can also ask:

Which of these are actually falsifiable?

Which are common consensus dressed up as personal taste?

Which are stale?

Which are too strong?

Which opinions contradict each other?

It’s oddly enjoyable to find out more about myself this way.

This is platform-agnostic

I use X and Substack because that is where I currently post a lot.

The pattern generalizes to whatever platforms you use to share your thoughts, whether it’s Bluesky, Mastodon or GitHub.

The source does not matter much. The key is to separately sync each source, but consolidate opinions across.

Important filters

The most important part of the cron prompt is not “read my posts”. That part is easy.

The important part is what to leave out.

For X, the agent has to avoid overfitting to throwaway replies, jokes, dunks, or ambiguous posts without context.

For Substack, the failure mode is different. My posts often include technical walkthroughs. I do not want to become a cookbook of implementation details.

The prompt in my cron job has explicit rules:

Extract durable opinions, principles, taste, values, critiques, predictions, tradeoffs, and recurring judgments.

Treat technical details as evidence for underlying opinions, not content to copy.

Ignore code snippets, commands, recipes, API usage, architecture walkthroughs, tool setup steps, debugging steps, and one-off tricks unless they reveal a broader opinion.

Summarize technical posts at the level of what I value about engineering, tools, product, craft, constraints, trust, or organizations.

Do not summarize technical posts at the level of how to implement the technical solution.

Without that filter, the file becomes a knowledge base. With the filter, it becomes more like my taste.

The file is allowed to reorganize itself

One detail I care about: the section structure should not be static.

The cron job preserves useful sections when they still work, but does not preserve them by inertia. After each update, it asks whether the current structure is still the clearest way to organize the opinions.

A file like this should not grow by appending forever. It should periodically reorganize itself into a better shape.

The watchdog

After the first version, I realized I could actually setup “alerts” about my opinions.

There are certain things I would really love to know about when they happen.

First, opinion drift. If I say something today that contradicts or materially refines something in , I want to know. It means when the cron job sees tension between something I just posted and an existing opinion, it would flag the old sentence, the new evidence, and a suggested action. Maybe the file is stale. Maybe the new post was contextual. Maybe I changed my mind. Those are different cases. The agent should not collapse them into one automatic edit.

Second, factual risk. When new opinions are identified and added to the file, I want the agent to check for their correctness and warns me if I said something wrong. Sometimes a valid opinion may become invalid because the world changed - I want to know when that happens too.

The cron job now has a watchdog pass that checks those things for me and would send me a message when anything’s worth my attention.

Why my agents need this

A lot of agentic work fails because the agent does not understand what I care about. So I added this to my AGENTS.md:

This helps me get my agents much better aligned with my taste and beliefs.

Why I need this

I want to be extremely honest with myself and better understand my own opinions -

Did I say anything that’s objectively wrong? Did I imply something I didn’t intend to? Are my opinions changing?

Having an agent help manage this in a digestible format proved to be extremely valuable.

How to build your own

I built it over a few WhatsApp messages while the agent cloned my dotfiles, wrote helper scripts, tested them, set up the cron job, ran the first full sync, and pushed the result to GitHub.

You can get the same by telling your Hermes agent this:

Solo builder. I share practical field notes about my agentic engineering workflows and experience building agentic systems. Former L8 engineer at Meta, Microsoft, Atlassian.

Subscribe

Get an file created for yourself today - you won’t regret it.

93

8

6

Share
