import { Outlet } from "react-router-dom";
import Top from "../../Components/Bars/Top/Top";
import Left from "../../Components/Bars/Left/Left";
import "../../index.css";
const Root = () => {
  return (
    <div className=" ">
      <Top />
      <div className="drawer lg:drawer-open pt-[70px] ps-[90px]">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle  w-80 "
        />

        <div className="drawer-content flex flex-col  mt-5 ">
          <Outlet></Outlet>
        </div>
        <Left />
      </div>
    </div>
  );
};

export default Root;
