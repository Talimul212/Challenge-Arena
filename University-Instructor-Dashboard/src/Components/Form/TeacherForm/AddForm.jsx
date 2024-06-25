/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getFaculty } from "../../../features/Faculty/serviceApi";
import LoaderHub from "../../Loader/LoaderHub";
import { publicRequest } from "../../../requestMethod";
import { addTeacherslist } from "../../../features/Teachers/serviceApi";
import { useNavigate } from "react-router-dom";
const AddForm = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { totalFaculty, isLoading } = useSelector(
    (state) => state?.facultyList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getFaculty(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <LoaderHub type={"facultyform"} />;
  }
  const facultyData = totalFaculty;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    setFile(event.target.files[0]);
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // consupload single file
  const upload = async (file) => {
    console.log(file);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await publicRequest.post("/file-upload", formData);
      return res.data;
    } catch (err) {
      alert("Error", "Can't upload this image", "error");
    }
  };
  const handleTuitons = async (e) => {
    e.preventDefault();
    const photoURL = await upload(file);
    console.log("Form Data:", formData);
    const formDataJson = {
      ...formData,
      photoURL: photoURL,
    };
    addTeacherslist(dispatch, formDataJson);
    setImage(null);
    navigate("/teachers");
  };
  return (
    <div className=" duration-500 bg-white w-[98%]  mb-6 rounded mt-2   shadow-md">
      <div className=" border-b-[1px] pb-1  ps-4 text-xl font-semibold   mt-2">
        Basic Information
      </div>
      <div className=" p-4">
        <div className="mt-5">
          {image ? (
            <div className="mt-2 mb-2 flex ">
              <div className="avatar ">
                <div className="w-32 rounded border-dashed border-2 border-success  ring-offset-2 ">
                  <img
                    src={image}
                    alt="Captured Image"
                    className="h-[140px] w-[20vw]  rounded"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className=" mt-2 mb-2 flex ">
              <div className="avatar ">
                <div className=" w-32 flex  justify-center items-center rounded border-dashed border-2 border-success   ring-offset-2 text-center  font-semibold text-sm text-[#00bf6349]">
                  <IoMdPerson size={120} />
                </div>
              </div>
            </div>
          )}
          {image ? (
            <label
              className={` shadow cursor-pointer  font-semibold text-white px-[30px] rounde bg-[#00bf63] pb-1 rounded`}
              htmlFor="cameraInput"
            >
              Reupload
            </label>
          ) : (
            <label
              className={`shadow cursor-pointer  font-semibold text-white px-[38px] rounde pb-1 rounded bg-[#00bf63] `}
              htmlFor="cameraInput"
            >
              Upload
            </label>
          )}
          <input
            id="cameraInput"
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }} // Hide the input element
            onChange={handleImageChange}
          />
        </div>
        <form className="mt-5" onSubmit={handleTuitons}>
          <div className="flex justify-between items-center gap-5 mb-5">
            <input
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
            />

            <input
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between items-center gap-5 mb-5">
            <select
              name="position"
              onChange={handleInputChange}
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            >
              <option disabled selected>
                Designation
              </option>
              <option>Lecturer</option>
              <option>Assistant Professor</option>
              <option>Associate Professor</option>
              <option> Professor</option>
            </select>
            <select
              name="department"
              onChange={handleInputChange}
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            >
              <option disabled selected>
                Faculty
              </option>
              {facultyData?.map((item) => (
                <option key={item?._id}>{item?.facultyName}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center gap-5 mb-5">
            <input
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
              type="number"
              name="whatsappNumber"
              placeholder="What's App Number"
              onChange={handleInputChange}
            />

            <select
              name="gender"
              onChange={handleInputChange}
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            >
              <option disabled selected>
                select gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div></div>
          {/* <p className=" font-semibold  mt-5 text-lg mb-2">Course List</p>
          <div className="flex justify-between items-center gap-5 mb-5">
            <select
              name="courseCode"
              onChange={handleInputChange}
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            >
              <option disabled selected>
                Course Code
              </option>
              <option>CSE 216</option>
              <option>CSE 310</option>
              <option>CSE 326</option>
              <option>CSE 110</option>
            </select>
            <select
              name="courseName"
              onChange={handleInputChange}
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            >
              <option disabled selected>
                Course Name
              </option>
              <option>Database Management System (DBMS)</option>
              <option>Computer Graphics</option>
              <option>Programming Abstractions</option>
              <option> Compiler Construction</option>
              <option> Operating Systems</option>
              <option> Computer Networks</option>
            </select>
          </div> */}
          <button
            className="bg-[#00bf63] mt-2 text-white font-semibold px-5 py-1 rounded shadow-lg"
            type="submit"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
