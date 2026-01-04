// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://alex-zhang97.github.io',
  base: '/Portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
