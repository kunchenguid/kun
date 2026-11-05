---
source: x
id: 2118080479824126098
url: "https://x.com/kunchenguid/status/2118080479824126098"
created_at: "2026-11-04T20:38:33.000Z"
type: post
conversation_id: null
thread_complete: true
---

### @kunchenguid

my open source projects collectively crossed 30k+ stars on github, going from almost zero just a few months ago! 🎉

reflecting on the journey, here are some learnings about growing and maintaining open source projects:

1. make videos sharing your OSS projects

videos, not tweets. this is probably my most important tip

i had a few viral tweets introducing my OSS projects that got lucky and had hundreds of thousands of views, but what brought in way more serious users and contributors was my youtube videos

good videos take a lot more effort to make, but it gives people a much more direct understanding of how your project works and how it delivers value. my hero project firstmate https://github.com/kunchenguid/firstmate grew largely due to my video content

make some videos. and make some more

2. use open source as a super power

i can't overstate how much better the tools got because of open source contributions from others. people bring great ideas, and test + fix the product in all kinds of edge cases that i can't possibly discover

in a way, an OSS product can guide itself towards PMF, because the community would collectively steer it towards the right direction

now that even non-developers can participate in contributing to OSS, this super power is becoming even stronger

3. set a minimum bar on contribution quality

the super power can also be a double edged sword here. especially with AI which allowed a lot more people to contribute but also lowered the bar. if left unchecked, you get a lot of noise

some projects outright disabled all PRs, while some others refuse to take anything done with AI. neither of which is the right approach IMO

my solution has been to raise the minimum bar by requiring all contributions to be raised through no-mistakes. it enforces a level of rigor, and slightly increases the cost to contribute so low quality noise would often shy away

i have a github action for enforcing this - https://github.com/kunchenguid/no-mistakes/tree/main/.github/actions/require-no-mistakes which you can use for your projects too

4. automate as much maintenance as possible

if you've contributed to my repos, you might have seen some of my automation at work. here's an example - https://github.com/kunchenguid/runner-up/pull/52

i receive dozens, sometimes hundreds of incoming issues + PRs every day across my repos - i can't imagine how i could have kept all these projects moving if i hadn't leveraged agents to automate the triage work

i run the automation in grok bot with my firstmate bot there https://x.ai/bot/__4FfrkUdvpdMk6-LKg5r - it can set up a different bot per each repo, and creates the routines to triage incoming issues and PRs using cursor cloud agents according to my rules, yet allows me to talk to just the firstmate about everything

an important pre-requisite to doing that is a good documented vision for your project, which i write using https://github.com/kunchenguid/vision - with a clearly written vision statement, your triage agents can automatically rule out changes that don't align, and focus on the ones that would further the project towards the direction you want
