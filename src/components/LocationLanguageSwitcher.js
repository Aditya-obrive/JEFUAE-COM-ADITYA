'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/data/globalArchitecture';

export default function LocationLanguageSwitcher({ supportedLocales = ['en', 'ar'] }) {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const nextLocale = new URLSearchParams(window.location.search).get('lang') || window.localStorage.getItem('jef-locale') || 'en';
    setLocale(supportedLocales.includes(nextLocale) ? nextLocale : 'en');
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === 'ar' ? 'rtl' : 'ltr';
  }, [supportedLocales]);

  function changeLocale(nextLocale) {
    setLocale(nextLocale);
    window.localStorage.setItem('jef-locale', nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = locales[nextLocale]?.dir || 'ltr';
    const nextParams = new URLSearchParams(window.location.search);
    nextParams.set('lang', nextLocale);
    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-wider" aria-label="Language selector">
      {supportedLocales.map((code) => (
        <button key={code} type="button" onClick={() => changeLocale(code)} className={`border px-3 py-2 transition ${locale === code ? 'border-[#FF0000] text-[#FF0000]' : 'border-white/40 text-white/70 hover:border-white hover:text-white'}`} aria-pressed={locale === code}>
          {locales[code]?.label || code}
        </button>
      ))}
    </div>
  );
}
