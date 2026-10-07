import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // Project site: assets must resolve under /nova-industrial-template/ on
  // GitHub Pages, while dev server stays at the root.
  base: command === 'build' ? '/nova-industrial-template/' : '/',
  plugins: [react()],
  server: {
    port: 5180,
    host: true,
  },
  preview: {
    port: 5180,
    host: true,
  },
}));
