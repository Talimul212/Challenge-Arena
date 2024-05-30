import ExamLogo from "../../../../assets/RoutineIcon/ExamSchedule.png";
const Exam = () => {
  return (
    <div className="pe-6">
      <div className="bg-white text-center text flex justify-center items-center rounded text-lg font-semibold shadow py-2 uppercase">
        Exam <span className="ms-3 text-[#00bf61]"> Routine</span>
      </div>
      <div className="  grid grid-cols-2 rounded gap-2 mt-2">
        <div className="text-center bg-white shadow card-bordered rounded   pt-2">
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63]">
            B.Sc. in Computer Science & Engineering{" "}
          </p>
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63]">
            Bachelor of Business Administration{" "}
          </p>
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63]">
            Bachelor of English
          </p>
          <p className=" border-b-2 p-2  cursor-pointer hover:text-[#00bf63]">
            Bachelor of Hospitality &Tourism Management{" "}
          </p>
          <p className=" p-2  cursor-pointer hover:text-[#00bf63]">
            Bachelor of Social Science in Governance & Development Studies
          </p>
        </div>
        <div className="bg-[#38b6ff]  text-center flex justify-center items-center rounded text-lg font-semibold text-white py-2 shadow">
          <img className="w-48" src={ExamLogo} alt="Class Routine" />
        </div>
      </div>
    </div>
  );
};

export default Exam;
