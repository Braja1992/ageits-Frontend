'use client';

import React, { useState } from 'react';
import { 
  SendOutlined, 
  UserOutlined, 
  MailOutlined, 
  MessageOutlined,
  PhoneOutlined,
  StarFilled,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SafetyOutlined
} from '@ant-design/icons';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      });
    }, 2000);
  };

  const services = [
    'Computer & Laptop Solutions',
    'CCTV & Security Systems',
    'Printer Sales & Service',
    'Cybersecurity Solutions',
    'Cloud Solutions',
    'IT Support & Helpdesk',
    'Network Solutions',
    'Other'
  ];

  const features = [
    { icon: ClockCircleOutlined, text: 'Quick Response', color: 'text-blue-500' },
    { icon: SafetyOutlined, text: 'Secure & Private', color: 'text-green-500' },
    { icon: CheckCircleOutlined, text: 'Expert Support', color: 'text-orange-500' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] repeat"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <StarFilled className="mr-2 text-orange-500" />
              Get In Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient-primary">Send us a</span>
              <br />
              <span className="text-gradient-accent">Message</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your goals.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <IconComponent className={`text-lg ${feature.color}`} />
                    <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="form-label">
                    <UserOutlined className="mr-2 text-blue-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="form-label">
                    <MailOutlined className="mr-2 text-orange-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="phone" className="form-label">
                    <PhoneOutlined className="mr-2 text-green-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="service" className="form-label">
                    <StarFilled className="mr-2 text-yellow-500" />
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label htmlFor="subject" className="form-label">
                  <MessageOutlined className="mr-2 text-blue-500" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="form-label">
                  <MessageOutlined className="mr-2 text-orange-500" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Tell us more about your requirements..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <SendOutlined className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Get in touch with us through any of these channels. We're here to help you succeed.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <PhoneOutlined className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-blue-100">+91 8917297392</p>
                      <p className="text-blue-200 text-sm">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MailOutlined className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-blue-100">services@ageits.com</p>
                      <p className="text-blue-200 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <UserOutlined className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-blue-100">Plot No- 22, Somu Green valley</p>
                      <p className="text-blue-100">Sudarpur, Chandaka, Bhubaneswar</p>
                      <p className="text-blue-100">Odisha-751024</p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white border-opacity-20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">24/7</div>
                    <div className="text-blue-200 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-300">99%</div>
                    <div className="text-blue-200 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-400 bg-opacity-20 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-400 bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ContactForm;
