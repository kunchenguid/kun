---
source: x
id: 2123099377946546491
url: "https://x.com/kunchenguid/status/2123099377946546491"
created_at: "2026-11-18T17:01:51.000Z"
type: post
conversation_id: 2123099377946546491
thread_complete: true
---

### @kunchenguid

ok after a full day of using gpt 6.2 astra and sol on my real projects, here's my review

tl;dr - they are not a drop-in replacement for fable 5.2 and opus 5.5, but they are _really good_ once you figured out how to use their strength

1. first, the quirks

i started called these the "gpt smell", which is still here with the 6.2 series

the models' judgment on when to ask the user about something and when to go ahead is just not quite right. it'll escalate trivial decisions where clearly only one option is preferable, or choose to go down a path by itself that makes significant tradeoffs that should have needed my eyes

so as a primary driver for "let me just talk to it about everything" type of use case, they aren't great - i'd say they are close to opus 5 in this regard, and far behind opus 5.5

2. but... i found something _really_ cool

having ultrafast on sol is completely insane. with astra, it burns my wallet ultrafast, but with sol it's actually quite affordable! 

the best use of sol on ultrafast that i've found is adversarial code reviews - they typically don't need to run a lot of heavy tool calls that would slow them down. most of the time is spent on the model, which gets massively accelerated by ultrafast

once you got a feel from using sol ultrafast as the code reviewer, you can never go back. it feels like pure magic

3. and... i found something else that's really cool

we are not supposed to ask the gpt 6.2 series to respond in text. we should let them respond in html! (i use lavish-axi, but you can just ask for html or use whatever fits in your harness)

i suspect they are post-trained specifically on their latest "intelligent UI" concept in chatgpt - these models are so good at visual presentations of ideas

once you allow the model to respond in visual artifacts, it's a completely different game. the reports and decisions explained by astra in html is a clear step function better than what fable and opus give me

so after a day of use, i've made two changes to my setup:
- always sol ultrafast as code reviewer
- i started preferring asking astra for planning in html artifacts over fable/opus. i think i'll keep a/b testing for a while to decide how much and for which case i fully switch over

all in all, i strongly recommend spending more time with these two models. don't expect them to be the "everything" model, but rather figure out where they fit best in your workflow. i couldn't be happier for the two use cases i found above, and i'm pretty sure there are more
