'use client';

import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import FAQ from '@/components/common/FAQ';
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
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  UserOutlined
} from '@ant-design/icons';

interface Service {
  id: number;
  title: string;
  description: string[];
  gradient: string;
  bgColor: string;
  iconColor: string;
  popular: boolean;
  fullDescription: string;
  features: string[];
  duration: string;
  category: string;
}

interface ServiceDetailClientProps {
  service: Service;
  allServices: Service[];
}

const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service, allServices }) => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDescription,
    "provider": {
      "@type": "Organization",
      "name": "Ananta Gopal Enterprises",
      "url": "https://ageits.com"
    },
    "category": service.category,
    "offers": {
      "@type": "Offer",
      "description": `Professional ${service.title} service`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200"
    }
  };

  // Icon mapping
  const iconMap = {
    1: LaptopOutlined,
    2: VideoCameraOutlined,
    3: PrinterOutlined,
    4: SafetyOutlined,
    5: CloudOutlined,
    6: SecurityScanOutlined,
    7: RocketOutlined,
    8: DatabaseOutlined,
    9: QuestionCircleOutlined,
    10: WifiOutlined,
  };

  const IconComponent = iconMap[service.id as keyof typeof iconMap] || LaptopOutlined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] repeat"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb Navigation */}
          <section className="section-padding pt-8">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: service.title }
              ]}
            />
          </section>

          {/* Hero Section */}
          <section className="section-padding">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <StarFilled className="mr-2 text-orange-500" />
                {service.category}
              </div>

              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className="text-3xl text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">{service.title.split(' ')[0]}</span>
                <br />
                <span className="text-gradient-accent">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </section>

          {/* Service Details */}
          <section className="pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h2>
                  <ul className="space-y-4">
                    {service.description.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 animate-fade-in-up animate-delay-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features & Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircleOutlined className="text-blue-500 text-lg mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 sticky top-8 animate-fade-in-up animate-delay-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Service Information</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <ClockCircleOutlined className="text-blue-600 text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Service Duration</p>
                        <p className="font-semibold text-gray-800">{service.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <UserOutlined className="text-orange-600 text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Pricing</p>
                        <p className="font-semibold text-gray-800">Contact us for quote</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="w-full bg-blue-600 text-white text-center py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
                    >
                      Get Free Quote
                      <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <a
                      href="tel:+918917297392"
                      className="w-full border-2 border-orange-500 text-orange-600 text-center py-4 px-6 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
                    >
                      <PhoneOutlined className="mr-2" />
                      Call Now
                    </a>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-4">Need Assistance?</h4>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-3">
                        <PhoneOutlined className="text-blue-600" />
                        <span>+91 8917297392</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MailOutlined className="text-blue-600" />
                        <span>info@ageits.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <StarFilled className="mr-2 text-orange-500" />
                More Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Explore Our</span>
                <br />
                <span className="text-gradient-accent">Other Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover more professional services to meet all your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService, index) => {
                  const RelatedIcon = iconMap[relatedService.id as keyof typeof iconMap] || LaptopOutlined;
                  return (
                    <Link
                      key={relatedService.id}
                      href={`/services/${relatedService.id}`}
                      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                    >
                      {/* Popular Badge */}
                      {relatedService.popular && (
                        <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Popular
                        </div>
                      )}

                      <div className="mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${relatedService.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <RelatedIcon className="text-2xl text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {relatedService.title}
                      </h3>

                      <ul className="space-y-2 mb-6">
                        {relatedService.description.slice(0, 3).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3 text-gray-600">
                            <CheckCircleOutlined className="text-green-500 text-sm mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-orange-500 transition-colors duration-300">
                        <span>Learn More</span>
                        <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>

                      {/* Hover Effect Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </Link>
                  );
                })}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-16">
            <div className="text-center animate-fade-in-up animate-delay-500">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact our experts to discuss your requirements and get a customized solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    Get Free Consultation
                    <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="tel:+918917297392"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <PhoneOutlined className="mr-2" />
                    Call for Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <StarFilled className="mr-2 text-orange-500" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Common Questions</span>
                <br />
                <span className="text-gradient-accent">About Our Services</span>
              </h2>
            </div>

            <FAQ
              items={[
                {
                  question: `What is the typical duration for ${service.title.toLowerCase()}?`,
                  answer: `The duration for ${service.title} varies based on project complexity. ${service.duration}. Our team will provide a detailed timeline during the initial consultation.`
                },
                {
                  question: "Do you provide warranties on your services?",
                  answer: "Yes, we provide comprehensive warranties on all our services. Hardware repairs come with warranty periods ranging from 6 months to 2 years, depending on the service type. Software solutions include support periods and bug-fix warranties."
                },
                {
                  question: "What areas do you serve?",
                  answer: "We serve clients across India with on-site support available in major cities. Remote support is available nationwide for most services. Contact us to discuss your location requirements."
                },
                {
                  question: "Do you offer emergency or rush services?",
                  answer: "Yes, we offer priority and emergency services for critical business needs. Emergency support is available 24/7 for existing clients. Rush service fees may apply for expedited work."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept various payment methods including bank transfers, credit/debit cards, UPI, and digital wallets. For larger projects, we can arrange flexible payment terms."
                }
              ]}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailClient;