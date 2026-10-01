---
source: youtube
id: 5N-okeDdIuI
url: "https://www.youtube.com/watch?v=5N-okeDdIuI"
created_at: "2026-07-05T17:00:39+00:00"
type: youtube_video
conversation_id: null
thread_complete: true
title: "Kun's Agentic Dev Environment From Scratch"
---

# Kun's Agentic Dev Environment From Scratch

## Transcript

0:00 What's up everyone? I'm still in shock that 
my last video about agentic engineering got  
0:05 hundreds of thousands of views. I'm really happy 
to see many of you are leaning into building with  
0:11 agents and I plan to continue sharing what I found 
that's truly useful for getting real work done.  
0:18 Today, by popular demand, I'm going to be sharing 
my entire development environment by setting up  
0:24 all my config files from scratch, step by step, 
so we can all go from a freshly installed Mac to  
0:31 my complete agentic engineering setup that's 
ready to go. Let's get started. All right,  
0:37 here we are at our starting point, a freshly 
installed Mac OS on my Mac Mini. I have only  
0:43 done some of the most basic things like installing 
Chrome, Git, and set up my SSH key for GitHub. I  
0:50 also downloaded this custom wallpaper here just so 
the video looks a little bit more pleasant. I will  
0:56 drop a link in the description for where I got 
this. And that's all there is right now. We will  
1:01 set up everything else together from this point 
on. Now, the very first problem I want to solve is  
1:07 the reproducibility of my configuration. It means 
once I have things all set up on this machine,  
1:14 can I easily apply it on another machine and get 
the exact same results? Or in the less likely  
1:22 but still very possible scenario, if my AI agent 
did something stupid and completely destroyed my  
1:28 system, can I recover it instantly and get 
everything back exactly the way they were?  
1:35 My solution to this is something called Nyx. 
If you haven't heard of Nyx before, Nyx is a  
1:42 declarative and reproducible configuration 
system primarily designed for Nyx OS,  
1:48 which is an operating system based on Linux. But 
you don't have to use Linux to use Nyx. People  
1:54 have made Nyx portable. And here's an installer 
that works on Mac as well called determinate  
2:01 Nyx. And this is what we will install now by 
following their install command here. So this  
2:07 is what we will copy. We'll just run this command 
in our terminal and finish the installation here.
2:16 We will choose yes.
2:21 Now it says the installation is done. So let's 
follow its instruction and let's copy this command  
2:28 and we will run it. This will basically refresh 
our environment. All right. Now Nyx is properly  
2:35 set up in our environment. Let's start writing our 
actual file config. I'll go create a repo here uh  
2:42 in my GitHub cont. And I'll make a new repo called 
files. And I will initialize git here. This will  
2:53 be the repo I publish on GitHub after this video. 
And I'm going to create a symbolic link at a fixed  
2:59 location here like this. Uh I'll be targeting 
this current directory. and I'll put a symbolic  
3:06 link at this location. I do this so that all my 
scripts later can reference this using a stable  
3:12 path. All right. Now, we have an empty files repo 
and Nyx already set up. The first config we write  
3:19 here is going to be something called Nyx Darwin. 
Nyx Darwin is how I configure my Mac OS settings  
3:25 using Nyx. You will see how it works in a bit, 
but for now, I'm just going to be copying their  
3:31 boilerplate config content here. And then let's 
go create a Nyx uh file called flake.nix. We don't  
3:42 have neo vim just yet. Uh so I'm just going to use 
the vanilla vim that comes with the Mac OS install  
3:47 for now. It's not as good, but uh should be enough 
to carry us through uh the initial phase until we  
3:54 have Neo Vim set up. I'm pasting the boiler place 
in as is. This file uh basically just tells Nyx  
4:02 where to get the packages, where to get uh Nick 
Darwin as well. We don't really need to worry too  
4:08 much about this file. Um the only thing we need to 
change is that I'm not John. So I'm going to call  
4:15 this uh files and there's another John here. 
Uh let's just name this whole thing Mac. Um,  
4:22 and something I do want to change is that uh 
I want to pin the version from the current  
4:28 uh unstable version to a stable version uh to 
a at least a pinned uh version number. So I'm  
4:35 going to copy this uh and I'm going to replace 
that and uh I'll do the same for this as well. Uh
4:49 okay. So this will basically allow us to 
have a um stable version that uh we will  
4:55 be using uh so we don't get surprises and then 
we are going to create this configuration.nix  
5:01 file that's being referenced here. Uh so what 
I'll do is I'll do configuration.nix to save  
5:07 us some time for the rest of this video. I'm 
not going to literally type in every character  
5:12 one by one. That will be too slow. I'm going 
to paste the snippets in uh and talk through  
5:17 how they work. Here's the file content that we 
actually need for now. It's very simple. Um,  
5:22 and we set nyx.enable equals to false because 
we are already letting determinate manage the  
5:29 next installation for us. We don't need to 
repeat a nyx installation here. Allow unfree  
5:34 basically allows us to install programs 
from nyx that are not completely free. Um,  
5:40 and host platform uh refers to the architecture 
of the current system. My Mac here is on Apple  
5:46 silicon. So I set this value. If you 
are running a Mac that uses Intel CPU,  
5:51 then you will set the other value. Primary user 
is basically just my username. And state version  
5:57 here is a version number for the default state 
values. Generally, we just set it at six and  
6:02 just never touch it again. That's it. Our initial 
Nick Darwin configuration. The way to activate it  
6:08 is by uh first tracking everything under git and 
then we will be running this command. This will  
6:15 basically install all the missing dependencies 
and apply the configuration onto the current  
6:20 system. The first time you do this is going 
to take some time. So just be patient and wait  
6:25 for it to be done. This process of applying our 
next configuration onto the system will need to  
6:30 be repeated every time we change our next config. 
So I'm going to create a helper script here um to  
6:37 make that easier. We will call this rebuild.sh. 
And basically it will just repeat what we did  
6:45 earlier. We are going to make this uh executable 
as well. Um rebuild and moving forward every time  
6:54 we want to apply a updated next config we can just 
run it like this and it will do the same thing.
7:06 All right. Although we applied our next config, 
nothing actually changed about our system because  
7:12 we haven't set anything meaningful yet. Time to 
do some real settings. Now, let's get back to our  
7:18 configuration.nix file and we will be pasting this 
snippet in. This will set a lot of my preferences  
7:25 that I would otherwise have to click through 
in the Mac settings. So there's dark theme,  
7:31 there is fast key repeat, uh there's short delay 
before repeat, there's autohiding uh the menu bar,  
7:38 there's uh always showing the file extensions, 
there's autohiding the dock and uh using list view  
7:45 for finder and uh have a clean desktop that shows 
uh nothing on it except the wallpaper and making  
7:53 uh tapping on the trackpad uh click it. You can 
pretty much set anything you want about your Mac  
7:58 system through this configuration and you can 
find all the settings in the next Darwin repo.  
8:03 Now let's uh rebuild and see that apply. You 
can see our doc already changed the behavior  
8:10 as a result. So now the doc is hiding itself. Next 
thing is to install the apps that we need. On Mac,  
8:17 a lot of the useful apps can be installed through 
homebrew. So let's get homerew installed first.  
8:24 We could just go to the homebrew website and 
copy paste uh their install command and get  
8:28 homerew installed, but that's not going to be 
reproducible. Next time we set up a new machine,  
8:35 we would have to manually go do that again. 
To make everything reproducible, we should  
8:39 do it the next way. And the way to do it is to 
install homebrew as a Nyx package. The package  
8:46 is called Nyx Homebrew. And here's the repo. It 
has detailed instructions for how to set it up.  
8:52 We need to modify our flake.next file. Uh so 
we'll come here and uh go to flake.next. And  
9:01 the main pieces we need to add uh is this input 
um here and also add this module. Now we can get  
9:13 back to our configuration.nix file and add homerew 
configuration in. This will basically uh just get  
9:22 homebrew installed. And this cleanup uh setting 
here uh cleanup equals to zap basically says each  
9:29 time we rebuild our next configuration, it will 
remove homebrew packages that aren't listed in  
9:35 our next config. This is a useful setting because 
it's going to force us to install every homebrew  
9:41 package through our next config instead of ad 
hoc. And if everything is installed through Nyx,  
9:47 we know the whole system is reproducible. I 
also listed casks here to install. And for now,  
9:54 I just added Westerm, which is the terminal 
emulator I will be using. Other homebrew  
9:59 casks you want to install should also go 
here as well. Now, let's go run a rebuild,
10:06 which should get homerew set up for us. And we 
can verify by running brew- version. and it's  
10:14 working. We now also have Westerm installed. 
So, let's get it open. So, now it's time to  
10:23 close the default terminal and I'll be using 
western moving forward. Besides homebrew,  
10:29 another very important tool we need to use 
is called home manager. Unlike Nyx Darwin,  
10:35 which manages MacOSS level settings, home 
manager manages everything that belongs  
10:40 to our user directory aka home directory. 
Similar to homebrew, we'll first go to our  
10:46 flakemix file and we will be first adding in 
home manager as an input like this. And then  
10:52 we also need to add it as a module here. Um, and 
we need to make sure it's listed here as well.
11:02 All right. And this last line here, this is the 
key. This is basically saying for this username,  
11:09 we will use the home.nix file to manage it. And 
this reminds me that we actually need to edit the  
11:16 configuration.nix file here as well. And we need 
to make sure uh this section exist. This basically  
11:24 sets the home directory for this user correctly. 
Otherwise uh it will not work. And then we're  
11:30 going to be creating this uh home.nix file that 
we mentioned earlier. Here's the initial contents  
11:36 we'll be putting in. You'll want to update your 
username to whatever you actually use. And the  
11:42 interesting bit here is this line where we created 
a symbolic link for west term's config directory.  
11:49 This basically says we should create a symbolic 
link at the current user's home directoryconfigerm  
11:57 that points to this path in our dotfiles repo. 
This is how we store configuration in our  
12:02 dotfiles repo and have them automatically used 
by the actual programs. And because this whole  
12:09 directory is a symbolic link, if west term update 
any of its configuration at runtime, those updates  
12:16 will reflect in our doiles repo as well. So all 
the config changes will be version controlled,  
12:22 which is really useful. And remember earlier we 
created a symbolic link at this location in our  
12:29 home directory. This is how we make use of it. 
we can just always use this path to find our dot  
12:35 files regardless of where the actual git clone is. 
Now the next set of things we add to home manager  
12:42 is a list of packages that we want to install 
at user level and we can just let home manager  
12:48 install all of them for us. Interestingly even 
fonts can be installed by home manager this way.  
12:55 Here we are installing the hack nerd font which is 
my favorite monospace font for terminal encoding.  
13:00 We install it through home manager here. So we 
don't need to manually click through and download  
13:05 the font from their website. We can also set uh 
environment variables like this. So for example,  
13:12 I want my default editor to to be neoim. So here I 
have this variable set. Let's run another rebuild.  
13:19 And uh remember to add all the files uh to be 
tracked by git as well. and we will be rebuilding.
13:30 Before we go deep into configurations, I 
just want to get one last thing set up,  
13:34 which is our shell. By default, Mac already 
gave us uh the Zshell, which is pretty good,  
13:40 but it's the raw Zshell without any of the 
good stuff, and I need the good stuff. So,  
13:46 we'll come to our home manager config again, um 
home.nix, and we will be dropping this in. This  
13:53 enables auto suggestion which will give us ghost 
text autocomp completion for shell commands based  
13:59 on what is in our command history. It also enables 
syntax highlighting which is very useful. The  
14:06 init content here basically just gets pasted into 
zshells rc file directly. And this line will give  
14:12 me a key bind so that I can press ctrl f to accept 
the ghost text suggestions which I'll show you in  
14:18 a bit. And then I set a bunch of shell aliases 
here. This just makes some of the most common  
14:24 commands I type a lot shorter, which saves a few 
seconds each time and it will add up. When I die,  
14:31 it's going to feel awesome knowing that these 
aliases gave me a few more hours of life. All  
14:36 right, let's go rebuild our next config again. And 
let's now uh start a new Western session. Now you  
14:44 can see this auto suggestions already kicking in 
and uh syntax highlighting is working correctly as  
14:50 well. Another thing that will greatly improve our 
shell experience is Starship. It's a program that  
14:56 lets you customize your shell prompt, which 
is this whole prefix before my cursor here.  
15:01 The system default is just really ugly. Let's 
get back to our home manager config and add in  
15:09 uh this additional snippet. This gets home manager 
to install starship for us and puts in some basic  
15:16 customization. Here I'll just keep it simple for 
now. But Starship is very powerful and you can  
15:21 do a lot more customization on your own. If we 
rebuild now and we start yet another uh clean  
15:29 westm session, we can see we have a much cleaner 
shell prompt here. The next big upgrade that will  
15:35 greatly improve our experience is to configure 
Westerm. I introduced Western briefly in my last  
15:42 video. It's a highly performant terminal emulator 
written in Rust. And the part I like the most  
15:47 about Westerm is that it's truly cross-platform. 
Even if I get forced to use Windows from time to  
15:54 time, I can still bring Westernerm with me and 
it will give me a consistent experience there  
15:59 and it's highly customizable through Lua scripts. 
Let's create the config file for Westerm. First,  
16:05 we should make sure the directory exist. 
Uh so it should be this directory.  
16:12 Uh right. Um and let's uh then create uh the 
file and let's start with just this uh minimal  
16:23 content. Um this westterm.la file basically just 
needs to return an object that contains the config  
16:30 values. This basically just uses the default for 
everything. If we save this and we restart westm,  
16:37 we can see that nothing actually changes. But now 
we can just write whatever logic we want to modify  
16:44 the config object. Let's start with my favorite 
color scheme rose pie moon. And if we save,  
16:52 you can see uh western would hot reloads the 
configuration and it will immediately take effect.  
16:58 Next, I'll change the font to be um hack nerd font 
font size 15 and save. The experience just keeps  
17:06 getting better as we start to modify more and 
more of the configs. Let's also adjust uh the  
17:12 window background opacity and blur and save. Let's 
also hide the tab bar when there's only one tab.  
17:20 And let's get rid of the window frame algether. 
Let's save. Now we have a super clean frameless  
17:28 terminal window that's basically entirely 
used to render whatever content we care about.  
17:34 Look how beautiful this is. I really care about 
making my development experience pleasant because  
17:40 if I enjoy the experience, I will stay focused 
more easily and end up doing better work with it.  
17:46 Now that our terminal looks good, let's get the 
big boss Neoim. Neov is my primary code editor,  
17:54 so it's a really important thing to set up. 
Well, its configuration starts with an init.la  
17:59 Lua file in the config dot uh neoim uh nvm 
directory. So let's make sure the directory  
18:07 exist. Uh and then let's uh set up the file 
as well. And now we can actually use neoim to  
18:14 edit neoim config. So let's uh go to create the 
init.la file. Let's leave the file empty for now  
18:23 and we will go to uh home.nix. And just like 
before, we need to create a symbolic link here
18:34 so that uh the neoim config can come from our 
files repo. And now let's rebuild the next  
18:42 config. And we will start neoim to make sure it 
still loads. Let's see. Yep, still loads. Okay.  
18:49 Now in this uh init.la Lua file. I'll just ask it 
to require other files. I'll start with requiring  
18:58 vim config. This is how I structure my new 
vim config in a modular way. So different  
19:06 things live in different files. When you require a 
module in Lua, it will go look for the file under  
19:12 a directory called Lua. So I'm going to create 
uh this directory um from there. And I'm going  
19:22 to create uh the actual uh vim config.la file 
that we said we will have. Yep. This is neovim  
19:32 complaining that the file we are requiring from 
init.la doesn't exist yet which is uh as expected.  
19:40 I'll be pasting in uh this configuration to start 
with. These are some uh sensible defaults for a  
19:46 typical neoim experience. Uh the map leader here 
basically configures the leader key and I have set  
19:53 it to be space key. Uh so later we will when we 
configure key binds we will make use of this. This  
19:59 line expands tabs into spaces. Should we go down 
this rabbit hole here? Probably not. Uh this makes  
20:06 each indent level two spaces. This renders the 
current line number and this enables relative line  
20:13 numbers. Actually let me stop here and uh show you 
what that is. I will restart Neoim and reload this  
20:22 same config file. You can see now on the left side 
of the editor, we have all these line numbers. The  
20:29 one on the same line as the cursor is the current 
line number. This is the seventh line of the file.  
20:35 If I move my cursor to another line uh say GG 
uh which goes to the first line I can go back  
20:42 to the previous line by typing colon 7 and I will 
arrive at the seventh line again. You can also see  
20:49 all these relative line numbers above and below 
seven. They indicate how many lines are they away  
20:56 from the current line. The way I use this is 
when I need to jump to another line. let's say  
21:02 uh the line with map leader I can see it's 
five lines above the current line so I can  
21:08 just type 5k which means repeat k five times and 
because k in vin motion is moving the cursor up  
21:18 5k just let me arrive at the line very easily 
that's how I actually use relative line numbers  
21:24 uh to very quickly jump around then we have ignore 
case during search by default smart case means  
21:31 If I typed a capital letter, then it becomes a 
case-sensitive search. Cliffboard unnamed plus  
21:38 somehow means using the system clipboard for 
copying and pasting. Scroll off here means at  
21:44 least reserve 16 lines between my cursor and the 
edge of the screen when I scroll. So I always have  
21:51 some visibility what's above and below my cursor 
line. This undo file basically allows undo and  
21:58 redo to be persistent across NeoVim sessions which 
is very useful. There are a lot more Vim options  
22:04 available. Whenever I need to change something 
that's about the Vim behavior, I set it in this  
22:09 file. So it's all centralized and easy to find. 
The other file that we will uh require from the  
22:17 init.la file uh let's go back to init.la lure. 
That's going to be plugins. One of the biggest  
22:26 advantages of Neo Vim over Vanilla Vim is its rich 
plug-in ecosystem. There are so many great plugins  
22:33 available. And I use a plug-in manager called 
Lazy to help me install and update them. This is  
22:40 probably the most widely adopted plug-in manager 
for Neovim right now, written by a legend named  
22:45 Folky. You can follow this repos instructions to 
set it up. I will just paste uh the boiler plate  
22:51 into my config here. It's just a short snippet 
of setup script. The last line here tells lazy to  
22:59 load every file in a subdirectory called plugins. 
So we are going to create that directory. Now
23:10 and now let's set up the first plugin. One thing 
that's not very convenient in the out of the box  
23:15 Neovm experience is that if I need to quickly 
jump to another file, even if I know its name,  
23:21 it's not very easy. The same guy, Folky, wrote 
a lot of other great Neovven plugins as well.  
23:27 One of which is called Snacks, and it has a bunch 
of really useful utilities that help with things  
23:32 like that. So here, let's create a file called 
navigation. in the uh plugins directory we just  
23:41 uh created navigation.la and I'll paste in 
a plug-in spec here to install snacks. This  
23:48 basically means the plugin is a GitHub repo 
hosted at folky/nax nvim and priority means  
23:57 it's priority during neoim initialization. I'm 
actually not sure if this is still needed, but at  
24:02 some point I set it to uh to a thousand. So, I'm 
just going to stick with that for now. Don't fix  
24:08 something that's working, right? Lazy equals 
false means we don't lazy load this plug-in.  
24:13 Some plugins can be lazy loaded to minimize the 
burden during Neoim's initial startup sequence,  
24:19 but this one does need to be loaded up front. OPTS 
uh this is an object where we set options for the  
24:26 plug-in. This is plug-in dependent. So every 
plug-in has different things you can set for  
24:31 snacks. This is where we decide which utilities 
we actually need. Here I enabled picker notifier  
24:38 and input. You can go to its GitHub repo if 
you are curious what they do and what else  
24:44 it has. And at the end I set some key binds. 
This means if I press leader key and then F,  
24:51 it will trigger the file picker. Leader S 
will be the grab picker and leader B will be  
24:57 the buffers picker. Buffers in Neoim are kind of 
like what files you have open kind of. I also use  
25:04 uh GD to go to definition. Okay. Now if I reload 
Neoim, we'll see uh Lazy knows that we have a new  
25:13 plug-in configured that's not installed yet. So 
it's installing for us. And after it's installed,  
25:19 we can use the key binds we set to invoke the the 
plugins. I can use space F to bring up the file  
25:26 picker here. And here you can see we can filter 
uh by the file name. We can now also use space s  
25:32 to do grap. Uh so I can find which files contains 
the word nyx. But sometimes I don't remember what  
25:40 the file names are and what keywords to look for. 
I just need a file tree to browse the file system.  
25:46 But where is the file tree? That's another plug-in 
we'll go install. Now, if you are new to Neom,  
25:52 I think by now you are starting to get this 
philosophy. It's a highly extensible system  
25:57 which comes with a minimal set of features and 
lets you customize and extend it by yourself. So,  
26:04 everyone's new may look a little bit different 
or very different because everyone's assembling  
26:09 a different set of plugins with different 
customizations layered on top. My favorite  
26:15 file tree plug-in is called oil. And because 
this is also about navigation, I'm just going to  
26:21 uh use the same navigation file here. And I'll 
paste it into this navigation.la file. Very simple  
26:28 configuration. Basically, I just set it to show 
hidden files and gave a key bind that is leader  
26:35 key followed by E. Uh so let's restart new to try 
it out. All right, it's installed leader E. And  
26:45 now we can see this little file explorerish kind 
of view here. The beauty of oil is that it puts  
26:52 the file system into a normal editable buffer and 
lets you view and modify the file system just like  
26:59 how you edit any content in neo. So let's look at 
this file and let's say I want to make a copy of  
27:06 this configuration.nix file. What I can do with 
oil is that I can press Y Y Y Y Y Y Y Y Y Y Y Y  
27:11 Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y 
Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y Y  
27:12 which means copy current line of text in 
Neovven and then P which means paste it.  
27:18 And now there are two configuration.nix file uh 
which will conflict. So let's give this new one  
27:25 a different name. Let's say configuration uh-2. 
And now if I do colon w to write this buffer,  
27:33 you can see it is actually trying to copy this 
file. This is oil.neov recognizing my intent and  
27:42 I just confirmed. You can see it actually created 
this uh configuration-2.nix file here and it's a  
27:49 copy paste of the previous one. Similarly, if I 
go to oil and delete this line by typing dd and  
27:58 I write and the file is gone. If you are used to 
editing in them, you will feel this is a really  
28:05 natural way to handle the file system. is my 
favorite way to manage files. Now with agentic  
28:11 engineering becoming my primary way of coding, I 
find that's a very common reason I come to neoim  
28:18 is to quickly review diffs and manage the state of 
git. But there's nothing out of the box in neoim  
28:24 that can help me do that. I use two plugins called 
neoit and git signs. I'm going to create another  
28:31 file uh here called uh git.la Lua and I'm going to 
paste them in. Very straightforward. Uh basically  
28:40 just giving a key bind to launch uh neoit and an 
option for git science to show the git blame of  
28:47 the current line. So it's easy for me to see who's 
the person that last touched it. Here you can  
28:53 also see this event equals buff win enter uh is a 
primitive in the lazy plug-in manager which means  
29:01 only load this plugin when this event happens. And 
this event means when we actually enter a buffer.  
29:08 You can do a lot of optimizations like this to 
speed up uh your NeoVim experience by loading  
29:14 things only when they are needed. If we reload Neo 
Vim and let Lazy install the plug-in for us and  
29:22 launch Neoit by using the keybind, we can see uh 
we now have a very helpful tool to see and operate  
29:30 on the code changes tracked by Git. Uh I use this 
a lot to review diffs um and to stage changes uh  
29:38 I have reviewed and feel good about. Now that we 
have a few plugins that need to be launched by  
29:44 a keybind. Sometimes we might forget which key 
is for what. This is where I rely on a plugin  
29:50 called which key. Let's put it under a um UI. Lua 
file and I'll paste it here. Surprise, surprise.  
30:00 It's also written by our guy Folky. Uh, let's 
just install it and I'll show you what it does.
30:10 Now, if I press the leader key, which 
is space, you can see this popup at the  
30:16 bottom that shows what I can press next. 
This is particularly helpful when you just  
30:21 added a new plugin or a new keybind that you 
haven't built the muscle memory around yet.  
30:27 Speaking of keybinds, I do have a few special 
key binds that are very convenient. Let me go to  
30:34 um the uh the init.la file so that we can 
add in one more require which is going to  
30:42 be keys. Uh and that is going to be where we uh 
store all the key binds related configuration.
30:53 And these are my favorite keybinds. 
I'll show you after a reload.
31:02 The first one here makes ESC save the file. The 
reason I really like this is that normally to make  
31:08 edits in Neoven, you have to enter insert mode 
like this. And then you can type whatever you  
31:14 want. And after making edit, I typically need 
to come back to normal mode. So I can move my  
31:20 cursor around to other places, right? Um, and 
the way to get back to normal mode from insert  
31:27 mode is pressing ESC. And guess what? That is 
the same moment when I typically will want to  
31:33 save the file. So with this keybind, I can just 
spam ESC whenever I have done some useful edits  
31:40 and I want to save. That's very convenient. The 
next one is a no-brainer. In almost every editor,  
31:47 control A is selecting all. So this keybind just 
replicates the same shortcut in new. The last one  
31:53 here is an interesting one. I um probably uh 
let me keep it disabled so I can show you the  
32:01 difference. Um it's best that I show you live 
because it's not clear from the command at all.  
32:07 Let's say I select a few characters here uh vim 
and I press Y which means yank and that's Neo  
32:15 Vim's way of saying copy. I basically just copied 
those three characters into my clipboard. Now,  
32:22 if I go select a few other characters and I press 
P, which means paste, you will see that it's done  
32:30 a replacement. Now, if I go to select a few other 
characters and press P again, what do you think  
32:38 will happen? It should get replaced by vim again, 
right? Nope. It's all messed up. Now, this is one  
32:46 of the counterintuitive default behaviors in 
Vim because of how the registers work. So,  
32:52 this keybind uh here basically just uh fixes that 
behavior by stopping the replacement actions from  
32:59 messing up with the clipboard. It just makes 
the experience much more intuitive for me.  
33:04 All right, there is a whole bunch of other things 
I can go into about Neoim like LSP and Treitter,  
33:11 but there are actually plenty of good videos 
out there showing specifically how to make  
33:15 those things work well. So, I'll leave that for 
you uh to explore by yourself and skip ahead to  
33:21 a very important chapter, which is about 
managing terminal sessions. Up until now,  
33:27 we're just setting some config files and we do it 
one at a time. But as soon as you start to work  
33:33 with agents, you will need to manage multiple 
agent sessions in parallel. When one agent is  
33:39 working, you will need to kick off another. When 
one agent is done, you might want to launch new  
33:44 of them to review its output. In a regular 
terminal window, it's hard to do that. This  
33:49 is where terminal multiplexers come in. They 
allow you to create sessions, windows, tabs,  
33:55 and splitting tabs into panes, etc., etc. A really 
popular option here is T-Max, which literally  
34:02 means terminal multiplexer and is probably the OG. 
I showed it briefly in my previous video. Westerm  
34:10 also comes with multiplexing functionality 
out of the box, but recently I have come  
34:15 across something better called Herder. The best 
thing about it is that it's built in this agent  
34:22 era. It understands what agents are, how they 
work, and integrated with most of the mainstream  
34:28 agent harnesses really well. I have been using 
T-Max for years and years. So, moving to a  
34:34 different system was not an easy decision. But 
now that I have used Herder for a few weeks, I  
34:40 can confidently say it gives a better experience. 
It also might be the only terminal multiplexer  
34:46 that works on Windows as well. So, if you are 
on Windows, this is very much worth trying out.  
34:52 So let's set it up. Let's go to our homebrew 
configuration in this configuration.nix file  
34:59 and instead of casks uh it's a normal brew. So 
we will uh copy that here and uh list it here.  
35:09 And now let's also uh create this configuration 
uh directory. Let's also go create the config  
35:16 file for it. Uh and it's at this location 
uh config.tomol. and let's paste it in. Uh,  
35:23 these are pretty much just key binds that allow 
me to preserve my muscle memory in T-max. If you  
35:29 haven't used T-Max before, you might be able to 
just rely on the defaults instead. And similarly  
35:36 uh to other config directories, let's create a 
symbolic link so that we can apply the directory.
35:49 All right. Now uh let's rebuild Nyx. Now 
let's get into Herder. Uh here you can see  
36:00 uh it has a side panel on the left where it 
organizes your workspaces and agents and a  
36:06 main area that is similar to our default terminal 
experience. Now I can use the key binds we set  
36:12 earlier to create new tabs. Uh like this I can 
name the tab as well. uh I can say dot files  
36:18 as well and I can split a tab into panes like this 
um and like this. These are just basics that T-Mox  
36:28 can do as well. What's really cool about Herder 
is that its integration with agent harnesses is  
36:33 really good. So now let's get to agents as well. 
Let's probably demo this using cloud code. Uh so  
36:39 let's uh detach from herder. Uh let's go edit our 
homebrew configuration to install uh cloud code  
36:47 as well. Cloud code is a cask. So let's just 
uh duplicate this line and say cloud code. Um  
36:55 and we will be rebuilding next. Cloud code saves 
it settings into a settings uh JSON file. Um so  
37:03 I'm just going to create that uh first. Uh the 
directory I think it's do uh it's home dot uh  
37:12 home.cloud. Um and then I'm going to create uh the 
settings file settings.json. Uh I'll just leave it  
37:22 as a empty JSON blob for now and let cloud write 
it when cloud starts. And similarly we need to  
37:29 uh edit uh create a symbolic link. So we'll do it 
very similarly here. Uh it's going to be claude  
37:38 settings.json and uh claude settings.json. And 
that should do it. Uh let's rebuild. And now  
37:49 let's try to uh start cloud in herder. Uh I'll 
run cloud here. We'll choose some basic settings  
37:56 here. Um and I'll login. I don't do a ton of 
customizations inside of cloud because most of  
38:03 my setup is deliberately agent agnostic. But one 
thing I do customize in cloud code is the status  
38:09 line. So I can monitor basic information like 
what model is being used and how much of the  
38:14 context window is used. I do this by using the 
slash status line command uh in cloud code and  
38:21 just ask what uh I need. Uh so I'll say I want to 
see the model name and uh percentage of context  
38:32 window used and claude will write that for me. 
Now you can see that herder on the left hand side  
38:40 understands that claude is working and can display 
the status inside panel. Here I'll let claude  
38:47 uh run for now. Um you can replicate some of these 
uh things like status tracking with hooks. Uh but  
38:55 it's just really nice that herder supports this 
out of the box and uh in a consistent way across  
39:00 all the agent harnesses, not just cloud code. Now 
we can see cloud has uh created status lines for  
39:06 us. Uh let me create uh destroy those pes so 
it's uh easier to see. Uh we can see opus 4.8  
39:13 eight uh and context 2% used being listed uh under 
the prompt line uh which is the status line that  
39:19 we just created. Uh this real-time monitoring is 
very useful. If I want to see what kind of changes  
39:25 happened so far, I can just uh split another pane 
and use new vim and use git to see the diff. Uh  
39:33 this is a very typical flow for how I work. Now a 
really important piece about working with agents  
39:39 is the global memory file that affects all our 
agents behavior. I want all my agents whether  
39:46 it's cloud or codeex or open code or pi or grock 
or whatever to behave somewhat consistently and  
39:53 follow my rules. I do this by creating a central 
memory file. I put it here uh in my files repo.  
40:00 I'll uh put it here uh home agents.m MD. And here 
is a set of rules I wrote for my agents. Never use  
40:11 m dash use plain dash instead. Uh for some reason 
a lot of the AI models are trained to use M dash  
40:18 uh whenever it needs to use a dash. Uh so now 
whenever I see m dash I just feel really robotic.  
40:24 So whenever I need the agent to write something 
for me like a commit message or a PR description,  
40:30 I don't want to use the mdash. Uh so that's my 
preference. Uh whenever uh when writing commit  
40:36 messages, never auto add your agent's name as 
co-author. That is something Claude really loves  
40:41 to do and this uh system prompt will fight against 
that. Um I don't think it's too useful for agents  
40:48 to be like a co-author of the human. uh it's 
ultimately still the human that's going to be  
40:53 accountable for the quality of the code change. Um 
never manually modify change lock.md files or any  
41:00 files that are marked as autogenerated. That's 
a no-brainer. When making technical decisions,  
41:06 do not give much weight to development cost. 
Instead, prefer quality, simplicity, robustness,  
41:13 scalability, and long-term maintainability. 
This is a very very important rule. And the  
41:19 reason I have this rule is that agents uh the 
large chunkage models today are trained from  
41:25 human data. And when when we humans are making 
estimations about our projects, our estimations  
41:32 are usually in days, weeks or months. But agents 
can work a lot faster. But because the agents are  
41:39 trained from human data, it tends to assume the 
estimation, the development cost is going to be as  
41:46 high as what humans estimate. So when agents are 
making decisions, sometimes it will put too much  
41:52 weight onto the development cost and prefer those 
really cheap and not very scalable solutions. That  
41:59 is bad. So I have this rule here to fight against 
that so that the agents don't put too much weight  
42:05 onto development cost and instead prefer the other 
things that we care about here. When doing bug  
42:12 fixes, always start with reproducing the bug in an 
end to end setting as closely aligned with how an  
42:19 end user would experience it as possible. This 
is also very important uh because uh otherwise  
42:25 sometimes the agent will jump into conclusion 
and start to fix a problem that doesn't exist.  
42:31 So this makes sure that the agent will find 
the real problem. So the fix will be actually  
42:37 uh solving the problem uh effectively. 
Now, when end to end testing a product,  
42:43 be picky about the UI you see and be obsessed with 
pixel perfection. If something clearly looks off,  
42:51 even if it is not directly related to what you 
are doing, try to get it fixed along the way. Um,  
42:57 and the last rule is similar. Apply the same 
high standard to engineering excellence. lint  
43:03 test failures and test flakiness. If you see one, 
even if it's not caused by what you are working on  
43:09 right now, still get it fixed. These are also 
rules I find very helpful in holding a high  
43:15 quality bar. Now I'm going to use home manager 
to distribute this file to all the agents. Um so  
43:23 we'll come to home.nix and we will be pasting 
this in. This is creating sim links into each  
43:31 agent's global memory file location. Claude use 
this cla.md and other agents use uh different  
43:38 locations as well. So now after a rebuild that 
same global memory file will be loaded by all my  
43:46 agents consistently. And the really cool thing 
now is the rebuild script can fully reproduce  
43:52 everything we have configured so far. No matter 
what the current state of the system is, I can  
43:58 now go to a freshly installed Mac, clone this file 
repo, and immediately get the entire setup up and  
44:04 running. All right, this files repo has now been 
published onto my GitHub. You now have pretty much  
44:11 the same development environment that I use. It's 
time to start building. If you haven't come across  
44:17 my previous video about my agentic engineering 
workflow yet, now is a great time to catch up and  
44:23 see how I actually get work done with this setup. 
Thank you for watching and see you next time.
