import { useState, useEffect } from 'react';
import authService from '../services/auth.service';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return authService.login(email, password).then((response) => {
      setUser(response);
      return response;
    });
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const register = (name, email, password) => {
    return authService.register(name, email, password);
  };

  return { user, loading, login, logout, register };
};

export default useAuth;
