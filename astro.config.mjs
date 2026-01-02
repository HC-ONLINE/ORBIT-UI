// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://HC-ONLINE.github.io', 
  base: '/ORBIT-UI', 
  output: 'static', // GitHub Pages solo soporta sitios estáticos
});