// import { useParams } from "react-router-dom";
import HomeCard from "../../Components/Card/HomeCard/HomeCard";
import Chart from "../../Components/Grahp/Chart";

const ScreenHome = () => {
  // const { id } = useParams();

  return (
    <div className=" flex  ">
      <div className="  flex-1 ">
        <HomeCard />
      </div>
      <div className=" flex-1 bg-white shadow-xl">
        <Chart />
      </div>
    </div>
  );
};

export default ScreenHome;
