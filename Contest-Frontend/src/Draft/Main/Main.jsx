import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
