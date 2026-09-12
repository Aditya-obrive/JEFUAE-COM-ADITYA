import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { homeFaqs } from '@/data/homeFaqs';
export const metadata = { title: 'FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/home/faqs' } };
export default function HomeFaqsPage() { return <RenewableEnergyFaq faqItems={homeFaqs} title="ELECTRICAL ENGINEERING CONSULTING — FAQS" backLabel="BACK TO HOME" backPath="/" />; }
