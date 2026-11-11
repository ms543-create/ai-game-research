# AI Game Research

A research workspace for exploring the limits of AI-assisted video game development through programming, audio, 3D models, animation, art, and reproducible experiments.

**Research site:** https://ms543-create.github.io/ai-game-research/

## Local development

Use Node.js 22 or newer.

```sh
npm ci
npm run docs:dev
```

Build and preview production output:

```sh
npm run docs:build
npm run docs:preview
```

## Structure

- Root Markdown files: research tracks, scope, hardware, experiment register, templates, and log.
- `.vitepress/`: navigation, search, theme, and site configuration.
- `.github/workflows/deploy.yml`: build and deployment to GitHub Pages on pushes to `main`.

## Research method

Mark proposed work clearly. Record exact tools/model versions, prompts, settings, failed attempts, human correction time, cost, and in-game performance. Link artifacts and independently defined acceptance tests. Do not claim a test is completed until its evidence exists.

Open `experiment-template.md` to begin a new experiment and add its summary to `research-log.md`.

## Hosting

The site uses VitePress 1.6.4, the stable release selected at setup. GitHub Pages must use **GitHub Actions** as its deployment source. The site base path is `/ai-game-research/`. No API keys or custom server are needed for the documentation site.
