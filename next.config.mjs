/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/industries/renewableenergy', destination: '/renewableenergy', permanent: true },
      { source: '/industries/oilandgas', destination: '/oilandgas', permanent: true },
      { source: '/industries/powerutilities', destination: '/powerutilities', permanent: true },
      { source: '/industries/manufacturingplant', destination: '/manufacturingplant', permanent: true },
      { source: '/industries/processplant', destination: '/processplant', permanent: true },
      { source: '/industries/commercialbuilding', destination: '/commercialbuilding', permanent: true },
      { source: '/industries/renewableenergy/faqs', destination: '/renewableenergy/faqs', permanent: true },
      { source: '/industries/oilandgas/faqs', destination: '/oilandgas/faqs', permanent: true },
      { source: '/industries/powerutilities/faqs', destination: '/powerutilities/faqs', permanent: true },
      { source: '/industries/manufacturingplant/faqs', destination: '/manufacturingplant/faqs', permanent: true },
      { source: '/industries/processplant/faqs', destination: '/processplant/faqs', permanent: true },
      { source: '/industries/commercialbuilding/faqs', destination: '/commercialbuilding/faqs', permanent: true },
      { source: '/renewable-energy-grid-studies/faq', destination: '/renewableenergy/faqs', permanent: true },
      { source: '/electrical-engineering-oil-and-gas/faq', destination: '/oilandgas/faqs', permanent: true },
      { source: '/power-utility-engineering-studies/faq', destination: '/powerutilities/faqs', permanent: true },
      { source: '/manufacturing-plant-electrical-studies/faq', destination: '/manufacturingplant/faqs', permanent: true },
      { source: '/process-plant-electrical-studies/faq', destination: '/processplant/faqs', permanent: true },
      { source: '/commercial-building-electrical-safety/faq', destination: '/commercialbuilding/faqs', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ]
  },
}

export default nextConfig
