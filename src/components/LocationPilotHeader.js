import Link from 'next/link';
import LocationLanguageSwitcher from './LocationLanguageSwitcher';
import LocationCitySelector from './LocationCitySelector';
import { locationPath } from '@/lib/globalRouting';

export default function LocationPilotHeader({ country, city, service }) {
  return (
    <section className="relative z-10 bg-[#1d1e20] px-6 py-6 text-white md:px-16 lg:px-32">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[3px] text-[#FF0000]">JEF Global · UAE pilot</p>
          <p className="text-sm text-white/80">{country.name} <span className="mx-2 text-white/30">/</span> {city.name}{service ? <><span className="mx-2 text-white/30">/</span> {service.name}</> : null}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <LocationCitySelector country={country} city={city} service={service} />
          {service && <Link href={locationPath(country.slug, city.slug)} className="text-xs uppercase tracking-wider text-white/70 hover:text-white">{city.name} services</Link>}
          <LocationLanguageSwitcher supportedLocales={city.supportedLocales} />
        </div>
      </div>
    </section>
  );
}
