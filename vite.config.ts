import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Root path on Vercel (VERCEL env var is set automatically on Vercel),
// sub-path /nova-industrial-template/ everywhere else (GitHub Pages project site).
const base = process.env.VERCEL ? '/' : '/nova-industrial-template/';

export default defineConfig({
  base,
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
