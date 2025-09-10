import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/contact/ContactForm';
import Map from '@/components/contact/Map';

export const metadata: Metadata = {
  title: 'Contact AGEITS - Ananta Gopal Enterprises',
  description: 'Get in touch with AGEITS (Ananta Gopal Enterprises) for IT services, cybersecurity, cloud solutions, robotics, IoT products, and professional technology support. Call +91-8917297392.',
  keywords: [
    'contact AGEITS',
    'Ananta Gopal Enterprises contact',
    'IT services contact',
    'cybersecurity support',
    'cloud solutions contact',
    'robotics products inquiry',
    'IoT solutions support',
    'technical support',
    'customer service',
    'business inquiry',
    'technology consultation',
    '+91-8917297392',
    'IT helpdesk'
  ].join(', '),
  openGraph: {
    title: 'Contact AGEITS - Ananta Gopal Enterprises',
    description: 'Get in touch with AGEITS (Ananta Gopal Enterprises) for IT services, cybersecurity, cloud solutions, robotics, IoT products, and professional technology support.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm />
        <Map />
      </main>
      <Footer />
    </>
  );
}
