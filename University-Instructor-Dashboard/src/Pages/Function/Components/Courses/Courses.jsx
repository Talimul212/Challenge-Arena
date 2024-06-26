/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcAddDatabase } from "react-icons/fc";
import { LiaDatabaseSolid } from "react-icons/lia";
import { MdCreditScore } from "react-icons/md";
import CourseTables from "../../../../Components/Table/CourseTables/CourseTables";
import { useDispatch, useSelector } from "react-redux";
import { getFaculty } from "../../../../features/Faculty/serviceApi";
import LoaderHub from "../../../../Components/Loader/LoaderHub";
import { getCourses } from "../../../../features/Courses/serviceApi";
const Courses = () => {
  const { totalFaculty, isLoading } = useSelector(
    (state) => state?.facultyList
  );
  const { data } = useSelector((state) => state?.coursesList);
  const dispatch = useDispatch();
  const [type, setType] = useState(
    "B.Sc. in Computer Science & Engineering (CSE)"
  );
  const [name, setName] = useState(
    "B.Sc. in Computer Science & Engineering (CSE)"
  );
  useEffect(() => {
    getFaculty(dispatch);
    getCourses(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <LoaderHub type={"courses"} />;
  }

  const facultyData = totalFaculty;
  const handlerType = (e, id) => {
    setType(e);
    setName(id);
  };
  const len = (n) => {
    const count = data?.filter((it) => it?.department === n);
    return <p>{count?.length || 0}</p>;
  };
  //  === item?.facultyName ? it?.length : " 60"
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
            onClick={() => handlerType(item.facultyName, item?._id)}
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
                    {len(item?.facultyName)}
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
        <div className="flex items-center justify-between  mt-2 text-lg font-semibold shadow-lg mb-1  bg-white rounded p-2 ">
          <p>Department of {type}</p>
          <Link
            to={`/UI/${name}/coursesForm/${encodeURIComponent(type)}`}
            className="bg-[#00bf63] duration-700 px-4 rounded shadow hover:text-[#38b6ff] border hover:bg-transparent hover:border-[#38b6ff]  text-white py-1"
          >
            <FcAddDatabase />
          </Link>
        </div>
        <CourseTables data={data} type={type} name={name} />
      </div>
    </div>
  );
};

export default Courses;
