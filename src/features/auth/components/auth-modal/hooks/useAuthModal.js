import { useState, useEffect } from 'react';

export const useAuthModal = (initialMode = 'login') => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const switchToSignUp = () => setMode('signup');
  const switchToLogin = () => setMode('login');

  return {
    mode,
    switchToSignUp,
    switchToLogin
  };
};