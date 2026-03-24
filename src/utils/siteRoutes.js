export const SITE_ORIGIN = 'https://taifamobile.co.ke';

export const canonicalRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0', aliases: ['/home'] },
  { path: '/about-us', changefreq: 'monthly', priority: '0.8', aliases: ['/about'] },
  { path: '/sms', changefreq: 'monthly', priority: '0.9', aliases: ['/solutions/sms'] },
  { path: '/data', changefreq: 'monthly', priority: '0.9', aliases: ['/solutions/data'] },
  { path: '/voice', changefreq: 'monthly', priority: '0.9', aliases: ['/solutions/voice'] },
  { path: '/ussd', changefreq: 'monthly', priority: '0.8', aliases: ['/solutions/ussd'] },
  { path: '/shortcode', changefreq: 'monthly', priority: '0.8', aliases: ['/solutions/shortcode'] },
  { path: '/payment', changefreq: 'monthly', priority: '0.9', aliases: ['/solutions/payment'] },
  { path: '/call-back', changefreq: 'monthly', priority: '0.7', aliases: ['/solutions/crbt'] },
  { path: '/airtime', changefreq: 'monthly', priority: '0.7', aliases: ['/solutions/airtime'] },
  { path: '/solutions', changefreq: 'monthly', priority: '0.8', aliases: [] },
  { path: '/contact-us', changefreq: 'monthly', priority: '0.8', aliases: ['/contact'] },
  { path: '/docs', changefreq: 'monthly', priority: '0.6', aliases: [] },
  { path: '/pricing', changefreq: 'monthly', priority: '0.8', aliases: [] },
  { path: '/careers', changefreq: 'monthly', priority: '0.6', aliases: ['/career'] },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3', aliases: [] },
  { path: '/terms', changefreq: 'yearly', priority: '0.3', aliases: [] },
  { path: '/cookies', changefreq: 'yearly', priority: '0.2', aliases: [] },
  { path: '/security', changefreq: 'monthly', priority: '0.4', aliases: [] },
  { path: '/sign-in', changefreq: 'monthly', priority: '0.3', aliases: ['/login'], includeInSitemap: false },
];

export const sitemapRoutes = canonicalRoutes.filter(
  ({ includeInSitemap = true }) => includeInSitemap
);

export const normalizePath = (pathname = '/') => {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const aliasToCanonicalEntries = canonicalRoutes.flatMap(({ path, aliases }) => [
  [path, path],
  ...aliases.map((alias) => [alias, path]),
]);

export const canonicalPathByRoute = Object.fromEntries(aliasToCanonicalEntries);

export const getCanonicalPath = (pathname = '/') => {
  const normalized = normalizePath(pathname);
  return canonicalPathByRoute[normalized] || normalized;
};
