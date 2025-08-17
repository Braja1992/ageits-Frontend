'use client';

import React from 'react';
import { EnvironmentOutlined, CompassOutlined, GlobalOutlined } from '@ant-design/icons';

const Map: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] repeat"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Find Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit our office or get directions to our location in Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Map Container */}
        <div className="animate-fade-in-up animate-delay-200">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Map Placeholder */}
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              {/* Map Icons */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <CompassOutlined className="text-white text-xl" />
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <GlobalOutlined className="text-white text-xl" />
                </div>
              </div>
              
              {/* Center Content */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <EnvironmentOutlined className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600 mb-4 max-w-md">
                  Plot No- 22, Somu Green valley<br />
                  Sudarpur, Chandaka, Bhubaneswar<br />
                  Odisha-751024
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://maps.google.com/?q=Plot+No-+22,+Somu+Green+valley,+Sudarpur,+Chandaka,+Bhubaneswar,+Odisha-751024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <EnvironmentOutlined className="mr-2" />
                    Open in Google Maps
                  </a>
                  <a
                    href="tel:+918917297392"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Call for Directions
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-float"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-8 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Map Info Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <EnvironmentOutlined className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100 text-sm">Bhubaneswar, Odisha</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <CompassOutlined className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Directions</div>
                    <div className="text-blue-100 text-sm">Easy to find</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <GlobalOutlined className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Accessibility</div>
                    <div className="text-blue-100 text-sm">Public transport</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Map;
