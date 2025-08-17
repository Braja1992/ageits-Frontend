import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Ananta Gopal Enterprises, our mission, and the dedicated team behind our success.',
  openGraph: {
    title: 'About Us | Ananta Gopal Enterprises',
    description: 'Learn more about Ananta Gopal Enterprises, our mission, and the dedicated team behind our success.',
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
