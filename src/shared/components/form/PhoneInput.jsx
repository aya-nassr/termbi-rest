import React from 'react';
import { Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const PhoneInput = ({ 
  register, 
  errors, 
  setValue, 
  getValues, 
  fieldName = 'phone',
  countryCodeField = 'countryCode',
  placeholder = 'Enter phone number',
  DropdownImage,
  defaultCountryCode = '+971'
}) => {
  const handleCountrySelect = (code) => {
    setValue(countryCodeField, code, { shouldValidate: true, shouldDirty: true });
  };

  const currentCountryCode = getValues(countryCodeField) || defaultCountryCode;

  return (
    <InputGroup>
      <DropdownButton
        variant="outline-secondary"
        title={DropdownImage}
        id={`${fieldName}-dropdown`}
        className='country-dropdown'
        onSelect={handleCountrySelect}
      >
        <Dropdown.Item eventKey="+1" className='text-muted'>+1 (USA)</Dropdown.Item>
        <Dropdown.Item eventKey="+44" className='text-muted'>+44 (UK)</Dropdown.Item>
        <Dropdown.Item eventKey="+971" className='text-muted'>+971 (UAE)</Dropdown.Item>
      </DropdownButton>
      
      <InputGroup.Text className='bg-white text-muted'>
        {currentCountryCode}
      </InputGroup.Text>
      
      <Form.Control 
        aria-label="Phone number"
        type="tel"
        className='form-input'
        placeholder={placeholder}
        isInvalid={!!errors[fieldName]}
        {...register(fieldName)}
      />
    </InputGroup>
  );
};

export default PhoneInput;