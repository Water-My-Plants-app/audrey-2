import * as yup from 'yup';

export default yup.object().shape({
    username: yup.string().required("Need a username."),
    password: yup.string().required("Need a password.")
})