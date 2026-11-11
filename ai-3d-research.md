---
title: AI and 3D research plan
description: A practical research method for Blender, AutoCAD, Fusion, Maya, and generated 3D game assets.
---

# AI and 3D research plan

**Source review · November 10, 2026 · Workflow comparisons are proposed, not completed**

Our question should be: **Which AI-assisted workflow produces an editable asset that works in our game, with an acceptable amount of human correction?** That is more useful than asking which tool makes the most impressive preview.

## Separate four kinds of AI assistance

| Approach | What AI contributes | What we still need to establish |
| --- | --- | --- |
| Generate geometry or textures | Produces a mesh or surface from a prompt or image | Shape quality, topology, texture quality, export, and cleanup cost |
| Operate a modeling application | Writes scripts or calls tools to manipulate a scene | Correct operations, editable structure, predictable changes, and recoverability |
| Assist precise CAD work | Helps with drawing tasks or explores constrained designs | Dimensions, constraints, useful edit history, and export suitability |
| Generate animation | Produces or adapts motion for a character | Rig compatibility, believable movement, transitions, and engine playback |

These are different tasks. A realistic image is not a mesh, a dense mesh is not a clean rig, and a CAD design is not automatically an efficient game asset.

## What the current documentation supports

### Blender — editable scenes and agent-driven operations

Blender can be part of an AI workflow through its Python interface and external integrations. Blender Lab documents an MCP server that gives a language-model client access to the Python API and scene operations. Its page explicitly says connecting an LLM requires external components rather than a built-in LLM connection. This is evidence for agent-assisted operation, not a promise that Blender includes a universal text-to-3D generator.

**Research task:** ask an agent to build an original modular arena prop with named parts, change its dimensions, and export it. Inspect the saved scene, scripts, and modifications. A bridge that executes generated Python can change files, so use a disposable test project with recoverable copies when we reach that experiment.

Source: [Blender Lab MCP server](https://www.blender.org/lab/mcp-server/).

### AutoCAD — drawing assistance and reusable blocks

Autodesk lists AI-driven features such as Smart Blocks, object detection, markup assistance, and Autodesk Assistant. Its feature list distinguishes AutoCAD from AutoCAD LT; availability depends on the product/version. Autodesk also lists prompt-based Block Generate for AutoCAD on the Web as a **Tech Preview**. We should record that status rather than describing it as a mature feature across every edition.

**Research task:** use a dimensioned arena-layout or scoreboard-drawing task to test assistance with repeated elements and revisions. Judge dimensional correctness and editability. Do not compare a CAD assistant with a mesh generator as though they produce the same artifact.

Sources: [AutoCAD AI feature list](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/What-are-the-AutoCAD-AI-driven-features.html), [Autodesk AI transparency cards](https://www.autodesk.com/trust/trusted-ai/ai-transparency-cards).

### Fusion — constrained design exploration

Autodesk describes Fusion Generative Design as an exploration tool that produces alternatives from geometric, performance, and manufacturing constraints. That workflow differs from asking for a visually appealing game prop. Its value to our project would need to justify the extra CAD-to-game conversion work and any required product entitlement.

**Research task:** investigate a precisely specified mechanical bracket or equipment stand only if the game needs it. Compare dimensional edits and the resulting mesh export, not only a rendered image.

Source: [Fusion Generative Design overview](https://help.autodesk.com/view/fusion360/ENU/?contextId=GD-OVERVIEW).

### Maya and Flow Studio — animation and generated assets

Autodesk's MotionMaker guide describes machine-learning-assisted character animation in Maya, including a workflow that remaps generated motion to a HumanIK character. Autodesk's Wonder 3D announcement describes text/image-to-3D generation in Flow Studio. These represent different stages: producing an object and producing useful motion for a rig.

**Research task:** later, test one short movement on a known compatible character. Evaluate foot sliding, joint deformation, looping, and playback in the actual engine. Keep this separate from the first static-prop test.

Sources: [MotionMaker QuickStart](https://help.autodesk.com/cloudhelp/2026/ENU/Maya-MotionMaker/files/GUID-473B9D09-124C-4A5C-94F8-F3B4B89FAB18.html), [Autodesk Wonder 3D introduction](https://www.youtube.com/watch?v=oDVq8WpD6-g).

### Meshy and Tripo — candidate asset generators

Meshy documents creation from text and images and several export paths. Tripo documents image-to-3D workflows with post-processing and export. Their own descriptions establish capabilities to test; they do not establish that our outputs will meet a game budget.

**Research task:** use the same original reference image and brief to create one simple prop. Compare multiple attempts rather than selecting one provider's best image against another provider's first failure.

Sources: [Meshy documentation](https://docs.meshy.ai/en), [Tripo image-to-3D guide](https://www.tripo3d.ai/product-doc/model-generation/image-to-3d).

## Begin with one common brief

Use an **original stylized arena seat**, with no brand marks. Specify a seat, backrest, and support structure; a consistent scale; and a short list of colors. Avoid a human character as the first asset because anatomy, rigging, and motion add several independent problems.

Compare three routes:

1. A simple manually or procedurally built Blender baseline.
2. An AI agent operating Blender through recorded scripts or an inspected integration.
3. An image/text-to-3D service followed by Blender cleanup.

Give each route the same desired appearance and final game requirements. Record the operator's familiarity with each tool. Treat a CAD layout or dimensioned object as a separate study, since it answers a different question.

## Define success before generation

These are proposed starting criteria, not completed results or universal industry limits.

| Criterion | Initial test |
| --- | --- |
| Shape and style | Recognizable seat from front, side, and back; all required components present |
| Editability | Widen the seat by 20 percent without breaking the support or materials |
| Geometry | Record triangles and defects before and after cleanup; aim for a first prop under 10,000 triangles |
| Textures | Begin with at most one 1K material texture set; record maps and decoded memory separately |
| Export | GLB imports with correct scale, orientation, materials, and useful part names |
| Runtime | Measure frame times with 1, 20, and 100 instances in the same scene; record instancing settings |
| Human effort | Separate prompting, waiting, cleanup, integration, and debugging minutes |
| Cost | Record credits or billed cost, retries, access plan, and any trial restrictions |

Our target should change when the measurements show it is too loose or unnecessarily strict. We will not declare the reference laptop's limits from a vendor demonstration.

## Run the study in stages

**First session:** review available accounts and installed software, choose the exact tool versions, write the brief, and make the baseline. Do not buy subscriptions or install every candidate just to populate a comparison table.

**Second session:** run the Blender-agent and generation-service routes, preferably with three attempts each under the same time/cost limits. Save failures, original assets, and cleaned exports. Compare standard-view screenshots without provider labels when judging appearance.

**Third session:** import the selected assets into one small game scene. Perform the dimension-change test, check repeated instances, and record runtime measurements. A good render that cannot pass this stage remains a prototype asset.

**Then:** decide whether the next bottleneck is asset generation, cleanup, animation, or the rendering stack. Expand research toward that bottleneck rather than adding more tools indiscriminately.

## Recommended order for this project

Start with **Blender as the inspection and cleanup hub**, a simple baseline, and one generated-asset service. This is a proposed workflow based on the need to inspect and edit the exported object, not a benchmark ranking. Research AutoCAD/Fusion in parallel when precision or architectural layouts become relevant, and defer Maya animation until we have a character and a clear motion requirement.

Pair this work with [REA](./rea.md): REA helps investigate how an existing game system works; modeling tools help create new assets. Together they cover understanding and construction, but each still needs an integration test.

Use the [experiment template](./experiment-template.md) for EXP-008 and link all evidence in the [research log](./research-log.md).
