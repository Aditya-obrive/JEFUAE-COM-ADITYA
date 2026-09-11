import ProcessPlant from "./p2content";

const pageUrl = "https://jefuae.com/industries/processplant";
const description = "Electrical safety and reliability studies for process plants. JEF delivers technology-enabled electrical engineering expertise for industrial, utility and infrastructure projects.";

export const metadata = {
  title: "Process Plant Electrical Studies | JEF UAE",
  description,
  keywords: [
    "process plant electrical studies UAE", "process plant electrical studies services", "process plant electrical studies consultants", "process plant electrical studies company UAE", "process plant electrical studies Abu Dhabi", "process plant electrical studies Dubai", "process plant electrical studies GCC", "electrical engineering consultants UAE", "industrial electrical studies", "electrical safety engineering", "power system reliability", "best process plant electrical studies consultants in UAE", "process plant electrical studies services in Abu Dhabi", "process plant electrical studies company in Dubai", "process plant electrical studies for oil and gas facilities", "process plant electrical studies for utilities", "process plant electrical studies for renewable energy projects", "process plant electrical studies for industrial plants", "global process plant electrical studies engineering consultancy", "electrical safety", "system reliability", "engineering simulation", "compliance study", "technical audit", "risk assessment", "testing and measurement", "design verification", "commissioning support", "engineering report",
  ],
  alternates: { canonical: pageUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: "Process Plant Electrical Studies | JEF UAE",
    description,
    type: "website",
    url: pageUrl,
    siteName: "JEF UAE",
    images: [{ url: "https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png", width: 1200, height: 630, alt: "Process plant electrical studies by JEF UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Process Plant Electrical Studies | JEF UAE",
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

export default function ProcessPlantPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jefuae.com/' },
          { '@type': 'ListItem', position: 2, name: 'Process Plant', item: pageUrl },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Process Plant Electrical Studies | JEF UAE',
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
        name: 'Process Plant',
        description: 'Electrical safety and reliability studies for process plants',
        serviceType: 'Process plant electrical studies',
        category: 'Electrical engineering consultancy',
        audience: { '@type': 'BusinessAudience', audienceType: 'Process plant operators, EPC contractors, industrial facilities and infrastructure owners' },
        knowsAbout: ['Industrial electrical studies', 'Power system reliability', 'Arc-flash analysis', 'Power quality', 'Electrical compliance'],
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
      <ProcessPlant />
    </>
  );
}
