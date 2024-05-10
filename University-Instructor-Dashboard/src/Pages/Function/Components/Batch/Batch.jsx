import { MdLibraryAdd } from "react-icons/md";
import BatchTable from "../../../../Components/Table/BatchTable/BatchTable";
import BatchModal from "../../../../Components/Modal/BatchModal/BatchModal";
const Batch = () => {
  return (
    <div className="ms-[-20px]">
      <div className=" flex justify-center flex-wrap gap-3">
        <div className=" bg-white shadow-md flex items-center justify-between rounded text-lg font-semibold  mb-1  p-2 w-[30vw]">
          Computer Science & Engineering{" "}
          <div>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <MdLibraryAdd className=" bg-white text-[#00bf63] hover:text-[#38b6ff] " />
            </button>
            <BatchModal />
          </div>
        </div>
        <div className=" bg-white shadow-md flex items-center justify-between rounded text-lg font-semibold  mb-1  p-2 w-[30vw]">
          Bachelor of Business Administration{" "}
          <div>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <MdLibraryAdd className=" bg-white text-[#00bf63] hover:text-[#38b6ff] " />
              <BatchModal />
            </button>
          </div>
        </div>
        <div className="  bg-white shadow-md flex items-center justify-between rounded text-lg font-semibold  mb-1  p-2 w-[29vw]">
          Bachelor of English{" "}
          <div>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <MdLibraryAdd className=" bg-white text-[#00bf63] hover:text-[#38b6ff] " />
            </button>
            <BatchModal />
          </div>
        </div>
        <div className=" bg-white shadow-md flex items-center justify-between rounded text-lg gap-2 font-semibold  mb-1  p-2 ">
          Bachelor of Hospitality &Tourism Management
          <div>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <MdLibraryAdd className=" bg-white text-[#00bf63] hover:text-[#38b6ff] " />
            </button>
            <BatchModal />
          </div>
        </div>
        <div className=" bg-white shadow-md flex items-center justify-between rounded text-lg font-semibold  mb-1  p-2 gap-2">
          Bachelor of Social Science in Governance & Development Studies
          <div>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <MdLibraryAdd className=" bg-white text-[#00bf63] hover:text-[#38b6ff] " />
            </button>
            <BatchModal />
          </div>
        </div>
      </div>
      <div>
        <BatchTable />
      </div>
    </div>
  );
};

export default Batch;
