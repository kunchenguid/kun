---
source: x
id: 2103325882752598078
url: "https://x.com/kunchenguid/status/2103325882752598078"
created_at: "2026-09-25T03:29:03.000Z"
type: post
conversation_id: 2103325882752598078
thread_complete: true
---

### @kunchenguid

how to set the right reasoning effort level

i get asked this a lot, and i learned that because the underlying mechanism is not obvious, a lot of people don’t have the right mental model to think about how to use the knob

so a quick crash course here:

reasoning effort level in mainstream LLMs today means a “ceiling”, not a “floor”!

setting a high effort level does NOT mean every prompt you send will use a lot of thinking tokens. you can try this very easily - launch your agent in an empty directory, use high reasoning, and say “hi” - unless your harness is totally messed up, the agent will respond almost instantly

how does that work? the most typical implementation is that in post-training, the models receive a penalty for how many thinking tokens they use. how strong the penalty is depends on the thinking effort level that’s set

at low reasoning, the penalty is very strong, so any long thinking traces get punished into oblivion

at high reasoning, the penalty is weak so longer thinking traces don’t get punished too much, and are allowed to survive more often as long as they get good results

the most important thing to learn there is - thinking tokens is always a penalty, not a reward. there’s never a rule that says “at high reasoning i’ll punish you if you think too little” - this is because more thinking tokens always means higher cost which is always a bad thing and should not be rewarded

so with that in mind, you should think of reasoning effort as “how much are you allowed to think”, not “how much do i want you to think”

setting it at low means “for this task you are not allowed to think much”. you would want this when 1) the use case requires low latency; or 2) you already know the task does not require additional reasoning

setting it at high means “you are allowed to think more when needed”. the model will still try to think as little as possible according to what its training data teaches it. you want this when 1) the use case allows slower response; and 2) you are not sure how much thinking is needed for this task

for some models, “max” is special because it forces thinking mode to be on, which forbids “zero thinking”. i don’t have a full inventory for which models do this vs not. and i generally avoid this mode because i don’t think it’s a good idea to say “every request has to have thinking tokens no matter what” 

practically speaking, i mostly only use two modes:

- medium, when i already know the task is well defined

for example, implementing a spec planned by a highly intelligent model. i avoid low because 1) i rarely require low latency; 2) even when implementing well defined tasks sometimes the intermediate context is still ambiguous

this is also my default for firstmate because highly ambiguous problems are typically handled by crewmates, and i do want firstmate to be fast

- xhigh, whenever the task is not well defined yet. this is most often used for planning and investigative work. i do this to give enough room for the model to decide how much thinking it needs

hope this is helpful!
