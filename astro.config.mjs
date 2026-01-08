import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // REMPLACE par ton nom d'utilisateur GitHub
  site: 'https://aureliedjied.github.io', 
  integrations: [tailwind()],
});