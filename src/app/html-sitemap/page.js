import Link from 'next/link';

const industryLinks = [
  ['Oil and Gas', '/industries/oilandgas'],
  ['Power Utilities', '/industries/powerutilities'],
  ['Manufacturing Plant', '/industries/manufacturingplant'],
  ['Process Plant', '/industries/processplant'],
  ['Commercial Buildings', '/industries/commercialbuilding'],
  ['Renewable Energy', '/industries/renewableenergy'],
];

const serviceLinks = [
  ['Earthing Studies', '/earthing-studies'],
  ['Lightning Protection Studies', '/lightning-protection-studies'],
  ['Power System Studies', '/power-system-studies'],
  ['Power Quality Studies', '/power-quality-studies'],
  ['Instrumentation Earthing', '/instrumentation-earthing-studies'],
];

export const metadata = {
  title: 'HTML Sitemap | JEF UAE',
  description: 'Browse JEF UAE electrical engineering, industry and renewable energy grid studies pages.',
  alternates: { canonical: 'https://www.jefuae.com/html-sitemap' },
};

export default function HtmlSitemapPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24 text-stone-900">
      <h1 className="text-4xl font-semibold">JEF UAE Sitemap</h1>
      <p className="mt-4 max-w-3xl text-base leading-7">Explore JEF UAE electrical engineering services and industry solutions.</p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Industries</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industryLinks.map(([name, path]) => <li key={path}><Link className="text-red-600 underline" href={path}>{name}</Link></li>)}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Engineering Services</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map(([name, path]) => <li key={path}><Link className="text-red-600 underline" href={path}>{name}</Link></li>)}
        </ul>
      </section>
    </main>
  );
}
