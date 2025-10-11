import * as yup from "yup";

export const userValidationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must not exceed 50 characters"),

  email: yup
    .string()
    .required("Email address is required")
    .email("Please enter a valid email address"),

  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters")
    .max(100, "Address must not exceed 100 characters"),

  city: yup
    .string()
    .required("City is required")
    .min(2, "City must be at least 2 characters")
    .max(30, "City must not exceed 30 characters"),

  country: yup
    .string()
    .required("Country is required")
    .min(2, "Please select a country"),
});

export type UserFormData = yup.InferType<typeof userValidationSchema>;
