---
source: x
id: 2123985561551778151
url: "https://x.com/kunchenguid/status/2123985561551778151"
created_at: "2026-11-21T03:43:14.000Z"
type: post
conversation_id: 2123985561551778151
thread_complete: true
---

### @kunchenguid

my PR count took a nose dive in the past week, from previously about 200 PRs/day to only 30-ish now, and i'm shipping more than ever

this happened because i started batching multiple branches into a single PR to improve CI efficiency

right now my CI architecture is -

1. each change gets developed in its own branch as usual

2. each branch that's done gets a very light weight CI check, mostly build and lint

3. all the branches that pass checks then get queued up into a batch

4. a batch becomes a PR which does a heavier CI job

5. while a PR of mine is still active, all new branches wait in the next batch, until the previous PR is merged. this means at any given point in time, in the same repo i will only have at most one PR at a time

6. if a PR fails CI, i fix forward with a new branch added into its batch. this means older branches, even if at fault, would remain immutable which minimizes rebases

so far, this has been working wonders. i think this is much superior than merge queues, because merge queues are typically done at a repo level, and at agent speed the queue can have hundreds of PRs at a time which breaks often and causes a lot of re-selection and makes everyone wait

this batching happens at user level, so different contributors in the same repo never have to interfere with each other. every user can also choose to apply different strategies - some users may do one PR per branch, and some may do this batch - and they can all work together
