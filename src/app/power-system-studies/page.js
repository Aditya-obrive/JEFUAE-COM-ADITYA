import PSS from "./pss";

export const metadata = {
  title: "Power System Studies | JEF UAE",

  description:
    "Power system analysis, grid integration and protection studies in UAE. JEF delivers engineering expertise for industrial, utility and energy projects.",

  keywords: [
    "power system studies UAE",
    "power system studies services",
    "power system studies consultants",
    "power system studies company UAE",
    "power system studies Abu Dhabi",
    "power system studies Dubai",
    "power system studies GCC",
    "electrical engineering consultants UAE",
    "industrial electrical studies",
    "electrical safety engineering",
    "power system reliability",
    "best power system studies consultants in UAE",
    "power system studies services in Abu Dhabi",
    "power system studies company in Dubai",
    "power system studies for oil and gas facilities",
    "power system studies for utilities",
    "power system studies for renewable energy projects",
    "power system studies for industrial plants",
    "global power system studies engineering consultancy",
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
    canonical: "https://www.jefuae.com/power-system-studies",
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },

  openGraph: {
    title: "Power System Studies | JEF UAE",

    description:
      "Power system analysis, grid integration and protection studies in UAE. JEF delivers engineering expertise for industrial, utility and energy projects.",

    url: "https://www.jefuae.com/power-system-studies",

    siteName: "JEF UAE",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Power System Studies | JEF UAE",

    description:
      "Power system analysis, grid integration and protection studies in UAE. JEF delivers engineering expertise for industrial, utility and energy projects.",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    ICBM: "24.4539, 54.3773",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://jefuae.com/#organization",
  name: "JEF UAE",
  url: "https://jefuae.com/",
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://jefuae.com/#website",
  url: "https://jefuae.com/",
  name: "JEF UAE",
  publisher: {
    "@id": "https://jefuae.com/#organization",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jefuae.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Power System Studies",
      item: "https://jefuae.com/power-system-studies",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jefuae.com/power-system-studies#service",
  url: "https://jefuae.com/power-system-studies",
  name: "Power System Studies",
  description:
    "Power system analysis, grid integration and protection studies in UAE.",
  isPartOf: {
    "@id": "https://jefuae.com/#website",
  },
  about: {
    "@id": "https://jefuae.com/#organization",
  },
  inLanguage: "en",
  provider: {
    "@id": "https://jefuae.com/#organization",
  },
  areaServed: ["United Arab Emirates", "GCC", "Middle East", "Global"],
};

export default function PSSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <PSS />
    </>
  );
}
