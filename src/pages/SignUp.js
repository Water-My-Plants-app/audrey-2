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

  const [values, setValues] = useState(initialFormValues);
  const [error, /*setError*/] = useState(''); //commented for unused variable warning.

  const handleChange = (event) => {
    console.log(event.target)
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
    if (event.target.name === 'termsOfService') {
      setValues({
        ...values,
        termsOfService: !values.termsOfService
      })
    }
  }

  return (
    <>
      <Heading>Sign Up</Heading>
      <FormDiv>
          {error ? <Error></Error> : undefined}

        <Input type="text" name="fullname" placeholder="Name" onChange={handleChange} value={values.fullname} />

          {error ? <Error></Error> : undefined}

        <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={values.username} />

          {error ? <Error></Error> : undefined}

        <Input type="text" name="phonenumber" placeholder="Phone number" onChange={handleChange} value={values.phonenumber} />

          {error ? <Error></Error> : undefined}
        
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} />

          {error ? <Error></Error> : undefined}

        <Input type="password" name="password2" placeholder="Confirm password" onChange={handleChange} value={values.password2} />

          {error ? <Error></Error> : undefined}

        <Label>
          <Input
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
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