import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { processPlantFaqs } from '@/data/processPlantFaqs';
export const metadata = { title: 'Process Plant — FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/industries/processplant/faqs' } };
export default function ProcessPlantFaqsPage() { return <RenewableEnergyFaq faqItems={processPlantFaqs} title="PROCESS PLANT — FAQS" backLabel="BACK TO PROCESS PLANT" backPath="/industries/processplant" />; }
