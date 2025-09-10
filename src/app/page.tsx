import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Home',
  description: 'AGEITS - Leading provider of IT services, cybersecurity, cloud solutions, robotics, IoT, and comprehensive business technology solutions. Expert computer repair, networking, and digital transformation.',
  keywords: [
    'AGEITS',
    'Ananta Gopal Enterprises',
    'IT services',
    'cybersecurity',
    'cloud solutions',
    'computer repair',
    'networking',
    'robotics',
    'IoT solutions',
    'embedded systems',
    'web development',
    'mobile development',
    'cloud security',
    'hardware networking',
    'CCTV systems',
    'printer services',
    'data recovery',
    'IT support',
    'student projects',
    'real-time labs'
  ].join(', '),
  openGraph: {
    title: 'AGEITS - Ananta Gopal Enterprises | Professional IT Services',
    description: 'Leading provider of IT services, cybersecurity, cloud solutions, robotics, IoT, and comprehensive business technology solutions.',
    url: '/',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'AGEITS - Ananta Gopal Enterprises',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Services />
        <FeaturedProducts />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
