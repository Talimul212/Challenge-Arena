/* eslint-disable no-constant-condition */
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegImage } from "react-icons/fa";
import { IoIosCamera } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import { useState } from "react";
import {
  Button,
  Container,
  Div,
  Div1,
  Div2,
  Divim,
  FieldName,
  Form,
  FormField,
  Input,
  Title,
} from "../GobalStyle/AdsFormStyle";
const AdsForm = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    department: "",
    description: "",
    image: null, // Add image to formData
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
    if (name === "option") {
      // Update price based on selected option
      const price = value === "Donate" ? "Donate it" : "Exchange it"; // Set the price based on the selected option
      setFormData((prevData) => ({
        ...prevData,
        price: price,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission
    console.log("Form data:", formData);
    // Reset form fields after submission if needed
    setFormData({
      title: "",
      price: "",
      department: "",
      description: "",
      image: null, // Reset image after submission
    });
  };

  return (
    <Container>
      <Div>
        <Link to="/buysell">
          <IoMdArrowBack />
        </Link>
        Create an ad
      </Div>
      {image ? (
        <Divim>
          <img
            src={image}
            alt="Captured Image"
            className="h-[180px] mt-[-20px]"
          />
        </Divim>
      ) : (
        <Div1>
          <FaRegImage size={"60px"} />
        </Div1>
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
          <label htmlFor="cameraInput">
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
          <FieldName>Title</FieldName>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <FieldName>Department</FieldName>
          <div>
            <select
              className="w-full ms-[-5px] mt-1 border-b-[1px] text-sm bg-none border-black"
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
          </div>
        </FormField>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "40px",
          }}
        >
          <FormField>
            <FieldName>Price</FieldName>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: "5px",
              }}
            >
              {formData.option === "Exchange" || "Donate" ? (
                <Input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              ) : (
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              )}

              <div
                style={{
                  top: "30px",
                  color: "gray",
                  fontWeight: "500",
                  marginBottom: "-6px",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                TK
              </div>
            </div>
          </FormField>
          <FormField style={{ width: "40%", marginBottom: "-10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                color: "gray",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              <label className="flex gap-4">
                <input
                  type="radio"
                  className=" cursor-pointer"
                  name="option"
                  value="Donate"
                  checked={formData.option === "Donate"}
                  onChange={handleChange}
                />
                Donate it
              </label>
              <label className="flex gap-4">
                <input
                  type="radio"
                  name="option"
                  value="Exchange"
                  className=" cursor-pointer"
                  checked={formData.option === "Exchange"}
                  onChange={handleChange}
                />
                Exchange
              </label>
            </div>
          </FormField>
        </div>
        <FormField>
          <FieldName>Description</FieldName>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormField>
        <div>
          <Title>Tips for faster sell:</Title>
          <ul
            style={{
              fontSize: "14px",
              color: "gray",
              fontWeight: "500",
              listStyle: "none",
              paddingLeft: "3px",
            }}
          >
            <li style={{ position: "relative", marginBottom: "2px" }}>
              &#9733; Put phone number on the description
            </li>
            <li style={{ position: "relative", marginBottom: "2px" }}>
              &#9733; For Book, enter course initial in title <br />
              <span style={{ marginLeft: "20px" }}>
                -Example: CSE231-Digital Design 5th Ed by Mano
              </span>
            </li>
            <li style={{ position: "relative", marginBottom: "2px" }}>
              &#9733; Mention if the item is new or used
            </li>
            <li>&#9733; Upload square picture for a better look</li>
          </ul>
        </div>
        <Button type="submit">
          <GoCheckCircleFill className="shadow-xl rounded-full" />
        </Button>
      </Form>
    </Container>
  );
};

export default AdsForm;
