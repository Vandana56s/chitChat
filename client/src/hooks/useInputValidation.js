import { useState } from 'react';

const useInputValidation = (initialValue, validator = () => ({ isValid: true, errorMessage: '' })) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    const validation = validator(newValue);
    if (!validation.isValid) {
      setError(validation.errorMessage);
    } else {
      setError('');
    }
  };

  return {
    value,
    error,
    changeHandler,
  };
};

export default useInputValidation;
