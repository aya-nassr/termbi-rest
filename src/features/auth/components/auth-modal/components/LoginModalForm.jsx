import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Google, Facebook, EyeSlash, Eye } from 'react-bootstrap-icons';
import { useLoginForm } from '../../../hooks/useLoginForm';

function LoginModalForm({ onSwitchToSignUp, onClose }) {
  const {
    register,
    onSubmit,
    formState: { errors },
    isLoading
  } = useLoginForm(onClose);

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Form onSubmit={onSubmit}>
      <div className="mb-3">
        <Form.Control 
          type="email" 
          placeholder='Email'
          className="py-3"
          style={{ fontSize: '14px', border: '1px solid #ddd' }}
          isInvalid={!!errors.email}
          {...register('email')}
        />
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
        <button
          type="button"
          className="btn position-absolute end-0 top-50 translate-middle-y me-3"
          style={{ border: 'none', background: 'none', color: '#999' }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={16} /> : <EyeSlash size={16} />}
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
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Log in'}
      </Button>
      
      <div className="text-center text-secondary mb-3" >
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
        New in termbi? 
        <button 
          type="button"
          className='btn btn-link p-0 ms-1'
          style={{ color: '#e53e3e', textDecoration: 'none', fontSize: '14px' }}
          onClick={onSwitchToSignUp}
        >
          Create new account
        </button>
      </p>
    </Form>
  );
}

export default LoginModalForm;