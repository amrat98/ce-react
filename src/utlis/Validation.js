export const validateEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const validatePhone = (phone) => {
  return /^\d{10}$/.test(phone);
};

export const validatePassword = (password) => {
  // Define password requirements using regular expressions
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  // Check if the password meets the criteria
  const isValidLength = password.length >= minLength;
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  return (
    isValidLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar
  );
};

export const validateName = (name) => {
  return /^[a-zA-Z\s]+$/.test(name);
};
