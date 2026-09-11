import ManufacturingPlant from "./mpcontent";

const pageUrl = "https://jefuae.com/industries/manufacturingplant";
const description = "Electrical engineering studies for manufacturing plants. JEF delivers technology-enabled electrical engineering expertise for industrial, utility and infrastructure projects.";

export const metadata = {
  title: "Manufacturing Plant Electrical Studies | JEF UAE",
  description,
  keywords: [
    "manufacturing plant electrical studies UAE", "manufacturing plant electrical studies services", "manufacturing plant electrical studies consultants", "manufacturing plant electrical studies company UAE", "manufacturing plant electrical studies Abu Dhabi", "manufacturing plant electrical studies Dubai", "manufacturing plant electrical studies GCC", "electrical engineering consultants UAE", "industrial electrical studies", "electrical safety engineering", "power system reliability", "best manufacturing plant electrical studies consultants in UAE", "manufacturing plant electrical studies services in Abu Dhabi", "manufacturing plant electrical studies company in Dubai", "manufacturing plant electrical studies for oil and gas facilities", "manufacturing plant electrical studies for utilities", "manufacturing plant electrical studies for renewable energy projects", "manufacturing plant electrical studies for industrial plants", "global manufacturing plant electrical studies engineering consultancy", "electrical safety", "system reliability", "engineering simulation", "compliance study", "technical audit", "risk assessment", "testing and measurement", "design verification", "commissioning support", "engineering report",
  ],
  alternates: { canonical: pageUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: "Manufacturing Plant Electrical Studies | JEF UAE",
    description,
    type: "website",
    url: pageUrl,
    siteName: "JEF UAE",
    images: [{ url: "https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png", width: 1200, height: 630, alt: "Manufacturing plant electrical studies by JEF UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Plant Electrical Studies | JEF UAE",
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

export default function ManufacturingPlantPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jefuae.com/' },
          { '@type': 'ListItem', position: 2, name: 'Manufacturing Plant', item: pageUrl },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Manufacturing Plant Electrical Studies | JEF UAE',
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
        name: 'Manufacturing Plant',
        description: 'Electrical engineering studies for manufacturing plants',
        serviceType: 'Manufacturing plant electrical studies',
        category: 'Electrical engineering consultancy',
        audience: { '@type': 'BusinessAudience', audienceType: 'Manufacturing operators, EPC contractors, industrial facilities and infrastructure owners' },
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
      <ManufacturingPlant />
    </>
  );
}
