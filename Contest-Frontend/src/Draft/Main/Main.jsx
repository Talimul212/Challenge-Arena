import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import BottomBar from "../../Components/BottomBar/BottomBar";
import styled from "styled-components";

const Main = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const excludeRoute = [
    "login",
    "register",
    "adsForm",
    "booksDetalis",
    "profile",
  ];
  return (
    <div>
      {!excludeRoute.includes(path) && <NavBar />}
      <Outlet />

      {!excludeRoute.includes(path) && (
        <MobileBar>
          <BottomBar />
        </MobileBar>
      )}
      {!excludeRoute.includes(path) && <Footer />}
    </div>
  );
};

export default Main;
const MobileBar = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;
