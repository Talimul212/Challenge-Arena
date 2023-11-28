/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import ContestCategories from "./ContestCategories";
import FeaturedContests from "./FeaturedContests";
import AboutSection from "./AboutSection";
import HowWorks from "./HowWorks";
import Testimonials from "./Testimonials";
import LatestResults from "./LatestResults";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <Section>
      <Container>
        <Banner />
        <ContestCategories />
        <FeaturedContests />
        <AboutSection />
        <HowWorks />
        <Testimonials />
        <LatestResults />
        <ContactUs />
      </Container>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  background-color: #f5f5f5; /* Set the background color to your preference */
  padding: 40px;
`;

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
