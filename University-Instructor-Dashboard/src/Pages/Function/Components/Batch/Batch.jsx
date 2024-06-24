import { MdLibraryAdd } from "react-icons/md";
import BatchTable from "../../../../Components/Table/BatchTable/BatchTable";
import BatchModal from "../../../../Components/Modal/BatchModal/BatchModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFaculty } from "../../../../features/Faculty/serviceApi";
const Batch = () => {
  const { totalFaculty, isLoading } = useSelector(
    (state) => state?.facultyList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    getFaculty(dispatch);
  }, [dispatch]);

  if (isLoading) {
    <p>wating......</p>;
  }
  const facultyData = totalFaculty;
  return (
    <div className="ms-[-20px]  pb-20">
      <div
        className=" flex justify-center flex-wrap gap-3  mx-auto  
      "
      >
        {facultyData?.map((item) => (
          <div
            key={item?._id}
            className=" bg-white shadow-md flex items-center justify-between rounded text-md font-semibold  mb-1  p-2 w-[401px]"
          >
            {item?.facultyName}
            <div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <MdLibraryAdd className=" bg-white text-[#00bf63] hover:text-[#38b6ff] " />
              </button>
              <BatchModal />
            </div>
          </div>
        ))}
      </div>
      <div>
        <BatchTable facultyData={facultyData} />
      </div>
    </div>
  );
};

export default Batch;
