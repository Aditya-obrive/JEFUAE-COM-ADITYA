import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { oilAndGasFaqs } from '@/data/oilAndGasFaqs';

export const metadata = {
  title: ' Oil and Gas — FAQs | JEF UAE',
  description:
    'Answers to common questions about electrical engineering for oil and gas projects, standards, inputs, deliverables, timelines and engineering support from JEF UAE.',
  keywords: [
    'electrical engineering oil and gas UAE',
    'oil and gas electrical engineering Abu Dhabi',
    'oil and gas electrical engineering Dubai',
    'JEF UAE',
  ],
  alternates: {
    canonical: 'https://www.jefuae.com/electrical-engineering-oil-and-gas/faq',
  },
};

export default function OilAndGasFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={oilAndGasFaqs}
      title="OIL AND GAS — FAQS"
      breadcrumbLabel="OIL AND GAS"
      breadcrumbPath="/industries/oilandgas"
      backLabel="BACK TO OIL AND GAS"
      backPath="/industries/oilandgas"
      videoSource="/IndustriesPage/Oil & Gas - Option 1.mp4"
      poster="/IndustriesPage/OilandGas.png"
    />
  );
}
