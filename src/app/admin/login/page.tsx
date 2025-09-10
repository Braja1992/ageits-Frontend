'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Card, message, Spin } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const AdminLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.access_token);
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        message.success('Login successful!');
        router.push('/admin/dashboard');
      } else {
        message.error(data.message || 'Login failed');
      }
    } catch (error) {
      message.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img src="/logo.jpg" alt="Logo" className="mx-auto w-16 h-16 rounded-xl shadow-lg" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access the admin panel
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <Form
            name="admin-login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Email address"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Password"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 border-blue-600 rounded-lg font-semibold"
                size="large"
              >
                {loading ? <Spin size="small" /> : 'Sign In'}
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to Website
            </Link>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 font-medium mb-3">Available Admin Credentials:</p>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-2">🔐 Primary Admin Account</p>
                <p className="text-xs text-blue-600"><strong>Email:</strong> admin@ageits.com</p>
                <p className="text-xs text-blue-600"><strong>Password:</strong> Braja@7358%$#</p>
                <p className="text-xs text-gray-500 mt-1">Your main admin account</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-green-200">
                <p className="text-sm font-semibold text-green-800 mb-2">🎯 Demo Admin Account</p>
                <p className="text-xs text-green-600"><strong>Email:</strong> demo@ageits.com</p>
                <p className="text-xs text-green-600"><strong>Password:</strong> admin123</p>
                <p className="text-xs text-gray-500 mt-1">Demo account for testing</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              💡 Both accounts have full admin privileges and are stored securely in your database.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;