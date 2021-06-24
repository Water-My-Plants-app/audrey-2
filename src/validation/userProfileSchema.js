// Here goes the schema for the form
import * as yup from 'yup';

const userProfileSchema = yup.object().shape({
    phoneNumber: yup
        .string()
        .required("You must update your phone number in order to submit")
        .min(7, "PhoneNumber must be at least 7 characters"),
    currentPassword: yup
        .string()
        .required("What is your current password"),
    newPassword: yup
        .string()
        .required("You must supply a new password"),
    confirmNewPassword: yup
        .string()
        .required("You Must confirm your password"),
})

export default userProfileSchema;