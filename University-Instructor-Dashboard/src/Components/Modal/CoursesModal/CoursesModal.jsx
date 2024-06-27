/* eslint-disable react/prop-types */
const CoursesModal = ({ modalData }) => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-[#00bf63] hover:text-black text-white rounded-full text-sm w-5 absolute right-2 top-2">
              ✕
            </button>
          </form>
          {modalData[0].author ? (
            <>
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
            </>
          ) : (
            <>courselisting</>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default CoursesModal;
