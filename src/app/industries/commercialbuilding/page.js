import CommercialBuilding from "./cbcontent";

const pageUrl = "https://jefuae.com/industries/commercialbuilding";
const description = "Electrical safety, earthing and lightning studies for commercial buildings. JEF delivers technology-enabled electrical engineering expertise for industrial, utility and infrastructure projects.";

export const metadata = {
  title: "Commercial Building Electrical Safety | JEF UAE",
  description,
  keywords: [
    "commercial building electrical safety UAE", "commercial building electrical safety services", "commercial building electrical safety consultants", "commercial building electrical safety company UAE", "commercial building electrical safety Abu Dhabi", "commercial building electrical safety Dubai", "commercial building electrical safety GCC", "electrical engineering consultants UAE", "industrial electrical studies", "electrical safety engineering", "power system reliability", "best commercial building electrical safety consultants in UAE", "commercial building electrical safety services in Abu Dhabi", "commercial building electrical safety company in Dubai", "commercial building electrical safety for oil and gas facilities", "commercial building electrical safety for utilities", "commercial building electrical safety for renewable energy projects", "commercial building electrical safety for industrial plants", "global commercial building electrical safety engineering consultancy", "electrical safety", "system reliability", "engineering simulation", "compliance study", "technical audit", "risk assessment", "testing and measurement", "design verification", "commissioning support", "engineering report",
  ],
  alternates: { canonical: pageUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: "Commercial Building Electrical Safety | JEF UAE",
    description,
    type: "website",
    url: pageUrl,
    siteName: "JEF UAE",
    images: [{ url: "https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png", width: 1200, height: 630, alt: "Commercial building electrical safety by JEF UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Building Electrical Safety | JEF UAE",
    description,
    images: ["https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png"],
  },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jefuae.com/' },
          { '@type': 'ListItem', position: 2, name: 'Commercial Building', item: pageUrl },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Commercial Building Electrical Safety | JEF UAE',
        description,
        isPartOf: { '@id': 'https://jefuae.com/#website' },
        about: { '@id': `${pageUrl}#service` },
        inLanguage: 'en',
        dateModified: '2026-09-11',
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        url: pageUrl,
        name: 'Commercial Building',
        description: 'Electrical safety, earthing and lightning studies for commercial buildings',
        serviceType: 'Commercial building electrical safety',
        category: 'Electrical engineering consultancy',
        audience: { '@type': 'BusinessAudience', audienceType: 'Commercial building owners, developers, EPC contractors and facility operators' },
        knowsAbout: ['Electrical safety engineering', 'Earthing and grounding', 'Lightning protection', 'Power quality', 'Electrical compliance'],
        isPartOf: { '@id': 'https://jefuae.com/#website' },
        about: { '@id': 'https://jefuae.com/#organization' },
        inLanguage: 'en',
        provider: { '@id': 'https://jefuae.com/#organization' },
        areaServed: ['United Arab Emirates', 'GCC', 'Middle East', 'Global'],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CommercialBuilding />
    </>
  );
}
