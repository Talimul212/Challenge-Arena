// import { useParams } from "react-router-dom";

import HomeCard from "../../Components/Card/HomeCard/HomeCard";
import Chart from "../../Components/Grahp/Chart";
import PiChart from "../../Components/Grahp/PiChart";
import ExamTopper from "../../Components/Table/ExamTopper/ExamTopper";
import NEwTable from "../../Components/Table/NewTable/NEwTable";
import Logo from "../../assets/logo/BU.png";

// import { getUser } from "../../features/users/serviceApi";

const ScreenHome = () => {
  // const { id } = useParams();
  // const { totalUser, isLoading } = useSelector((state) => state?.user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getUser(dispatch);
  // }, [dispatch]);

  // if (isLoading) {
  //   <p>jhgdkjsh</p>;
  // }
  // console.log(totalUser);
  return (
    <>
      <div className=" flex">
        <div className="  flex-1 ">
          <HomeCard />
        </div>
        <div className=" border-[1px] flex-1 bg-white shadow-lg ms-[-70px] me-6 rounded">
          <Chart />
        </div>
      </div>
      <div className="">
        <NEwTable />
      </div>
      <div className="flex mt-5 ">
        <div className=" flex-1 me-6">
          <ExamTopper />
        </div>
        <div className="flex-1 h-[430px]  mt-[25px]   ms-[-35px] me-[29px]">
          <p className="ms-0 mt-[3px]  mb-1 p-1 ps-3 rounded text-lg font-semibold bg-white  shadow-lg">
            Student Pic-Chart:
          </p>
          <div className="bg-white h-[372px] shadow-lg rounded  border-[1px]">
            <PiChart />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-5 me-9 ms-1">
          <div className="card h-auto w-full bg-base-100 shadow-lg rounded ">
            <figure className="px-10 ">
              <img src={Logo} alt="Shoes" className="rounded h-52" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className=" font-semibold text-3xl uppercase  mt-[-50px]">
                Develop BY
              </h2>
              <p className=" text-xl mb-[-10px]">Talimul Islam</p>
              <p className=" text-xl">
                B.Sc. in Computer Science & Engineering (CSE)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenHome;
