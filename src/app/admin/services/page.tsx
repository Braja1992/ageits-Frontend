'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Select, message, Space, Tag, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AdminLayout from '@/components/admin/AdminLayout';
import type { ColumnsType } from 'antd/es/table';

interface Service {
  id: number;
  name: string;
  description: string;
  price?: number;
  duration?: string;
  image?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

const AdminServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/v1/services', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        message.error('Failed to fetch services');
      }
    } catch (error) {
      message.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingService(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    form.setFieldsValue(service);
    setModalVisible(true);
  };

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/v1/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        message.success('Service deleted successfully');
        fetchServices();
      } else {
        message.error('Failed to delete service');
      }
    } catch (error) {
      message.error('Network error');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      const token = localStorage.getItem('adminToken');
      const url = editingService
        ? `http://localhost:5000/api/v1/services/${editingService.id}`
        : 'http://localhost:5000/api/v1/services';

      const method = editingService ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success(`Service ${editingService ? 'updated' : 'created'} successfully`);
        setModalVisible(false);
        fetchServices();
      } else {
        message.error(`Failed to ${editingService ? 'update' : 'create'} service`);
      }
    } catch (error) {
      message.error('Network error');
    }
  };

  const columns: ColumnsType<Service> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => category ? <Tag color="green">{category}</Tag> : '-',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => price ? `₹${price}` : '-',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration) => duration || '-',
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="small">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            size="small"
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this service?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              size="small"
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Services Management</h1>
            <p className="text-gray-600">Manage your service offerings</p>
          </div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreate}
            size="large"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Add Service
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <Table
            columns={columns}
            dataSource={services}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} services`,
            }}
          />
        </div>

        <Modal
          title={editingService ? 'Edit Service' : 'Add New Service'}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          width={600}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="mt-6"
          >
            <Form.Item
              name="name"
              label="Service Name"
              rules={[{ required: true, message: 'Please enter service name' }]}
            >
              <Input placeholder="Enter service name" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter service description' }]}
            >
              <Input.TextArea
                placeholder="Enter service description"
                rows={4}
              />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="price"
                label="Price"
              >
                <InputNumber
                  placeholder="0.00"
                  min={0}
                  step={0.01}
                  className="w-full"
                  prefix="₹"
                />
              </Form.Item>

              <Form.Item
                name="duration"
                label="Duration"
              >
                <Input placeholder="e.g., 2 hours, 1 day" />
              </Form.Item>
            </div>

            <Form.Item
              name="category"
              label="Category"
            >
              <Select placeholder="Select category" allowClear>
                <Select.Option value="consulting">Consulting</Select.Option>
                <Select.Option value="development">Development</Select.Option>
                <Select.Option value="support">Support</Select.Option>
                <Select.Option value="training">Training</Select.Option>
                <Select.Option value="maintenance">Maintenance</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="image"
              label="Image URL"
            >
              <Input placeholder="Enter image URL" />
            </Form.Item>

            <Form.Item className="mb-0 mt-6">
              <div className="flex justify-end space-x-3">
                <Button onClick={() => setModalVisible(false)}>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {editingService ? 'Update Service' : 'Create Service'}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminServices;