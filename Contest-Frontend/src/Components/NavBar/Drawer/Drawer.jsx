/* eslint-disable react/prop-types */

import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { PiNewspaperClipping } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { LiaDatabaseSolid } from "react-icons/lia";
import { IoMdCart } from "react-icons/io";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";
import { FaCalculator } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { LiaStreamSolid } from "react-icons/lia";
import { primaryColor } from "../../Color/Color";
import { Link } from "react-router-dom";
const Drawer = ({ mobileMenuOpen, menuRef, CloseMobileMenu }) => {
  return (
    <MobileMenuList isOpen={mobileMenuOpen} ref={menuRef}>
      <Div
        style={{
          textAlign: "right",
          color: "black",
          fontSize: "30px",
          display: "flex",
          justifyContent: "end",
          paddingTop: " 5px",
          paddingRight: " 4px",
          marginBottom: "-0px",
          background: "#f3ebeb65",
        }}
      >
        <IoIosCloseCircleOutline onClick={CloseMobileMenu} />
      </Div>
      <Div
        style={{
          display: "flex",
          padding: " 0px 10px",
          paddingBottom: "15px",
          gap: "8px",
          marginBottom: "10px",
          background: "#f3ebeb65",
        }}
      >
        <CgProfile color={primaryColor} size={"50px"} />
        <div>
          <p style={{ fontSize: "15px", fontWeight: "700" }}>Talimul Islam</p>
          <p style={{ fontSize: "13px", fontWeight: "500" }}>
            islamtalimul0@gmal.com
          </p>
        </div>
      </Div>
      <Link onClick={CloseMobileMenu} to="/">
        <Option>
          <IoPersonOutline />
          Profile
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/newsfeed">
        <Option>
          <PiNewspaperClipping />
          Newsfeed
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/messages">
        <Option>
          <LuMessagesSquare />
          Messages
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/classmate">
        <Option>
          <TiGroup />
          Classmate
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/tuition">
        <Option>
          <GiTeacher />
          Tuition
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buySell">
        <Option>
          <IoMdCart />
          BuySell Books
        </Option>
      </Link>
      <hr style={{ margin: "15px 0px" }} />

      <Link onClick={CloseMobileMenu} to="/buI/course">
        <Option>
          <LiaDatabaseSolid />
          Course
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/schedules">
        <Option>
          <GrSchedules />
          Schedules
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/classes">
        <Option>
          <MdOutlineClass />
          Classes
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/faculties">
        <Option>
          <MdOutlineGroups />
          Feculties
        </Option>
      </Link>
      <hr style={{ margin: "15px 0px" }} />
      <Link onClick={CloseMobileMenu} to="/buI/cgpa">
        <Option>
          <FaCalculator />
          CGPA Calculator
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/cgpaAnalyzer">
        <Option>
          <IoAnalytics />
          CGPA Analyzer
        </Option>
      </Link>
      <hr style={{ margin: "15px 0px" }} />
      <Link onClick={CloseMobileMenu} to="/buI/contact">
        <Option>
          <CgMail />
          Contact
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/privacyPolicy">
        <Option>
          <MdOutlinePrivacyTip />
          Privacy Policy
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/termsConditions">
        <Option>
          <LiaStreamSolid />
          Terms & Conditions
        </Option>
      </Link>
      <Link onClick={CloseMobileMenu} to="/buI/about">
        <Option>
          <CiCircleQuestion />
          About
        </Option>
      </Link>
    </MobileMenuList>
  );
};

export default Drawer;

const Div = styled.div``;
const MobileMenuList = styled.ul`
  z-index: 9999;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  padding-bottom: 10px;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-250px")}; /* Adjust as needed */
  width: 250px; /* Adjust as needed */
  height: 100vh;

  background-color: white;
  /* Background color of the drawer */
  transition: left 0.3s ease; /* Add transition effect */

  li {
    margin: 0;
    padding: 10px 15px;
    /* Separator between menu items */
    a {
      text-decoration: none;
      color: gray;
      display: block;
    }
  }
`;

const Option = styled.li`
  display: flex;
  justify-content: start;
  gap: 30px;
  align-items: center;
  color: gray;
  cursor: pointer;
  &:hover {
    color: ${primaryColor};
  }
`;
