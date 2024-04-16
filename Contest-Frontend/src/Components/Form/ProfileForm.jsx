/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import {
  Button,
  ButtonCondidtion,
  Div2,
  DivPerson,
  Divim,
  FieldName,
  Form,
  FormField,
  Input,
} from "../GobalStyle/AdsFormStyle";
import { GoCheckCircleFill } from "react-icons/go";
import { publicRequest } from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/service";
import { useNavigate } from "react-router-dom";
import { local } from "../../helpers/api";
const ProfileForm = ({ state }) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state?.auth);
  const [formData, setFormData] = useState({
    name: state?.name,
    studentId: parseInt(state?.studentId),
    password: state?.password,
    email: state?.email,
    gender: state?.gender,
    department: "",
    batch: null,
    semester: null,
    cgpa: null,
    credits: null,
  });
  const navigate = useNavigate();
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "batch"
        ? parseInt(value)
        : name === "cgpa"
        ? parseInt(value)
        : name === "credits"
        ? parseInt(value)
        : name === "semester"
        ? parseInt(value)
        : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("dyaya");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const photoURL = await upload(file);
    // Here you can handle the form submission
    const formDataJson = JSON.stringify({
      batch: formData.batch,
      credits: formData.credits,
      name: formData.name,
      gender: formData.gender,
      photoURL: photoURL,
      email: formData.email,
      studentId: parseInt(formData.studentId),
      password: formData.password,
      department: formData.department,
      cgpa: formData.cgpa,
      semseter: formData.semester,
    });
    // console.log(formDataJson);
    // register(dispatch, formDataJson);
    await register(dispatch, formDataJson, () => navigate("/"));

    // Reset form fields after submission if needed
  };
  const condition =
    !formData?.name ||
    !formData?.studentId ||
    !formData?.password ||
    !formData?.gender ||
    !formData?.department ||
    !formData?.batch ||
    !formData?.semester ||
    !formData?.cgpa ||
    !formData?.credits;
  return (
    <>
      {currentUser ? (
        <div>
          {image ? (
            <Divim>
              <img
                src={image}
                alt="Captured Image"
                className="h-[180px] mt-[-20px]"
              />
            </Divim>
          ) : (
            <Divim>
              <img
                src={`${local || varsel}/images/${
                  currentUser?.photoURL?.filename
                }`}
                alt="Captured Image"
                className="h-[180px] mt-[-20px]"
              />
            </Divim>
          )}
          <Div2>
            <label
              className={`ms-40  cursor-pointer  font-semibold text-white px-5 rounded  mt-0 bg-[#00bf63] `}
              htmlFor="cameraInput"
            >
              Reupload
            </label>

            <input
              id="cameraInput"
              type="file"
              accept="image/*"
              capture="environment"
              style={{ display: "none" }} // Hide the input element
              onChange={handleImageChange}
            />
          </Div2>
          <Form onSubmit={handleUpdate}>
            <div className="flex gap-10">
              <FormField>
                <FieldName>Name</FieldName>
                <Input
                  type="text"
                  name="name"
                  defaultValue={currentUser.name}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <FieldName>Student ID</FieldName>
                <Input
                  type="number"
                  name="studentId"
                  defaultValue={currentUser.studentId}
                  onChange={handleChange}
                />
              </FormField>
            </div>
            <FormField>
              <FieldName>Department</FieldName>
              <div>
                <select
                  className="w-full bg-transparent ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                  name="department"
                  defaultValue={currentUser.department}
                  onChange={handleChange}
                >
                  <option
                    style={{ cursor: "not-allowed" }}
                    className="cursor-not-allowed text-gray-300"
                  >
                    Select Department
                  </option>
                  <option value="English">English</option>
                  <option value="GDS">
                    Governance and Development Studies
                  </option>
                  <option value="BBA">Business Administration</option>
                  <option value="CSE">Computer Science and Engineering</option>
                </select>
              </div>
            </FormField>
            <div className="flex gap-10">
              <FormField>
                <FieldName>Batch (th)</FieldName>
                <div>
                  <select
                    className=" bg-transparent w-full ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                    name="batch"
                    type="number"
                    defaultValue={currentUser.batch}
                    onChange={handleChange}
                    placeholder="select the batch"
                  >
                    <option
                      style={{ cursor: "not-allowed" }}
                      className="cursor-not-allowed text-gray-300"
                    >
                      Select the batch
                    </option>
                    <option value={1}>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
              </FormField>
              <FormField>
                <FieldName>Semseter (th)</FieldName>
                <div>
                  <select
                    className="w-full bg-transparent ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                    name="semester"
                    type="number"
                    defaultValue={currentUser.semseter}
                    onChange={handleChange}
                  >
                    <option
                      style={{ cursor: "not-allowed" }}
                      className="cursor-not-allowed text-gray-300"
                    >
                      Select the Semseter
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </FormField>
            </div>
            <div className="flex gap-10">
              <FormField>
                <FieldName>CGPA</FieldName>
                <div>
                  <Input
                    defaultValue={currentUser.cgpa}
                    type="number"
                    name="cgpa"
                    onChange={handleChange}
                  />
                </div>
              </FormField>
              <FormField>
                <FieldName>Credits</FieldName>
                <div>
                  <Input
                    defaultValue={currentUser.credits}
                    type="number"
                    name="credits"
                    onChange={handleChange}
                  />
                </div>
              </FormField>
            </div>
            <div className="mt-10">
              <ul
                style={{
                  fontSize: "13px",
                  color: "gray",
                  fontWeight: "500",
                  listStyle: "none",
                  paddingLeft: "3px",
                }}
              >
                <li
                  style={{
                    position: "relative",
                    marginBottom: "2px",
                    fontSize: "13px",
                  }}
                >
                  &#9733; Your CGPA, credits won't be public.
                </li>
                <li
                  style={{
                    marginBottom: "2px",
                    fontSize: "13px",
                  }}
                >
                  &#9733; These data are needed to give you relevant
                  suggestions.
                </li>
                <li className="text-[13px]">
                  &#9733; You can give fake data if you want{" "}
                </li>
              </ul>
            </div>

            <Button type="submit">
              <GoCheckCircleFill className="shadow-xl rounded-full " />
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          {image ? (
            <Divim>
              <img
                src={image}
                alt="Captured Image"
                className="h-[180px] mt-[-20px]"
              />
            </Divim>
          ) : (
            <DivPerson>
              <IoPerson className="mt-7" size={"80px"} />
            </DivPerson>
          )}
          <Div2>
            {image ? (
              <label
                className={`ms-40  cursor-pointer  font-semibold text-white px-5 rounded  mt-0 bg-[#00bf63] `}
                htmlFor="cameraInput"
              >
                Reupload
              </label>
            ) : (
              <label
                className="bg-white ms-56 p-2 rounded-full"
                htmlFor="cameraInput"
              >
                <IoIosCamera size={"25px"} />
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
          </Div2>
          <Form onSubmit={handleSubmit}>
            <div className="flex gap-10">
              <FormField>
                <FieldName>Name</FieldName>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <FieldName>Student ID</FieldName>
                <Input
                  type="number"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                />
              </FormField>
            </div>

            <FormField>
              <FieldName>Department</FieldName>
              <div>
                <select
                  className="w-full bg-transparent ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                  name="department"
                  onChange={handleChange}
                >
                  <option
                    style={{ cursor: "not-allowed" }}
                    className="cursor-not-allowed text-gray-300"
                  >
                    Select Department
                  </option>
                  <option value="English">English</option>
                  <option value="GDS">
                    Governance and Development Studies
                  </option>
                  <option value="BBA">Business Administration</option>
                  <option value="CSE">Computer Science and Engineering</option>
                </select>
              </div>
            </FormField>

            <div className="flex gap-10">
              <FormField>
                <FieldName>Batch (th)</FieldName>
                <div>
                  <select
                    className=" bg-transparent w-full ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                    name="batch"
                    type="number"
                    onChange={handleChange}
                    placeholder="select the batch"
                  >
                    <option
                      style={{ cursor: "not-allowed" }}
                      className="cursor-not-allowed text-gray-300"
                    >
                      Select the batch
                    </option>
                    <option value={1}>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
              </FormField>
              <FormField>
                <FieldName>Semseter (th)</FieldName>
                <div>
                  <select
                    className="w-full bg-transparent ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                    name="semester"
                    type="number"
                    onChange={handleChange}
                  >
                    <option
                      style={{ cursor: "not-allowed" }}
                      className="cursor-not-allowed text-gray-300"
                    >
                      Select the Semseter
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </FormField>
            </div>
            <div className="flex gap-10">
              <FormField>
                <FieldName>CGPA</FieldName>
                <div>
                  <Input type="number" name="cgpa" onChange={handleChange} />
                </div>
              </FormField>
              <FormField>
                <FieldName>Credits</FieldName>
                <div>
                  <Input type="number" name="credits" onChange={handleChange} />
                </div>
              </FormField>
            </div>

            <div className="mt-10">
              <ul
                style={{
                  fontSize: "13px",
                  color: "gray",
                  fontWeight: "500",
                  listStyle: "none",
                  paddingLeft: "3px",
                }}
              >
                <li
                  style={{
                    position: "relative",
                    marginBottom: "2px",
                    fontSize: "13px",
                  }}
                >
                  &#9733; Your CGPA, credits won't be public.
                </li>

                <li
                  style={{
                    marginBottom: "2px",
                    fontSize: "13px",
                  }}
                >
                  &#9733; These data are needed to give you relevant
                  suggestions.
                </li>
                <li className="text-[13px]">
                  &#9733; You can give fake data if you want{" "}
                </li>
              </ul>
            </div>
            {!condition && image ? (
              <Button type="submit">
                <GoCheckCircleFill
                  className={`${condition ? "" : "shadow-xl rounded-full "}`}
                />
              </Button>
            ) : (
              <ButtonCondidtion>
                <GoCheckCircleFill
                  className={`${condition ? "" : "shadow-xl rounded-full "}`}
                />
              </ButtonCondidtion>
            )}
          </Form>
        </div>
      )}
    </>
  );
};

export default ProfileForm;
