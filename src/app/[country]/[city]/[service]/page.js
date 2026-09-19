import { notFound } from 'next/navigation';
import LocationPilotHeader from '@/components/LocationPilotHeader';
import { getCountry, getCity, getService, getLocationServiceParams } from '@/data/globalArchitecture';
import { createLocationMetadata, createLocationSchema } from '@/lib/globalSeo';
import PSS from '@/app/power-system-studies/pss';
import EarthingStudiesContent from '@/app/earthing-studies/EarthingStudiesContent';
import LPS from '@/app/lightning-protection-studies/lps';
import PQS from '@/app/power-quality-studies/pqs';
import IES from '@/app/instrumentation-earthing-studies/ies';
import EmiEmc from '@/app/emi-emc/emiemc';

const serviceComponents = { 'power-system-studies': PSS, 'earthing-studies': EarthingStudiesContent, 'lightning-protection-studies': LPS, 'power-quality-studies': PQS, 'instrumentation-earthing-studies': IES, 'emi-emc': EmiEmc };

export function generateStaticParams() { return getLocationServiceParams(); }

export async function generateMetadata({ params }) {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = await params;
  const country = getCountry(countrySlug); const city = country && getCity(countrySlug, citySlug); const service = city && getService(serviceSlug);
  return country && city && service ? createLocationMetadata({ country, city, service }) : {};
}

export default async function LocationServicePage({ params }) {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = await params;
  const country = getCountry(countrySlug); const city = country && getCity(countrySlug, citySlug); const service = city && getService(serviceSlug);
  const ServiceComponent = service && serviceComponents[service.component];
  if (!country || !city || !service || !ServiceComponent) notFound();
  const schema = createLocationSchema({ country, city, service });
  return <main className="bg-[#292a2c] text-white"><LocationPilotHeader country={country} city={city} service={service} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ServiceComponent /></main>;
}
