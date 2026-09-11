import { Montserrat } from 'next/font/google'
import "./globals.css";
import { TranslationProvider } from '@/context/TranslationContext';
import Navbar from '@/components/Navbar';
import MainFooter from '@/components/Footer';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  metadataBase: new URL('https://www.jefuae.com'),

  title: {
    default:
      "JEF UAE | Electrical Engineering & Safety Solutions – Earthing, Power Quality & Lightning Protection",
    template: "%s | JEF UAE"
  },

  description:
    "JEF UAE offers world-class electrical engineering solutions including earthing, lightning protection, power quality & safety systems across UAE, India & global markets.",

  keywords: [
    "electrical engineering UAE",
    "earthing studies",
    "lightning protection",
    "power quality studies",
    "safety systems",
    "instrumentation studies"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    url: "https://www.jefuae.com/",
    title:
      "JEF UAE | Electrical Engineering & Safety Solutions – Earthing, Power Quality & Lightning Protection",
    description:
      "World-class electrical engineering solutions including earthing, lightning protection & power quality systems.",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },

  icons: {
    icon: [
      { url: "/NavLogo/JEFLogo.svg", type: "image/svg+xml" },
      { url: "/HomePageImg/JefTechno_logo_ 2.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/HomePageImg/JefTechno_logo_ 2.png",
  },
  manifest: "/site.webmanifest",

  verification: {
    google: 'NdAWjzLB8pCxgjiIspNZg8SmkWugCBbH2BsvoqKQjMM',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-JYPNPGJZT6"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JYPNPGJZT6');
    `}
  </Script>

  {/* Organization and website schema */}
  <Script
    id="organization-schema"
    type="application/ld+json"
    strategy="afterInteractive"
  >
    {JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://www.jefuae.com/#organization",
          name: "JEF UAE",
          url: "https://www.jefuae.com/",
          logo: "https://www.jefuae.com/HomePageImg/JefTechno_logo_ 2.png",
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
            "Root Cause Analysis"
          ],
          telephone: "+971552447290",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Abu Dhabi",
            addressRegion: "Abu Dhabi",
            addressCountry: "AE"
          },
          sameAs: [
            "https://www.linkedin.com/showcase/jef-engineering-services-middle-east/"
          ],
          contactPoint: [{
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+971552447290",
            email: "info@jefuae.com",
            areaServed: "AE",
            availableLanguage: ["English", "Arabic"]
          }]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.jefuae.com/#website",
          url: "https://www.jefuae.com/",
          name: "JEF UAE",
          publisher: { "@id": "https://www.jefuae.com/#organization" }
        }
      ]
    })}
  </Script>
</head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <TranslationProvider>
          <div id="google_translate_element" style={{ display: "none" }}></div>
          <Navbar />
          {children}
          <MainFooter />
        </TranslationProvider>
      </body>
    </html>
  );
}
