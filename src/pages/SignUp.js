import React, { useState } from "react";
import styled from "styled-components";

import { 
  Input,
  Heading,
  FormDiv,
  Button ,
  Error
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

  const [form, setForm] = useState(initialFormValues);
  const [error, /*setError*/] = useState(''); //commented for unused variable warning.

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    if (event.target.name === 'termsOfService') {
      setForm({
        ...form,
        termsOfService: !form.termsOfService
      })
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submiting", form)
  }

  return (
    <>
      <Heading>Sign Up</Heading>
      <FormDiv onSubmit={handleSubmit}>
          {error ? <Error></Error> : undefined}

        <Input type="text" name="fullname" placeholder="Name" onChange={handleChange} value={form.fullname} />

          {error ? <Error></Error> : undefined}

        <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={form.username} />

          {error ? <Error></Error> : undefined}

        <Input type="text" name="phonenumber" placeholder="Phone number" onChange={handleChange} value={form.phonenumber} />

          {error ? <Error></Error> : undefined}
        
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} />

          {error ? <Error></Error> : undefined}

        <Input type="password" name="password2" placeholder="Confirm password" onChange={handleChange} value={form.password2} />

          {error ? <Error></Error> : undefined}

        <Label>
          <Input
            type="checkbox"
            name="termsOfService"
            checked={form.termsOfService}
            onChange={handleChange}
          />
          <span>Terms of Service</span>
        </Label>
        <Button type="submit">Sign Up</Button>
      </FormDiv>
    </>
  );
};

export default SignUp;