import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ 
  variant = 'primary', 
  size = 'default',
  fullWidth = false,
  children, 
  className = '',
  ...props 
}) => {
  const getButtonClass = () => {
    let baseClass = '';
    
    if (variant === 'primary') {
      baseClass = 'next-btn';
    } else if (variant === 'subscribe') {
      baseClass = 'subscribe-btn';
    }
    
    const widthClass = fullWidth ? 'w-100' : '';
    const marginClass = size === 'large' ? 'mt-4' : '';
    
    return `${baseClass} ${widthClass} ${marginClass} ${className}`.trim();
  };

  return (
    <BootstrapButton 
      className={getButtonClass()}
      {...props}
    >
      {children}
    </BootstrapButton>
  );
};

export default Button;