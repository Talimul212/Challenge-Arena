// import { useParams } from "react-router-dom";
import HomeCard from "../../Components/Card/HomeCard/HomeCard";
import Chart from "../../Components/Grahp/Chart";
import ExamTopper from "../../Components/Table/ExamTopper/ExamTopper";
import NEwTable from "../../Components/Table/NewTable/NEwTable";
import Logo from "../../assets/logo/BU.png";
const ScreenHome = () => {
  // const { id } = useParams();

  return (
    <>
      <div className=" flex">
        <div className="  flex-1 ">
          <HomeCard />
        </div>
        <div className=" flex-1 bg-white shadow-lg ms-[-70px] me-6 rounded">
          <Chart />
        </div>
      </div>
      <div className="">
        <NEwTable />
      </div>
      <div className="flex">
        <div className="flex-1">
          <ExamTopper />
        </div>
        <div className=" flex-1 me-6">
          <div className="card h-auto w-full bg-base-100 shadow-lg rounded mt-5 ">
            <figure className="px-10 pt-4">
              <img src={Logo} alt="Shoes" className="rounded h-56" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className=" font-semibold">Develop BY</h2>
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
