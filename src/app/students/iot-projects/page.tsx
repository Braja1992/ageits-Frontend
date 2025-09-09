import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ApiOutlined,
  CloudOutlined,
  DatabaseOutlined,
  WifiOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'IoT Projects & Development Training | Real-time Labs | Ananta Gopal Enterprises',
  description: 'Master Internet of Things with hands-on IoT projects, wireless sensor networks, cloud integration, and smart device development. Professional IoT training program.',
  keywords: [
    'IoT projects',
    'internet of things',
    'wireless sensor networks',
    'MQTT protocol',
    'smart devices',
    'IoT cloud integration',
    'sensor networks',
    'IoT development training'
  ].join(', '),
  openGraph: {
    title: 'IoT Projects & Development Training | Real-time Labs',
    description: 'Master Internet of Things with hands-on IoT projects, wireless sensor networks, cloud integration, and smart device development.',
    url: '/students/iot-projects',
    images: [
      {
        url: '/og-iot.jpg',
        width: 1200,
        height: 630,
        alt: 'IoT Projects and Development Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IoT Projects & Development Training | Real-time Labs',
    description: 'Master Internet of Things with hands-on IoT projects, wireless sensor networks, cloud integration, and smart device development.',
    images: ['/og-iot.jpg'],
  },
  alternates: {
    canonical: '/students/iot-projects',
  },
};

const projects = [
  {
    title: 'Smart Agriculture Monitoring System',
    description: 'Build an IoT system for monitoring soil moisture, temperature, and humidity for precision farming.',
    technologies: ['ESP32', 'Soil Sensors', 'LoRa', 'Cloud Platform'],
    duration: '6 weeks',
    level: 'Intermediate'
  },
  {
    title: 'Industrial Predictive Maintenance',
    description: 'Create IoT sensors for equipment monitoring and predictive maintenance using vibration analysis.',
    technologies: ['Raspberry Pi', 'Vibration Sensors', 'Edge Computing', 'ML Algorithms'],
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    title: 'Smart City Infrastructure',
    description: 'Develop IoT solutions for smart parking, waste management, and environmental monitoring.',
    technologies: ['Arduino', 'Ultrasonic Sensors', 'GPS', 'Mobile App'],
    duration: '10 weeks',
    level: 'Advanced'
  },
  {
    title: 'Healthcare IoT Device',
    description: 'Build wearable health monitoring devices with real-time data transmission and analysis.',
    technologies: ['ESP8266', 'Bio-sensors', 'Bluetooth LE', 'Health Cloud'],
    duration: '7 weeks',
    level: 'Intermediate'
  }
];

export default function IoTProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 mt-8">
                <ApiOutlined className="mr-2" />
                IoT Projects
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Internet of</span>
                <br />
                <span className="text-gradient-accent">Things Projects</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build smart IoT solutions with wireless communication, cloud connectivity,
                and data analytics. Learn to create connected devices and IoT ecosystems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start IoT Journey
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Explore Projects
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
                <span className="text-gradient-primary">IoT</span>
                <span className="text-gradient-accent"> Project Portfolio</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Work on cutting-edge IoT projects that solve real-world problems and demonstrate
                your ability to build connected systems.
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
                      <ApiOutlined className="text-3xl text-blue-600" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
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

        {/* IoT Architecture */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">IoT</span>
                <span className="text-gradient-accent"> Architecture</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn the complete IoT ecosystem from edge devices to cloud platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Edge Devices',
                  description: 'Microcontrollers, sensors, and embedded systems that collect data',
                  technologies: ['Arduino', 'ESP32', 'Raspberry Pi', 'Sensors']
                },
                {
                  title: 'Communication',
                  description: 'Wireless protocols and network connectivity for data transmission',
                  technologies: ['WiFi', 'Bluetooth', 'LoRa', 'MQTT', 'REST APIs']
                },
                {
                  title: 'Cloud Platform',
                  description: 'Data storage, processing, analytics, and visualization platforms',
                  technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud', 'Firebase']
                }
              ].map((layer, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{layer.title}</h3>
                  <p className="text-gray-600 mb-6">{layer.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {layer.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Skills &</span>
                <span className="text-gradient-accent"> Tools</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: WifiOutlined,
                  title: 'Wireless Protocols',
                  skills: ['WiFi', 'Bluetooth LE', 'LoRaWAN', 'Zigbee', 'MQTT']
                },
                {
                  icon: CloudOutlined,
                  title: 'Cloud Platforms',
                  skills: ['AWS IoT Core', 'Azure IoT Hub', 'Google IoT', 'Firebase']
                },
                {
                  icon: DatabaseOutlined,
                  title: 'Data Management',
                  skills: ['Time Series DB', 'InfluxDB', 'MongoDB', 'Data Analytics']
                },
                {
                  icon: ApiOutlined,
                  title: 'IoT Security',
                  skills: ['Device Authentication', 'Data Encryption', 'Secure Boot', 'OTA Updates']
                }
              ].map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Join the IoT Revolution</h2>
              <p className="text-xl mb-8 text-blue-100">
                Master the technologies that are shaping the future of connected devices
                and smart systems. Build your career in IoT development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Enroll in IoT Program
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
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