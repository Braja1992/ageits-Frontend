'use client';

import React from 'react';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const ContactInfo: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-lg shadow-soft">
            <PhoneOutlined className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+918917297392" className="text-gray-600 hover:text-blue-600">
              +91 8917297392
            </a>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-soft">
            <MailOutlined className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:services@ageits.com" className="text-gray-600 hover:text-blue-600">
              services@ageits.com
            </a>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-soft">
            <EnvironmentOutlined className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">Plot No- 22, Somu Green valley, Sudarpur, Chandaka, Bhubaneswar, Odisha-751024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
