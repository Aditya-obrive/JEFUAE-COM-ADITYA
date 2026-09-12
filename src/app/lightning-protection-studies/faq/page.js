import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { lightningProtectionFaqs } from '@/data/lightningProtectionFaqs';

export const metadata = {
  title: 'Lightning Protection Studies — FAQs | JEF UAE',
  description: 'Answers to common questions about lightning protection studies, standards, inputs, deliverables and engineering support from JEF UAE.',
  alternates: {
    canonical: 'https://www.jefuae.com/lightning-protection-studies/faq',
  },
  openGraph: {
    title: 'Lightning Protection Studies — FAQs | JEF UAE',
    description: 'Technical answers about lightning protection studies and engineering services from JEF UAE.',
    url: 'https://www.jefuae.com/lightning-protection-studies/faq',
    siteName: 'JEF UAE',
  },
};

export default function LightningProtectionFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={lightningProtectionFaqs}
      title="LIGHTNING PROTECTION STUDIES — FAQS"
      breadcrumbLabel="LIGHTNING PROTECTION STUDIES"
      breadcrumbPath="/lightning-protection-studies"
      backLabel="BACK TO LIGHTNING PROTECTION STUDIES"
      backPath="/lightning-protection-studies"
    />
  );
}
