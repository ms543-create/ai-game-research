# AI programming

The question is whether an AI coding workflow can deliver reliable game features with an understandable codebase. Code volume and speed of the first draft are insufficient measures.

## Tasks to compare

The [REA research page](./rea.md) explores the complementary task of understanding existing game systems through analysis evidence, before designing an original change.

| Task | Example | Acceptance evidence |
| --- | --- | --- |
| Implement a feature | Add a daily challenge with a reproducible puzzle seed | Same seed yields the same puzzle; every answer is present |
| Debug behavior | Fix a timer that advances while the game is paused | A regression test fails before the fix and passes afterward |
| Refactor | Separate puzzle generation from presentation | Behavior is preserved and the module can be tested independently |
| Integrate an asset | Add sound cues with mute and volume controls | Works after user interaction; settings remain consistent |
| Explain code | Describe the selection algorithm and its edge cases | Explanation agrees with actual behavior on diagonal and reversed paths |

## Experiment design

Give each candidate agent the same task description, starting commit, time budget, and allowed tools. Identify the exact model/version and reasoning settings if exposed. Keep a record of every intervention, including clarification, code repair, dependency setup, and manual testing.

Use tests derived from the requirement rather than copying the generated implementation. For a puzzle generator, useful checks include valid bounds, complete answer paths, seed reproducibility, and rejection of non-straight selections.

## What to measure

- Time to first working version and time to an acceptable version.
- Independent tests passed, defects remaining, and regressions introduced.
- Human correction time and the amount of unfamiliar code requiring review.
- Accessibility and input support across mouse, touch, and keyboard.
- Runtime behavior under repeated restarts, background tabs, and low frame rates.

## Source discipline

Use the selected provider’s official model and tool documentation at the time of the test. Store the reference URL and access date with the experiment. Do not infer a model’s current capabilities from an old product name or compare an unrecorded default setting against a pinned version.

Start with [EXP-001](./experiments.md#exp-001-ai-feature-delivery), using the [shared template](./experiment-template.md).
