/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { sideBarData } from "../../../demoData";
import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Left = () => {
  const [min, setmin] = useState(false);
  const handlerwigth = () => {
    setmin(!min);
  };
  return (
    <div className=" flex  justify-start items-center">
      <div
        className={`menu px-0 h-[100vh] py-4 ${
          min ? "w-48 duration-500" : "w-16 duration-500"
        } w-62 bg-[#00bf63]  min-h-full border-r-[1px] `}
      >
        {sideBarData.map((item, i) => (
          <Link key={item.id} to={item.route}>
            <div className="flex justify-start py-2 pb-2  duration-300  gap-6 text-white  ps-4 hover:text-[#00bf63] hover:bg-white w-full  items-center">
              <div title={item.title}>{item.icon}</div>
              {min ? <div className=" font-[500]">{item.title}</div> : ""}
            </div>
          </Link>
        ))}
      </div>
      <div
        onClick={handlerwigth}
        className=" text-white rounded-e-full bg-[#00bf63] ms-[-1px]  mt-28"
      >
        <MdKeyboardDoubleArrowRight size={24} />
      </div>
    </div>
  );
};

export default Left;
