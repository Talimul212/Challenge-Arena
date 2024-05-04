import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
const BloodsCard = () => {
  return (
    <div className="px-4  py-3">
      <div className="flex gap-4">
        <span className="indicator-item bg-[#38b6ff]  p-4 rounded-xl indicator-center badge text-white">
          A+
        </span>

        <div>
          <>1 Bag (A-) blood Needed</>
          <p className=" text-xs text-gray-400">By talimul,Apr 18 at 4.55 Am</p>
          <div className=" text-sm text-gray-600 my-4">
            <p className="flex justify-start items-center gap-1">
              <CiLocationOn /> Bandarban{" "}
            </p>{" "}
            <p className="flex justify-start items-center gap-1">
              <IoMdTime /> Needed on Apr 19 10:00 AM{" "}
            </p>{" "}
          </div>
          <p className="text-sm  text-red-500">Required for a 2 day old baby</p>
        </div>
      </div>
      <div className="flex  justify-start items-center gap-3">
        <span className="  p-4  ">
          <CiShare2 size={22} />
        </span>
        <a
          className="w-[60vw] flex  py-1 text-sm justify-center items-center gap-3 bg-[#00bf63] text-white rounded-md "
          href="tel:01533956212"
        >
          <IoIosCall size={14} />
          01533956212
        </a>
      </div>
    </div>
  );
};

export default BloodsCard;
