import { defineConfig } from 'astro/config';
// Import /static for a static site
import vercelStatic from '@astrojs/vercel/static';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  adapter: vercelStatic(),
});
