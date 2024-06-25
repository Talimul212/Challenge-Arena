/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import "./style.css";
const BatchTable = ({ facultyData }) => {
  const [open, setOpen] = useState(true);

  const handlerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="mt-5 me-9 ms-6 mb-16 h-100%">
      <div
        style={{
          height: open ? 400 : 100,
          width: "90vw",
        }}
      >
        <p className="flex items-center  border-[1px] border-[#b3b3b3] justify-between mt-2 text-lg font-semibold shadow mb-1 bg-white rounded p-2">
          Faculty Batch List:
          {open ? (
            <span onClick={handlerOpen}>
              <FaAngleDown />
            </span>
          ) : (
            <span className="duration-300" onClick={handlerOpen}>
              <FaChevronUp />
            </span>
          )}
        </p>
        {!open ? (
          ""
        ) : (
          <div className="duration-300   ">
            <div className="flex overflow-x-auto  shadow-md w-[1230px] custom-scrollbar border-[1px] border-[#b3b3b3] rounded">
              {facultyData?.map((item) => (
                <>
                  <div key={item?._id} className="">
                    <div className="bg-white p-2 h-[90px] py-1 flex items-center justify-center text-center shadow m-1 rounded font-medium w-[290px]">
                      {item.facultyName}
                    </div>
                    {item.batchlist?.map((item1) => (
                      <div
                        key={item1?._id}
                        className="bg-white p-2 shadow m-1 rounded font-medium text-center"
                      >
                        {item1}
                      </div>
                    ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchTable;
