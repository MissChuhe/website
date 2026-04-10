import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_ORIGIN, sitemapRoutes } from '../src/utils/siteRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

const buildSitemapXml = () => {
  const urls = sitemapRoutes
    .map(({ path: routePath, changefreq, priority }) => {
      const loc = `${SITE_ORIGIN}${routePath === '/' ? '' : routePath}`;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

await mkdir(publicDir, { recursive: true });
await writeFile(sitemapPath, buildSitemapXml(), 'utf8');

console.log(`Sitemap written to ${sitemapPath}`);
