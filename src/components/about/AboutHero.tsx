'use client';

import React from 'react';
import { 
  StarFilled, 
  TeamOutlined, 
  TrophyOutlined, 
  RocketOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const AboutHero: React.FC = () => {
  const achievements = [
    { icon: TeamOutlined, number: '50+', label: 'Team Members', color: 'text-blue-300' },
    { icon: TrophyOutlined, number: '5+', label: 'Years Experience', color: 'text-orange-300' },
    { icon: RocketOutlined, number: '1000+', label: 'Projects Delivered', color: 'text-green-300' },
    { icon: CheckCircleOutlined, number: '99%', label: 'Client Satisfaction', color: 'text-yellow-300' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <StarFilled className="mr-2 text-yellow-300" />
            About Our Company
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-100">
            Innovating the Future
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-green-300">
              Together
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            We are a passionate team of professionals dedicated to delivering exceptional solutions that transform businesses and drive success through innovation, expertise, and unwavering commitment to excellence.
          </p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up animate-delay-300">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className={`text-3xl ${achievement.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${achievement.color} group-hover:scale-105 transition-transform duration-300`}>
                    {achievement.number}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className="bg-white bg-opacity-10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm animate-fade-in-up animate-delay-400">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              To empower businesses with cutting-edge technology solutions that drive growth, enhance efficiency, and create lasting value. We believe in building partnerships that go beyond transactions, fostering innovation that makes a real difference in the world.
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-16 animate-fade-in-up animate-delay-500">
            <h3 className="text-2xl font-bold mb-8 text-white">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Innovation', description: 'Pushing boundaries with creative solutions', color: 'bg-blue-500' },
                { title: 'Excellence', description: 'Delivering quality in everything we do', color: 'bg-orange-500' },
                { title: 'Integrity', description: 'Building trust through transparency', color: 'bg-green-500' },
              ].map((value, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 group">
                  <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{value.title.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-blue-200 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-400 bg-opacity-20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-yellow-400 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-400 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 left-1/3 w-18 h-18 bg-blue-300 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-20 w-22 h-22 bg-orange-300 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default AboutHero;
