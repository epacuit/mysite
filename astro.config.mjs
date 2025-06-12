import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import netlify from '@astrojs/netlify';  // Added

export default defineConfig({
  site: 'https://pacuit.org',
  output: 'server',   
  adapter: netlify(),  
  integrations: [tailwind(), react()],
    markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

});
