# Sources and asset records

Initial references reviewed November 10, 2026. Documentation changes; capture the relevant version and access date again when running an experiment. These are starting points, not endorsements or completed comparisons.

## Technical references

| Area | Official reference | Research purpose |
| --- | --- | --- |
| Documentation | [VitePress](https://vitepress.dev/) | Research site structure and deployment |
| Hosting | [GitHub Pages documentation](https://docs.github.com/en/pages) | Static publishing and workflow configuration |
| 2D web games | [Phaser](https://docs.phaser.io/phaser/getting-started/what-is-phaser) | Browser game framework candidate |
| 3D web rendering | [Three.js](https://threejs.org/docs/) | Scene, animation, model, and renderer APIs |
| Editor-based engine | [Godot requirements](https://docs.godotengine.org/en/stable/about/system_requirements.html) | Editor and renderer constraints |
| Audio | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | Browser audio processing and playback |
| Musical audio | [Tone.js](https://tonejs.github.io/) | Scheduling and synthesis candidate |
| Generated audio | [ElevenLabs](https://elevenlabs.io/docs/overview) | Sound and speech workflow research |
| Generated 3D | [Meshy](https://docs.meshy.ai/en) | Generation and asset export candidate |
| 3D cleanup | [Blender glTF](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html) | Model inspection and export pipeline |

## Additional research references

Reviewed November 10, 2026. Tool availability, preview status, and host support should be rechecked at the time of an experiment.

- [REA repository at reviewed commit](https://github.com/morluto/rea/tree/e2585aa7ce31c37866ca46991ec656fdffaa3b90)
- [REA DX-Ball case study](https://rea.tools/showcase/dx-ball/)
- [REA TH04 case study](https://rea.tools/showcase/th04/)
- [Blender Lab MCP server](https://www.blender.org/lab/mcp-server/)
- [AutoCAD AI feature list](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/What-are-the-AutoCAD-AI-driven-features.html)
- [Autodesk AI transparency cards](https://www.autodesk.com/trust/trusted-ai/ai-transparency-cards)
- [Fusion Generative Design overview](https://help.autodesk.com/view/fusion360/ENU/?contextId=GD-OVERVIEW)
- [Maya MotionMaker QuickStart](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-MotionMaker/files/GUID-473B9D09-124C-4A5C-94F8-F3B4B89FAB18.html)
- [Autodesk Wonder 3D introduction](https://www.youtube.com/watch?v=oDVq8WpD6-g)
- [Tripo image-to-3D workflow](https://www.tripo3d.ai/product-doc/model-generation/image-to-3d)

## Asset provenance record

Create one record for each asset selected for the game.

| Field | Record |
| --- | --- |
| Asset ID and file path | |
| Creator/provider and exact model/version | |
| Prompt and generation settings | |
| Reference inputs and their permissions | |
| Creation date and original file hash | |
| License or provider terms URL and review date | |
| Attribution or use restrictions | |
| Human edits and export settings | |
| Final runtime file and source commit | |

Provider terms, technical export support, and permission to use a specific input are separate questions. Record each where relevant. Keep original outputs and edited versions distinguishable.

## Repository conventions

Keep large binary assets out of the documentation source unless they are necessary for a page. Link to an appropriately sized artifact or release for experiment evidence. Never put provider API keys, access tokens, or private account exports into the repository or published site.
