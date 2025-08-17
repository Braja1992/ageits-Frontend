'use client';

import React from 'react';
import { 
  RocketOutlined, 
  EyeOutlined, 
  HeartOutlined,
  StarFilled,
  CheckCircleOutlined,
  TrophyOutlined,
  SafetyOutlined,
  TeamOutlined
} from '@ant-design/icons';

const Mission: React.FC = () => {
  const values = [
    {
      icon: RocketOutlined,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive your business forward.',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: TrophyOutlined,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in every project, exceeding expectations at every turn.',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: SafetyOutlined,
      title: 'Reliability',
      description: 'Our solutions are built to last, providing stable and secure foundations for your business operations.',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: TeamOutlined,
      title: 'Partnership',
      description: 'We believe in building long-term relationships, working closely with our clients as trusted partners.',
      gradient: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', color: 'text-blue-600' },
    { number: '99%', label: 'Client Satisfaction', color: 'text-orange-600' },
    { number: '24/7', label: 'Support Available', color: 'text-green-600' },
    { number: '5+', label: 'Years Experience', color: 'text-yellow-600' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] repeat"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <StarFilled className="mr-2 text-orange-500" />
            Our Mission & Vision
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">Driving</span>
            <br />
            <span className="text-gradient-accent">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to transforming businesses through innovative technology solutions that create lasting value and drive sustainable growth.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 animate-fade-in-up animate-delay-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <RocketOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, enhance efficiency, and create lasting value. We strive to be the trusted partner that transforms challenges into opportunities.
            </p>
            <ul className="space-y-3">
              {[
                'Deliver innovative solutions',
                'Exceed client expectations',
                'Foster long-term partnerships',
                'Drive digital transformation'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircleOutlined className="text-green-500 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 animate-fade-in-up animate-delay-200">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <EyeOutlined className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              To be the leading technology partner that shapes the future of business through innovation, excellence, and unwavering commitment to our clients' success in the digital age.
            </p>
            <ul className="space-y-3">
              {[
                'Lead industry innovation',
                'Shape digital future',
                'Global technology leadership',
                'Sustainable business growth'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircleOutlined className="text-green-500 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16 animate-fade-in-up animate-delay-300">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 transform hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 ${value.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="relative animate-fade-in-up animate-delay-400">
          <div className="bg-gradient-to-r from-blue-600 via-orange-500 to-green-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Achievements</h3>
                <p className="text-gray-600">Numbers that reflect our commitment to excellence</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className={achievement.color}>{achievement.number}</span>
                    </div>
                    <div className="text-gray-600 text-sm lg:text-base font-medium">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-500">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <HeartOutlined className="text-4xl text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Join Our Journey</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Ready to transform your business with innovative solutions? Let's work together to achieve your goals and create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 left-1/3 w-14 h-14 bg-yellow-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Mission;
