import { getLocationServiceParams, resolveLocationRoute } from '@/data/globalArchitecture';

export { getLocationServiceParams, resolveLocationRoute };

export function locationPath(country, city, service = '') {
  return `/${[country, city, service].filter(Boolean).join('/')}`;
}

export function locationFaqPath(country, city, service) {
  return `${locationPath(country, city, service)}/faq`;
}
