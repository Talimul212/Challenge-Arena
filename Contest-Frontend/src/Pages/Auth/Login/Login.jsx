/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styled from "styled-components";
import { fontFamily, primaryColor } from "../../../Components/Color/Color";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      <FormTitle>Login</FormTitle>
      <LoginForm onSubmit={handleLogin}>
        <FormField>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
        </FormField>
        <Button type="submit">Login</Button>
      </LoginForm>
      <RegisterLink>
        Don't have an account? <Link to="/register">Register here</Link>.
      </RegisterLink>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  font-family: ${fontFamily};
`;

const LoginForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px 40px 30px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin: 10px 0;
  color: ${primaryColor};
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const RegisterLink = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
