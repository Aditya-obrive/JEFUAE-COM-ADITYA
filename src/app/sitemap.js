const siteUrl = 'https://www.jefuae.com';

const routes = [
  '/',
  '/about-us',
  '/home/faqs',
  '/about-us/faqs',
  '/leadership-team/faqs',
  '/industries/oilandgas',
  '/industries/powerutilities',
  '/industries/manufacturingplant',
  '/industries/processplant',
  '/industries/commercialbuilding',
  '/industries/renewableenergy',
  '/industries/renewableenergy/faqs',
  '/industries/oilandgas/faqs',
  '/industries/powerutilities/faqs',
  '/industries/manufacturingplant/faqs',
  '/industries/processplant/faqs',
  '/industries/commercialbuilding/faqs',
  '/earthing-studies',
  '/lightning-protection-studies',
  '/lightning-protection-studies/faqs',
  '/power-system-studies',
  '/power-quality-studies',
  '/instrumentation-earthing-studies',
  '/emi-emc',
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
