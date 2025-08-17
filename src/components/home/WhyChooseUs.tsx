'use client';

import React from 'react';
import { 
  CheckCircleOutlined, 
  TeamOutlined, 
  ClockCircleOutlined, 
  TrophyOutlined,
  SafetyOutlined,
  RocketOutlined,
  StarFilled,
  ArrowRightOutlined
} from '@ant-design/icons';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: TeamOutlined,
      title: 'Expert Team',
      description: 'Our experienced professionals bring years of industry expertise to every project.',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: ClockCircleOutlined,
      title: 'Fast Delivery',
      description: 'We deliver high-quality solutions on time, every time, without compromising quality.',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: SafetyOutlined,
      title: 'Secure & Reliable',
      description: 'Your data and business are protected with enterprise-grade security measures.',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: TrophyOutlined,
      title: 'Award Winning',
      description: 'Recognized for excellence in service delivery and customer satisfaction.',
      gradient: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
    },
    {
      icon: CheckCircleOutlined,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control ensure the highest standards.',
      gradient: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: RocketOutlined,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to give you a competitive advantage.',
      gradient: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', color: 'text-blue-400', bgColor: 'bg-blue-500' },
    { number: '1000+', label: 'Projects Completed', color: 'text-orange-400', bgColor: 'bg-orange-500' },
    { number: '99.9%', label: 'Uptime Guarantee', color: 'text-green-400', bgColor: 'bg-green-500' },
    { number: '24/7', label: 'Support Available', color: 'text-yellow-400', bgColor: 'bg-yellow-500' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] repeat"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <StarFilled className="mr-2 text-orange-500" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">Excellence in</span>
            <br />
            <span className="text-gradient-accent">Every Detail</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations and drive your business forward.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="text-2xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-orange-500 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 via-orange-500 to-green-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Track Record</h3>
                <p className="text-gray-600">Numbers that speak for our commitment to excellence</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-3xl lg:text-4xl font-bold text-white">
                        {stat.number.charAt(0)}
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm lg:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 animate-fade-in-up animate-delay-500">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 lg:p-12 text-center shadow-lg border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarFilled key={i} className="text-yellow-400 text-2xl mx-1" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                "Working with this team has been transformative for our business. Their expertise, dedication to quality, and innovative approach is truly unmatched in the industry."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-lg">AG</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-lg">Mr. Hara</div>
                  <div className="text-gray-600">CEO, Ananta Gopal Enterprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 left-1/3 w-18 h-18 bg-yellow-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default WhyChooseUs;
