'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MenuOutlined, 
  CloseOutlined, 
  PhoneOutlined, 
  MailOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <PhoneOutlined className="text-blue-200" />
                <a 
                  href="tel:+918917297392" 
                  className="hover:text-blue-200 transition-colors"
                >
                  +91 8917297392
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MailOutlined className="text-blue-200" />
                <a 
                  href="mailto:services@ageits.com" 
                  className="hover:text-blue-200 transition-colors"
                >
                  services@ageits.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <GlobalOutlined className="text-blue-200" />
                <span>Serving Nationwide</span>
              </div>
              <div className="h-4 w-px bg-blue-400"></div>
              <div className="flex items-center space-x-3">
                <button className="hover:text-blue-200 transition-colors">
                  <UserOutlined />
                </button>
                <button className="hover:text-blue-200 transition-colors">
                  <ShoppingCartOutlined />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-professional shadow-lg border-b border-gray-200'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center space-x-3 group"
                onClick={closeMenu}
              >
                <img src="/logo.jpg" alt="Ananta Gopal Enterprises Logo" className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-gradient-primary">
                    Ananta Gopal
                  </div>
                  <div className="text-sm text-gray-600 -mt-1">
                    Enterprises
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? 'w-full' : ''
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                Get Started
                <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
                aria-expanded="false"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <CloseOutlined className="block h-6 w-6" />
                ) : (
                  <MenuOutlined className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? 'max-h-screen opacity-100 pb-6'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="backdrop-blur-professional rounded-2xl mt-4 p-6 shadow-xl border border-gray-200">
              {/* Mobile Contact Info */}
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <div className="flex items-center space-x-2">
                    <PhoneOutlined className="text-blue-500" />
                    <a href="tel:+918917297392" className="hover:text-blue-600">
                      +91 8917297392
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MailOutlined className="text-blue-500" />
                  <a href="mailto:services@ageits.com" className="hover:text-blue-600">
                    services@ageits.com
                  </a>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2 mb-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg group"
                  onClick={closeMenu}
                >
                  Get Started
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
