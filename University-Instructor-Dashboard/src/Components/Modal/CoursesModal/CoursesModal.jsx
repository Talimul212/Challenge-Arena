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
                <div key={item?._id} className="mb-5">
                  <p className=" font-medium">Course: {i + 1}</p>
                  <div>
                    <span className="font-medium text-[#00bf63]">
                      Course Name:{" "}
                    </span>
                    {item?.courseName}
                  </div>
                  <div className="flex mt-2 justify-between gap-3">
                    <div>
                      <span className="font-medium text-[#00bf63]">
                        Credits:{" "}
                      </span>
                      {item?.credits}
                    </div>
                    <div>
                      {" "}
                      <span className="font-medium text-[#00bf63]">
                        hours: {"  "}
                      </span>
                      {item?.hours}
                    </div>
                    <div>
                      <span className="font-medium text-[#00bf63]">
                        Course Type:{" "}
                      </span>{" "}
                      {item?.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </dialog>
      ) : type == "courseDetails" ? (
        <>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box p-0 w-[41%] py-4 max-w-5xl flex justify-between flex-col items-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="bg-[#00bf63] hover:text-black text-white rounded-full text-sm w-5 absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg mb-2">Course Details:</h3>

              <div className="flex justify-start gap-2">
                <div>
                  <p className="flex gap-2">
                    <span className="text-[#00bf63]">Course Name: </span>{" "}
                    {modalData?.courseName}
                  </p>
                  <div className="mt-3 flex justify-between">
                    <p className="flex gap-2">
                      {" "}
                      <span className="text-[#00bf63]">Course Teacher:</span>
                      {modalData?.teacherName}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <span className="text-[#00bf63]">Course Code:</span>
                      {modalData?.courseCode}
                    </p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p className=" flex gap-2">
                      <span className="text-[#00bf63]">Credits: </span>
                      {modalData?.credits}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <span className="text-[#00bf63]">Course Hours:</span>
                      {modalData?.hours}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <span className="text-[#00bf63]">Course Type:</span>
                      {modalData?.type}
                    </p>
                  </div>

                  <p className="mt-5 gap-3 flex  justify-center items-center">
                    {" "}
                    <span className="text-[#00bf63]">Course Department:</span>
                    {modalData?.department}
                  </p>
                </div>
              </div>
            </div>
          </dialog>
        </>
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
