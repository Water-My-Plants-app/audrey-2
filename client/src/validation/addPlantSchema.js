import * as yup from 'yup';

const addPlantSchema = yup.object().shape({
    nickname: yup
        .string()
        .required('What is the name for your plant?'),
    species: yup
        .string()
        .required("What is the plant species"),
    h2o_frequency: yup
        .string()
        .required("How often does this plant need watered?")
})

export default addPlantSchema;