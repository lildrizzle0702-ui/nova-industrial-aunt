import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { products, seo } from './src/config/factory.config';
import { insights } from './src/data/insights';

function sitemapRobotsPlugin() {
  return {
    name: 'sitemap-robots',
    closeBundle() {
      const staticRoutes = [
        '/',
        '/products',
        '/about',
        '/capabilities',
        '/quality',
        '/contact',
        '/request-quote',
        '/inquiry',
        '/compare',
        '/insights',
      ];
      const productRoutes = products.map((p) => `/products/${p.slug}`);
      const insightRoutes = insights.map((i) => `/insights/${i.slug}`);
      const routes = [...staticRoutes, ...productRoutes, ...insightRoutes];
      const siteUrl = seo.siteUrl.replace(/\/$/, '');

      const urlset = routes
        .map(
          (route) =>
            `  <url><loc>${siteUrl}${route}</loc><changefreq>weekly</changefreq><priority>${route === '/' ? '1.0' : '0.7'}</priority></url>`,
        )
        .join('\n');

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;
      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

      const dist = path.resolve('dist');
      fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
      fs.writeFileSync(path.join(dist, 'robots.txt'), robots);
    },
  };
}

// GitHub Pages project site uses a sub-path; keep this for the current deployment target.
export default defineConfig({
  base: '/nova-industrial-aunt/',
  plugins: [react(), sitemapRobotsPlugin()],
  server: {
    port: 5180,
    host: true,
  },
  preview: {
    port: 5180,
    host: true,
  },
});
