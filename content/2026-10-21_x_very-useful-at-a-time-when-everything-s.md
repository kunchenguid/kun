---
source: x
id: 2112970510858621321
url: "https://x.com/kunchenguid/status/2112970510858621321"
created_at: "2026-10-21T18:13:21.000Z"
type: reply
conversation_id: 2112795764409745415
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/ssbrouhard/status/2112795764409745415"
parents:
  - id: 2112795764409745415
    author: ssbrouhard
    url: "https://x.com/ssbrouhard/status/2112795764409745415"
    type: replied_to
---

### @ssbrouhard

Tripwire @bot 

I built a security watcher grok bot. It's called Tripwire, and I just published it as a free template.

It doesn't spam you with every CVE. It learns your actual stack (repos, hosting, domains, accounts, devices) and only speaks up when something touches you.

What it watches:
- actively exploited vulns (CISA KEV, EPSS, NVD/GHSA, vendor advisories)
- certificate transparency for your domains, plus CA distrust events
- breaches for your emails and domains
- scams and lookalike domains
- leaked keys and permission creep in your bot setup

Skills it ships with:
- stack-inventory: a read-only map of your repos, hosting, domains, accounts, devices and bots
- vuln-triage: checks whether a new vuln or breach affects you, how urgent it is, and how to alert you
- cert-watch: certificate transparency, CA distrust, and lookalike domain checks
- incident-playbooks: the next 3 steps for a leaked key, an RCE, a bad dependency, a distrusted CA, a lost phone, an account takeover, phishing or prompt injection
- getting-started: a 5-question setup chat

How it works:
- confirms each item with two independent sources and labels rumors as unconfirmed
- critical issues come to you right away, any hour
- everything else goes into one quiet summary
- every alert says what happened, whether you're affected, the next 3 steps, and the deadline
- read-only everywhere, so it never patches or changes anything for you

It checks 3x a day and refreshes your inventory weekly. You get a Monday roundup, plus monthly device and backup checks and a quarterly 2FA audit.

On day one it flagged a site of mine running PHP that needed a patch before an embargoed fix dropped.

Grab it here:
https://t.co/aXNhr1Azzb

### @kunchenguid

@ssbrouhard @bot very useful at a time when everything’s getting hacked!
