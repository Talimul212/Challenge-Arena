/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ClassCard from "../../../Components/Card/ClassCard";
import FourCard from "../../../Components/Card/FourCard";
import QuoteBanner from "../../../Components/Banner/QuoteBanner";

const Home = () => {
  return (
    <Section>
      <Container>
        <Profile />
        <QuoteBanner />
        <ClassCard />
        <FourCard />
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
