import { useState } from "react";
import { LiaDatabaseSolid } from "react-icons/lia";
import { MdCreditScore } from "react-icons/md";
import CourseTables from "../../../../Components/Table/CourseTables/CourseTables";
const Courses = () => {
  const [type, setType] = useState("CSE");
  const handlerType = (e) => {
    setType(e);
  };
  return (
    <div className="me-6">
      <div className="flex justify-center gap-8 items-center flex-wrap ">
        <div
          onClick={() => handlerType("CSE")}
          className={`${
            type == "CSE"
              ? "bg-[#00bf63]  duration-700"
              : "bg-white duration-700 "
          }card w-96   rounded-md shadow-md cursor-pointer duration-700`}
        >
          <div className="card-body">
            <h2
              className={`${
                type == "CSE"
                  ? "text-white duration-700 text-center "
                  : " duration-700 text-center "
              }text-center  font-semibold  text-lg duration-700 `}
            >
              Computer Science & Engineering
            </h2>
            <div className="flex justify-between items-center">
              <div
                className={` ${
                  type == "CSE"
                    ? "text-white duration-700 text-center "
                    : " duration-700 text-center "
                }flex justify-between items-center text-[#00bf63]`}
              >
                <LiaDatabaseSolid size={24} />
                Courses:
                <p
                  className={` ${
                    type == "CSE"
                      ? "text-white duration-700 text-center "
                      : " duration-700 text-center "
                  } text-gray-500 font-semibold  ms-1`}
                >
                  {" "}
                  60
                </p>
              </div>
              <div
                className={` ${
                  type == "CSE"
                    ? "text-white duration-700 text-center flex justify-between items-center"
                    : " duration-700 text-center text-[#38b6ff] flex justify-between items-center"
                } `}
              >
                <MdCreditScore size={24} />
                Credits:
                <p
                  className={` ${
                    type == "CSE"
                      ? "text-white duration-700 text-center "
                      : " duration-700 text-center "
                  } text-gray-500 font-semibold  ms-1`}
                >
                  {" "}
                  164
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handlerType("BBA")}
          className="card  w-96 bg-white rounded-md shadow-md cursor-pointer"
        >
          <div className="card-body">
            <h2 className="text-center  font-semibold text-lg">
              Bachelor of Business Administration
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center text-[#00bf63]">
                <LiaDatabaseSolid size={24} />
                Courses:
                <p className="text-gray-500 font-semibold  ms-1"> 60</p>
              </div>
              <div className="flex justify-between items-center  text-[#38b6ff]">
                <MdCreditScore size={24} />
                Credits:
                <p className="text-gray-500 font-semibold  ms-1"> 164</p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handlerType("ENG")}
          className="card   w-96 bg-white rounded-md shadow-md cursor-pointer"
        >
          <div className="card-body ">
            <h2 className="text-center  font-semibold  text-lg">
              Bachelor of English
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center text-[#00bf63]">
                <LiaDatabaseSolid size={24} />
                Courses:
                <p className="text-gray-500 font-semibold  ms-1"> 60</p>
              </div>
              <div className="flex justify-between items-center  text-[#38b6ff]">
                <MdCreditScore size={24} />
                Credits:
                <p className="text-gray-500 font-semibold  ms-1"> 164</p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handlerType("GDS")}
          className="card  bg-white rounded-md shadow-md cursor-pointer  w-96"
        >
          <div className="card-body">
            <h2 className="text-center  font-semibold  text-lg">
              Bachelor of Social Science in Governance & Development Studies
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center text-[#00bf63]">
                <LiaDatabaseSolid size={24} />
                Courses:
                <p className="text-gray-500 font-semibold  ms-1"> 60</p>
              </div>
              <div className="flex justify-between items-center  text-[#38b6ff]">
                <MdCreditScore size={24} />
                Credits:
                <p className="text-gray-500 font-semibold  ms-1"> 164</p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handlerType("HTM")}
          className="card  w-96 bg-white rounded-md shadow-md cursor-pointer"
        >
          <div className="card-body">
            <h2 className="text-center  font-semibold  text-lg">
              Bachelor of Hospitality &Tourism Management (HTM)
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center text-[#00bf63]">
                <LiaDatabaseSolid size={24} />
                Courses:
                <p className="text-gray-500 font-semibold  ms-1"> 60</p>
              </div>
              <div className="flex justify-between items-center  text-[#38b6ff]">
                <MdCreditScore size={24} />
                Credits:
                <p className="text-gray-500 font-semibold  ms-1"> 164</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" duration-700 mt-6">
        <CourseTables type={type} />
      </div>
    </div>
  );
};

export default Courses;
