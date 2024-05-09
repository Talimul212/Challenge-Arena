const HomeCard = () => {
  return (
    <div className="w-full flex flex-wrap justify-start gap-2 ">
      <div className="lg:w-[272px] md:w-64 bg-base-100 rounded shadow-lg ">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/354/354637.png"
              className="w-16"
              alt=""
            />
          </div>

          <div>
            <h2 className="card-title ">
              <span className="">Total</span>
              <span className="text-[#00bf62]"> Students</span>
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
            <img
              src="https://cdn-icons-png.freepik.com/512/1838/1838013.png"
              className="w-16"
              alt=""
            />
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
            <img
              src="https://cdn-icons-png.freepik.com/512/562/562132.png"
              className="w-16"
              alt=""
            />
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
            <img
              src="https://cdn-icons-png.freepik.com/512/4263/4263397.png"
              className="w-16"
              alt=""
            />
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
