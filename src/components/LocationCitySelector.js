'use client';

import { useRouter } from 'next/navigation';
import { cities, getPublishedServices } from '@/data/globalArchitecture';
import { locationPath } from '@/lib/globalRouting';

export default function LocationCitySelector({ country, city, service }) {
  const router = useRouter();
  const publishedCities = Object.values(cities).filter((item) => item.published && item.countrySlug === country.slug);

  function changeCity(event) {
    const nextCity = publishedCities.find((item) => item.slug === event.target.value);
    if (!nextCity) return;
    const serviceStillAvailable = service && getPublishedServices(country.slug, nextCity.slug).some((item) => item.slug === service.slug);
    router.push(locationPath(country.slug, nextCity.slug, serviceStillAvailable ? service.slug : ''));
  }

  return <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
    <span className="sr-only">Select city</span>
    <span aria-hidden="true">City</span>
    <select value={city.slug} onChange={changeCity} className="border border-white/40 bg-[#1d1e20] px-3 py-2 text-white outline-none hover:border-white" aria-label="Select city">
      {publishedCities.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
    </select>
  </label>;
}
