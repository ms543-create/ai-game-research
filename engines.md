# Game engines and the web

The engine should serve the game we can finish. We will compare a small scene or mechanic across plausible stacks before committing to a larger rewrite.

## Initial candidates

| Candidate | Role in the research | First test | Current status |
| --- | --- | --- | --- |
| HTML, CSS, JavaScript | Preserve the lightweight trivia/word-search baseline | Input, accessibility, scoring, and browser delivery | Baseline approach |
| Phaser | A framework focused on 2D browser games | Rebuild one grid interaction with animated feedback | Candidate |
| Godot | An editor-based 2D/3D game workflow | Import one asset and export a small playable scene | Candidate |
| Three.js | A browser 3D rendering library | A lit court diorama with one animated prop | Candidate |

Phaser’s documentation describes it as a JavaScript/TypeScript 2D framework with WebGL and Canvas rendering. Three.js exposes rendering, animation, loading, and related APIs; a complete game still needs appropriate input, game-state, and physics decisions. These roles should not be treated as interchangeable.

Sources: [Phaser introduction](https://docs.phaser.io/phaser/getting-started/what-is-phaser), [Three.js documentation](https://threejs.org/docs/), [Godot documentation](https://docs.godotengine.org/en/stable/).

## A fair comparison

Keep the content, output resolution, and acceptance criteria comparable. Measure cold-load time, typical and worst frame times, memory, build size, debugging effort, and how easily a new feature can be added. Record the renderer and browser or engine version.

A screenshot alone cannot decide which stack is easier to maintain. Include at least one modification request after the first implementation, such as adding a hint or changing the scoring rules.

## Decision gate

Use the simplest stack that can deliver the next playable slice. Keep 3D as a focused experiment until we know its runtime cost and asset-cleanup burden. See [EXP-004](./experiments.md#exp-004-engine-comparison).
