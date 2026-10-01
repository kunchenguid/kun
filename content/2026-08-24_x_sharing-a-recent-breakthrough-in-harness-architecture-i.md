---
source: x
id: 2091988752847823133
url: "https://x.com/kunchenguid/status/2091988752847823133"
created_at: "2026-08-24T20:39:20.000Z"
type: post
conversation_id: 2091988752847823133
thread_complete: true
---

### @kunchenguid

sharing a recent breakthrough in harness architecture i achieved with @pidotdev 

this is not a common problem but it happens when your agent starts to handle loops that would fire events from the background. e.g. the agent is babysitting a PR, and it checks every 5 minutes whether there are CI errors or human feedback 

when your agent is juggling a lot of such loops, eventually you will see it becoming too busy to even talk to you. it’s just handling these events all the time and making judgment calls for whether they need any actions or not

this problem is particularly prevalent in firstmate because it’s playing an orchestrator role and needs to respond to various kinds of updates from the whole fleet

i experimented multiple approaches and eventually created this multi-brain harness architecture where:

- a single agent can have multiple sessions running in parallel

- the main session is the one you talk to

- then there’s also a session running in the background (can use a cheaper model too) that specifically handles events from loops

- the background session will decide whether an event needs to interrupt the main session or not

- most events don’t need to, but they don’t get silently dropped. they get “merged” into the main session like git commits merge between branches, and they get seen when main session takes the next turn, so context is not lost

- events that do need human attention wakes main session immediately 

- user and agent messages (not tool calls) in main session get merged into the background session, so when the background session makes decisions, it has the context and intent

- both sessions’ prompt caching is protected during these merged so requests keep being cheap

result is quite incredible - the main agent remains available for user interaction while a ton of loops can be running and doing work

@pidotdev is pretty much the only mainstream harness where this can be achieved seamlessly due to its deep customizability. you can build this in your custom harnesses too. sharing here in case anyone building similar systems face this problem!
