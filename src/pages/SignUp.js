import React from "react";
import styled from "styled-components";

import { 
  Input,
  Heading,
  FormDiv,
  Button ,
  Error
} from '../styles/StyledComponents'

const Label = styled.label`
  margin: 1rem auto;
`;

const SignUp = props => {
  const { errors, touched, values } = props;
  return (
    <>
      <Heading>Sign Up</Heading>
      <FormDiv>
        {touched.fullname && errors.fullname && (
          <Error>{errors.fullname}</Error>
        )}
        <Input type="text" name="fullname" placeholder="Name" />

        {touched.username && errors.username && (
          <Error>{errors.username}</Error>
        )}
        <Input type="text" name="username" placeholder="Username" />

        {touched.phonenumber && errors.phonenumber && (
          <Error>{errors.phonenumber}</Error>
        )}
        <Input type="text" name="phonenumber" placeholder="Phone number" />

        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        <Input type="password" name="password" placeholder="Password" />

        {touched.password2 && errors.password2 && (
          <Error>{errors.password2.slice(49, 69)}</Error>
        )}
        <Input type="password" name="password2" placeholder="Confirm password" />

        {touched.termsOfService && errors.termsOfService && (
          <Error>{errors.termsOfService.slice(58, 96)}</Error>
        )}
        <Label>
          <Input
            type="checkbox"
            name="TermsOfService"
            checked={values.termsOfService}
          />
          <span>Terms of Service</span>
        </Label>
        <Button type="submit">Sign Up</Button>
      </FormDiv>
    </>
  );
};

export default SignUp;