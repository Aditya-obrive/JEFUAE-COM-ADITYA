import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { powerUtilityFaqs } from '@/data/powerUtilityFaqs';
export const metadata = { title: 'Power Utilities FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/powerutilities/faqs' } };
export default function PowerUtilitiesFaqsPage() { return <RenewableEnergyFaq faqItems={powerUtilityFaqs} title="POWER UTILITIES — FAQS" backLabel="BACK TO POWER UTILITIES" backPath="/industries/powerutilities" />; }
