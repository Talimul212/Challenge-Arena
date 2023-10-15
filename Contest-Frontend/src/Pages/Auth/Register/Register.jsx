import { useState } from "react";
import styled from "styled-components";
import { fontFamily, primaryColor } from "../../../Components/Color/Color";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can perform further actions here, like sending the data to a server.
  };

  return (
    <RegisterPage>
      <FormTitle>Student Registration</FormTitle>
      <RegistrationForm onSubmit={handleRegister}>
        <FormField>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
        </FormField>
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
        <Button type="submit">Register</Button>
      </RegistrationForm>
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

const RegistrationForm = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px 40px 30px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 28px;
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
  font-size: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
`;
