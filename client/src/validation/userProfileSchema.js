// Here goes the schema for the form
import * as yup from 'yup';



const userProfileSchema = yup.object().shape({
    username: yup
        .string()
        .required("Enter a new username"),
    // phoneNumber: yup.number()
    //     .typeError("That doesn't look like a phone number")
    //     .positive("A phone number can't start with a minus")
    //     .integer("A phone number can't include a decimal point")
    //     .min(8,)
    //     .required('A phone number is required'),
    // currentPassword: yup
    //     .string()
    //     .required("What is your current password"),
    // newPassword: yup
    //     .string()
    //     .min(4)
    //     .max(14)
    //     .required("You must supply a new password"),
    // confirmNewPassword: yup
    //     .string()
    //     .oneOf([yup.ref("newPassword")], null)
    //     .required("You Must confirm your password"),
})

export default userProfileSchema;