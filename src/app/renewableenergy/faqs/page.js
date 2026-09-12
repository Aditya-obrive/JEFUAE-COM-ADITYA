import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { renewableEnergyFaqs } from '@/data/renewableEnergyFaqs';
export const metadata = { title: 'Renewable Energy FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/renewableenergy/faqs' } };
export default function RenewableEnergyFaqsPage() { return <RenewableEnergyFaq faqItems={renewableEnergyFaqs} title="RENEWABLE ENERGY — FAQS" backLabel="BACK TO RENEWABLE ENERGY" backPath="/industries/renewableenergy" />; }
