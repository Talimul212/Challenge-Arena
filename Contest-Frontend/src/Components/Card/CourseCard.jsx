import { FaEye } from "react-icons/fa";
import CourseDetailsM from "../Modal/CourseDetailsM";
import { useState } from "react";

const CourseCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full">
      <div
        role="alert"
        className="mt-5 p-3 rounded-lg  flex justify-between items-center bg-white shadow-lg border-[1px] mb-3"
      >
        <div className="gap-4 flex items-center">
          <div className="font-bold text-lg bg-green-300 rounded p-1 text-white">
            1
          </div>
          <div>
            <h3 className="font-bold ">numerical methods linear algebra</h3>
            <div className="text-xs">MD: Amir Shaddat</div>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className=" text-[#00bf63] hover:text-black "
        >
          <FaEye />
        </button>
        <CourseDetailsM handleClose={handleClose} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default CourseCard;
