import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { leadershipFaqs } from '@/data/leadershipFaqs';

export const metadata = {
  title: 'JEF Leadership Team — FAQs | JEF UAE',
  description: 'Answers about the JEF UAE leadership team, engineering expertise, project support, standards and services across the UAE and GCC.',
  keywords: ['JEF UAE Leadership Team', 'JEF leadership team UAE', 'electrical engineering experts Abu Dhabi', 'JEF UAE FAQs'],
  alternates: { canonical: 'https://www.jefuae.com/leadership-team/faq' },
  openGraph: {
    title: 'JEF Leadership Team — FAQs | JEF UAE',
    description: 'Technical answers about the JEF UAE leadership team and engineering expertise.',
    url: 'https://www.jefuae.com/leadership-team/faq',
    siteName: 'JEF UAE',
  },
};

export default function LeadershipFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={leadershipFaqs}
      title="JEF LEADERSHIP TEAM — FAQS"
      breadcrumbLabel="LEADERSHIP TEAM"
      breadcrumbPath="/leadership-team"
      backLabel="BACK TO LEADERSHIP TEAM"
      backPath="/leadership-team"
      videoSource="/HomePageImg/Banner 1.mp4"
      poster="/LeadershipTeamImg/JEF Leadership image.png"
    />
  );
}
