export const useFormErrors = () => {
  const handleApiError = (setError, error, defaultField = 'email') => {
    if (error.field) {
      setError(error.field, { message: error.message });
    } else {
      setError(defaultField, { message: error.message || 'An error occurred' });
    }
  };

  const clearErrors = (clearErrors) => {
    clearErrors();
  };

  return {
    handleApiError,
    clearErrors,
  };
};