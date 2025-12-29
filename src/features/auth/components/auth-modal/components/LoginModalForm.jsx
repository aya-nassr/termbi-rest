import React from 'react';
import { Form } from 'react-bootstrap';
import { Google, Facebook, EyeSlash, Eye } from 'react-bootstrap-icons';
import { useLoginForm } from '../../../hooks/useLoginForm';
import Button from '../../../../../shared/components/Button';

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
          isInvalid={!!errors.email}
          {...register('email')}
        />
      </div>

      <div className="mb-3 position-relative">
        <Form.Control 
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          className="py-3 pe-5"
          isInvalid={!!errors.password}
          {...register('password')}
        />
        <button
          type="button"
          className="btn position-absolute end-0 top-50 translate-middle-y me-3"
          
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={16} /> : <EyeSlash size={16} />}
        </button>
      </div>
      
      <Button 
        type="submit" 
        variant="primary"
        size="lg"
        className="w-100 mb-3 py-3"
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
      >
        <Google className="me-2" size={16} />
        Continue with Google
      </Button>
      
      <Button 
        variant="outline-secondary"
        className="w-100 mb-4 py-3 d-flex align-items-center justify-content-center"
      >
        <Facebook className="me-2" size={16} />
        Continue with Facebook
      </Button>
      
      <p className='text-center text-secondary' >
        New in termbi? 
        <button 
         
          className='btn text-danger'
          
          onClick={onSwitchToSignUp}
        >
          Create new account
        </button>
      </p>
    </Form>
  );
}

export default LoginModalForm;