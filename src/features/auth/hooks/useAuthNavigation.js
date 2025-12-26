import { useNavigate } from 'react-router-dom';


export const useAuthNavigation = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = (token, redirectPath = '/') => {
    // بما أننا قمنا بحفظ الكائن الكامل (user + token) في useLoginForm
    // فنحن هنا فقط نقوم بالتوجيه (Navigate). 
    // ولكن إذا أردتِ التأكد من حفظ التوكن فقط احتياطياً:
    // userStorage.save({ ...userStorage.get(), access_token: token });
    
    navigate(redirectPath);
  };

  const handleAuthError = (setError, error, field = 'email') => {
    // استخراج رسالة الخطأ سواء كانت نصاً أو كائناً قادماً من السيرفر
    const errorMessage = typeof error === 'string' ? error : (error.message || 'Authentication failed');
    
    setError(field, { 
      message: errorMessage 
    });
  };

  return {
    handleAuthSuccess,
    handleAuthError,
  };
};