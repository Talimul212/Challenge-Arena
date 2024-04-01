/* eslint-disable no-undef */
import { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontFamily, primaryColor, secondaryColor } from "../../Color/Color"; // Import color and font family variables
import logo from "../../../assets/logo/BU.png";
import { IoMdLogOut } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import Drawer from "../Drawer/Drawer";
import DesktopBar from "../DesktopBar";
const Navbar = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const handleProfileClick = () => {
    setIsProfileVisible((prev) => !prev);
  };
  const menuRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const CloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <NavbarWrapper>
      <Container>
        <LogoContainer>
          <Image src={logo} alt={logo} />
        </LogoContainer>

        <DesktopBar />
        <MobileMenu onClick={toggleMobileMenu}>☰</MobileMenu>
        <Drawer
          CloseMobileMenu={CloseMobileMenu}
          menuRef={menuRef}
          mobileMenuOpen={mobileMenuOpen}
        />
        <Title>
          {" "}
          <span style={{ color: `${primaryColor}` }}>University</span>{" "}
          Instructor
        </Title>
        {/* <SearchBar>
          <input type="text" placeholder="Search" />
        </SearchBar> */}
        <AuthButtons>
          <ProfileIcon onClick={handleProfileClick} />
          <UserProfile isVisible={isProfileVisible}>
            <Button>
              <IoMdLogOut />
              Logout
            </Button>
            <Button>
              <Link to="/login" style={{ color: "black" }}>
                <Button>
                  <IoMdLogOut />
                  Login
                </Button>
              </Link>
            </Button>
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

const ProfileIcon = styled(BsThreeDotsVertical)`
  font-size: 24px;
  cursor: pointer;
  color: black;
  font-weight: 900;
`;

const UserProfile = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100px;
  margin-left: -50px;
  color: black;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 7px;
  margin-top: -8px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: all 0.3s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(10px)"}; /* Add transformation */
  @media (max-width: 768px) {
    margin-left: -130px;
    width: 150px;
  }
`;

const NavbarWrapper = styled.nav`
  background-color: transparent;
  margin-top: 10px;
  top: 0;
  left: 0;
  font-family: ${fontFamily};
`;
const Title = styled.h4`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: black;
    font-family: ${fontFamily};
    cursor: pointer;
    font-size: 18px;
  }
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
  @media (max-width: 768px) {
    display: none;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: black;
    background-color: white;
    padding: 10px;

    top: 20px; /* Adjust as needed */
    left: 20px; /* Adjust as needed */
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  font-size: 15px;
  font-weight: 600;
  color: ${primaryColor};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: black; /* Change text color on hover */
  }
`;
