/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import styled from "styled-components";
import { RiSendPlane2Fill } from "react-icons/ri";
import { MdAppBlocking } from "react-icons/md";
import { MdReportOff } from "react-icons/md";
import { GiClosedDoors } from "react-icons/gi";
import { InputColor, primaryColor } from "../Color/Color";
import { Link } from "react-router-dom";
const Tuitionchat = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const handleProfileClick = () => {
    setIsProfileVisible((prev) => !prev);
  };
  const hanlerBlock = () => {
    console.log("Block");
  };
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
    <div className=" bg-slate-300">
      <div className="flex justify-between items-center bg-white mt-2 px-2 shadow pb-3">
        <div className="flex justify-start items-center gap-5 ">
          <Link to="/buI/tuition">
            <IoMdArrowBack color="gray" />
          </Link>
          <p className="text-black text-lg">Hasna MD: Hosan Shakib</p>
        </div>
        <PiDotsThreeOutlineVerticalFill
          className=" cursor-pointer  font-semibold"
          onClick={handleProfileClick}
        />
      </div>
      <BottomPostion>
        <TuitionForm onSubmit={handleTuitons}>
          <FormField>
            <Input
              type="text"
              name="message"
              placeholder="Send a  message"
              onChange={handleInputChange}
            />
          </FormField>
        </TuitionForm>
        <div className="bg-[#00bf63] text-white flex justify-center text-2xl mt-[6px] px-3 ms-[-15px] w-[57px]  py-[16px] h-[100%]">
          <RiSendPlane2Fill />
        </div>
      </BottomPostion>

      <OposSections isVisible={isProfileVisible}>
        <div className=" flex items-center justify-between py-3 ">
          <div className="flex flex-col gap-2">
            <ButtonLogOut onClick={hanlerBlock}>
              <MdAppBlocking /> Block
            </ButtonLogOut>
            <ButtonLogOut onClick={hanlerBlock}>
              <MdReportOff /> Report
            </ButtonLogOut>
            <ButtonLogOut onClick={handleProfileClick}>
              {" "}
              <GiClosedDoors />
              Close
            </ButtonLogOut>
          </div>
        </div>
      </OposSections>
    </div>
  );
};

export default Tuitionchat;

const OposSections = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  width: 260px;

  color: black;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 7px;
  margin-top: -45px;
  border-radius: 5px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: all 0.3s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(10px)"}; /* Add transformation */
  @media (max-width: 768px) {
    margin-left: -130px;
    width: 130px;
  }
`;

const ButtonLogOut = styled.button`
  display: flex;
  justify-content: start;
  gap: 20px;

  align-items: center;
  border: none;
  outline: none;
  background: none;
  font-size: 15px;
  font-weight: 500;
  color: ${primaryColor};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: black; /* Change text color on hover */
  }
`;
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
  margin: 0px 0;
  width: auto;
`;

const Input = styled.input`
  padding: 15px;
  outline: 0;
  width: 89vw;
  border: none;
  height: 56px;
  background: ${InputColor};
`;
const BottomPostion = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;
