---
source: x
id: 2108244512808243470
url: "https://x.com/kunchenguid/status/2108244512808243470"
created_at: "2026-10-08T17:13:55.000Z"
type: quote
conversation_id: 2108244512808243470
thread_complete: true
parent_urls:
  - "https://x.com/kunchenguid/status/2108030810691629403"
parents:
  - id: 2108030810691629403
    author: kunchenguid
    url: "https://x.com/kunchenguid/status/2108030810691629403"
    type: quoted
---

### @kunchenguid

ok it's official... AI-written unit tests and integration tests are empirically proven to be unhelpful. you should tell your agents to stop writing tests by themselves

### @kunchenguid

woke up to a hot discussion on testing :) many good points raised, but also a lot of confusion, both from people not reading the post and misinterpretations of it

let me dive into it deeper here:

1. "tests are for catching regression"

first, that's false. tests were very helpful for humans even in the first pass development. that's why we used to do TDD and it was genuinely useful for many years. seeing agents not inheriting this trait is already pretty interesting by itself to deserve digging deeper

secondly, the eval covered regression testing already. in the random sampled 44 subset, the existing test suite was disabled wholesale, and the agents caused no more regression than otherwise

it may sound counter-intuitive, but that's why sometimes we need to be willing to challenge previous assumptions, and think from first principles

2. "but bun did the whole rewrite largely because they had tests"

yes! that actually gets to the key point. bun's test suite was a massive asset carefully curated by humans to represent the desired behavior of the system

this eval is specifically about tests written by LLM's default behavior without human input. when you ask your agent to make a change, it will most likely write some tests without you asking. these are the tests i'm talking about

many project owners started being suspicious when they reviewed some of the tests. the point of my post here is to bring some quantified data so we aren't guessing

3. "LLMs write bad tests because your codebase is bad"

deepswe uses many good repos like fastapi. are you sure your codebases will be better maintained than fastapi?

that said, there's some truth to it - the structure and patterns in your codebase can influence how agents write tests for you. more to it later, but that's orthogonal to the point, because this is another form of human guidance

4. "but i'll do mutation testing and X, Y, Z to fix it"

sorry, you can't. mutation testing helps steer your test cases to be sensitive about changes, but the core problem is they can't distinguish intended vs unintended changes

when a test fails, and the test was previously written by your agents when no one asked for it, how do you know whether it's the test that's wrong, or the code breaking it? the agents can modify either the code or the test to fix the failure - which way does it go?

to judge that, there has to be another more trusted source of truth for what the desired behavior really is. the tests are just an intermediate representation of what the truth may be, but when it's written by LLMs autonomously, they aren't any more trusted than your implementation code

if your source of truth is simply tests written by agents that no one asked for or certified, you are in a pretty deep hole

for next step, i'm still waiting for my eval about e2e tests to finish. once i have that, i'll write more about concrete recommendations! stay tuned
