import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/products/ProductDetailClient';
import { Product } from '@/types';

// This would typically come from your API or database
// For now, we'll use a mock function
async function getProduct(id: string): Promise<Product | null> {
  try {
    // In a real app, this would be an API call or database query
    // For now, return null to show the pattern
    return null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: 'Product Not Found | Ananta Gopal Enterprises',
      description: 'The requested product could not be found.',
    };
  }

  const title = `${product.name} | Premium IT Products | Ananta Gopal Enterprises`;
  const description = `${product.description} Shop quality ${product.category || 'IT'} products with expert support. Professional IT services and cybersecurity solutions available.`;

  return {
    title,
    description,
    keywords: [
      product.name.toLowerCase(),
      product.category?.toLowerCase() || 'it products',
      'computer hardware',
      'it solutions',
      'professional services',
      'quality products',
      'cybersecurity',
      'cloud solutions'
    ].join(', '),
    openGraph: {
      title,
      description,
      url: `/products/${product.id}`,
      images: [
        {
          url: product.image || '/og-product.jpg',
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image || '/og-product.jpg'],
    },
    alternates: {
      canonical: `/products/${product.id}`,
    },
  };
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
