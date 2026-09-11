import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { processPlantFaqs } from '@/data/processPlantFaqs';

export const metadata = {
  title: 'Process Plant — FAQs | JEF UAE',
  description:
    'Answers to common questions about process plant electrical studies, standards, inputs, deliverables, timelines and engineering support from JEF UAE.',
  keywords: [
    'process plant electrical studies UAE',
    'process plant electrical studies Abu Dhabi',
    'process plant electrical studies Dubai',
    'JEF UAE',
  ],
  alternates: {
    canonical: 'https://www.jefuae.com/process-plant-electrical-studies/faq',
  },
};

export default function ProcessPlantFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={processPlantFaqs}
      title="PROCESS PLANT — FAQS"
      breadcrumbLabel="PROCESS PLANT"
      breadcrumbPath="/industries/processplant"
      backLabel="BACK TO PROCESS PLANT"
      backPath="/industries/processplant"
      videoSource="/IndustriesPage/Process Plant - Option 1.mp4"
      poster="/IndustriesPage/Pplant.png"
    />
  );
}
