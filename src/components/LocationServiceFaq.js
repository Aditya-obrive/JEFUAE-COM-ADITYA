'use client';

import { useState } from 'react';
import Link from 'next/link';
import { locationPath } from '@/lib/globalRouting';

export default function LocationServiceFaq({ country, city, service, faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const basePath = locationPath(country.slug, city.slug, service.slug);
  return (
    <main className="min-h-screen bg-[#292a2c] px-6 pb-24 pt-12 text-white md:px-16 lg:px-32">
      <h1 className="mb-14 text-3xl font-bold uppercase tracking-[2px] md:text-5xl">{service.name} — Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return <div key={faq.question} className="overflow-hidden border border-[#292929] bg-[#202020]"><button type="button" onClick={() => setActiveIndex(isOpen ? null : index)} aria-expanded={isOpen} className="flex min-h-[90px] w-full items-center justify-between px-6 py-5 text-left hover:bg-[#252525]"><span className="pr-4 text-sm text-gray-300 md:text-base">{faq.question}</span><span className="ml-4 flex-shrink-0 text-2xl text-[#FF0000]">{isOpen ? '−' : '+'}</span></button>{isOpen && <div className="border-t border-[#333] px-6 py-6"><p className="text-sm leading-7 text-gray-400 md:text-base">{faq.answer}</p></div>}</div>;
        })}
      </div>
      <Link href={basePath} className="mt-12 inline-flex items-center gap-3 rounded-full border border-white px-7 py-3 text-sm uppercase tracking-wider hover:border-[#FF0000] hover:bg-[#FF0000]">← Back to {service.name}</Link>
    </main>
  );
}
