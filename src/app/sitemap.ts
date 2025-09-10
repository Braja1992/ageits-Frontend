import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NODE_ENV === 'production' ? 'https://www.ageits.com' : 'http://localhost:3000')

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Dynamic product pages (placeholder - in real app, fetch from API/database)
  const productPages: Array<{id: number, lastModified: Date}> = [
    // Example product IDs - replace with actual product data
    // { id: 1, lastModified: new Date() },
    // { id: 2, lastModified: new Date() },
  ]

  const productPagesMapped = productPages.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: product.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic service pages
  const servicePages = [
    { id: 1, lastModified: new Date() },
    { id: 2, lastModified: new Date() },
    { id: 3, lastModified: new Date() },
    { id: 4, lastModified: new Date() },
    { id: 5, lastModified: new Date() },
    { id: 6, lastModified: new Date() },
    { id: 7, lastModified: new Date() },
    { id: 8, lastModified: new Date() },
    { id: 9, lastModified: new Date() },
    { id: 10, lastModified: new Date() },
  ].map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: service.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Student pages
  const studentPages = [
    {
      url: `${baseUrl}/students`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/students/embedded-systems`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/students/iot-projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/students/cloud-security`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/students/cloud-setup`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/students/hardware-networking`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/students/web-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/students/mobile-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...staticPages, ...productPagesMapped, ...servicePages, ...studentPages]
}