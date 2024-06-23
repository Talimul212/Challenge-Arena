/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { publicRequest } from "../../../requestMethod";
import { addFaculty } from "../../../features/Faculty/serviceApi";
const FacutlyForm = ({ open }) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
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
  // const upload single file
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
      facultyName: formData.facultyName,
      totalCredits: parseInt(formData.totalCredits),
      photoURL: photoURL,
    };
    addFaculty(dispatch, formDataJson);
    setFormData(null);
    setImage(null);
  };
  return (
    <div
      className={`${
        open ? "" : " duration-700"
      }   bg-white w-full duration-700 rounded mt-2   shadow-md p-2`}
    >
      <div>
        {image ? (
          <div className=" mt-2 mb-2 flex justify-center">
            <div className="avatar ">
              <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                <img
                  src={image}
                  alt="Captured Image"
                  className="h-[140px] w-[20vw] mx-auto rounded-full"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="duration-700 mt-2 mb-2 flex justify-center">
            <div className="avatar ">
              <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 text-center pt-[40px] text-gray-300 font-semibold text-sm">
                Upload Here
              </div>
            </div>
          </div>
        )}
        {image ? (
          <label
            className={`ms-[143px]  cursor-pointer  font-semibold text-white px-5 rounde bg-[#00bf63] pb-1 rounded`}
            htmlFor="cameraInput"
          >
            Reupload
          </label>
        ) : (
          <label
            className={`ms-[152px]  cursor-pointer  font-semibold text-white px-5 rounde pb-1 rounded bg-[#00bf63] `}
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
        <div>
          <input
            className="focus:outline-none border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            type="text"
            name="facultyName"
            placeholder="Faculty name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-2">
          <input
            className="focus:outline-none border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
            type="number"
            name="totalCredits"
            placeholder="Total Credits"
            onChange={handleInputChange}
          />
        </div>
        {image && formData?.facultyName && formData?.totalCredits ? (
          <button
            className="bg-[#00bf63] mt-2 text-white font-semibold px-3  py-[1px] shadow rounded"
            type="submit"
          >
            POST
          </button>
        ) : (
          <button className="bg-gray-400 mt-2 text-white font-semibold px-3  py-[1px] shadow rounded">
            POST
          </button>
        )}
      </form>
    </div>
  );
};

export default FacutlyForm;
