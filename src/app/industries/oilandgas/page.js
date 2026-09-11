import OilandGas from "./oilandgascontent";

export const metadata = {
  title: "Electrical Engineering Oil And Gas | JEF UAE",

  description:
    "Electrical safety and power studies for oil and gas facilities. JEF delivers technology-enabled engineering expertise for UAE industrial and utility projects.",

  keywords: [
    "electrical engineering oil and gas UAE",
    "electrical engineering oil and gas services",
    "electrical engineering oil and gas consultants",
    "electrical engineering oil and gas company UAE",
    "electrical engineering oil and gas Abu Dhabi",
    "electrical engineering oil and gas Dubai",
    "electrical engineering oil and gas GCC",
    "electrical engineering consultants UAE",
    "industrial electrical studies",
    "electrical safety engineering",
    "power system reliability",
    "best electrical engineering oil and gas consultants in UAE",
    "electrical engineering oil and gas services in Abu Dhabi",
    "electrical engineering oil and gas company in Dubai",
    "electrical engineering oil and gas for oil and gas facilities",
    "electrical engineering oil and gas for utilities",
    "electrical engineering oil and gas for renewable energy projects",
    "electrical engineering oil and gas for industrial plants",
    "global electrical engineering oil and gas engineering consultancy",
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
    canonical: "https://jefuae.com/industries/oilandgas",
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
    title: "Electrical Engineering Oil And Gas | JEF UAE",
    description: "Electrical safety and power studies for oil and gas facilities. JEF delivers technology-enabled engineering expertise for UAE industrial and utility projects.",
    type: "website",
    url: "https://jefuae.com/industries/oilandgas",
    siteName: "JEF UAE",
    images: [
      {
        url: "https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png",
        width: 1200,
        height: 630,
        alt: "Electrical engineering oil and gas services by JEF UAE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Electrical Engineering Oil And Gas | JEF UAE",
    description: "Electrical safety and power studies for oil and gas facilities. JEF delivers technology-enabled engineering expertise for UAE industrial and utility projects.",
    images: ["https://www.jefuae.com/IndustriesPage/IndustriesMainImg.png"],
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function OilandGasPage() {
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
                      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jefuae.com/' },
                      { '@type': 'ListItem', position: 2, name: 'Oil & Gas', item: 'https://jefuae.com/industries/oilandgas' },
                    ],
                  },
                  {
                    '@type': 'WebPage',
                    '@id': 'https://jefuae.com/industries/oilandgas#webpage',
                    url: 'https://jefuae.com/industries/oilandgas',
                    name: 'Electrical Engineering Oil And Gas | JEF UAE',
                    description: 'Electrical safety and power studies for oil and gas facilities. JEF delivers technology-enabled engineering expertise for UAE industrial and utility projects.',
                    isPartOf: { '@id': 'https://jefuae.com/#website' },
                    about: { '@id': 'https://jefuae.com/industries/oilandgas#service' },
                    inLanguage: 'en',
                    dateModified: '2026-09-11',
                  },
                  {
                    '@type': 'Service',
                    '@id': 'https://jefuae.com/industries/oilandgas#service',
                    url: 'https://jefuae.com/industries/oilandgas',
                    name: 'Oil & Gas',
                    description: 'Electrical safety and power studies for oil and gas facilities',
                    serviceType: 'Electrical engineering oil and gas services',
                    category: 'Electrical engineering consultancy',
                    audience: {
                      '@type': 'BusinessAudience',
                      audienceType: 'Oil and gas operators, EPC contractors, utilities and industrial facilities',
                    },
                    knowsAbout: [
                      'Electrical safety engineering',
                      'Power system reliability',
                      'Industrial electrical studies',
                      'Hazardous-area electrical interfaces',
                      'Electrical compliance',
                    ],
                    isPartOf: { '@id': 'https://jefuae.com/#website' },
                    about: { '@id': 'https://jefuae.com/#organization' },
                    inLanguage: 'en',
                    provider: { '@id': 'https://jefuae.com/#organization' },
                    areaServed: ['United Arab Emirates', 'GCC', 'Middle East', 'Global'],
                  },
                ],
              }),
            }}
          />
          <OilandGas />
        </>
    );
}
