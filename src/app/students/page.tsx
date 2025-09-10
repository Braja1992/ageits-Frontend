import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  RocketOutlined,
  CloudOutlined,
  WifiOutlined,
  CodeOutlined,
  MobileOutlined,
  SecurityScanOutlined,
  ApiOutlined,
  ExperimentOutlined,
  ArrowRightOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Student Projects & Real-time Labs | AGEITS - Ananta Gopal Enterprises',
  description: 'Hands-on student projects and real-time lab setups for Embedded Systems, IoT, Cloud Security, Hardware & Networking, Web & Mobile Development. Professional training and project guidance by AGEITS.',
  keywords: [
    'student projects',
    'real-time labs',
    'embedded systems',
    'IoT projects',
    'cloud security',
    'web development',
    'mobile development',
    'hardware networking',
    'student training',
    'project guidance',
    'Arduino projects',
    'Raspberry Pi',
    'wireless sensor networks',
    'MQTT protocols',
    'cloud platform integration',
    'data analytics visualization',
    'smart home automation',
    'encryption data protection',
    'identity access management',
    'AWS Azure GCP setup',
    'infrastructure as code',
    'container orchestration',
    'network infrastructure',
    'server administration',
    'React Next.js Vue.js',
    'Node.js Python PHP',
    'API development',
    'React Native Flutter',
    'iOS Android development',
    'AGEITS',
    'Ananta Gopal Enterprises'
  ].join(', '),
  openGraph: {
    title: 'Student Projects & Real-time Labs | AGEITS - Ananta Gopal Enterprises',
    description: 'Hands-on student projects and real-time lab setups for Embedded Systems, IoT, Cloud Security, Hardware & Networking, Web & Mobile Development.',
    url: '/students',
    images: [
      {
        url: '/og-students.jpg',
        width: 1200,
        height: 630,
        alt: 'Student Projects and Real-time Labs - AGEITS',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Projects & Real-time Labs | AGEITS - Ananta Gopal Enterprises',
    description: 'Hands-on student projects and real-time lab setups for Embedded Systems, IoT, Cloud Security, Hardware & Networking, Web & Mobile Development.',
    images: ['/og-students.jpg'],
  },
  alternates: {
    canonical: '/students',
  },
};

const studentTechnologies = [
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    description: 'Learn microcontroller programming, sensor integration, and real-time embedded applications with hands-on projects.',
    icon: RocketOutlined,
    gradient: 'from-green-500 to-green-600',
    features: [
      'Arduino & Raspberry Pi Projects',
      'Sensor Integration & Data Acquisition',
      'Real-time Operating Systems',
      'Power Management & Optimization',
      'IoT Device Development'
    ],
    duration: '8-12 weeks',
    level: 'Intermediate to Advanced'
  },
  {
    id: 'iot-projects',
    title: 'IoT Projects',
    description: 'Build smart IoT solutions with wireless communication, cloud connectivity, and data analytics.',
    icon: ApiOutlined,
    gradient: 'from-blue-500 to-blue-600',
    features: [
      'Wireless Sensor Networks',
      'MQTT & IoT Protocols',
      'Cloud Platform Integration',
      'Data Analytics & Visualization',
      'Smart Home Automation'
    ],
    duration: '10-14 weeks',
    level: 'Intermediate'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    description: 'Master cloud security principles, encryption, access control, and secure cloud architecture design.',
    icon: SecurityScanOutlined,
    gradient: 'from-red-500 to-red-600',
    features: [
      'Cloud Security Fundamentals',
      'Encryption & Data Protection',
      'Identity & Access Management',
      'Security Monitoring & Compliance',
      'Secure Cloud Architecture'
    ],
    duration: '12-16 weeks',
    level: 'Advanced'
  },
  {
    id: 'cloud-setup',
    title: 'Cloud Setup',
    description: 'Learn cloud infrastructure setup, deployment automation, and scalable cloud solutions.',
    icon: CloudOutlined,
    gradient: 'from-purple-500 to-purple-600',
    features: [
      'AWS/Azure/GCP Setup',
      'Infrastructure as Code',
      'Container Orchestration',
      'Auto-scaling & Load Balancing',
      'Cloud Migration Strategies'
    ],
    duration: '10-14 weeks',
    level: 'Intermediate to Advanced'
  },
  {
    id: 'hardware-networking',
    title: 'Hardware & Networking',
    description: 'Comprehensive training in computer hardware, network infrastructure, and system administration.',
    icon: WifiOutlined,
    gradient: 'from-orange-500 to-orange-600',
    features: [
      'Network Infrastructure Setup',
      'Hardware Troubleshooting',
      'Server Administration',
      'Network Security',
      'System Optimization'
    ],
    duration: '12-16 weeks',
    level: 'Beginner to Advanced'
  },
  {
    id: 'web-development',
    title: 'Web Application Development',
    description: 'Full-stack web development with modern frameworks, databases, and deployment strategies.',
    icon: CodeOutlined,
    gradient: 'from-cyan-500 to-cyan-600',
    features: [
      'Frontend: React, Next.js, Vue.js',
      'Backend: Node.js, Python, PHP',
      'Database Design & Management',
      'API Development & Integration',
      'Deployment & DevOps'
    ],
    duration: '14-18 weeks',
    level: 'Beginner to Advanced'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Application Development',
    description: 'Cross-platform mobile app development with React Native, Flutter, and native technologies.',
    icon: MobileOutlined,
    gradient: 'from-pink-500 to-pink-600',
    features: [
      'React Native & Flutter',
      'iOS & Android Development',
      'App Store Deployment',
      'Mobile UI/UX Design',
      'Backend Integration'
    ],
    duration: '12-16 weeks',
    level: 'Intermediate'
  }
];

