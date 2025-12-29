import React, { createContext, useContext, useState, useEffect } from 'react';
import { userStorage } from '../storage';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = userStorage.get();
    if (userData?.customer) {
      setUser(userData.customer);
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    userStorage.save(userData);
    setUser(userData.customer);
  };

  const logout = () => {
    userStorage.clear();
    setUser(null);
  };

  const value = {
    user,
    isLoggedIn: Boolean(user),
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};