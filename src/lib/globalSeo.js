import { locationPath } from '@/lib/globalRouting';

const siteUrl = 'https://www.jefuae.com';

export function createLocationMetadata({ country, city, service, locale = 'en' }) {
  const path = locationPath(country.slug, city.slug, service.slug);
  const localTitle = service.name + (city.seo?.title ? ` in ${city.name}` : '');
  const title = locale === 'ar' ? `${service.name} | ${city.name} | JEF UAE` : `${localTitle} | JEF UAE`;
  const description = city.seo?.description || country.seo.description;
  const canonical = `${siteUrl}${path}`;
  const languages = Object.fromEntries(country.supportedLocales.map((code) => [code, `${canonical}?lang=${code}`]));

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: { title, description, url: canonical, siteName: 'JEF UAE', type: 'website' },
    robots: { index: true, follow: true },
  };
}

export function createLocationSchema({ country, city, service, locale = 'en' }) {
  const url = `${siteUrl}${locationPath(country.slug, city.slug, service.slug)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${url}#service`, name: service.name, url, provider: { '@id': `${siteUrl}/#organization` }, areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'Country', name: country.name } }, inLanguage: locale },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: country.name, item: `${siteUrl}/${country.slug}` },
        { '@type': 'ListItem', position: 3, name: city.name, item: `${siteUrl}/${country.slug}/${city.slug}` },
        { '@type': 'ListItem', position: 4, name: service.name, item: url },
      ] },
    ],
  };
}
