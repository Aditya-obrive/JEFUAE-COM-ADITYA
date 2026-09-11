import RenewableEnergyFaq from '@/app/renewable-energy-grid-studies/faq/RenewableEnergyFaq';
import { homeFaqs } from '@/data/homeFaqs';

export const metadata = {
  title: 'Electrical Engineering Consulting — FAQs | JEF UAE',
  description: 'Answers to common questions about electrical engineering consulting, safety studies, standards, inputs, deliverables and engineering support from JEF UAE.',
  keywords: [
    'Electrical Engineering Consulting UAE',
    'electrical engineering consultants Abu Dhabi',
    'electrical safety studies UAE',
    'JEF UAE FAQs',
  ],
  alternates: {
    canonical: 'https://jefuae.com/electrical-engineering-consulting/faq',
  },
  openGraph: {
    title: 'Electrical Engineering Consulting — FAQs | JEF UAE',
    description: 'Technical answers about electrical engineering consulting, safety studies and engineering services from JEF UAE.',
    url: 'https://jefuae.com/electrical-engineering-consulting/faq',
    siteName: 'JEF UAE',
  },
};

export default function HomeFaqPage() {
  return (
    <RenewableEnergyFaq
      faqItems={homeFaqs}
      title="ELECTRICAL ENGINEERING CONSULTING — FAQS"
      breadcrumbLabel="ELECTRICAL ENGINEERING CONSULTING"
      breadcrumbPath="/"
      backLabel="BACK TO JEF UAE"
      backPath="/"
      videoSource="/HomePageImg/Banner 1.mp4"
      poster="/IndustriesPage/IndustriesMainImg.png"
      showParentBreadcrumb={false}
    />
  );
}
