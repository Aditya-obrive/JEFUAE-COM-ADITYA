const siteUrl = 'https://www.jefuae.com';

const routes = [
  '/',
  '/about-us',
  '/home/faqs',
  '/about-us/faqs',
  '/leadership-team/faqs',
  '/oilandgas',
  '/powerutilities',
  '/manufacturingplant',
  '/processplant',
  '/commercialbuilding',
  '/renewableenergy',
  '/renewableenergy/faqs',
  '/oilandgas/faqs',
  '/powerutilities/faqs',
  '/manufacturingplant/faqs',
  '/processplant/faqs',
  '/commercialbuilding/faqs',
  '/earthing-studies',
  '/lightning-protection-studies',
  '/lightning-protection-studies/faqs',
  '/power-system-studies',
  '/power-quality-studies',
  '/instrumentation-earthing-studies',
  '/emi-emc',
  '/get-in-touch',
];

import { getLocationServiceParams } from '@/data/globalArchitecture';

export default function sitemap() {
  const locationRoutes = getLocationServiceParams().flatMap(({ country, city, service }) => [`/${country}/${city}`, `/${country}/${city}/${service}`, ...(service === 'power-system-studies' ? [`/${country}/${city}/${service}/faq`] : [])]);
  return [...routes, ...locationRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' || path === '/renewableenergy' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1.0 : path === '/renewableenergy' ? 0.8 : 0.6,
  }));
}
