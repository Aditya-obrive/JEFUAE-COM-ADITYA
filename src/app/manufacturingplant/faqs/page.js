import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { manufacturingPlantFaqs } from '@/data/manufacturingPlantFaqs';

export const metadata = { title: 'Manufacturing Plant FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/manufacturingplant/faqs' } };

export default function ManufacturingPlantFaqsPage() {
  return <RenewableEnergyFaq faqItems={manufacturingPlantFaqs} title="MANUFACTURING PLANT — FAQS" backLabel="BACK TO MANUFACTURING PLANT" backPath="/manufacturingplant" />;
}
