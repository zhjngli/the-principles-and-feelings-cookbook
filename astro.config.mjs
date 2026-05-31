import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import rehypeExternalLinks from 'rehype-external-links'
import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
  site: 'https://principles-cookbook.netlify.app',
  trailingSlash: 'never',
  // 'file' (not 'directory') so output is recipes/cooking-dumplings.html, served at the
  // slash-less URL with a 200 — matching legacy trailingSlash:'never' (no 301 to a trailing slash).
  build: { format: 'file' },
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]
  },
  integrations: [
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'the principles and feelings cookbook',
        short_name: 'cookbook',
        description: 'the principles and feelings cookbook',
        start_url: '/',
        background_color: '#f0ead6',
        theme_color: '#f0ead6',
        display: 'standalone',
        icons: [{ src: '/icons/master-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }]
      },
      workbox: { globPatterns: ['**/*.{html,css,js,svg,png,woff,woff2}'], navigateFallback: '/404' }
    })
  ]
})
