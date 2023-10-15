import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontFamily, primaryColor, secondaryColor } from "../../Color/Color"; // Import color and font family variables

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarWrapper>
      <Container>
        <LogoContainer>
          <Link to="/">
            <LogoText>Challenge</LogoText>
            <LogoShape />
            <span>Arena</span>
          </Link>
        </LogoContainer>
        <Navigation>
          <li>
            <Link to="/contests">Contests</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/submissions">Submissions</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </Navigation>
        <MobileMenu onClick={toggleMobileMenu}>☰</MobileMenu>
        <MobileMenuList isOpen={mobileMenuOpen}>
          <li>
            <Link to="/contests">Contests</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/submissions">Submissions</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </MobileMenuList>
        <SearchBar>
          <input type="text" placeholder="Search" />
        </SearchBar>
        <AuthButtons>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </AuthButtons>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
const NavbarWrapper = styled.nav`
  background-color: ${primaryColor};
  position: fixed;
  z-index: 100;
  width: 100vw;
  top: 0;
  left: o;
  font-family: ${fontFamily};
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: white;
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${secondaryColor};
  font-family: Arial, sans-serif; /* Customize the font family */
  position: relative;
`;

const LogoText = styled.span`
  margin-right: 8px;
`;

const LogoShape = styled.span`
  content: "";
  display: block;
  width: 20px; /* Adjust the size as needed */
  height: 20px; /* Adjust the size as needed */
  background-color: #f5f5f5; /* Customize the color of the shape */
  border-radius: 50%; /* Makes it a circle */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -30px; /* Adjust the position as needed */
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  li {
    margin: 0 10px;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  background-color: ${primaryColor};
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 999;

  li {
    margin: 0;
    padding: 10px 20px;
    a {
      text-decoration: none;
      color: white;
      display: block;
    }
  }
`;

const SearchBar = styled.div`
  input {
    padding: 5px;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    color: white;
    display: block;
  }
`;
