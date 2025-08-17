import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactForm from '@/components/contact/ContactForm';
import Map from '@/components/contact/Map';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Ananta Gopal Enterprises for any inquiries or support. We are here to help you.',
  openGraph: {
    title: 'Contact Us | Ananta Gopal Enterprises',
    description: 'Get in touch with Ananta Gopal Enterprises for any inquiries or support. We are here to help you.',
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
