import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { lightningProtectionFaqs } from '@/data/lightningProtectionFaqs';
export const metadata = { title: 'Lightning Protection Studies — FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/lightning-protection-studies/faqs' } };
export default function LightningProtectionFaqsPage() { return <RenewableEnergyFaq faqItems={lightningProtectionFaqs} title="LIGHTNING PROTECTION STUDIES — FAQS" backLabel="BACK TO LIGHTNING PROTECTION STUDIES" backPath="/lightning-protection-studies" />; }
