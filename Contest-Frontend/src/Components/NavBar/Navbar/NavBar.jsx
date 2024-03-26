import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { fontFamily, secondaryColor } from "../../Color/Color"; // Import color and font family variables
import logo from "../../../assets/logo/BU.png";
const Navbar = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleProfileClick = () => {
    setIsProfileVisible((prev) => !prev);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarWrapper>
      <Container>
        <LogoContainer>
          <Image src={logo} alt={logo} />
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
          <ProfileIcon onClick={handleProfileClick} />
          <UserProfile isVisible={isProfileVisible}>
            <Link to="/login" style={{ color: "black" }}>
              Login
            </Link>
            <Link to="/register" style={{ color: "black", marginTop: "10px" }}>
              Register
            </Link>
          </UserProfile>
        </AuthButtons>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;

const AuthButtons = styled.div`
  position: relative;
`;

const ProfileIcon = styled(CgProfile)`
  font-size: 24px;
  cursor: pointer;
  color: black;
  font-weight: 900;
`;

const UserProfile = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100px;
  margin-left: -50px;
  color: black;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: all 0.3s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(10px)"}; /* Add transformation */
`;

const NavbarWrapper = styled.nav`
  background-color: transparent;

  width: 100vw;
  top: 0;
  left: 0;
  font-family: ${fontFamily};
  padding: 10px;
`;
const Image = styled.img`
  height: 100px;
  width: 100px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: black;
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
      color: black;
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
  background-color: none;
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

  @media (max-width: 768px) {
    /* Adjust the breakpoint as needed */
    display: none; /* Hide the SearchBar in mobile view */
  }
`;
