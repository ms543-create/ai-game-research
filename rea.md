---
title: REA and how games are made
description: Learn game architecture through evidence-based reverse engineering, with REA case studies and interactive mechanics examples.
---

<script setup>
import ReaMechanics from './.vitepress/theme/ReaMechanics.vue'
</script>

# REA and how games are made

**Research review · November 10, 2026 · Proposed tool, not installed or tested in this project**

[REA — Reverse Engineer Anything](https://github.com/morluto/rea) connects an AI agent to software-analysis tools. For our research, its value is the possibility of moving from “this mechanic feels good” to an evidence-based explanation of the rules and code behind it.

REA is an investigation tool. It does not replace a game engine or generate a complete game's code, soundtrack, models, and design decisions automatically.

## What is inside a game

A game is a set of systems that repeatedly turn player input and elapsed time into a new state, then communicate that state through images, sound, and feedback.

| Layer | What it does | NBA word-search example |
| --- | --- | --- |
| Input | Interprets mouse, keyboard, touch, or controller actions | Convert a drag into grid coordinates |
| Rules and state | Determines what is allowed and what changes | Validate an answer; update score, streak, and solved words |
| Simulation and timing | Advances behavior over time | Run the round clock; pause while instructions are open |
| Rendering and interface | Shows the current state | Highlight letters and update the scoreboard |
| Audio | Communicates events and atmosphere | Play a correct-answer cue or a buzzer |
| Assets and content | Supplies data used by the systems | Clue records, fonts, textures, sounds, and models |
| Persistence | Retains selected information between sessions | Save a personal best |
| Build and delivery | Turns source and assets into a runnable game | Bundle files and publish a browser build |

The exact architecture varies by game. A physics-heavy 3D game has different needs from a word search, but both depend on explicit rules, state transitions, and predictable integration.

## Building forward and investigating backward

In ordinary development, we begin with a design and implement its systems. Reverse engineering starts with an existing artifact or observed behavior and works toward an explanation. Watching a game can reveal its visible rules; deeper analysis may expose functions, data, and relationships that help explain why the behavior occurs.

The key distinction is evidence. An AI agent can suggest that a game uses a certain algorithm, but that remains a hypothesis until observations or inspected code support it. Similar behavior does not prove identical implementation.

## What REA documents

The repository describes local analysis exposed through MCP, a standard way for agents to call tools, and through a command-line interface. Depending on the target, REA can return code structure, references, instructions, pseudocode, package inventories, and recorded observations. Each analysis route has its own prerequisites and limitations.

| Route | Potential learning value for games | Important boundary |
| --- | --- | --- |
| JavaScript application analysis | Map modules and trace a feature in a browser/Electron game | Static relationships are not proof that a path ran during play |
| Native binary analysis | Study a small compiled calculation and its callers | Requires a compatible analysis provider; pseudocode can be incomplete |
| Unity IL2CPP metadata inspection | Identify retained assembly, type, and method information | Metadata does not reconstruct an entire Unity project |
| Godot PCK inspection | Understand package contents and resource organization | Archive inspection does not reveal every runtime rule |
| Browser observation | Compare input, page changes, scripts, and observed requests | A recording covers only the actions actually exercised |

Source: [REA README at the reviewed commit](https://github.com/morluto/rea/blob/e2585aa7ce31c37866ca46991ec656fdffaa3b90/README.md). Repository `main` and the released npm package can differ; record both before an experiment.

## Case study one — sound panning in DX-Ball

REA's published [DX-Ball case study](https://rea.tools/showcase/dx-ball/) traces how the horizontal position of a brick hit becomes a left/right sound value. Its first decompiler result omits useful input information, so the investigation follows instructions, a caller, and stored constants. The reconstruction project then checks the C implementation against the original function and its compiled output.

The lesson for game development is that audio is connected to game state through deliberate calculations. It also shows why a plausible decompiler explanation needs verification. The case study reports a tested function reconstruction, not proof that every system in the game has been recovered or made playable. We have reviewed the published account, not rerun its tests.

## Case study two — repeating patterns in TH04

The [TH04 case study](https://rea.tools/showcase/th04/) examines a helper used to distribute a ring of projectiles and turn it toward the player. It connects instruction-level evidence to angular spacing, an aiming offset, and the pattern's rotation. The project also documents compiler comparisons for the surrounding bullet-generation code.

The transferable lesson is that a visually complex pattern can come from a small rule applied repeatedly. Pattern timing, controls, rendering, and hardware behavior still require separate investigation. We are using this as a learning example rather than adopting the original game's code or assets.

## Try the underlying ideas

These are original teaching examples, **not REA output, recovered source, or exact reimplementations** of the case studies. The audio example uses the Web Audio API's normalized pan range; the DX-Ball study describes a different numeric representation. The ring uses degrees rather than TH04's byte-sized angle units.

<ReaMechanics />

The same ideas could support our own game: a solved word's position can place a sound in the stereo field, and a short rule can arrange celebration particles around a scoreboard. These are proposed applications, not features already added to the game.

## Our first REA experiment

**EXP-007 — Explain the word-selection pipeline in our own game.**

Use a fixed snapshot of our JavaScript game as the target. Ask the agent to trace input coordinates through straight-line validation, answer lookup, scoring, and visual feedback. Compare the explanation with the source and independently written tests.

1. Pin the game commit, REA release, agent/model, and analysis settings.
2. Ask a narrow question about valid, reversed, diagonal, duplicate, and invalid selections.
3. Retain the source locations and evidence supporting each claimed relationship.
4. Mark inferred or unavailable behavior explicitly.
5. Run tests of the actual game and check the explanation against their outcomes.
6. Make one small original improvement and verify that it preserves the other rules.

Success means a correct, supported system map and a working change. It does not mean recovering a screenshot or producing a confident description.

## Practical fit and limits

Start with JavaScript analysis, since it matches our game and avoids adding a native decompiler solely for an initial experiment. The [JavaScript workflow guide](https://github.com/morluto/rea/blob/e2585aa7ce31c37866ca46991ec656fdffaa3b90/docs/guides/javascript/javascript-application-workflows.md) distinguishes structural relationships, semantic tracing, observations, and unknowns.

For native targets, check the provider and host support first. REA's [Windows Ghidra guide](https://github.com/morluto/rea/blob/e2585aa7ce31c37866ca46991ec656fdffaa3b90/docs/providers/windows-ghidra-p0.md) describes an experimental, bounded workflow rather than general feature parity. We have not measured REA's memory use or native analysis speed on the reference laptop.

The first target should be our own game or another explicitly permitted learning project. REA's MIT license covers its authored software; it does not supply rights to a target game's code, art, or soundtrack. Our objective is to understand systems and create original implementations.

## Further reading

- [REA repository](https://github.com/morluto/rea)
- [DX-Ball sound-pan investigation](https://rea.tools/showcase/dx-ball/)
- [TH04 pattern investigation](https://rea.tools/showcase/th04/)
- [Programming research](./programming.md)
- [AI and 3D research plan](./ai-3d-research.md)
- [Experiment register](./experiments.md)
