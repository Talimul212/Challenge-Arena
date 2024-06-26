import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import FacutlyForm from "../../Form/FacutlyForm/FacutlyForm";
import { useDispatch, useSelector } from "react-redux";
import { getFaculty } from "../../../features/Faculty/serviceApi";
import LoaderHub from "../../Loader/LoaderHub";
import { getUser } from "../../../features/users/serviceApi";
const FacultyCard = () => {
  const [open, setOpen] = useState("open");
  const { totalFaculty, isLoading } = useSelector(
    (state) => state?.facultyList
  );
  const { totalUser } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getFaculty(dispatch);
    getUser(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <LoaderHub type={"facultyCard"} />;
  }
  const facultyData = totalFaculty;
  const departmentStudent = (e) => {
    const student = totalUser?.filter((it) => it.department == e);
    return <p>{student?.length}</p>;
  };
  const hanlderOpen = () => {
    setOpen(!open);
  };
  // const facultyData = [
  //   {
  //     id: 1,
  //     title: "B.Sc. in Computer Science & Engineering (CSE)",
  //     image: CSE,
  //   },
  //   { id: 2, title: "Bachelor of Business Administration (BBA)", image: BBA },
  //   { id: 3, title: "Bachelor of English", image: ENG },
  //   {
  //     id: 4,
  //     title: "Bachelor of Hospitality &Tourism Management (HTM)",
  //     image: HTM,
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Bachelor of Social Science in Governance & Development Studies (GDS)",
  //     image: GDS,
  //   },
  //   { id: 6, title: "✅Master of Business Administration (MBA)", image: MBA },
  // ];
  return (
    <div className="flex  justify-between ">
      <div className=" flex flex-wrap justify-start gap-2 ">
        {facultyData?.map((item) => (
          <div
            key={item?.id}
            className=" bg-white card-bordered lg:w-[272px] md:w-64  rounded shadow-md "
          >
            <div className=" flex flex-col justify-between items-center py-3">
              <div>
                <img
                  src={`http://localhost:8000/images/${item?.photoURL?.filename}`}
                  className="w-16"
                  alt={item?.photoURL?.filename}
                />
              </div>

              <div className=" text-center  mt-3">
                <h2 className=" text-[15px] h-[40px] ">
                  <span className=" font-semibold"> {item?.facultyName}</span>
                </h2>
                <p className="text-md mt-8">
                  {" "}
                  Total <span className="text-[#00bf62] "> Students</span>:
                  {departmentStudent(item?.facultyName)}
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
              <span
                className=" duration-700 cursor-pointer "
                onClick={hanlderOpen}
              >
                <FaAngleDown />
              </span>
            ) : (
              <span
                className=" duration-700 cursor-pointer "
                onClick={hanlderOpen}
              >
                <FaChevronUp size={12} />
              </span>
            )}
          </p>
          {open ? (
            <></>
          ) : (
            <div className={`${open ? "" : "h-[100px]"} duration-700`}>
              <FacutlyForm open={open} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
