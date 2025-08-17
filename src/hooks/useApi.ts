import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiResponse } from '@/types';

const useApi = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(url);
        if (response.data.success) {
          setData(response.data.data || null);
        } else {
          setError(response.data.message || 'An unknown error occurred');
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};

export default useApi;
