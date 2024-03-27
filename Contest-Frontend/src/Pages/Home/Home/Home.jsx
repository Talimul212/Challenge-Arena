/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";
import Profile from "../Profile";

const Home = () => {
  return (
    <Section>
      <Container>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </Container>
    </Section>
  );
};

export default Home;

const Section = styled.section``;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column; /* Adjust as needed */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
`;
