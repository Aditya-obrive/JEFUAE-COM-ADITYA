import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { manufacturingPlantFaqs } from '@/data/manufacturingPlantFaqs';

export const metadata = {
  title: 'Manufacturing Plant — FAQs | JEF UAE',
  description:
    'Answers to common questions about manufacturing plant electrical studies, standards, inputs, deliverables, timelines and engineering support from JEF UAE.',
  keywords: [
    'manufacturing plant electrical studies UAE',
    'manufacturing plant electrical studies Abu Dhabi',
    'manufacturing plant electrical studies Dubai',
    'JEF UAE',
  ],
  alternates: {
    canonical: 'https://www.jefuae.com/manufacturing-plant-electrical-studies/faq',
  },
};

export default function ManufacturingPlantFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={manufacturingPlantFaqs}
      title="MANUFACTURING PLANT — FAQS"
      breadcrumbLabel="MANUFACTURING PLANT"
      breadcrumbPath="/industries/manufacturingplant"
      backLabel="BACK TO MANUFACTURING PLANT"
      backPath="/industries/manufacturingplant"
      videoSource="/IndustriesPage/Manufacturing Plant.mp4"
      poster="/IndustriesPage/MFplant.png"
    />
  );
}
