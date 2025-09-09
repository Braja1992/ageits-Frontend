import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  MobileOutlined,
  AppleOutlined,
  AndroidOutlined,
  CodeOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Mobile App Development Training | iOS & Android | Real-time Projects | Ananta Gopal Enterprises',
  description: 'Master mobile app development with React Native, Flutter, iOS, and Android. Build cross-platform mobile applications with professional training and real-world projects.',
  keywords: [
    'mobile app development',
    'React Native training',
    'Flutter development',
    'iOS development',
    'Android development',
    'cross-platform apps',
    'mobile applications'
  ].join(', '),
  openGraph: {
    title: 'Mobile App Development Training | iOS & Android | Real-time Projects',
    description: 'Master mobile app development with React Native, Flutter, iOS, and Android.',
    url: '/students/mobile-development',
    images: [
      {
        url: '/og-mobile-dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Training | iOS & Android',
    description: 'Master mobile app development with React Native, Flutter, iOS, and Android.',
    images: ['/og-mobile-dev.jpg'],
  },
  alternates: {
    canonical: '/students/mobile-development',
  },
};

const platforms = [
  {
    name: 'React Native',
    description: 'Cross-platform development with JavaScript and React',
    icon: '⚛️',
    features: ['Single Codebase', 'Native Performance', 'Hot Reload', 'Large Community'],
    projects: ['E-commerce App', 'Social Media App', 'Fitness Tracker']
  },
  {
    name: 'Flutter',
    description: 'Google\'s UI toolkit for building beautiful native apps',
    icon: '🎯',
    features: ['Dart Language', 'Rich Widgets', 'Fast Development', 'Material Design'],
    projects: ['Productivity App', 'News Reader', 'Travel Companion']
  },
  {
    name: 'Native iOS',
    description: 'Swift and Objective-C development for Apple devices',
    icon: '🍎',
    features: ['Swift Programming', 'Xcode IDE', 'App Store Optimization', 'iOS Design Guidelines'],
    projects: ['iOS Games', 'Business Apps', 'Health & Fitness']
  },
  {
    name: 'Native Android',
    description: 'Kotlin and Java development for Android devices',
    icon: '🤖',
    features: ['Kotlin Programming', 'Android Studio', 'Material Design', 'Google Play Store'],
    projects: ['Android Apps', 'IoT Controllers', 'Educational Apps']
  }
];

const projects = [
  {
    title: 'E-Commerce Mobile App',
    description: 'Complete shopping app with payment integration, product catalog, and user accounts.',
    tech: ['React Native', 'Stripe', 'Firebase', 'Redux'],
    platforms: ['iOS', 'Android'],
    duration: '8 weeks'
  },
  {
    title: 'Social Media Platform',
    description: 'Feature-rich social app with real-time messaging, stories, and content sharing.',
    tech: ['Flutter', 'Node.js', 'Socket.io', 'MongoDB'],
    platforms: ['iOS', 'Android'],
    duration: '10 weeks'
  },
  {
    title: 'Health & Fitness Tracker',
    description: 'Personal health app with workout tracking, nutrition logging, and progress analytics.',
    tech: ['React Native', 'HealthKit', 'Charts', 'SQLite'],
    platforms: ['iOS', 'Android'],
    duration: '6 weeks'
  },
  {
    title: 'IoT Home Automation',
    description: 'Smart home control app for managing connected devices and automation rules.',
    tech: ['Flutter', 'MQTT', 'Bluetooth', 'REST APIs'],
    platforms: ['iOS', 'Android'],
    duration: '7 weeks'
  }
];

export default function MobileDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-6 mt-8">
                <MobileOutlined className="mr-2" />
                Mobile Development
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Mobile App</span>
                <br />
                <span className="text-gradient-accent">Development</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build stunning mobile applications for iOS and Android using modern frameworks.
                Master React Native, Flutter, and native development with real-world projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Mobile Development
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#platforms"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-600 text-pink-600 font-semibold rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                  Explore Platforms
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Development Platforms */}
        <section id="platforms" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Development</span>
                <span className="text-gradient-accent"> Platforms</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your preferred platform and master the technologies used by top mobile apps worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{platform.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{platform.name}</h3>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircleOutlined className="text-pink-500 text-sm" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Sample Projects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.projects.map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Featured</span>
                <span className="text-gradient-accent"> Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build impressive mobile applications that showcase your development skills and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                    <div className="ml-4">
                      <MobileOutlined className="text-3xl text-pink-600" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.platforms.map((platform, platformIndex) => (
                        <span
                          key={platformIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    Duration: {project.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Store Deployment */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">App Store</span>
                <span className="text-gradient-accent"> Deployment</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn the complete process of publishing your mobile apps to App Store and Google Play.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  store: 'Apple App Store',
                  icon: <AppleOutlined className="text-3xl text-black" />,
                  requirements: [
                    'Apple Developer Account ($99/year)',
                    'App Store Guidelines Compliance',
                    'TestFlight Beta Testing',
                    'App Review Process'
                  ],
                  process: ['Developer Account Setup', 'App Preparation', 'Beta Testing', 'Submission & Review']
                },
                {
                  store: 'Google Play Store',
                  icon: <AndroidOutlined className="text-3xl text-green-600" />,
                  requirements: [
                    'Google Play Developer Account ($25 one-time)',
                    'Google Play Policies',
                    'Internal Testing Track',
                    'Production Release'
                  ],
                  process: ['Developer Account Setup', 'App Signing', 'Internal Testing', 'Production Release']
                }
              ].map((store, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    {store.icon}
                    <h3 className="text-2xl font-bold text-gray-800 ml-4">{store.store}</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {store.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <CheckCircleOutlined className="text-pink-500 text-sm mt-1" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Deployment Process:</h4>
                    <div className="flex flex-wrap gap-2">
                      {store.process.map((step, stepIndex) => (
                        <span
                          key={stepIndex}
                          className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full"
                        >
                          {stepIndex + 1}. {step}
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
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Launch Your Mobile Development Career</h2>
              <p className="text-xl mb-8 text-pink-100">
                Mobile app development is one of the most in-demand skills in the tech industry.
                Join thousands of successful developers who started their journey with us.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: 'High Demand',
                    description: 'Mobile apps are used by billions of people worldwide'
                  },
                  {
                    title: 'Lucrative Salaries',
                    description: 'Mobile developers earn competitive salaries globally'
                  },
                  {
                    title: 'Creative Freedom',
                    description: 'Build apps that solve real problems and reach millions'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-pink-100">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Enroll in Mobile Program
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300"
                >
                  Get Program Details
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