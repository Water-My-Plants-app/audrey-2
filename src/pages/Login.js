import React, { useState } from 'react';

import { 
  Input,
  Heading,
  FormDiv,
  Button,
  Error
} from '../styles/StyledComponents'

const Login = props => {

  const [form, setForm] = useState({username:'',password:''});
const [error/*, setError*/] = useState('') //commented for unused variable warning.

  const handleChange = (event) => {
    event.stopPropagation();
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted", form)
  }

  return (
    <>
      <Heading>Login</Heading>
      <FormDiv onSubmit={handleSubmit}>
          {error ? <Error>{error}</Error> : undefined}
        <Input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} />

          {error ? <Error></Error> : undefined}
        <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />

        <Button type="submit">Login</Button>
      </FormDiv>
    </>
  );
};

export default Login;
