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
          <h3 className="font-bold text-lg">{modalData} Related Books List:</h3>
          <p className="py-4">Books Name:</p>
          <p className="py-4">Author:</p>
        </div>
      </dialog>
    </div>
  );
};

export default CoursesModal;
