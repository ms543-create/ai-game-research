# 3D models and animation

A generated object is useful when it imports cleanly, renders correctly, and fits the scene’s performance budget. A detailed preview does not establish those properties.

## Candidate pipeline

1. Write a visual brief and preserve any reference image and its permissions.
2. Generate a small prop using a candidate service such as [Meshy](https://docs.meshy.ai/en).
3. Inspect and clean the result in [Blender](https://docs.blender.org/manual/en/latest/).
4. Export a test asset as GLB/glTF and import it into the chosen renderer or engine.
5. Measure the asset inside a scene and compare the original with an optimized version.

Meshy’s documentation describes text/image-based creation and export options. That establishes a candidate workflow, not a guarantee that a particular output will be ready for our game.

## Start with a prop

A basketball, trophy, or arena seat is a more bounded first test than an animated player character. Keep the style brief consistent across attempts. Do not begin with recognizable real-player likenesses or official team branding.

| Inspection area | Questions |
| --- | --- |
| Geometry | Are there holes, disconnected pieces, unnecessary density, or broken normals? |
| Topology | Can the object be simplified or deformed where needed? |
| Materials | Are textures present, correctly assigned, and affordable in memory? |
| Scale | Are dimensions, origin, rotation, and axes correct? |
| Animation | Does a rig exist, and does deformation survive the target animation? |
| Runtime | What are triangle count, draw calls, texture size, load time, and frame-time impact? |

## Asset budget

Set an initial triangle and texture budget before generation, then revise it using measurements. Compare the original asset, a cleaned version, and a simple manually constructed substitute. Record cleanup time as part of the AI workflow’s total cost.

Sources: [Blender glTF export documentation](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html), [Three.js documentation](https://threejs.org/docs/).

See [EXP-003](./experiments.md#exp-003-generated-3d-prop).
