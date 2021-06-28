// Authenticated user can update their phoneNumber and password.
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosCalls';
import * as yup from 'yup';
import styled from 'styled-components';
import '../App.css';
import {
    Input,
    Button,
    Heading,
} from '../styles/StyledComponents'

import userProfileSchema from '../validation/userProfileSchema';

const initialUserProfileFormValues = {
    username: '',
    // phoneNumber: '',
    // currentPassword: '',
    // newPassword: '',
    // confirmNewPassword: '',
}

const initialFormValues = {
    // fullname: 'Jimbo Jimbo',
    username: '',
    // phonenumber: '4404175555',
    // password: 'slimjim',
    // password2: 'slimjim',
    // termsOfService: false
}

const initialFormErrors = {
    id: '',
    username: '',
    // phonenumber: '',
    // currentPassword: '',
    // newPassword: '',
    // confirmNewPassword: '',
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

const ProfileHeading = styled(Heading)`
  padding-top: 1rem;
`;


// pull in errors or create them here
export default function UserProfile() {
    const [UserProfileFormValues, setUserProfileFormValues] = useState(initialUserProfileFormValues);
    const [updatedUserProfileObject, setupdatedUserProfile] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors) // object

    useEffect(() => {
        axiosWithAuth()
        .get('/api/users')
        .then(res => {
            const userObj = res.data.filter( item => item.username === localStorage.getItem('userName'))
            setupdatedUserProfile({
                ...updatedUserProfileObject,
                'username': userObj[0].username,
                'id': userObj[0].id,
            })
        })
        .catch(err => {
            console.log(err)
        })

    },[])
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

    // const showPWIncorrect = () => {
    //     const pwError = document.getElementById("pwError");
    //     pwError.classList.toggle("pwError");
    // }

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Your information has been updated!`)
        //*******//Needs to send information to database//********//
        //*******//Once PUT endpoint is created we'll be able to change on the back-end//********//

        setupdatedUserProfile({
            ...updatedUserProfileObject,
            username: UserProfileFormValues.username,
            // phonenumber: UserProfileFormValues.phoneNumber,
            // password: UserProfileFormValues.newPassword,
            // password2: UserProfileFormValues.confirmNewPassword,
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
        <ProfileHeading>Your Profile</ProfileHeading>
        <CurrentProfile >
            {/***** pull in current userInfo from database******/}
            {/* <p>Name: {updatedUserProfileObject.fullname} </p> */}
            <p>Username: {updatedUserProfileObject.username}</p>
            {/* <p>Password: {updatedUserProfileObject.password}</p>
            <p>Phone Number: {updatedUserProfileObject.phonenumber}</p> */}
        </CurrentProfile>
        <section>
            <ProfileHeading>Update Your Profile</ProfileHeading>
            <FormSection>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>
                            <Input
                                value={UserProfileFormValues.username}
                                onChange={onChange}
                                name='username'
                                type='text'
                                placeholder="New Username"
                            />
                        </label>
                    </div>
                    <ErrorDiv>{formErrors.username}</ErrorDiv>

            
                    {/* <div> *** COULD NOT USE ALL THESE INPUTS FOR CURRENT VERSION OF THIS APP.

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
                        <ErrorDiv>{formErrors.phoneNumber}</ErrorDiv> */}
                        {/* <div>
                            <label>
                                <Input
                                    value={UserProfileFormValues.currentPassword}
                                    onChange={onChange}
                                    name='currentPassword'
                                    type='password'
                                    placeholder="Current Password"
                                />
                            </label>
                        </div>
                        <ErrorDiv>{formErrors.currentPassword}</ErrorDiv>
                        {/* <ErrorDiv id="pwError" className="pwError">Password is not correct!</ErrorDiv> */}
                        {/* <div>
                            <label>
                                <Input
                                    value={UserProfileFormValues.newPassword}
                                    onChange={onChange}
                                    name='newPassword'
                                    type='password'
                                    placeholder="New Password"
                                />
                            </label>
                        </div>
                        <ErrorDiv>{formErrors.newPassword}</ErrorDiv>
                        <div>
                            <label>
                                <Input
                                    value={UserProfileFormValues.confirmNewPassword}
                                    onChange={onChange}
                                    name='confirmNewPassword'
                                    type='password'
                                    placeholder="Confirm Your Password"
                                />
                            </label>

                        </div>
                        <ErrorDiv>{formErrors.confirmNewPassword}</ErrorDiv> */}
                     {/* </div> */}
                    <Button type="submit" disabled={disabled}>Update</Button>

                </form>
            </FormSection>
        </section>
    </div>)
}