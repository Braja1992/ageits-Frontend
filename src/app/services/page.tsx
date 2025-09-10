import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ServiceGrid from '@/components/services/ServiceGrid';

export const metadata: Metadata = {
  title: 'IT Services | AGEITS - Ananta Gopal Enterprises',
  description: 'Professional IT services including cybersecurity, cloud solutions, computer repair, networking, CCTV systems, printer services, data recovery, and 24/7 IT support.',
  keywords: [
    'IT services',
    'cybersecurity solutions',
    'cloud solutions',
    'computer repair',
    'laptop repair',
    'CCTV installation',
    'security systems',
    'printer sales',
    'printer service',
    'data recovery',
    'IT security services',
    'performance optimization',
    'data backup recovery',
    'IT support helpdesk',
    'network solutions',
    'firewall setup',
    'antivirus protection',
    'cloud migration',
    'backup solutions',
    'LAN WAN solutions',
    'WiFi infrastructure',
    'VPN setup',
    'AGEITS',
    'Ananta Gopal Enterprises'
  ].join(', '),
  openGraph: {
    title: 'IT Services | AGEITS - Ananta Gopal Enterprises',
    description: 'Professional IT services including cybersecurity, cloud solutions, computer repair, networking, CCTV systems, printer services, data recovery, and 24/7 IT support.',
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
