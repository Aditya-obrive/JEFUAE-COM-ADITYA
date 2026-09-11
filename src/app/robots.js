const siteUrl = 'https://www.jefuae.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/staging/', '/search', '/*?*'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
