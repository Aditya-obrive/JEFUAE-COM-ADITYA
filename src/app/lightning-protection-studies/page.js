import LPS from "./lps";

export const metadata = {
  title: "Lightning Protection Studies | JEF UAE",

  description:
    "Lightning protection risk assessment and system studies in UAE. JEF delivers technology-enabled electrical engineering expertise for industrial, utility and energy projects.",

  keywords: [
    "lightning protection studies UAE",
    "lightning protection studies services",
    "lightning protection studies consultants",
    "lightning protection studies company UAE",
    "lightning protection studies Abu Dhabi",
    "lightning protection studies Dubai",
    "lightning protection studies GCC",
    "electrical engineering consultants UAE",
    "industrial electrical studies",
    "electrical safety engineering",
    "power system reliability",
    "best lightning protection studies consultants in UAE",
    "lightning protection studies services in Abu Dhabi",
    "lightning protection studies company in Dubai",
    "lightning protection studies for oil and gas facilities",
    "lightning protection studies for utilities",
    "lightning protection studies for renewable energy projects",
    "lightning protection studies for industrial plants",
    "global lightning protection studies engineering consultancy",
    "electrical safety",
    "system reliability",
    "engineering simulation",
    "compliance study",
    "technical audit",
    "risk assessment",
    "testing and measurement",
    "design verification",
    "commissioning support",
    "engineering report",
  ],

  alternates: {
    canonical: "https://www.jefuae.com/lightning-protection-studies",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Lightning Protection Studies | JEF UAE",
    description:
      "Lightning protection risk assessment and system studies in UAE. JEF delivers technology-enabled electrical engineering expertise for industrial, utility and energy projects.",
    url: "https://www.jefuae.com/lightning-protection-studies",
    siteName: "JEF UAE",
    type: "website",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    ICBM: "24.4539, 54.3773",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.jefuae.com/#organization",
      name: "JEF UAE",
      url: "https://www.jefuae.com/",
      description:
        "Technology-enabled electrical engineering company providing earthing, lightning protection, power system, power quality, instrumentation earthing, EMI/EMC and root cause analysis services.",
      foundingDate: "1994",
      areaServed: ["United Arab Emirates", "GCC", "Middle East", "Global"],
      knowsAbout: [
        "Earthing and Grounding",
        "Lightning Protection",
        "Power System Studies",
        "Power Quality",
        "Instrumentation Earthing",
        "EMI/EMC",
        "Root Cause Analysis",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.jefuae.com/#website",
      url: "https://www.jefuae.com/",
      name: "JEF UAE",
      publisher: {
        "@id": "https://www.jefuae.com/#organization",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.jefuae.com/lightning-protection-studies#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.jefuae.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Lightning Protection",
          item: "https://www.jefuae.com/lightning-protection-studies",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.jefuae.com/lightning-protection-studies#service",
      url: "https://www.jefuae.com/lightning-protection-studies",
      name: "Lightning Protection Studies",
      description:
        "Lightning protection risk assessment and system studies in UAE.",
      isPartOf: {
        "@id": "https://www.jefuae.com/#website",
      },
      provider: {
        "@id": "https://www.jefuae.com/#organization",
      },
      areaServed: ["United Arab Emirates", "GCC", "Middle East", "Global"],
    },
  ],
};

export default function LPSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <LPS />
    </>
  );
}
