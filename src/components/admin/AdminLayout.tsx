'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Button,
  message,
  Spin
} from 'antd';
import {
  DashboardOutlined,
  ProductOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  CalendarOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');

    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      router.push('/admin/login');
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    message.success('Logged out successfully');
    router.push('/admin/login');
  };

  const menuItems = [
    {
      key: '/admin/dashboard',
      icon: <DashboardOutlined />,
      label: <Link href="/admin/dashboard">Dashboard</Link>,
    },
    {
      key: '/admin/products',
      icon: <ProductOutlined />,
      label: <Link href="/admin/products">Products</Link>,
    },
    {
      key: '/admin/services',
      icon: <CustomerServiceOutlined />,
      label: <Link href="/admin/services">Services</Link>,
    },
    {
      key: '/admin/contacts',
      icon: <MessageOutlined />,
      label: <Link href="/admin/contacts">Contacts</Link>,
    },
    {
      key: '/admin/appointments',
      icon: <CalendarOutlined />,
      label: <Link href="/admin/appointments">Appointments</Link>,
    },
    {
      key: '/admin/users',
      icon: <UserOutlined />,
      label: <Link href="/admin/users">Users</Link>,
    },
  ];

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="bg-white border-r border-gray-200"
        width={280}
      >
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg" />
            {!collapsed && (
              <div>
                <div className="text-lg font-bold text-blue-600">Admin Panel</div>
                <div className="text-xs text-gray-500">AGEITS</div>
              </div>
            )}
          </Link>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          className="border-none"
        />
      </Sider>

      <Layout>
        <Header className="bg-white border-b border-gray-200 px-6 flex items-center justify-between">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600"
          />

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to Website
            </Link>

            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <div className="flex items-center space-x-3 cursor-pointer">
                <Avatar
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                  size="small"
                />
                {!collapsed && (
                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                    <div className="text-xs text-gray-500">{user?.role}</div>
                  </div>
                )}
              </div>
            </Dropdown>
          </div>
        </Header>

        <Content className="p-6 bg-gray-50">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;