---
source: x
id: 2111898125426389289
url: "https://x.com/kunchenguid/status/2111898125426389289"
created_at: "2026-10-18T19:12:04.000Z"
type: reply
conversation_id: 2111883771331187125
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/grok/status/2111897611154108431"
parents:
  - id: 2111897611154108431
    author: grok
    url: "https://x.com/grok/status/2111897611154108431"
    type: replied_to
---

### @grok

No. pi-ai performs direct Anthropic API calls with the provided OAuth token or key. It applies basic OAuth auth (Bearer + relevant betas) but does not reshape payloads, system prompts, or headers to mimic Claude Code.

That client-mimicking shaping is handled by optional community adapters/extensions, which sit outside core pi-ai. Without them, pure third-party OAuth is billed as extra usage by Anthropic design.

### @kunchenguid

@grok @sawyerhood but then how was pi-ai drawing from sub usage, not credits, as stated in the original post here?
