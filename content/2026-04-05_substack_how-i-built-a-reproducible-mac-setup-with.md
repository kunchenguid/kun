---
source: substack
id: 193280895
url: "https://kunchenguid.substack.com/p/how-i-built-a-reproducible-mac-setup"
created_at: "2026-04-05T20:54:14.196Z"
type: newsletter
conversation_id: null
thread_complete: true
title: How I Built a Reproducible Mac Setup with Nix
---

# How I Built a Reproducible Mac Setup with Nix

*A pragmatic setup that lets me get any new Mac into working shape in seconds instead of spending a weekend reinstalling everything.*

How I Built a Reproducible Mac Setup with Nix

A pragmatic setup that lets me get any new Mac into working shape in seconds instead of spending a weekend reinstalling everything.

Kun Chen

Apr 05, 2026

13

4

Share

Setting up a new Mac always sounds easier than it actually is.

You tell yourself it will take an hour. Install a few apps. Copy some dotfiles. Tweak a few settings. Done.

Then a full weekend disappears.

Some of your setup lives in shell config. Some is buried in macOS settings. Some is in packages you installed years ago and forgot about. Some is in app configs that only make sense after months of iteration. None of it feels hard while you are building it gradually. It only becomes painful when you have to do it again.

That was the problem I wanted to solve. I wanted a reproducible core for my Mac setup. A setup I could reapply on a new machine. A setup I could open source. A setup structured enough to be dependable, but not so rigid that it becomes annoying to maintain.

That led me to this stack:

Nix

nix-darwin

Home Manager

declarative Homebrew

All the source code I covered in this article can be found here:

https://github.com/kunchenguid/dotfiles-mac-nix

It’s a public, reusable core of my Mac setup. It is meant to be forked and adapted, not copied as a complete snapshot as is.

In this post, I will walk through the ideas behind it and how I built each piece.

I’m a solo builder, previously L8 engineer at Meta, Microsoft, Atlassian. I share practical field notes about frontier agentic engineering.

Subscribe

What Nix, nix-darwin, and Home Manager actually do

If you have never used this stack before, here is the short version.

Nix

Nix is a package manager and configuration system.

The reason people like it is that it lets you describe an environment declaratively. Instead of manually installing packages and hoping you remember what you did six months later, you define the environment in code.

For me, the value is simple: I want my machine setup written down in a form I can version, reapply, and evolve.

nix-darwin

 brings that model to macOS.

It lets you configure machine-level parts of your Mac, including things like:

system defaults

login shell

system packages

Homebrew integration

primary user configuration

So if Nix is the foundation, is the layer that makes it useful for a Mac.

Home Manager

Home Manager does something similar, but for your user environment.

Instead of configuring the machine itself, it configures the things that live in your home directory and shape your day-to-day workflow:

user packages

Git config

shell behavior

fonts

application config files

environment variables

I like this split because it keeps system concerns and user concerns from getting mixed together.

Declarative Homebrew

Even if you use Nix on macOS, Homebrew is still useful.

A lot of Mac apps are easiest to install that way, especially GUI apps. So instead of pretending Homebrew should disappear, I let manage it declaratively.

That gives me a setup where both Nix packages and Homebrew apps live in source control.

Step 1: Bootstrap the machine once

Before the declarative setup can take over, a fresh Mac still needs a small bootstrap step.

The reason is simple: on a brand new machine, the tools that apply the real configuration do not exist yet.

For this repo, the bootstrap layer lives in .

Its job is to install the minimum core tools needed to get the rest of the setup working:

Determinate Nix Installer for installing Nix

Homebrew for the macOS package/app layer managed by 

 to apply the system configuration

nvm and Node.js for a practical JavaScript/TypeScript runtime baseline

Here is the bootstrap script:

The system is now split in two phases:

Bootstrap phase: install the minimum needed to get going

Declarative phase: let Nix, , and Home Manager manage the durable setup

That bootstrap script is what you run on a brand new Mac, after cloning the repo and replacing the placeholder values with your own username, home directory, and Git identity. The script now checks for those placeholder values and fails early if you forgot.

In other words, the order is:

Clone the repo

Replace placeholders like , , and your Git identity

Run 

Let the declarative setup take over from there

After that first bootstrap, ongoing changes should mostly be made by editing the Nix config and running .

I also like having a small convenience alias for this. In the public repo, I added an opinionated version that assumes the repo lives at :

That makes the common update loop a lot simpler: edit config, run , verify the result.

Step 2: Create a flake as the entry point

The first thing I did was create a file.

A flake is just the top-level definition of the setup. It declares the dependencies and how they are wired together.

In my case, I wanted three inputs:

 for packages

 for macOS system configuration

 for user configuration

The file looks like this:

This is the file that turns the repo from a pile of config into a coherent system.

Step 3: Define the machine-level setup with nix-darwin

Next I created .

This file handles the machine-level parts of the setup: macOS defaults, Homebrew packages, the main user, the login shell, and system-level packages.

Here is the version from the public repo:

This is where I put all the decisions that shape the machine itself.

For me, this is one of the highest-leverage parts of the setup. If I get a new Mac, I do not want to remember which settings I toggled manually in five different places. I want those decisions encoded once and re-applied.

Step 4: Define the user environment with Home Manager

After that, I created .

This is the user-level configuration. It includes packages, fonts, Git settings, prompt configuration, shell behavior, and dotfile symlinks.

The exact package list is not the important part. The structure is.

This is the layer where I define the baseline environment I want in my user account, including identity, packages, shell config, and dotfile symlinks all in one place.

Step 5: Add one real app config as an example

I did not want this repo to be just Nix modules and placeholders, so I added one real application config: WezTerm.

The config lives in:

And it gets linked into through Home Manager.

The file itself is simple, but that is the point. It shows how to keep app config in the repo without turning the whole repo into a giant dump of personal preferences. I picked WezTerm because it is real enough to demonstrate the pattern while still being general enough for a public starter repo.

After Step 5: How I add more tools later

Once the base setup is in place, the next question is obvious: how do I install more stuff over time?

My rule of thumb is simple.

Use Nix / Home Manager for things that should be part of the reproducible environment

That usually means:

CLI tools I use regularly

fonts

shell utilities

language toolchains that I want declared in the repo

packages that belong in my default user environment

For example, adding another CLI package usually means editing and adding it to , then running:

Use Homebrew for Mac apps that fit naturally there

For GUI apps and some macOS-native tools, Homebrew is often still the right place.

That means editing and adding a formula to or an app to , then applying the config again.

Use ecosystem-specific package managers when that is the right abstraction

Sometimes the right answer is not Nix or Homebrew.

For example:

 for global JavaScript tooling when that fits your workflow

language-native package managers for project-specific dependencies

I do not think a good setup means forcing every possible tool through one package manager. I think it means being clear about which layer owns what.

My rough mental model is:

Nix / Home Manager for reproducible baseline environment

Homebrew for macOS apps and tools that fit naturally there

language-specific package managers for ecosystem-specific or project-specific tooling

How to use this repo

The repo is meant to be copied and adapted.

At a high level:

Clone the repo under your home directory

Replace the placeholders for username, home directory, and Git identity

If you are on Intel, change the system target from to 

On a fresh Mac, run 

For later changes, edit the Nix config and run 

Once your setup is reproducible, you stop relying on memory and habit to rebuild it. You can now also get a new Mac up and running with the exact same setup within seconds. 

13

4

Share
