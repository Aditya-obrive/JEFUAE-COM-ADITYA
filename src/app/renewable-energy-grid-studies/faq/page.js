import RenewableEnergyFaq from './RenewableEnergyFaq';

export const metadata = {
  title: 'Renewable Energy — FAQs | JEF UAE',
  description:
    'Answers to common questions about renewable energy grid studies, standards, inputs, deliverables, timelines and engineering support from JEF UAE.',
  keywords: [
    'renewable energy grid studies UAE',
    'renewable energy grid studies Abu Dhabi',
    'renewable energy grid studies Dubai',
    'grid integration studies UAE',
    'JEF UAE',
  ],
  alternates: {
    canonical: 'https://www.jefuae.com/renewable-energy-grid-studies/faq',
  },
  openGraph: {
    title: 'Renewable Energy  — FAQs | JEF UAE',
    description:
      'Technical answers about renewable energy grid studies and grid-integration engineering services from JEF UAE.',
    url: 'https://www.jefuae.com/renewable-energy-grid-studies/faq',
    siteName: 'JEF UAE',
  },
};

export default function RenewableEnergyFaqPage() {
  return <RenewableEnergyFaq />;
}
