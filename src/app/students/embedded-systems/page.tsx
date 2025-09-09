import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  RocketOutlined,
  ExperimentOutlined,
  CodeOutlined,
  DatabaseOutlined,
  ApiOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Embedded Systems Projects & Training | Real-time Labs | Ananta Gopal Enterprises',
  description: 'Master embedded systems with hands-on projects using Arduino, Raspberry Pi, sensors, and real-time applications. Professional embedded development training with industry experts.',
  keywords: [
    'embedded systems',
    'arduino projects',
    'raspberry pi',
    'microcontroller programming',
    'sensor integration',
    'real-time embedded systems',
    'IoT development',
    'embedded training'
  ].join(', '),
  openGraph: {
    title: 'Embedded Systems Projects & Training | Real-time Labs',
    description: 'Master embedded systems with hands-on projects using Arduino, Raspberry Pi, sensors, and real-time applications.',
    url: '/students/embedded-systems',
    images: [
      {
        url: '/og-embedded.jpg',
        width: 1200,
        height: 630,
        alt: 'Embedded Systems Projects and Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embedded Systems Projects & Training | Real-time Labs',
    description: 'Master embedded systems with hands-on projects using Arduino, Raspberry Pi, sensors, and real-time applications.',
    images: ['/og-embedded.jpg'],
  },
  alternates: {
    canonical: '/students/embedded-systems',
  },
};

const projects = [
  {
    title: 'Smart Home Automation System',
    description: 'Build a complete home automation system with sensors, actuators, and wireless communication.',
    technologies: ['Arduino', 'ESP8266', 'Sensors', 'MQTT'],
    duration: '4 weeks',
    level: 'Intermediate'
  },
  {
    title: 'Industrial IoT Monitoring Device',
    description: 'Create an industrial monitoring device for temperature, pressure, and vibration sensing.',
    technologies: ['Raspberry Pi', 'Industrial Sensors', 'Cloud Integration'],
    duration: '6 weeks',
    level: 'Advanced'
  },
  {
    title: 'Autonomous Robot Navigation',
    description: 'Develop an autonomous robot with obstacle avoidance and path planning capabilities.',
    technologies: ['Arduino Mega', 'Ultrasonic Sensors', 'Motor Control'],
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    title: 'Weather Station with Data Logging',
    description: 'Build a comprehensive weather monitoring station with data storage and visualization.',
    technologies: ['Raspberry Pi', 'Weather Sensors', 'Database', 'Web Interface'],
    duration: '5 weeks',
    level: 'Intermediate'
  }
];

const curriculum = [
  {
    week: 'Week 1-2',
    title: 'Embedded Fundamentals',
    topics: [
      'Microcontroller Architecture',
      'Digital & Analog I/O',
      'Basic Programming Concepts',
      'Circuit Design Basics'
    ]
  },
  {
    week: 'Week 3-4',
    title: 'Sensor Integration',
    topics: [
      'Analog Sensors (Temperature, Light)',
      'Digital Sensors (PIR, Ultrasonic)',
      'ADC & Signal Processing',
      'Sensor Calibration'
    ]
  },
  {
    week: 'Week 5-6',
    title: 'Communication Protocols',
    topics: [
      'UART, SPI, I2C Communication',
      'Wireless Communication (Bluetooth, WiFi)',
      'MQTT Protocol for IoT',
      'Data Serialization'
    ]
  },
  {
    week: 'Week 7-8',
    title: 'Real-time Systems',
    topics: [
      'RTOS Concepts',
      'Interrupt Handling',
      'Timer & PWM Control',
      'Power Management'
    ]
  }
];

export default function EmbeddedSystemsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6 mt-8">
                <RocketOutlined className="mr-2" />
                Embedded Systems
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Embedded</span>
                <br />
                <span className="text-gradient-accent">Systems Projects</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master microcontroller programming and embedded development with hands-on projects.
                Learn Arduino, Raspberry Pi, sensor integration, and real-time applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Enroll Now
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Featured</span>
                <span className="text-gradient-accent"> Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Work on industry-relevant embedded systems projects that will enhance your portfolio
                and prepare you for real-world challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                    <div className="ml-4">
                      <ExperimentOutlined className="text-3xl text-green-600" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duration: {project.duration}</span>
                    <span>Level: {project.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Course</span>
                <span className="text-gradient-accent"> Curriculum</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Structured learning path designed to take you from basics to advanced embedded systems development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curriculum.map((module, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{module.week}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-3">
                        <CheckCircleOutlined className="text-green-500 text-lg mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills You'll Learn */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Skills You'll</span>
                <span className="text-gradient-accent"> Master</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: CodeOutlined,
                  title: 'Programming',
                  skills: ['C/C++', 'Python', 'Embedded C', 'Assembly']
                },
                {
                  icon: ApiOutlined,
                  title: 'Hardware',
                  skills: ['Circuit Design', 'PCB Layout', 'Component Selection', 'Prototyping']
                },
                {
                  icon: DatabaseOutlined,
                  title: 'Communication',
                  skills: ['UART/SPI/I2C', 'Wireless Protocols', 'MQTT', 'REST APIs']
                },
                {
                  icon: RocketOutlined,
                  title: 'Real-time Systems',
                  skills: ['RTOS', 'Interrupt Handling', 'Task Scheduling', 'Power Management']
                }
              ].map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.skills.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Future in Embedded Systems?</h2>
              <p className="text-xl mb-8 text-green-100">
                Join our comprehensive embedded systems training program and gain the skills
                needed for a successful career in IoT and embedded development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Learning Today
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300"
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