import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

function Button({ children, className = '', ...props }) {
  return (
    <BootstrapButton
      className={`subscribe-btn fw-bold ${className}`}
      {...props}
    >
      {children}
    </BootstrapButton>
  );
}

export default Button;