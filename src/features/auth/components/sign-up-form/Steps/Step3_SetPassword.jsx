// Step3_SetPassword.jsx (التعديل النهائي الاحترافي)

import React from 'react';
import { Form } from 'react-bootstrap';
import PasswordInput from '/src/shared/components/form/PasswordInput';
import FormField from '/src/shared/components/form/FormField';
import Button from '/src/shared/components/form/Button';

// 1. استقبال props الجديدة: register, errors, onSubmitHandler
const Step3_SetPassword = ({ register, errors, onSubmitHandler }) => {
  

  return (
    <Form onSubmit={onSubmitHandler}>
      <h2 className="mb-4 text-center">Set your password</h2>
      
      <FormField label="Password" required error={errors.password?.message}>
        <PasswordInput 
          placeholder='Enter your password'
          isInvalid={!!errors.password}
          {...register('password')}
        />
      </FormField>

      <FormField label="Confirm Password" required error={errors.confirmPassword?.message}>
        <PasswordInput 
          placeholder='Confirm your password'
          isInvalid={!!errors.confirmPassword}
          {...register('confirmPassword')}
        />
      </FormField>
      
      <Button type="submit" variant="primary" fullWidth size="large">
        Register
      </Button>
      
      <p className='text-center mt-3'>
        You already have an account? 
        <a href='#' className='login-link ms-1'>Log in</a>
      </p>
    </Form>
  );
};

export default Step3_SetPassword;