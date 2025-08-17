import { useState, useEffect } from 'react';
import { User } from '@/types';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual auth logic (e.g., from a token)
    const fetchUser = async () => {
      try {
        // Simulate fetching user data
        const userData: User = {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        setUser(userData);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useAuth;
