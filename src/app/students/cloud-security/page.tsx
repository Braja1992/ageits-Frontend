import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  SecurityScanOutlined,
  CloudOutlined,
  LockOutlined,
  KeyOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Cloud Security Training & Certification | Real-time Labs | Ananta Gopal Enterprises',
  description: 'Master cloud security with hands-on training in AWS, Azure security, encryption, access control, and compliance. Professional cloud security certification program.',
  keywords: [
    'cloud security',
    'AWS security',
    'Azure security',
    'cloud encryption',
    'access control',
    'security compliance',
    'cloud certification',
    'cybersecurity training'
  ].join(', '),
  openGraph: {
    title: 'Cloud Security Training & Certification | Real-time Labs',
    description: 'Master cloud security with hands-on training in AWS, Azure security, encryption, access control, and compliance.',
    url: '/students/cloud-security',
    images: [
      {
        url: '/og-cloud-security.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud Security Training and Certification',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Security Training & Certification | Real-time Labs',
    description: 'Master cloud security with hands-on training in AWS, Azure security, encryption, access control, and compliance.',
    images: ['/og-cloud-security.jpg'],
  },
  alternates: {
    canonical: '/students/cloud-security',
  },
};

const securityModules = [
  {
    title: 'Cloud Security Fundamentals',
    description: 'Understanding cloud security principles, shared responsibility model, and security best practices.',
    topics: ['Cloud Security Basics', 'Shared Responsibility', 'Security Frameworks', 'Risk Assessment']
  },
  {
    title: 'Identity & Access Management',
    description: 'Master IAM, authentication, authorization, and access control in cloud environments.',
    topics: ['IAM Policies', 'Multi-Factor Authentication', 'Role-Based Access', 'Identity Federation']
  },
  {
    title: 'Data Protection & Encryption',
    description: 'Learn data encryption, key management, and secure data storage in the cloud.',
    topics: ['Data Encryption', 'Key Management', 'Secure Storage', 'Data Classification']
  },
  {
    title: 'Network Security',
    description: 'Implement secure network architectures, firewalls, and traffic protection.',
    topics: ['VPC Security', 'Security Groups', 'Network ACLs', 'DDoS Protection']
  },
  {
    title: 'Compliance & Governance',
    description: 'Understanding compliance requirements, audit trails, and security governance.',
    topics: ['Compliance Standards', 'Audit & Logging', 'Security Governance', 'Incident Response']
  }
];

export default function CloudSecurityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-6 mt-8">
                <SecurityScanOutlined className="mr-2" />
                Cloud Security
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Cloud</span>
                <br />
                <span className="text-gradient-accent">Security Mastery</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Become a cloud security expert with comprehensive training in AWS, Azure, and GCP security.
                Learn to protect cloud infrastructure, data, and applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Security Training
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#curriculum"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Modules */}
        <section id="curriculum" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Security</span>
                <span className="text-gradient-accent"> Curriculum</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive training covering all aspects of cloud security from fundamentals to advanced protection strategies.
              </p>
            </div>

            <div className="space-y-8">
              {securityModules.map((module, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg mb-6">{module.description}</p>
                    </div>
                    <div className="ml-4">
                      <SecurityScanOutlined className="text-3xl text-red-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-3">
                        <CheckCircleOutlined className="text-red-500 text-lg flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Cloud</span>
                <span className="text-gradient-accent"> Platforms</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master security across all major cloud platforms with hands-on labs and real-world scenarios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'AWS Security',
                  services: ['IAM', 'KMS', 'CloudTrail', 'GuardDuty', 'Security Hub'],
                  color: 'from-orange-500 to-orange-600'
                },
                {
                  name: 'Azure Security',
                  services: ['Azure AD', 'Key Vault', 'Security Center', 'Sentinel', 'Information Protection'],
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  name: 'GCP Security',
                  services: ['IAM', 'Cloud KMS', 'Security Command Center', 'VPC Service Controls', 'Binary Authorization'],
                  color: 'from-green-500 to-green-600'
                }
              ].map((platform, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <CloudOutlined className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{platform.name}</h3>
                  <ul className="space-y-2">
                    {platform.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-600 text-sm">{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Industry</span>
                <span className="text-gradient-accent"> Certifications</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prepare for industry-recognized certifications that validate your cloud security expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'AWS Certified Security - Specialty',
                  provider: 'Amazon Web Services',
                  level: 'Professional',
                  duration: '3-6 months preparation'
                },
                {
                  name: 'Azure Security Engineer Associate',
                  provider: 'Microsoft Azure',
                  level: 'Associate',
                  duration: '2-4 months preparation'
                },
                {
                  name: 'Google Cloud Security Professional',
                  provider: 'Google Cloud',
                  level: 'Professional',
                  duration: '3-5 months preparation'
                },
                {
                  name: 'Certified Cloud Security Professional',
                  provider: 'Cloud Security Alliance',
                  level: 'Professional',
                  duration: '4-6 months preparation'
                },
                {
                  name: 'Certified Information Systems Security Professional',
                  provider: 'ISC²',
                  level: 'Professional',
                  duration: '6-12 months preparation'
                },
                {
                  name: 'CompTIA Security+',
                  provider: 'CompTIA',
                  level: 'Foundation',
                  duration: '2-3 months preparation'
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <LockOutlined className="text-2xl text-red-600" />
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.level === 'Professional' ? 'bg-red-100 text-red-700' :
                      cert.level === 'Associate' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cert.provider}</p>
                  <p className="text-gray-500 text-sm">{cert.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Secure Your Future in Cloud Security</h2>
              <p className="text-xl mb-8 text-red-100">
                Join the growing field of cloud security with comprehensive training and certification preparation.
                Become a sought-after cloud security professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Enroll in Program
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                  Speak to Advisor
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}