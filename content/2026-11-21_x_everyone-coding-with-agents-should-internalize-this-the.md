---
source: x
id: 2124066583589077005
url: "https://x.com/kunchenguid/status/2124066583589077005"
created_at: "2026-11-21T09:05:11.000Z"
type: post
conversation_id: 2124066583589077005
thread_complete: true
---

### @kunchenguid

everyone coding with agents should internalize this -

the RLVR in current frontier LLMs' post-training is done at task level. in other words, they won't give a damn about long term maintainability

this is why we see so many useless comments and test cases being written by default. these things make future tasks less efficient, but they don't affect the current task's success, so they survived the training and became part of the models' behaviors

until post-training can reward long term maintainability (which i suspect is very hard because inherently it's a slow and expensive process to measure that), it's on us humans to correct it in the harness layer through prompts, skills, lint rules etc

this also implies that understanding long term implications of technical choices is a valuable human skill that's hard for an average person to make up for with LLM

it's the distinction of whether you can create a durable growing codebase, or have one that gradually degrades  into insanity

if you have that skill, you are golden (for now, until post-training catches up)
