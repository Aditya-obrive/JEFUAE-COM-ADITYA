'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const breadcrumbSegments = pathname.toLowerCase() === '/home/faqs'
    ? [{ segment: 'faqs', href: '/home/faqs' }]
    : segments.map((segment, index) => ({
      segment,
      href: `/${segments.slice(0, index + 1).join('/')}`,
    }));

  return (
    <nav className="renewable-faq-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">HOME</Link>
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
