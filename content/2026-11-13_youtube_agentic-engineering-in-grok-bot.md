---
source: youtube
id: _cVWs9pPFDI
url: "https://www.youtube.com/watch?v=_cVWs9pPFDI"
created_at: "2026-11-13T16:00:13+00:00"
type: youtube_video
conversation_id: null
thread_complete: true
title: Agentic Engineering in Grok Bot
---

# Agentic Engineering in Grok Bot

## Description

Find everything from me here: https://linktr.ee/kunchenguid

Firstmate bot: https://x.ai/bot/__4FfrkUdvpdMk6-LKg5r
Kun bot: https://x.ai/bot/xK8W0ukRv4iZjglzz-FRE
Distill anyone bot: https://x.ai/bot/id4s2QYrPYZsiTqvzIhkt 

Chapters:
0:00 Intro
0:17 Main use case
3:21 Firstmate bot
6:50 One more crewmate
8:58 Vision
10:39 Decision making
18:28 Kun to the rescue
22:12 Distillation

## Transcript

0:00 Hi, captains. I'm back with another
0:02 video. This time showing you how I use
0:04 my Grokbot setup to get work done. I'm
0:07 just going to dive into my real setup
0:09 here. So things may be a little bit
0:11 messy, but I still think it's more
0:13 useful to show you the real stuff
0:15 instead of demos. Let's get into it.
0:17 This is my Grokbot. I mainly use Grokbot
0:20 for maintaining my open source projects.
0:23 Um so if you haven't come across my open
0:25 source projects yet, uh I have a bunch
0:28 of open source projects. They are mostly
0:30 agentic tools
0:31 um and a lot of them got quite some
0:33 popularity. So uh if you go into it,
0:35 there's a lot of issues and PRs coming
0:37 in.
0:38 Uh maintaining these projects is not an
0:40 easy effort. And Grokbot helped me so
0:42 much with this. So we can see here I
0:46 actually just asked Grokbot how much it
0:48 helped me over the last month. It helped
0:51 me process over 2,000 items
0:53 split between issues and PRs. Um that is
0:56 a lot of work. The only reason I could
0:59 have kept those projects moving was
1:01 because of my Grokbot setup here. So I'm
1:03 going to walk you through how that
1:05 works. Um I can probably show you a real
1:07 example of how the automation works.
1:10 Uh let me go to a smaller repo so it's
1:12 less scary.
1:14 Um we can see here in this repo there
1:16 were issues and there were PRs, right?
1:19 Uh if we go into a random PR here, um we
1:22 can see this PR was raised by a
1:24 contributor last week. If we scroll to
1:26 the bottom here, we can see there is a
1:29 comment from me
1:30 speaking as Kuhn's first mate. Thanks.
1:33 This is tidy change. And then there were
1:35 a bunch of
1:37 comments made, right? Like feedback on
1:39 what the PR is supposed to do before
1:42 it's safe to merge. Everything here came
1:45 from my Grokbot, not myself directly.
1:47 And pretty much every issue and PR in my
1:49 open source repos gets a comment like
1:52 this. And these comments guide the
1:54 contributors through the process of
1:56 getting their changes merged and getting
1:57 their ideas implemented. If the PR is
2:00 ready, it will give comments like this
2:02 and uh tell the contributor what changes
2:04 have to be made. And if the change is
2:06 good and aligns with all the rules that
2:08 I set for the repo, then FirstMate will
2:10 merge the PR automatically. If the PR
2:12 needs a decision from me, for example,
2:14 it's a ambiguous product decision uh
2:16 that's changing how things work, uh then
2:19 it will escalate to me in Grok Bot. And
2:21 I'll go back to Grok Bot now to show you
2:23 how that works. Um so in Grok Bot, you
2:25 can see on the left hand we have all
2:27 these bots, right? Um I have one bot per
2:30 open source repo. Uh so if I go to
2:32 Treehouse, this is a bot that is
2:35 specifically for triaging issues and PRs
2:38 in my Treehouse repo. Basically, what
2:40 this bot does is that uh it has a bunch
2:42 of routines. There's a daily triage,
2:45 there's a release process, and the
2:46 cadence, uh how frequently this routine
2:49 runs actually depends on how popular the
2:51 repo is. So Treehouse is not a very high
2:54 traffic repo, so a daily triage is
2:56 enough. Uh for example, my FirstMate
2:59 repo is a bit more busy, uh so it
3:02 triages every 4 hours. So every bot is
3:05 different here. Um and this triage will
3:08 basically look at the open issues and
3:10 PRs that haven't been triaged or have
3:12 been updated since, and it will look
3:14 into what's the right next step and make
3:16 the comments I showed earlier uh or take
3:19 actions to merge the PRs or close the
3:21 issues. This is one example of an
3:23 individual bot for one repo. I actually
3:25 never come into this chat uh of this
3:28 individual uh bot. I only talk to them
3:31 through my FirstMate. FirstMate is the
3:33 orchestrator agent that manages all
3:35 these other agents for me, and it does a
3:37 lot more than that actually. Uh I will
3:38 show you in a bit, but I only talk to
3:40 FirstMate. Uh you can see uh it's the
3:42 only agent I talk to. I pretty much just
3:45 close this uh all the time. And
3:47 FirstMate uh will bring issues to me,
3:50 bring things that needs my attention.
3:51 For example, uh here it brought me uh
3:54 captain FirstMate CI is hitting this
3:56 limit. Okay, that's not good. Uh so that
3:59 means uh the CI pipeline is probably
4:01 failing on the first mate repo right
4:03 now.
4:04 Splits the slow jobs. Yeah. So it's
4:07 suggested some potential solutions. I
4:10 actually want to come back to this cuz I
4:11 think this has repeated a few times. I
4:13 want to solve this for good, not just
4:16 keep patching this. But for now, I think
4:18 you can get the idea that every
4:20 individual bot's work is communicated
4:23 through the first mate to me, and I only
4:25 deal with first mate here. So problems
4:27 from all these repos will surface in
4:29 this single chat. I can just easily deal
4:32 with them here. Many people actually
4:33 already have a chief of staff kind of
4:35 bot, right? But first mate is actually a
4:38 little bit different. The first mate
4:39 Grok bot started from the foundation of
4:41 my open source project first mate here,
4:44 which has been battle tested by a lot of
4:45 users for many, many months now. And I
4:48 think it's probably fair to say it's one
4:50 of the projects that pushed the furthest
4:52 on the chief of staff paradigm. It's got
4:54 thousands of forks and a lot of active
4:56 contributors. The first mate bot
4:58 borrowed a lot of key learnings from
5:00 this project on how to be an effective
5:02 orchestrator. Here, let me show you some
5:04 examples.
5:05 I can go into the instructions of the
5:08 first mate bot here. And if we go into
5:11 context, memory, skills. Yeah, a lot of
5:14 the instructions are in these skills.
5:16 And one thing I want to show you is I
5:19 think it's in the project management
5:21 part. The first mate bot here actually
5:23 uses a local SQL Lite database to manage
5:26 the tasks. The benefit of this database
5:28 is that first it's strongly persisted.
5:31 So if the agents get reset or runs
5:33 compaction, it doesn't lose anything.
5:35 It's kind of like giving the bots a
5:37 linear or Jira to work on complex
5:40 projects.
5:42 And the other thing that may be
5:43 interesting to look at is in first mate
5:46 charter.
5:47 So there's a lot of instructions on how
5:49 first mate manages the crew mates.
5:52 One thing that may be interesting to
5:53 point out is that when first mate
5:56 notices that the crew mates are making
5:58 mistakes
5:59 or working inefficiently, it will update
6:02 the behavior of those crew mates so that
6:04 the crew don' make the same mistakes
6:06 next time. This has been super
6:08 beneficial uh and I can show you one
6:10 example uh that I collected a while ago.
6:12 This was from the First Mate bot
6:14 summarizing what kind of improvements
6:16 have been made to the other bots in the
6:18 last two months and there's a lot of
6:20 very concrete improvements on
6:22 inefficiencies and noise. These
6:24 improvements were made as the crewmates
6:26 do their work and First Mate as the
6:28 orchestrator and supervisor will just
6:31 observe and make these tweaks so that
6:33 the crew works more and more efficiently
6:35 over time. First Mate also has uh a
6:38 bunch of built-in uh engineering
6:40 workflows uh like adversarial review uh
6:43 lavish for planning. So basically when
6:45 you import this uh First Mate uh bot
6:48 into your Grok bot you get a whole stack
6:50 not just a prompt. Maybe I can show you
6:52 how I use First Mate to create this uh
6:54 individual crewmates so I can just say
6:57 create another triage crewmate uh for my
7:00 new open source repo called headless.
7:05 Yeah, that's it. If you're curious uh
7:08 what I was using for voice input I use
7:10 this tool called Handy. Uh I'm not
7:12 affiliated with them or anything. Uh
7:14 this is a free open source tool. I like
7:16 to use an independent voice
7:18 transcription tool instead of those
7:20 voice inputs inside each app because
7:22 then I can set a uh consistent key bind.
7:25 I can have a consistent dictionary as
7:27 well. Uh if you look at my Handy uh I
7:30 think
7:31 uh
7:32 going to settings here.
7:33 Uh yeah, it's really cool. You can just
7:35 choose your own model like whichever
7:37 model that works best for you. Um and I
7:40 have this uh
7:43 where is it? Advanced.
7:45 Um yeah, I have this custom words set.
7:48 These words are like really easy to mess
7:49 up. Uh so when I add them here I can use
7:52 them consistently everywhere uh which is
7:54 great. Yeah, and now First Mate is
7:56 creating another bot uh just like these
7:59 ones. It said founded captain this is
8:01 the repo. It has 20 open items uh from
8:04 outside contributors. Uh yep, this is a
8:06 new repo um which is really quite new.
8:09 It's a It's an agent skill for setting
8:12 up headless machines.
8:14 And it's already got over 100 stars. I
8:16 just published this a few days ago,
8:19 which is awesome. So there's a lot of
8:20 issues that I should probably take a
8:22 look at. So once First Mate set up the
8:24 triage crewmates, the triage crewmates
8:25 can help me a lot with processing those
8:28 issues. And here we can see the headless
8:30 crewmate is already here, right?
8:32 It's already starting to do things and
8:35 it's being told by First Mate on what to
8:37 do. Yeah, so this is going to be the bot
8:39 that processes this headless
8:41 repo for me moving forward. And it's got
8:43 a routine now.
8:45 It's doing the first pass triage as
8:47 well. It's covering one PR and a bunch
8:50 of issues. Yeah, so we'll just I'll head
8:52 back to First Mate. I don't need to look
8:54 at the crewmate there.
8:56 But basically it's doing the triage. Now
8:58 it's telling me that this repo has no
9:00 vision.md.
9:02 This is a very important concept I want
9:04 to maybe touch on.
9:06 So the reason I can let the bots
9:10 process a lot of these PRs for me and
9:13 know what is safe to merge.
9:16 For example here, why did this bot make
9:19 these comments and say these things are
9:21 needed, right? These are not random. I'm
9:23 not letting the LLM decide those things.
9:26 Every repo I have has this vision.md
9:29 file.
9:30 And this vision.md file basically wrote
9:33 down the principles for where I want to
9:36 take this project, right? What are some
9:38 of the boundaries? What are some of the
9:39 principles? What kind of changes do I
9:41 want to take? What kind of changes do I
9:43 not want to take for the project? And
9:45 every triage crewmate will respect this
9:48 vision.md file and use this to determine
9:52 what kind of PRs are safe to merge
9:54 versus not. And that is in addition to
9:56 good engineering practices. Yeah, and
9:58 now this is telling me this headless
10:00 repo does not have that yet. I actually
10:03 should go write that down. So let me do
10:04 that separately. And if you're curious
10:06 how I write those vision.md files, this
10:08 is the skill that I use. Um, this skill
10:11 will actually push you really hard uh
10:13 with hypothetical changes to the product
10:16 and then test your boundaries to figure
10:18 out what are the things that you are
10:20 actually good with versus not. Uh and
10:22 then after a few rounds uh it will help
10:25 you write down your vision. I'll
10:26 probably not wrap it whole into this
10:28 right now. I might make another video at
10:30 some point to introduce some of these
10:32 important skills that I use. Uh if you
10:34 think that's interesting, then let me
10:35 know in the comments and I can
10:37 prioritize based on what is interesting
10:39 to people. Okay, back to Grokbot. Um we
10:42 just started this headless crewmate,
10:44 right, to triage the headless repo. And
10:47 uh I think it's already done some work.
10:48 We can see here two messages from
10:50 headless. Uh this is um the headless
10:52 triage bot sending messages to the
10:55 firstmate bot and the firstmate relaying
10:57 them to me. Uh this is useful because uh
11:00 sometimes the bots will send something
11:02 that doesn't require my attention and
11:04 firstmate will just send something back,
11:06 right, without bothering me at all. So
11:08 although it may feel like oh the bots
11:10 are sending messages to each other, uh
11:12 is it wasting tokens? It's actually
11:14 pretty useful. Um so now this is
11:16 something that actually needs my
11:17 attention. That's why firstmate uh send
11:19 this message to me. Uh it says five of
11:22 the open issues are real bugs. Okay. Uh
11:25 the worst one is this uh on Windows. Uh
11:27 there is an SSL setting. Uh okay.
11:30 Uh this is another risk. Uh okay. This
11:33 one PR number 25.
11:36 Uh
11:38 okay. This is a four line fix. That's a
11:39 very easy fix to bring the code back in
11:42 line with what the doc already promised.
11:44 Okay. Uh so that's a correction of uh
11:47 what we already want.
11:48 Um
11:50 um there is no grep tile. Okay, okay.
11:52 Some of my other repos have grep tile
11:54 enabled uh because grep tile um gives
11:56 open source repos some free credits to
11:59 go do code reviews, which I find pretty
12:00 useful. Uh but on this repo I haven't
12:02 set it up yet. Uh that's okay. But
12:04 because I don't have the vision.md file
12:07 written down yet, uh I want to be a
12:09 little bit careful. So I'm going to
12:10 actually look at this PR.
12:12 Uh so this PR, yeah it's really just
12:15 four lines.
12:16 Um and the PR was raised through no
12:19 mistakes, which we can see here. It's
12:22 done a bunch of live validation to make
12:24 sure it actually works. I pretty much
12:26 all my open source repos require using
12:29 no mistakes to raise the PR because then
12:31 it ensures there's a minimum quality
12:33 bar. So I can see this PR has already
12:35 gone through a lot of rigorous internal
12:37 steps before it's even raised here. So
12:41 here we can see yeah a comment was
12:43 already made by me which was coming from
12:46 the triage bot.
12:48 And it's saying CI is green, change
12:49 looks good on the merits.
12:52 Relaxes this. This is a captain decision
12:54 hold. Okay. So because there's no
12:56 vision.md, the bot actually think this
12:59 behavior change requires my attention.
13:02 So it said it's not waiting on the
13:04 author.
13:05 It's a captain decision hold. Captain
13:07 means me. So that's why the message got
13:10 to me and I'm here to decide whether
13:13 this is the right thing. And I think I'm
13:15 going to actually look at this.
13:17 It's really just like correcting how the
13:20 string matches
13:22 and some documentation. So this is all
13:24 good. I'm going to go back to the bot
13:26 and say merge 25 and allow that going
13:28 forward.
13:31 So there we just triaged one PR, right?
13:33 And first mate will continue on giving
13:36 me other things that need my decision.
13:38 So let's see what it comes up with. Also
13:40 here you can actually see it's updating
13:42 agent profile. So first mate is now
13:44 updating headless to say it's okay to
13:47 not have greptile now, right? So this is
13:50 one of the things that happens when you
13:52 have a first mate as the orchestrator.
13:54 It just smooths out all these rough
13:56 edges and make the crew mates work more
13:59 and more smoothly down the road. Yep and
14:01 first mate said the crew will merge it
14:03 down and then immediately there's a
14:05 message from headless saying it's
14:06 already merged. Okay. So this basically
14:08 this was done.
14:10 If we go back to the PR, yeah it's
14:12 merged. And
14:14 I think we actually yeah a thank you
14:17 note as well.
14:19 So that's basically the automation
14:21 handling this and occasionally the
14:23 things the decisions will come to me and
14:26 it's me reviewing some of the ambiguous
14:28 stuff. Okay, now I'm curious what other
14:30 decisions I have to make so I'm going to
14:32 talk to first mate.
14:34 What are some of the other PRs waiting
14:36 for my decision?
14:38 This is actually where first mate is
14:40 going to read the database.
14:42 If you see first mate is not talking to
14:44 any crew mates right now.
14:46 It's just reading the database and it
14:48 will know which PRs are waiting for my
14:50 decision
14:51 without having to do a lot of messaging
14:53 back and forth between the crew mates.
14:56 Oh okay, this is actually a lot.
14:58 88 PRs
15:00 waiting for my word.
15:03 Okay.
15:05 Time sensitive. Okay.
15:08 Okay.
15:10 I'm going to yep, I'm going to say ahoy.
15:13 Ahoy is a shortcut for giving me the
15:16 most important thing
15:18 one thing at a time. So let's see first
15:21 mate I think it will actually do this.
15:24 One thing waiting on you whether to go
15:26 ahead with this one
15:28 runs every PR checks on Ubuntu as well.
15:33 Okay, it runs the PR CI pipeline on an
15:35 additional OS version to just check
15:39 whether it has problems. It's a
15:41 contributor PR.
15:43 I think this is good.
15:46 But I'm curious why don't we block the
15:48 PR when we know there's going to be a
15:50 problem, right?
15:51 Shouldn't we make this PR check actually
15:54 block the PRs because it's going to be
15:56 very soon that we will be forced to
15:58 migrate.
16:01 Okay.
16:02 So yeah, sometimes these decisions come
16:04 to me and I have to discuss with first
16:07 mate a little bit.
16:09 And first mate is checking how this PR
16:11 does on that today to tell me
16:14 based on source of truth. So yeah, let's
16:16 see.
16:17 Some of these decisions do need require
16:19 some discussions.
16:20 Um, so it says it's actually pretty
16:22 quick. Um, captain, you are right. It's
16:24 about to become required
16:26 um since this now passes on this.
16:29 Um, should we move to this? Yep, I
16:32 actually think we should just move to
16:33 this because it's going to be happening
16:36 very soon. So,
16:37 uh let's migrate. Okay. So, that's
16:39 another decision made. Um, and I think
16:42 after that I can just ask for another
16:43 decision. Yeah, this is basically how I
16:45 deal with the queue of all the issues
16:47 and PRs that are coming to my open
16:50 source repos. Yeah, it says the first
16:51 mate crew has the rework of this
16:53 underway. This is my rule that says
16:56 basically if I have a slightly different
16:58 idea for how a PR should be done, I will
17:02 actually pay the cost of doing the
17:03 modifications instead of asking the
17:05 contributor to do that. Um, if it's a
17:08 very big rework, then I'll send that
17:10 back send the feedback back to the
17:12 contributor.
17:13 If it's just different opinions, I will
17:15 do that. So, the crew will do the work.
17:18 And if we look into the first mate bot
17:21 here,
17:22 it's viewing the PR. It's going to do
17:24 something something. And then to make
17:26 the code changes, it's going to use the
17:28 cursor cloud agent. Yeah, you can see
17:30 here launching cloud agent, right? So,
17:32 it's using the cursor cloud agent to
17:34 actually do the coding work. It doesn't
17:36 do the work in this bot directly. Cursor
17:38 cloud agent is a really good way to
17:41 scale up a lot of this heavy coding work
17:44 to a large amount of sandboxes. So, even
17:46 if I have to make 100 PRs right now,
17:48 this computer the Grokbot computer will
17:51 not get too busy. So, I'm not going to
17:54 like just sit here and wait. I'm going
17:56 to say ahoy again. Basically just keep
17:59 asking first mate to give me one more
18:01 decision one more decision. And there's
18:04 like 88 waiting for me. So, I'm not
18:06 going to finish everything tonight, I
18:08 don't think. So, yeah, I'm just here to
18:10 show you how I work with first mate in
18:13 Grokbot to do this open source
18:15 maintenance, right? And you can see it's
18:17 really beneficial to have one single
18:19 first mate that can work across
18:21 different projects for me. Otherwise, I
18:23 will have to jump between all these
18:24 bots, which is pretty much an
18:26 anti-pattern uh in my eyes now. Oh, one
18:29 thing I do want to go back to, which was
18:31 that first mate uh CI was red, right? Uh
18:34 we saw that earlier. Where is it? Yep,
18:36 here. Um so I don't know why Grok bot
18:39 will gray out some of these uh previous
18:41 decisions. I think it's a new behavior,
18:43 but basically I can just uh reply to
18:45 this message and say uh what should we
18:48 do about this now? Um actually I I want
18:51 to show you something. Um
18:54 ask the Kun bot to uh figure out how
18:57 would Kun go about this.
19:01 Uh
19:02 there's a little uh typo here. Okay.
19:04 Uh Kun bot uh is a really cool bot. Uh I
19:08 will show you here. Um there's this bot
19:10 called Kun. This bot basically has all
19:13 my knowledge, uh everything I wrote in
19:15 the public. Uh so my tweets, my uh blog
19:18 posts, my YouTube videos, everything uh
19:21 distilled into this bot. And the way it
19:24 works is that uh I have this uh Kun
19:28 repo.
19:29 Uh you can actually find this as well.
19:31 Uh it's a uh skill that you can use in
19:34 any agent, not just Grok bot. It's a
19:36 skill that is basically a near real-time
19:38 distillation of my experience and uh
19:41 knowledge and tools, workflows, and
19:42 skills. Um the way this works is that in
19:45 this uh repo, you can see this
19:48 opinions.md.
19:49 Uh these are actually my opinions. These
19:52 are distilled from everything I said in
19:54 the public, right? So um you can read
19:57 this file. Uh it's really interesting. I
19:59 I when I read it, I was very surprised
20:01 how accurate it is. Um I I have a whole
20:04 workflow um to uh generate this file
20:06 every day based on what I said. So
20:09 there's opinions, there's tools, uh what
20:12 kind of tools that I use. Um and then
20:14 there is uh assets content. Yeah,
20:17 there's content as well. So every single
20:19 video uh that I made, you can see the
20:22 transcript uh written here. And
20:25 basically, this is like everything I
20:27 wrote or said or published in the
20:29 public. It's all in this repo. And then
20:32 the skill knows how to use all this
20:34 content to answer questions. So
20:37 basically, the more I write in the
20:38 public, the more videos I make, the more
20:41 blog posts I write, the more tweets I
20:43 tweet,
20:44 the more powerful this skill and the bot
20:46 will be. So if I go back here, this bot
20:49 is basically just using that skill.
20:51 Let's see what First Mate said to me.
20:53 The Coden Bot's answer is to leave the
20:55 30 minutes limit alone.
20:58 It's planned for fixing this at three
20:59 parts, okay? Split the tests across
21:02 parallel jobs.
21:04 Yep.
21:06 Warn when any job has its 20 minutes.
21:09 Yep, that's something that I very often
21:11 do. I set a lower threshold to get some
21:15 warnings
21:16 and so that we can actually fix things
21:18 before they reach the hard limit.
21:21 Speed up lint. Cool.
21:24 These are actually like probably things
21:27 I would do.
21:28 And I likely already set those in some
21:31 of my tweets in the public.
21:33 Should we ship the Coden plan?
21:37 Yes,
21:38 I think that's a good idea. Basically,
21:40 it's kind of interesting you see me
21:43 talking to my bot,
21:44 but this is actually pretty useful
21:46 because I don't want to think about
21:48 these things all the time, right? I
21:50 already know how to solve some of these
21:52 problems, so I just let the Coden Bot
21:54 solve that. And you can use that too.
21:57 You can just import the Coden Bot into
22:00 your Grok Bot and ask it to solve like
22:03 various kind of problems for you,
22:05 especially when you think those problems
22:07 are things that I may have some
22:09 expertise on, then the bot can help you
22:11 much faster than I could. Something
22:13 that's even more fun is this Distill
22:16 Anyone bot. This is another bot that I
22:18 share that you can import into your Grok
22:21 Bot as well.
22:22 This bot can help you distill anyone a
22:26 bot.
22:27 So here I was playing. I distilled Mark
22:30 Zuckerberg and Elon Musk and
22:33 Sam Altman I think. And I asked them to
22:36 discuss various kind of AI topics. It
22:39 was really fun to watch. But basically
22:40 this can be used to distill anyone that
22:43 has public content. As long as they
22:45 publish content publicly, then you can
22:48 distill them into a bot and you can talk
22:49 to them, ask them questions. This is
22:51 very useful for getting a proxy to some
22:54 of the domain experts that you would
22:56 love to get inputs from. So you can very
22:58 often just ask, hey how would that
23:00 person solve this problem, right? Maybe
23:02 just for the fun of it, let's distill
23:04 someone else.
23:06 Let's distill Jensen Huang. Okay.
23:11 Let's see what happens. Okay, the
23:14 distillation is happening.
23:16 I hope it found the right person. I'll
23:18 lock his identity from Wikipedia and
23:21 check with you before saving. Okay,
23:23 good. Okay, it's trying to confirm with
23:25 me. Okay, this is
23:27 founded Nvidia. Yep, that's him.
23:30 So yeah. So now it's got the right
23:33 person. It's now trying to actually
23:35 fetch the content.
23:37 Jensen Huang is locked. I'm setting up
23:39 his folder, starting the first pass now.
23:41 Cool. All right, it's done. Cool, taken
23:43 from 22 talks and interviews and 21 of
23:47 the posts. Okay,
23:48 let's see. Okay, let's just talk to
23:51 Jensen.
23:53 What's on your mind? No, I think I will
23:55 want to ask, how do you think about
23:59 Chinese models?
24:02 Let's see.
24:04 Okay, it's got back an answer.
24:06 Not the answer I was looking for though,
24:09 but it's okay.
24:11 One interesting thing is that this
24:14 distillation process actually creates a
24:17 voice profile.
24:18 So this bot will actually talk like
24:21 Jensen.
24:22 And that's something that's really cool.
24:25 You can see here,
24:26 look, you have to start with the facts.
24:29 Something like This is actually similar
24:31 to how Jensen talks, right? So, this is
24:34 something that's really cool, and I hope
24:35 you all will have fun with this. All
24:37 right, that's it for today. I will share
24:40 links to all these Grok bots that I
24:41 mentioned, so you can import them into
24:43 your Grok bot as well. All of them are
24:45 free. I'm not trying to sell anything
24:47 here, just trying to share something
24:49 that I have been using and hope you will
24:51 find them useful as well. Thank you for
24:53 watching and see you next time.
