import Link from 'next/link';
import { notFound } from 'next/navigation';
import LocationPilotHeader from '@/components/LocationPilotHeader';
import { cities, countries, getCountry, getCity, getPublishedServices } from '@/data/globalArchitecture';
import { locationPath } from '@/lib/globalRouting';

export function generateStaticParams() {
  return Object.values(cities).filter((city) => city.published).map((city) => ({ country: city.countrySlug, city: city.slug }));
}

export async function generateMetadata({ params }) {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountry(countrySlug);
  const city = country ? getCity(countrySlug, citySlug) : null;
  if (!city) return {};
  return { title: `${city.name} | ${country.name} | JEF UAE`, description: city.seo.description, alternates: { canonical: `https://www.jefuae.com/${country.slug}/${city.slug}` } };
}

export default async function CityPage({ params }) {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountry(countrySlug);
  const city = country ? getCity(countrySlug, citySlug) : null;
  if (!country || !city) notFound();
  const publishedServices = getPublishedServices(country.slug, city.slug);

  return <main className="min-h-screen bg-[#292a2c] text-white">
    <LocationPilotHeader country={country} city={city} />
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-16 lg:px-32">
      <p className="mb-4 text-xs uppercase tracking-[3px] text-[#FF0000]">JEF Global architecture</p>
      <h1 className="max-w-4xl text-4xl font-bold uppercase tracking-[2px] md:text-6xl">Electrical engineering services in {city.name}</h1>
      <p className="mt-8 max-w-3xl text-base leading-8 text-white/70">{city.seo.description} Shared JEF engineering methodology is presented through one reusable service system, with local content added only when verified.</p>
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {publishedServices.map((service) => <Link key={service.slug} href={locationPath(country.slug, city.slug, service.slug)} className="group border border-white/15 bg-[#202020] p-7 transition hover:border-[#FF0000]">
          <span className="text-xs uppercase tracking-[2px] text-[#FF0000]">Service</span>
          <h2 className="mt-5 text-xl font-semibold uppercase tracking-wide group-hover:text-[#FF0000]">{service.name}</h2>
          <span className="mt-8 inline-block text-sm text-white/60">Explore service →</span>
        </Link>)}
      </div>
    </section>
  </main>;
}
