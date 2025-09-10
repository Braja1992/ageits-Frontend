import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/search?q=',
        ],
      },
    ],
    sitemap: 'https://www.ageits.com/sitemap.xml',
  }
}