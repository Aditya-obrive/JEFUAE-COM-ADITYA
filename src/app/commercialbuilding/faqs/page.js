import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { commercialBuildingFaqs } from '@/data/commercialBuildingFaqs';
export const metadata = { title: 'Commercial Buildings FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/commercialbuilding/faqs' } };
export default function CommercialBuildingFaqsPage() { return <RenewableEnergyFaq faqItems={commercialBuildingFaqs} title="COMMERCIAL BUILDINGS — FAQS" backLabel="BACK TO COMMERCIAL BUILDINGS" backPath="/industries/commercialbuilding" />; }
