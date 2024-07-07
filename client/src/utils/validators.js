
export const usernameValidator = (username) => {
    const isValidUsername = /^[a-zA-Z0-9_]{3,20}$/;
    if (!isValidUsername.test(username)) {
      return { isValid: false, errorMessage: 'Username is invalid' };
    }
    return { isValid: true, errorMessage: '' };
  };
  