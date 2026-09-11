import AboutUsContent from './AboutUsContent';

const aboutDescription =
  'About JEF UAE electrical engineering expertise. JEF delivers technology-enabled electrical engineering solutions for industrial, utility and infrastructure projects.';

export const metadata = {
  title: 'JEF Electrical Engineering Company | JEF UAE',
  description: aboutDescription,
  keywords: [
    'JEF UAE electrical engineering company', 'JEF electrical engineering company services',
    'JEF electrical engineering company consultants', 'JEF electrical engineering company company UAE',
    'JEF electrical engineering company Abu Dhabi', 'JEF electrical engineering company Dubai',
    'JEF electrical engineering company GCC', 'electrical engineering consultants UAE',
    'industrial electrical studies', 'electrical safety engineering', 'power system reliability',
    'best JEF electrical engineering company consultants in UAE', 'JEF electrical engineering company services in Abu Dhabi',
    'JEF electrical engineering company company in Dubai', 'JEF electrical engineering company for oil and gas facilities',
    'JEF electrical engineering company for utilities', 'JEF electrical engineering company for renewable energy projects',
    'JEF electrical engineering company for industrial plants', 'global JEF electrical engineering company engineering consultancy',
    'electrical safety', 'system reliability', 'engineering simulation', 'compliance study', 'technical audit',
    'risk assessment', 'testing and measurement', 'design verification', 'commissioning support', 'engineering report',
  ],
  alternates: { canonical: 'https://jefuae.com/about-us' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'JEF Electrical Engineering Company | JEF UAE', description: aboutDescription,
    type: 'website', url: 'https://jefuae.com/about-us', siteName: 'JEF UAE',
    images: [{ url: 'https://jefuae.com/AboutUs/AboutUsMainBG.png', width: 1200, height: 630, alt: 'JEF UAE electrical engineering company' }],
  },
  twitter: {
    card: 'summary_large_image', title: 'JEF Electrical Engineering Company | JEF UAE',
    description: aboutDescription, images: ['https://jefuae.com/AboutUs/AboutUsMainBG.png'],
  },
  other: { 'geo.region': 'AE-AZ', 'geo.placename': 'Abu Dhabi, UAE', 'geo.position': '24.4539;54.3773', ICBM: '24.4539, 54.3773' },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService', '@id': 'https://jefuae.com/#organization', name: 'JEF UAE', url: 'https://jefuae.com/',
      description: 'Technology-enabled electrical engineering company providing earthing, lightning protection, power system, power quality, instrumentation earthing, EMI/EMC and root cause analysis services.',
      foundingDate: '1994', areaServed: ['United Arab Emirates', 'GCC', 'Middle East', 'Global'],
      knowsAbout: ['Earthing and Grounding', 'Lightning Protection', 'Power System Studies', 'Power Quality', 'Instrumentation Earthing', 'EMI/EMC', 'Root Cause Analysis'],
    },
    { '@type': 'WebSite', '@id': 'https://jefuae.com/#website', url: 'https://jefuae.com/', name: 'JEF UAE', publisher: { '@id': 'https://jefuae.com/#organization' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jefuae.com/' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://jefuae.com/about-us' },
    ] },
    { '@type': 'WebPage', '@id': 'https://jefuae.com/about-us#webpage', url: 'https://jefuae.com/about-us', name: 'About JEF UAE', description: aboutDescription, isPartOf: { '@id': 'https://jefuae.com/#website' }, about: { '@id': 'https://jefuae.com/#organization' }, inLanguage: 'en' },
  ],
};

export default function AboutUsPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} /><AboutUsContent /></>;
}
