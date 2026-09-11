import RenewableEnergyResource from "./recontent";

export const metadata = {
  title: "Renewable Energy Grid Studies | JEF UAE",

  description:
    "Grid integration and power system studies for renewable energy. JEF delivers engineering expertise for UAE industrial and utility projects.",

  keywords: [
    "renewable energy grid studies UAE",
    "renewable energy grid studies services",
    "renewable energy grid studies consultants",
    "renewable energy grid studies company UAE",
    "renewable energy grid studies Abu Dhabi",
    "renewable energy grid studies Dubai",
    "renewable energy grid studies GCC",
    "electrical engineering consultants UAE",
    "industrial electrical studies",
    "electrical safety engineering",
    "power system reliability",
    "best renewable energy grid studies consultants in UAE",
    "renewable energy grid studies services in Abu Dhabi",
    "renewable energy grid studies company in Dubai",
    "renewable energy grid studies for oil and gas facilities",
    "renewable energy grid studies for utilities",
    "renewable energy grid studies for renewable energy projects",
    "renewable energy grid studies for industrial plants",
    "global renewable energy grid studies engineering consultancy",
    "electrical safety",
    "system reliability",
    "engineering simulation",
    "compliance study",
    "technical audit",
    "risk assessment",
    "testing and measurement",
    "design verification",
    "commissioning support",
    "engineering report"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/industries/renewableenergy",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title:
      "Renewable Energy Grid Studies | JEF UAE",
    description:
      "Technical renewable energy grid studies for solar, wind, BESS and hybrid projects across the UAE, including grid stability, protection coordination, grounding and power quality analysis.",
    type: "website",
    url: "https://www.jefuae.com/industries/renewableenergy",
    siteName: "JEF UAE",
    images: [
      {
        url: "https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png",
        width: 1200,
        height: 630,
        alt: "Renewable energy grid studies engineering by JEF UAE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Renewable Energy Grid Studies | JEF UAE",
    description:
      "Grid integration and power system studies for renewable energy. JEF delivers engineering expertise for UAE industrial and utility projects.",
    images: ["https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png"],
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function RenewableEnergyPage() {
    return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.jefuae.com/' },
                      { '@type': 'ListItem', position: 2, name: 'Renewable Energy', item: 'https://www.jefuae.com/industries/renewableenergy' },
                    ],
                  },
                  {
                    '@type': 'WebPage',
                    '@id': 'https://www.jefuae.com/industries/renewableenergy#webpage',
                    url: 'https://www.jefuae.com/industries/renewableenergy',
                    name: 'Renewable Energy Grid Studies | JEF UAE',
                    description: 'Grid integration and power system studies for renewable energy. JEF delivers engineering expertise for UAE industrial and utility projects.',
                    isPartOf: { '@id': 'https://www.jefuae.com/#website' },
                    about: { '@id': 'https://www.jefuae.com/industries/renewableenergy#service' },
                    inLanguage: 'en',
                    dateModified: '2026-09-11',
                  },
                  {
                    '@type': 'Service',
                    '@id': 'https://www.jefuae.com/industries/renewableenergy#service',
                    url: 'https://www.jefuae.com/industries/renewableenergy',
                    name: 'Renewable Energy',
                    description: 'Grid integration and power system studies for renewable energy',
                    serviceType: 'Renewable energy grid studies',
                    category: 'Electrical engineering consultancy',
                    audience: {
                      '@type': 'BusinessAudience',
                      audienceType: 'Project owners, utilities, EPC contractors and industrial operators',
                    },
                    knowsAbout: [
                      'Grid integration',
                      'Electrical safety',
                      'Power system reliability',
                      'Electrical compliance',
                      'Asset integrity',
                    ],
                    isPartOf: { '@id': 'https://www.jefuae.com/#website' },
                    about: { '@id': 'https://www.jefuae.com/#organization' },
                    inLanguage: 'en',
                    provider: { '@id': 'https://www.jefuae.com/#organization' },
                    areaServed: ['United Arab Emirates', 'GCC', 'Middle East', 'Global'],
                  },
                ],
              }),
            }}
          />
          <RenewableEnergyResource />
        </>
    );
}
