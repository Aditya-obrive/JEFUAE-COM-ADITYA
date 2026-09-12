import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { homeFaqs } from '@/data/homeFaqs';

export const metadata = {
  title: 'FAQs | JEF UAE',
  description: 'Frequently asked questions about JEF UAE electrical engineering services.',
  alternates: {
    canonical: 'https://www.jefuae.com/faq',
  },
};

export default function FaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={homeFaqs}
      title="ELECTRICAL ENGINEERING CONSULTING — FAQS"
      backLabel="BACK TO HOME"
      backPath="/"
    />
  );
}
