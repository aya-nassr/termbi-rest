

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormSchemaValidation } from '../components/sign-up-form/config';

export const useSignUpStepsForm = (initialSteps, initialData = {}) => {
  
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [formData, setFormData] = useState(initialData); 


  const formMethods = useForm({
    resolver: yupResolver(signUpFormSchemaValidation), 
    defaultValues: {
      restaurantCountryCode: '+971',
      countryCode: '+1',
      ...initialData
    },
    mode: 'onTouched', 
  });
  
  
  const { getValues, trigger, formState: { errors } } = formMethods;

  
  const handleNextStep = async () => {
    
    
    let fieldsToValidate = [];
    
    if (activeStep === 0) { 
      fieldsToValidate = ['restaurantName', 'restaurantAddress', 'restaurantPhone', 'restaurantCountryCode'];
    } else if (activeStep === 1) { 
      fieldsToValidate = ['name', 'email', 'phone', 'countryCode'];
    }
    

    
    const isValid = await trigger(fieldsToValidate, { shouldFocus: true }); 

    if (isValid) {
      
      const currentStepData = getValues();
      setFormData(prev => ({ ...prev, ...currentStepData }));
      
      
      setCompleted(prevCompleted => ({
        ...prevCompleted,
        [activeStep]: true,
      }));
      
      
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      return true;
    }
    return false;
  };
  
  
  const handleFinalSubmit = (callback) => {
    
    return formMethods.handleSubmit(values => {
      
      setCompleted(prevCompleted => ({
        ...prevCompleted,
        [2]: true, 
      }));
      
      
      callback(values);
    });
  };

  
  return {
    ...formMethods, 
    activeStep,
    completed,
    formData,
    steps: initialSteps,
    handleNextStep, 
    handleFinalSubmit, 
    setActiveStep,
  };
};