'use client';

import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Statistic, Spin, message } from 'antd';
import {
  ProductOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  CalendarOutlined,
  UserOutlined,
  DollarOutlined
} from '@ant-design/icons';
import AdminLayout from '@/components/admin/AdminLayout';

interface DashboardStats {
  products: number;
  services: number;
  contacts: number;
  appointments: number;
  users: number;
  totalRevenue: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    products: 0,
    services: 0,
    contacts: 0,
    appointments: 0,
    users: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const [productsRes, servicesRes, contactsRes, appointmentsRes, usersRes] = await Promise.all([
        fetch('http://localhost:5000/api/v1/products', { headers }),
        fetch('http://localhost:5000/api/v1/services', { headers }),
        fetch('http://localhost:5000/api/v1/contacts', { headers }),
        fetch('http://localhost:5000/api/v1/appointments', { headers }),
        fetch('http://localhost:5000/api/v1/users', { headers }),
      ]);

      const products = productsRes.ok ? await productsRes.json() : [];
      const services = servicesRes.ok ? await servicesRes.json() : [];
      const contacts = contactsRes.ok ? await contactsRes.json() : [];
      const appointments = appointmentsRes.ok ? await appointmentsRes.json() : [];
      const users = usersRes.ok ? await usersRes.json() : [];

      setStats({
        products: Array.isArray(products) ? products.length : 0,
        services: Array.isArray(services) ? services.length : 0,
        contacts: Array.isArray(contacts) ? contacts.length : 0,
        appointments: Array.isArray(appointments) ? appointments.length : 0,
        users: Array.isArray(users) ? users.length : 0,
        totalRevenue: 0, // This would need to be calculated from actual sales data
      });
    } catch (error) {
      message.error('Failed to load dashboard statistics');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <Spin size="large" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your admin panel. Here's an overview of your business.</p>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <Statistic
                title="Total Products"
                value={stats.products}
                prefix={<ProductOutlined className="text-blue-500" />}
                valueStyle={{ color: '#0ea5e9' }}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <Statistic
                title="Total Services"
                value={stats.services}
                prefix={<CustomerServiceOutlined className="text-green-500" />}
                valueStyle={{ color: '#22c55e' }}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <Statistic
                title="Contact Messages"
                value={stats.contacts}
                prefix={<MessageOutlined className="text-orange-500" />}
                valueStyle={{ color: '#f97316' }}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <Statistic
                title="Appointments"
                value={stats.appointments}
                prefix={<CalendarOutlined className="text-purple-500" />}
                valueStyle={{ color: '#a855f7' }}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <Statistic
                title="Total Users"
                value={stats.users}
                prefix={<UserOutlined className="text-indigo-500" />}
                valueStyle={{ color: '#6366f1' }}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <Statistic
                title="Total Revenue"
                value={stats.totalRevenue}
                prefix={<DollarOutlined className="text-green-600" />}
                valueStyle={{ color: '#16a34a' }}
                suffix="₹"
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]} className="mt-8">
          <Col xs={24} lg={12}>
            <Card
              title="Quick Actions"
              className="shadow-sm"
              extra={<a href="#" className="text-blue-600">View All</a>}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-blue-900">Add New Product</h4>
                    <p className="text-sm text-blue-700">Create a new product listing</p>
                  </div>
                  <a href="/admin/products/new" className="btn-primary text-sm px-4 py-2">
                    Add Product
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-green-900">Add New Service</h4>
                    <p className="text-sm text-green-700">Create a new service offering</p>
                  </div>
                  <a href="/admin/services/new" className="btn-primary text-sm px-4 py-2">
                    Add Service
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-orange-900">View Messages</h4>
                    <p className="text-sm text-orange-700">Check customer inquiries</p>
                  </div>
                  <a href="/admin/contacts" className="btn-primary text-sm px-4 py-2">
                    View Messages
                  </a>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title="Recent Activity"
              className="shadow-sm"
              extra={<a href="#" className="text-blue-600">View All</a>}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">New contact form submission</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Appointment booked</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Product updated</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;