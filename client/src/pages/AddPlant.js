// Authenticated user can Create, Update and Delete a plant object. At a minimum, each plant must have the following properties:
// id: Integer
// nickname: String
// species : String
// h2oFrequency: Type determined by implementation
// image: (optional)

import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import styled from 'styled-components';
import {
    Input,
    Button,
    Heading,
} from '../styles/StyledComponents'

import addPlantSchema from '../validation/addPlantSchema';

const initialPlantValues = {
    id: '',
    nickName: '',
    species: '',
    h2oFrequency: '',
}

let initialDisabled = "true";

const initialFormErrors = {
    id: '',
    nickName: '',
    species: '',
    h2oFrequency: '',
    image: '',
}

const FormSection = styled.div`
 display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  padding: 1rem 0;
  margin: 1rem auto;
  background-color: #C1FFA6;
  color: #000;
  border: 1px solid grey;
  border-radius: 2rem;
  -webkit-box-shadow:0 .5rem .5rem grey;
  -moz-box-shadow:0 .5rem .5rem grey;
  box-shadow:0 1rem 1rem grey;
`;

const ErrorDiv = styled.div`
    color: red;
`;


// pull in errors or create them here
export default function UserProfile() {
    const [addPlantFormValues, setaddPlantFormValues] = useState(initialPlantValues);
    const [disabled, setDisabled] = useState(initialDisabled)
    const [formErrors, setFormErrors] = useState(initialFormErrors) // object

    // onchange -- set values
    const onChange = e => {

        let name = e.target.name;

        // Validation
        yup.reach(addPlantSchema, name)
            .validate(e.target.value)
            .then(() => {
                setFormErrors({ ...formErrors, [name]: "" })
            })
            .catch(err => {
                setFormErrors({ ...formErrors, [name]: err.message })
            })


        setaddPlantFormValues({
            ...addPlantFormValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert(`You have added a new Plant!`)
        //*******//Needs to send information to database//********//

        console.log(addPlantFormValues);

        setaddPlantFormValues(initialPlantValues);
    }


    useEffect(() => {
        // ADJUST THE STATUS OF `disabled` EVERY TIME values CHANGE
        addPlantSchema.isValid(addPlantFormValues)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [addPlantFormValues])


    return (<div>
        <section>
            <Heading>Add a Plant</Heading>
            <FormSection>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <Input
                                value={addPlantFormValues.nickName}
                                onChange={onChange}
                                name='nickName'
                                type='text'
                                placeholder="Nick Name"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <Input
                                value={addPlantFormValues.species}
                                onChange={onChange}
                                name='species'
                                type='text'
                                placeholder="Species"
                            />
                        </label>
                    </div>
                    <div>

                        <label>
                            <Input
                                value={addPlantFormValues.h2oFrequency}
                                onChange={onChange}
                                name='h2oFrequency'
                                type='text'
                                placeholder="Water How Often?"
                            />
                        </label>
                        <label>
                            <Input
                                value={addPlantFormValues.h2oFrequency}
                                onChange={onChange}
                                name='h2oFrequency'
                                type='text'
                                placeholder="Water How Often?"
                            />
                        </label>
                    </div>
                    <Button type="submit" disabled={disabled}>Update</Button>
                    <ErrorDiv>{formErrors.phoneNumber}</ErrorDiv>
                    <ErrorDiv>{formErrors.currentPassword}</ErrorDiv>
                    <ErrorDiv>{formErrors.newPassword}</ErrorDiv>
                    <ErrorDiv>{formErrors.confirmNewPassword}</ErrorDiv>
                </form>
            </FormSection>
        </section>
    </div>)
}