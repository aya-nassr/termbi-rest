

import * as yup from 'yup';

export const signUpFormSchemaValidation = yup.object().shape({
    
    restaurantName: yup
        .string()
        .required('Restaurant name is required.'),
        
    restaurantAddress: yup
        .string()
        .required('Restaurant address is required.'),
    
    restaurantPhone: yup
        .string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits.")
        .min(8, 'Phone number must be at least 8 digits.')
        .required('Restaurant phone is required.'),
    
    restaurantCountryCode: yup
        .string()
        .required('Country code is required.'), 

    
    name: yup
        .string()
        .required('Your name is required.'),

    email: yup
        .string()
        .email('Please enter a valid email address.')
        .required('Email is required.'),
        
    phone: yup
        .string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits.")
        .min(8, 'Phone number must be at least 8 digits.')
        .required('Your phone is required.'),
    
    countryCode: yup
        .string()
        .required('Country code is required.'),

    
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters.')
        .required('Password is required.'),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match.') 
        .required('Confirm password is required.'),
});

