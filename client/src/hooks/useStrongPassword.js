import useInputValidation from './useInputValidation';

const useStrongPassword = (initialValue) => {
  const passwordValidator = (password) => {
    if (password.length < 8) {
      return { isValid: false, errorMessage: 'Password must be at least 8 characters long' };
    }
    return { isValid: true, errorMessage: '' };
  };

  return useInputValidation(initialValue, passwordValidator);
};

export default useStrongPassword;
