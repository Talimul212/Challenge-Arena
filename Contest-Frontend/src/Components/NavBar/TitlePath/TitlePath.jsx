import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { fontFamily, primaryColor } from "../../Color/Color";

const TitlePath = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === "/" ? (
        <Title>
          {" "}
          <span style={{ color: `${primaryColor}` }}>University</span>{" "}
          Instructor
        </Title>
      ) : path === "/buI/course" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>Course</span>
        </Title1>
      ) : path === "/buySell" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>Buy</span> Sell
        </Title1>
      ) : path === "/buI/classmate" ? (
        <Title1 style={{ color: `${primaryColor}` }}> Classmate</Title1>
      ) : path === "/buI/classes" ? (
        <Title1 style={{ color: `${primaryColor}` }}> Classes</Title1>
      ) : path === "/buI/completeCourse" ? (
        <Title1>
          <span style={{ color: `${primaryColor}` }}>Complete</span> Course
        </Title1>
      ) : path === "/buI/courseBook" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Course</span> Book
        </Title1>
      ) : path === "/buI/examSchedules" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Exam </span> Schedules
        </Title1>
      ) : path === "/buI/noticeEvent" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Notice </span>& Event
        </Title1>
      ) : path === "/buI/notifications" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Notifications</span>
        </Title1>
      ) : path === "/buI/newsfeed" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Newsfeed</span>
        </Title1>
      ) : path === "/buI/messages" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Messages</span>
        </Title1>
      ) : path === "/buI/createPoll" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Create</span> Poll
        </Title1>
      ) : path === "/buI/faculties" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Faculties</span>
        </Title1>
      ) : path === "/buI/schedules" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}> Schedules</span>
        </Title1>
      ) : path === "/buI/tuition" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>Tuition</span>
        </Title1>
      ) : path === "/buI/cgpa" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>CGPA</span> Calculator
        </Title1>
      ) : path === "/buI/cgpaAnalyzer" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>CGPA</span> Analyzer
        </Title1>
      ) : path === "/buI/gallery" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>Gallery</span>
        </Title1>
      ) : path === "/buI/about" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>About</span> Us
        </Title1>
      ) : path === "/buI/contact" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>Contact</span> Us
        </Title1>
      ) : path === "/buI/privacyPolicy" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>privacy</span> Policy
        </Title1>
      ) : path === "/buI/termsConditions" ? (
        <Title1>
          {" "}
          <span style={{ color: `${primaryColor}` }}>Terms</span> & Conditions
        </Title1>
      ) : (
        <></>
      )}
    </>
  );
};

export default TitlePath;
const Title = styled.h4`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: black;
    font-family: ${fontFamily};
    cursor: pointer;
    font-size: 18px;
  }
`;
const Title1 = styled.h4`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: black;
    font-family: ${fontFamily};
    cursor: pointer;
    font-size: 18px;
    position: absolute;
    left: 50px;
  }
`;
