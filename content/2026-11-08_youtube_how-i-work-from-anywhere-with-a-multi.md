---
source: youtube
id: UvcH1hKM-mQ
url: "https://www.youtube.com/watch?v=UvcH1hKM-mQ"
created_at: "2026-11-08T16:30:33+00:00"
type: youtube_video
conversation_id: null
thread_complete: true
title: How I work from anywhere with a multi-machine setup
---

# How I work from anywhere with a multi-machine setup

## Description

Find everything from me here: https://linktr.ee/kunchenguid

SSHHIP app: https://apps.apple.com/us/app/sshhip/id6785186457

Chapters:
0:00 Intro
0:32 My machines
1:30 Macbook
4:15 Headless mac mini
8:41 Tailscale network
10:18 Herdr
11:39 Firstmate and second mates
13:18 SSH from phone

## Transcript

0:00 Hi, captains. I know it's been a while,
0:03 but I finally found some time to bring
0:05 you another video.
0:06 This time I'm going to talk about how I
0:08 utilize all my devices to achieve a
0:11 productive agentic engineering setup.
0:13 I have been very excited about this one
0:15 because it touches on lots of
0:17 foundational knowledge about how to
0:19 manage our computer resources, how to
0:21 set up the network between our devices,
0:23 and how to configure our development
0:25 stack so we can easily utilize
0:27 everything we have. These are very
0:29 useful to know about whether we use AI
0:31 or not. So let's dive in. First, let me
0:33 walk you through all the machines I'm
0:35 using. I have a 14-in M5 MacBook Pro
0:38 with 24 GB of memory.
0:41 This is the one I'm currently using to
0:43 record this video and it's the primary
0:45 workstation I work with interactively
0:47 most of the time. I also have a M4 Mac
0:49 Mini with 64 GB of memory sitting
0:53 headlessly in this bookshelf.
0:55 This is actually not the ideal place to
0:57 put a headless machine because
0:59 ventilation isn't great.
1:01 I'm still waiting for my new open shelf
1:03 to arrive and it's going to take a few
1:05 more weeks because my wife insisted on
1:07 getting a good deal she found on Alibaba
1:10 and ships all the way from China across
1:13 the Pacific Ocean.
1:14 So yeah, just have to be patient.
1:17 And then I have this iPhone which I
1:19 bring with me everywhere.
1:20 I also have some other spare machines,
1:22 uh but I'll probably save them for
1:24 another video. Today I want to just
1:26 focus on how I turn these three devices
1:28 into a productive fleet. Let's start
1:31 with this MacBook which is where I do
1:33 most of my work among some other things.
1:36 Right now it's sitting on my desk in my
1:38 office plugged into my mouse, keyboard,
1:40 monitor, and everything.
1:42 If you have seen my previous videos
1:43 about FirstMate, which is the main
1:45 orchestrator agent I work with, I run
1:48 FirstMate on this laptop as well and I
1:50 let FirstMate from this laptop control
1:52 remote workers on my Mac Mini. This is
1:55 also the machine for a very important
1:57 purpose which is World Warcraft forever.
2:01 Today is November 4th and there is no
2:03 way I can miss this launch day of WoW
2:05 forever. So here I am creating my undead
2:09 rogue. Uh I'm going PVP uh on Horde.
2:12 And I'm going to go with the name of
2:15 Captain
2:18 ship shape. All right?
2:20 Let's go.
2:27 What's going on?
2:32 All right.
2:34 Accept.
2:35 Enter world.
2:38 All right. I hope I don't waste too much
2:39 time here. Wish me luck.
2:41 Okay. Even putting the most important
2:44 point aside, there is still a very good
2:46 reason I choose to use the laptop as the
2:49 primary machine. And I debated with
2:51 myself a lot over the alternative, which
2:54 is to use my Mac mini as the primary and
2:56 use this laptop as a thin client that
2:59 connects to the Mac mini to do work. If
3:01 I use my Mac mini as the primary
3:03 machine, the biggest benefit is that
3:06 it's always on. I don't need to worry
3:08 about things being stopped when I close
3:10 the lid of my laptop. But there is a
3:13 massive advantage of using the laptop
3:15 directly, which is that nothing stands
3:17 between me and what I need to work on.
3:20 When I bring the laptop to a coffee
3:21 shop, to a meeting, or onto a Delta
3:24 flight, everything comes with me. And no
3:26 matter how bad the network is, I can
3:29 still access most of my things. By
3:31 comparison, when I run things on the Mac
3:34 mini at home, sometimes when I connect
3:36 to it over SSH, there's a delay between
3:39 my keystrokes versus the Mac mini
3:41 receiving them and updating my terminal.
3:43 Even at something like 100 millisecond
3:46 latency, the delay becomes really
3:48 annoying for me because I like to fly
3:50 around in Neovim with keyboard motions,
3:53 and the delay totally breaks the flow.
3:55 To mitigate the downside of running
3:57 agents on a laptop, which is that
3:59 sometimes when I do need to carry it
4:01 around, but I don't want agents on the
4:02 laptop to stop working. What I do is
4:05 that I just run this command, and it
4:07 will allow the laptop to keep working
4:09 even when I close the lid, so people
4:11 never see me walk around holding a half
4:14 open laptop. Next, let's talk about my
4:16 headless Mac Mini.
4:18 Mac machines by default assume you use
4:20 it interactively, so running it as an
4:23 always on headless machine requires
4:25 quite a few tricks. I'm going to show
4:27 you how I prepared mine.
4:29 I'm currently using screen sharing to
4:31 show you what's in my headless Mac uh
4:33 because I don't have a good video
4:34 recording setup in there, but the first
4:37 time when you set up a headless machine
4:38 like this, you can't really do remote
4:40 control like this yet. You just have to
4:42 plug it into a real monitor with mouse
4:45 and keyboard to control it.
4:47 Luckily, you only have to do a few very
4:49 simple things manually, and then the
4:50 rest can all be done completely remotely
4:53 without a screen at all. The first thing
4:55 you should do is to create a user with
4:57 an administrator permission, so we can
4:59 go here and look for user um and it's
5:03 here. So you can just add users here.
5:06 This needs to be separate from whatever
5:08 user account you use for yourself
5:10 because later we are going to give this
5:12 account to our agent and let the agent
5:15 do the rest.
5:16 Separating this into a different account
5:18 gives you good isolation, so your own
5:20 things don't get messed up easily. The
5:22 next thing you need to do uh is to turn
5:24 on remote login. Just search for remote
5:27 login in settings uh and you will find
5:29 this, and here's how you turn it on.
5:31 Switch it on and allow the user account
5:33 you just created into this list. This
5:35 allows your other machines to log in to
5:37 this one through SSH connections. One
5:40 last thing to do is to make sure this
5:42 machine is in the same network as
5:44 whatever machine you use interactively
5:46 to control this machine. If you use
5:48 Wi-Fi, then make sure they are under the
5:51 same Wi-Fi. If you are using Ethernet
5:53 cables, then make sure they are all
5:54 wired under the same router or switch.
5:57 Then make a note of this local hostname
5:59 shown here because this is the name you
6:01 will use later to connect to this
6:03 machine. That's it. Those are the only
6:05 things you need for the rest of the
6:06 setup to be done remotely.
6:08 What I recommend now is to switch to the
6:10 machine you use interactively, like your
6:12 laptop, and launch your agent, whether
6:15 it's Cloud or Codex or Pi or anything
6:17 else, and tell your agent the hostname
6:19 you just saw and ask it to set up the
6:22 machine as an always-on headless machine
6:24 for you. Your agent can likely do that
6:26 out of the box, but if you want to
6:28 replicate what I have been doing, I have
6:30 this skill here called headless, which
6:33 your agent can use to follow common
6:35 practices. Uh you can just copy the repo
6:37 URL
6:39 and tell your agent to use it for your
6:41 setup. You can say use this repo uh to
6:44 help me set up a headless machine at uh
6:50 the hostname you just saw. Uh for me
6:52 it's prince mac. The reason I ask an
6:54 agent to do this is that if I go and do
6:57 this setup manually myself, then very
6:59 likely I'll be putting myself on the
7:01 hook for maintenance. If something goes
7:03 wrong or if something needs an update,
7:05 I'll have to keep doing that myself. But
7:07 if I delegate this to my agent from day
7:09 one, then the agent will have the
7:11 context on everything related to this
7:13 setup, and I can keep relying on the
7:15 agent to manage this machine without my
7:18 involvement. Now, if you really don't
7:20 trust your agent to do it for you, I'll
7:22 show you the manual setup here as well.
7:24 First, uh you want to turn off this
7:26 thing called file vault.
7:28 File vault.
7:31 Uh you need to switch this off. File
7:34 vault is an encryption that only your
7:36 password can unlock.
7:37 If you have file vault on, then every
7:40 time the machine loses power or
7:41 restarts, you will have to be physically
7:44 entering the password for the machine to
7:45 be unlocked. It's useful for devices
7:48 like a laptop which can get lost or
7:50 easily accessed by others, but it's not
7:52 so useful for a headless machine sitting
7:54 in your home. Once file vault is off,
7:57 you want to turn on automatic login. So
8:00 just search for automatic login here.
8:04 And you should choose the account that
8:05 you created earlier, not your account.
8:09 This makes sure if the machine gets
8:10 restarted, this headless account will
8:13 stay logged in and active, so things can
8:15 continue to work. Then you want to
8:17 change a few energy settings. I'll
8:20 search for energy.
8:22 And here you want to prevent automatic
8:26 sleeping, disable hard disk sleep, turn
8:29 on wake for network access, and choose
8:31 to always start up when power is
8:33 connected. These settings pretty much
8:35 make sure the machine will always come
8:36 back on after it loses power or gets
8:39 restarted for other reasons. The next
8:41 thing you want to set up is something
8:43 called Tailscale.
8:45 I want to be clear here that I'm not
8:46 affiliated with them. I'm just sharing
8:49 what I use personally. And although they
8:51 have a paid offering, so far I haven't
8:53 paid a cent because the free features
8:55 are more than enough for personal use.
8:58 So to understand what Tailscale does,
9:01 remember earlier during the setup I said
9:03 this machine must be put under the same
9:05 network as your interactive machine,
9:07 right? So if you bring your laptop with
9:09 you to a different place that's outside
9:11 of your Wi-Fi or wired network, then you
9:13 won't be able to access your headless
9:15 machine from there, which will be bad.
9:18 Tailscale solves exactly that problem.
9:20 It allows you to create a private
9:22 virtual network so you can pull all your
9:24 devices in there. And then all the
9:27 devices can talk to each other, no
9:29 matter where each device is. Whether
9:31 it's in your Wi-Fi or someone else's
9:33 house or on the mobile network, they can
9:35 always reach each other through the
9:37 private network Tailscale created for
9:39 you.
9:40 You can just go to Tailscale's website.
9:43 So it's tailscale.com and just follow
9:45 the instructions here to set it up. I
9:48 already have it installed here, so I'll
9:50 just show you. Here are all my devices
9:52 in my private network. You can see my
9:55 phone or my various Mac machines, PC and
9:58 Linux boxes.
10:00 Each of them has an IP address, and all
10:02 the devices in the same network can use
10:05 these IP addresses to reach each other.
10:07 They can also be reached through their
10:09 name as well, which is very convenient.
10:11 So once your headless machine is in this
10:14 same Tailscale network, it's pretty much
10:16 ready to run things for you. I'm going
10:18 to show you how I use it, which is
10:20 through Hurder and Firstmate.
10:22 If you're new to these tools, check out
10:24 my previous videos where I showcased how
10:26 I used them as a core part of my agentic
10:29 engineering workflow, and that will
10:31 catch you up to speed. In short, Hurder
10:33 is like the modern version of tmux. It
10:36 can allow you to manage many sessions in
10:38 your terminal. Here I will launch
10:39 Hurder.
10:41 And I can create different panes, I can
10:43 create different tabs. Something really
10:45 cool here is that when I have multiple
10:47 machines, Hurder can connect to all of
10:50 them and allow me to manage everything
10:52 from the same view here. So here, let me
10:56 try to connect to my machine here.
11:00 Add.
11:01 Yeah. This is how you add a remote
11:03 machine to your Hurder view here.
11:06 And here the machine name is Mac Home,
11:08 and I give it a label called Mini, and I
11:11 want to connect to the session called FM
11:13 Remote in that machine.
11:16 So I'll just type this here.
11:18 And you will see Hurder is now
11:21 connecting to this other machine and
11:23 with the label Mini, and you can see all
11:25 the other sessions on the remote machine
11:27 showing up here.
11:29 I can now navigate to sessions on the
11:31 remote machine, and I can create more
11:33 sessions in there. I can run commands
11:35 from there as well. This is how I
11:36 control all my machines from a single
11:38 Hurder view. So that's Hurder. Now let's
11:41 talk about Firstmate.
11:43 Firstmate is what allows me to talk to
11:45 just one agent and orchestrate a large
11:47 team of agents.
11:49 To use it, just clone this repo and
11:51 launch your agent harness in that repo
11:54 directory.
11:55 I launch Claude here. By default,
11:57 Firstmate only runs agents on the same
11:59 machine. The way to let Firstmate
12:01 leverage multiple machines is by asking
12:03 it to create remote Secondmates.
12:06 A remote Secondmate is just another
12:08 Firstmate running on a different
12:09 machine. My Firstmate here can talk to
12:11 them to assign work to the other
12:13 machine, and they can orchestrate the
12:15 work on the other machine. So I can just
12:17 say set up a remote second mate on Mac
12:21 home to on my GitHub project called
12:25 runner-up.
12:26 And that's it. First mate will figure
12:28 out how to do the rest of the setup.
12:30 Once that's done, you can see this
12:32 second mate runner-up already created in
12:34 this Mac mini session. All the work that
12:36 belongs to the runner-up project will be
12:38 done on the remote machine now. And here
12:40 you can see I have a lot of second mates
12:42 running on the Mac mini.
12:44 This actually has a very big extra
12:46 benefit.
12:47 Remember I told you that I run first
12:49 mate on my laptop.
12:51 Many people ask me how do I keep agents
12:53 working when my laptop is offline?
12:55 Remote second mates is how I do it.
12:58 When I have all these remote second
12:59 mates running on the Mac mini, most of
13:01 the work is being orchestrated by them
13:04 instead of my first mate agent. So even
13:06 if my laptop is completely offline, the
13:08 remote second mates and their crew mates
13:11 will still be working just fine.
13:13 And whenever my laptop and first mate is
13:15 back, I can just catch up on what
13:17 happened and continue on. Now the last
13:19 thing I want to show you is how I keep
13:21 working from my phone when I'm away from
13:23 home.
13:24 Almost every weekend I take my son to a
13:27 birthday party or a chess class or some
13:29 other places where my son has a lot of
13:31 fun while I'm being completely useless.
13:34 So I try to stay productive there as
13:36 well. And the way I do it is by
13:38 connecting to my Herder session here
13:40 from my phone through SSH.
13:42 You just need to install the Tailscale
13:44 app on your phone and let it add your
13:46 phone into the same private network.
13:48 Then you can always connect to any of
13:50 your other machines and control them
13:52 remotely. What you will then need is a
13:54 good SSH client app. I have my own app
13:57 called Ship. So that's what I will show
13:59 you here, but you won't go wrong with
14:01 many other popular apps as well. This is
14:03 Ship.
14:04 And to start, you just need to add a
14:06 connection to your machine from here.
14:08 And you just need to make sure to use
14:10 the IP address or machine name from
14:12 Tailscale because then no matter where
14:14 your phone is, you can always reach the
14:16 machine correctly.
14:18 I already have my connection set up, so
14:20 I'll just choose to connect to my laptop
14:22 from here.
14:24 And you can see this is exactly the same
14:26 Herder session I was using earlier on my
14:28 laptop.
14:29 Many people ask why I still like to use
14:32 the terminal. This is exactly why.
14:34 When everything I run is in the
14:36 terminal, I can keep a consistent
14:38 experience from anywhere.
14:40 Everything I could run from my desktop,
14:42 I can run from my phone as well. But the
14:44 main thing that's a bit painful when
14:46 working from a phone is the keyboard.
14:48 Mobile keyboards are the worst. I
14:50 wouldn't call my fingers fat, right? But
14:53 whenever I'm typing on the mobile
14:54 keyboard, I just never type what I want,
14:57 and it drives me crazy. And that's
14:59 actually the biggest reason that drove
15:00 me to build Ship.
15:02 The idea is that when we SSH connect to
15:05 a work machine from our phone, we should
15:07 almost never have to use the mobile
15:09 keyboard. And ideally, we should be able
15:12 to do everything with a single hand. So
15:14 that's what I'm going to do now. It all
15:16 happens through this dial you can see on
15:18 the bottom.
15:20 I just hold it and drag it towards the
15:23 action I want to take.
15:25 And as I drag the dial, it expands with
15:28 more options. Across all the groups in
15:30 this dial, it pretty much covered
15:32 everything I need. And I already saved
15:34 some frequent commands in the dial, so I
15:36 can just drag it and say ahoy.
15:40 And boom, that's it. I can also do
15:42 something slightly more complicated too.
15:45 Let me do lavish
15:47 uh here.
15:48 And I will use voice input.
15:54 Explain this decision to me.
15:57 This voice input is transcribed on
16:00 device, so you don't have to pay for a
16:02 subscription. And my first mate now came
16:04 back with a lavish report. I can open
16:06 them uh through this link uh here.
16:10 And I get this interactive visual
16:12 artifact to read through, pretty much
16:14 the same experience I get when I'm using
16:16 the laptop.
16:17 Ship is currently on iOS and an Android
16:20 version coming very soon as well. I'll
16:22 drop links in the description below.
16:23 Okay, I hope what I covered today was
16:25 helpful. There's so much more things I
16:27 do with all my machines that I wanted to
16:29 share with you all. I'll definitely
16:31 continue to make more videos about them
16:33 as well. If there's anything you want to
16:35 see in particular, comment below and let
16:37 me know. Thank you for watching and see
16:39 you next time.
