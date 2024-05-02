import { useState } from "react";
import TutorsSide from "./TutorsSide";
import RequestSide from "./RequestSide";

const TuitionHome = () => {
  const [selectedOption, setSelectedOption] = useState("tutors");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className=" shadow flex justify-around text-sm text-gray-500 w-[100vw]">
        <p
          className={`uppercase w-full text-center border-b-2 duration-700 ${
            selectedOption === "tutors"
              ? "border-[#00fb61] duration-700 border-b-2"
              : ""
          }`}
          onClick={() => handleOptionClick("tutors")}
        >
          Tutors
        </p>
        <p
          className={`uppercase w-full text-center border-b-2  duration-700   ${
            selectedOption === "requests"
              ? "border-[#00fb61] border-b-2 duration-700 "
              : ""
          }`}
          onClick={() => handleOptionClick("requests")}
        >
          Requests
        </p>
      </div>
      {selectedOption === "tutors" && (
        <div>
          <TutorsSide />
        </div>
      )}
      {selectedOption === "requests" && (
        <div>
          <RequestSide />
        </div>
      )}
    </div>
  );
};

export default TuitionHome;
