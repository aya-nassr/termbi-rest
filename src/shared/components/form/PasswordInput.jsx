import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const PasswordInput = React.forwardRef(({ placeholder, isInvalid, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <Form.Control 
        ref={ref}
        type={showPassword ? "text" : "password"}
        className='form-input'
        placeholder={placeholder}
        isInvalid={isInvalid}
        {...props}
      />
      <InputGroup.Text 
        className='bg-white border-start-0 cursor-pointer'
        onClick={() => setShowPassword(!showPassword)}
        style={{ cursor: 'pointer' }}
      >
        <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
      </InputGroup.Text>
    </InputGroup>
  );
});

export default PasswordInput;