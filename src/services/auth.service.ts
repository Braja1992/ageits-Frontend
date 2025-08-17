import api from './api';
import { LoginFormData, RegisterFormData } from '@/types';

export const login = async (credentials: LoginFormData) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData: RegisterFormData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};
