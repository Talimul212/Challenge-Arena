import Student from "../../../assets/HomeIcon/Student.png";
import Teacher from "../../../assets/HomeIcon/Teacher.png";
import Batch from "../../../assets/HomeIcon/Batch.png";
import Faculty from "../../../assets/HomeIcon/Faculty.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../../features/users/serviceApi";
import { getFaculty } from "../../../features/Faculty/serviceApi";
import LoaderHub from "../../Loader/LoaderHub";
import { Link } from "react-router-dom";
import { getTeacherslist } from "../../../features/Teachers/serviceApi";
const HomeCard = () => {
  const { totalUser, isLoading } = useSelector((state) => state?.user);
  const { totalFaculty } = useSelector((state) => state?.facultyList);
  const { data } = useSelector((state) => state?.teachersList);
  const dispatch = useDispatch();
  useEffect(() => {
    getUser(dispatch);
    getFaculty(dispatch);
    getTeacherslist(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <LoaderHub type={"faculty"} />;
  }
  const processBatchData = (data) => {
    let totalBatches = 0;

    const facultyBatchCounts = data?.map((faculty) => {
      const batchCount = faculty.batchlist.length;
      totalBatches += batchCount;
      return {
        facultyName: faculty.facultyName,
        batchCount,
      };
    });

    return { facultyBatchCounts, totalBatches };
  };
  const result = processBatchData(totalFaculty);
  return (
    <div className="w-full flex flex-wrap justify-start gap-2 ">
      <div className="lg:w-[272px] md:w-64 bg-base-100 rounded shadow-lg ">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img src={Student} className="w-16" alt="" />
          </div>

          <div>
            <h2 className="card-title ">
              <span className="">Total</span>
              <span className="text-[#00bf62]"> Students</span>
            </h2>
            <p className="text-xl font-semibold text-right">
              {totalUser?.length}
            </p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2 cursor-pointer">
          <a id="student" href="#student" className=" font-[500] text-gray-500">
            Go Detalis
          </a>
        </div>
      </div>

      <div className="lg:w-[272px] bg-base-100 rounded shadow-lg ">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img src={Teacher} className="w-16" alt="" />
          </div>

          <div>
            <h2 className="card-title">
              Total <span className="text-[#00bf62]"> Teachers</span>
            </h2>
            <p className="text-xl font-semibold text-right">{data?.length}</p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <Link to="/UI/teachers" className=" font-[500] text-gray-500">
            Go Detalis
          </Link>
        </div>
      </div>

      <div className="lg:w-[272px] bg-base-100 rounded shadow-lg ">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img src={Batch} className="w-16" alt="" />
          </div>

          <div>
            <h2 className="card-title">
              Total <span className="text-[#00bf62]"> Batch</span>
            </h2>
            <p className="text-xl font-semibold text-right">
              {" "}
              {result?.totalBatches}
              {}
            </p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <Link to="/UI/batch" className=" font-[500] text-gray-500">
            Go Detalis
          </Link>
        </div>
      </div>
      <div className="lg:w-[272px] bg-base-100 rounded shadow-lg ">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img src={Faculty} className="w-16" alt="" />
          </div>

          <div>
            <h2 className="card-title">
              Total <span className="text-[#00bf62]"> Faculty</span>
            </h2>
            <p className="text-xl font-semibold text-right">
              {totalFaculty?.length}
            </p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <Link to="/UI/faculty" className=" font-[500] text-gray-500">
            Go Detalis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
