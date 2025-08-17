import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
