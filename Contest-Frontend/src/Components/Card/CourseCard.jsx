/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import CourseDetailsM from "../Modal/CourseDetailsM";
import { useState } from "react";

const CourseCard = ({ course, index }) => {
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
          <div className="font-bold text-lg bg-[#00bf63] rounded p-1 text-white">
            {index + 1}
          </div>
          <div>
            <h3 className="font-bold ">{course.courseName}</h3>
            <div className="text-xs">MD: {course.teacherName}</div>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="text-[#38b6ff] hover:text-black"
        >
          <FaEye />
        </button>
      </div>

      <CourseDetailsM
        course={course}
        handleClose={handleClose}
        isOpen={isOpen}
      />
    </div>
  );
};

export default CourseCard;
