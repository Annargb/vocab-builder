import * as Yup from "yup";

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordPattern = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(
      emailPattern,
      "Please enter a valid email. For example jane@mail.com"
    ),

  password: Yup.string()
    .trim()
    .required("Password is required")
    .matches(
      passwordPattern,
      "The password must consist of 6 English letters and 1 number"
    ),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .min(2, "Name must contain at least 2 characters")
    .max(40, "Too long name"),

  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(
      emailPattern,
      "Please enter a valid email! For example jane@mail.com"
    ),

  password: Yup.string()
    .trim()
    .required("Password is required")
    .matches(
      passwordPattern,
      "The password must consist of 6 English letters and 1 number"
    ),
});
