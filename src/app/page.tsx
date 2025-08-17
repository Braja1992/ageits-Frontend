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
  description: 'Welcome to Ananta Gopal Enterprises. Discover quality products and exceptional customer service.',
  openGraph: {
    title: 'Ananta Gopal Enterprises - Professional Services',
    description: 'Welcome to Ananta Gopal Enterprises. Discover quality products and exceptional customer service.',
    url: '/',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Ananta Gopal Enterprises Home',
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
