// @ts-check
import { defineConfig } from 'astro/config';
import { copyFile } from 'node:fs/promises';

import mdx from '@astrojs/mdx';

// Cloudflare serves the nearest 404.html for missing pages; Astro only writes one at the
// root, so copy the Arabic 404 to ar/404.html to cover everything under /ar
/** @type {import('astro').AstroIntegration} */
const arabic404 = {
  name: 'arabic-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await copyFile(new URL('ar/404/index.html', dir), new URL('ar/404.html', dir));
    },
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), arabic404],
});
