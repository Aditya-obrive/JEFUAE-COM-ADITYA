import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { leadershipFaqs } from '@/data/leadershipFaqs';
export const metadata = { title: 'JEF Leadership Team — FAQs | JEF UAE', alternates: { canonical: 'https://www.jefuae.com/leadership-team/faqs' } };
export default function LeadershipFaqsPage() { return <RenewableEnergyFaq faqItems={leadershipFaqs} title="JEF LEADERSHIP TEAM — FAQS" backLabel="BACK TO LEADERSHIP TEAM" backPath="/leadership-team" />; }
