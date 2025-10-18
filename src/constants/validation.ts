import type { RegisterOptions } from "react-hook-form";

export const emailValidation: RegisterOptions = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
};

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/;

export const passwordValidation: RegisterOptions = {
  required: "Password is required",
  pattern: {
    value: passwordRegEx,
    message:
      "Password must be at least 4 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
  },
};

export const requiredField = (fieldName: string): RegisterOptions => ({
  required: `${fieldName} is required`,
});
