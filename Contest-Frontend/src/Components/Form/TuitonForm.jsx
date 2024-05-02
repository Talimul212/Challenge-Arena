/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { InputColor, primaryColor } from "../Color/Color";
import { useState } from "react";

const TuitonForm = () => {
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
      <p className="text-lg text-black font-bold ">Create tuiton post</p>

      <TuitionForm onSubmit={handleTuitons}>
        <FormField>
          <Input
            type="text"
            name="desription"
            placeholder="Desription (course/subject)"
            onChange={handleInputChange}
          />
        </FormField>
        <FormField>
          <Input
            type="text"
            name="location"
            placeholder="Location (area,city)"
            onChange={handleInputChange}
          />
        </FormField>
        <div className=" w-full">
          <div className="justify-start items-start ">
            <label className="label cursor-pointer gap-3 justify-start">
              <input
                type="radio"
                name="radio-10"
                value="tutor"
                checked
                onChange={handleInputChange}
                className="radio checked:checked:bg-[#00bf63]"
              />
              <span className="label-text text-[13px]">I'm the tutor</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-3 justify-start">
              <input
                type="radio"
                name="radio-10"
                value="tutorNeed"
                checked
                onChange={handleInputChange}
                className="radio checked:bg-[#00bf63]"
              />
              <span className="label-text text-[13px]">I need tutor</span>
            </label>
          </div>
        </div>
        <Button type="submit">POST</Button>
      </TuitionForm>
    </div>
  );
};

export default TuitonForm;
const TuitionForm = styled.form`
  margin-top: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px;
  outline: 0;
  width: 89vw;
  border: none;
  height: 50px;
  background: ${InputColor};
`;

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "gray" : primaryColor)};
  color: white;
  padding: 15px;
  border: none;
  width: 100%;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
