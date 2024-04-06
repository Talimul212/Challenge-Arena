/* eslint-disable react/prop-types */
import { CiCircleRemove } from "react-icons/ci";
import {
  BottomBarItemCE,
  DivCE,
  ModalBodyCE,
  ModalContainerCE,
  ModalContentCE,
} from "../GobalStyle/GobalStyle";

const CeCourseM = ({ isOpen, handleClose, course }) => {
  return (
    <div>
      <div>
        {isOpen && (
          <ModalContainerCE>
            <ModalContentCE>
              <ModalBodyCE>
                <DivCE>
                  <BottomBarItemCE>
                    <p className=" mt-3 text-[13px] text-black font-extrabold text-center">
                      Course Name:{" "}
                      <span className="block bg-[#38b6ff] text-white px-2 py-1 rounded">
                        {course.courseName}
                      </span>
                    </p>

                    <p className="text-black font-semibold text-[12px] mt-5 ">
                      Teacher:
                      <span className=" ms-2 bg-[#38b6ff] text-white px-2 py-1 rounded">
                        {course.teacherName}
                      </span>
                    </p>
                    <div className="flex justify-between mt-5 ">
                      <p className="text-[12px] text-black font-semibold">
                        Course Code:{" "}
                        <span className=" ms-2  bg-[#38b6ff] text-white px-2 py-1 rounded">
                          {course.courseCode}
                        </span>
                      </p>
                      <p className="text-[12px] text-black font-semibold">
                        Credits:{" "}
                        <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                          {course.credits}
                        </span>
                      </p>
                    </div>

                    <div className="flex gap-5 mt-5">
                      <p className="text-[12px]  text-black font-semibold">
                        midterm Mark:{" "}
                        <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                          {course.midtermMark}
                        </span>
                      </p>
                      <p className="text-[12px] text-black font-semibold">
                        Final Exam Mark:{" "}
                        <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                          {course.finalTermMark}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between mt-5">
                      <p className="text-[12px] text-black font-semibold">
                        Total Mark (with 20+):
                        <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                          {parseInt(course.totalMark)}
                        </span>
                      </p>

                      <p className="text-[12px] text-black font-semibold mb-3">
                        CGPA:{" "}
                        <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                          {course.cgpa}
                        </span>
                        <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                          {course.cgpaPoint}
                        </span>
                      </p>
                    </div>
                  </BottomBarItemCE>
                </DivCE>

                <p
                  className=" absolute right-1 top-1 z-10 shadow rounded-full text-[#00bf63] text-2xl font-bold cursor-pointer hover:text-black"
                  onClick={handleClose}
                >
                  <CiCircleRemove />
                </p>
              </ModalBodyCE>
            </ModalContentCE>
          </ModalContainerCE>
        )}
      </div>
    </div>
  );
};

export default CeCourseM;
