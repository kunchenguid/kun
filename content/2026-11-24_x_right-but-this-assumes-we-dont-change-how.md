---
source: x
id: 2125331134137704803
url: "https://x.com/kunchenguid/status/2125331134137704803"
created_at: "2026-11-24T20:50:03.000Z"
type: reply
conversation_id: 2125282481230565699
thread_complete: false
thread_note: one-hop replied_to/quoted context only; full conversation not walked
parent_urls:
  - "https://x.com/cleverhoods/status/2125323153241174130"
parents:
  - id: 2125323153241174130
    author: cleverhoods
    url: "https://x.com/cleverhoods/status/2125323153241174130"
    type: replied_to
---

### @cleverhoods

Heat can radiate through vacuum, but at the temperatures chips can tolerate, radiation is a very weak way to get rid of heat. Vacuum is one of the best insulators there is.

Since all the heat has to be radiated away, surface area is realistically the only thing that matters. So the question is: how big a surface are we talking about?

For a single 120 kW rack (one modern AI rack, e.g. NVL72-class), it would take around 175 m² of radiator, about two-thirds of a doubles tennis court. And that's the ideal case.

This is absolutely feasible with modern folding techniques and reusable rockets. However, the problem then shifts to maintainability.

Space is not empty, and it's a harsh environment. The bigger your surface, the more likely it is to be hit by micrometeoroids and debris. These can punch holes in the radiator and its coolant lines, while charged particles slowly degrade both the radiator surface and the electronics. You can't fix any of this. It would take a dedicated space mission, which wouldn't be worth the money.

But even if we had a continuous presence in orbit, there's an additional problem: with huge numbers of these up there, a catastrophic failure of even one datacenter can start a cascade of satellite collisions. At the altitudes being proposed (SpaceX's filing goes up to 2,000 km), that debris could make parts of Earth orbit too dangerous for satellites, let alone crewed missions, for decades. In the highest orbits it could take centuries before it finally burns up in the atmosphere.

### @kunchenguid

@cleverhoods right, but this assumes we don't change how we design chips..

why we do assume those constraints?

we should absolutely design new chips that specifically target the condition in space so they work well there, right?
