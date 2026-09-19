import { notFound } from 'next/navigation';
import LocationPilotHeader from '@/components/LocationPilotHeader';
import LocationServiceFaq from '@/components/LocationServiceFaq';
import { getCountry, getCity, getService, getLocationServiceParams } from '@/data/globalArchitecture';
import { createLocationMetadata } from '@/lib/globalSeo';
import { faqs } from '@/app/power-system-studies/faq/page';

export function generateStaticParams() { return getLocationServiceParams().filter(({ service }) => getService(service)?.faq).map((params) => ({ ...params })); }

export async function generateMetadata({ params }) {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = await params;
  const country = getCountry(countrySlug); const city = country && getCity(countrySlug, citySlug); const service = city && getService(serviceSlug);
  if (!country || !city || !service || !service.faq) return {};
  const metadata = createLocationMetadata({ country, city, service });
  return { ...metadata, title: `${service.name} FAQs in ${city.name} | JEF UAE` };
}

export default async function LocationServiceFaqPage({ params }) {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = await params;
  const country = getCountry(countrySlug); const city = country && getCity(countrySlug, citySlug); const service = city && getService(serviceSlug);
  if (!country || !city || !service || !service.faq) notFound();
  return <main className="bg-[#292a2c] text-white"><LocationPilotHeader country={country} city={city} service={service} /><LocationServiceFaq country={country} city={city} service={service} faqs={faqs} /></main>;
}
