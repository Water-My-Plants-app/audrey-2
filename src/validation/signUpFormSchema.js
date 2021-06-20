import * as yup from 'yup';

export default yup.object().shape({
    fullname: yup.string().required("Required Field."),
    username: yup.string().required("Need a Username"),
    phonenumber: yup.number().required().positive().integer(),
    password: yup.string().required("Password Required."),
    password2: yup.string().required("Password2 Required."),
    termsOfService: yup.boolean().oneOf([true], "Accept Terms of Service.")
})