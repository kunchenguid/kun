---
source: x
id: 2097153143947886733
url: "https://x.com/kunchenguid/status/2097153143947886733"
created_at: "2026-09-08T02:40:47.000Z"
type: quote
conversation_id: 2097076598499668193
thread_complete: true
parent_urls:
  - "https://x.com/ssbrouhard/status/2094992750378664267"
  - "https://x.com/verynormaldev/status/2097143101617799428"
parents:
  - id: 2094992750378664267
    author: ssbrouhard
    url: "https://x.com/ssbrouhard/status/2094992750378664267"
    type: quoted
  - id: 2097143101617799428
    author: verynormaldev
    url: "https://x.com/verynormaldev/status/2097143101617799428"
    type: replied_to
---

### @ssbrouhard

How I applied the pstack / Firstmate hybrid to Grok Ship and how you can set it up.

Last week I wrote about combining @poteto's pstack and @kunchenguid's Firstmate without letting their routers fight. Firstmate stays the outer loop. pstack's engineering habits go into the workers.

Grok Ship is that same idea on Grok Bot. One Firstmate. Scout vs ship. Project crewmates drive Cursor cloud agents. A throwaway reviewer reads the branch before any PR. You still merge.

If you bolt pstack on as another commander, you get two captains arguing about leftover wording. Don't.

Keep Grok Ship as the fleet. Inject pstack into the writers.

Setup:

1. Tell any Grok Bot:
follow https://t.co/Z75l3lbYKA

2. Talk only to Firstmate after that.

3. Do not install the pstack plugin into the factory. Do not add a pstack bot. Put a short worker brief on each project crewmate that launches cloud writers.

Worker brief (copy this):
- Firstmate is the only commander. Do not become a second product router.
- Cloud-agent ships load a short play just-in-time, not a prompt dump.
- Smallest logical change. Subtract code before adding. Analyze blast radius.
- Map other parts of the system only if the change actually crosses into them. If you skip that, write one line why.
- Done means the project's tests plus real artifact proof (a live command or repo verifier), not a passing opinion.

4. Thin the adversarial reviewer:
- Auto-fix and real errors only.
- Ask-user only for merge, deploy, customer send, or a true product fork.
- Leftover wording is not a fork. Translate it against standing product rules.

5. You still merge. Factory never merges on its own. Scout stays a report, never a PR.

So the hybrid is Grok Ship isolates the fleet. The worker brief carries the discipline. The reviewer does not get a vote on product.

pstack: https://t.co/Rvu0UU2uS2
Grok Ship: 
https://t.co/EfhrQkcNgE
@orca_build artifact:
https://t.co/IP5ZcioAAR

### @verynormaldev

@kunchenguid @bot Is it possible to use ir with pstack?

### @kunchenguid

@verynormaldev @bot yes @ssbrouhard has a nice guide here https://t.co/1NIP5oYywI
