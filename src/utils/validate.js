export const validateFormData = (email, password) => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    // Password validation: At least one digit, one lowercase letter, one uppercase letter, and at least 8 characters long
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

    if (!emailValidation) return "Email is not valid"; // Return error if email validation fails
    if (!passwordValidation) return "Password is not valid"; // Return error if password validation fails
    return null; // No errors
}
