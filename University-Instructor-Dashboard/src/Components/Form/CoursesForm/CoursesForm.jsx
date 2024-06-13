import { useState } from "react";
import { useParams } from "react-router-dom";

const CoursesForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleTuitons = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    //
  };
  return (
    <div>
      {" "}
      <div className=" duration-500 bg-white w-[98%]  mb-6 rounded mt-2   shadow-md">
        <div className=" border-b-[1px] pb-1  ps-4 pt-2 text-xl font-semibold   mt-2">
          Add Course of {id.toUpperCase()}
        </div>
        <div className=" p-4">
          <div className="mt-5">
            <form className="mt-5" onSubmit={handleTuitons}>
              <div className="flex justify-between items-center gap-5 mb-5">
                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="text"
                  name="courseName"
                  placeholder="Course Name"
                  onChange={handleInputChange}
                />

                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="text"
                  name="courseCode"
                  placeholder="Course Code (CSE303,CSE-405)"
                  onChange={handleInputChange}
                />
              </div>

              {/* <div className="flex justify-between items-center gap-5 mb-5">
                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="text"
                  name="courseCode"
                  placeholder="Course Code "
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
                    Bachelor of Social Science in Governance & Development
                    Studies
                  </option>
                </select>
              </div> */}
              <div className="flex justify-between items-center gap-5 mb-5">
                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="number"
                  name="credits"
                  placeholder="Total Credits"
                  onChange={handleInputChange}
                />
                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="number"
                  name="hours"
                  placeholder="Total Course Hours"
                  onChange={handleInputChange}
                />

                {/* <select
                  name="gender"
                  onChange={handleInputChange}
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                >
                  <option disabled selected>
                    select gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select> */}
              </div>
              <div className="flex justify-between items-center gap-5 mb-5">
                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="text"
                  name="batch"
                  placeholder="Batch"
                  onChange={handleInputChange}
                />
                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="text"
                  name="type"
                  placeholder="Course Type"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between items-center gap-5 mb-5">
                <select
                  name="courseTeacher"
                  onChange={handleInputChange}
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                >
                  <option disabled selected>
                    Course Teacher
                  </option>
                  <option>Mr.Ban</option>
                  <option>Mr.Bean</option>
                  <option>Dr.yunus</option>
                  <option>Mr.Modi</option>
                </select>
              </div>
              <p className=" font-semibold  mt-5 text-lg mb-2">
                Course Related Book:
              </p>
              <div className="flex justify-between items-center gap-5 mb-5">
                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="text"
                  name="bookName"
                  placeholder="Book Name"
                  onChange={handleInputChange}
                />

                <input
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                  type="text"
                  name="bookAuthor"
                  placeholder="Auhtor Name"
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="bg-[#00bf63] mt-2 text-white font-semibold px-5 py-1 rounded shadow-lg"
                type="submit"
              >
                POST
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesForm;
