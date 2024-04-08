/* eslint-disable react/prop-types */
import { CiCircleRemove } from "react-icons/ci";
import {
  BottomBarItemC,
  DivC,
  ModalBodyC,
  ModalContainerC,
  ModalContentC,
} from "../GobalStyle/GobalStyle";

const CourseDetailsM = ({ isOpen, handleClose, course }) => {
  return (
    <div>
      <div>
        {isOpen && (
          <ModalContainerC>
            <ModalContentC>
              <ModalBodyC>
                <DivC>
                  <BottomBarItemC>
                    <p className=" text-[12px] mt-3 text-black font-semibold">
                      Course Name:{" "}
                      <span className="ms-2 bg-[#38b6ff] text-white px-2 py-1 rounded">
                        {course.courseName}
                      </span>
                    </p>

                    <p className="text-black font-semibold text-[12px] mt-3 ">
                      Teacher:
                      <span className=" ms-2 bg-[#38b6ff] text-white px-2 py-1 rounded">
                        {course.teacherName}
                      </span>
                    </p>
                    <p className="text-[12px] mt-3 text-black font-semibold">
                      Course Code:{" "}
                      <span className=" ms-2  bg-[#38b6ff] text-white px-2 py-1 rounded">
                        {course.courseCode}
                      </span>
                    </p>
                    <p className="text-[12px] mt-3 text-black font-semibold">
                      Credits:{" "}
                      <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                        {course.credits}
                      </span>
                    </p>
                    <div className="mt-2">
                      <p className="text-[12px] mt-3 text-black font-semibold">
                        {" "}
                        Relate Books:
                      </p>
                      {course.relatedBooks.map((e, i) => (
                        <div key={i}>
                          <p className="text-[12px] mt-3 text-black font-semibold">
                            <span className="  bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                              {e.title}
                            </span>
                          </p>
                          <p className="text-[12px] mt-3 text-black font-semibold">
                            Authors:
                            <span className=" ms-2 bg-[#38b6ff] text-white px-3 py-[2px] rounded">
                              {e.author}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[18px] mt-3 font-semibold text-start ">
                      {course.hours} hours (weekly 2 days)
                    </p>
                  </BottomBarItemC>
                </DivC>

                <p
                  className=" absolute right-1 top-1 z-10 shadow rounded-full text-[#00bf63] text-2xl font-bold cursor-pointer hover:text-black"
                  onClick={handleClose}
                >
                  <CiCircleRemove />
                </p>
              </ModalBodyC>
            </ModalContentC>
          </ModalContainerC>
        )}
      </div>
    </div>
  );
};

export default CourseDetailsM;
