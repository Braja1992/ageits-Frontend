import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';

export const metadata: Metadata = {
  title: 'About AGEITS - Ananta Gopal Enterprises',
  description: 'Learn about AGEITS (Ananta Gopal Enterprises) - a leading provider of IT services, cybersecurity, cloud solutions, robotics, and IoT solutions. Our mission is to empower businesses with cutting-edge technology.',
  keywords: [
    'about AGEITS',
    'Ananta Gopal Enterprises',
    'IT company',
    'technology solutions',
    'cybersecurity company',
    'cloud services provider',
    'robotics company',
    'IoT solutions',
    'business technology',
    'digital transformation',
    'IT consulting',
    'technology experts',
    'professional services'
  ].join(', '),
  openGraph: {
    title: 'About AGEITS - Ananta Gopal Enterprises',
    description: 'Learn about AGEITS (Ananta Gopal Enterprises) - a leading provider of IT services, cybersecurity, cloud solutions, robotics, and IoT solutions.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <Mission />
        <Team />
      </main>
      <Footer />
    </>
  );
}
