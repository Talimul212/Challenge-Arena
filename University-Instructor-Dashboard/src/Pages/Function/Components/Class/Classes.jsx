import ClassLogo from "../../../../assets/RoutineIcon/ClassSchedule.png";
const Classes = () => {
  return (
    <div className="  items-center justify-center pe-6">
      <div className="bg-white text-center text flex justify-center items-center rounded text-lg font-semibold shadow py-2 uppercase">
        Class <span className="ms-3 text-[#00bf61]"> Routine</span>
      </div>
      <div className="  grid grid-cols-2 rounded gap-2  mt-2 ">
        <div className="bg-[#38b6ff]  text-center flex justify-center items-center rounded shadow text-lg font-semibold text-white py-2">
          <img className="w-52" src={ClassLogo} alt="Class Routine" />
        </div>
        <div className="text-center bg-white shadow rounded card-bordered  pt-2">
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63] duration-700">
            B.Sc. in Computer Science & Engineering{" "}
          </p>
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63] duration-700">
            Bachelor of Business Administration{" "}
          </p>
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63] duration-700">
            Bachelor of English
          </p>
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63] duration-700">
            Bachelor of Hospitality &Tourism Management{" "}
          </p>
          <p className="  p-2  cursor-pointer hover:text-[#00bf63] duration-700">
            Bachelor of Social Science in Governance & Development Studies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Classes;
