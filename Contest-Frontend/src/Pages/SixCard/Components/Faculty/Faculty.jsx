import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFaculty } from "../../../../features/faculty/serviceApi";
import LoaderHub from "../../../../Components/Loader/LoaderHub";
import { vercel } from "../../../../helpers/api";
const Faculty = () => {
  const { totalFaculty, isLoading } = useSelector((state) => state?.faculty);
  const dispatch = useDispatch();
  useEffect(() => {
    getFaculty(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <LoaderHub type={"facultyCard"} />;
  }
  const facultyData = totalFaculty;
  return (
    <div className="mb-20 mt-3">
      {" "}
      <div className="  grid grid-cols-2 gap-2 ">
        {facultyData?.map((item) => (
          <div
            key={item.id}
            className=" bg-white card-bordered lg:w-[272px] md:w-64  rounded shadow-md "
          >
            <div className=" flex flex-col justify-between items-center py-3">
              <div>
                <img
                  src={`${vercel}/images/${item?.photoURL?.filename}`}
                  className="w-16"
                  alt=""
                />
              </div>

              <div className=" text-center h-[80px]  mt-3">
                <h2 className="  text-[15px] ">
                  <span className=" font-semibold"> {item.facultyName}</span>
                </h2>
                <p className="text-md mt-2">
                  {" "}
                  Total <span className="text-[#00bf62]"> Credits</span>:{" "}
                  {item?.totalCredits}
                </p>
              </div>
            </div>
            <div className="card-actions mt-8   cursor-pointer justify-center mb-2  ">
              <button className="font-[500] text-gray-500">Go Detalis</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
