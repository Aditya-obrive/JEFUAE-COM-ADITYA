'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCountry, getCity, getService } from '@/data/globalArchitecture';

const specialLabels = {
  faq: 'FAQs',
  faqs: 'FAQs',
  renewableenergy: 'Renewable Energy',
  oilandgas: 'Oil and Gas',
  powerutilities: 'Power Utilities',
  manufacturingplant: 'Manufacturing Plant',
  processplant: 'Process Plant',
  commercialbuilding: 'Commercial Building',
  'l&d-centre': 'L&D Centre',
  'smartdigitalization': 'Smart Digitalization',
};

const mainNavigationSlugs = new Set(['about', 'industries', 'our-business', 'business', 'blog', 'blogs']);

function formatSegment(segment) {
  const decoded = decodeURIComponent(segment).replace(/([a-z])([A-Z])/g, '$1 $2');
  const normalized = decoded.replace(/[-_]+/g, ' ').trim();
  const specialLabel = specialLabels[normalized.toLowerCase()];

  if (specialLabel) return specialLabel;

  return normalized
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(' ');
}

export default function Breadcrumbs() {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);

  if (!segments.length) return null;
  const isLocationRoute = segments.length >= 2 && getCountry(segments[0]) && getCity(segments[0], segments[1]);
  const locationLabels = isLocationRoute ? [
    { label: getCountry(segments[0]).name, href: `/${segments[0]}` },
    { label: getCity(segments[0], segments[1]).name, href: `/${segments[0]}/${segments[1]}` },
    ...(segments[2] && getService(segments[2]) ? [{ label: getService(segments[2]).name, href: `/${segments.slice(0, 3).join('/')}` }] : []),
    ...(segments[3]?.toLowerCase() === 'faq' ? [{ label: 'FAQs', href: `/${segments.join('/')}` }] : []),
  ] : null;
  if (locationLabels) return <nav className="renewable-faq-breadcrumb" aria-label="Breadcrumb"><Link className="breadcrumb-home" href="/">HOME</Link>{locationLabels.map(({ label, href }, index) => <span className="breadcrumb-segment" key={href}><span aria-hidden="true">›</span><Link className={index === locationLabels.length - 1 ? 'current' : ''} href={href}>{label}</Link></span>)}</nav>;
  const breadcrumbSegments = pathname.toLowerCase() === '/home/faqs'
    ? [{ segment: 'faqs', href: '/home/faqs' }]
    : segments
      .map((segment, index) => ({
        segment,
        href: `/${segments.slice(0, index + 1).join('/')}`,
        index,
      }))
      .filter(({ segment, index }) => !(index === 0 && mainNavigationSlugs.has(segment.toLowerCase())));

  return (
    <nav className="renewable-faq-breadcrumb" aria-label="Breadcrumb">
      <Link className="breadcrumb-home" href="/">HOME</Link>
      {breadcrumbSegments.map(({ segment, href }, index) => {
        const isCurrent = index === breadcrumbSegments.length - 1;

        return (
          <span className="breadcrumb-segment" key={href}>
            <span aria-hidden="true">›</span>
            <Link className={isCurrent ? 'current' : ''} href={href}>
              {formatSegment(segment)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
