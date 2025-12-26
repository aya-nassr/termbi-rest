import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../components/auth-modal/components/config';
import { useLoginMutation } from '../services/mutations';
import { useAuthNavigation } from './useAuthNavigation';
import { useAuth } from '../context/AuthContext';

export const useLoginForm = (onSuccess) => {
  const { login } = useAuth();
  const loginMutation = useLoginMutation();
  const { handleAuthSuccess, handleAuthError } = useAuthNavigation();
  
  const formMethods = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });
  
  const { setError } = formMethods;

  const onSubmit = async (data) => {
    try {
        const result = await loginMutation.mutateAsync(data);
      
        if (result && result.access_token) {
            login(result);
            handleAuthSuccess(result.access_token);
            
            if (onSuccess) onSuccess();
        }
    } catch (error) {
        handleAuthError(setError, error);
    }
  };

  return {
    ...formMethods,
    onSubmit: formMethods.handleSubmit(onSubmit),
    isLoading: loginMutation.isPending,
  };
};