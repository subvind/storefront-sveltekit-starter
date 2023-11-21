import { resolve } from 'path'

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $houdini: resolve('./$houdini'),
      $components: resolve('./src/lib/components'),
      $lib: resolve('./src/lib'),
      $stores: resolve('./src/stores'),
    },
  },
};

export default config;

