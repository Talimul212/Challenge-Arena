import { Outlet } from "react-router-dom";
import Top from "../../Components/Bars/Top/Top";
import Left from "../../Components/Bars/Left/Left";

const Root = () => {
  return (
    <div>
      <Top />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          {/* Page content here */}
        </div>
        <Left />
      </div>
    </div>
  );
};

export default Root;
