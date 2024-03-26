/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styled from "styled-components";
import {
  InputColor,
  fontFamily,
  primaryColor,
  secondaryColor,
} from "../../../Components/Color/Color";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/BU.png";

const Login = () => {
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can add your login logic here.
  };

  return (
    <LoginPage>
      <Image src={logo} alt={logo} />

      <LoginForm onSubmit={handleLogin}>
        <FormField>
          <Input
            type="number"
            name="number"
            placeholder="Student ID:"
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <Input
            type="password"
            name="password"
            placeholder="Password:"
            onChange={handleInputChange}
          />
        </FormField>
        <TermBox>
          <Radio type="checkbox" id="radio" name="radios" />
          <i>
            <Terms>
              I accept the Privacy Policy and terms & condidations of university
              Instructor
            </Terms>
          </i>
        </TermBox>

        <Button type="submit">Login</Button>
        <i>
          <Terms1>Forgot password?</Terms1>
        </i>
      </LoginForm>
      <RegisterLink>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "gray" }}>
          Register here
        </Link>
        .
      </RegisterLink>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-family: ${fontFamily};
`;

const LoginForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 40px 30px 30px;
`;

const Image = styled.img`
  width: 200px;
`;
const TermBox = styled.div`
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
const Terms = styled.p`
  font-size: 10px;
  color: gray;
  font-weight: 400;
`;
const Terms1 = styled.p`
  font-size: 12px;
  color: gray;
  font-weight: 400;
`;
const Radio = styled.input`
  font-size: 20px;
  color: ${secondaryColor};
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px;
  outline: 0;
  border: none;
  border-radius: 10px;
  background: ${InputColor};
`;

const Button = styled.button`
  background-color: ${primaryColor};
  color: white;
  padding: 15px;
  border: none;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;
const RegisterLink = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;

// Styled component for the checked state of the radio button
