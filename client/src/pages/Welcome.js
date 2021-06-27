import React from "react";
import styled from "styled-components";
import image from "../assets/sapling.png";
import { Heading } from "../styles/StyledComponents";
import { connect } from 'react-redux';

const WelcomeDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Image = styled.img`
  max-width: 90%;
`;

export default function Welcome() {
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');

  return (
    <WelcomeDiv>
      {token ? (<Heading>{`Welcome ${userName}`}</Heading>) : (<Heading>Welcome</Heading>)}
      <h2>Let's Grow Your Garden</h2>
      <Image src={image} />
    </WelcomeDiv>
  );
}
