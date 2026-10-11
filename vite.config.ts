import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site uses a sub-path; keep this for the current deployment target.
export default defineConfig({
  base: '/nova-industrial-template/',
  plugins: [react()],
  server: {
    port: 5180,
    host: true,
  },
  preview: {
    port: 5180,
    host: true,
  },
});
