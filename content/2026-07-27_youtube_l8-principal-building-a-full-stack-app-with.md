---
source: youtube
id: kPN564Kol14
url: "https://www.youtube.com/watch?v=kPN564Kol14"
created_at: "2026-07-27T01:02:34+00:00"
type: youtube_video
conversation_id: null
thread_complete: true
title: L8 Principal Building a Full Stack App with Agentic Engineering
---

# L8 Principal Building a Full Stack App with Agentic Engineering

## Transcript

0:00 Hello everyone. My name is Kun. I worked
0:02 at Meta, Microsoft, and Atlassian as an
0:05 L8 principal engineer. And a few weeks
0:07 ago, I made a video about my agentic
0:10 engineering workflow, which got 600,000
0:13 views. And one of the most popular ask
0:16 from the video was to make another video
0:18 about me using my agentic engineering
0:21 workflow to build a real project from
0:23 scratch. And that's what we will be
0:25 doing today. Let's dive in. All right,
0:28 let's begin. Um I'm starting from an
0:30 empty terminal here, and I already have
0:32 my tools and environment set up, uh but
0:35 I haven't created any project files yet.
0:37 So, I'm going to start with that. Uh the
0:39 first thing I'm going to do is to launch
0:41 Herder.
0:42 Um Herder is kind of like my new tmux.
0:45 It's my replacement for tmux. It's just
0:47 better. Um it manages my agent sessions
0:49 for me, and you will see uh later why uh
0:52 that gives me a really good experience.
0:54 Um and this is an empty session I just
0:56 started. Uh so, uh the next thing thing
0:59 I'm going to do is to set up FirstMate.
1:01 Um FirstMate, if you haven't heard of it
1:04 yet, um it's an open-source project that
1:06 I created, uh which gained some
1:08 popularity, which is nice.
1:10 Um it's a new way of working that allows
1:12 me, uh the captain, uh to talk to only
1:15 one agent, which is the FirstMate. And
1:18 the FirstMate will juggle everything for
1:20 me, uh which really reduces the um
1:23 cognitive load that I have and the
1:25 burden of context switch. So, it makes
1:28 me uh my life a lot easier. Uh the way
1:31 to set this up is really easy. Um so, I
1:32 just come here and clone the repo.
1:35 I'll just come here and do a git clone
1:37 and get this FirstMate repo cloned. And
1:41 I'm going to just uh go into the
1:42 FirstMate repo and launch my agent in
1:45 here. That's how you use FirstMate. Um
1:47 and today I'm going to use the Pi agent,
1:49 uh because I want to use the GPT model,
1:51 and Pi is my favorite harness for
1:53 running any model that is not Claude. Um
1:56 so, I uh I will launch Pi, and you can
1:59 see here um my current model is GPT-5.6
2:03 Soul on X High. And uh I do use this
2:06 model a lot, uh but today uh I actually
2:09 want to give myself a challenge and make
2:11 this a little bit more uh fun and uh
2:14 uncertain. Uh so, I'm going to use Luna
2:18 instead. Um, the reason is that um I
2:22 think a lot of the time we try to use
2:25 the best model possible for everything,
2:27 uh because that's just going to be able
2:28 to get give us the better results,
2:30 right? Um, but actually I want to
2:32 demonstrate that you don't really need
2:35 the best model for everything. Um, you
2:37 actually can get a lot out of these more
2:40 efficient models. I hope Luna doesn't
2:42 backfire on me. Um, so uh the first
2:46 thing uh I will do uh with FirstMate is
2:49 to probably lay down the ground rule
2:51 here that I just want to use Luna. Uh
2:54 so, I'll yeah, I'll do a few things.
2:57 Hey FirstMate, uh let's uh set up a new
3:00 project here, uh a new repo called
3:02 Eddie's Wallet.
3:04 And it's going to be just a local repo
3:06 for now, um probably put a dummy readme
3:09 file in it and make a commit uh just to
3:11 get it started. Um, and uh I want to lay
3:15 down some ground rule here that today
3:17 every task, every crewmate will be
3:20 dispatched to a Pi agent running GPT-5.6
3:24 Luna
3:25 um X High reasoning um level. So, yeah,
3:29 get that set up as well.
3:33 All right, just give this prompt to um
3:35 Luna and let uh Luna start doing its
3:38 work.
3:39 So, um yeah, it's running a session
3:41 start script. This is how FirstMate
3:44 works. Uh FirstMate has a bunch of
3:45 scripts to handle the deterministic uh
3:48 aspect of uh running this uh whole
3:51 FirstMate thing.
3:52 Um, and it will call some skills, it
3:54 will do some of the scripts.
3:58 What I typically actually do is to
4:00 ignore all this noise because FirstMate
4:03 is just calling the tools, calling the
4:05 scripts it needs,
4:07 calling the skills to do its work,
4:09 right? I don't really need to look at
4:11 which tools it called and etc. etc.
4:13 That's not super useful for me. So, I
4:16 actually have this calm mode.
4:18 This is something that comes with
4:20 FirstMate and it's only possible for the
4:24 Pi agent. It's not available for other
4:26 agent harnesses yet. In the Pi agent,
4:29 FirstMate comes with this calm mode. If
4:31 I turn this on, then all those noise
4:34 disappears.
4:35 The only thing that's going to show in
4:37 the terminal is my prompt and
4:39 FirstMate's response. So, I don't really
4:42 need to look at all the tool calls and
4:44 everything, which makes the experience
4:46 really clean. And that is how I want to
4:48 work with FirstMate typically. I think
4:51 with less intelligent models that we had
4:54 maybe like a year ago, two years ago,
4:56 it's really useful to look at what the
4:58 agent is doing, which tools is calling,
5:00 which files is reading, etc. etc.
5:03 because
5:04 sometimes it will make mistakes, right?
5:06 It will go down a wrong path. And if we
5:08 can look at what it's doing, we can
5:10 steer it. We can actually ask it to say,
5:12 "Hey, stop. That's the wrong thing to
5:14 do."
5:15 But with today's models, it's actually
5:18 more and more rare that I need to steer
5:20 the agent that way.
5:22 So,
5:23 I just find it's less useful now to look
5:25 at the tool calls and everything. So, I
5:27 did this calm mode to just help me
5:31 ignore all those noise.
5:33 So, now yeah, FirstMate said, "Captain,
5:36 Eddie's wallet is set up." Um
5:39 Okay. Um
5:42 It's locally in here and readme stairs
5:44 initial commits. Okay. Crew dispatch.
5:47 Okay, so it's basically done what I
5:49 asked, which is good. Now, I'm going to
5:52 talk to first mate about this project,
5:56 what I really want to build, right? So
5:58 I'll just tell first mate the same time
5:59 I tell you guys.
6:01 Hey first mate. Now this Eddie's wallet
6:04 project is a
6:06 um
6:07 it's an app that my son Eddie told me to
6:10 build for him. Uh it's a it's an app for
6:14 children to manage their allowances. Um
6:17 so right now we sometimes write this
6:19 down in a notebook. Sometimes we just
6:22 try to remember it, but it's really hard
6:24 to manage once we have like a bunch of
6:27 things, a bunch of rules for how he gets
6:30 allowance and how he spends it. So I
6:33 want to use this app for as a tracker
6:36 for Eddie to manage his balance. Um I
6:39 also want to actually
6:42 take this as an opportunity have this
6:45 app have some educational value to teach
6:48 Eddie
6:50 the basic financial concepts like
6:53 balance,
6:55 loans, and how credit cards work, right?
6:59 How he makes payment back for a loan,
7:03 things like that and interest for the
7:06 money he's saving in the in the in the
7:09 account. So I think we should try to
7:12 have this app introduce kids to these
7:16 concepts gradually in a natural way
7:19 in a way that they can understand.
7:21 So this app is probably iOS only for now
7:25 because Eddie uses an iPad most of the
7:28 time. And I want this app to have a
7:31 parent mode and a child mode. So in the
7:35 parent mode I can deposit and I can
7:38 manage withdrawal.
7:39 In child mode that's what Eddie use Uh
7:43 and Eddie can use the child mode to um
7:45 look around and see how much balance he
7:48 balance he has.
7:49 Uh is he taking a loan, etc. etc. It's
7:52 basically a read-only mode. Um
7:55 So, that's probably like the high-level
7:57 requirements. Um I haven't thought
7:59 through all the details yet. Um but
8:01 there's a few things I want to do. Um
8:03 first, I want to do a market research to
8:06 see whether such an app already exist.
8:10 Because if it already exists that does
8:12 exactly what I described, then I'll just
8:14 install the app for him. Uh if it
8:16 doesn't exist, then that's an unique uh
8:19 gap that we can build an app to fill.
8:22 Um but pay attention that I want to um
8:25 make sure the money in this app is
8:28 virtual, it's not real money, right?
8:30 It's just a virtual wallet tracking
8:32 these numbers.
8:34 Uh the other thing I want to make sure
8:36 is like uh the data is portable and
8:39 stored in the cloud. Because
8:42 uh I may want to use my phone to manage
8:45 uh the deposit and withdraw not on the
8:47 same device as Eddie's iPad. Uh and
8:50 Eddie sometimes may switch devices. Uh
8:53 and the data should be visible on all
8:55 the devices he use.
8:56 Uh he has a Mac um and has a an iPad. Uh
9:00 for now, we just worry about iOS. Um but
9:03 uh knowing that he has multiple devices,
9:05 I think we have to persist the data in
9:07 in the cloud.
9:08 Um what else? Uh I think that's it. Uh
9:11 that's for the market research. We want
9:13 to make sure uh such an app doesn't
9:15 already exist. Um
9:17 The other thing I want to do in parallel
9:19 is to look into the technical aspect of
9:21 this. How would we approach building
9:24 this full stack um end to end, right?
9:27 So, those are the two things I want you
9:28 to kick off in parallel.
9:32 Okay. Uh so, you you you can see that
9:34 was a long rambling, right? It was a
9:37 long rambling of the requirements and my
9:39 idea, my thinking, uh what I was uh
9:42 trying to get done. Uh 3,000 characters
9:45 uh is a lot. Uh so, this is typically
9:48 how I kick off a new project. Uh I just
9:50 ramble. Uh I talk, try to explain
9:54 everything I have in mind to FirstMate,
9:57 and let the agent uh figure things out.
10:01 Um
10:01 There's a lot of context, a lot of
10:03 requirements, a lot of ideas I mentioned
10:05 in there. Uh it will try to rationalize
10:07 that. And FirstMate here should respond
10:09 to what I asked. Uh I asked for two
10:11 things in parallel. One is the market
10:13 research, and the other is the technical
10:16 planning, right? Uh so, uh I think very
10:19 soon FirstMate will probably like kick
10:21 those things off. Uh so, let's see.
10:25 Um so, it's not showing me any of the
10:27 tool calls, uh which is nice. I don't
10:28 really need to look at that. Uh what I
10:31 can uh see here is the uh token count to
10:34 know it's actually doing, it's not stuck
10:37 or anything. Uh so, we can see like the
10:39 token um uh counter has been moving. The
10:42 context window is already at 24 uh
10:45 percent of the 20 uh of the 272k.
10:49 Um
10:50 This is the default uh
10:52 uh cap for GPT models right now. Um I
10:56 think there was a um a bug Open AI
10:59 reported a while ago that if your
11:02 context uh if you send a request that
11:05 has a higher context uh size than this,
11:09 then the request will be charged higher
11:11 than usual. Uh so, that's a reason why a
11:14 lot of people are saying, "Oh, Codex is
11:16 draining my uh quota very quickly." Um
11:20 so, I capped this at two um 272k
11:23 uh to be the safe um cap for how large a
11:27 request can be. Okay, so here FirstMate
11:29 said, "Captain, both scouts are
11:31 underway." Uh so, here we can see uh
11:33 actually first mate already spun up two
11:37 uh tabs here. The first tab is a market
11:39 research, and the second tab is a
11:42 technical research. Right, so this is
11:44 how first mate works. Uh it first mate
11:47 does not try to do everything by itself
11:49 because if it does so, it will get stuck
11:53 um and it will get too busy, right? It
11:55 will do um it can only do one thing at a
11:57 time. Uh it will uh get stuck handling
12:00 all
12:01 um by delegating these tasks to um these
12:04 crewmates, um
12:06 uh first mate can get a lot of things
12:08 done in parallel. So, now we have a
12:09 market research, we have a technical
12:11 research both being run uh in parallel
12:14 by two different agents.
12:15 Uh and we can validate uh these agents
12:17 are also running uh GPT 5.6 Luna on X
12:21 high uh as we asked.
12:23 Uh so, this is what we ask for this
12:25 first mate, uh and something I maybe uh
12:28 maybe interesting to show you is uh my
12:31 quota.
12:32 So, I have this uh baby menu widget here
12:36 uh that shows uh tracks my quota.
12:39 I have my cloth quota here
12:41 um uh and I have my Codex quota here. I
12:44 have uh Kim me subscription as well uh
12:46 and I already used up my Grok uh quota.
12:49 Uh so, I can see all the quota here uh
12:51 and it's really nice. Uh today we got a
12:53 reset uh from Tebo,
12:56 uh which is uh
12:57 which is really good. Uh Tebo here uh
13:01 has been giving me
13:03 uh giving us resets all the time. Uh and
13:06 that's why I still have so much quota
13:08 left for uh Codex. So, this is basically
13:11 how I track my subscription quota across
13:13 these different uh plans. Yeah, it's
13:15 still working. Uh we can probably um
13:17 just wait until it come back to us. Uh
13:20 actually, one thing that would be uh
13:22 cool is to turn on the fast mode.
13:24 Uh so, I have this uh Codex uh fast
13:28 extension in pie that allows me to
13:30 control whether I want the fast mode. Uh
13:32 so, I'll just uh do a Codex fast on.
13:35 Uh this will turn on fast mode and
13:38 request from now on uh from this session
13:41 uh should become faster. Um I actually
13:43 don't know whether this affects the
13:45 other sessions or not. Uh let's take a
13:47 look.
13:48 If I run next
13:50 uh
13:51 fast here.
13:53 Uh it says it's on already. Okay. So, uh
13:56 turning on the Codex fast mode uh in
13:58 this extension actually affects all the
13:59 sessions, which is nice. Uh so, that's
14:02 what I want. Uh so, this should make us
14:04 get the results a little bit faster, but
14:06 it will cost us more. Uh so, the fast
14:09 mode here uh is actually uh getting uh
14:12 spending more to get a lower latency. Um
14:15 so, typically I don't turn on this fast
14:17 mode uh because GPT models are already
14:19 pretty fast. Yeah, but today uh because
14:22 we're running a demo, uh I think it's
14:24 probably better to let it run faster.
14:26 The cool thing about FirstMate and the
14:28 crewmates is that we can really observe
14:31 what it's doing just like a normal agent
14:33 uh because it is a normal agent running
14:35 in a normal uh hurdle tab, right? So,
14:38 this is better than uh how sub agents
14:41 work in most agent harnesses, where it's
14:44 really hard for you to look at what is a
14:46 sub agent doing. And it's also hard for
14:49 you to steer a sub agent, right? Uh you
14:52 can uh here uh with FirstMate I can
14:55 actually come into this sub agent
14:56 session uh and it's just a normal agent
14:59 running a um pie agent or cloud code, uh
15:02 which I can steer from here. Uh if I see
15:05 that the sub agent, this crewmate, is
15:07 doing something wrong, I can just talk
15:09 to it here um instead of having to
15:12 manage everything without the
15:13 transparency and observability uh that I
15:17 have now.
15:18 So, here we can see this market research
15:20 agent um is actually generating a
15:23 report, right? So, it's writing a
15:25 report, uh 100 lines.
15:27 Um once it finishes writing this report,
15:29 it will probably get back to the main
15:31 agent.
15:32 Uh so, this is the market research. The
15:35 technical research is still doing a
15:37 bunch of things. Uh what is it doing?
15:39 Uh it's printing, uh
15:42 it's tooling. Okay, it's actually
15:45 building a backlog.
15:47 Uh it's trying to make a note of which
15:50 decisions uh are open, uh which
15:53 decisions I will need to make later on
15:55 uh to help it finalize the plan, which
15:57 is nice. Uh so, it's managing the
15:58 backlog by itself.
16:00 Uh it's doing some fetch, uh but uh
16:03 okay, yeah, it's fetching Apple
16:05 documentation. Okay, because I asked for
16:07 an iOS app, probably.
16:09 Uh so, that's nice. Uh it looks like
16:11 they're on the right track. So, um most
16:13 of the time when I work with Firstmate,
16:16 I actually don't even look at any of the
16:18 crewmates. Uh that was just like to show
16:20 you um how it works.
16:23 Um I just uh let Firstmate uh handle all
16:26 the juggling for me, and I only talk to
16:29 Firstmate.
16:30 Um since the market research crewmate uh
16:33 just uh finished generating the market
16:35 research report, it should come back to
16:37 the Firstmate now. So, now uh we can see
16:39 Firstmate is working, right? This is
16:41 probably Firstmate receiving the report
16:44 from the uh uh from the crewmates.
16:46 Uh and now Firstmate is uh trying to
16:48 rationalize reports and probably will uh
16:51 come back to me uh in a little bit.
16:53 Okay, yes, we can see um Firstmate
16:55 actually already torn down uh the market
16:59 research uh agent session, right?
17:01 Because that session is done. The report
17:02 is generated, uh so there's no need to
17:05 keep that agent around. So, it closed
17:07 the tab for me.
17:08 Um typically uh before I had Firstmate,
17:12 that would be something I would be
17:13 doing. Uh I would create all those uh
17:16 terminal tabs, and I will look at which
17:18 agent is done, which is not. And I once
17:21 it's done, I got the report, I will
17:23 close the tab myself.
17:25 But now it's all Firstmate doing that
17:27 for me, and I don't even need to worry
17:28 about that. So, okay, the market scout
17:31 finished. It found no current iOS app
17:34 matching the full brief, okay?
17:36 Virtual only money, parent controlled
17:39 rights, child only. Okay, okay.
17:42 So, that means there's some value for us
17:44 to build it. Closest references. So,
17:47 these are
17:49 some apps, right? Some apps that are
17:52 doing things that are similar.
17:54 This is Kiddle Bank. It's web only.
17:58 Okay, so the recommendation, so I
18:00 typically I trust this because it it did
18:03 look like it searched around and looked
18:05 for similar apps.
18:07 And but different apps have some
18:09 different strengths, but none of them do
18:11 exactly what I described. Which is a
18:15 good validation that maybe we're onto
18:17 something.
18:18 So, recommendation is to prototype Atlys
18:21 Wallet rather than installing
18:23 replacement. Okay, I agree. So, that's
18:26 great. The market research told us that
18:28 we probably should build this. So, now
18:31 I'm going to be waiting for the
18:32 technical research to figure out how we
18:35 would go about that, right? So, yeah,
18:36 let's see what kind of technical
18:38 research reports will come back to us.
18:40 Now, Firstmate has also closed the
18:43 technical research agent session as
18:45 well,
18:46 and it said it's done.
18:47 Recommends a native SwiftUI iPad app.
18:52 Superbase auth, okay. Postgres row level
18:55 security. Immutable server-side ledger,
19:00 Swift data,
19:01 local cash. Oh, okay.
19:04 No real money integrations. I already
19:07 have some reaction to this.
19:09 First is that I don't really want to use
19:11 uh Superbase. My experience with
19:13 Superbase is that uh once you grow, uh
19:16 once you have more complexity, it starts
19:18 to become expensive. Uh but I think for
19:20 this app, I don't even have a single
19:22 user yet. Uh I only have Eddie as a
19:25 single user uh and myself. Uh it's uh
19:28 and my wife. Um it's not really going to
19:30 need any kind of scale. We can probably
19:32 handle that ourselves without paying for
19:34 a SAS. Um what else uh in this that uh
19:38 it's interesting? CloudKit.
19:41 Um
19:42 hm
19:44 Okay.
19:46 Um
19:49 before implementation, identity and
19:52 pairing. Okay. So, there's actually
19:54 quite a bit of ambiguity here. Um and
19:57 what it's telling me right now uh in
19:59 this reports, I don't really want to
20:01 read this reports.md
20:03 uh because it's going to be like just a
20:05 long wall of text. What I uh typically
20:07 do is to ask Firstmate to um
20:11 do this review with me uh in a better
20:13 format.
20:15 >> [gasps]
20:15 >> Hey Firstmate. Uh I think uh I'm settled
20:18 on the market research. Uh that's a good
20:20 result. Uh I now want to discuss a
20:22 little bit more about the technical
20:24 research. Um so, I want to discuss this
20:27 in Lavish. Uh can you spin that up? Uh
20:30 the the parts I want to discuss the most
20:32 uh is the backend. Uh especially the
20:35 database. Uh current recommendation is
20:37 Superbase, but I don't uh want to jump
20:41 into the conclusion that we need to pay
20:43 for a SAS.
20:44 Um the other solution that I like uh is
20:47 to get a VPS uh and just host that
20:49 ourselves for now. Uh especially when uh
20:52 we don't have many users yet. So, let's
20:54 probably put that on the table as well.
20:57 Um and if we do that, we need to figure
20:59 out what is our authentication uh story.
21:02 Um on iOS, I think we have to support
21:05 Apple uh Apple sign in.
21:08 So, that's probably going to be the
21:11 solution for now.
21:13 I think later on we will also want to
21:16 support Google sign in
21:18 because that's going to be
21:19 friendly to a wider set of users,
21:22 but we are not going to implement that
21:24 today.
21:25 Today is just about Eddie having a MVP
21:29 working for him. So, yeah, let's take
21:32 those into account and come back to me
21:34 with a
21:36 technical proposal in lavish
21:39 with all the open questions and
21:41 decisions that I have to make laid out.
21:46 All right, so lavish is a tool that I
21:50 built as well. It's basically using HTML
21:53 artifacts for better interactions on
21:56 this kind of planning. You will see that
21:58 in a bit. The report.md I think it's
22:01 like I can actually show you. Let me
22:03 just copy
22:05 uh
22:06 the path here.
22:09 Um
22:11 Okay, and I will spin up another pane
22:14 here and I will just use new them to
22:18 open up this
22:20 markdown file. This markdown file you
22:22 can see it's like recommendations,
22:25 what was inspected, blah blah blah blah.
22:28 Identity.
22:29 It's like it's so much text. If I really
22:33 try to read all this,
22:36 how many lines does it have? 351 lines
22:39 of
22:40 text. So,
22:42 I mean it's a lot of useful information,
22:45 but I just don't really like reading
22:47 this long wall of text. It's also not
22:50 very easy for me to give feedback on
22:52 specific parts of it, right?
22:54 So, now I'm just I asked First Mate to
22:58 use lavish to give me a good technical
23:02 plan. So, let's see what that will come
23:04 up with. First mate here spun up another
23:07 crewmate to do that.
23:09 This is basically how first mate works.
23:11 You will see this over and over again
23:13 that first mate doesn't try to do things
23:15 by itself. It will delegate the task to
23:17 someone else.
23:19 And if we drill into this crewmate, we
23:22 will see
23:23 that
23:24 the crewmate is doing all the work
23:27 which would otherwise block first mate
23:30 doing all these things. So, yeah, let's
23:32 let's the crewmate do his job. So far, I
23:35 think Luna is doing a good job, right?
23:37 Nothing seems quite off yet. So, let's
23:40 go back to first mate and we will just
23:43 wait here. Yeah, so the back end
23:45 research is doing its work. What I
23:47 typically do in this kind of case where
23:49 I'm waiting for some work to be done is
23:51 to think about what else can we do.
23:53 So, here I think the back end is doing
23:56 some research. Let's think about the
23:57 front end as well, right? How does the
23:59 user experience work? So, I'll talk to
24:01 first mate.
24:03 Hey first mate. So, while the back end
24:07 investigation is ongoing, I think we can
24:09 also do some prototyping on the front
24:11 end, right? So, I want to also
24:15 review a lavish plan where we show some
24:19 of the potential user experience, the
24:21 user journey. Let's probably like just
24:24 have a bunch of prototypes of the key
24:27 screens that this app will have.
24:31 And let me get a feel of how they can
24:33 work and I'll give a bunch of feedback
24:36 on the front end experience through the
24:37 lavish
24:39 artifact once we have it.
24:43 Right, so now we are kicking off another
24:47 work stream to get the front end kind of
24:50 prototyped so we can really start to
24:53 nail the experience. This is something I
24:55 do a lot uh where I try to prototype
24:58 multiple things uh at the same time, uh
25:00 so that we can very quickly make
25:02 progress on this kind of full stack um
25:04 projects. So, now we can see FirstMate
25:06 has spun up uh another tab here uh to do
25:09 the UX prototypes, uh and it's coming
25:11 back to me. Um so, FirstMate is always
25:14 ready for interaction because it's
25:16 delegated all the tasks to uh crewmates.
25:19 Yeah, so maybe we can think about what
25:20 else can we do? Um so, uh I actually
25:23 want to better understand uh the other
25:26 similar products, right? Uh because we
25:27 have already done the market research.
25:30 Um FirstMate, uh while we wait for those
25:32 investigations, can we go back to the
25:34 market research and uh can you analyze
25:37 the market research and figure out what
25:40 are some of the interesting concepts the
25:42 other products have that maybe we should
25:44 uh draw as inspiration um and uh should
25:48 consider in our product as well.
25:51 Yeah, so let's uh get FirstMate to uh
25:54 just keep working. Uh don't stop. Um and
25:57 uh the market research probably has some
25:59 interesting uh ideas that we should take
26:01 into account. Um so, yeah, I think um
26:05 here maybe I showed a little bit of my
26:07 uh thought process for this kind of new
26:09 projects. Um I try to understand the
26:11 market, try to understand uh the product
26:13 requirements, um and and then uh figure
26:16 out the technical aspects in uh in the
26:18 same time, uh and try to prototype the
26:20 front-end experience as well. So, let's
26:22 see um what's the market research
26:24 suggest uh suggest?
26:26 A read-only kids view. Yeah, uh I I
26:29 talked about that as well. Um money
26:31 buckets. What is that?
26:33 Uh spend, save, give, goals. Hmm. Okay.
26:38 Uh okay, interesting.
26:41 Um a meaningful activity timeline. Uh
26:46 okay, that's cool.
26:48 Uh that I think we should have.
26:50 Approval requests.
26:53 Um
26:54 uh okay.
26:55 Um
26:56 withdrawals
26:58 needs parents' approval.
27:00 But this is not real money, so
27:04 yeah.
27:05 They can propose actions. Okay, okay.
27:07 Interesting concept. Lessons attached to
27:10 real actions.
27:12 Um
27:14 Ah, okay. After deposit, explain
27:16 balance. Before spending, explain
27:19 trade-offs.
27:20 Uh
27:21 when borrowing, explain principle. Ah,
27:24 okay. This is basically the educational
27:26 aspect that we talked about.
27:28 That's definitely something I want to
27:30 have.
27:31 A virtual loan simulator. Yep.
27:33 That's I want to have as well.
27:36 Uh flexible allowance rules.
27:39 Um okay. That is good because this is
27:44 something that we currently do manually.
27:47 So it's good to have that managed by by
27:49 the app. Gentle gamification.
27:53 Okay.
27:55 Uh Gamification is something that's
27:57 interesting for kids' apps because I I
27:59 have mixed feeling about that.
28:02 I think on one hand, it definitely gets
28:04 the kid more interested. But on the
28:06 other hand, it feels a little bit
28:08 manipulative to kids. So we'll see.
28:11 Uh what we should avoid.
28:14 Yeah, yeah. Heavy ads.
28:17 >> [laughter]
28:17 >> Um recommended inspiration mix. Um
28:22 Privacy, iPad first design, read-only
28:25 child mode, family ledger, recurring
28:27 allowance. Yep. Con- contextual lessons.
28:31 Uh
28:32 Oh, yeah. This is actually really good
28:34 judgment, right? These are the things
28:35 that I said I wanted to have. And it
28:38 actually
28:40 only kept the things that I also thought
28:43 was going to be relevant.
28:45 So that's great.
28:47 Yeah. I think we'll probably like take
28:49 this into our product requirements.
28:53 So, that combination com virtual family
28:56 ledger. Yep.
28:58 Okay, let's see. I think something just
29:01 came back the back end.
29:03 So, here we can see we were previously
29:06 looking at the tabs, right? Herder also
29:09 give us this agents side panel where we
29:11 can see all the agents as well. We can
29:13 see which directory is running etc. etc.
29:16 which agents pie agents. That becomes
29:18 really helpful when we have a large
29:20 number of agents. We can just quickly
29:22 switch around.
29:23 Herder also give us this
29:25 key bind where we can just do this.
29:28 And it will bring up this agent search
29:31 pane.
29:32 And we can very quickly jump to
29:33 different sessions from here as well.
29:36 We can also search by the title etc.
29:38 etc. So, basically Herder the biggest
29:42 benefit of Herder is that it understands
29:45 agents.
29:46 Whereas the traditional terminal
29:48 multiplexers
29:50 don't really understand agents. They
29:51 only understand terminals and panes
29:54 and shells like those kind of things.
29:57 Okay,
29:58 there is a lavish artifact being brought
30:01 up to me in my browser. So, this is when
30:04 the agent has done some planning and
30:06 generated a artifact in lavish. And this
30:09 is the lavish editor.
30:11 It's fixing some layout issues because
30:13 sometimes when the agent generates
30:14 artifacts it will have some UI problems.
30:17 So, it gets fixed before it's presented
30:19 to me. So, okay. Back end review. This
30:22 is the back end review. The short
30:24 version buy operational simplicity
30:26 before buying infrastructure. Okay, I
30:28 like that. What is really saying?
30:31 Recommended hosted Superbase Pro. Okay,
30:35 interesting. virtual money only those
30:40 sound right.
30:41 MVP scale, hosted baseline $25 a month.
30:47 $25, that's still a lot.
30:50 Let's see, identity, that's good.
30:53 Okay.
30:56 Which back end should carry the family
30:58 ledger? Okay, hosted Superbase, that's
31:00 the recommendation.
31:03 The cost is really the thing that I just
31:05 like feel like this is way too much for
31:09 just three users, right?
31:11 Three users would not pay for this much.
31:14 Self-hosted VPS,
31:17 roughly $30
31:19 a month, really?
31:21 Um
31:23 No, that's wrong. It shouldn't take this
31:25 much.
31:27 But that's a knowledge I have.
31:29 Self-hosted
31:30 Superbase,
31:32 CloudKit, iCloud.
31:35 Apple developer membership, I already
31:37 have this. So, yeah, this is the nice
31:39 thing about Lavish is that I can give
31:41 feedback on this. So, given that I think
31:45 this is wrong, I can just say this is
31:48 wrong. I think I have used Hetzner
31:52 before.
31:53 Um
31:55 I think Hetzner offers really low cost
31:58 VPS that can handle
32:01 handle
32:03 what we need. Why am I typing? I should
32:05 be talking. Okay, so I'll queue this
32:07 feedback and it's queued. So,
32:11 what else?
32:12 I think it's probably like made the
32:15 recommendation based on this assumption
32:18 that this is so expensive. Um I think I
32:21 probably want to give this feedback as
32:23 well.
32:25 $25 to $40 a month is still way too
32:28 expensive.
32:30 Right now, we we don't really have many
32:32 users. I don't want to spend this much.
32:35 I think a low cost VPS can give us
32:37 somewhere around like $5 a month.
32:41 Maybe a little bit more but around that
32:43 ballpark. I think we should look for
32:45 options that can allow us to get to that
32:47 level of cost.
32:51 All right, cute those feedback. Now, the
32:54 authority boundary, okay. The phone is a
32:57 client. Postgres is the referee. Yeah,
32:59 that's right. That sounds right.
33:02 So, it it drew this diagram here. So,
33:04 let's see full screen. This is something
33:07 that's also really nice about Lavish is
33:09 that it can just draw diagrams for me to
33:11 see. Let's zoom in a little bit. iPad
33:15 app. Local cash,
33:18 native app sign in, the provider.
33:22 Retry
33:24 and reconcile with a narrow domain RPCs
33:27 going to the membership checks Postgres.
33:31 Okay.
33:33 Okay.
33:35 I think on a high level this is Yeah,
33:37 right. This is not nothing too
33:39 controversial.
33:40 Immutable ledger.
33:44 Audit event. Okay.
33:47 Hmm.
33:48 Do we need audit events encrypted
33:51 export?
33:52 I think it's likely over-engineering a
33:55 little bit.
33:56 Right?
33:57 I I don't think I will need this.
34:00 So, let's just delete.
34:03 Let's maybe give some like feedback. Um
34:07 I'll delete this. I'll delete this. Uh
34:12 I don't think right now we need to worry
34:14 about auditing and export
34:17 all those requirements. Let's keep the
34:20 initial scope minimal.
34:24 All right, cute feedback about this
34:26 diagram as well. It's really useful to
34:28 like look at the architecture here,
34:30 right? Otherwise, we wouldn't have
34:31 discovered that there are some of the
34:33 hidden requirements being baked in
34:35 um to the plan. Um Apple now, this is
34:38 right. Yeah, I don't think I need to
34:39 worry about that. Google later.
34:42 But,
34:43 uh
34:45 yeah, let me look through this. Parent
34:47 has native sign with Apple
34:50 uh exchanges this. Uh okay. So, it's uh
34:52 it's writing this plan with the
34:54 assumption that I will use Superbase, uh
34:56 but I will change that.
34:58 Um
35:00 keep an auth identities table.
35:03 Yeah, that's right. That's what I want.
35:07 Um because that can allow me to um allow
35:09 users to link uh different accounts, uh
35:12 different authentication uh identities
35:14 into the same account.
35:16 Um
35:18 recovery
35:20 uh manage daily backup uh privacy. Okay.
35:25 Um okay.
35:27 So, this uh I think I'm not ready to
35:30 make this decision right now because uh
35:33 I have this feedback. I I I think we
35:35 need to uh make sure we understand the
35:37 cost, the real cost of the VPS options,
35:41 right? Um so, how should a child sign
35:44 in?
35:45 Uh yeah, it's the parent. Uh this I
35:48 think is something we can decide. Parent
35:50 manage profile. Um but, I think uh
35:55 parent
35:57 The parent should be able to set a PIN
36:00 to gate the access uh for parents only
36:04 actions.
36:06 Right? Uh so, that's going to be good.
36:09 What recovery promise do we need?
36:12 Um
36:14 yeah.
36:16 Point in time.
36:18 Hm.
36:20 This this is very expensive.
36:23 Uh daily backup 90 exports. Uh yeah,
36:26 let's uh start with that.
36:29 But um
36:32 But I think we will need to revisit
36:33 these options once we better understand
36:36 the cost the real cost of going with
36:39 VPS.
36:42 Okay.
36:43 All right, sequence. Okay, so let's send
36:47 this back. Maybe let's
36:51 um
36:52 revise this whole artifact based on my
36:55 feedback there.
36:58 Okay, let's send it back. So, the nice
37:00 thing about Lavish, you can see here is
37:03 that I can just interact with the agent
37:05 interactively here, right? I can queue
37:08 the choices I make on the the decisions.
37:11 I can give feedback by annotating every
37:13 element here. I can look at the diagram
37:17 here as well. So, everything is
37:18 interactive. This is much much more
37:21 friendly than reading a long wall of
37:23 text and then tell the agent, "Hey, I
37:26 want to modify that part of the plan."
37:29 Um so, this is just a better experience.
37:32 Let's go back to the terminal. We can
37:33 see here First Mate is doing some work.
37:35 It's probably
37:37 taking my feedback
37:38 into account. So,
37:41 yeah, it's doing some search. It's yeah,
37:43 searching for the cloud pricing now,
37:45 right?
37:47 It's now anchoring its answer for the
37:50 cost based on some real data.
37:53 Key findings.
37:56 Yeah, I think it's probably found
37:58 what we were looking for.
38:00 Um what else? Here we can also see
38:03 follow-up First Mate up watcher. This is
38:08 what's happening here
38:10 is that the UX prototypes crewmate has
38:13 also done its work already
38:16 and it's giving its status updates to
38:19 First Mate. This is how First Mate
38:21 receives those status updates from the
38:23 crewmates. Um and because First Mate is
38:25 working, it's trying to do this um
38:28 work by itself,
38:31 it's now stuck. Um but it's okay because
38:33 this uh status updates will just queue
38:36 uh in these follow-ups.
38:37 Uh and once First Mate is freed up, it
38:39 will read the status updates from the
38:41 crewmates to know uh okay, there's
38:44 another task that's also done. If I
38:46 really don't want to wait, I can always
38:47 go into uh the crewmates window uh and
38:51 look at what is done. Uh it's completed
38:53 a report. Um includes
38:56 uh this uh prototype scope. Okay.
39:01 Um
39:03 Okay.
39:06 It's basically uh it's written in a
39:07 markdown file, right? So, it's not real
39:10 prototypes. I cannot play with it. Uh
39:12 but it's defined the scope, uh which is
39:15 okay. Um but uh let's see.
39:18 Um I think I will likely uh I will
39:21 likely I think I will ask it to um
39:25 build some real prototypes that I can uh
39:27 play with.
39:28 Um yeah, I think I will really want to
39:30 play with some real prototypes. Um so,
39:33 once First Mate is freed up, I'll tell
39:35 First Mate to do that.
39:39 Uh so, here I will uh just tell First
39:41 Mate uh about that.
39:44 Hey First Mate, uh the UX prototypes
39:46 crewmate has already done his work, uh
39:48 but it's written uh the results in a
39:51 markdown file. So, that is like the
39:53 scope definition for the prototypes, uh
39:55 but it's not real prototypes. Uh I want
39:58 you to um ask for real prototypes
40:02 um that I can play with in a HTML
40:04 artifacts in Lavish.
40:06 Um it should be possible without
40:07 building any iOS code. Uh I just want
40:10 you get a HTML uh prototype um and
40:14 focusing on like wireframes, uh like
40:17 just the screens, the concepts, the user
40:19 flow, not real polished UX mocks.
40:23 So, let's do that.
40:27 Okay. So, I killed another message here.
40:31 Once
40:32 First Mate is freed up, it will see all
40:33 these updates. First Mate just revised
40:37 this proposal. So, let's see.
40:41 At this scale, a low-cost Hetzner VPS
40:44 can fit the budget. Okay. It's changed
40:47 its recommendation now.
40:49 Let's see. Budget VPS 5.5. That's nice.
40:53 That I like.
40:58 Budget first. Ops light. Yeah, so hosted
41:02 Superbase has lighter ops.
41:07 Okay.
41:09 Okay, maybe
41:11 maybe there's some truth to it, but I
41:13 just think this is too much. I don't
41:15 want a MVP at this stage to cost me that
41:18 much.
41:19 So, cost is this. Yeah, I I think this
41:22 is realistic. This is more aligned with
41:24 my experience.
41:25 So, I I think this is right.
41:30 Backups at 20%. Okay.
41:33 Yeah, so I think I'm just going to go
41:35 with the VPS. This is This cost is a lot
41:38 easier to manage. Okay, decision A, I
41:41 will go with the VPS.
41:45 This was already chosen.
41:48 This was uh
41:49 This was
41:51 okay.
41:52 This is also This is applicable to
41:58 Okay.
41:59 Uh
42:00 Are we sure this is applicable for VPS
42:04 as well?
42:06 Uh
42:07 Yeah, I think at this point we I'm
42:09 already very confident with uh the whole
42:12 back end part of this. Uh so, I will
42:14 just send and end. Uh and this uh this
42:17 is done.
42:19 Uh so, I come back to FirstMate. And
42:21 FirstMate is now uh seeing all the
42:23 feedback along with the message I queued
42:26 uh earlier. Uh so, now he's going to
42:28 process everything now. FirstMate
42:30 brought up another um lavish artifact.
42:33 And this one is interactive wireframes.
42:36 Um parent writes, "Eddie understands."
42:40 Uh
42:41 Okay. Uh let's see.
42:43 Journey map, welcome family setup.
42:47 Pair Eddie.
42:48 Uh pair, hm.
42:50 Roll gate,
42:52 uh parents dashboard, child wallet,
42:55 activity detail.
42:57 Uh allowance rule, loan and repayment,
43:00 lesson path. Okay, this all makes sense.
43:02 These are uh
43:04 except for this pair Eddie. I don't know
43:06 what pair means. Uh let's see. Prototype
43:08 controls, go offline, sync pending
43:11 changes, reset prototype.
43:13 Uh okay.
43:17 Uh captain's choice. Where are the
43:20 prototypes?
43:22 Uh oh, okay. Playable prototype is here.
43:24 Okay.
43:25 Uh okay, what choices?
43:27 Try the screens first. Uh queue
43:29 feedback. Okay.
43:30 Uh so, let me try the prototype first,
43:33 okay.
43:34 Um
43:35 Start here. This is the prototype. Uh a
43:38 wallet for practice. Um virtual money
43:40 only, create a family. Okay.
43:43 Create family.
43:45 Uh set up Eddie's practice wallet.
43:48 Uh family name is Chen.
43:51 Eddie,
43:53 uh
43:54 unit name.
43:55 Tokens.
43:57 >> [laughter]
43:57 >> Don't use tokens. Uh points.
44:00 Um create family.
44:03 Um
44:03 Use this iPad for Eddie. Oh, pairing
44:06 means another device. Okay. Uh that's
44:09 actually pretty thoughtful because I may
44:11 be setting this up on my iPhone and
44:13 Eddie's going to use his iPad.
44:16 I'll just assume it's on the same iPad
44:18 for now.
44:20 Who's using this iPad? Eddie.
44:23 Uh
44:25 Wait, prototype has a pin already. Okay.
44:28 Um
44:29 Eddie, it's read only. Your balance is
44:32 here. Virtual balance only. Recent
44:35 activity, my loan, next lesson.
44:38 Uh okay.
44:40 Recent activity is already here, right?
44:43 Um
44:44 Okay, interesting.
44:46 Next lesson, borrowing and repaying. Mm.
44:50 Uh
44:51 Uh okay.
44:53 Um
44:55 My loan.
44:57 Uh
45:00 Why does it already have a loan?
45:02 Uh okay.
45:03 Maybe it's mock data. Right. So, uh
45:06 switch person. How do I
45:09 go to a parent? Okay, here.
45:11 Tw
45:13 Unlock parent mode.
45:16 Uh okay. So, in parent's mode, I look at
45:18 his wallet, I can see the balance, I can
45:21 add points. Um
45:23 Uh set allowance. Okay.
45:25 Okay. So, there's already a few things
45:28 that I I have reactions
45:31 to. So, let's see whether the questions
45:33 already covered that. Should Eddie be
45:35 able to ask for points?
45:37 No request. Yeah, no request. If Eddie
45:40 wants to ask for points, he comes to me
45:42 in person, right? Um where should loans
45:46 live?
45:48 Uh card and wallet details for the top
45:51 level.
45:53 Yeah, this is okay. Um how should
45:55 lessons open?
45:57 Short linear starter path.
45:59 Uh uh
46:02 Yeah, Linear is probably better here.
46:06 Okay, so we made some choices. But I
46:09 also have some feedback, right? So
46:12 I think first when we were setting this
46:14 up, we selected
46:16 what kind of currency it is.
46:20 I actually think this should just be the
46:22 local currency of the user like US
46:26 dollars because that's
46:28 what Eddie already uses as his
46:31 allowance.
46:34 What else?
46:36 Set allowance, create loan. I think in
46:39 the Eddie view uh
46:42 uh here
46:44 Next lesson, borrowing and repaying.
46:48 Uh, yeah, this is weird. Um
46:52 The recent activity list is already on
46:55 the Eddie's wallet view, but there is
46:58 another button that says recent
47:00 activity, which is odd.
47:03 Um okay. Yeah, just give some feedback
47:06 for now, but this looks like looks okay.
47:09 The UI is not really like the UI is not
47:13 very pretty or anything, but that's why
47:16 I asked. I asked for wireframes only so
47:18 that we can actually get this prototype
47:20 very quickly and give this feedback. I
47:23 will do UI polish later.
47:26 So the prototype is probably already
47:29 okay for now.
47:31 Uh just address my feedback and that's
47:34 probably okay for now. We don't need to
47:37 update this prototype. Just take my
47:40 feedback into account and write down a
47:43 PRD document
47:45 as a markdown file in the repo.
47:48 Probably as the
47:50 readme file for now.
47:54 Okay, so this is ended.
47:57 Let's come back to first mate. Uh so,
47:59 now first mate should be able to see all
48:02 my feedback um and know that the next
48:05 step is to write down the product
48:07 requirements.
48:08 So, one thing we can see here is that
48:10 the context window is already um getting
48:12 filled, right? It's now 70% of the 272K.
48:17 Um so, once this reaches 800% it will do
48:20 a compaction automatically. Uh
48:23 compaction basically summarizes the
48:25 current uh context window into a much
48:28 more concise uh summary and then
48:31 restarts uh the session. Um so, a few
48:34 things that uh you want to know about
48:36 compaction, um if you are running GPT
48:39 models in Codex, Codex has a server-side
48:43 compaction capability, uh which works
48:45 better than any other compaction that we
48:47 know about. Um but, when you run GPT
48:51 models in other harnesses like Pi Agent,
48:54 uh the server-side compaction does not
48:56 automatically happen because Pi Agent by
48:58 default uses another compaction
49:00 algorithm implemented by Pi. Uh but,
49:03 it's possible to uh use the server-side
49:05 compaction from Codex as well. Uh what
49:08 we can do here is here. Uh there's this
49:10 plugin called Pi OpenAI server
49:13 compaction. This is an extension you can
49:15 install uh into your Pi Agent and will
49:18 make your Pi Agent use the OpenAI
49:21 server-side compaction for any GPT
49:24 models that you run in Pi. That will
49:26 perform better for long-running tasks.
49:28 Uh so, when the task is very long, it
49:30 runs out of context window, uh it will
49:33 do the OpenAI's server-side compaction,
49:36 which is uh the one that performs the
49:37 best.
49:38 Um so, here Captain, I captured the
49:41 wireframe feedback. Okay. A worker is
49:43 now updating uh this readme file. Okay.
49:46 Um so, once the readme file is updated,
49:49 something I will do uh is that um I will
49:53 get this repo, uh, into a GitHub repo,
49:56 uh, and I will open source this.
49:58 So, something I want to do here is, um,
50:01 hey FirstMate, ask the worker, uh, to,
50:04 uh,
50:05 commit the update into the repo, and
50:09 then get this repo published into my
50:12 GitHub, uh, as a public repo, uh,
50:14 because we will need to, uh, do
50:16 something else later on.
50:18 Yeah, so, the nice thing about FirstMate
50:20 is that, uh, you can just keep talking
50:21 to FirstMate about what you want to do,
50:24 and FirstMate will figure out, uh, how
50:26 to actually get it done. So, here
50:28 FirstMate will probably like talk to
50:29 this other, um,
50:31 uh, agent again, uh, to do this
50:33 follow-up requirements that was not in
50:35 the initial scope. Um, so, the, um, the
50:38 crewmate should receive that message
50:41 pretty soon.
50:44 Um, so, if we come back here, uh, yeah,
50:47 you you can see there's already
50:48 steering, "Please finish the readme PRD
50:50 update now, commit it, um,
50:53 and then report." Um,
50:56 that's the message FirstMate sent to
50:58 this crewmate. Okay, FirstMate asked me
51:01 a question.
51:02 Uh, just use my GitHub account, uh,
51:04 kunzhanguid, and uh, my
51:08 uh, local GitHub CLI should have already
51:11 authenticated and have permission to
51:12 operate on it.
51:18 Yep. Uh, so, yeah, it's good that it's
51:21 asked, uh, because, uh, I might have
51:23 multiple identities logged into my
51:25 GitHub CLI.
51:26 Um, so, yeah, let's see. One remaining
51:30 choice before I create the remote.
51:32 Should it stay local only with a public
51:34 GitHub mirror?
51:36 Mm.
51:37 Good question.
51:39 Uh, now, after we have the GitHub repo,
51:42 then we switch to a PR-based workflow.
51:44 Um, and, uh, we don't need no mistakes
51:48 right now. Uh, this is still a very
51:50 early stage product. Uh, so let's stay
51:52 with uh, direct PR.
51:54 Um, and later on once we have a MVP
51:57 built, we will turn on no mistakes to
51:59 have a stronger god rail.
52:03 Okay. So I here I talked about no
52:05 mistakes. Uh, no mistakes is another
52:08 tool I have to have a local validation
52:10 pipeline for every single code change
52:12 uh, to just make sure uh, the change is
52:15 really okay to merge. Uh, because you
52:17 can see here I'm not really reviewing
52:19 uh, the code myself too much. I'm just
52:22 talking to Firstmate here. Um, so I kind
52:24 of need uh, the additional set of god
52:26 rails to help me build confidence that
52:28 the code is going to be uh, of
52:31 reasonable quality. Of course I we will
52:33 test it end-to-end as well.
52:36 Um, so uh, here I uh, the reason I asked
52:39 Firstmate to not use no mistakes right
52:41 now is because we don't have any code
52:43 yet, right? Uh, all we have is
52:45 prototypes. Um, so when we are building
52:47 prototypes I uh, I usually don't really
52:50 turn on no mistakes uh, for this kind of
52:53 uh, god rails.
52:54 So typically the way to think about when
52:56 to turn on no mistakes is uh, if this is
52:58 a code change, you would otherwise have
53:01 a human review for you, then you should
53:03 turn on no mistakes. Uh, if it's
53:05 something that you work by yourself
53:07 uh, and you don't really uh, want to uh,
53:10 have another human peer review for you,
53:12 then uh, you wouldn't want to turn on no
53:14 mistakes either.
53:16 Uh, so Captain, the public GitHub
53:18 repository is live. Okay, that's nice.
53:20 Um, but I actually noticed a problem
53:23 here. Eddie's wallet uh, the Eddie's uh,
53:26 spelled wrong. Um,
53:29 Eddie uh, is with the wrong spelling.
53:31 Uh,
53:32 it should be e d d i e. That is uh, how
53:35 Eddie spelled his name. So let's uh, get
53:38 that corrected uh, uh both locally and
53:41 on GitHub.
53:44 Uh yeah, so now we uh sent this
53:48 correction.
53:49 Um so, FirstMate is going to figure out
53:51 how to actually make the correction
53:53 happen. This is something that's uh I
53:55 just uh feel really good about uh
53:58 because otherwise I would be uh be the
54:01 person who's figuring out, "Oh, do I
54:03 rename the local repo? Uh do I rename
54:06 the upstream first? Uh how how do I make
54:09 everything uh corrected?" Uh so, now
54:12 FirstMate will just go ahead and do that
54:14 for me. All right, "Captain, the public
54:16 repository is now renamed. The local,
54:19 remote, and project description are
54:21 updated. The PRD worker is correcting
54:24 every eddy spelling in the readme.
54:26 Nice." This is the thing uh I really
54:29 love about FirstMate. It takes care of
54:31 things. Uh I don't need to think about
54:33 what are all the things I have to do uh
54:36 to get things like this corrected,
54:37 right? Um so, the spelling correction is
54:39 ready. It updates everything. Uh
54:43 "Okay. Um
54:45 no CI checks configured yet." Uh yeah,
54:47 that's right. We don't have CI. Um
54:50 "So, was this already merged?" Uh it
54:52 updates readme.
54:54 The project info
54:55 uh corrected. Main remains unchanged un-
54:58 uh until I approve the PR.
55:01 Uh I'll tell FirstMate.
55:03 Uh you don't need my approval for any
55:05 PRs right now. Uh every PR uh once you
55:08 reviewed it should be okay to merge. Um
55:11 we will have stronger approval flow
55:14 later on once we have a MVP built.
55:20 Um okay. Um so, now FirstMate will
55:23 probably just get that merged. Uh and
55:25 then we have a proper repo set up. The
55:27 re- the reason uh I had this repo set up
55:31 uh is because I want to um show you
55:33 something else. Uh but let's wait for
55:35 this to be done first. First mate said
55:38 the PR has been merged. So, let's take a
55:40 look.
55:42 Um what's in our repo now? The repo is
55:45 here. Um and it only has a readme file,
55:48 right? Um the readme file is a PRD
55:50 document, which is exactly what we
55:52 asked. Uh settled decisions, etc. etc.
55:55 Okay, nice. Problems, target user.
55:58 Uh okay. So, it basically captured
56:00 everything we talked about uh into this
56:02 document, right? The reason I created
56:04 this repo and have it um
56:07 capture this PRD is because now I want
56:10 to work on the product design. Um so,
56:13 what I will do is that I will use Cloud
56:15 Design
56:17 um to help us uh do that. And the way I
56:20 go about this is to go to design systems
56:22 and create a new design system. The
56:25 reason I created a design system instead
56:27 of just a design is that once the design
56:29 system is established, later on we can
56:31 build more UI components and more uh
56:34 screens and change how things work
56:36 without having to reinvent every single
56:39 element and uh and we can ensure that
56:41 there's going to be consistency from
56:43 this point on. So, we'll create here
56:46 and
56:47 uh
56:48 company name. It should be product name,
56:50 right? Um so, the name is Eddie's
56:54 wallet.
56:56 And we will uh get the repo URL here.
57:00 And I'll have it added. Um
57:04 link code. Uh no. Uh there's only a
57:07 readme file. There's no code. Uh
57:09 nothing. Okay. So, here uh the notes are
57:12 really important. Uh I'll give you some
57:13 context.
57:15 This repo doesn't have any source code
57:17 right now. Uh we haven't really started
57:19 building this project. Um this is going
57:22 to be an iOS app. And you can read the
57:25 readme file to understand the
57:27 requirements.
57:29 Um so, uh
57:31 you will need to figure out the main
57:33 screens and feel free to challenge any
57:36 prescribed user experience in there.
57:40 Use your judgement for what's going to
57:42 be the best experience. I want this
57:44 experience to be fun and educational and
57:47 friendly for kids
57:49 and for parents there's good control and
57:52 transparency.
57:54 Um.
57:55 So, yeah.
58:01 Okay.
58:02 So, Claude design is now working on this
58:05 design.
58:06 It's overloaded. Oh, no.
58:09 Let's see whether it can recover.
58:11 Um, hm. Try with Sonnet. Do we dare
58:16 go in with Sonnet? Um.
58:19 Hm.
58:21 Let's give Sonnet a try. It's okay.
58:24 Um. Sonnet is not
58:28 Sonnet is not going to be able to come
58:30 up very very clever solutions,
58:33 but here I also don't think the problem
58:35 is too complex, right? So,
58:37 I would say give it a try and see
58:39 whether it can help us get it done.
58:41 Sonnet is working.
58:43 Uh, Claude design will basically look at
58:46 the requirements and start to figure
58:50 everything out. It's a pretty nice
58:52 experience to figure out a design
58:53 system, I would say. It will come up
58:56 come up with concepts. It will ask me
58:59 questions.
59:00 It will listen to my feedback, etc. etc.
59:03 So, I'll show you as we go, but it's
59:05 going to take a while. So, right now for
59:08 right now probably let's go back to
59:10 Firstmate. So, here you can see
59:12 Firstmate already did a compaction. So,
59:14 now we're back to 9.5%, right? So, we
59:18 have a lot more room to go.
59:20 The compaction will actually not lose
59:22 much context.
59:24 I'm today I mostly just rely on the auto
59:26 compaction for GPT models. It works
59:28 really well. Um I really don't really I
59:32 don't really proactively do compaction.
59:34 I just let the
59:36 context window run out and let the auto
59:39 compaction do its job. Um um
59:42 So here while Cloud Design is working on
59:44 the design,
59:45 we should actually be able to start
59:47 working on the back end, right?
59:50 Hey first mate.
59:52 Um asking a designer to look at the UI
59:55 design.
59:56 In the meantime, can we spin up some
59:58 work to get the back end built?
1:00:00 What do we need to set up? If there's
1:00:02 anything that needs me, for example,
1:00:05 Apple sign in etc. etc. Let me know. But
1:00:08 you should keep going on everything
1:00:11 that's not blocked on me.
1:00:13 Try to parallelize the work as much as
1:00:15 possible.
1:00:17 Um for Hetzner,
1:00:19 I actually have an API token in my
1:00:22 Atomic Vault.
1:00:24 So you can use that to manage my Hetzner
1:00:27 account.
1:00:32 Uh
1:00:32 the API token I have was called H Cloud
1:00:37 token. So I'll just tell it.
1:00:39 I mentioned something called Atomic
1:00:40 Vault.
1:00:42 It's It's something I use to manage my
1:00:44 secrets. I'll show you here.
1:00:47 Uh
1:00:49 Atomic Vault. I manage all the secrets
1:00:52 in here and it has a really nice uh
1:00:56 authorization flow.
1:00:58 So when the agent needs to access the
1:01:00 secrets, I will see it and I can decide
1:01:03 do I approve? Do I not approve?
1:01:05 And that's really really useful for this
1:01:07 kind of flow. Yeah, you can see. It's
1:01:09 already asking for this token, right? So
1:01:12 I'll just approve. It shows me Spy. So
1:01:15 it's my agent here.
1:01:17 Um so that is uh something that uh is
1:01:21 better than uh environment files. Uh so,
1:01:23 a lot of uh people just put secrets in
1:01:26 those dot env files, right? Uh and those
1:01:28 environment files really um
1:01:30 uh can be quite uh easy to get stolen.
1:01:34 Uh
1:01:34 what is this doing? Uh oh, it's calling
1:01:36 the API to get uh get the servers, etc.
1:01:40 So, I'll approve.
1:01:41 Um so, yeah, every time the agent needs
1:01:43 to use a production secret, I can just
1:01:46 uh see it here. I can see what commands
1:01:49 uh are being proposed to run, uh then to
1:01:51 use that to decide uh is that okay,
1:01:53 right? Uh so, this is still uh calling
1:01:55 the API. Um
1:01:58 There are some rules I can set to just
1:02:00 like blanket allow uh the agent to do
1:02:03 this so that I don't get asked every
1:02:04 single time. Uh but, uh I don't want to
1:02:07 do that right now. Uh right now, I
1:02:08 actually want to see every single
1:02:10 command it's running to access uh my
1:02:13 Hetzner account. Um this Atomic Vault uh
1:02:16 it's a pretty new project. Uh maybe I'll
1:02:18 I'll show you here.
1:02:19 Um it's
1:02:21 uh Atomic
1:02:23 Uh it's a open source GitHub project. Um
1:02:26 it's actually built by the legend uh
1:02:31 who created Homebrew, haha, Max Howell.
1:02:34 So, uh so, that's why I trust this
1:02:36 project. Uh although it's a new project,
1:02:39 uh I trust this a lot. Um and I have
1:02:41 been
1:02:42 uh giving feedback uh to Max as well uh
1:02:45 for how this uh can be more useful uh
1:02:48 through my own usage. Um and so far,
1:02:50 it's been really helpful. Uh you can
1:02:52 see, right? Um when the agent uh is
1:02:54 accessing the secrets, I have a good
1:02:56 dialogue where I can review. Uh this is
1:02:59 something that just helps me uh like
1:03:01 have confidence that my secrets are not
1:03:04 being leaked to an unintended use. Um I
1:03:08 think as we delegate more and more
1:03:09 things to agents, uh this is going to
1:03:12 become more uh more and more important.
1:03:14 Um
1:03:15 because otherwise, if you throw these
1:03:17 secrets in a file, you really don't know
1:03:21 when the agent has already given that
1:03:23 away.
1:03:24 Uh right? Uh because we're not looking
1:03:26 at every single tool call the agent is
1:03:28 making. Uh maybe the agent has published
1:03:30 that secret to another public file or
1:03:34 sent that as a part of a public API call
1:03:37 that's uh got some other servers to
1:03:39 capture the secret. Uh so, really having
1:03:42 a um tight control on where the secrets
1:03:45 are going, especially production
1:03:47 secrets, uh is going to be increasingly
1:03:49 important. Okay, FirstMate has created
1:03:53 three parallel work streams.
1:03:55 Uh okay, back-end API. Okay, uh the DB
1:03:58 schema
1:04:00 off boundary. Uh it's asking something.
1:04:03 Okay, it's running a Python script. Um
1:04:06 Yeah, for now I think everything uh it
1:04:08 needs I'll just approve because uh I
1:04:10 know it's like uh it's setting things
1:04:12 up.
1:04:13 Um the VPS foundation with backups and
1:04:16 deployment automation.
1:04:18 Uh
1:04:19 Mm. I actually think
1:04:23 we um
1:04:25 So, something I like
1:04:27 to do with VPS is that uh I want to
1:04:31 actually make the deployment
1:04:33 declarative. Um so, I typically do that
1:04:36 with Terraform like things like that um
1:04:38 to
1:04:39 basically
1:04:40 document um the infrastructure as code.
1:04:44 Uh so, here let me maybe ask.
1:04:47 Hey FirstMate, uh for the VPS
1:04:49 foundation, how are we approaching it? I
1:04:52 typically like to use things like
1:04:53 OpenTofu
1:04:55 uh um
1:04:56 to make the infrastructure
1:04:58 uh codified as code.
1:05:02 Okay, uh so let's see what FirstMate
1:05:04 will say. Um so, here um there are
1:05:07 already three parallel agents running,
1:05:10 uh each doing something different. Um
1:05:12 which parts needs to change, right? Does
1:05:14 this agent have to change? Does the VPS,
1:05:17 uh, agent needs to do some work, uh, for
1:05:18 the for what I'm saying? I don't need to
1:05:20 worry about that now. Uh, I just talked
1:05:22 to FirstMate and FirstMate will worry
1:05:24 about that. Uh, so this is the really,
1:05:27 uh, nice thing about working with
1:05:28 FirstMate is that I don't have the
1:05:30 mental load to worry about which agent
1:05:32 needs to be steered versus not. Uh,
1:05:35 okay. Yes, Captain, I've redirected the
1:05:38 infrastructure work to use Open Toffu.
1:05:40 Okay, cool.
1:05:42 Um, I like Open Toffu, uh, because, uh,
1:05:45 it's just
1:05:46 uh,
1:05:47 you will see later. Uh, once I, uh, once
1:05:49 it's done, I'll show you the
1:05:50 configuration. Uh, you will see that the
1:05:53 machine and the resources that we need
1:05:55 are all declared in a file, uh, which we
1:05:58 can audit and we can commit and we can
1:06:00 source control, uh, which is really
1:06:02 nice. Okay, so, uh, three agents, let's,
1:06:05 uh, just let it do its work, right? Uh,
1:06:07 the back end is being built. Uh, let's
1:06:09 go to the front end.
1:06:11 Okay, design system is still being
1:06:13 created. Um, so it's doing a lot of
1:06:16 work.
1:06:17 Um,
1:06:18 typically Cloud Design would show me
1:06:20 something for me to look at, uh, early
1:06:23 on, but this time it doesn't. Uh, maybe
1:06:25 it's something Sonnet has decided to do.
1:06:27 Um,
1:06:29 I kind of want to use Fable for this,
1:06:31 um, but, uh,
1:06:34 let's stay frugal for now.
1:06:36 Um,
1:06:36 Sonnet, uh, let's keep going and see
1:06:41 whether we can get good enough results.
1:06:43 Cloud Design has shown me Eddie's Wallet
1:06:46 Design System. Okay, let's see. Uh, this
1:06:49 is a read me. This is just like a bunch
1:06:51 of descriptions.
1:06:52 Uh,
1:06:53 where are the the designs? Okay, here
1:06:55 are the designs.
1:06:57 Uh, brand, I can't, uh, these are the
1:06:59 icons,
1:07:01 uh, which look reasonable, right? Um,
1:07:05 wordmark, Eddie's Wallet. That's okay,
1:07:07 straightforward.
1:07:09 Uh,
1:07:10 I uh colors.
1:07:12 Uh gold. Okay.
1:07:15 Golden. Um my son likes golden.
1:07:18 Um but this looks uh
1:07:21 yeah, let's see maybe see a real screen.
1:07:23 Neutrals. Uh okay. Um
1:07:27 This look like these colors uh do look
1:07:31 uh pleasant. Uh so maybe it's okay.
1:07:34 Um
1:07:35 Okay, this is not good.
1:07:38 Right? It's uh not even centered
1:07:41 correctly.
1:07:42 Uh so we can give feedback.
1:07:44 Um the text is not even centered.
1:07:48 Um what else? Uh
1:07:50 uh
1:07:52 Yeah, maybe just that. Uh we will give
1:07:55 other feedback elsewhere.
1:07:57 Um
1:07:59 Click-through. Okay. Oh, this is a real
1:08:02 screen. Okay.
1:08:03 Uh can I actually click?
1:08:06 Uh
1:08:07 sign in with Apple. Okay.
1:08:09 Uh okay. So this is the um the current
1:08:13 design. I think it looks too uh
1:08:17 it doesn't look childish enough, right?
1:08:20 Um I think I will want this to look more
1:08:24 clearly a kids app. Uh so add this view.
1:08:27 Mm.
1:08:29 Uh this is the balance.
1:08:32 Last updated, recent activity. Uh this
1:08:34 all makes sense. Uh left to repay. Okay.
1:08:38 Um hm.
1:08:41 Okay.
1:08:43 Uh other things haven't been built yet.
1:08:46 Next lesson. Borrow and repay. Oh, okay.
1:08:49 Um okay. My main feedback is that the
1:08:52 overall feeling of this app does not
1:08:56 feel like a children's app.
1:08:59 Uh so I'll give the feedback here.
1:09:03 The overall design of this app does not
1:09:05 feel like an app for children
1:09:08 and it's not enough. I think we should
1:09:11 lean more into having the the app feel
1:09:14 fun and
1:09:16 friendly to children.
1:09:20 Yeah, these are all okay. These
1:09:23 uh
1:09:24 But I think after Cloud Design addresses
1:09:27 my previous feedback that this is not
1:09:29 friendly
1:09:30 enough for children,
1:09:33 maybe it will make a lot of changes.
1:09:37 We can also ask Cloud Design to do more
1:09:39 here.
1:09:40 I think besides what we have here, we
1:09:42 also need to design
1:09:44 the app icon, right? So, give me some
1:09:47 options that I can review and decide.
1:09:51 Okay. I just skip that as well.
1:09:54 So, yeah, it's going to take some time
1:09:56 to iterate on what we talked about.
1:09:58 Um let's let it do its work.
1:10:06 And now let's come back to the back end.
1:10:08 Um here at Captain, the Apple sign-in
1:10:11 investigation is complete.
1:10:13 Confirm paid. Yep, I do have the I'll
1:10:16 just talk to First Mate here.
1:10:18 Yes, I do have a paid Apple Developer
1:10:20 membership. Okay, for the steps that you
1:10:24 need me to take, can you list out the
1:10:28 exact steps and which URL else to go to?
1:10:32 Uh then I will go do that myself.
1:10:38 Uh
1:10:40 The Hetzner setup has also provisioned
1:10:42 one dedicated server.
1:10:44 Uh okay. Wow, that's fast.
1:10:46 Um current cost is like this much a
1:10:48 month before taxes and traffic.
1:10:51 Uh okay. That's okay. That's better than
1:10:54 $30 to $60, right?
1:10:56 Um existing servers, uh uh,
1:11:00 okay, okay. Yeah, he's doing his work.
1:11:02 Card design.
1:11:04 Uh,
1:11:06 it should have done some iterations. Uh,
1:11:09 let's see if there is uh,
1:11:11 uh, app icon options. Okay. Let's look
1:11:13 at our icons first. Here are our icons.
1:11:17 Uh, hm. So, it's using a piggy, uh, as
1:11:22 the
1:11:23 uh, analogy, piggy bank.
1:11:26 Ew, that's not good.
1:11:28 Uh, I I kind of like the piggy.
1:11:31 Um,
1:11:33 this is more like a wallet.
1:11:35 Uh, these are coins. Okay. So,
1:11:38 reasonable. Um, I think we go with
1:11:41 piggy.
1:11:42 Um,
1:11:45 for icon,
1:11:46 uh,
1:11:47 for the icon, we'll go with the piggy.
1:11:49 Um, but make it a piggy a little bit
1:11:51 bigger in the icon.
1:11:53 And make sure to create icon images that
1:11:56 I can directly use in my iOS app.
1:12:01 Um, that's because uh, iOS app has some
1:12:03 like formatting requirements for what
1:12:05 the icons need. Um, so okay, that's
1:12:07 icon. Uh, thumbnail. Uh, okay, that's
1:12:11 uh,
1:12:12 let's go back to the design system.
1:12:14 Uh, we should review.
1:12:17 Uh, yeah, so this text centering is
1:12:19 fixed.
1:12:20 Uh, we should review the the
1:12:21 click-through.
1:12:23 Um, oh, it's it's bouncing. Okay, it's a
1:12:25 little bit better. Uh, it's bouncing
1:12:27 now.
1:12:27 Uh, sign in.
1:12:29 Add this view. Nice job. Uh, this is
1:12:32 kind of a achievement. But where is the
1:12:34 balance?
1:12:36 Uh, something left to pay.
1:12:38 Um,
1:12:45 uh,
1:12:53 Okay, uh, let me come back to First
1:12:55 Mate. It said a lot of things. Captain,
1:12:59 here are the exact steps. Choose the
1:13:01 bundle ID. Okay, yeah, that's that's
1:13:03 good. Confirm my Apple team.
1:13:09 Register the app ID.
1:13:12 Okay.
1:13:13 Okay, you know what I'm going to do? I'm
1:13:18 going to ask First Mate to do that for
1:13:20 me.
1:13:21 Hey First Mate, you can actually use
1:13:23 Chrome DevTools XE to control my browser
1:13:26 window. Can you just do all these steps
1:13:28 for me in my browser? I have already
1:13:31 signed in to my Apple
1:13:35 Store Connect. Cool. Let's see whether
1:13:38 First Mate can actually access my
1:13:41 Chrome browser. Now, let's come back to
1:13:44 Cloud Design. So, it needs a refresh to
1:13:48 get the
1:13:50 prototype reloaded.
1:13:52 Sign in with Apple. Let's just confirm
1:13:55 Eddie's view has a balance. Okay, yeah,
1:13:57 the balance is here. This is much nicer.
1:13:59 Has a nice job, has a bouncing piggy,
1:14:02 the font is big. Okay.
1:14:05 This is good enough, right? So, let's
1:14:08 just get this built. So, what we do now
1:14:11 is share. So, we will export this whole
1:14:14 thing as a zip file.
1:14:16 So, project archive, yep. Now that it's
1:14:20 on my local machine, I can just come
1:14:21 back to First Mate and ask First Mate to
1:14:23 take it over.
1:14:25 Hey First Mate, our design team has come
1:14:27 back with a whole design system and
1:14:30 mocks. So, let's follow that to build
1:14:34 our iOS app now.
1:14:36 The design system is in a file path I
1:14:39 will give it to you here.
1:14:43 It's in downloads.
1:14:45 Eddie's
1:14:47 wallet design.
1:14:51 Uh please get the design system uh
1:14:54 copied and set up in our repo and then
1:14:58 follow the design system to build our
1:15:00 actual UI.
1:15:02 Uh the UI should be a um iOS app
1:15:06 uh that can be used on both iPhone and
1:15:08 iPad.
1:15:09 Uh now that I think of it, uh I think we
1:15:12 should not build the back end in the
1:15:16 same repo. Uh the back end probably
1:15:18 needs to be a private repo. Uh it's only
1:15:20 the front end, the iOS app will be the
1:15:22 in the open source repo.
1:15:27 Okay. Uh let's give that instruction to
1:15:30 FirstMate. Um FirstMate is busy doing
1:15:32 something. Uh I'm actually not sure uh
1:15:35 what he's working on, but I usually
1:15:36 don't really care. Um I just keep
1:15:38 dumping my thoughts, uh what I want to
1:15:40 get done to FirstMate, and wait for
1:15:43 FirstMate to process everything. Uh I
1:15:45 know what FirstMate's doing. It's
1:15:46 probably using the browser. Uh so let me
1:15:49 actually go to my browser to see if
1:15:50 Yeah, yeah, yeah. This is uh controlled
1:15:52 by FirstMate right now.
1:15:54 Uh it's uh getting to Yeah, it's running
1:15:57 into some problem with uh not using a
1:16:00 valid name. So these are the things that
1:16:02 I would otherwise have to click through
1:16:04 myself, uh but now I'm just letting uh
1:16:06 FirstMate drive my browser. Um I'm
1:16:09 actually okay with that um because uh
1:16:12 these are the things that uh wouldn't
1:16:14 have a disastrous outcome.
1:16:18 FirstMate is uh
1:16:20 telling me something. Front end UI work.
1:16:22 Okay, I have started that. I can see
1:16:23 there's an agent here doing the work. Uh
1:16:26 okay.
1:16:27 Yes, confirmed. This name is okay. Uh
1:16:29 and this repo will stay private for now.
1:16:33 Uh and direct PR workflow is also
1:16:35 correct.
1:16:38 All right. Here we can see uh the
1:16:39 context window is uh running out again
1:16:42 very soon.
1:16:43 Uh GPT models right now this context
1:16:46 window 272K is kind of short.
1:16:50 If you're running Cloud you will have a
1:16:51 million tokens as the context window.
1:16:54 But actually it doesn't make too much
1:16:56 difference in practice because how good
1:16:58 the compaction is.
1:17:00 So whenever it runs out it just does the
1:17:02 compaction and then it keeps going. And
1:17:05 earlier we did a compaction and it
1:17:07 couldn't tell any difference, right? It
1:17:09 knew what I was doing. It put everything
1:17:11 together. Yeah, that's one thing that
1:17:13 GPT models are really good at right now.
1:17:15 And so far across this whole session the
1:17:19 only place where I felt like Luna was
1:17:21 not smart enough was the VPS cost
1:17:24 decision, right? That was the only thing
1:17:27 it made a recommendation that I didn't
1:17:29 agree with because it was based on some
1:17:31 wrong data. And I had to give some input
1:17:34 to correct it. Otherwise everything else
1:17:36 was running super smoothly here.
1:17:39 First mate does the back end repo set up
1:17:41 as well.
1:17:42 But
1:17:43 what was it waiting on me?
1:17:47 Hey First mate
1:17:49 did you get everything required on the
1:17:52 Apple developer site?
1:17:54 Or was there anything waiting on me?
1:17:58 Not quite, okay.
1:18:00 Um
1:18:01 Team ID confirmed attempted Apple ID.
1:18:06 Did not appear. Oh, I think it was
1:18:08 because of the error about the app's
1:18:10 name.
1:18:12 I think you should try again. You should
1:18:14 be able to do this.
1:18:16 There was earlier an error that I saw
1:18:19 about the app's display name not being
1:18:21 valid. Something about that. So make
1:18:24 sure the display name does not have any
1:18:28 characters that are not allowed.
1:18:31 Okay. Yeah, I think the agent has access
1:18:34 to the browser. It may have missed
1:18:36 that
1:18:37 showing the error.
1:18:39 So, let's just give it another try.
1:18:41 Yeah, let's probably watch it work.
1:18:44 Addy's wallet, okay.
1:18:46 And it needs to choose the right
1:18:48 capabilities. I think it needs to have
1:18:50 Apple sign-in, yep.
1:18:52 Sign with Apple. Is it going to add it?
1:18:57 Uh
1:18:59 No, not needed. Okay.
1:19:03 Registered. Okay. Now, Addy's wallet is
1:19:05 registered.
1:19:07 Um that's good.
1:19:09 So, it should now be able to do
1:19:12 everything it needs except for like
1:19:15 maybe downloading some keys or things
1:19:17 like that.
1:19:18 And by the way, the reason the agent was
1:19:21 able to control everything was because I
1:19:23 turned on this.
1:19:25 Uh it's called inspect. What was it?
1:19:29 Inspect.
1:19:30 Um and there was this thing, remote
1:19:33 debugging. This needs to be turned on
1:19:35 before the agent can control your
1:19:38 existing browser window. Or otherwise,
1:19:40 the agent will be running an isolated
1:19:42 browser window which may not have your
1:19:44 credentials.
1:19:45 So, this was turned on before I started
1:19:47 the demo. I just leave this on all the
1:19:50 time.
1:19:51 And each time a new agent session tries
1:19:54 to control the browser, it will actually
1:19:56 ask for permission.
1:19:58 Uh so, yeah, that's how the agent was
1:20:00 able to control everything for me.
1:20:03 Um
1:20:04 I reached quite successfully. Okay,
1:20:06 cool. The Apple The app ID now appears.
1:20:10 Um
1:20:11 Okay. Something I just thought of.
1:20:14 How would we test this end-to-end,
1:20:15 right?
1:20:16 I think the shortest path is probably to
1:20:19 make sure
1:20:20 we test the iOS app in a simulator and
1:20:24 points the simulator's app to our real
1:20:27 back end so that we can play with the
1:20:29 end-to-end experience to see whether we
1:20:31 can actually sign in and everything.
1:20:34 Okay, first mate just came back. It said
1:20:36 both reviewed PRs are merged. Uh backend
1:20:39 infrastructure is there. Uh native iOS
1:20:42 and iPad OS app and design system is
1:20:44 there. Uh the app passed iPhone
1:20:47 simulator validation. Uh okay. Um
1:20:50 so [clears throat] basically um
1:20:52 everything's good. Uh
1:20:55 but I don't um I need some evidence.
1:20:59 Hey first mate, how would this end to
1:21:01 end? Is our iOS app already connected
1:21:04 with our backend?
1:21:05 I really doubt it because
1:21:08 uh
1:21:09 yep, no. The iOS app is not connected
1:21:12 backend yet. Uh it's a mock. So there's
1:21:15 still a lot of work to be done, right?
1:21:17 So we should continue with the
1:21:18 implementation until we can actually uh
1:21:22 test things end to end, at least uh in
1:21:24 the simulator. Uh in the simulator I
1:21:26 should do I should be able to do an
1:21:28 Apple sign in and uh with my real Apple
1:21:32 account and connect to my real backend
1:21:36 in the VPS. Uh that is going to be what
1:21:39 I consider as the MVP done. So let's uh
1:21:42 figure out
1:21:43 uh what's the implementation plan to get
1:21:45 there and uh let's try to parallelize as
1:21:48 much as possible.
1:21:52 All right.
1:21:53 Uh let's see. Um test on devices. I
1:21:57 think eventually uh I can get to a test
1:21:59 flight build. Right? Uh I can get a
1:22:01 build into Apple's App Store's test
1:22:03 flight and then I can use that on my
1:22:06 real phone. But right now I think uh
1:22:08 just a simulator-based end-to-end
1:22:11 testing could be good. Um and this
1:22:13 end-to-end testing basically pushed uh
1:22:15 the first mate to figure out there's a
1:22:17 lot of gaps still. Uh which we now
1:22:20 should be able to fill, uh but there's
1:22:22 quite some work to be done. Uh one thing
1:22:24 that I'm really curious about is how
1:22:26 well can Luna analyze all this work and
1:22:29 the dependency graph and figure out a
1:22:32 way to paralyze the work.
1:22:34 So, let's see what it will do. And I
1:22:37 just realized it said deploy a
1:22:39 development back end. That implies it's
1:22:42 going to be setting up different
1:22:44 environments, which I think is going to
1:22:45 be an overkill.
1:22:47 GPT models, especially the 5.6, has this
1:22:50 tendency to over-engineer. So, let's
1:22:53 correct it.
1:22:54 And I don't think we need different
1:22:57 environments right now. I think we just
1:22:59 need one production environment. We
1:23:02 don't need to distinguish development
1:23:03 versus versus production.
1:23:07 All right.
1:23:08 Yeah, so these are the places where we
1:23:11 as the human still needs to give some
1:23:13 judgment
1:23:14 to really steer the model towards a
1:23:16 direction that we feel is right.
1:23:19 For this kind of a new app and the VPS
1:23:21 that no one knows about, there is really
1:23:23 not much reason to set up different
1:23:27 environment tiers. Okay, first making
1:23:30 back with something.
1:23:31 Agreed. [clears throat]
1:23:33 One production MVP environment. Yep.
1:23:38 Two parallel implementation tracks. iOS
1:23:41 integration.
1:23:42 Real authentication service.
1:23:45 Yep.
1:23:46 Simulator configuration using this
1:23:49 bundle ID. Yep. Back end deployment.
1:23:52 Yep.
1:23:53 A private API.
1:23:56 Yep.
1:23:58 Configure HTTPS.
1:24:02 Cool.
1:24:03 These seem right.
1:24:05 After both are complete, the final MVP
1:24:08 gate will be simulator signs in with
1:24:11 your real Apple account. The only likely
1:24:13 external input is an HTTPS host name. Um
1:24:19 Yes, I actually do have uh domain names
1:24:22 I can control. Okay, so let me tell it.
1:24:26 I have a Cloudflare account and there is
1:24:29 another um API key I think it's called
1:24:32 Cloudflare {underscore} API {underscore}
1:24:34 key uh in the same vault. So, you should
1:24:38 be able to use it. Um and uh I have a
1:24:42 domain name I control uh which is
1:24:45 kunchengUID.com.
1:24:47 So, we can probably create a subdomain
1:24:50 uh that's like
1:24:51 eddieswallet.kunchengUID.com
1:24:53 to use for this purpose.
1:24:58 Uh
1:24:59 yeah.
1:25:00 Uh so, let's uh do that. Uh there is a
1:25:03 misspelling here eddieswallet. Uh so,
1:25:06 let's see. Uh the transcription from uh
1:25:09 the Whisper model is usually good enough
1:25:11 um but sometimes can make mistakes like
1:25:13 that. But, I think from all the previous
1:25:16 context uh the Luna model should be able
1:25:19 to figure it out. Uh it should be the
1:25:21 right spelling of Eddie.
1:25:23 Um yeah, let's see. Cloudflare uh
1:25:27 Cloudflare is where I manage my domains
1:25:29 and DNS. So, with the API key that I
1:25:32 have in the vault, the agent should be
1:25:35 able to set everything up. Uh it should
1:25:36 be able to like basically add one more
1:25:39 DNS record
1:25:40 uh and point to the VPS and then get
1:25:44 everything working end-to-end. So, uh
1:25:46 let's see. Um my overall philosophy
1:25:49 right now is to give a lot of
1:25:51 permissions and uh capabilities to the
1:25:54 agent
1:25:55 um but when it needs to touch the
1:25:57 production environment, uh it needs to
1:25:59 get uh
1:26:01 authorization from me. Uh which is why I
1:26:03 used uh the Atomic vault.
1:26:06 Um Luna is uh is smart, right? Uh it
1:26:09 figured out the typo and it's going to
1:26:11 be using the right domain name.
1:26:13 Uh so, backend worker is continuing. Uh
1:26:17 DNS setup is currently blocked.
1:26:20 Um I can double-check here.
1:26:26 Uh Cloudflare, where is it?
1:26:29 Cloudflare API token. Oh, Cloudflare API
1:26:31 token. Okay, I was wrong.
1:26:35 Uh sorry, it was Cloudflare _api_token
1:26:40 and
1:26:41 uh all uppercase.
1:26:45 Okay.
1:26:47 Um why did I say sorry?
1:26:50 Um this is something that uh I find
1:26:53 interesting working with agents is that
1:26:56 uh
1:26:57 we actually waste a lot of tokens saying
1:27:00 things that are not technically
1:27:02 necessary, but it makes me feel good by
1:27:05 saying it, uh if you know what I mean.
1:27:08 Um
1:27:09 so okay, it's now accessing this uh
1:27:11 Cloudflare API token. I'll approve. Uh
1:27:14 it's trying to probably just get an
1:27:16 overview of what's in my account, um
1:27:18 which is okay uh for the agent to get.
1:27:21 Um the agent when the agent is using the
1:27:23 token this way, uh it actually never
1:27:26 sees the token. Uh it it it the token uh
1:27:29 is passed through as an environment
1:27:31 variable, uh so it can use that to call
1:27:34 API uh call APIs, but it won't be
1:27:38 exposed as plain text.
1:27:41 Okay, Captain, that worked.
1:27:43 All right, Captain, back end is now live
1:27:46 at this uh address.
1:27:48 Um verified, valid uh HTVS. Uh okay, it
1:27:52 got everything done for me.
1:27:54 Um
1:27:55 so Apple ID and uh authentication on the
1:27:58 back end is all good. Uh yeah, so really
1:28:01 it's really only the front end that is
1:28:03 missing. Um and it's talking about
1:28:06 future automated deployments. Uh I'm
1:28:08 going to uh I'm not going to worry about
1:28:10 that today, but uh the way I typically
1:28:13 do that is to do tailscale,
1:28:16 which I might be able to show in another
1:28:18 video where I just add all my devices
1:28:20 and VPS into a same tailscale subnet,
1:28:24 and then they can talk to each other and
1:28:26 do deployments that way.
1:28:28 I can even add GitHub actions runners
1:28:32 into my tailscale as well.
1:28:36 So, yeah, there are many options
1:28:38 available to automate the deployment.
1:28:41 You can see it just did another
1:28:43 compaction. I think this was the third
1:28:45 compaction that's happened.
1:28:47 And
1:28:49 if you ignore the concept of contest
1:28:51 window and compaction, this was just a
1:28:54 long session, right? We did so much
1:28:57 work. First mate juggled through a lot
1:28:58 of tasks for us
1:29:00 and without really losing much
1:29:02 knowledge.
1:29:03 So, the compaction is really becoming an
1:29:06 implementation detail that most people
1:29:08 should not worry about anymore. Just let
1:29:11 the agent run, let the agent compact
1:29:13 when needed, and it will just keep
1:29:15 going. First mate said it found an
1:29:17 issue. The app was pointing to the wrong
1:29:20 address, right? This was probably
1:29:22 because the app was built while the back
1:29:25 end was being hooked up. So, the the
1:29:27 agent working on the front end didn't
1:29:29 know this was the right DNS record. So,
1:29:33 yeah, First mate already sent the worker
1:29:34 to correct it. So, I don't really need
1:29:36 to do anything.
1:29:38 It just gave me an FYI. This is one of
1:29:40 the nicest thing about having First
1:29:42 mate, right? The First mate is juggling
1:29:45 all this complexity for me, which I
1:29:47 would otherwise have to coordinate
1:29:48 between the different agents. We have a
1:29:51 simulator brought up.
1:29:53 There's an iPhone. There's an iPad.
1:29:58 I guess this is
1:30:00 this is either First mate doing some
1:30:03 end-to-end testing by itself or it's
1:30:06 First mate about to tell me to use this
1:30:09 to validate uh things end to end. So,
1:30:12 let's see um
1:30:13 which one is it.
1:30:15 I'll keep an eye on the terminal window
1:30:17 as well. Uh so, if FirstMate says
1:30:19 something, we'll see it here.
1:30:21 Um exciting.
1:30:23 Uh the app is coming together. Okay,
1:30:25 this is uh the agent doing testing by
1:30:27 itself. You can see uh it already tried
1:30:29 to sign in and got this error, right? Uh
1:30:32 so, this will basically tell the agent
1:30:34 oh, something is wrong. Uh please uh go
1:30:37 fix it. Uh so, I don't need to do
1:30:39 anything. Um this is probably not for
1:30:40 me.
1:30:41 Something I did notice here uh is that I
1:30:43 think the brand name is Eddie's Wallet,
1:30:46 but Eddie should not be used as a uh
1:30:50 replacement for the user, right? So,
1:30:52 here it said Eddie does not need an
1:30:54 account. Um it should not assume Eddie
1:30:58 is the name of the user. So, um I think
1:31:00 that's a uh a bug we need to fix. Uh
1:31:02 I'll just tell FirstMate here.
1:31:04 Um so, the thing about FirstMate is that
1:31:07 you don't have to worry about what it's
1:31:08 doing. Just talk to it. Just keep
1:31:10 dumping your thoughts and it's fine.
1:31:13 I noticed a problem that uh right now um
1:31:16 the brand is Eddie's Wallet, which is
1:31:19 right. But, we should not assume Eddie
1:31:22 is the name of the user. So, uh this app
1:31:25 may be used by other people whose name
1:31:28 is not Eddie. I think we need to use uh
1:31:31 more neutral
1:31:33 uh terms when we are talking about the
1:31:35 user.
1:31:40 Yep. Uh so, I just killed this prompt.
1:31:43 Um and FirstMate will figure out, oh,
1:31:45 does it uh need to stop the current
1:31:48 testing or does it uh do that after or
1:31:51 does that do that in parallel? Uh so,
1:31:53 actually, let's see uh what FirstMate
1:31:55 will do. So, FirstMate just spun up
1:31:57 another CrewMate here.
1:31:59 Uh Uh, the name is like Wallet neutral
1:32:02 something, uh, which is probably doing
1:32:04 what I asked. Uh, yeah, it dispatched
1:32:06 the implementation to a parallel agent.
1:32:09 Uh, while it's still doing the testing
1:32:11 in parallel. Okay, the neutral language
1:32:13 update is completed. Uh, each family's
1:32:16 configured child nickname. Okay, cool.
1:32:19 Uh,
1:32:20 and now it's the fourth auto compaction.
1:32:23 Um, FirstMate has been doing so much for
1:32:25 us. And the compaction really didn't
1:32:27 have any visible effect on its
1:32:29 performance, right?
1:32:31 And this is partially because, uh, how
1:32:33 good the server-side compaction from
1:32:35 OpenAI is. Um, the other thing is
1:32:37 because how well FirstMate actually
1:32:40 persist important, uh, information. Uh,
1:32:44 a lot of the tasks that, uh, were
1:32:46 dispatched to crewmates were documented
1:32:48 in a, um,
1:32:50 file. So, everything that's got lost
1:32:52 from the compaction can be retrieved
1:32:55 when the agent actually needs them. The
1:32:57 investigation is complete.
1:32:59 Uh, it found a likely issue where
1:33:02 Apple's AuthKit is not returning
1:33:04 control.
1:33:05 Uh, but it hasn't fixed it yet.
1:33:09 Uh, so let's, um, probably, um, I think
1:33:12 we should ask the agent to do some
1:33:14 end-to-end testing, not myself.
1:33:17 Uh,
1:33:18 I think
1:33:19 you should try to, uh, do some
1:33:21 end-to-end testing and see if you can
1:33:24 figure out what is the actual bug. Don't
1:33:26 ask me unless there's something only I
1:33:28 can do.
1:33:31 All right.
1:33:32 That is something I tell my agents a
1:33:34 lot. Don't ask me unless something
1:33:37 that's, uh, only I can do because the
1:33:38 agents are actually very capable, uh, as
1:33:42 long as they keep trying. So, they just
1:33:44 need some encouragement. Something that
1:33:46 we can do in the meantime is to
1:33:48 understand what was actually built for
1:33:50 the back end, right? Uh, cuz the back
1:33:52 end was already deployed, uh, but we
1:33:54 never look at the code. Um, so, uh, I'm
1:33:56 not going to look at source code, uh,
1:33:59 either, but I'm going to ask FirstMate.
1:34:03 In the meantime, can we do a back-end
1:34:05 architecture review? Um, I want to focus
1:34:07 on what kind of API endpoints were
1:34:10 exposed and how are we handling the, um,
1:34:15 authentication?
1:34:16 Um, and what kind of DB schema have we
1:34:20 created? Those are the things that I
1:34:22 most, uh, am most interested in looking
1:34:25 at. Let's review that in lavish.
1:34:31 Cool. Yeah, so, uh, this will basically,
1:34:33 um,
1:34:34 get some work, uh, going in the, uh,
1:34:37 meantime, while we are fixing that bug.
1:34:40 Uh, cuz I expect a bug fix can take a
1:34:42 little while. Um, I try to parallelize
1:34:44 this work as much as possible, so, um,
1:34:47 FirstMate is always busy, not just
1:34:49 sitting around. All right, lavish, uh,
1:34:52 is here, uh, and this is the back-end
1:34:54 architecture review.
1:34:56 Uh, so, let's take a look.
1:34:58 Uh, strong core, boundaries narrow.
1:35:02 There is one parent identity, one
1:35:04 family.
1:35:06 Uh,
1:35:06 okay.
1:35:09 Where requests and authority flow.
1:35:14 Let's take a look at this.
1:35:19 Okay, iOS client will use HTTPS to call
1:35:23 production and this gets routed through
1:35:25 a Fastify API.
1:35:27 Um, and, uh, there is the health.
1:35:30 Uh, there is
1:35:33 Okay, uh,
1:35:35 the issuer, uh, this is where Apple
1:35:37 passes all the tokens to us.
1:35:40 Um, session service
1:35:43 bearer hash, wallet service. Okay, there
1:35:46 is a session service, there is a wallet
1:35:48 service endpoint. These point to our DB
1:35:51 and we store data in there. Okay, that's
1:35:54 pretty straightforward actually. Um so
1:35:56 there's nothing too complex. Um the
1:35:59 thing I was looking for was whether
1:36:00 there is any like over engineering
1:36:02 that's not needed.
1:36:04 Um
1:36:06 domain operations not generic table
1:36:08 rights. Okay.
1:36:11 Yeah, so these are the API endpoints. Uh
1:36:13 these are for Apple authentication, uh
1:36:16 me, family, wallet, child view. These
1:36:19 are basically different uh endpoints to
1:36:21 render different screens, which makes
1:36:23 sense. Loan. Okay, so so uh different
1:36:26 data structures are being exposed uh
1:36:29 through different endpoints, which is
1:36:31 also uh very reasonable. Um okay, so
1:36:34 those are quite reasonable.
1:36:36 Authentication, authorization,
1:36:39 uh okay, so this is the
1:36:41 uh
1:36:43 how the requests flow. Uh let's take a
1:36:45 look.
1:36:47 iOS app, identity token, uh
1:36:51 post to the Apple auth endpoint.
1:36:54 Um and there's the Apple's uh
1:36:57 stuff.
1:37:00 Uh yeah, this look pretty typical as
1:37:02 well. Um
1:37:04 so let's keep looking.
1:37:06 Um
1:37:07 database uh shape.
1:37:09 Take a look.
1:37:11 Uh
1:37:13 here.
1:37:14 Parent identities. Okay. And there are
1:37:18 sessions. Uh
1:37:21 families. Okay.
1:37:24 Um the families are what connects the
1:37:26 parents to the children.
1:37:28 Um that's actually pretty good because
1:37:31 uh it can have multiple children uh in
1:37:33 the same family.
1:37:35 Um and each children uh children have
1:37:37 wallets.
1:37:39 Um wallets can have loans.
1:37:42 Uh okay.
1:37:45 Ledger entries.
1:37:47 Um okay, nothing over-engineered. Uh
1:37:50 these are also
1:37:52 um simply reasonable.
1:37:54 Um let's get back to uh our firstmate.
1:37:58 Okay. Uh started the Octocat review.
1:38:02 Yeah, we have already reviewed. Uh it
1:38:04 includes this, this, this. Uh Captain
1:38:07 the Frix is merged. Okay, cool. All
1:38:09 right, it's time to end-to-end test this
1:38:12 whole thing. Uh the app should be
1:38:14 working now. It should have been uh
1:38:15 integrated. So, let's sign in. Uh this
1:38:18 is Apple sign in. And let's see if we
1:38:21 can actually get through.
1:38:26 Ooh, it worked. Uh so, now we are in the
1:38:30 wallet and this is the parent view. I
1:38:32 think this UI um
1:38:34 yeah, I'm not sure. I think we'll make
1:38:36 some more iterations to make it more
1:38:39 uh direct to the kids' view and make the
1:38:42 parent view a little bit more hidden.
1:38:43 So, let's uh see if we can like add $10.
1:38:47 Um review, add.
1:38:50 Okay, recorded. Um now the balance is
1:38:54 $10 and in Eddie's view, uh he can see
1:38:56 $10. Cool. So, this is uh it seems to
1:39:00 actually work. Uh if I sign out
1:39:04 uh and sign back in using my account, I
1:39:07 should see the same data because the
1:39:10 data is stored in the cloud.
1:39:12 Let's see.
1:39:14 Uh yep, I got back the data. So, uh the
1:39:18 user ID and everything hitting our
1:39:19 server back end, getting the data
1:39:21 fetched, uh everything is working
1:39:22 end-to-end correctly now. What I'll do
1:39:24 is that I'll get this app built into our
1:39:26 TestFlight and then I'll install this on
1:39:29 my son's iPad and we can actually start
1:39:31 to use this for real tomorrow,
1:39:33 uh which is super exciting. So, today we
1:39:35 have built this real app, uh full-stack
1:39:37 app from scratch using GPT-4.6 Luna and
1:39:42 uh and we couldn't even use Opus for
1:39:45 cloud design. We used Sonnet.
1:39:47 And it worked out pretty well, right? I
1:39:50 hope this video gave you a real example
1:39:52 of how I use my agentic engineering
1:39:55 workflow to get a real project done
1:39:57 end-to-end. Thank you for watching and
1:40:00 see you next time.
