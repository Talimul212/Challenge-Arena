/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CoursesModal = ({ modalData, type }) => {
  return (
    <div>
      {type == "teachersCourse" ? (
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-[#00bf63] hover:text-black text-white rounded-full text-sm w-5 absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div>
              {modalData?.map((item, i) => (
                <div key={item?._id}>
                  <div>{item?.courseName}</div>
                  <div>{item?.credits}</div>
                  <div>{item?.hours}</div>
                  <div>{item?.type}</div>
                </div>
              ))}
            </div>
          </div>
        </dialog>
      ) : (
        <>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="bg-[#00bf63] hover:text-black text-white rounded-full text-sm w-5 absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg mb-2">
                {modalData?.length} Related Books List:
              </h3>
              {modalData?.map((item, i) => (
                <div className="flex justify-start gap-2" key={item._id}>
                  <p className="font-[500]">{i + 1}.</p>
                  <div>
                    <p className="flex gap-2">
                      <span className="text-[#00bf63]">Books Name: </span>{" "}
                      {item?.title}
                    </p>
                    <p className="py-2 flex gap-2">
                      <span className="text-[#00bf63]">Author: </span>
                      {item?.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};

export default CoursesModal;
