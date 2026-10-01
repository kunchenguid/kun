---
source: x
id: 2092105844892766317
url: "https://x.com/kunchenguid/status/2092105844892766317"
created_at: "2026-08-25T04:24:37.000Z"
type: quote
conversation_id: 2091988752847823133
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2084825003099607189"
  - "https://x.com/PixelMaLiang/status/2092085540892107202"
parents:
  - id: 2084825003099607189
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2084825003099607189"
    type: quoted
  - id: 2092085540892107202
    author: PixelMaLiang
    url: "https://x.com/PixelMaLiang/status/2092085540892107202"
    type: replied_to
---

### @kunchenguid

over the past couple of weeks, my workflow had another major round of upgrades which i'll walk through here

the improvement mostly came from:
1. stabilizing my choice of models
2. controlling multiple machines from one firstmate
3. quota-aware, complexity-aware task routing

this is a very practical setup i've battle tested for a while now, and something i believe many people can easily benefit from today, not a fancy toy that looks cool only on paper

here we go -

---- devices ----
i have a macbook, a mac mini, an iphone and a few hetzner VPS all in the same tailscale subnet and they have ssh keys authorized for each other, so they can freely connect (except VPS can't connect to my devices)

---- firstmate ----
if you've read my other posts, you probably already know i use something called firstmate - a single agent i talk to that manages all the other agents for me - https://t.co/jtjlzK8Mdq. but the concepts below are generic and can totally be replicated in your own tech stack if you choose to

my firstmate runs on the macbook. most of the time, it sits on my desk connected to my mouse keyboard and monitors, but if i need to go somewhere else, i can carry it with me. running firstmate here means i always have direct access to firstmate not relying on any remote connections

my firstmate uses grok 4.5 (unless i run out of quota, then it becomes opus 4.8), and this is a careful choice made after a lot of experimentation

the key rationale is that firstmate as the primary orchestrator agent i directly talk to can benefit from a few traits: 
- fast: plain grok 4.5 beats even the fast mode of claude and gpt. it's probably the only top tier model that can start to stream back response immediate after i press enter in chat
- long enough context window: 500k is actually a really good sweet spot that allows for long stretches but won't become too expensive and noisy
- good technical judgment: when i use gpt 5.6 everything starts to become over-engineered. when i use opus 5 it makes all kinds of mistakes by jumping into conclusion without understanding context. only fable 5, grok 4.5 and kimi k3 seem to keep things on track for me, and know when to ask vs keep going. but both fable and k3 are too expensive
- pleasant to chat with: grok might be the most no-BS model right now. opus 5 again fails hard here

my main problem with grok 4.5 is that the $300 supergrok heavy subscription is just not giving enough tokens compared to even the $200 ones from anthropic and openai, so i'm always short on grok tokens

---- second mates ----
my firstmate doesn't manage every crewmate directly, because that would make it too busy to talk to me. instead, i have a second mate for each persistent charter - developing firstmate itself is managed by one second mate, while all my ios app development belongs to another second mate, for example

by default second mates are set up on the same machine as firstmate, but because building iOS apps is very CPU intensive, i put the ios second mate onto my mac mini which runs headlessly and placed on a shelf, so it won't ever directly compete with my interactive experience

i built support in firstmate to manage remote second mates via ssh, which made that possible. and the reason i implemented remote support at second mate instead of crewmate level is to mitigate the impact of dropping connection. when i close the lid of my macbook, the second mate can continue supervising the crewmates running on my mac mini

remote second mates was a big upgrade because it allowed me to scale up hardware resources without compromising the fact that i still only talk to one agent for everything

all my second mates run opus 4.8, because:
1. the quota from supergrok heavy is disgustingly low. if i run grok 4.5 for every second mate i'll run out of quota very quickly
2. opus 4.8 is the next in line in terms of being a sweet spot between speed, cost and intelligence
3. i tried opus 5 and gpt 5.6 as second mates - same problem of poor technical judgment turned everything into a mess and they don't seem to know when best to escalate something for my decision vs going rogue

---- crewmates ----
when my firstmate and second mates need to dispatch some real work, it chooses which model to use based on a few things:
- hard capability requirement
- ambiguity of the task
- my quota availability

tasks that need image generation always route to codex with gpt 5.6 sol. the image model from OpenAI is absolutely top notch

tasks that need video generation, or real time information, always route to grok build with grok 4.5. that's the only harness capable of these things out of the box right now

bug fix and small feature development work whose requirements are already well-defined would go to one of these, depending on which of my subscriptions has the most quota runway left:
- gpt 5.6 luna
- sonnet 5

tasks that have unclear requirements and need investigation will go to these (again quota dependent):
- gpt 5.6 sol
- opus 5

highly complex planning would go to these (explicit approval from me required, because they are expensive):
- fable 5
- kimi k3

firstmate natively supports intelligent task routing, so basically i just told firstmate the rules above and it knows how to follow it when dispatching crewmates. quota data comes from quota-axi which can be used standalone outside of firstmate too

most of my code changes go through no-mistakes for validation, and here i use gpt 5.6 sol on medium reasoning. this is where gpt really shines - it's very thorough and can catch edge cases really well

i've cranked out a lot of work with this setup and generally pretty happy with it - hope you find this a helpful reference!

### @PixelMaLiang

所以为了享受这个最新的功能，需要把 firstmate 和 secondmate 都切到 pi harness，请问这种情况下基于你的经验，fm和 sm 分别应该搭配哪种模型呢？

还有这里提到的专门用于处理“第二对话”弱一点的模型也需要自行设置么，还是说会自动设置？

PS：昨天我用 cc+opus5 xhigh 驱动我的 fm 和 sm，结果让我徒劳了一整天，造成了大量返工，最后不得已切回 grok4.6 xhigh，最终又恢复了 firstmate 本来的荣光😃

### @kunchenguid

@PixelMaLiang @pidotdev 我之前发了个帖可以做参考 https://t.co/D4JtcmLTt0
