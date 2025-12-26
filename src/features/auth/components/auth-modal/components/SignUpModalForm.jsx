import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Google, Facebook, EyeSlash, Eye } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from './config';
import { useSignUpMutation } from '../../../services/mutations';
import { userStorage } from '../../../storage';
import toast from 'react-hot-toast';

function SignUpModalForm({ onSwitchToLogin, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const signUpMutation = useSignUpMutation();

  const onSubmit = async (data) => {
    try {
      const customerData = {
        first_name: data.firstName,
        last_name: data.lastName || '',
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
        role: 'customer'
      };
      
      const response = await signUpMutation.mutateAsync(customerData);
      
      // حفظ بيانات المستخدم وتسجيل الدخول تلقائياً
      if (response?.data) {
        userStorage.save(response.data);
      }
      
      toast.success('Account created and logged in successfully!');
      onClose();
      window.location.reload(); // إعادة تحميل الصفحة لتحديث حالة المصادقة
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error?.response?.data?.message || error?.message || 'An error occurred while creating account';
      toast.error(errorMessage);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <Form.Control 
          type="text" 
          placeholder='First Name'
          className="py-3"
          style={{ fontSize: '14px', border: '1px solid #ddd' }}
          isInvalid={!!errors.firstName}
          {...register('firstName')}
        />
        {errors.firstName && (
          <Form.Control.Feedback type="invalid">
            {errors.firstName.message}
          </Form.Control.Feedback>
        )}
      </div>

      <div className="mb-3">
        <Form.Control 
          type="text" 
          placeholder='Last Name'
          className="py-3"
          style={{ fontSize: '14px', border: '1px solid #ddd' }}
          isInvalid={!!errors.lastName}
          {...register('lastName')}
        />
        {errors.lastName && (
          <Form.Control.Feedback type="invalid">
            {errors.lastName.message}
          </Form.Control.Feedback>
        )}
      </div>

      <div className="mb-3">
        <Form.Control 
          type="email" 
          placeholder='Email'
          className="py-3"
          style={{ fontSize: '14px', border: '1px solid #ddd' }}
          isInvalid={!!errors.email}
          {...register('email')}
        />
        {errors.email && (
          <Form.Control.Feedback type="invalid">
            {errors.email.message}
          </Form.Control.Feedback>
        )}
      </div>

      <div className="mb-3 position-relative">
        <Form.Control 
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          className="py-3 pe-5"
          style={{ fontSize: '14px', border: '1px solid #ddd' }}
          isInvalid={!!errors.password}
          {...register('password')}
        />
        {errors.password && (
          <Form.Control.Feedback type="invalid">
            {errors.password.message}
          </Form.Control.Feedback>
        )}
        <button
          type="button"
          className="btn position-absolute end-0 top-50 translate-middle-y me-3"
          style={{ border: 'none', background: 'none', color: '#999' }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={16} /> : <EyeSlash size={16} />}
        </button>
      </div>

      <div className="mb-3 position-relative">
        <Form.Control 
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder='Confirm Password'
          className="py-3 pe-5"
          style={{ fontSize: '14px', border: '1px solid #ddd' }}
          isInvalid={!!errors.confirmPassword}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword.message}
          </Form.Control.Feedback>
        )}
        <button
          type="button"
          className="btn position-absolute end-0 top-50 translate-middle-y me-3"
          style={{ border: 'none', background: 'none', color: '#999' }}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <Eye size={16} /> : <EyeSlash size={16} />}
        </button>
      </div>
      
      <Button 
        type="submit" 
        className="w-100 mb-3 py-3"
        style={{ 
          backgroundColor: '#e53e3e', 
          border: 'none',
          fontSize: '16px',
          fontWeight: '500'
        }}
        disabled={signUpMutation.isPending}
      >
        {signUpMutation.isPending ? 'Creating Account...' : 'Sign up'}
      </Button>
      
      <div className="text-center mb-3" style={{ color: '#999', fontSize: '14px' }}>
        OR
      </div>
      
      <Button 
        variant="outline-secondary"
        className="w-100 mb-3 py-3 d-flex align-items-center justify-content-center"
        style={{ fontSize: '14px', fontWeight: '500' }}
      >
        <Google className="me-2" size={16} />
        Continue with Google
      </Button>
      
      <Button 
        variant="outline-secondary"
        className="w-100 mb-4 py-3 d-flex align-items-center justify-content-center"
        style={{ fontSize: '14px', fontWeight: '500' }}
      >
        <Facebook className="me-2" size={16} />
        Continue with Facebook
      </Button>
      
      <p className='text-center' style={{ fontSize: '14px', color: '#666' }}>
        already have an account? 
        <button 
          type="button"
          className='btn btn-link p-0 ms-1'
          style={{ color: '#e53e3e', textDecoration: 'none', fontSize: '14px' }}
          onClick={onSwitchToLogin}
        >
          Log in
        </button>
      </p>
    </Form>
  );
}

export default SignUpModalForm;