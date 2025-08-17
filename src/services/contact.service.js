import api from './api';

const sendMessage = (name, email, subject, message) => {
  return api.post('/contact', {
    name,
    email,
    subject,
    message,
  });
};

const contactService = {
  sendMessage,
};

export default contactService;
