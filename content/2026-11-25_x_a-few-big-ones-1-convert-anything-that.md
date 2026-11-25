---
source: x
id: 2125390414727598592
url: "https://x.com/kunchenguid/status/2125390414727598592"
created_at: "2026-11-25T00:45:37.000Z"
type: reply
conversation_id: 2125378087689068798
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/tomquirkdev/status/2125385740137926958"
parents:
  - id: 2125385740137926958
    author: tomquirkdev
    url: "https://x.com/tomquirkdev/status/2125385740137926958"
    type: replied_to
---

### @tomquirkdev

@kunchenguid trying it now! i like it because it also captures the system/harness as a whole: agents.md, skills etc. could imagine nuking some now-redundant skills could reduce cost per task.

what were the highest ROI optimisations?

### @kunchenguid

a few big ones -
1. convert anything that can be checked deterministically to lint rules and test cases so we don't waste tokens on them
2. identify frequent sources of merge conflict and refactor the code to reduce conflicting edits
3. cap how many lines a file can have, to avoid massive files that are inefficient to read and achieve better code modularity by default
