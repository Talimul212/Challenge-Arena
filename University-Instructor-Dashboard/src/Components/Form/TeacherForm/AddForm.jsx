/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
const AddForm = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});
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
  // upload single file
  //   const upload = async (file) => {
  //     console.log(file);
  //     try {
  //       const formData = new FormData();
  //       formData.append("image", file);
  //       const res = await publicRequest.post("/file-upload", formData);
  //       return res.data;
  //     } catch (err) {
  //       alert("Error", "Can't upload this image", "error");
  //     }
  //   };
  const handleTuitons = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    //
  };
  return (
    <div className="me-7 duration-500 bg-white w-full rounded mt-2   shadow-md">
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
            id="cameraIfocus:outline-none nput"
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
            <input
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
              type="text"
              name="designation"
              placeholder="Designation"
              onChange={handleInputChange}
            />
            <select
              name="department"
              onChange={handleInputChange}
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            >
              <option disabled selected>
                Department
              </option>
              <option>Computer Science & Engineering</option>
              <option>Bachelor of Business Administration</option>
              <option>Bachelor of English</option>
              <option>Bachelor of Hospitality &Tourism Management</option>
              <option>
                Bachelor of Social Science in Governance & Development Studies
              </option>
            </select>
          </div>
          <div className="flex justify-between items-center gap-5 mb-5">
            <input
              className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
              type="number"
              name="mobileNumber"
              placeholder="Phone number"
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
          <div>
            <p>Course List:</p>
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
          <button
            className="bg-[#00bf63] mt-2 text-white font-semibold px-5 py-2 rounded shadow-lg"
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
