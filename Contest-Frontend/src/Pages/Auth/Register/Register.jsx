/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  InputColor,
  fontFamily,
  primaryColor,
} from "../../../Components/Color/Color";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/BU.png";
import { clear } from "../../../features/auth/authSlice";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "password" && passwordVisible ? value : value.trim(),
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/profile", {
      state: {
        formData,
      },
    });

    // register(dispatch, formData);
    // You can perform further actions here, like sending the data to a server.
  };
  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);
  const condidation =
    !formData.name ||
    !formData.password ||
    !formData.email ||
    !formData.studentId ||
    !formData.gender;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
    setInputType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };

  return (
    <RegisterPage>
      <Image src={logo} alt={logo} />
      <RegistrationForm onSubmit={handleRegister}>
        <FormFieldflex>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleInputChange}
          />
          {/* </FormField>
        <FormField> */}
          <Select name="gender" onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FormFieldflex>
        <FormField style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </FormField>
        <FormField style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Input
            type="number"
            name="studentId"
            placeholder="studentId"
            onChange={handleInputChange}
          />
        </FormField>
        <FormFieldflex style={{ gap: "0" }}>
          <div>
            <Input
              type={inputType}
              name="password"
              placeholder="Password"
              className="w-auto"
              onChange={handleInputChange}
            />
          </div>
          <PasswordToggle
            className="flex justify-end  border-b-[2px] border-gray-200 w-8"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <FaRegEyeSlash color={primaryColor} />
            ) : (
              <IoEyeOutline color={primaryColor} />
            )}
          </PasswordToggle>
        </FormFieldflex>
        <Button disabled={condidation} type="submit">
          Register
        </Button>
      </RegistrationForm>
      <LoginLink>
        Don't have an account?{" "}
        <Link to="/login" style={{ color: "gray" }}>
          login here
        </Link>
        .
      </LoginLink>
    </RegisterPage>
  );
};

export default Register;

const RegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fontFamily};
  align-items: center;
  margin: 20px;
`;
const Image = styled.img`
  width: 200px;
`;
const RegistrationForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 40px 30px 30px;
  border-radius: 8px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
`;
const FormFieldflex = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  width: 100%;
`;

const Select = styled.select`
  padding: 5px 0;
  border: none;

  color: #4b4a4a;
  outline: none;
  border-radius: none;
  border-bottom: 2px solid ${InputColor};
`;

const Input = styled.input`
  padding: 5px 0;
  border: none;
  color: #4b4a4a;
  outline: none;
  width: 100%;
  border-radius: 0;
  border-bottom: 2px solid ${InputColor};
  background: transparent;
`;
const PasswordToggle = styled.div`
  z-index: 100;
  margin-top: 10px;

  cursor: pointer;
`;
const Button = styled.button`
  margin-top: 20px;
  background-color: ${(props) => (props.disabled ? "gray" : primaryColor)};
  color: white;
  padding: 15px;
  border: none;
  width: 100%;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const LoginLink = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;
