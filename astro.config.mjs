import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://horus.pvk96.in',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
