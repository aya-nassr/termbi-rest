import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ 
  label, 
  required = false, 
  error, 
  children 
}) => {
  return (
    <Form.Group className="mb-4">
      {label && (
        <Form.Label className='fw-semibold'>
          {label} {required && '*'}
        </Form.Label>
      )}
      {children}
      {error && <p className='text-danger mt-1'>{error}</p>}
    </Form.Group>
  );
};

export default FormField;