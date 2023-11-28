import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const excludeRoute = ["login", "register"];
  return (
    <div>
      {!excludeRoute.includes(path) && <NavBar />}
      <Outlet />
      {!excludeRoute.includes(path) && <Footer />}
    </div>
  );
};

export default Main;
