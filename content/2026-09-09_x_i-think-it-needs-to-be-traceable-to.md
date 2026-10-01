---
source: x
id: 2097764083957428657
url: "https://x.com/kunchenguid/status/2097764083957428657"
created_at: "2026-09-09T19:08:26.000Z"
type: reply
conversation_id: 2097462014566351025
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/wabzqem/status/2097462014566351025"
parents:
  - id: 2097462014566351025
    author: wabzqem
    url: "https://x.com/wabzqem/status/2097462014566351025"
    type: replied_to
---

### @wabzqem

Your agent runs a CLI tool on your laptop that does a write operation on Jira. What/who should this action be attributed to?

My teams in Identity at @Atlassian are working hard to make sure the right attribution happens, both for good UX and for audit trail needs. There are some interesting scenarios - A2A, tool use, subagent delegation etc. MCP does this well.

Would love thoughts on what you’d like to see in, not just in the above example, but across any app/product.

### @kunchenguid

@wabzqem @Atlassian i think it needs to be traceable to a human user, but it may not always be "me". it should be whoever gave the agent permission to do the write

if the CLI tool is installed by an IT admin for some automation, that's different from me setting up an agent to work on my behalf
