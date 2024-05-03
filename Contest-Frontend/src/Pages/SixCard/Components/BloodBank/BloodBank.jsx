import { RiUserHeartFill } from "react-icons/ri";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { LuBookPlus } from "react-icons/lu";
import BloodsCard from "../../../../Components/Card/BloodsCard";

const BloodBank = () => {
  return (
    <div className=" bg-[#5f5f5f0a] pb-20">
      <div className=" grid grid-cols-2 gap-5 pb-5 bg-[#38b6ff] px-3">
        <div className="bg-[#00000027] py-4 text-white flex  rounded flex-col justify-center items-center">
          <RiUserHeartFill size={"40px"} />
          Find Doners
        </div>
        <div className="bg-[#00000027] cursor-pointer py-4 text-white flex rounded flex-col justify-center items-center">
          <BiSolidDonateBlood size={"40px"} />
          Request Blood
        </div>
        <div className="bg-[#00000027] cursor-pointer py-4 text-white flex rounded flex-col justify-center items-center">
          <FaHandsHelping size={"40px"} />
          My profile
        </div>
        <div className="bg-[#00000027] cursor-pointer py-4 text-white flex rounded flex-col justify-center items-center">
          <LuBookPlus size={"40px"} />
          Blood:facts
        </div>
      </div>
      <div className=" p-4">
        <p className="font-bold text-black text-lg  ">Blood Requests</p>
      </div>
      <div className="bg-white mt-2 mx-3 shadow rounded-md">
        <BloodsCard />
      </div>
      <div className="bg-white mt-2 mx-3 shadow rounded-md">
        <BloodsCard />
      </div>
      <div className="bg-white mt-2 mx-3 shadow rounded-md">
        <BloodsCard />
      </div>
      <div className="bg-white mt-2 mx-3 shadow rounded-md">
        <BloodsCard />
      </div>
      <div className="bg-white mt-2 mx-3 shadow rounded-md">
        <BloodsCard />
      </div>
    </div>
  );
};

export default BloodBank;
