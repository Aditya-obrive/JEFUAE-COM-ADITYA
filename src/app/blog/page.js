import Blog from "./MainBlogPage";

export const metadata = {
  title:
    "Electrical Engineering Blog in UAE | Power System, Earthing & Safety Insights | JEF UAE",

  description:
    "Explore expert insights on power system studies, earthing, lightning protection, EMI/EMC, power quality and electrical safety in UAE. Stay updated with engineering best practices from JEF UAE.",

  keywords: [
    "electrical engineering blog UAE",
    "power system studies articles UAE",
    "earthing study insights Abu Dhabi",
    "lightning protection blog UAE",
    "power quality analysis blog",
    "EMI EMC engineering articles UAE",
    "electrical safety knowledge UAE",
    "JEF UAE blog",
  ],

  alternates: {
    canonical: "https://www.jefuae.com/blog",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Electrical Engineering Blog in UAE | Power System, Earthing & Safety Insights | JEF UAE",

    description:
      "Technical articles on power system studies, grounding, lightning protection, power quality and electrical safety across UAE industries.",

    url: "https://www.jefuae.com/blog",

    siteName: "JEF UAE",

    type: "website",

    locale: "en_AE",

    images: [
      {
        url: "https://www.jefuae.com/BlogImg/BlogsBanner.png",
        width: 1920,
        height: 1080,
        alt: "JEF UAE Electrical Engineering Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Electrical Engineering Blog in UAE | JEF UAE",

    description:
      "Expert insights on power system studies, earthing, lightning protection, EMI/EMC, power quality and electrical safety in UAE.",

    images: ["https://www.jefuae.com/BlogImg/BlogsBanner.png"],
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    ICBM: "24.4539, 54.3773",
  },
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-20">
      <Blog />
    </div>
  );
}
