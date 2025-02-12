import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://shuriken-group.github.io',
  base: '/Shuriken-doc',
  integrations: [react(), tailwind(), mdx()],
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    ssr: {
      noExternal: ['prismjs'],
    },
    optimizeDeps: {
      include: ['prismjs'],
      exclude: [
        'prismjs/components/prism-rust',
        'prismjs/components/prism-python',
        'prismjs/components/prism-cpp'
      ]
    }
  }
});
