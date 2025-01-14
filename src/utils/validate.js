export const validateFormData = (name, email, password, isSignInForm) => {
  const validationResponse = (valid, message = "") => ({ valid, message });

  if (!isSignInForm) {
    const trimmedName = name.trim();
    if (!trimmedName) {
      return validationResponse(false, "Full Name is required.");
    }
    if (trimmedName.length < 2) {
      return validationResponse(
        false,
        "Full Name should be at least 2 characters long."
      );
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
      return validationResponse(
        false,
        "Full Name should only contain letters and spaces."
      );
    }
  }

  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    return validationResponse(false, "Email Address is required.");
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail)) {
    return validationResponse(false, "Please enter a valid email address.");
  }

  if (!password) {
    return validationResponse(false, "Password is required.");
  }
  if (password.length < 8) {
    return validationResponse(
      false,
      "Password should be at least 8 characters long."
    );
  }
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    )
  ) {
    return validationResponse(
      false,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
  }

  return validationResponse(true);
};
