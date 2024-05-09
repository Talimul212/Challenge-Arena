import CSE from "../../../assets/FacultyIcon/CSE.png";
import BBA from "../../../assets/FacultyIcon/BBA.png";
import ENG from "../../../assets/FacultyIcon/ENG.png";
import GDS from "../../../assets/FacultyIcon/GDS.png";
import HTM from "../../../assets/FacultyIcon/HTM.png";
import MBA from "../../../assets/FacultyIcon/MBA.png";

const FacultyCard = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap justify-start gap-2 ">
        <div className="lg:w-[272px] md:w-64 bg-base-100 rounded shadow-lg ">
          <div className=" flex flex-col justify-between items-center p-4">
            <div>
              <img src={CSE} className="w-16" alt="" />
            </div>

            <div className=" text-center">
              <h2 className="card-title text-[15px] ">
                <span className=""> Computer Science and Engineering</span>
              </h2>
              <p className="text-xl "> Total Students: 26</p>
            </div>
          </div>
          <div className="card-actions justify-center mb-2">
            <button className=" font-[500] text-gray-500">Go Detalis</button>
          </div>
        </div>

        <div className="lg:w-[272px] bg-base-100 rounded shadow-lg ">
          <div className=" flex justify-between items-center p-4">
            <div>
              <img src={BBA} className="w-16" alt="" />
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
              <img src={ENG} className="w-16" alt="" />
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
              <img src={GDS} className="w-16" alt="" />
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
        <div className="lg:w-[272px] bg-base-100 rounded shadow-lg ">
          <div className=" flex justify-between items-center p-4">
            <div>
              <img src={HTM} className="w-16" alt="" />
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
        <div className="lg:w-[272px] bg-base-100 rounded shadow-lg ">
          <div className=" flex justify-between items-center p-4">
            <div>
              <img src={MBA} className="w-16" alt="" />
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
    </div>
  );
};

export default FacultyCard;
