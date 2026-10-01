---
source: x
id: 2094517788471894502
url: "https://x.com/kunchenguid/status/2094517788471894502"
created_at: "2026-08-31T20:08:49.000Z"
type: post
conversation_id: 2094517788471894502
thread_complete: true
---

### @kunchenguid

once upon a time i was working with ~10 agents in tmux. i got all the agents on full cylinders and it felt great. i walked away to make coffee

when i came back, the screen showed an empty terminal with nothing on it. it took me a few seconds to realize it was a tmux server crash. my "agent civilization" just got a team wipe

that was probably one of the most painful experiences in all my time working with agents. i had to manually figure out which agents were working, what their last state was, which worktrees were clean vs dirty, which PRs were raised vs not, how to get them to correctly resume

this team wipe led to me putting down a founding principle in firstmate - restart should be a non-event. it's hard to fully achieve that, but firstmate pushed pretty far

i can kill the firstmate session and crewmates would still keep working. restart firstmate and it would catch up on what the fleet had done

i can have dozens of second mates and crewmates running in the fleet doing whatever, and i can literally pull the power plug of my mac, restart it, and firstmate will reconcile everything and in a few minutes the entire fleet would be doing whatever it was doing earlier

i can have multiple remote machines and any one of them can die any time. whenever they are up, all the crew there would continue working

this was done by being disciplined about where to place what kinds of context

the agent's context window is like our computer's "memory". they can get lost, cleared, compacted, or screwed up in various ways. we should keep it intended for things that agent's next request likely needs direct access to

anything that needs to serve as a durable record should not be trusted to stay only in the context window. they must be pushed and persisted onto the disk, and made discoverable by the agent. this can be done through tools like beads, or external project management tools like jira/linear. firstmate does this mostly through a tool called "tasks-axi" which stores records in a markdown file locally

if you don't have a system for persistent record keeping yet, highly recommend looking into getting one set up. this saved my agent civilizations so many times
