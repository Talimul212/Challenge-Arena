import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFaculty } from "../../../features/Faculty/serviceApi";
import LoaderHub from "../../Loader/LoaderHub";
import { getTeacherslist } from "../../../features/Teachers/serviceApi";
import { addCourses } from "../../../features/Courses/serviceApi";

const CoursesForm = () => {
  const { id, type } = useParams();
  const [formData, setFormData] = useState({});
  const [selectedValues, setSelectedValues] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name == "batch" && value !== selectedValues) {
      setSelectedValues([...selectedValues, value]);
    }
  };
  const { totalFaculty, isLoading } = useSelector(
    (state) => state?.facultyList
  );
  const { data } = useSelector((state) => state?.teachersList);
  const dispatch = useDispatch();
  useEffect(() => {
    getFaculty(dispatch);
    getTeacherslist(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <LoaderHub type={"facultyform"} />;
  }
  const facultyData = totalFaculty;
  const selectedFaculty = facultyData?.find(
    (item) => item.facultyName === type
  );
  const faculty = facultyData?.find((item) => item._id === id);
  const batches = selectedFaculty ? selectedFaculty.batchlist : [];
  const teachers = data?.filter(
    (item) => item.department == faculty?.facultyName
  );
  const coursesHandler = async (e) => {
    e.preventDefault();
    const formDataJson = {
      batch: selectedValues,
      courseName: formData?.courseName,
      teacherName: formData?.courseTeacher,
      credits: formData?.credits,
      hours: formData?.hours,
      department: formData?.department,
      courseCode: formData?.courseCode,
      type: formData?.type,
      relatedBooks: [
        {
          title: formData?.bookName,
          author: formData?.bookAuthor,
        },
      ],
    };
    console.log("Form Data:", formDataJson);
    addCourses(dispatch, formDataJson);
    setSelectedValues([]);
    navigate("/UI/courses");
    window.location.reload();
  };
  return (
    <div>
      {" "}
      <div className=" duration-500 bg-white w-[98%]  mb-6 rounded mt-2   shadow-md">
        <div className=" uppercase  border-b-[1px] pb-1  ps-4 pt-2 text-xl font-semibold   mt-2">
          Add Course of {type.toUpperCase()}
        </div>
        <div className=" p-4">
          <div className="mt-5">
            <form className="mt-5" onSubmit={coursesHandler}>
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
              </div>
              <div className="flex justify-between items-center gap-5 mb-5">
                <select
                  name="department"
                  onChange={handleInputChange}
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                >
                  <option disabled selected>
                    Department
                  </option>
                  {facultyData?.map((item) => (
                    <option key={item?._id}>{item?.facultyName}</option>
                  ))}
                </select>

                <select
                  name="type"
                  onChange={handleInputChange}
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                >
                  <option disabled selected>
                    Course Types
                  </option>
                  <option>Theory</option>
                  <option>Lab</option>
                </select>
              </div>
              <div className="flex justify-between items-center gap-5 mb-5">
                <select
                  name="courseTeacher"
                  onChange={handleInputChange}
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                >
                  {teachers?.length > 0 ? (
                    <>
                      <option disabled selected>
                        Course Teacher
                      </option>{" "}
                      {teachers?.map((item) => (
                        <option key={item?._id}>{item?.name}</option>
                      ))}
                    </>
                  ) : (
                    <option disabled selected>
                      Course Teacher not assign
                    </option>
                  )}
                </select>
              </div>
              {/* <div className="flex justify-between items-center gap-5 mb-5">
                <select
                  name="batch"
                  onChange={handleInputChange}
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                >
                  {batches?.length > 0 ? (
                    <>
                      <option disabled selected>
                        Batch
                      </option>
                      {batches?.map((item) => (
                        <option key={item?._id}>{item}</option>
                      ))}
                    </>
                  ) : (
                    <option disabled selected>
                      Batch not assign
                    </option>
                  )}
                </select>
                <div></div>
              </div> */}
              <div className="flex justify-between items-center gap-5 mb-5">
                <select
                  name="batch"
                  onChange={handleInputChange}
                  className="focus:outline-none  border-b-[1px] mb-2 w-full border-gray-400 focus-visible:no-underline"
                >
                  {batches?.length > 0 ? (
                    <>
                      <option disabled selected>
                        Batch
                      </option>
                      {batches.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option disabled selected>
                      Batch not assigned
                    </option>
                  )}
                </select>
                <div className="bg-white shadow flex gap-3 w-[90vw] p-2 items-center">
                  <h3 className="font-medium">Selected Batch:</h3>
                  {selectedValues.length > 0 ? (
                    <ul>
                      <div className="flex flex-wrap gap-4 justify-start">
                        {selectedValues.map((value, index) => (
                          <div key={index} className="">
                            <div className="bg-[#00bf63] shadow rounded p-1 text-white">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-center">
                      No Batch Selected
                    </p>
                  )}
                </div>
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
