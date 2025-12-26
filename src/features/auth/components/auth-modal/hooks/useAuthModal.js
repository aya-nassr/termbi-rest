import { useState, useEffect } from 'react';

export const useAuthModal = (initialMode = 'login') => {
  const [mode, setMode] = useState(initialMode);

  // Update mode when initialMode changes
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