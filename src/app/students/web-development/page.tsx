import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  CodeOutlined,
  Html5Outlined,
  DatabaseOutlined,
  CloudOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Full-Stack Web Development Training | Real-time Projects | Ananta Gopal Enterprises',
  description: 'Master full-stack web development with React, Node.js, databases, and cloud deployment. Build real-world web applications with modern technologies and best practices.',
  keywords: [
    'web development',
    'full-stack development',
    'React development',
    'Node.js training',
    'frontend development',
    'backend development',
    'web applications',
    'JavaScript training'
  ].join(', '),
  openGraph: {
    title: 'Full-Stack Web Development Training | Real-time Projects',
    description: 'Master full-stack web development with React, Node.js, databases, and cloud deployment.',
    url: '/students/web-development',
    images: [
      {
        url: '/og-web-dev.jpg',
        width: 1200,
        height: 630,
        alt: 'Full-Stack Web Development Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Web Development Training | Real-time Projects',
    description: 'Master full-stack web development with React, Node.js, databases, and cloud deployment.',
    images: ['/og-web-dev.jpg'],
  },
  alternates: {
    canonical: '/students/web-development',
  },
};

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 'Advanced', icon: '⚛️' },
      { name: 'Next.js', level: 'Intermediate', icon: '▲' },
      { name: 'TypeScript', level: 'Intermediate', icon: '🔷' },
      { name: 'Tailwind CSS', level: 'Intermediate', icon: '🎨' },
      { name: 'Vue.js', level: 'Beginner', icon: '💚' }
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 'Advanced', icon: '🟢' },
      { name: 'Express.js', level: 'Intermediate', icon: '🚀' },
      { name: 'Python/Django', level: 'Intermediate', icon: '🐍' },
      { name: 'REST APIs', level: 'Advanced', icon: '🔗' },
      { name: 'GraphQL', level: 'Beginner', icon: '🔺' }
    ]
  },
  {
    category: 'Database',
    technologies: [
      { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
      { name: 'Redis', level: 'Beginner', icon: '🔴' },
      { name: 'Firebase', level: 'Intermediate', icon: '🔥' }
    ]
  },
  {
    category: 'DevOps',
    technologies: [
      { name: 'Docker', level: 'Intermediate', icon: '🐳' },
      { name: 'AWS/GCP', level: 'Beginner', icon: '☁️' },
      { name: 'Git/GitHub', level: 'Advanced', icon: '📚' },
      { name: 'CI/CD', level: 'Beginner', icon: '🔄' }
    ]
  }
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with payment integration, inventory management, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    duration: '8 weeks',
    complexity: 'Advanced'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics platform with data visualization and user management.',
    tech: ['Next.js', 'Express', 'PostgreSQL', 'Chart.js'],
    duration: '6 weeks',
    complexity: 'Intermediate'
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates and team collaboration features.',
    tech: ['React', 'Socket.io', 'MongoDB', 'JWT'],
    duration: '5 weeks',
    complexity: 'Intermediate'
  },
  {
    title: 'Learning Management System',
    description: 'Online education platform with course management, video streaming, and progress tracking.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'AWS S3'],
    duration: '10 weeks',
    complexity: 'Advanced'
  }
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6 mt-8">
                <CodeOutlined className="mr-2" />
                Web Development
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">Full-Stack</span>
                <br />
                <span className="text-gradient-accent">Web Development</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master modern web development with React, Node.js, databases, and cloud technologies.
                Build production-ready web applications from scratch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Learning
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#tech-stack"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-600 hover:text-white transition-all duration-300"
                >
                  View Technologies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Technology</span>
                <span className="text-gradient-accent"> Stack</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn industry-standard technologies used by top tech companies worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStack.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-semibold text-gray-800">{tech.name}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tech.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                          tech.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Real-World</span>
                <span className="text-gradient-accent"> Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build portfolio-worthy projects that demonstrate your full-stack development skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                    <div className="ml-4">
                      <CodeOutlined className="text-3xl text-cyan-600" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duration: {project.duration}</span>
                    <span>Complexity: {project.complexity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient-primary">Learning</span>
                <span className="text-gradient-accent"> Path</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Structured curriculum designed to take you from beginner to full-stack developer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Frontend Fundamentals',
                  duration: '4 weeks',
                  skills: ['HTML/CSS', 'JavaScript', 'React Basics', 'Responsive Design']
                },
                {
                  phase: 'Phase 2',
                  title: 'Backend Development',
                  duration: '6 weeks',
                  skills: ['Node.js', 'Express', 'APIs', 'Authentication']
                },
                {
                  phase: 'Phase 3',
                  title: 'Database & Deployment',
                  duration: '4 weeks',
                  skills: ['MongoDB', 'PostgreSQL', 'Cloud Deployment', 'DevOps']
                },
                {
                  phase: 'Phase 4',
                  title: 'Advanced Projects',
                  duration: '6 weeks',
                  skills: ['Full-Stack Apps', 'Real-time Features', 'Testing', 'Optimization']
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{phase.phase}</h3>
                  <h4 className="text-md font-semibold text-cyan-600 mb-4">{phase.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{phase.duration}</p>
                  <ul className="space-y-1">
                    {phase.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600 text-xs">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Support */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Launch Your Web Development Career</h2>
              <p className="text-xl mb-8 text-cyan-100">
                Get comprehensive career support including resume building, interview preparation,
                and job placement assistance to help you land your dream job.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: StarFilled,
                    title: 'Portfolio Development',
                    description: 'Build an impressive portfolio showcasing your best projects'
                  },
                  {
                    icon: DatabaseOutlined,
                    title: 'Interview Preparation',
                    description: 'Mock interviews, coding challenges, and technical questions'
                  },
                  {
                    icon: CloudOutlined,
                    title: 'Job Placement',
                    description: 'Resume optimization and connections with hiring companies'
                  }
                ].map((support, index) => {
                  const IconComponent = support.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{support.title}</h3>
                      <p className="text-cyan-100">{support.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Enroll Now
                  <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+918917297392"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
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