import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { aboutFaqs } from '@/data/aboutFaqs';
export const metadata = { title: 'About FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/about/faqs' } };
export default function AboutFaqsPage() { return <RenewableEnergyFaq faqItems={aboutFaqs} title="ABOUT JEF UAE — FAQS" backLabel="BACK TO ABOUT JEF UAE" backPath="/about-us" />; }
