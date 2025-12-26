import * as yup from 'yup';

const paymentConfig = {
  validationSchema: yup.object().shape({
    cardholderName: yup.string()
      .required('Cardholder name is required')
      .min(2, 'Name must be at least 2 characters'),
    cardNumber: yup.string()
      .required('Card number is required')
      .matches(/^[0-9\s-]{13,19}$/, 'Invalid card number format'),
    expirationDate: yup.string()
      .required('Expiration date is required')
      .matches(/^(0[1-9]|1[0-2])\/[0-9]{4}$/, 'Format: MM/YYYY'),
    cvv: yup.string()
      .required('CVV is required')
      .matches(/^[0-9]{3,4}$/, 'CVV must be 3-4 digits')
  })
};

export default paymentConfig;