import api from './api';
import { ContactFormData } from '@/types';

export const sendContactForm = async (formData: ContactFormData) => {
  const response = await api.post('/contacts', formData);
  return response.data;
};
