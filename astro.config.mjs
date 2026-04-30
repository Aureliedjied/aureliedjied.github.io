import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://aureliedjied.github.io',
  integrations: [
    mdx(), 
    pagefind(), 
    sitemap({
      // Optionnel : change la priorité de pages principales
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});