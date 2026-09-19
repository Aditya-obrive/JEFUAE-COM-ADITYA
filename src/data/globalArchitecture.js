/**
 * Global location architecture.
 *
 * Keep entities here instead of coupling country/city/service decisions to
 * route components. Only entries marked published are exposed by the public
 * dynamic routes and selectors.
 */
export const locales = {
  en: { code: 'en', label: 'English', dir: 'ltr' },
  ar: { code: 'ar', label: 'Arabic', dir: 'rtl' },
};

export const countries = {
  uae: {
    id: 'uae',
    name: 'United Arab Emirates',
    slug: 'uae',
    code: 'AE',
    timezone: 'Asia/Dubai',
    published: true,
    supportedLocales: ['en', 'ar'],
    seo: {
      title: 'JEF UAE | Electrical Engineering & Safety Solutions',
      description: 'JEF electrical engineering, power system and safety studies across the United Arab Emirates.',
    },
  },
};

export const cities = {
  dubai: {
    id: 'dubai',
    name: 'Dubai',
    slug: 'dubai',
    countrySlug: 'uae',
    published: true,
    tier: 1,
    supportedLocales: ['en', 'ar'],
    // Deliberately empty until verified local projects, office details or
    // regulatory content are supplied by JEF.
    localContent: {},
    seo: {
      title: 'Electrical Engineering Services in Dubai | JEF UAE',
      description: 'Explore JEF electrical engineering and safety study services available for projects in Dubai.',
    },
  },
};

export const services = {
  'power-system-studies': {
    id: 'power-system-studies',
    slug: 'power-system-studies',
    name: 'Power System Studies',
    legacyPath: '/power-system-studies',
    faq: true,
    component: 'power-system-studies',
  },
  'earthing-studies': {
    id: 'earthing-studies',
    slug: 'earthing-studies',
    name: 'Earthing Studies',
    legacyPath: '/earthing-studies',
    faq: false,
    component: 'earthing-studies',
  },
  'lightning-protection-studies': {
    id: 'lightning-protection-studies',
    slug: 'lightning-protection-studies',
    name: 'Lightning Protection Studies',
    legacyPath: '/lightning-protection-studies',
    faq: false,
    component: 'lightning-protection-studies',
  },
  'power-quality-studies': {
    id: 'power-quality-studies',
    slug: 'power-quality-studies',
    name: 'Power Quality & Root Cause Analysis',
    legacyPath: '/power-quality-studies',
    faq: false,
    component: 'power-quality-studies',
  },
  'instrumentation-earthing-studies': {
    id: 'instrumentation-earthing-studies',
    slug: 'instrumentation-earthing-studies',
    name: 'Instrumentation Earthing Studies',
    legacyPath: '/instrumentation-earthing-studies',
    faq: false,
    component: 'instrumentation-earthing-studies',
  },
  'emi-emc': {
    id: 'emi-emc',
    slug: 'emi-emc',
    name: 'EMI / EMC',
    legacyPath: '/emi-emc',
    faq: false,
    component: 'emi-emc',
  },
};

export const industries = {
  oilAndGas: { id: 'oil-and-gas', name: 'Oil & Gas' },
  powerUtilities: { id: 'power-utilities', name: 'Power Utilities' },
  manufacturing: { id: 'manufacturing', name: 'Manufacturing' },
  processPlants: { id: 'process-plants', name: 'Process Plants' },
  renewables: { id: 'renewables', name: 'Renewables' },
};

export function getCountry(countrySlug) {
  const country = countries[countrySlug];
  return country?.published ? country : null;
}

export function getCity(countrySlug, citySlug) {
  const city = cities[citySlug];
  return city?.published && city.countrySlug === countrySlug ? city : null;
}

export function getService(serviceSlug) {
  return services[serviceSlug] || null;
}

export function getPublishedServices(countrySlug, citySlug) {
  const city = getCity(countrySlug, citySlug);
  if (!city) return [];
  return Object.values(services);
}

export function resolveLocationRoute({ countrySlug, citySlug, serviceSlug }) {
  const country = getCountry(countrySlug);
  const city = country ? getCity(countrySlug, citySlug) : null;
  const service = city ? getService(serviceSlug) : null;
  const isPublished = Boolean(country && city && service);
  return { country, city, service, isPublished };
}

export function getLocationServiceParams() {
  return Object.values(cities)
    .filter((city) => city.published)
    .flatMap((city) => getPublishedServices(city.countrySlug, city.slug).map((service) => ({
      country: city.countrySlug,
      city: city.slug,
      service: service.slug,
    })));
}
