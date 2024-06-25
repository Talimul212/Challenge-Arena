import { useState } from "react";
import { updateFaculty } from "../../../features/Faculty/serviceApi";
import { useDispatch } from "react-redux";
/* eslint-disable react/prop-types */
const BatchModal = ({ data }) => {
  const dispatch = useDispatch();
  const [newBatch, setNewBatch] = useState("");
  const handleNewBatchChange = (e) => {
    setNewBatch(e.target.value);
  };

  const handleTuitions = async (e) => {
    e.preventDefault();
    const oldbatchs = data?.batchlist;
    const update = [...oldbatchs, newBatch];
    const formDataJson = {
      facultyName: data?.facultyName,
      totalCredits: parseInt(data?.totalCredits),
      batchlist: update,
      photoURL: data?.photoURL,
    };

    updateFaculty(dispatch, data?._id, formDataJson);
    setNewBatch("");
    window.location.reload();
  };

  return (
    <div className="rounded">
      <dialog id="my_modal_3" className="modal py-2">
        <div className="modal-box">
          <form method="dialog">
            <button className="bg-[#00bf63] hover:text-black text-white rounded-full text-sm w-5 absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center">{data?.facultyName}</h3>
          <p className="py-2">Total Credits: {data?.totalCredits}</p>
          <p className="py-2"> Total Batches: {data?.batchlist?.length}</p>
          <form onSubmit={handleTuitions}>
            <input
              className="focus:outline-none border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
              type="text"
              placeholder="Batch-1 (Spring-2022) || (Autumn-2022)"
              value={newBatch}
              onChange={handleNewBatchChange}
            />
            {newBatch ? (
              <button
                className="bg-[#00bf63] mt-2 text-white font-semibold px-3 py-[1px] shadow rounded"
                type="submit"
              >
                Post
              </button>
            ) : (
              <button className="bg-gray-400 mt-2 text-white font-semibold px-3 py-[1px] shadow rounded">
                Post
              </button>
            )}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BatchModal;
