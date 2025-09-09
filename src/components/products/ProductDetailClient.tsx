'use client';

import React from 'react';
import { Product } from '@/types';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import OptimizedImage from '@/components/common/OptimizedImage';

interface ProductDetailClientProps {
  product: Product;
}

const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image || "/og-product.jpg",
    "sku": product.id.toString(),
    "brand": {
      "@type": "Brand",
      "name": "Ananta Gopal Enterprises"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Ananta Gopal Enterprises"
      }
    },
    "category": product.category,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Header />
      <main className="container mx-auto px-6 py-20">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.name }
          ]}
        />

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            {product.image ? (
              <OptimizedImage
                src={product.image}
                alt={`${product.name} - High-quality ${product.category || 'IT'} product from Ananta Gopal Enterprises`}
                width={600}
                height={400}
                className="w-full h-96 rounded-lg"
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Add to Cart
              </button>
            </div>
            {product.category && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Category
                </h3>
                <p className="text-gray-600">{product.category}</p>
              </div>
            )}
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Availability: {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section (placeholder) */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder for related products */}
            <div className="text-center text-gray-500">
              Related products will be displayed here
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailClient;