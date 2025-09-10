import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ProductGrid from '@/components/products/ProductGrid';

export const metadata: Metadata = {
  title: 'Robotics & IoT Products | AGEITS - Ananta Gopal Enterprises',
  description: 'Advanced robotics and IoT products including Industrial Robotics Suite, Smart IoT Starter Kit, Enterprise Automation Platform, Robotic Process Automation, Smart Manufacturing Hub, and Collaborative Robot Systems.',
  keywords: [
    'robotics products',
    'IoT solutions',
    'industrial robotics',
    'smart IoT kit',
    'enterprise automation',
    'robotic process automation',
    'smart manufacturing',
    'collaborative robots',
    'automation platform',
    'AI control systems',
    'real-time monitoring',
    'sensor networks',
    'cloud dashboard',
    'data analytics',
    'production monitoring',
    'quality control',
    'predictive maintenance',
    'custom dashboards',
    'AGEITS',
    'Ananta Gopal Enterprises'
  ].join(', '),
  openGraph: {
    title: 'Robotics & IoT Products | AGEITS - Ananta Gopal Enterprises',
    description: 'Advanced robotics and IoT products including Industrial Robotics Suite, Smart IoT Starter Kit, Enterprise Automation Platform, Robotic Process Automation, Smart Manufacturing Hub, and Collaborative Robot Systems.',
    url: '/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
