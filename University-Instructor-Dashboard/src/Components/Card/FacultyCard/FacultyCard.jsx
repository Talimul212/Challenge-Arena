import CSE from "../../../assets/FacultyIcon/CSE.png";
import BBA from "../../../assets/FacultyIcon/BBA.png";
import ENG from "../../../assets/FacultyIcon/ENG.png";
import GDS from "../../../assets/FacultyIcon/GDS.png";
import HTM from "../../../assets/FacultyIcon/HTM.png";
import MBA from "../../../assets/FacultyIcon/MBA.png";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { useState } from "react";
import FacutlyForm from "../../Form/FacutlyForm/FacutlyForm";
const FacultyCard = () => {
  const [open, setOpen] = useState("open");
  const hanlderOpen = () => {
    setOpen(!open);
  };
  const facultyData = [
    {
      id: 1,
      title: "B.Sc. in Computer Science & Engineering (CSE)",
      image: CSE,
    },
    { id: 2, title: "Bachelor of Business Administration (BBA)", image: BBA },
    { id: 3, title: "Bachelor of English", image: ENG },
    {
      id: 4,
      title: "Bachelor of Hospitality &Tourism Management (HTM)",
      image: HTM,
    },
    {
      id: 5,
      title:
        "Bachelor of Social Science in Governance & Development Studies (GDS)",
      image: GDS,
    },
    { id: 6, title: "✅Master of Business Administration (MBA)", image: MBA },
  ];
  return (
    <div className="flex  justify-between ">
      <div className=" flex flex-wrap justify-start gap-2 ">
        {facultyData.map((item) => (
          <div
            key={item.id}
            className=" bg-white card-bordered lg:w-[272px] md:w-64  rounded shadow-md "
          >
            <div className=" flex flex-col justify-between items-center py-3">
              <div>
                <img src={item.image} className="w-16" alt="" />
              </div>

              <div className=" text-center h-[80px]  mt-3">
                <h2 className=" text-[15px] ">
                  <span className=" font-semibold"> {item.title}</span>
                </h2>
                <p className="text-md ">
                  {" "}
                  Total <span className="text-[#00bf62]"> Students</span>: 26
                </p>
              </div>
            </div>
            <div className="card-actions justify-center mb-2">
              <button className=" font-[500] text-gray-500">Go Detalis</button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[59vw] me-5">
        <div className=" bg-white  rounded shadow-md h-[8vh]">
          <p className=" flex items-center justify-between text-lg font-semibold  mb-1   p-2 ">
            Add New Faculty
            {open ? (
              <span onClick={hanlderOpen}>
                <FaAngleDown />
              </span>
            ) : (
              <span className=" duration-300 " onClick={hanlderOpen}>
                <FaChevronUp size={12} />
              </span>
            )}
          </p>
          {open ? (
            <></>
          ) : (
            <div className=" duration-500">
              <FacutlyForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
