/* eslint-disable react/prop-types */
import { MdPlayLesson } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
const NewStudentModale = ({ student }) => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal overflow-y-auto">
        <div className="modal-box w-[60%] max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-[#00bf63] hover:text-black text-white rounded-full text-sm w-5 absolute right-2 top-2">
              ✕
            </button>
          </form>
          <p className=" pb-1 text-xl font-semibold   mt-[-15px]">
            Student Personal Infomation:
          </p>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-xl w-[300px]  font-[400]">
                <span className="  text-[#00bf63]">Student ID: </span>
                {student?.studentId}
              </p>
              <p className="text-xl w-[300px]  font-[400]">
                {student?.department}
              </p>
            </div>
            <div className="mt-2 mb-2  ">
              <div className=" ">
                <div className="w-32 rounded border-dashed border-2 border-success  ring-offset-2 ">
                  <img
                    src={`http://localhost:8000/images/${student?.photoURL?.filename}`}
                    alt="Captured Image"
                    className="h-[140px] w-[20vw]  rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="ms-[-25px] w-[60vw] absolute" />
          <div className="flex justify-between   items-center mt-5 ">
            <h3 className="text-lg">
              <span className="  text-[#00bf63]">Student Name: </span>
              {student?.name}
            </h3>
            <h3 className=" text-lg">
              <span className="  text-[#00bf63]">Gender: </span>
              {student?.gender}
            </h3>
            <h3 className=" text-lg">
              <span className="  text-[#00bf63]">Student Email: </span>
              {student?.email}
            </h3>
          </div>
          <div className="flex justify-between   items-center mt-4 ">
            <h3 className=" text-lg">
              <span className="  text-[#00bf63]">Admission Date: </span>
              {/* {formatDate(student?.createdAt)} */}
              {student?.createdAt?.split("T")[0]}
            </h3>

            <h3 className=" text-lg">
              <span className="  text-[#00bf63]">Total Credits: </span>
              {student?.credits}
            </h3>
          </div>
          <div className="flex justify-between  items-center mt-4 ">
            <h3 className=" text-lg">
              <span className="  text-[#00bf63]">Semseter: </span>
              {student?.semseter}
            </h3>

            <h3 className=" text-lg">
              <span className="  text-[#00bf63]"> Batch NO: </span>
              {student?.batch}
            </h3>
            <h3 className=" text-lg">
              <span className="  text-[#00bf63]">CGPA: </span>
              {student?.cgpa}
            </h3>
          </div>
          <div className="mt-5 flex  justify-between">
            <p className=" pb-1 text-lg font-semibold flex items-center gap-2 ">
              <MdPlayLesson /> Running Courses: 5
            </p>
            <p className="mt-3 pb-1 text-lg font-semibold flex items-center gap-2">
              <FaClipboardCheck /> Completed Courses: 10
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NewStudentModale;
