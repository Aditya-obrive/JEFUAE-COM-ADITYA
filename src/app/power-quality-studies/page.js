import PQS from "./pqs"

export const metadata = {
  title:
    "Power Quality Studies in UAE | Harmonic Analysis & Voltage Stability | JEF UAE",

  description:
    "Professional power quality studies in UAE including harmonic analysis, voltage stability assessment, transient disturbance monitoring, and compliance evaluation. Improve electrical performance, reduce equipment failure & ensure grid reliability with JEF UAE.",

  keywords: [
    "power quality studies UAE",
    "harmonic analysis UAE",
    "voltage stability study Abu Dhabi",
    "electrical disturbance analysis UAE",
    "transient analysis UAE",
    "power factor correction study UAE",
    "grid compliance study UAE",
    "industrial power quality consultants UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/power-quality-studies",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Power Quality Studies in UAE | Harmonic Analysis & Voltage Stability | JEF UAE",
    description:
      "Advanced harmonic analysis, voltage stability assessment, transient monitoring and power factor correction studies ensuring IEC/IEEE compliance for industrial and utility facilities across UAE.",
    url: "https://www.jefuae.com/power-quality-studies",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function PQSPage() {
    return (
        <>
            <PQS />
        </>
    )
}