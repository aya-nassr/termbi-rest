import * as yup from 'yup';

export const contactFormSchemaValidation = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number'),
  
  source: yup
    .string()
    .required('Please select how you found us')
});