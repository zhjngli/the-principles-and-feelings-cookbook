import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: 'https://principles-cookbook.netlify.app',
  trailingSlash: 'never',
  build: { format: 'directory' },
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]
  },
  integrations: [sitemap()]
})
