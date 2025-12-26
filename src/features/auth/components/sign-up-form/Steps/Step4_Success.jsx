import React from 'react';

const Step4_Success = () => {
  return (
    <div className='text-center py-5'>
      <p className="lead fw-bold mb-4 text-success-custom">
        Your account has been created successfully!
      </p>
      <p className='text-muted fw-bold mb-5'>
       Get your restaurant started
      </p>
      
      <p className='w-75 mx-auto text-muted text-center mb-5'>
       A verification code has been sent to your email. Please verify your account via email. <a href='#' className='login-link ms-1'>Open my email</a>
      </p>
    </div>
  );
};

export default Step4_Success;