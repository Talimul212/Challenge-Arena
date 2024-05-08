import { Outlet } from "react-router-dom";
import Top from "../../Components/Bars/Top/Top";
import Left from "../../Components/Bars/Left/Left";

const Root = () => {
  return (
    <div className="bg-[#5756560a]">
      <Top />
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle bg-black w-80"
        />

        <div className="drawer-content flex flex-col  mt-5">
          <Outlet></Outlet>
          {/* Page content here */}
        </div>
        <Left />
      </div>
    </div>
  );
};

export default Root;
