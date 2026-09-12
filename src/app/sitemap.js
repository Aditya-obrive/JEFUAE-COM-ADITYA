const siteUrl = 'https://www.jefuae.com';

const routes = [
  '/',
  '/about-us',
  '/about-us/faq',
  '/leadership-team/faq',
  '/industries/oilandgas',
  '/industries/powerutilities',
  '/industries/manufacturingplant',
  '/industries/processplant',
  '/industries/commercialbuilding',
  '/industries/renewableenergy',
  '/earthing-studies',
  '/lightning-protection-studies',
  '/power-system-studies',
  '/power-quality-studies',
  '/instrumentation-earthing-studies',
  '/emi-emc',
  '/renewable-energy-grid-studies/faq',
  '/get-in-touch',
];

export default function sitemap() {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' || path === '/industries/renewableenergy' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1.0 : path === '/industries/renewableenergy' ? 0.8 : 0.6,
  }));
}
