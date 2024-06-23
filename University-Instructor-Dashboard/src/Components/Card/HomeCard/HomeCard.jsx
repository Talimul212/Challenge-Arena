import Student from "../../../assets/HomeIcon/Student.png";
import Teacher from "../../../assets/HomeIcon/Teacher.png";
import Batch from "../../../assets/HomeIcon/Batch.png";
import Faculty from "../../../assets/HomeIcon/Faculty.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../../features/users/serviceApi";
const HomeCard = () => {
  const { totalUser, isLoading } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
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
        <div className="card-actions justify-center mb-2">
          <button className=" font-[500] text-gray-500">Go Detalis</button>
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
            <p className="text-xl font-semibold text-right">26</p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <button className=" font-[500] text-gray-500">Go Detalis</button>
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
            <p className="text-xl font-semibold text-right">10</p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <button className=" font-[500] text-gray-500">Go Detalis</button>
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
            <p className="text-xl font-semibold text-right">10</p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <button className=" font-[500] text-gray-500">Go Detalis</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
