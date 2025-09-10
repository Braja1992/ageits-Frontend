'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Switch, Select, message, Space, Tag, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import AdminLayout from '@/components/admin/AdminLayout';
import type { ColumnsType } from 'antd/es/table';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/v1/products', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        message.error('Failed to fetch products');
      }
    } catch (error) {
      message.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingProduct(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setModalVisible(true);
  };

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/v1/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        message.success('Product deleted successfully');
        fetchProducts();
      } else {
        message.error('Failed to delete product');
      }
    } catch (error) {
      message.error('Network error');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      const token = localStorage.getItem('adminToken');
      const url = editingProduct
        ? `http://localhost:5000/api/v1/products/${editingProduct.id}`
        : 'http://localhost:5000/api/v1/products';

      const method = editingProduct ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success(`Product ${editingProduct ? 'updated' : 'created'} successfully`);
        setModalVisible(false);
        fetchProducts();
      } else {
        message.error(`Failed to ${editingProduct ? 'update' : 'create'} product`);
      }
    } catch (error) {
      message.error('Network error');
    }
  };

  const columns: ColumnsType<Product> = [
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
      render: (category) => category ? <Tag color="blue">{category}</Tag> : '-',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `₹${price}`,
    },
    {
      title: 'Stock',
      dataIndex: 'inStock',
      key: 'inStock',
      render: (inStock) => (
        <Tag color={inStock ? 'green' : 'red'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </Tag>
      ),
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
            icon={<EyeOutlined />}
            size="small"
          >
            View
          </Button>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            size="small"
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this product?"
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Products Management</h1>
            <p className="text-gray-600">Manage your product catalog</p>
          </div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreate}
            size="large"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Add Product
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <Table
            columns={columns}
            dataSource={products}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} products`,
            }}
          />
        </div>

        <Modal
          title={editingProduct ? 'Edit Product' : 'Add New Product'}
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
              label="Product Name"
              rules={[{ required: true, message: 'Please enter product name' }]}
            >
              <Input placeholder="Enter product name" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter product description' }]}
            >
              <Input.TextArea
                placeholder="Enter product description"
                rows={4}
              />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: 'Please enter price' }]}
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
                name="category"
                label="Category"
              >
                <Select placeholder="Select category" allowClear>
                  <Select.Option value="electronics">Electronics</Select.Option>
                  <Select.Option value="computers">Computers</Select.Option>
                  <Select.Option value="accessories">Accessories</Select.Option>
                  <Select.Option value="software">Software</Select.Option>
                  <Select.Option value="services">Services</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              name="image"
              label="Image URL"
            >
              <Input placeholder="Enter image URL" />
            </Form.Item>

            <Form.Item
              name="inStock"
              label="In Stock"
              valuePropName="checked"
            >
              <Switch />
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
                  {editingProduct ? 'Update Product' : 'Create Product'}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;