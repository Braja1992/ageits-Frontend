import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ServiceGrid from '@/components/services/ServiceGrid';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the wide range of professional services we offer to help Ananta Gopal Enterprises succeed.',
  openGraph: {
    title: 'Our Services | Ananta Gopal Enterprises',
    description: 'Explore the wide range of professional services we offer to help Ananta Gopal Enterprises succeed.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceGrid />
      </main>
      <Footer />
    </>
  );
}
