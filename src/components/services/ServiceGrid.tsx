'use client';

import React from 'react';
import Link from 'next/link';
import {
  LaptopOutlined,
  VideoCameraOutlined,
  PrinterOutlined,
  SafetyOutlined,
  CloudOutlined,
  SecurityScanOutlined,
  RocketOutlined,
  DatabaseOutlined,
  QuestionCircleOutlined,
  WifiOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled,
  TrophyOutlined
} from '@ant-design/icons';

const ServiceGrid: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Computer & Laptop Solutions',
      description: [
        'Computer and Laptop sales',
        'Professional repair services',
        'Motherboard and chip level service',
        'Damage recovery solutions',
        'Data recovery services',
      ],
      icon: LaptopOutlined,
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      popular: true,
    },
    {
      id: 2,
      title: 'CCTV & Security Systems',
      description: [
        'CCTV and IP Camera installation',
        'Biometric attendance systems',
        'Access control solutions',
        'GPS vehicle tracking',
        'Intruder alarm systems',
      ],
      icon: VideoCameraOutlined,
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      popular: false,
    },
    {
      id: 3,
      title: 'Printer Sales & Service',
      description: [
        'All-brand printer sales',
        'Cartridge refilling service',
        'Toner replacement & refilling',
        'Photocopier maintenance',
        'Dot matrix printer repair',
      ],
      icon: PrinterOutlined,
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      popular: false,
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: [
        'Security consulting services',
        'Firewall and UTM setup',
        'Antivirus & ransomware protection',
        'Endpoint security management',
        'Email and web security',
      ],
      icon: SafetyOutlined,
      gradient: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      popular: true,
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description: [
        'Cloud migration services',
        'Backup and recovery solutions',
        'Cloud storage management',
        'Hosting and infrastructure',
        'Office 365 & G-Suite setup',
      ],
      icon: CloudOutlined,
      gradient: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      popular: false,
    },
    {
      id: 6,
      title: 'IT Security Services',
      description: [
        'Security audit & assessment',
        'Vulnerability testing',
        'Penetration testing services',
        'Security operations center',
        'Managed security services',
      ],
      icon: SecurityScanOutlined,
      gradient: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      popular: false,
    },
    {
      id: 7,
      title: 'Performance Optimization',
      description: [
        'System performance tuning',
        'Website & application optimization',
        'Database optimization',
        'Server infrastructure optimization',
        'Load balancing solutions',
      ],
      icon: RocketOutlined,
      gradient: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      popular: false,
    },
    {
      id: 8,
      title: 'Data Backup & Recovery',
      description: [
        'Comprehensive backup solutions',
        'On-premise and cloud backup',
        'Disaster recovery planning',
        'Data archiving services',
        'Backup monitoring & management',
      ],
      icon: DatabaseOutlined,
      gradient: 'from-yellow-600 to-yellow-700',
      bgColor: 'bg-yellow-50',
      popular: false,
    },
    {
      id: 9,
      title: 'IT Support & Helpdesk',
      description: [
        '24/7 technical support',
        'Remote and on-site assistance',
        'Proactive system monitoring',
        'IT asset management',
        'User training & support',
      ],
      icon: QuestionCircleOutlined,
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      popular: true,
    },
    {
      id: 10,
      title: 'Network Solutions',
      description: [
        'LAN, WAN & SD-WAN solutions',
        'Wireless & Wi-Fi infrastructure',
        'Network security & VPN',
        'Network monitoring systems',
        'Bandwidth optimization',
      ],
      icon: WifiOutlined,
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
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
            Professional Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">Complete IT</span>
            <br />
            <span className="text-gradient-accent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology services designed to empower your business with cutting-edge solutions and exceptional support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    <TrophyOutlined className="mr-1" />
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="text-2xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {service.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-gray-600">
                      <CheckCircleOutlined className="text-green-500 text-sm mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-orange-500 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 ${service.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up animate-delay-300">
          {[
            { number: '500+', label: 'Projects Completed', icon: '🚀', color: 'text-blue-600', bgColor: 'bg-blue-100' },
            { number: '99%', label: 'Client Satisfaction', icon: '⭐', color: 'text-orange-600', bgColor: 'bg-orange-100' },
            { number: '24/7', label: 'Support Available', icon: '🛠️', color: 'text-green-600', bgColor: 'bg-green-100' },
            { number: '10+', label: 'Service Categories', icon: '📋', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className={`text-3xl font-bold mb-1 ${stat.color} group-hover:scale-105 transition-all duration-300`}>
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
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find exactly what you're looking for? Our experts can create tailored solutions to meet your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Get Custom Quote
                <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+918917297392"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 left-1/3 w-14 h-14 bg-yellow-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-20 w-18 h-18 bg-blue-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default ServiceGrid;
