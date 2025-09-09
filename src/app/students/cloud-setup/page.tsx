import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  CloudOutlined,
  DatabaseOutlined,
  GlobalOutlined,
  SettingOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure Setup & Management | AWS, Azure, GCP Training | Ananta Gopal Enterprises',
  description: 'Master cloud infrastructure setup, deployment automation, and scalable cloud solutions. Professional training in AWS, Azure, and Google Cloud Platform with hands-on labs.',
  keywords: [
    'cloud setup',
    'AWS training',
    'Azure infrastructure',
    'GCP setup',
    'cloud deployment',
    'infrastructure as code',
    'DevOps training',
    'cloud management'
  ].join(', '),
  openGraph: {
    title: 'Cloud Infrastructure Setup & Management | AWS, Azure, GCP Training',
    description: 'Master cloud infrastructure setup, deployment automation, and scalable cloud solutions.',
    url: '/students/cloud-setup',
    images: [
      {
        url: '/og-cloud-setup.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud Infrastructure Setup and Management Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Infrastructure Setup & Management | AWS, Azure, GCP',
    description: 'Master cloud infrastructure setup, deployment automation, and scalable cloud solutions.',
    images: ['/og-cloud-setup.jpg'],
  },
  alternates: {
    canonical: '/students/cloud-setup',
  },
};

const cloudPlatforms = [
  {
    name: 'Amazon Web Services (AWS)',
    shortName: 'AWS',
    color: 'from-orange-500 to-orange-600',
    services: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation', 'ECS'],
    certifications: ['AWS Solutions Architect', 'AWS Developer', 'AWS SysOps Administrator']
  },
  {
    name: 'Microsoft Azure',
    shortName: 'Azure',
    color: 'from-blue-500 to-blue-600',
    services: ['VMs', 'Blob Storage', 'SQL Database', 'Functions', 'ARM Templates', 'AKS'],
    certifications: ['Azure Solutions Architect', 'Azure Developer', 'Azure Administrator']
  },
  {
    name: 'Google Cloud Platform',
    shortName: 'GCP',
    color: 'from-green-500 to-green-600',
    services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'Deployment Manager', 'GKE'],
    certifications: ['Google Cloud Architect', 'Google Cloud Developer', 'Google Cloud DevOps']
  }
];

const infrastructureTopics = [
  {
    category: 'Infrastructure as Code',
    topics: [
      'CloudFormation (AWS)',
      'ARM Templates (Azure)',
      'Deployment Manager (GCP)',
      'Terraform',
      'Ansible'
    ]
  },
  {
    category: 'Container Orchestration',
    topics: [
      'Amazon ECS/EKS',
      'Azure Kubernetes Service',
      'Google Kubernetes Engine',
      'Docker Swarm',
      'Container Security'
    ]
  },
  {
    category: 'DevOps & CI/CD',
    topics: [
      'AWS CodePipeline',
      'Azure DevOps',
      'Google Cloud Build',
      'Jenkins',
      'GitLab CI/CD'
    ]
  },
  {
    category: 'Monitoring & Management',
    topics: [
      'CloudWatch (AWS)',
      'Azure Monitor',
      'Cloud Monitoring (GCP)',
      'Prometheus',
      'Grafana'
    ]
  }
];

export default function CloudSetupPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6 mt-8">
                <CloudOutlined className="mr-2" />
                Cloud Infrastructure
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Cloud</span>
                <br />
                <span className="text-gradient-accent">Infrastructure Setup</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master cloud infrastructure deployment, automation, and management across AWS, Azure, and GCP.
                Learn to build scalable, secure, and cost-effective cloud solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Cloud Training
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#platforms"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Explore Platforms
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section id="platforms" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Cloud</span>
                <span className="text-gradient-accent"> Platforms</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the three major cloud platforms used by enterprises worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <CloudOutlined className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{platform.name}</h3>
                    <p className="text-purple-600 font-semibold">{platform.shortName}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Core Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Certifications:</h4>
                    <ul className="space-y-2">
                      {platform.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                          <CheckCircleOutlined className="text-purple-500 text-xs mt-1 flex-shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Topics */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Infrastructure</span>
                <span className="text-gradient-accent"> Topics</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage of cloud infrastructure concepts and tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureTopics.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-3">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-3">
                        <CheckCircleOutlined className="text-purple-500 text-lg flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hands-on Labs */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Hands-on</span>
                <span className="text-gradient-accent"> Labs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Practical exercises and real-world scenarios to master cloud infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Infrastructure Deployment',
                  description: 'Deploy complete infrastructure using IaC tools',
                  duration: '4 hours',
                  difficulty: 'Intermediate'
                },
                {
                  title: 'Auto-scaling Setup',
                  description: 'Configure auto-scaling groups and load balancers',
                  duration: '3 hours',
                  difficulty: 'Advanced'
                },
                {
                  title: 'Multi-cloud Architecture',
                  description: 'Design and implement multi-cloud solutions',
                  duration: '6 hours',
                  difficulty: 'Advanced'
                },
                {
                  title: 'Container Orchestration',
                  description: 'Deploy and manage containerized applications',
                  duration: '5 hours',
                  difficulty: 'Intermediate'
                },
                {
                  title: 'CI/CD Pipeline',
                  description: 'Build complete DevOps pipelines',
                  duration: '4 hours',
                  difficulty: 'Intermediate'
                },
                {
                  title: 'Security Implementation',
                  description: 'Implement security best practices in cloud',
                  duration: '3 hours',
                  difficulty: 'Advanced'
                }
              ].map((lab, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <SettingOutlined className="text-2xl text-purple-600" />
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      lab.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                      lab.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {lab.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{lab.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lab.description}</p>
                  <p className="text-purple-600 font-semibold text-sm">{lab.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Path */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Cloud Career Opportunities</h2>
              <p className="text-xl mb-8 text-purple-100">
                Cloud infrastructure skills are in high demand. Join the growing field of cloud engineering
                with comprehensive training and certification preparation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    role: 'Cloud Architect',
                    salary: '$150K - $200K/year',
                    description: 'Design scalable cloud solutions and infrastructure'
                  },
                  {
                    role: 'DevOps Engineer',
                    salary: '$120K - $160K/year',
                    description: 'Automate deployment and manage cloud infrastructure'
                  },
                  {
                    role: 'Site Reliability Engineer',
                    salary: '$130K - $180K/year',
                    description: 'Ensure system reliability and performance'
                  }
                ].map((career, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{career.role}</h3>
                    <p className="text-purple-200 font-semibold mb-3">{career.salary}</p>
                    <p className="text-purple-100 text-sm">{career.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Cloud Career
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Schedule Consultation
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