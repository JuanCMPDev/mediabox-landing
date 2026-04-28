// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://createmediabox.dev',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    react(),
    sitemap(),
    icon({
      include: {
        lucide: [
          'server', 'cpu', 'terminal', 'bot', 'globe', 'shield',
          'play', 'film', 'tv', 'download', 'hard-drive', 'wrench',
          'arrow-right', 'github', 'menu', 'x', 'search',
          'chevron-right', 'chevron-down', 'external-link',
          'copy', 'check', 'globe-2', 'zap', 'layers',
          'monitor', 'cloud', 'home', 'book-open', 'laptop',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
