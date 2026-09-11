import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { powerUtilityFaqs } from '@/data/powerUtilityFaqs';

export const metadata = {
  title: 'Power Utility — FAQs | JEF UAE',
  description:
    'Answers to common questions about power utility engineering studies, standards, inputs, deliverables, timelines and engineering support from JEF UAE.',
  keywords: [
    'power utility engineering studies UAE',
    'power utility engineering studies Abu Dhabi',
    'power utility engineering studies Dubai',
    'JEF UAE',
  ],
  alternates: {
    canonical: 'https://www.jefuae.com/power-utility-engineering-studies/faq',
  },
};

export default function PowerUtilityFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={powerUtilityFaqs}
      title="POWER UTILITY  — FAQS"
      breadcrumbLabel="POWER UTILITIES"
      breadcrumbPath="/industries/powerutilities"
      backLabel="BACK TO POWER UTILITIES"
      backPath="/industries/powerutilities"
      videoSource="/IndustriesPage/Power Utilities - Option 1.mp4"
      poster="/IndustriesPage/Power.png"
    />
  );
}
