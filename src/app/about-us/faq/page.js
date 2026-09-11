import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { aboutFaqs } from '@/data/aboutFaqs';

export const metadata = {
  title: 'About JEF UAE — FAQs | JEF UAE',
  description:
    'Answers about JEF UAE electrical engineering expertise, services, standards, deliverables, industries and project support across the UAE and GCC.',
  keywords: [
    'JEF UAE FAQs',
    'JEF electrical engineering company UAE',
    'electrical engineering consultants Abu Dhabi',
    'electrical engineering services UAE',
  ],
  alternates: {
    canonical: 'https://www.jefuae.com/about-us/faq',
  },
  openGraph: {
    title: 'About JEF UAE — FAQs | JEF UAE',
    description:
      'Technical answers about JEF UAE electrical engineering expertise and project support.',
    url: 'https://www.jefuae.com/about-us/faq',
    siteName: 'JEF UAE',
  },
};

export default function AboutFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={aboutFaqs}
      title="ABOUT JEF UAE — FAQS"
      breadcrumbLabel="ABOUT US"
      breadcrumbPath="/about-us"
      backLabel="BACK TO ABOUT JEF UAE"
      backPath="/about-us"
      videoSource="/HomePageImg/Banner 1.mp4"
      poster="/IndustriesPage/IndustriesMainImg.png"
    />
  );
}
