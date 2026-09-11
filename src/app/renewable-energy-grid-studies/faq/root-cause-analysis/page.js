import RootCause from "./rca";

export const metadata = {
  title:
    "Root Cause Analysis (RCA) Services in UAE | Electrical Failure Investigation | JEF UAE",

  description:
    "Professional Root Cause Analysis (RCA) services in UAE for electrical failures, equipment breakdowns, power disturbances, and system reliability issues. Identify failure sources, prevent recurrence & improve operational safety with JEF UAE experts.",

  keywords: [
    "root cause analysis UAE",
    "electrical failure investigation Abu Dhabi",
    "equipment failure analysis UAE",
    "power system fault analysis UAE",
    "industrial RCA consultants UAE",
    "electrical troubleshooting services UAE",
    "system reliability analysis UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/root-cause-analysis",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Root Cause Analysis (RCA) Services in UAE | Electrical Failure Investigation | JEF UAE",
    description:
      "Comprehensive electrical root cause investigations including power system fault analysis, equipment failure evaluation, relay misoperation studies, and disturbance analysis across UAE industries.",
    url: "https://www.jefuae.com/root-cause-analysis",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function RCAPage() {
  return (
    <RootCause />
  );
}