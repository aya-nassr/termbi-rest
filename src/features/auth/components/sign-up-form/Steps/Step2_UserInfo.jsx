// Step2_UserInfo.jsx (التعديل النهائي الاحترافي)

import React from 'react';
import { Form } from 'react-bootstrap';
import PhoneInput from '/src/shared/components/form/PhoneInput';
import FormField from '/src/shared/components/form/FormField';
import Button from '/src/shared/components/Button/Button'; 

// 1. استقبال props الجديدة
const Step2_UserInfo = ({ handleNextStep, DropdownImage, register, errors, getValues, setValue }) => {
  
  // ⚠️ تم حذف useState و handleChange بالكامل ⚠️
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleNextStep(); 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center">Tell us about yourself</h2>
      
      <FormField label="Your name" required error={errors.name?.message}>
        <Form.Control 
          type="text" 
          className='form-input'
          placeholder='Enter your name'
          isInvalid={!!errors.name}
          {...register('name')}
        />
      </FormField>

      <FormField label="Your email" required error={errors.email?.message}>
        <Form.Control 
          type="email" 
          className='form-input'
          placeholder='Enter your email address'
          isInvalid={!!errors.email}
          {...register('email')}
        />
      </FormField>

      <FormField label="Your phone" required error={errors.phone?.message}>
        <PhoneInput 
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          fieldName="phone"
          countryCodeField="countryCode"
          placeholder="Enter phone number"
          DropdownImage={DropdownImage}
          defaultCountryCode="+1"
        />
      </FormField>
      
      <Button type="submit" variant="primary" fullWidth size="large">
        Next
      </Button>
      
      <p className='text-center mt-3'>
        You already have an account? 
        <a href='#' className='login-link ms-1'>Log in</a>
      </p>
    </Form>
  );
};

export default Step2_UserInfo;