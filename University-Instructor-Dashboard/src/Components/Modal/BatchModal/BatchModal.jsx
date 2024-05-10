const BatchModal = () => {
  return (
    <div className=" rounded">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-[#00bf63] hover:text-black text-white rounded-full text-sm w-5 absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Add here new batch of Faculty</p>
          <p className="py-4">Comming soon.......</p>
        </div>
      </dialog>
    </div>
  );
};

export default BatchModal;
