# Hardware and budgets

We will distinguish **creating assets** from **running the game**. A cloud service can generate an asset that later runs locally, while running a large generative model locally may impose a different set of requirements.

## Reference environment

The initial reference laptop reports an AMD Ryzen 7 7730U and approximately 15 GB of usable RAM. Its exact graphics configuration, driver version, available graphics memory, and thermal behavior still need a dedicated measurement pass. We will not treat those unknowns as a confirmed GPU budget.

## Proposed starting targets

These are experiment targets, not measured performance results.

| Measure | Initial target or record |
| --- | --- |
| Interactive frame time | Aim for 60 fps; record median and slow frames, not only average fps |
| Time to usable scene | Record cold and warm loads on a documented connection |
| Memory | Record browser/engine memory before load, during play, and after repeated restarts |
| Assets | Record compressed download size and decoded texture/audio cost separately |
| Power and thermals | Record AC/battery state, test duration, and noticeable throttling |
| Input | Keep grid selection responsive on mouse, touch, and keyboard |

## Test protocol

Use a repeatable scene, resolution, settings, and test duration. Close unrelated heavy applications or record their presence. Run each scenario multiple times. Include an idle state, normal play, and a deliberately busy scene.

Compare quality settings and asset variants before deciding that an engine or hardware upgrade is necessary. Make the smallest change that answers the experiment question.

Godot publishes separate requirements for its editor, renderers, and exported applications. Its minimum requirements for a simple project should not be mistaken for a promise about an asset-heavy game. Source: [Godot system requirements](https://docs.godotengine.org/en/stable/about/system_requirements.html).

See [EXP-005](./experiments.md#exp-005-runtime-budget).
