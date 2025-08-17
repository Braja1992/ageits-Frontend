import { useState, ChangeEvent, FormEvent } from 'react';

const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (callback: () => void) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
