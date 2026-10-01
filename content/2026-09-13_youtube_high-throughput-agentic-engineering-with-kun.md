---
source: youtube
id: MSbacZ99E14
url: "https://www.youtube.com/watch?v=MSbacZ99E14"
created_at: "2026-09-13T14:12:43+00:00"
type: youtube_video
conversation_id: null
thread_complete: true
title: High Throughput Agentic Engineering with Kun
---

# High Throughput Agentic Engineering with Kun

## Transcript

0:00 Hi everyone, or should I say hi
0:02 captains. Many of you might have already
0:04 watched my previous videos because they
0:06 got more than a million views. If you
0:08 haven't yet, my name is Kun. I was an L8
0:11 principal engineer previously at Meta,
0:13 Microsoft, and Atlassian. My previous
0:16 videos shared a lot of the basics about
0:19 agentic engineering. So this time I'm
0:21 hoping to share a more advanced workflow
0:24 focusing on high throughput multitasking
0:27 through a large number of agents. I'll
0:29 walk through it by just showing you how
0:31 I get some real work done. Let's jump
0:33 in. As always, we will start with a
0:36 clean terminal. And the first thing I'm
0:37 going to launch is Herder. Herder is
0:40 basically my new T-Max. Uh it's a
0:42 multiplexer. It manages all my agent
0:44 sessions and allows me to easily
0:45 navigate between the sessions. You will
0:47 see that in a bit in this video. And
0:49 then I'm going to go into my first mate
0:52 directory. Uh if you haven't heard of
0:54 first mate yet uh it is a open source
0:57 project that I created uh it's got quite
0:59 some popularity uh a lot of people are
1:01 using this. This is basically my
1:03 workflow. First mate is the essence of
1:05 my workflow and uh the core idea is that
1:09 uh I only talk to one agent which is the
1:11 first mate and the first mate will
1:13 orchestrate all the other agents for me
1:15 so that I don't have to juggle between
1:17 all the sessions and context switch all
1:19 the time. uh is first mate doing that
1:21 and you will see that in a bit. Um the
1:23 way to set up first mate is super easy.
1:25 You just just clone this repo and launch
1:27 your agent in this repo. Uh so now that
1:30 I'm in the first mate directory, I just
1:32 launch my agent. Uh I use pi. Um I I use
1:35 both pi and cloud code. Uh I basically
1:38 use cloud code for whenever I want to
1:40 use an anthropic model uh like opus and
1:42 fable. And I use pi for everything else
1:45 because pi uh basically it can use any
1:48 other model. Uh allows me to switch
1:50 between models very easily as well. Uh I
1:52 actually um right now I'm using grock
1:54 4.5. Um right now uh as of this day um
1:58 Grock 4.6 is already available but I
2:01 actually like 4.5 better because Grock
2:04 4.5 is uh faster and more efficient and
2:07 more straight to the point. Uh 4.6 is a
2:10 little bit like Opus 5. uh it's got uh
2:13 this weird uh personality where it
2:16 doesn't quite speak uh like a human. Um
2:18 so I like 4.5 better. Uh and that's
2:21 something I recommend in general that
2:23 when the new model comes out, don't
2:25 assume the new model is always better
2:27 than the last. Uh just use it for a bit
2:29 and get a sense for how the model
2:31 behaves uh by yourself and uh look at
2:34 how other people have summarized their
2:35 learnings as well. Uh so yeah, this is
2:38 first mate and this agent session is
2:40 where I literally do everything. All my
2:43 projects, all my tasks, I just use this
2:45 single agent session to do it. And maybe
2:47 to show you what that looks like, I'll
2:48 just ask first mate list all the
2:51 projects that we manage through this
2:53 fleet.
2:57 Um yeah, and you notice that I use voice
3:00 input by default. Uh and that's how I
3:02 work. uh voice input is just faster than
3:04 uh typing uh most of the time like this
3:06 kind of natural language prompts. Uh the
3:09 only case where I don't use voice is
3:11 when I have to um type a URL or
3:13 something like that. Yeah. And you can
3:14 see first mate has already listed all
3:16 the projects that I currently manage
3:18 through first mate. Uh it's a lot of
3:20 projects. Uh right uh this is like how
3:22 many 36 projects in total. Um so this is
3:25 uh I do everything uh across these 36
3:28 projects. I do a lot of tasks. Uh most
3:30 of these are open source projects that I
3:32 uh published. Some of them are private
3:34 projects as well. And I do everything
3:36 just through first mates. And to show
3:37 you how I do that, uh maybe I just like
3:39 walk through some real tasks. Uh the
3:41 first thing I probably want to do is u
3:43 this project called backpass. Um
3:46 backpass is a um tool that you can use
3:49 to help you improve your agent um
3:53 agents.mmd or cloth.md. The way this
3:56 tool works is that it will analyze all
3:58 your agent sessions in the past and use
4:00 that to detect what can we improve about
4:04 your agents.mmd and cloud.md so that
4:06 your agents can work better next time.
4:09 Um, and this tool uh I'll probably do a
4:11 dedicated video about this in the
4:13 future. Uh, but right now I just want to
4:15 do one improvement which is uh something
4:18 I'll just tell first mate. Hey first
4:20 mate, previously we planned an idea for
4:23 backpass which is to allow backpass to
4:26 collect agent sessions across multiple
4:28 remote machines. Um uh I think the plan
4:30 is already there. Can we pull that out
4:33 and then dispatch a crew mate to work on
4:35 that?
4:38 All right. Uh so that's how I uh ask
4:41 first mate to do one task. Uh and first
4:43 mate will look into um the projects uh
4:46 and figure out which project this is
4:48 about and how to uh find the previously
4:52 um already made plan and use that to
4:54 delegate to another implement uh agent
4:57 to do it. Um you will notice that um
5:00 first made agent is already working. Um
5:02 but we don't see any tool calls. We
5:04 don't see anything in in this uh pi
5:06 agent terminal, right? Um and the uh and
5:09 the only thing we see is this little
5:11 boat uh that is like floating around and
5:13 sometimes the agent uh chain of thoughts
5:15 is showing up as well but it quickly get
5:17 dismissed. Um this is done by a custom
5:21 PI extension that I built. Uh uh it's uh
5:24 it comes with a first mate repo. Um and
5:27 the reason I do this is that I really
5:29 don't need to look at what's the agent
5:32 is doing. It's making all those tool
5:33 calls. It's reading files. It's doing
5:35 this and that. um I don't actually need
5:38 to know that most of the time those
5:40 things are distractions and noise. Uh so
5:42 I built this uh little custom uh
5:45 extension called com uh com um and this
5:49 calm uh command in pi will basically
5:51 allow me to hide all those noise and
5:54 just show this little boat that I uh can
5:56 allow me to know the agent is working.
5:59 It's not stuck. Um, if I do want to see
6:01 uh what's kind of tool calls were being
6:03 made, I can just type uh com uh slashcom
6:07 to toggle uh this uh details. So now I
6:10 can see, oh, it's making this tool call.
6:11 It's uh spawning a crew mate, right? Um
6:14 so yeah, that's what the agent is doing.
6:16 But most of the time I just turn on com
6:18 mode and I just uh uh don't need to look
6:21 at all those noise. Um and then that
6:24 allows me to focus. that allows me to
6:26 actually think about what do I actually
6:28 need to do next, right? Uh so that's
6:31 what's important in not looking at the
6:32 tool cost and everything. Um so one
6:35 thing I do want to uh show here um okay
6:39 uh first mate said uh it's found uh the
6:42 plan and dispatched it. Um so now we can
6:45 see there is a crew mate here uh right
6:47 uh in the left hand side panel uh where
6:49 we can look at all the uh sessions all
6:51 the agents. Uh we can see here there is
6:53 a backpass SSH u this is basically
6:56 another terminal tab uh where u another
6:59 agent has spawn up uh and it's running
7:01 opus 5 uh it's got the requirements and
7:04 it's now building the thing uh it's
7:06 building uh what we uh what I asked this
7:08 is basically a crew mate uh that's spun
7:10 up by first mate earlier um and the
7:13 reason uh we're using opus 5 here is
7:16 that uh if we look uh if we toggle com
7:20 mode off uh and Let's see if we can find
7:23 the uh previous uh tool calls. Um we can
7:28 probably see that um before first mate
7:32 decided to um launch the crewmate, it
7:35 caught a few things. It called this
7:36 quotota axi uh and it used a skill
7:40 called quotota array dispatch. Uh this
7:42 is something that's really important. Uh
7:44 and uh that's why I want to talk through
7:46 this. Um, first mate, uh, when first
7:50 mate is about to dispatch a crewmate to
7:52 do something, it will look at a bunch of
7:55 rules to decide which agent and which
7:57 LLM to use for that crewmate. Um, so let
8:01 me uh turn this back off and uh let me
8:03 show you and let me go find the config
8:06 file. Uh, it's a config file in the
8:08 config directory called crew
8:09 dispatch.json.
8:11 Um, this is my dis uh dispatch rules.
8:14 You can configure yours. Um, and I
8:16 actually don't write this rule file by
8:19 by hand. I ask first mate to uh do this.
8:22 I just tell firstmate what my
8:23 preferences are and first mate will
8:25 configure this file for me. Um, and the
8:27 rules uh we can look through this for
8:29 new feature development work on uh this
8:32 iOS app that I I have always use Fable.
8:35 Um, Fable is like really good at
8:37 building good UI. Um, and this iOS app
8:40 actually uh is a paid app. I really want
8:42 to make sure it's taken good care of. Uh
8:45 so I use Fable for that. Um and the task
8:49 requires uh generating images. Uh if it
8:52 needs images then I use codeex as the
8:54 harness and then GPT 5.6 soul. Um codeex
8:58 has a native tool for generating images
9:00 because openai has the uh image
9:02 generation model right. Uh so I use
9:05 codeex to do that. Um there is also uh
9:08 when the task is technical product
9:10 design architecture um or planning work
9:12 that is like genuinely very difficult.
9:15 Uh so it's a difficult planning work. I
9:17 use fable I use uh Kim K3 I use Astra.
9:22 Uh so I basically allow these three
9:24 models to do this kind of very complex
9:26 and ambiguous planning for me. Uh and
9:28 there's like Y as well. Uh so it helps
9:30 the model uh make the decisions. uh and
9:33 then if the task is a simple bug fix uh
9:36 whose root cause and expected behavior
9:38 is already well defined then I use Luna
9:40 I use Sonnet I use uh cursor uh Gro 4.6
9:46 um and then the default if uh a task
9:48 doesn't fall under any of those rules
9:50 then the default is uh claude opus and
9:53 uh this uh cursor and gro 4.6 six high.
9:57 Uh so that's basically my uh rules for
9:59 how I dispatch uh the crewmates and uh
10:02 when you see I have multiple models
10:05 defined here right so when uh this rule
10:07 matches there is three models that's uh
10:10 available and when this happens uh the
10:14 first mate will look at which uh model
10:18 has the most quotota available and
10:20 choose the one that has the most
10:21 quotota. So I'll show you um how I look
10:24 at my quota as well. I use this tool
10:27 called quota axi. That's another project
10:29 I built. Uh it can give us um this data
10:33 uh where I can just easily monitor how
10:35 my quota is doing. I have a subscription
10:37 from cloud. I have a codeex. I have a
10:40 cursor. I have a gro as well. Uh and
10:43 this is where they uh sit currently. Uh
10:45 I actually took a vacation right before
10:47 this and I have a ton of kota available
10:50 uh which is awesome. Uh so I can build a
10:52 lot of stuff and this quotota axi is
10:54 actually um this TUI is for human but uh
10:58 the default COI is for agent to use. Uh
11:00 so first mate will call quota axi to get
11:03 access to all my quota information and
11:06 use the model that has the most quota
11:08 available so that I don't waste any
11:11 quota. Uh so this is like really useful
11:14 because otherwise I have to constantly
11:16 look at this myself. Um and with like
11:18 people like Tibo constantly resetting
11:21 codeex quota it's really hard to keep
11:23 track of that right uh so that's why uh
11:25 I use uh this um way uh left first mate
11:29 to manage all this dispatching for me uh
11:31 and first mate for this case uh it
11:33 decided to use an opus 5 uh so that's
11:36 why uh it launches uh this opus 5
11:38 crewmates uh under this uh first mate
11:40 structure um so I yeah I don't actually
11:43 look at the the um crewmates um most of
11:46 the
11:47 uh I just think about what I want to do
11:49 next. Uh there is another project um
11:51 that I want to uh make some improvements
11:53 on. Uh I'll show you. There is a project
11:56 I recently built. I really uh find quite
11:59 interesting. Uh it's called Fry with Me.
12:02 Uh and this project uh is a uh it's a
12:05 game basically. Um and let me show you.
12:08 Uh I'll launch a new seed. Uh it's
12:10 basically a game, but it's kind of uh
12:13 it's something to help me relax. I I I
12:15 usually put this on my uh second monitor
12:18 uh when I'm coding and it's just like uh
12:21 I'll turn off sound. Uh it's just like a
12:23 really relaxing uh bird that is flying
12:27 across the world. Uh and this whole
12:29 world is u procedurally generated. Uh so
12:32 it's always different. Uh and I can just
12:34 put this on a second monitor and like uh
12:37 keep focusing on my work. Um, so the
12:40 thing I want to do with this uh with
12:41 this game right now uh is that I want to
12:44 improve some of the visuals uh in this
12:46 game. Uh so I'll just go back to um my
12:50 first mate and say uh tell first mate
12:52 some of the ideas.
12:54 Hey um I want to make some uh
12:56 improvements to uh fry with me. Uh I
13:00 have three ideas. One is that I want to
13:03 prototype uh some better looking snowy
13:06 mountains. Uh so when there's a mountain
13:09 with snow uh right now it doesn't look
13:12 as good. Uh I want to prototype a few
13:14 really goodlooking uh mountains um that
13:17 we can uh render. Uh so that's one.
13:20 Another idea I have is that uh at night
13:23 right now uh we just show a uh night
13:27 sky. We have the Milky Way which is
13:29 good. Uh but I also want to have
13:31 northern lights. Um they should show up
13:33 kind of rand randomly. uh not always uh
13:36 but uh they should look like uh
13:38 realistic northern lights. Um the third
13:41 idea is that right now there's only one
13:43 bird and we cannot choose between
13:45 different kind of birds. Uh I want to
13:47 prototype uh a few different kind of
13:49 birds that people can choose. Um so yeah
13:53 for each of these ideas I want you to um
13:56 prototype three different variants. Uh
13:58 so I can choose uh which one uh I like.
14:02 Um and uh once the prototypes are ready,
14:07 uh ask the crew mates to give me uh that
14:10 in lavish for me to review. And each
14:13 idea should be done by a fable crew mate
14:16 uh in parallel.
14:20 All right. Uh so basically I gave a long
14:22 ramble of uh ideas that I have. Uh I
14:25 like to do this a lot. Um and you can
14:27 see I asked for prototypes. Um and I
14:30 asked the prototypes to be given to me
14:33 uh through lavish which we'll look at uh
14:35 in a bit. Uh it's a really good way to
14:37 visually validate uh the ideas and just
14:40 pick uh very easily and give feedback as
14:42 well. Um and I specifically asked for
14:45 fable uh because uh the reason uh was
14:48 like uh I was looking at the quota,
14:50 right? We have a whole bunch of fable
14:52 quota available. Uh so why not uh use
14:54 that? Uh so I use fable uh to do this
14:57 prototypes uh and uh they usually uh can
14:59 give really good results. Yeah. So um
15:02 this is basically uh while the previous
15:04 backpass uh task is still ongoing uh the
15:07 crew mate is still working on that. uh I
15:09 just keep giving more and more ideas to
15:11 first mate and first mate uh is not uh
15:15 because first mate is not the one that's
15:17 actually doing the work uh it's always
15:18 available to talk to me uh and whenever
15:21 there is some more work uh first mate
15:22 will just spin up more crew mates to do
15:24 that and then come back to me uh and I
15:26 can talk to it as well um if I have more
15:28 like more ideas although first mate is
15:31 working like this boat is still moving
15:33 uh that's saying like first mate is
15:35 working I can just keep typing more
15:36 ideas here I can just talk to first mate
15:39 type more and more prompts and kill
15:40 those prompts. All right, so I don't
15:42 actually have to wait for first mate to
15:45 uh finish up or anything. Uh I just keep
15:47 giving more and more prompts. Um and
15:50 that's how I uh work with first mate uh
15:52 to like get a lot of tasks spun up in
15:55 parallel. Um something else that I also
15:58 uh like to do is um when I work through
16:00 so many projects, there's usually a lot
16:03 of decisions that were previously
16:04 discussed but haven't been made. Uh
16:07 right. Um and and sometimes it's really
16:09 easy to like lose track of which things
16:12 we talk about that have been done versus
16:15 have not been done yet. Um in first mate
16:17 there is a built-in skill called
16:19 bearings that can do this. Uh this will
16:22 basically allow first mate to collect a
16:24 snapshot of all the uh active tasks
16:28 across the fleet and give me a snapshot.
16:30 Um but uh the default bearings will give
16:33 me that uh in the terminal. Uh which
16:36 sometimes is like a little bit hard to
16:37 read. Uh so I actually have a variant of
16:39 that called bearings lavish which will
16:42 get first mate to give me that report in
16:44 lavish. Uh so I'll just show you. Um I
16:47 used the follow-up prompt to cue this uh
16:49 right u behind the current actions. Uh
16:52 so first mate will not run this yet. Uh
16:54 it's queued as a follow-up. So only when
16:57 first mate has done the current set of
16:59 actions then it will uh do the follow-up
17:02 prompt. Uh so this is a good way to make
17:04 sure first mate is not being distracted
17:06 uh it's actually doing things one by
17:08 one. Um if I need to uh actually steer
17:11 first mate uh to do something I can also
17:13 steer instead of follow-up. Uh so
17:15 followup I think is alt enter and steer
17:18 is just enter. So if I type a prompt and
17:20 enter it will become a steer that will
17:22 immediately send to first mate. Um
17:25 that's a PI feature actually. Um and uh
17:28 it's very handy to have a distinction
17:30 between follow-up and steer. Um so we
17:32 can see here first mate has spun up uh
17:35 backpass this crew mates um and
17:37 [clears throat] three uh other fly
17:39 something crew mates right these are the
17:41 three ideas uh that I asked um just now
17:44 and first mate is just finishing up uh
17:46 dispatching all the crew mates uh and we
17:48 can check right it's using fable uh so
17:50 just as we asked u that is something
17:53 that's very useful is like I can
17:55 specifically ask for a certain uh agent
17:58 harness or a certain model to be used uh
18:01 for the task task that I uh am about to
18:03 do. Um this is useful when I have some
18:07 opinion or judgment on what is the right
18:09 model. Um and um yeah uh for different
18:13 tasks I can just easily uh get the right
18:15 model to work on them. Uh and right
18:17 right now uh first mate said all those
18:19 three um fly with me prototypes uh
18:21 underway. Uh and now the follow-up
18:24 prompt bearing stavish uh just uh got
18:26 sent right. Uh so that's how a follow-up
18:28 prompt work. All right. First May just
18:31 brought up this uh lavish uh report um
18:33 this uh bearings report in lavish um and
18:36 it's a really uh nicely structured um
18:39 like uh interactive HTML that has uh
18:43 what's uh what's charted next uh what is
18:45 currently underway. Uh these are the
18:47 things that's already happening and uh
18:49 what's recently landed at the top
18:51 there's like all these captain's call
18:53 these are the decisions I have to make.
18:55 Uh so let me look through this. These
18:58 were usually like things that were
18:59 previously discussed uh and haven't been
19:02 done. So uh it's good to u make a
19:04 decision on. So there's a workaround for
19:07 lavish onboard. Uh this one yeah I
19:10 remember this one but I don't want to do
19:11 that right now. Uh I just decide claude
19:14 exit confirm dialogue. Uh this is for
19:16 first mate. Uh and uh Claude recently
19:18 introduced a new dialogue where um when
19:21 you try to exit claude when some
19:23 background tasks are running uh it will
19:25 show up a dialogue that blocks the exit
19:27 which is really annoying. Uh so I think
19:29 we actually have to do this uh treat as
19:32 non uh non wedge. Yep.
19:36 Uh this le props up sub uh yeah this one
19:39 I remember I I don't want to do that
19:41 right now. Um uh and I'll just look
19:44 through like all these decisions. These
19:45 were usually like things that we
19:46 previously discovered. Uh herder missing
19:49 end points recreate. Yep, that's a bug.
19:51 Uh keep refuse escalate. Um
19:56 yep, that's the right behavior. Uh URL
20:00 wrap. Uh this is for the ship app. Um
20:02 and this is a bug uh will uh we'll fix
20:05 now. Uh ship a follow-up. Um this is a
20:09 another improvement for ship uh for a uh
20:12 first-time user experience uh to teach
20:14 user about the multiplexer. Uh this is
20:16 quite complex. Uh so I'm going to keep
20:18 that held uh and discuss that a little
20:21 bit deeper. Uh this is the diaglide
20:23 banner. Um yeah, this one I actually
20:25 want to build now. Uh so I'll do that.
20:28 Uh design kit mock removal. Yep, I
20:31 remember this one needs to be done. Uh
20:33 I'll decide as well. Um yeah, you can
20:36 see there are quite some decisions,
20:38 right? Uh because I'm walking through a
20:39 lot of different projects and uh these
20:42 projects as I walk through them uh I
20:44 usually have like a lot of discussions
20:46 with first mate and some of the
20:47 decisions I just haven't made. Um so uh
20:50 it's good to have this like first mate
20:52 keeping track of that for me. Um dial
20:55 nested fan editor. Yep, I need that now.
20:58 Um what else? Drag into group. Uh yeah,
21:03 this is uh where like um users can
21:06 customize uh the dial in the ship app.
21:09 Um I will do that later. Um so okay, so
21:13 all the decisions uh we have recorded uh
21:16 the follow-up. Uh so I'll just send this
21:18 back. Yeah, we can see here this working
21:20 spinner. That means uh the feedback uh
21:22 was sent back to first mate. Uh and uh I
21:25 can actually just end the session now.
21:27 Uh if I go back to first mate, yep,
21:29 first mate is now um having a boat. uh
21:31 which means first mate is working. Um so
21:34 it's likely that first mate just
21:35 received the feedback and is now acting
21:37 on them. Uh we'll give first mate a bit
21:40 of time to see uh what first mate does.
21:42 Okay, here we can see uh first mate just
21:44 got back to us. Uh it said um the uh the
21:48 four uh decisions about first mate uh is
21:50 listed here. Uh actually there's like
21:52 nothing needed. Uh the one thing I
21:55 decided to build was actually already
21:56 released. It's already in the codebase.
21:59 Um so uh ship uh we decided to um build
22:04 this now build this now and fix that and
22:06 prioritize this. Uh so there's a lot of
22:08 work on this ship project and we can see
22:12 um the work is actually being routed to
22:14 this uh second mate. We can see there's
22:16 a crew mate under here that's uh
22:18 currently running. Um second mate is
22:21 basically a way to scale up uh first
22:23 mate's charter. Um so you can see as we
22:25 give more and more tasks to first mate
22:28 uh we already have four tasks right um
22:30 if we keep giving more and more tasks um
22:32 to first mate at some point you will
22:35 realize oh first mate is like way too
22:37 busy uh because it's always
22:38 orchestrating those tasks and have no
22:40 time to even talk to me um so at some
22:43 point you will have to scale up and this
22:45 is uh what I did I basically created a
22:48 whole bunch of second mates to own
22:50 different domains um of the charter so
22:52 these second mates uh ship
22:54 uh owns everything related to this ship
22:57 app. So every uh piece of work that's on
23:00 this ship app will get routed to this
23:01 second mate. So first mate doesn't have
23:03 to orchestrate all that. Uh it can just
23:05 send the ask to this second mate and the
23:08 second mate will do it. Um and we can
23:10 see here first this second mate is
23:12 already has already spun up this crew
23:14 mate uh for the URL rep bug fix. Uh
23:17 there's a few more that will likely be
23:19 spun up soon as well. Um, every second
23:22 mate is actually a first mate by itself.
23:25 Um, so I can actually just go into this
23:28 second mate and see what it's doing. Uh,
23:30 I can talk to it just like a normal
23:31 first mate. Um, and uh, maybe uh, let me
23:35 show one example. Uh, this is uh, a
23:37 second mate for the Edis wallets app.
23:39 Uh, this app was the app I built in my
23:41 last video. This app is actually already
23:43 released in the app store. U, but I
23:45 actually forgot uh, which features got
23:48 in versus not. So, I'll just ask uh
23:51 which features have already landed
23:54 that's not released to the app store
23:56 yet,
23:59 right? Um so I can just talk to this
24:01 second mate. Every second mate is also a
24:04 first mate. Uh so it will manage its own
24:06 crew mates. Uh it has its own memory and
24:08 uh instructions and everything. Um so I
24:11 can just talk to it. Uh I can also talk
24:14 to it through first mate, right? I can
24:16 ask first mates the same question here
24:18 and first mate will route the question
24:20 to that second mate uh whenever
24:22 appropriate. Most of the time uh I
24:25 actually go with the easy route where I
24:26 just talk to first mate. Yeah. So this
24:28 second mate is now uh trying to answer
24:30 our question uh and we can let it do its
24:33 work. Um and you can see here um there
24:36 is a local versus mini. Uh this is a
24:39 herder feature. So Herder has the
24:41 ability to manage all the agent sessions
24:44 across multiple machines. Um so this
24:47 mini is my Mac Mini uh which is uh uh
24:50 actually on my shelf right now. Um it's
24:52 running headlessly. Uh so I don't
24:55 connect any monitors or mouse or
24:56 keyboard to the Mac Mini. I just let it
24:58 run uh headlessly. And this mini
25:01 actually manages a lot of uh have a lot
25:03 of second mates running on it. Uh so um
25:06 the mini has the second mate for first
25:08 mate development for ship for Eddie's
25:10 wallet for axi for uh there's a default
25:13 one as well. Um so the mini uh has uh
25:16 basically more hardware resources than
25:19 my MacBook. This current local machine
25:21 is a MacBook. Uh it has uh a little bit
25:24 less power uh than what my mini has. Uh
25:26 so I assigned a lot of domains uh to the
25:29 Mac Mini uh so it can do more work.
25:32 Okay. Uh there's actually a lavish board
25:34 that's just brought up to me. Um and we
25:36 can see it's the bird kinds for fly with
25:39 me. Uh this is what I asked earlier,
25:41 right? Uh and it's done by Fable. Uh so
25:43 now it's ready for review. Um it's
25:45 really nice to have this lavish uh
25:47 interactive artifact. You will see um
25:49 the current bird, right? This is the
25:51 current bird. It took screenshots so
25:53 that I can see what's the current bird
25:55 looks like. Uh and
25:58 board soaring raptor. Okay, this is the
26:01 prototype, right? So, this is a new kind
26:02 of bird. Uh, and it's giving me this
26:05 preview. Uh, this is really nice. Uh, I
26:07 I really like um looking at this
26:10 previews. Um, so I actually like this
26:12 one. Uh, this this is okay. Uh, what is
26:15 this slender swallow? Uh, what is a what
26:19 is a slender swallow? I I don't know
26:21 either of those words. Um, but uh it it
26:25 looks nice. Uh, it's okay. This one I
26:28 probably will also keep. Uh there is a
26:30 large ocean glider. Okay, this is just
26:34 like the current one, right? Like it's
26:35 uh a little bit different but very
26:38 similar. Okay, there's a long necked
26:41 crane. Oh, cranes. I like cranes. Uh
26:44 they are good. What is this soft night
26:48 owl? Wow, it has so many prototypes.
26:50 It's done a lot of work for us. Um so,
26:53 okay. Uh so there's an owl. I kind of
26:55 like this owl as well. It's like round
26:57 and cute. Um, so, uh, what do we need to
27:01 look at here? Each kind closer. Okay,
27:03 closer. Uh, okay, that's closer. Um, it
27:08 actually explained, uh, like the key
27:10 features, um, of each, um, bird. Uh,
27:13 that's really nice. Uh, but I think I
27:15 already like have seen enough about
27:17 these birds to know what I like. Uh,
27:19 usually at the bottom it will list uh,
27:21 the decisions for me to make, right? So,
27:23 recommendations. Uh, carry forward,
27:25 carry forward. Uh oh, it actually um it
27:30 actually recommended to iterate before
27:32 deciding um okay so uh let's pick right
27:37 um current bird uh current birds we
27:40 don't need to do anything right um broad
27:44 this raptor yes uh the swallow I uh I I
27:49 like it um the glider uh the glider is
27:53 kind of like uh the same as the current
27:55 one so I'm not going uh want it. Uh I
27:57 need the crane. I need the owl. Okay. Uh
28:00 so yeah, these are our decisions. And
28:03 we'll just kill this uh and send it
28:06 back. Uh I'll just say like uh let's
28:08 build uh the birds we decided. Okay. And
28:13 send it an end. And that's it. That's my
28:16 feedback back to Fable. and Fable um
28:18 that crewmate who uh prototyped this
28:21 should uh receive my feedback about
28:24 which birds that we wanted to forward.
28:26 Um and uh that's it. Uh so that's the um
28:29 only thing we had to do with that
28:32 prototype. Um we can see here uh ship
28:35 has already spun up three ship crew
28:37 mates, right? Uh working on three things
28:39 in parallel. So right now how many do we
28:41 have? We have one, two, three, four, uh
28:44 five, six, seven. We have seven crew
28:45 mates working in parallel. Um, and we
28:48 can keep giving more. Like first mate is
28:50 idle right now, right? First mate is not
28:52 doing anything. We can just keep giving
28:53 more ideas. Um, I uh that's what I will
28:56 typically do. I just keep giving more
28:58 and more. Um, and this edi wallet just
29:01 answered our question as well. The
29:03 second mate, uh, it landed since this
29:06 not released. Uh, there's a few Okay,
29:08 there's a few new userfacing features
29:10 that's landed but not released. Uh, auto
29:13 pay local. Oh, these are not released
29:15 yet. Okay. Uh yeah. So now I can decide
29:18 uh do I want to like release those
29:20 features. Uh but I'll probably put that
29:22 aside for now. Uh we have enough uh to
29:25 like work through here. Yeah. So while
29:27 we wait for these current uh work items
29:29 to uh finish, uh something I want to
29:30 show you that's really cool uh is that
29:33 uh I have a Discord channel here uh
29:35 built with We actually have a lot
29:37 of cool people uh in this server now. Uh
29:39 there's a lot of people online and uh I
29:42 think there's like more than a thousand
29:43 2,000 people now uh in the server. Um so
29:47 um we have um like constant discussions
29:49 about first made about uh models and
29:51 harnesses uh as well. Uh it's a really
29:54 cool community um and if you uh want to
29:57 build with agents uh you enjoy
29:59 discussing like tips and tricks with
30:00 others uh this discord server is a
30:02 really good place. Uh but the thing I
30:04 want to show you is like uh I have this
30:06 bug reports channel uh that I usually
30:09 come here uh to look at what things uh I
30:11 should be fixing. Um let me see uh what
30:14 I haven't looked at yet. Um I think this
30:17 one I um probably haven't looked at yet.
30:19 So this one uh what is this? Um
30:22 [clears throat] uh it's a treehouse.
30:23 Okay. Treehouse is another project I
30:25 have. Uh and uh it's a bug report saying
30:28 this uh hook is not firing. Okay. So uh
30:32 it seems there's a lot of debug
30:33 information already available. So
30:35 something I will show you here is that I
30:37 can actually add my first mate. Uh so I
30:40 can just uh there's a bot here. Uh
30:42 that's my first mate. I can just ask my
30:44 first mate uh to uh investigate this,
30:48 right? Uh so I can just uh add my first
30:50 mate here. And this bot is actually
30:54 relay uh relaying this uh message back
30:58 to my actual first mate here running
31:00 this local session. Uh so this uh boat
31:02 that's moving is likely uh from that
31:05 mention. So u I can just like basically
31:08 summon my first mate uh this single
31:11 agent session that I have from different
31:13 places. Uh I can right now it supports
31:16 discord and uh x as well. Uh maybe I can
31:19 also show you that. Uh so on X uh I also
31:22 sometimes uh when people report problems
31:24 uh right so this uh uh a person
31:27 reporting something uh saying confused
31:30 by settings send feedback uh in this
31:32 ship app uh okay so here I can also just
31:36 uh add my first mate uh right and say uh
31:43 let's improve uh this confusing uh
31:47 message.
31:52 All right. Um, [clears throat] yeah. So,
31:54 this at uh this mention will also get
31:57 relayed to my first mate session. Yeah.
32:00 So, now if we come back to this Discord
32:02 thread, uh we should see first mate
32:05 reply uh very soon. Now, yeah, it just
32:07 replied uh I captain looking into the
32:09 treehouse predestroy hook uh not firing
32:12 on destroy. Uh we'll report back. Yeah.
32:14 So now if we come back to this X thread,
32:16 uh first mate also replied uh saying I
32:18 captain clarifying that send feedback
32:19 version message. Uh right. So uh that's
32:22 really good. Uh this is just like how I
32:24 uh work across different surfaces. It's
32:27 so nice to have all these messages from
32:29 all these different channels and
32:30 surfaces all funneled into this single
32:33 agent session. Right? So this first made
32:35 agent session literally holds all my
32:37 intent and all the context across every
32:40 project that we have. Uh so it can play
32:42 a really good role in coordinating
32:44 across everything and orchestrating all
32:46 the crew uh to get things done for us.
32:49 Okay, while we wait for um the other
32:51 crew mates to come back to us, uh maybe
32:53 one thing that I want to uh quickly talk
32:55 through here is the context window. Um
32:58 so here you can see um the Gro 4.5 uh
33:01 the default context window limits is
33:03 500k tokens. So here it says we already
33:05 used more than 40% of that. Um and a lot
33:08 of people ask me um whether uh they
33:11 should u manually manage this context
33:14 window and when they should compact when
33:16 they should reset uh and everything to
33:18 keep uh the context window uh efficient
33:20 and optimized. Um so my take on this is
33:24 that there's a lot of things you can do
33:27 uh to manage this context window and
33:29 optimize that and get some savings. Um,
33:32 sometimes you can get the agent to use
33:34 less context to do the same things uh
33:36 and get things done with less cost. Uh,
33:38 sometimes you can also um uh optimize
33:42 this uh so that the agent is a little
33:44 bit smarter because uh if you have a lot
33:46 of context loaded, it can degrade your
33:48 agent's performance as well. Um, so
33:50 there's a lot of things you can do. Um,
33:52 but my take is that I actually advise
33:55 against uh managing that yourself
33:57 manually. The reason is that our most
34:00 precious resource right now, the biggest
34:02 bottleneck across everything we do with
34:04 agents is our attention and time. Uh our
34:08 human attention and time. So uh if you
34:10 use your mental bandwidth to deal with
34:13 this like little optimizations here and
34:15 there, then you don't have enough time
34:17 and enough uh energy to think about what
34:20 should we build and that is actually the
34:23 most important thing. Um so I actually
34:25 think you can just waste a little bit.
34:27 It's okay to not be optimal about
34:30 everything, right? Um there's um there's
34:32 going to be tools, there's going to be
34:34 things that will help us manage that
34:36 automatically. Um and uh eventually
34:38 things will just catch up and those
34:40 features will get built into the harness
34:43 and we don't have to worry about that
34:44 anymore. So right now uh I actually
34:47 suggest what you do is that you set a
34:49 constant threshold. Um so 500k for grock
34:52 is actually a very reasonable threshold.
34:55 Um for codeex uh for cloud uh cloud code
34:58 may be a little bit different uh because
35:00 cloud code uh has a default of 1 million
35:02 tokens as the context window limit. That
35:05 is a little bit too high I would say. Um
35:07 so uh cloud code uh there's different
35:09 settings. I think there's a environment
35:11 variable you can set to uh limit your
35:14 context window size. Uh let me see if I
35:16 can find it actually. Um I have that in
35:18 my dot files. uh files uh if I search
35:23 for auto compaction
35:25 uh yeah so this is the environment
35:28 variable you can set cloud code autoco
35:30 compact window uh and I have that set to
35:33 500k um so that means every time the
35:36 session reaches 500k tokens it will
35:38 automatically compact um and that's all
35:41 I suggest right now um you just set a
35:44 threshold that allows the agent to
35:46 automatically compact uh the session so
35:49 it doesn't become too expensive and too
35:51 uh inefficient. Um otherwise just forget
35:54 about it. Don't think about the context
35:56 window too much. If your brain is
35:58 thinking about the context window all
36:00 the time, you don't have enough time to
36:02 think about what to build. Um so I want
36:05 you to optimize your time and attention
36:08 on what is the right thing to build
36:10 because that is the most important
36:12 thing. If you do that right, you will
36:14 get back much much more value than what
36:17 you can save with this little tricks. Uh
36:20 I hope that makes sense. Oh, and here uh
36:22 actually first mate reported uh the
36:24 treehouse finding right. So uh treehouse
36:27 investigation is done. Finding is here
36:29 not a destroy bug. Uh real defect is
36:31 hooks uh intentionally discarded for
36:34 safety. What? Uh and that drop is
36:37 silent. We dropped hooks. Uh
36:41 okay. Oh, so hooks in the repo is being
36:44 discarded. Uh destroy never run.
36:48 Keep ignoring repo hooks. Uh I now
36:51 remembered that is a security thing.
36:53 Yes. Um so emit a one-time warning. Um
36:58 okay. Uh
37:01 yes. Uh let's ship the warning fix and
37:03 also reply uh to that Discord thread uh
37:06 for what is happening here.
37:10 Um yeah so uh we'll do that uh and that
37:14 is the closure for the treehouse uh buck
37:17 report. Um so there there's a lot of bug
37:19 reports coming in discord uh in GitHub
37:21 issues. Uh I just funnel them all into
37:24 my agent session uh here in the first
37:26 mates and that first mate helped me do
37:28 the investigations uh and all the stuff.
37:30 Uh I didn't even have to look into the
37:32 crew mates that did the investigation
37:34 here right uh so that is the benefit of
37:36 first mate. I just talk to first mate
37:38 and first mate will orchestrate
37:40 everything for me. Uh I don't have to
37:42 like actually juggle between all these
37:43 sessions. uh how many sessions like we
37:46 had like uh I think at some point we had
37:47 nine sessions or 10 sessions and most of
37:49 the time I don't really look at any of
37:51 them. Oh, first mate gave another
37:53 update. Uh so um there is this uh
37:56 treehouse warning fix is dispatched. Uh
37:58 discord update is posted. Um fry with
38:01 [clears throat] me bird clients merged.
38:02 Okay. Uh if you missed it, I did miss
38:05 it. Uh so there's a PR and we can see uh
38:08 this PR didn't even ask for my review.
38:11 Uh and I'll show you why. um is because
38:13 uh I told first mate to do do that. Uh
38:16 I'll show you the rules. Uh so in first
38:18 mate uh I think it's in config uh config
38:24 or in data in data um projects
38:29 uh MD. Uh so in this project MD there is
38:33 a policy being set on every single
38:35 project. Uh so if I search for fly with
38:38 me uh this is uh policy that I set is
38:41 called direct PR plus yolo. Um so this
38:45 basically says first mate you make your
38:48 judgment calls on this uh and every
38:50 change should raise a PR um without
38:53 going through no mistakes uh and just
38:55 yolo merge if it looks good. Um so this
38:58 is for projects where uh I don't think
39:01 uh an a problem will actually cause any
39:04 harm uh because this fly with me uh
39:06 project is just like a toy u no one is
39:08 actually depending on it. So yeah so you
39:11 can see every project has a different
39:12 policy here uh for most of the project I
39:15 have uh I have no mistakes on uh and uh
39:19 some of them have yolo some of them
39:20 don't have yolo. The ones that have YOLO
39:23 on is usually the projects where a code
39:25 change will not get released
39:27 immediately. Um and we have a chance to
39:29 test them out before we uh release them.
39:32 Uh so yeah, this is where um the
39:34 policies are being managed and you can
39:36 tell your first mate as well which
39:38 projects actually need no mistakes,
39:40 which projects actually uh need your
39:42 eyes before merging a PR. Um so this is
39:45 very um helpful for managing different
39:48 levels of uh guardrails. Uh not
39:50 everything need no mistakes. Not
39:52 everything need uh a uh human review. Uh
39:55 depending on how high stake that is. Uh
39:57 and for no mistakes uh for those of you
40:00 who are already familiar with that no
40:02 mistakes uh is a very strong validation
40:06 pipeline that will do adversarial review
40:08 and uh make sure the code change is
40:10 really safe to merge. Uh that takes a
40:13 long time and use a lot of tokens. So I
40:15 don't actually always use no mistakes uh
40:17 for every change I do. A good way to
40:19 think about this is like for this code
40:22 change, would you have asked a another
40:24 human to review this code? Uh if you
40:27 would not have have another code
40:29 reviewer, then you probably don't need
40:30 no mistakes. Um if the code change is
40:33 risky and high stake enough that you
40:36 would otherwise ask a human peer to
40:38 review, then it's probably worth uh
40:40 activating no mistakes to make sure
40:42 that's really good. Um, and I'll
40:44 probably like show you an example of a
40:46 PR that's merged through no mistakes for
40:48 you to see what that looks like. Um,
40:50 there's actually another uh ship uh
40:52 change that's landed as well. Uh, the
40:54 design kit mock removal. Uh, good.
40:57 That's good. Um, I think we just had
41:00 another uh lavish artifact ready for
41:03 review as well. This is the snow capped
41:05 mountains uh that I asked for. Uh, I'm
41:07 very excited to look at what this looks
41:09 like. Uh, what the snow does today.
41:12 Okay. Yeah, I don't need to know that.
41:14 Uh yeah, today uh it's good to uh for
41:16 you to see that it's uh like this and
41:18 it's not like very mountain uh looking,
41:21 right? That's the reason I asked for a
41:24 better snowy mountain. Uh Fable Fable is
41:28 like really uh careful here. It's like
41:30 done some calculations and everything.
41:33 Uh and it's it's got a good like climate
41:36 model. Uh interesting. um three shading
41:40 studies. I did a lot of studies. That's
41:43 why it took so much time. So there is
41:45 this like painted alpine. Okay. There's
41:48 this uh story book cap. Okay. Ah
41:51 interesting. Uh
41:55 uh there's this glacial jade. Uh how's
41:58 this different from the other ones? It
42:01 looks like kind of similar. Uh and uh
42:04 what's this? Carved peaks. The terrain
42:07 study. Oh. Okay.
42:11 Uh oh, this looks good. Uh this is uh
42:15 like it'll go above the cloud. Uh that
42:17 is also nice.
42:20 Uh compare. We can actually um preview
42:22 these different uh variants.
42:29 This is so nice. like um
42:33 uh it's just really good to have this
42:35 visual uh validation for what this is
42:38 actually going to look like. Uh it's a
42:40 really good way to discuss prototypes.
42:42 Um I actually quite like uh these curved
42:45 peaks. Uh this uh look pretty nice. Um
42:48 but I don't uh want to accept this just
42:51 yet. Um I think I actually want this uh
42:55 the mountain peaks to look more like
42:58 Mount Everest. that kind of mountain if
43:00 you know what I mean. Um so I will uh
43:03 give some feedback here.
43:06 Uh this is mostly good. This is a good
43:08 improvements. Uh but I actually want the
43:11 mountain peaks to look more like Mount
43:13 Everest. Uh can you go like find some uh
43:16 photos of Mount Everest uh and K2 um
43:20 those mountain peaks and try to get our
43:23 uh mountains to be closer to that
43:25 looking
43:28 All right. Uh, so that feedback goes
43:30 back to the fable crew mates. Uh, so
43:32 that's my feedback. Um, and let's, uh,
43:35 come back here and we can see, uh,
43:37 treehouse warning fix, uh, is also
43:39 underway. Maybe one thing I'll show you
43:41 is like, uh, you can see like we went to
43:44 the lavish artifact to review stuff,
43:46 right? Uh, and while we are reviewing,
43:48 uh, the first mate has already like
43:50 printed a lot of information. Uh, right?
43:52 It's got so many things. uh and across
43:55 this whole session, did I miss
43:57 something, right? Did I actually look
43:59 through everything First Mate told me?
44:01 It's really unclear. And this is where
44:03 the chat UX is a little bit limiting. Um
44:06 so what I have here is like in First
44:08 Mate repo, there is a built-in skill
44:11 called AOY. It's just a really good way
44:13 to catch up on things. Um so a Hoy
44:16 basically tells First Mate to summarize
44:18 what First Mate has told you since your
44:21 last message. and uh also pull out any
44:24 open decisions that you haven't made
44:26 yet. Right? So uh here we can see uh it
44:28 uh told us uh it's landed uh this bird
44:31 kinds uh this uh mock removal uh there's
44:34 a bunch of things still underway uh and
44:36 there's still some things waiting for
44:38 me. Uh and these things uh I actually
44:40 directly gave feedback uh to the crew
44:42 mate. So uh it should be okay. Uh
44:45 there's an open call uh snowy mountains.
44:47 Yep. Uh so um the uh the reason uh first
44:51 mate doesn't know we already made a
44:52 decision on snowy mountains uh I already
44:55 gave feedback uh to uh the crew mates is
44:57 because I gave that directly through
44:59 lavish and that goes straight to the
45:02 crew mates and doesn't uh go through
45:04 first mate uh so first mate thinks uh
45:06 it's still open uh which is okay um and
45:09 uh very soon the crewmate will give an
45:10 update and first mate will catch up as
45:13 well. Uh so this is basically a good way
45:15 for uh me to get a sense uh did I miss
45:18 something? Is everything okay? Uh just a
45:21 hoy and I can just keep spamming a hoy.
45:23 It's a very cheap uh call. It's this
45:25 skill doesn't cost too many tokens. Uh
45:28 it's basically a summarization across
45:29 the previous session. Just uh make it a
45:32 lot easier uh for me to um keep uh
45:36 getting a very clear sense of what is
45:38 the next step. Yeah, I think for now I
45:40 just want to wait for at least one PR
45:42 that went through no mistakes pipeline
45:45 so I can show you what does a PR that
45:48 went through no mistakes uh and has done
45:50 the more rigorous validation looks like.
45:53 Uh it's very different from the YOLO PR
45:55 that we merged earlier. Oh, here we can
45:57 see something interesting is happening.
45:59 the treehouse warning fix. Uh it's
46:01 already validated uh pushed to this
46:03 commit but we couldn't create a PR
46:05 because GitHub seems to be returning
46:07 internal server error. Um so first mate
46:10 received this update and it basically
46:13 authorized a retry asking the crew mates
46:16 to just try again. Uh it seems it's
46:18 healthy now. Um and gave me this updates
46:20 and I didn't have to do anything. Um I
46:22 didn't uh I may not even be looking at
46:24 this message right now. So this is one
46:26 of the values that you can get from
46:28 firstmates which is that it's an
46:30 orchestrator that will take care of
46:31 these things for you. So you don't have
46:33 to worry about oh there's a GitHub error
46:36 and uh I need to retry. You don't need
46:38 to think about that. First mate will
46:40 just take care of it. Okay we have a new
46:42 lavish board to review. Uh let's take a
46:45 look. Um five kinds. This is a followup
46:50 uh on the five birds. Um I think yeah so
46:55 it's figuring out how do we let people
46:57 choose the birds uh and it proposed uh
47:00 all these different colors as well. Uh
47:02 so each kind of bird can have many many
47:05 different kind of colors. This is pretty
47:06 cool. Um okay.
47:11 Yeah. Looks nice, right? Looks really
47:13 nice. Um okay. So this is pretty
47:16 straightforward. I would say we just do
47:17 it. Um the word opens. Uh oh. How how
47:21 does it open? Okay. Um
47:26 I think that's pretty straightforward.
47:29 Yeah.
47:31 Um
47:33 let's see what decisions do we have. Oh,
47:35 it's even made sure um the UI will work
47:37 well on the phone. Um that's very
47:40 thorough.
47:41 Uh cool. So decisions, recommendations,
47:46 uh decisions for the captain. What does
47:48 the corner word do?
47:50 Uh, opens the strip. Yeah. Uh, grouped
47:54 by kind on colors first. Keep cycling
47:58 kinds. Yeah, I think we should do a
48:01 Yeah, just a straightforward chooser.
48:04 Whose colors fly when nobody chooses?
48:08 Each kind has its own color. Yeah,
48:10 that's good. Uh, what should be promoted
48:13 from this scout? Uh we want uh I want to
48:16 build this um and together with the list
48:20 under Yeah. everything. Okay. Uh send it
48:23 back. Let's build it. Uh oh, another
48:27 board, the Snowy Mountains. Okay. Uh
48:29 that's also ready for review. Okay. So,
48:32 it looked at some real photos of uh
48:35 Mount Everest, right? Uh that's what I
48:36 asked. And it's got these reference
48:39 images. Uh it like this made sure the
48:42 agent actually understood what I mean by
48:45 like goodlooking mountains. Um so this
48:48 is um good. Uh so uh okay.
48:54 Uh oh yeah, this is starting to look
48:56 better because it's got like the rocks
48:58 and um the snow. Um Oh yeah.
49:04 Um okay.
49:08 What else do we need to review?
49:11 Um, okay. So, these are the previous
49:13 variants, right? And I think, uh, the
49:15 agent just introduced this new variants
49:18 D, uh, here.
49:22 Uh, okay, cool. I think this is better.
49:25 Um, so let's probably make a decision on
49:27 this as well. Um,
49:31 compare.
49:35 Uh, okay. Let's see. Uh, I think the
49:38 variant D is the new one. Um, and yeah,
49:41 I think it's like better than the other
49:43 ones. Um, so let's do it.
49:48 Uh, let's do it. Let's do it. Um, D.
49:53 Wait.
49:55 Uh, yeah, it's just straightforward D,
49:58 right? Uh, okay. Let's just choose D.
50:01 Should the mountains themselves change?
50:04 Uh
50:07 what? How does the mountain change?
50:09 Pyramid peaks as shown. Uh taller. Yeah,
50:13 I do want the shapes to change. Uh
50:17 taller and sharper.
50:20 Um okay, cool. That's it as well. So
50:25 yeah, this is basically how I make
50:27 decisions. uh the agents will bring
50:28 these decisions to me with a lot of
50:31 context with a lot of the um uh the
50:33 homework that I can see um and the
50:36 visuals the prototypes as well. This
50:38 process really helps me understand what
50:40 the agent has done what we are actually
50:42 choosing between and also helps the
50:44 agent get to a good implementation that
50:47 I will be happy with as well. Uh so
50:49 let's get back to this. Um yeah the
50:51 choices are locked in. I think I might
50:53 have made a mistake in the beginning and
50:55 I didn't actually get the northern
50:57 lights uh prototype to start uh because
51:00 there's no crew mates that's doing the
51:02 northern lights. Uh yeah, I guess that's
51:05 okay. I'll do that later. Uh for now uh
51:07 we'll just ignore that. Okay, we just
51:09 have two more PRs landed. Uh the bird
51:11 varants uh selector and the treehouse
51:13 warning fix. Uh let's look at the
51:15 treehouse one. Um because I think this
51:18 one went through no mistakes. Uh and I
51:20 also let um first mate do yolo merge for
51:23 this one because treehouse does not
51:25 automatically release. Uh every time I
51:27 create a new release I will test things
51:29 out as well. Um but even at this PR
51:31 level um no mistakes does a lot of heavy
51:34 lifting for us. Uh so I'll just walk
51:36 through the PR structure here. The
51:38 intent was basically my requirements uh
51:40 for this task. Um and what changed
51:42 there's a quick summary uh uh the
51:45 duplicated uh warning. Yep. Uh that's
51:48 what we asked. Uh and there's a risk
51:50 assessment. This is very helpful because
51:52 um usually when the PR is having a uh
51:56 big blast radius or having some kind of
51:58 unresolved uh problem, it will have a
52:01 medium or high uh risk assessment for
52:03 me. When I see this is low, I already
52:05 know like I don't I probably don't need
52:07 to take too much look. Um and there's a
52:09 testing section. Uh these are the live
52:11 validation that um no mistakes the
52:14 agents in the no mistakes pipeline did.
52:17 Uh so it did uh nine out of 10
52:19 scenarios. Uh and these scenarios are
52:21 basically the things that prove this
52:24 change does work according to our
52:26 intent. Right? So uh it said get this um
52:30 uh this lease will wants on std error um
52:34 repository level hooks remain untrusted
52:36 uh not executed. Yeah. So it basically
52:38 like validated everything that we care
52:41 about this live with the product end to
52:43 end. Uh and there's evidence as well. Um
52:46 and I think there's like yeah there is
52:48 further like uh logs that we can look at
52:51 to uh understand uh what was really
52:54 tested. There was one scenario skipped
52:57 uh and this one is untested uh
52:59 repository config configuration
53:01 documentation directs user to places. Oh
53:04 documentation okay yeah documentation
53:06 does not need a live testing. So uh
53:09 that's probably it. Yeah. So this risk
53:11 assessment and testing uh this
53:12 validation is basically how I develop uh
53:15 confidence in a code change without
53:18 having to look through every single line
53:19 of the code. Usually when the risk
53:21 assessment is not low then I will go
53:23 take a look at the code as well. Uh but
53:25 when it's low and it's well tested I
53:27 don't even look at the code. Uh it's
53:29 usually just good. Okay. We are probably
53:31 not going to wait for every single uh
53:33 crew mate to finish. Hopefully this
53:35 video so far has already given you a
53:37 look into how I work, how I direct a
53:39 large number of agents to work in
53:41 parallel without going insane. I will
53:44 drop a link to everything I mentioned in
53:46 the description of this video. And if
53:47 you have any questions, please just
53:49 leave a comment or join my Discord
53:51 server and I'll try to get back to you.
53:53 Thank you for watching and see you next
53:55 time.
