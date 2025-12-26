import React, { useState } from 'react';
import AuthForm from '../shared/components/AuthForm/AuthForm';

function AuthPage() {
  const [authMode, setAuthMode] = useState('login');

  const handleSubmit = (data, mode) => {
    if (mode === 'login') {
      console.log('Login data:', data);
      // هنا يمكنك إضافة منطق تسجيل الدخول
    } else {
      console.log('Signup data:', data);
      // هنا يمكنك إضافة منطق التسجيل الجديد
    }
  };

  const handleModeChange = (newMode) => {
    setAuthMode(newMode);
  };

  return (
    <AuthForm 
      mode={authMode}
      onSubmit={handleSubmit}
      onModeChange={handleModeChange}
    />
  );
}

export default AuthPage;