/* eslint-disable react/no-unescaped-entities */
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutUsContainer = styled.div`
  margin: 20px;
  animation: ${slideIn} 1s ease-in-out;
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const AboutUsText = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const AboutUsImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AboutSection = () => {
  return (
    <AboutUsContainer>
      <h2>About Us</h2>
      <AboutUsContent>
        <AboutUsText>
          <p>
            Welcome to ChallengeArena! We are a passionate team dedicated to
            providing a platform for exciting contests and challenges in various
            fields. Whether you're interested in coding, design, mathematics, or
            general knowledge, we have something for everyone.
          </p>
          <p>
            Our mission is to foster a community of learners and enthusiasts,
            encouraging collaboration and creativity. Join us on this journey of
            exploration and skill-building.
          </p>
        </AboutUsText>
        <AboutUsImage
          src="https://educor.co.za/wp-content/uploads/2014/11/team.png" // Replace with actual image path
          alt="Our Team"
        />
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutSection;
