import PowerUtilites from "./pucontent";

const pageUrl = "https://jefuae.com/industries/powerutilities";
const description = "Power system, earthing and protection studies for utilities. JEF delivers technology-enabled electrical engineering expertise for industrial, utility and infrastructure projects.";

export const metadata = {
  title: "Power Utility Engineering Studies | JEF UAE",
  description,
  keywords: [
    "power utility engineering studies UAE", "power utility engineering studies services", "power utility engineering studies consultants", "power utility engineering studies company UAE", "power utility engineering studies Abu Dhabi", "power utility engineering studies Dubai", "power utility engineering studies GCC", "electrical engineering consultants UAE", "industrial electrical studies", "electrical safety engineering", "power system reliability", "best power utility engineering studies consultants in UAE", "power utility engineering studies services in Abu Dhabi", "power utility engineering studies company in Dubai", "power utility engineering studies for oil and gas facilities", "power utility engineering studies for utilities", "power utility engineering studies for renewable energy projects", "power utility engineering studies for industrial plants", "global power utility engineering studies engineering consultancy", "electrical safety", "system reliability", "engineering simulation", "compliance study", "technical audit", "risk assessment", "testing and measurement", "design verification", "commissioning support", "engineering report",
  ],
  alternates: { canonical: pageUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: "Power Utility Engineering Studies | JEF UAE",
    description,
    type: "website",
    url: pageUrl,
    siteName: "JEF UAE",
    images: [{ url: "https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png", width: 1200, height: 630, alt: "Power utility engineering studies by JEF UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Utility Engineering Studies | JEF UAE",
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
          { '@type': 'ListItem', position: 2, name: 'Power Utilities', item: pageUrl },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Power Utility Engineering Studies | JEF UAE',
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
        name: 'Power Utilities',
        description: 'Power system, earthing and protection studies for utilities',
        serviceType: 'Power utility engineering studies',
        category: 'Electrical engineering consultancy',
        audience: { '@type': 'BusinessAudience', audienceType: 'Utilities, EPC contractors, industrial operators and infrastructure owners' },
        knowsAbout: ['Power system studies', 'Utility grid reliability', 'Earthing and grounding', 'Protection coordination', 'Electrical compliance'],
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
      <PowerUtilites />
    </>
  );
}
