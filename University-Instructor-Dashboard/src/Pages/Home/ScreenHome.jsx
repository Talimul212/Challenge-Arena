// import { useParams } from "react-router-dom";
import HomeCard from "../../Components/Card/HomeCard/HomeCard";
import Chart from "../../Components/Grahp/Chart";
import ExamTopper from "../../Components/Table/ExamTopper/ExamTopper";
import NEwTable from "../../Components/Table/NewTable/NEwTable";

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
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenHome;
