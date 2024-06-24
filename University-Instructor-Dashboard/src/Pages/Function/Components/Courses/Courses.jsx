/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { LiaDatabaseSolid } from "react-icons/lia";
import { MdCreditScore } from "react-icons/md";
import CourseTables from "../../../../Components/Table/CourseTables/CourseTables";
import { useDispatch, useSelector } from "react-redux";
import { getFaculty } from "../../../../features/Faculty/serviceApi";
const Courses = () => {
  const { totalFaculty, isLoading } = useSelector(
    (state) => state?.facultyList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getFaculty(dispatch);
  }, [dispatch]);

  if (isLoading) {
    <p>wating......</p>;
  }
  const [type, setType] = useState("Computer Science & Engineering");
  const [name, setName] = useState("Computer Science & Engineering");
  const facultyData = totalFaculty;
  const handlerType = (e) => {
    setType(e);
    setName(e);
  };
  // const FacultyData = [
  //   {
  //     id: 1,
  //     FacultyName: " Computer Science & Engineering",
  //     CourseCount: "60",
  //     title: "CSE",
  //     Credits: "164",
  //   },
  //   {
  //     id: 2,
  //     FacultyName: " Bachelor of Business Administration",
  //     CourseCount: "60",
  //     title: "BBA",
  //     Credits: "164",
  //   },
  //   {
  //     id: 3,
  //     FacultyName: "  Bachelor of English",
  //     CourseCount: "60",
  //     title: "ENG",
  //     Credits: "164",
  //   },
  //   {
  //     id: 4,
  //     FacultyName:
  //       "   Bachelor of Social Science in Governance & Development Studies",
  //     CourseCount: "60",
  //     title: "GDS",
  //     Credits: "164",
  //   },
  //   {
  //     id: 5,
  //     FacultyName: "   Bachelor of Hospitality &Tourism Management (HTM)",
  //     CourseCount: "60",
  //     title: "HTM",
  //     Credits: "164",
  //   },
  // ];
  return (
    <div className="me-6">
      <div className="flex justify-center gap-5 items-center flex-wrap ">
        {facultyData?.map((item, i) => (
          <div
            key={item.id}
            onClick={() => handlerType(item.facultyName)}
            className={`${
              type == item.facultyName
                ? "bg-[#00bf63]  duration-1000"
                : "bg-white duration-700 "
            }card w-[395px] h-[140px]  rounded-md shadow-md cursor-pointer`}
          >
            <div className="card-body p-5">
              <h2
                className={`${
                  type == item.facultyName
                    ? "text-white duration-700 text-center "
                    : " duration-700 text-center "
                }text-center  font-semibold h-[70px] text-lg `}
              >
                {item.facultyName}
              </h2>
              <div className="flex  justify-between items-center">
                <div
                  className={` ${
                    type == item.facultyName
                      ? "text-white duration-700 text-center "
                      : "  text-center "
                  }flex justify-between  items-center text-[#00bf63]`}
                >
                  <LiaDatabaseSolid size={24} />
                  Courses:
                  <p
                    className={` ${
                      type == item.facultyName
                        ? "text-white duration-700 text-center "
                        : " duration-700 text-center "
                    } text-gray-500 font-semibold  ms-1`}
                  >
                    {" "}
                    {item.CourseCount}60
                  </p>
                </div>
                <div
                  className={` ${
                    type == item.facultyName
                      ? "text-white duration-700 text-center flex justify-between items-center"
                      : " duration-700 text-center text-[#38b6ff] flex justify-between items-center"
                  } `}
                >
                  <MdCreditScore size={24} />
                  Credits:
                  <p
                    className={` ${
                      type == item.facultyName
                        ? "text-white duration-700 text-center "
                        : " duration-700 text-center "
                    } text-gray-500 font-semibold  ms-1`}
                  >
                    {" "}
                    {item.totalCredits}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" duration-700 mt-6">
        <CourseTables type={type} name={name} />
      </div>
    </div>
  );
};

export default Courses;
