import React, {useEffect, useState} from "react";
import styled from "styled-components";
import * as yup from 'yup';
import schema from '../validation/signUpFormSchema';
import { connect } from 'react-redux';
import { POST_REGISTER } from '../actions';

import {
    Button,
    Error,
    FormDiv,
    Heading,
    Input
} from '../styles/StyledComponents';

const initialFormValues = {
    fullname: '',
    username: '',
    phonenumber: '',
    password: '',
    password2: '',
    termsOfService: false
}

const Label = styled.label`
  margin: 1rem auto;
`;

const SignUp = props => {
    console.log(props);
    const [form, setForm] = useState(initialFormValues);
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        schema.isValid(form)
            .then(valid => {
                setDisabled(!valid)
            })
    }, [form])

    const updateForm = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(res => {
                setError({
                    ...error,
                    [name]: ''
                })
            })
            .catch(err => {
                setError({
                    ...error,
                    [name]: err.errors[0]
                })
            })

        setForm({
            ...form,
            [name]: value
        })
    };

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        updateForm(name, valueToUse);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: form.username,
            password: form.password
        }
        console.log(user)
        props.postUser(user);
    }

    return (
        <>
            <Heading>Sign Up</Heading>
            <FormDiv onSubmit={handleSubmit}>
                {error.fullname ?
                    <Error>{error.fullname}</Error> : undefined}

                <Input type="text" name="fullname"
                       placeholder="Name"
                       onChange={handleChange}
                       value={form.fullname}/>

                {error.username ?
                    <Error>{error.username}</Error> : undefined}

                <Input type="text" name="username"
                       placeholder="Username"
                       onChange={handleChange}
                       value={form.username}/>

                {error.phonenumber ?
                    <Error>{error.phonenumber}</Error> : undefined}

                <Input type="text" name="phonenumber"
                       placeholder="Phone number"
                       onChange={handleChange}
                       value={form.phonenumber}/>

                {error.password ?
                    <Error>{error.password}</Error> : undefined}

                <Input type="password" name="password"
                       placeholder="Password"
                       onChange={handleChange}
                       value={form.password}/>

                {error.password2 ?
                    <Error>{error.password2}</Error> : undefined}

                <Input type="password" name="password2"
                       placeholder="Confirm password"
                       onChange={handleChange}
                       value={form.password2}/>

                {error.termsOfService ?
                    <Error>{error.termsOfService}</Error> : undefined}

                <Label>
                    <Input
                        type="checkbox"
                        name="termsOfService"
                        checked={form.termsOfService}
                        onChange={handleChange}
                    />
                    <span>Terms of Service</span>
                </Label>
                <Button disabled={disabled} type="submit">Sign
                    Up</Button>
            </FormDiv>
        </>
    );
};

const mapStateToProps = state => ({
    state: state,
});

const mapDispatchToProps = dispatch => ({
    postUser: () => dispatch({type: POST_REGISTER})
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);