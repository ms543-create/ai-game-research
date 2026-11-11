# Mission and scope

We are investigating how far advanced AI tools can help a small team create an impressive, playable video game. This repository is the research workspace; the VitePress site is its readable front door.

## Starting point

The initial game concept combines NBA trivia with word searches. It gives us a small existing mechanic against which to test richer presentation, audio, animation, and possible 3D scenes. The research is broader than one genre or engine.

The research site is **documentation**, not the game runtime. GitHub Pages serves the documentation as a static website. If a future game needs secret API keys, a database, or server logic, those components need a separate backend.

## Questions worth answering

- Can a coding agent implement a clearly specified feature and pass independently defined acceptance tests?
- Can generated sounds and music work together without clipping, abrupt transitions, or excessive download size?
- Can a generated 3D asset survive import, cleanup, lighting, animation, and a real-time performance test?
- Which work requires the most human correction, even when the initial output looks convincing?
- What can run comfortably on the reference laptop, and what should be generated in the cloud?

## How we judge progress

An experiment should produce a playable artifact or an inspectable asset, reproducible settings, a record of failures, and a short decision. We evaluate output quality, integration effort, reliability, cost, and performance separately.

“Most advanced” is a moving target. Every comparison must name the exact tool, model or version, access date, settings, and task. A provider’s benchmark or promotional clip is background information, not our result.

## Research status

The technology pages are an initial shortlist and test plan. The proposed experiments have **not** been executed as part of this repository setup. Completed results will be linked from the [research log](./research-log.md).

## Working method

1. Select a narrow question from the [experiment register](./experiments.md).
2. Define success before generating output.
3. Save the prompt, configuration, artifacts, and measurements.
4. Test in the game, including failure conditions.
5. Write a decision and update the log.

See the [experiment template](./experiment-template.md) and [source and asset records](./sources.md).
