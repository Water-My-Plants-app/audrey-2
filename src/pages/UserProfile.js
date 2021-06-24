// Authenticated user can update their phoneNumber and password.
import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import styled from 'styled-components';
import {
    Input,
    Button,
    Heading,
} from '../styles/StyledComponents'

import userProfileSchema from '../validation/userProfileSchema';

const initialUserProfileFormValues = {
    phoneNumber: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
}

const initialFormValues = {
    fullname: '',
    username: '',
    phonenumber: '',
    password: '',
    password2: '',
    termsOfService: false
}

let initialDisabled = "true";

const initialFormErrors = {
    phoneNumber: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
}

const CurrentProfile = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: .5rem 0;
  margin: 1rem auto;
  background-color: #C1FFA6;
  color: #000;
  border: 1px solid grey;
  border-radius: 2rem;
  -webkit-box-shadow:0 .5rem .5rem grey;
  -moz-box-shadow:0 .5rem .5rem grey;
  box-shadow:0 1rem 1rem grey;
`;

const FormSection = styled.div`
 display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  padding: 1rem 0;
  margin: 2rem auto;
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
    const [UserProfileFormValues, setUserProfileFormValues] = useState(initialUserProfileFormValues);
    const [updatedUserProfileObject, setupdatedUserProfile] = useState({ initialFormValues })
    const [disabled, setDisabled] = useState(initialDisabled)
    const [formErrors, setFormErrors] = useState(initialFormErrors) // object

    // onchange -- set values
    const onChange = e => {

        let name = e.target.name;

        // Validation
        yup.reach(userProfileSchema, name)
            .validate(e.target.value)
            .then(() => {
                setFormErrors({ ...formErrors, [name]: "" })
            })
            .catch(err => {
                setFormErrors({ ...formErrors, [name]: err.message })
            })


        setUserProfileFormValues({
            ...UserProfileFormValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {

        alert(`Your information has been updated!`)
        //*******//Needs to send information to database//********//
        setupdatedUserProfile({
            ...updatedUserProfileObject,
            phonenumber: UserProfileFormValues.phoneNumber,
            password: UserProfileFormValues.newPassword
        })
        console.log(updatedUserProfileObject);
        setUserProfileFormValues(initialUserProfileFormValues);

    }


    useEffect(() => {
        // ADJUST THE STATUS OF `disabled` EVERY TIME values CHANGE
        userProfileSchema.isValid(UserProfileFormValues)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [UserProfileFormValues])


    return (<div>
        <Heading>Your Profile</Heading>
        <CurrentProfile >

            {/***** pull in current userInfo from database******/}
            <p>Name: </p>
            <p>Username:</p>
            <p>Password:</p>
            <p>Phone Number:</p>
        </CurrentProfile>
        <section>
            <Heading>Update Your Profile</Heading>
            <FormSection>
                <form onSubmit={handleSubmit}>
                    <div>

                        <div>
                            <label>
                                <Input
                                    value={UserProfileFormValues.phoneNumber}
                                    onChange={onChange}
                                    name='phoneNumber'
                                    type='number'
                                    placeholder="Phone Number"
                                />
                            </label>
                        </div>


                        <div></div>
                        <div>
                            <label>
                                <Input
                                    value={UserProfileFormValues.currentPassword}
                                    onChange={onChange}
                                    name='currentPassword'
                                    type='text'
                                    placeholder="Current Password"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <Input
                                    value={UserProfileFormValues.newPassword}
                                    onChange={onChange}
                                    name='newPassword'
                                    type='text'
                                    placeholder="New Password"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <Input
                                    value={UserProfileFormValues.confirmNewPassword}
                                    onChange={onChange}
                                    name='confirmNewPassword'
                                    type='text'
                                    placeholder="Confirm Your Password"
                                />
                            </label>

                        </div>
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