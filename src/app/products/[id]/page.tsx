'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import useApi from '@/hooks/useApi';
import Loading from '@/components/common/Loading';
import { Product } from '@/types';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const ProductDetail = () => {
  const params = useParams();
  const id = params?.id;
  const { data: product, loading, error } = useApi(id ? `/products/${id}` : '');

  if (loading) return <Loading />;
  if (error) return <p>Error loading product.</p>;
  if (!product) return <p>Product not found.</p>;

  const productData = product as Product;

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-20">
        {productData && (
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                {productData.name}
              </h1>
              <p className="text-gray-600 text-lg mb-4">
                {productData.description}
              </p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  ${productData.price}
                </span>
                <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Category
                </h3>
                <p className="text-gray-600">{productData.category}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
