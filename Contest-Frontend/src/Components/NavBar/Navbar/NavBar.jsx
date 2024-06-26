/* eslint-disable no-undef */
import { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fontFamily, primaryColor, secondaryColor } from "../../Color/Color"; // Import color and font family variables
import logo from "../../../assets/logo/BU.png";
import { IoMdLogOut } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Drawer from "../Drawer/Drawer";
import DesktopBar from "../DesktopBar";
import TitlePath from "../TitlePath/TitlePath";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../features/auth/service";
import TutorsModal from "../../Modal/TutorsModal";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const handleProfileClick = () => {
    setIsProfileVisible((prev) => !prev);
  };
  const menuRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const CloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const hanlerLogOut = async () => {
    await logOut(dispatch, () => navigate("/login"));
  };

  return (
    <NavbarWrapper className={`${path == "/buI/bloodBank" ? "" : "mt-[10px]"}`}>
      <Container
        className={`${
          path === "/buI/bloodBank" ? "bg-[#38b6ff] pt-[10px]" : ""
        }`}
      >
        <LogoContainer>
          <Image src={logo} alt={logo} />
        </LogoContainer>

        <DesktopBar />
        <MobileMenu onClick={toggleMobileMenu}>☰</MobileMenu>
        <Drawer
          CloseMobileMenu={CloseMobileMenu}
          menuRef={menuRef}
          mobileMenuOpen={mobileMenuOpen}
          currentUser={currentUser}
        />
        <TitlePath />
        {/* <SearchBar>
          <input type="text" placeholder="Search" />
        </SearchBar> */}
        <AuthButtons>
          {path === "/buI/tuition" ? (
            <IoMdAdd onClick={handleToggle} className="me-3" size={"23px"} />
          ) : (
            ""
          )}
          <ProfileIcon onClick={handleProfileClick} />

          <UserProfile isVisible={isProfileVisible}>
            <div className=" flex items-center justify-between py-3">
              <div>
                {currentUser ? (
                  <ButtonLogOut onClick={hanlerLogOut}>
                    <IoMdLogOut />
                    Logout
                  </ButtonLogOut>
                ) : (
                  <Button>
                    <Link to="/login" style={{ color: "black" }}>
                      <Button>
                        <IoMdLogOut />
                        Login
                      </Button>
                    </Link>
                  </Button>
                )}
              </div>
              <div>
                <IoIosArrowRoundForward
                  className="mt-2"
                  size={"25px"}
                  color={primaryColor}
                  onClick={handleProfileClick}
                />
              </div>
            </div>
          </UserProfile>
        </AuthButtons>
      </Container>
      <TutorsModal handleClose={handleClose} isOpen={isOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;

const AuthButtons = styled.div`
  display: flex;
  position: relative;
`;

const ProfileIcon = styled(BsThreeDotsVertical)`
  font-size: 24px;
  cursor: pointer;
  color: black;
  font-weight: 900;
`;

const UserProfile = styled.div`
  display: flex;
  position: absolute;
  top: calc(100% + 0px);
  right: 0px;
  width: 260px;
  color: black;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 7px;
  margin-top: -35px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: all 0.3s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(10px)"}; /* Add transformation */
  @media (max-width: 768px) {
    margin-left: -130px;
    width: 170px;
  }
`;

const NavbarWrapper = styled.nav`
  background-color: transparent;
  top: 0;
  left: 0;
  font-family: ${fontFamily};
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

const ButtonLogOut = styled.button`
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
