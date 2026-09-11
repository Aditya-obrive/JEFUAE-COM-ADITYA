import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { commercialBuildingFaqs } from '@/data/commercialBuildingFaqs';

export const metadata = {
  title: 'Commercial Building Electrical Safety — FAQs | JEF UAE',
  description:
    'Answers to common questions about commercial building electrical safety, standards, inputs, deliverables, timelines and engineering support from JEF UAE.',
  keywords: [
    'commercial building electrical safety UAE',
    'commercial building electrical safety Abu Dhabi',
    'commercial building electrical safety Dubai',
    'JEF UAE',
  ],
  alternates: {
    canonical: 'https://www.jefuae.com/commercial-building-electrical-safety/faq',
  },
};

export default function CommercialBuildingFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={commercialBuildingFaqs}
      title="COMMERCIAL BUILDING ELECTRICAL SAFETY — FAQS"
      breadcrumbLabel="COMMERCIAL BUILDINGS"
      breadcrumbPath="/industries/commercialbuilding"
      backLabel="BACK TO COMMERCIAL BUILDINGS"
      backPath="/industries/commercialbuilding"
      videoSource="/IndustriesPage/Commercial Buildings - Option 1.mp4"
      poster="/IndustriesPage/CB.png"
    />
  );
}
