import * as yup from 'yup';

export default yup.object().shape({
    fullname: yup.string().required("Required Field."),
    username: yup.string().required("Need a Username."),
    phonenumber: yup.string().required("Need valid number").matches(/^[0-9]+$/, "Must be only digits")
    .min(10,"valid 10 digit number.")
    .max(10,"valid 10 digit number."),
    password: yup.string().required("Password Required."),
    password2: yup.string().required("Password2 Required."),
    termsOfService: yup.boolean().oneOf([true], "Accept Terms of Service.")
})