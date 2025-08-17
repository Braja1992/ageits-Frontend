'use client';

import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mr. Hara',
      role: 'CEO & Founder',
      image: '/ceo.jpg',
    },
    {
      name: 'Mr. Satya',
      role: 'Chief Finance Officer',
      image: '/cfo.jpg',
    },
    {
      name: 'Mr. Jaga',
      role: 'Tech Lead',
      image: '/tl.jpg',
    },
    {
      name: 'Mr. Sibasis',
      role: 'Chief Information Security Officer',
      image: '/ciso.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gray background if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
