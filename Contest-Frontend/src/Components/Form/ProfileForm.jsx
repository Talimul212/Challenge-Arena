import { useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import {
  Button,
  Div2,
  DivPerson,
  Divim,
  FieldName,
  Form,
  FormField,
  Input,
} from "../GobalStyle/AdsFormStyle";
import { GoCheckCircleFill } from "react-icons/go";
const ProfileForm = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "Talimul Islam",
    department: "",
    semester: 0,
    cgpa: "", // Add image to formData
    credite: "", // Add image to formData
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setFormData({ ...formData, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission
    console.log("Form data:", formData);
    // Reset form fields after submission if needed
    setFormData({
      name: "",
      department: "",
      semester: 0,
      cgpa: "", // Add image to formData
      credite: "", // Reset image after submission
    });
  };

  return (
    <>
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
          <FieldName>Department</FieldName>
          <div>
            {formData?.department ? (
              <select
                className="w-full ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                name="department "
                value={formData.department}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select Department
                </option>
                <option value="English">English</option>
                <option value="GDS">Governance and Development Studies</option>
                <option value="BBA">Business Administration</option>
                <option value="CSE">Computer Science and Engineering</option>
              </select>
            ) : (
              <select
                className="w-full ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                name="department "
                onChange={handleChange}
              >
                <option disabled value="">
                  Select Department
                </option>
                <option value="English">English</option>
                <option value="GDS">Governance and Development Studies</option>
                <option value="BBA">Business Administration</option>
                <option value="CSE">Computer Science and Engineering</option>
              </select>
            )}
          </div>
        </FormField>

        <div className="flex gap-10">
          <FormField>
            <FieldName>Semester(th)</FieldName>
            <div>
              {formData?.semester ? (
                <select
                  className=" bg-none w-full ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                  name="department "
                  value={formData.semester}
                  onChange={handleChange}
                >
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
              ) : (
                <select
                  className="w-full ms-[-5px] mt-1 border-b-[1px] text-sm border-black"
                  name="department "
                  type="number"
                  onChange={handleChange}
                >
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
              )}
            </div>
          </FormField>
          <FormField>
            <FieldName>Credits</FieldName>
            <div>
              {formData?.credite ? (
                <Input
                  type="text"
                  name="number"
                  value={formData.credite}
                  onChange={handleChange}
                />
              ) : (
                <Input type="text" name="number" onChange={handleChange} />
              )}
            </div>
          </FormField>
        </div>
        <FormField>
          <FieldName>CGPA</FieldName>
          <div>
            {formData?.cgpa ? (
              <Input
                type="text"
                name="number"
                value={formData.cgpa}
                onChange={handleChange}
              />
            ) : (
              <Input type="text" name="number" onChange={handleChange} />
            )}
          </div>
        </FormField>

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
              &#9733; These data are needed to give you relevant suggestions.
            </li>
            <li className="text-[13px]">
              &#9733; You can give fake data if you want{" "}
            </li>
          </ul>
        </div>
        <Button type="submit">
          <GoCheckCircleFill className="shadow-xl rounded-full" />
        </Button>
      </Form>
    </>
  );
};

export default ProfileForm;
