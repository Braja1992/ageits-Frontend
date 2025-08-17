'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  LinkedinOutlined, 
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  ArrowRightOutlined,
  HeartFilled,
  SafetyOutlined,
  TrophyOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Products', href: '/products' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Business Consulting', href: '/services/consulting' },
      { name: 'Product Development', href: '/services/development' },
      { name: 'Customer Support', href: '/services/support' },
      { name: 'Training Programs', href: '/services/training' },
    ],
    resources: [
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Sitemap', href: '/sitemap.xml' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: FacebookOutlined, href: 'https://facebook.com/anantagopal', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: TwitterOutlined, href: 'https://twitter.com/anantagopal', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: LinkedinOutlined, href: 'https://linkedin.com/company/anantagopal', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: InstagramOutlined, href: 'https://instagram.com/anantagopal', color: 'hover:text-orange-500' },
  ];

  const features = [
    { icon: SafetyOutlined, text: 'Quality Assured', color: 'text-blue-500' },
    { icon: TrophyOutlined, text: 'Award Winning', color: 'text-orange-500' },
    { icon: ClockCircleOutlined, text: '24/7 Support', color: 'text-blue-500' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container-custom">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link
                  href="/"
                  className="flex items-center space-x-3 group mb-4"
                >
                  <img src="/logo.jpg" alt="Ananta Gopal Enterprises Logo" className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                  <div>
                    <div className="text-xl font-bold text-gradient-primary">
                      Ananta Gopal
                    </div>
                    <div className="text-sm text-gray-600 -mt-1">
                      Enterprises
                    </div>
                  </div>
                </Link>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Delivering excellence through innovative solutions, premium products, and exceptional customer service that drives your business forward.
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className={`text-lg ${feature.color}`} />
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 group">
                  <EnvironmentOutlined className="mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm">Plot No- 22, Somu Green valley, Sudarpur, Chandaka, Bhubaneswar, Odisha-751024</span>
                </div>
                <div className="flex items-center text-gray-600 group">
                  <PhoneOutlined className="mr-3 text-orange-500 group-hover:text-orange-600 transition-colors" />
                  <a 
                    href="tel:+918917297392" 
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    +91 8917297392
                  </a>
                </div>
                <div className="flex items-center text-gray-600 group">
                  <MailOutlined className="mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" />
                  <a 
                    href="mailto:services@ageits.com" 
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    services@ageits.com
                  </a>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 relative">
                Company
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-accent rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRightOutlined className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 relative">
                Services
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-accent rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRightOutlined className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 relative">
                Stay Connected
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-accent rounded-full"></div>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to our newsletter for the latest updates, insights, and exclusive offers.
              </p>
              
              {/* Newsletter Signup */}
              <form className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-l-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-orange-500 text-white rounded-r-xl hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md hover:shadow-lg"
                  >
                    <SendOutlined />
                  </button>
                </div>
              </form>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-600 mb-4 font-medium">Follow us on social media:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-500 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <IconComponent className="text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Resources Links */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-500 hover:text-blue-600 transition-colors text-xs"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center text-sm text-gray-600">
              <span>© {currentYear} Ananta Gopal Enterprises. Made with</span>
              <HeartFilled className="mx-2 text-red-500" />
              <span>in India. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] repeat"></div>
      </div>
    </footer>
  );
};

export default Footer;
