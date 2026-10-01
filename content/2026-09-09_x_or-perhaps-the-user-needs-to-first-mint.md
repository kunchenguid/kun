---
source: x
id: 2097825223097844141
url: "https://x.com/kunchenguid/status/2097825223097844141"
created_at: "2026-09-09T23:11:23.000Z"
type: reply
conversation_id: 2097462014566351025
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/wabzqem/status/2097823753413795867"
parents:
  - id: 2097823753413795867
    author: wabzqem
    url: "https://x.com/wabzqem/status/2097823753413795867"
    type: replied_to
---

### @wabzqem

This makes sense - I think if the CLI tool is installed by an IT team then the authentication to that tool would not represent you, but purely the tool (i.e via mTLS or something). If you personally authenticate via OAuth then clearly the action is attributable to you, or maybe an agent on behalf of you.

The challenge comes when such a CLI, authenticated by you, is acted on by an agent. In this case we don’t usually provide a way to guarantee the interaction involved an agent, so the best most can do is “xyz CLI on behalf of User”.

### @kunchenguid

@wabzqem @Atlassian or perhaps the user needs to first mint a token that represents “an agent managed by Kun” and the CLI accepts this kind of token for agentic use?
