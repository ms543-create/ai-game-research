# Experiment register

All entries below are **proposed**. Promote an entry to completed only after its artifacts, measurements, and conclusions are available.

| ID | Question | Status | Output |
| --- | --- | --- | --- |
| EXP-001 | Can an AI agent deliver a seeded daily challenge? | Proposed | Feature commit and independent tests |
| EXP-002 | Which sound pipeline needs less cleanup? | Proposed | Integrated sound pack and listening notes |
| EXP-003 | Can a generated prop meet our asset budget? | Proposed | Original and optimized GLB plus measurements |
| EXP-004 | Which stack best serves the next playable slice? | Proposed | Comparable small scenes and decision |
| EXP-005 | Where does the reference laptop begin to struggle? | Proposed | Frame-time, memory, and load measurements |
| EXP-006 | Can separate AI outputs form one coherent experience? | Proposed | A complete playable slice and player feedback |
| EXP-007 | Can REA explain our selection and scoring pipeline with evidence? | Proposed | Supported system map, edge-case tests, and one verified change |
| EXP-008 | Which AI-assisted 3D workflow produces the most usable prop? | Proposed | Shared arena-seat brief, editable assets, cleanup and runtime measurements |

## EXP-001 AI feature delivery

Build a reproducible daily puzzle mode. Require deterministic generation, valid answer placement, preserved scoring, and a restart that does not duplicate event handlers. Compare total time and human repair effort across explicitly recorded agent versions.

## EXP-002 Sound pack

Create the same five-sound brief through synthesis and a generated-audio workflow. Compare the integrated result at similar loudness, including rapid repeated events. Record cost and cleanup time.

## EXP-003 Generated 3D prop

Generate a stylized basketball prop, clean it, export it, and render it. Compare the original, an optimized version, and a simple geometric substitute. Decide whether the visual benefit justifies the runtime and cleanup cost.

## EXP-004 Engine comparison

Implement one small interaction with the same art and input requirements in two candidate stacks. Measure performance and change effort before selecting the next engine.

## EXP-005 Runtime budget

Increase scene complexity in documented steps. Record frame-time distribution, memory, and loading behavior. Identify the first failed target and test whether optimization recovers it.

## EXP-006 Integrated playable slice

Combine one verified code feature, a sound pack, and one visual asset. Ask testers to play without verbal coaching. Record confusion, input failures, and whether the added presentation helps the game.

Use the [experiment template](./experiment-template.md). Summaries belong in the [research log](./research-log.md).

## EXP-007 REA game-system investigation

Trace our own word-selection feature from input to answer validation, score update, and rendering. Compare REA-supported claims with pinned source and independent edge-case tests. See the [REA research page](./rea.md#our-first-rea-experiment).

## EXP-008 AI and 3D workflow comparison

Compare a simple Blender baseline, agent-driven Blender work, and a generated-asset service on the same original arena-seat brief. Record editability, defects, cleanup time, cost, and rendering performance. Study precision CAD and character animation separately. See the [3D research plan](./ai-3d-research.md).
