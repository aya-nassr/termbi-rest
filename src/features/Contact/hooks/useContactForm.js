import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchemaValidation } from '../components/config';

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(contactFormSchemaValidation),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    console.log('Contact form data:', data);
    // هنا يمكن إرسال البيانات للـ API
    reset(); // إعادة تعيين النموذج بعد الإرسال
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors
  };
};