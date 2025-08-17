'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRightOutlined, 
  PlayCircleOutlined,
  CheckCircleOutlined,
  StarFilled,
  TrophyOutlined,
  TeamOutlined,
  SafetyOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const Hero: React.FC = () => {
  const achievements = [
    { icon: TeamOutlined, number: '200+', label: 'IoT Deployments', color: 'text-blue-600' },
    { icon: TrophyOutlined, number: '150+', label: 'Robotics Projects', color: 'text-orange-500' },
    { icon: SafetyOutlined, number: '5+', label: 'Years Experience', color: 'text-blue-600' },
    { icon: ClockCircleOutlined, number: '24/7', label: 'System Monitoring', color: 'text-orange-500' },
  ];

  const features = [
    'Computer & Laptop Solutions',
    'CCTV & Security Systems',
    'IT Security Services',
    'Cloud Solutions',
    'Advanced Robotics Solutions',
    'Real-time Monitoring Systems'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-32 w-20 h-20 bg-orange-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-blue-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 animate-scale-in">
              <StarFilled className="mr-2 text-orange-500" />
              #1 Trusted Business Partner
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient-primary">Your Trusted Partner</span>
              <br />
              <span className="text-gray-700">for Quality</span>
              <br />
              <span className="text-gradient-accent">Products & Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-blue-700 mb-8 leading-relaxed max-w-lg font-semibold">
              Delivering excellence through innovative solutions, premium products, and exceptional customer service that drives your business forward.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {features.map((feature, index) => {
                const colors = ['text-green-600', 'text-blue-600', 'text-orange-600', 'text-yellow-600', 'text-green-600', 'text-blue-600'];
                const iconColors = ['text-green-500', 'text-blue-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500'];
                const bgColors = ['bg-green-50', 'bg-blue-50', 'bg-orange-50', 'bg-yellow-50', 'bg-green-50', 'bg-blue-50'];
                return (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-3 rounded-xl ${bgColors[index]} border border-opacity-20 animate-fade-in-left animate-delay-${(index + 1) * 100} hover:shadow-md transition-all duration-300`}
                  >
                    <CheckCircleOutlined className={`${iconColors[index]} text-lg flex-shrink-0`} />
                    <span className={`${colors[index]} font-semibold text-sm`}>{feature}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animate-delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Get Started Today
                <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group">
                <PlayCircleOutlined className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Story
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animate-delay-500">
              {achievements.map((item, index) => {
                const IconComponent = item.icon;
                const gradients = [
                  'bg-gradient-to-br from-blue-500 to-blue-600',
                  'bg-gradient-to-br from-orange-500 to-orange-600',
                  'bg-gradient-to-br from-green-500 to-green-600',
                  'bg-gradient-to-br from-yellow-500 to-yellow-600'
                ];
                const textColors = ['text-blue-600', 'text-orange-600', 'text-green-600', 'text-yellow-600'];
                return (
                  <div key={index} className="text-center group">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${gradients[index]} shadow-lg mb-3 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="text-xl text-white" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${textColors[index]}`}>{item.number}</div>
                    <div className="text-sm text-gray-700 font-semibold">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-fade-in-right animate-delay-200">
            {/* Main Visual Container */}
            <div className="relative">
              {/* Primary Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrophyOutlined className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Excellence Delivered</h3>
                  <p className="text-gray-600 mb-6">Premium quality products and services that exceed expectations</p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarFilled key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Rated 5.0 by 500+ clients</p>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-6 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support Available</div>
                </div>
              </div>

              {/* Tertiary Card */}
              <div className="absolute -top-6 -right-6 bg-blue-500 text-white rounded-2xl p-6 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-sm opacity-90">Projects Done</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
