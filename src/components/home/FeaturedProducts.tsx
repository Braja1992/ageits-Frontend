'use client';

import React from 'react';
import Link from 'next/link';
import { 
  StarFilled, 
  ShoppingCartOutlined, 
  CheckCircleOutlined,
  ArrowRightOutlined,
  TrophyOutlined,
  CrownOutlined,
  RocketOutlined
} from '@ant-design/icons';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Industrial Robotics Suite',
      description: 'Complete robotic automation solution with AI-powered control systems and real-time monitoring for industrial operations.',
      price: 15999,
      originalPrice: 19999,
      rating: 4.8,
      reviews: 124,
      badge: 'Best Seller',
      badgeColor: 'bg-orange-500',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      features: ['AI Control System', 'Real-time Monitoring', '24/7 Support', 'Custom Programming'],
      icon: TrophyOutlined,
      popular: true,
    },
    {
      id: 2,
      name: 'Smart IoT Starter Kit',
      description: 'Perfect IoT package for businesses looking to implement smart monitoring and automation with seamless connectivity.',
      price: 2499,
      originalPrice: 2999,
      rating: 4.6,
      reviews: 89,
      badge: 'Popular',
      badgeColor: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      features: ['Sensor Network', 'Cloud Dashboard', 'Mobile App', 'Data Analytics'],
      icon: RocketOutlined,
      popular: false,
    },
    {
      id: 3,
      name: 'Enterprise Automation Platform',
      description: 'Scalable robotics and IoT integration platform for large-scale industrial operations with advanced features.',
      price: 45999,
      originalPrice: 59999,
      rating: 4.9,
      reviews: 67,
      badge: 'Enterprise',
      badgeColor: 'bg-yellow-500',
      gradient: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      features: ['Custom Integration', 'Advanced AI Analytics', 'Dedicated Support', 'White Label Solution'],
      icon: CrownOutlined,
      popular: false,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] repeat"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <StarFilled className="mr-2 text-orange-500" />
            Featured Products
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">Premium</span>
            <br />
            <span className="text-gradient-accent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular products designed to streamline your business operations and accelerate growth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-fade-in-up animate-delay-${(index + 1) * 100} h-full flex flex-col`}
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-1 left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                    🔥 Hot
                  </div>
                )}

                {/* Product Header */}
                <div className={`relative p-8 bg-gradient-to-br ${product.gradient} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <div className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {product.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white text-opacity-90 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarFilled
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2 font-medium">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleOutlined className="text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-800">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Save ${product.originalPrice - product.price}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
                    >
                      <span className="flex items-center justify-center">
                        View Details
                        <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                    <button className="bg-orange-100 text-orange-600 p-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                      <ShoppingCartOutlined className="text-lg" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 ${product.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up animate-delay-300">
          {[
            { number: '10K+', label: 'Active Users', icon: '👥', color: 'text-blue-600', bgColor: 'bg-blue-100' },
            { number: '99.9%', label: 'Uptime', icon: '⚡', color: 'text-green-600', bgColor: 'bg-green-100' },
            { number: '24/7', label: 'Support', icon: '🛠️', color: 'text-orange-600', bgColor: 'bg-orange-100' },
            { number: '50+', label: 'Integrations', icon: '🔗', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className={`text-2xl font-bold mb-1 ${stat.color} group-hover:scale-105 transition-all duration-300`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up animate-delay-500">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our complete product catalog and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                View All Products
                <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 left-1/3 w-14 h-14 bg-yellow-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default FeaturedProducts;