export default function StudentsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-32 right-32 w-20 h-20 bg-orange-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-32 left-32 w-28 h-28 bg-blue-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto animate-fade-in-up">

              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 mt-8 animate-scale-in">
                <ExperimentOutlined className="mr-2" />
                Student Projects & Labs
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Real-time</span>
                <br />
                <span className="text-gradient-accent">Project Labs</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hands-on learning experience with industry-relevant projects. Master cutting-edge technologies
                through practical implementation and real-world problem-solving.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Enroll Now
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#technologies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
                >
                  Explore Technologies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section id="technologies" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Technology</span>
                <span className="text-gradient-accent"> Tracks</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of technology tracks designed to give you
                practical skills and industry-ready expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentTechnologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Link
                    key={tech.id}
                    href={`/students/${tech.id}`}
                    className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 transform hover:-translate-y-2 animate-fade-in-left animate-delay-${(index + 1) * 100}`}
                  >
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {tech.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tech.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold text-gray-800">{tech.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Level:</span>
                        <span className="font-semibold text-gray-800">{tech.level}</span>
                      </div>
                    </div>

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
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Why Choose</span>
                <span className="text-gradient-accent"> Our Program</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: StarFilled,
                  title: 'Industry Experts',
                  description: 'Learn from certified professionals with years of industry experience'
                },
                {
                  icon: ExperimentOutlined,
                  title: 'Hands-on Labs',
                  description: 'Real-time project labs with industry-standard equipment and software'
                },
                {
                  icon: RocketOutlined,
                  title: 'Career Support',
                  description: 'Resume building, interview preparation, and job placement assistance'
                },
                {
                  icon: SecurityScanOutlined,
                  title: 'Latest Technologies',
                  description: 'Stay updated with cutting-edge technologies and industry trends'
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className={`text-center group animate-fade-in-up animate-delay-${(index + 1) * 200}`}>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="text-3xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of students who have transformed their careers with our comprehensive training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Get Started Today
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
                >
                  Call for Details
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