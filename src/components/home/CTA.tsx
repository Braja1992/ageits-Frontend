'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRightOutlined, 
  PhoneOutlined, 
  CheckCircleOutlined,
  StarFilled,
  RocketOutlined,
  SafetyOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const CTA: React.FC = () => {
  const benefits = [
    { icon: CheckCircleOutlined, text: 'Free Consultation', color: 'text-green-300' },
    { icon: RocketOutlined, text: 'Custom Solutions', color: 'text-orange-300' },
    { icon: ClockCircleOutlined, text: '24/7 Support', color: 'text-blue-300' },
    { icon: SafetyOutlined, text: 'Quality Guaranteed', color: 'text-yellow-300' },
  ];

  const companies = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateLab', logo: '🚀' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSync', logo: '☁️' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <StarFilled className="mr-2 text-yellow-300" />
            Ready to Get Started?
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animate-delay-100">
            Transform Your Business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-green-300">
              Today
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
            Join hundreds of satisfied clients who have accelerated their growth with our innovative solutions and expert support.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up animate-delay-300">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className={`text-2xl ${benefit.color}`} />
                  </div>
                  <span className="text-blue-100 text-sm font-medium text-center">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-400">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              Get Started Now
              <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <a
              href="tel:+919999999999"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
            >
              <PhoneOutlined className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Call Us Now
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in-up animate-delay-500">
            {[
              { number: '500+', label: 'Happy Clients', color: 'text-green-300' },
              { number: '1000+', label: 'Projects Done', color: 'text-orange-300' },
              { number: '99.9%', label: 'Success Rate', color: 'text-yellow-300' },
              { number: '24/7', label: 'Support', color: 'text-blue-300' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl font-bold mb-1 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center animate-fade-in-up animate-delay-600">
            <p className="text-blue-200 text-sm mb-6 font-medium">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white bg-opacity-10 px-4 py-2 rounded-xl hover:bg-opacity-20 transition-all duration-300 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{company.logo}</span>
                  <span className="text-white font-semibold text-sm">{company.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="mt-12 animate-fade-in-up animate-delay-700">
            <div className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg">
              <CheckCircleOutlined className="mr-2" />
              30-Day Money Back Guarantee
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400 bg-opacity-20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-400 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 left-1/3 w-14 h-14 bg-blue-300 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-20 w-18 h-18 bg-orange-300 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default CTA;
