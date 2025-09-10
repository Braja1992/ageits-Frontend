import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ScrollToTop from '@/components/common/ScrollToTop';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Ananta Gopal Enterprises - Professional Services',
    template: '%s | Ananta Gopal Enterprises',
  },
  description: 'Professional business services with quality products and exceptional customer service.',
  keywords: ['business', 'services', 'products', 'professional', 'quality'],
  authors: [{ name: 'Ananta Gopal Enterprises' }],
  creator: 'Ananta Gopal Enterprises',
  publisher: 'Ananta Gopal Enterprises',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ageits.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ageits.com',
    siteName: 'Ananta Gopal Enterprises',
    title: 'Ananta Gopal Enterprises - Professional Services',
    description: 'Professional business services with quality products and exceptional customer service.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ananta Gopal Enterprises',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ananta Gopal Enterprises - Professional Services',
    description: 'Professional business services with quality products and exceptional customer service.',
    images: ['/og-image.jpg'],
    creator: '@anantagopal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization structured data for SEO
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ananta Gopal Enterprises",
    "url": "https://www.ageits.com",
    "logo": "https://www.ageits.com/logo.jpg",
    "description": "Professional business services with quality products and exceptional customer service. Specializing in IT services, cybersecurity, cloud solutions, and comprehensive business technology solutions.",
    "foundingDate": "2015",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8917297392",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add social media URLs when available
      // "https://facebook.com/anantagopal",
      // "https://twitter.com/anantagopal",
      // "https://linkedin.com/company/anantagopal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services & Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer & Laptop Solutions",
            "description": "Professional computer and laptop repair, sales, and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Solutions",
            "description": "Comprehensive cybersecurity services including firewall setup and antivirus protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions",
            "description": "Cloud migration, backup, and infrastructure management services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <meta name="theme-color" content="#ffffff" />
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
        <ScrollToTop />
      </body>
    </html>
  );
}
