import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Game Lab',
  description: 'A research notebook for exploring AI-assisted game development through reproducible experiments.',
  base: '/ai-game-research/',
  lang: 'en-US',
  cleanUrls: false,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#161b26' }]],
  themeConfig: {
    siteTitle: 'AI Game Lab',
    nav: [
      { text: 'Start here', link: '/overview' },
      { text: 'Technology tracks', link: '/engines' },
      { text: 'Experiments', link: '/experiments' },
      { text: 'Research log', link: '/research-log' }
    ],
    sidebar: [
      { text: 'The project', items: [
        { text: 'Mission and scope', link: '/overview' },
        { text: 'Hardware and budgets', link: '/hardware' },
        { text: 'Roadmap', link: '/roadmap' }
      ] },
      { text: 'Technology tracks', items: [
        { text: 'Game engines and the web', link: '/engines' },
        { text: 'AI programming', link: '/programming' },
        { text: 'Audio and music', link: '/audio' },
        { text: '3D models and animation', link: '/models' },
        { text: 'Art and interface', link: '/art' }
      ] },
      { text: 'Evidence', items: [
        { text: 'Experiment register', link: '/experiments' },
        { text: 'Experiment template', link: '/experiment-template' },
        { text: 'Research log', link: '/research-log' },
        { text: 'Sources and asset records', link: '/sources' }
      ] }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    editLink: { pattern: 'https://github.com/ms543-create/ai-game-research/edit/main/:path', text: 'Improve this research page' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/ms543-create/ai-game-research' }],
    footer: { message: 'Research claims need evidence. Proposed experiments are not completed results.', copyright: 'AI Game Lab · An independent game development research project' }
  }
})
