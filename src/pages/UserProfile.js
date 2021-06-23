// Authenticated user can update their phoneNumber and password.
import React, { useState } from 'react'
import * as yup from 'yup';
import styled from 'styled-components';


// pull in errors or create them here
export default function UserProfile() {
    const [UserProfileFormValues, setUserProfileFormValues] = useState();
    const [updatedUserProfileObject, setupdatedUserProfile] = useState({})

    // onchange -- set values
    const onChange = e => {

        console.log(e.target.value);


        // needs fixed....use spread operator to use current user object from signup
        setupdatedUserProfile();
    }



    return (<div>
        <h1>Your Profile</h1>
        {/* pull in current userInfo from database */}
        <p>Name: </p>
        <p>Username:</p>
        <p>Username:</p>
        <p>Password:</p>
        <p>Phone Number:</p>


        <h3>Update Your Phone Number</h3>
        <label>Phone:&nbsp;
            <input
                value=""
                onChange={onChange}
                name='phone'
                type='number'
            />
        </label>

        <h3>Update Your password</h3>
        <label>Current Password:&nbsp;
            <input
                value=""
                onChange={onChange}
                name='password'
                type='text'
            />
        </label>
        <label>New Password:&nbsp;
            <input
                value=""
                onChange={onChange}
                name='newPassword'
                type='text'
            />
        </label>
        <label>Confirm New Password:&nbsp;
            <input
                value=""
                onChange={onChange}
                name='confirmPassword'
                type='text'
            />
        </label>

    </div>)
}