// features/auth/components/login-form/config.js

import * as yup from 'yup';

export const loginFormSchemaValidation = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email address.')
        .required('Email is required.'),
    password: yup
        .string()
        .required('Password is required.'),
});