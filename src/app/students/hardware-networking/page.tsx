import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  WifiOutlined,
  SettingOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Hardware & Networking Training | Computer Networks & Infrastructure | Ananta Gopal Enterprises',
  description: 'Master computer hardware, networking infrastructure, and system administration. Professional training in network setup, hardware troubleshooting, and IT infrastructure management.',
  keywords: [
    'hardware networking',
    'computer networks',
    'network infrastructure',
    'system administration',
    'hardware troubleshooting',
    'IT infrastructure',
    'network security',
    'server administration'
  ].join(', '),
  openGraph: {
    title: 'Hardware & Networking Training | Computer Networks & Infrastructure',
    description: 'Master computer hardware, networking infrastructure, and system administration.',
    url: '/students/hardware-networking',
    images: [
      {
        url: '/og-hardware-networking.jpg',
        width: 1200,
        height: 630,
        alt: 'Hardware and Networking Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardware & Networking Training | Computer Networks',
    description: 'Master computer hardware, networking infrastructure, and system administration.',
    images: ['/og-hardware-networking.jpg'],
  },
  alternates: {
    canonical: '/students/hardware-networking',
  },
};

const networkTopics = [
  {
    category: 'Network Fundamentals',
    topics: [
      'OSI & TCP/IP Models',
      'Network Topologies',
      'IP Addressing & Subnetting',
      'Network Protocols',
      'Network Devices (Routers, Switches, Firewalls)'
    ]
  },
  {
    category: 'Hardware Components',
    topics: [
      'Computer Hardware Architecture',
      'Motherboards & Processors',
      'Memory & Storage Systems',
      'Power Supply & Cooling',
      'Peripheral Devices'
    ]
  },
  {
    category: 'Network Infrastructure',
    topics: [
      'LAN/WAN Setup',
      'Wireless Networks (WiFi)',
      'Network Cabling',
      'Network Security',
      'VPN & Remote Access'
    ]
  },
  {
    category: 'System Administration',
    topics: [
      'Operating Systems (Windows, Linux)',
      'Server Management',
      'Active Directory',
      'Backup & Recovery',
      'Performance Monitoring'
    ]
  }
];

const certifications = [
  {
    name: 'CompTIA A+',
    description: 'Hardware and software troubleshooting certification',
    level: 'Foundation',
    duration: '2-3 months'
  },
  {
    name: 'CompTIA Network+',
    description: 'Network infrastructure and troubleshooting',
    level: 'Intermediate',
    duration: '2-4 months'
  },
  {
    name: 'Cisco CCNA',
    description: 'Cisco networking and infrastructure',
    level: 'Intermediate',
    duration: '3-6 months'
  },
  {
    name: 'Microsoft MCSA',
    description: 'Windows Server administration',
    level: 'Intermediate',
    duration: '4-6 months'
  },
  {
    name: 'Red Hat RHCSA',
    description: 'Linux system administration',
    level: 'Intermediate',
    duration: '3-5 months'
  },
  {
    name: 'VMware VCP',
    description: 'Virtualization and cloud infrastructure',
    level: 'Advanced',
    duration: '4-6 months'
  }
];

const practicalLabs = [
  {
    title: 'Network Infrastructure Setup',
    description: 'Design and implement complete network infrastructure',
    skills: ['Network Design', 'Device Configuration', 'Cable Management', 'Testing']
  },
  {
    title: 'Hardware Troubleshooting',
    description: 'Diagnose and repair computer hardware issues',
    skills: ['Component Testing', 'Fault Diagnosis', 'Repair Techniques', 'Preventive Maintenance']
  },
  {
    title: 'Server Administration',
    description: 'Manage and maintain server infrastructure',
    skills: ['Server Setup', 'User Management', 'Security Configuration', 'Performance Tuning']
  },
  {
    title: 'Network Security Implementation',
    description: 'Implement security measures for network protection',
    skills: ['Firewall Configuration', 'Access Control', 'Intrusion Detection', 'Security Auditing']
  }
];

export default function HardwareNetworkingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6 mt-8">
                <WifiOutlined className="mr-2" />
                Hardware & Networking
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Hardware &</span>
                <br />
                <span className="text-gradient-accent">Networking</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master computer hardware, networking infrastructure, and system administration.
                Learn to design, implement, and maintain IT infrastructure systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start IT Training
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#curriculum"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Network Topics */}
        <section id="curriculum" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Course</span>
                <span className="text-gradient-accent"> Curriculum</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive training covering all aspects of hardware and networking technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {networkTopics.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-3">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start space-x-3">
                        <CheckCircleOutlined className="text-orange-500 text-lg mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Industry</span>
                <span className="text-gradient-accent"> Certifications</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prepare for globally recognized certifications that validate your IT infrastructure skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <SettingOutlined className="text-2xl text-orange-600" />
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                      cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  <p className="text-orange-600 font-semibold text-sm">{cert.duration} preparation</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Labs */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Hands-on</span>
                <span className="text-gradient-accent"> Labs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world practical exercises to master hardware and networking skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practicalLabs.map((lab, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{lab.title}</h3>
                      <p className="text-gray-600 mb-4">{lab.description}</p>
                    </div>
                    <div className="ml-4">
                      <WifiOutlined className="text-3xl text-orange-600" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Career</span>
                <span className="text-gradient-accent"> Opportunities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hardware and networking skills are essential in every organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  role: 'Network Administrator',
                  salary: '$70K - $100K/year',
                  description: 'Manage and maintain network infrastructure'
                },
                {
                  role: 'System Administrator',
                  salary: '$75K - $110K/year',
                  description: 'Manage servers and IT systems'
                },
                {
                  role: 'IT Support Specialist',
                  salary: '$50K - $80K/year',
                  description: 'Provide technical support and troubleshooting'
                },
                {
                  role: 'Infrastructure Engineer',
                  salary: '$90K - $130K/year',
                  description: 'Design and implement IT infrastructure'
                }
              ].map((career, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <DatabaseOutlined className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{career.role}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{career.salary}</p>
                  <p className="text-gray-600 text-sm">{career.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Build Your IT Infrastructure Career</h2>
              <p className="text-xl mb-8 text-orange-100">
                Hardware and networking form the foundation of IT infrastructure.
                Master these essential skills and become an invaluable IT professional.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: StarFilled,
                    title: 'Expert Faculty',
                    description: 'Learn from certified IT professionals with industry experience'
                  },
                  {
                    icon: SettingOutlined,
                    title: 'Modern Lab Setup',
                    description: 'Access to latest hardware and networking equipment'
                  },
                  {
                    icon: GlobalOutlined,
                    title: 'Industry Recognition',
                    description: 'Skills recognized by leading IT companies worldwide'
                  }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-orange-100">{feature.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Enroll Now
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
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