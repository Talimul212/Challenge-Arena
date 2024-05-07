/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { sideBarData } from "../../../demoData";
const Left = () => {
  return (
    <div className="drawer-side  ">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu px-0 py-4 w-56 min-h-full border-r-[1px] text-base-content">
        {sideBarData.map((item, i) => (
          <Link key={item.id} to={item.route}>
            <div className="flex justify-start py-1 pb-2 border-[#aaa3a3] duration-300 border-b-[1px] gap-6  ps-4 hover:bg-[#00bf63] hover:text-white w-full text-gray-800  items-center">
              <div>{item.icon}</div>
              <div className="text-lg font-[500]">{item.title}</div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Left;
