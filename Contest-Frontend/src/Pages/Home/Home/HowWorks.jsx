import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HowItWorksContainer = styled.div`
  margin: 20px;
  animation: ${fadeInUp} 1s ease-in-out;
`;

const StepContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StepNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

const StepContent = styled.div`
  flex: 1;
`;

const HowWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create an account on ChallengeArena to get started.",
    },
    {
      number: 2,
      title: "Explore Contests",
      description:
        "Browse through various contest categories and find the ones that interest you.",
    },
    {
      number: 3,
      title: "Participate",
      description:
        "Join contests, showcase your skills, and compete with others.",
    },
    {
      number: 4,
      title: "View Results",
      description:
        "Check the results and see how you performed in the contests.",
    },
  ];

  return (
    <HowItWorksContainer>
      <h2>How It Works</h2>
      {steps.map((step, index) => (
        <StepContainer key={index}>
          <StepNumber>{step.number}</StepNumber>
          <StepContent>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </StepContent>
        </StepContainer>
      ))}
    </HowItWorksContainer>
  );
};

export default HowWorks;
