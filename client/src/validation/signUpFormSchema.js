import * as yup from 'yup';

export default yup.object().shape({
    fullname: yup.string().required("Please enter your full name"),
    username: yup.string().required("Please enter a username"),
    phonenumber: yup.string().required("Need valid number").matches(/^[0-9]+$/, "Must be only digits")
    .min(10,"Please enter a valid 10 digit number")
    .max(10,"Please enter a valid 10 digit number"),
    password: yup.string().required("Password required"),
    password2: yup.string().required("Password confirmation required."),
    termsOfService: yup.boolean().oneOf([true], "Accept Terms of Service.")
})