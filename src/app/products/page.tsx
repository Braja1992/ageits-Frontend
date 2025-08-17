import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ProductGrid from '@/components/products/ProductGrid';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Browse our collection of high-quality products designed to meet your business needs.',
  openGraph: {
    title: 'Our Products | Ananta Gopal Enterprises',
    description: 'Browse our collection of high-quality products designed to meet your business needs.',
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
