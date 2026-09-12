import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { oilAndGasFaqs } from '@/data/oilAndGasFaqs';
export const metadata = { title: 'Oil and Gas FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/oilandgas/faqs' } };
export default function OilAndGasFaqsPage() { return <RenewableEnergyFaq faqItems={oilAndGasFaqs} title="OIL AND GAS — FAQS" backLabel="BACK TO OIL AND GAS" backPath="/industries/oilandgas" />; }
