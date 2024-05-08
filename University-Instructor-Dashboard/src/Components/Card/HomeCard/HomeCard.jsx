const HomeCard = () => {
  return (
    <div className="w-full flex flex-wrap justify-start gap-2 ">
      <div className="w-72 bg-base-100 rounded shadow-xl">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/354/354637.png"
              className="w-16"
              alt=""
            />
          </div>

          <div>
            <h2 className="card-title">Total Students</h2>
            <p className="text-xl font-semibold text-right">26</p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <button className=" font-[500] text-gray-500">Go Detalis</button>
        </div>
      </div>

      <div className="w-72 bg-base-100 rounded shadow-xl">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/512/1838/1838013.png"
              className="w-16"
              alt=""
            />
          </div>

          <div>
            <h2 className="card-title">Total Teachers</h2>
            <p className="text-xl font-semibold text-right">26</p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <button className=" font-[500] text-gray-500">Go Detalis</button>
        </div>
      </div>

      <div className="w-72 bg-base-100 rounded shadow-xl">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/512/562/562132.png"
              className="w-16"
              alt=""
            />
          </div>

          <div>
            <h2 className="card-title">Total Batch</h2>
            <p className="text-xl font-semibold text-right">10</p>
          </div>
        </div>
        <div className="card-actions justify-center mb-2">
          <button className=" font-[500] text-gray-500">Go Detalis</button>
        </div>
      </div>
      <div className="w-72 bg-base-100 rounded shadow-xl">
        <div className=" flex justify-between items-center p-4">
          <div>
            <img
              src="https://cdn-icons-png.freepik.com/512/4263/4263397.png"
              className="w-16"
              alt=""
            />
          </div>

          <div>
            <h2 className="card-title">Total Feculties</h2>
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
