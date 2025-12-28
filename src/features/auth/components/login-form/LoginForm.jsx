import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import './style.css';
import AuthSidebar from '/src/shared/components/AuthSidebar/AuthSidebar';
import PasswordInput from '/src/shared/components/form/PasswordInput';
import FormField from '/src/shared/components/form/FormField';
import Button from '/src/shared/components/Button/Button';
import { useLoginForm } from '../../hooks/useLoginForm';

function LoginForm() {
  const {
    register,
    onSubmit,
    formState: { errors },
    isLoading
  } = useLoginForm();

  return (
    <Row className='flex-column-reverse flex-lg-row g-0 min-vh-100'>
      <Col lg={6} md={12} className='left-panel d-flex align-items-center justify-content-center'>
          
          <div className='form-content-wrapper form w-100'>
            <Form onSubmit={onSubmit}>
              <h2 className="mb-4 text-center">Log in</h2>
         
              <FormField label="Email" required error={errors.email?.message}>
                <Form.Control 
                  type="email" 
                  className='form-input'
                  placeholder='Enter your email address'
                  isInvalid={!!errors.email}
                  {...register('email')}
                />
              </FormField>

              <FormField label="Password" required error={errors.password?.message}>
                <PasswordInput 
                  placeholder='Enter your password'
                  isInvalid={!!errors.password}
                  {...register('password')}
                />
              </FormField>
              
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                size="large"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </Button>
              
              <p className='text-center mt-3'>
                New in termbi? 
                <a href='/sign-up' className='login-link ms-1'>Register</a>
              </p>
            </Form>
          </div>
          
        </Col>
        
        <AuthSidebar  />
        
    </Row>
  );
}

export default LoginForm;