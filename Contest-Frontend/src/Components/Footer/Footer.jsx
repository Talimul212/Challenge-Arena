import styled from "styled-components";
import { primaryColor } from "../Color/Color";

const FooterContainer = styled.footer`
  background-color: ${primaryColor}; /* ChallengeArena website color */
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const SocialIconItem = styled.li`
  margin: 0 10px;
  font-size: 24px;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #f5f5f5; /* Light gray color for hover */
    }
  }
`;

const AdditionalInfo = styled.p`
  margin: 10px 0;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIconItem>
          <a href="#" target="_blank" rel="noopener noreferrer">
            &#xf09a; {/* Unicode Facebook icon */}
          </a>
        </SocialIconItem>
        <SocialIconItem>
          <a href="#" target="_blank" rel="noopener noreferrer">
            &#xf099; {/* Unicode Twitter icon */}
          </a>
        </SocialIconItem>
        <SocialIconItem>
          <a href="#" target="_blank" rel="noopener noreferrer">
            &#xf16d; {/* Unicode Instagram icon */}
          </a>
        </SocialIconItem>
        <SocialIconItem>
          <a href="#" target="_blank" rel="noopener noreferrer">
            &#xf08c; {/* Unicode LinkedIn icon */}
          </a>
        </SocialIconItem>
      </SocialIcons>
      <AdditionalInfo>
        &copy; 2023 ChallengeArena. All rights reserved.
      </AdditionalInfo>
    </FooterContainer>
  );
};

export default Footer;
