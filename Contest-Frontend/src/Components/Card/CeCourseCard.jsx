/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import CeCourseM from "../Modal/CeCourseM";

const CeCourseCard = ({ course }) => {
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
        className=" rounded-lg   flex justify-between items-center bg-white shadow-md border-[1px] mb-4"
      >
        <div className="gap-4 flex items-center">
          <div className="font-bold rounded-s-lg flex justify-center items-center  text-lg bg-[#00bf63]  h-[11vh] w-[10vw] text-white">
            <p className="text-center">
              {course.semesterCompleted}
              <br />
              (th)
            </p>
          </div>
          <div className=" p-3">
            <h3 className="font-bold text-sm">{course.courseName}</h3>
            <div className="text-xs">
              <p className="my-1">{course.teacherName}</p>
              <p>{course.type}</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="text-[#38b6ff]  p-3 hover:text-black"
        >
          <FaEye />
        </button>
      </div>

      <CeCourseM course={course} handleClose={handleClose} isOpen={isOpen} />
    </div>
  );
};

export default CeCourseCard;
