import styled, { keyframes } from "styled-components";

// Replace 'banner-image.jpg' with the path to your actual banner image

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src={bannerImageUrl} alt="Banner" />
      <WelcomeMessage>
        <h2>Welcome to ChallengeArena</h2>
        <p>Explore and participate in exciting contests!</p>
      </WelcomeMessage>
    </BannerContainer>
  );
};

export default Banner;
const bannerImageUrl =
  "https://thumbs.dreamstime.com/b/contact-us-word-wooden-cubes-written-188527602.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
  height: 400px; /* Adjust the height as needed */
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeIn} 2s ease-in-out; /* Add a fade-in animation */
`;

const WelcomeMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  animation: ${fadeIn} 2s 1s ease-in-out; /* Add a delay for the fade-in effect */
`;
