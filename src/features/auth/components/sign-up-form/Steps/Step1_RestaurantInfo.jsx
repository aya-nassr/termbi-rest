// Step1_RestaurantInfo.jsx (التعديل النهائي الاحترافي)

import React from 'react';
import { Form } from 'react-bootstrap';
import PhoneInput from '/src/shared/components/form/PhoneInput';
import FormField from '/src/shared/components/form/FormField';
import Button from '/src/shared/components/form/Button'; 

const Step1_RestaurantInfo = ({ handleNextStep, DropdownImage, register, errors, getValues, setValue }) => {
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleNextStep(); 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center">Tell us about your restaurant</h2>
      
      <FormField label="Restaurant name" required error={errors.restaurantName?.message}>
        <Form.Control 
          type="text" 
          className='form-input'
          placeholder='Enter restaurant name'
          isInvalid={!!errors.restaurantName}
          {...register('restaurantName')}
        />
      </FormField>
      
      <FormField label="Restaurant address" required error={errors.restaurantAddress?.message}>
        <Form.Control 
          type="text" 
          className='form-input'
          placeholder='Enter restaurant address'
          isInvalid={!!errors.restaurantAddress}
          {...register('restaurantAddress')}
        />
      </FormField>
      
      <FormField label="Restaurant phone" required error={errors.restaurantPhone?.message}>
        <PhoneInput 
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          fieldName="restaurantPhone"
          countryCodeField="restaurantCountryCode"
          placeholder="Enter phone number"
          DropdownImage={DropdownImage}
          defaultCountryCode="+971"
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

export default Step1_RestaurantInfo;