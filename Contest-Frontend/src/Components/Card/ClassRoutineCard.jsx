/* eslint-disable react/prop-types */
import styled from "styled-components";

const ClassRoutineCard = ({ course, daySchedule }) => {
  return (
    <CardContainer>
      <Period>
        <div>{course.period}</div>
        {/* Render a line after each period except the last one */}
        {course !== daySchedule[daySchedule.length - 1] && <Line />}
      </Period>
      <CourseDetails>
        <CourseName>{course.courseName}</CourseName>
        <TeacherName>{course.instructor}</TeacherName>
        <Type>{course.type}</Type>
      </CourseDetails>
    </CardContainer>
  );
};

export default ClassRoutineCard;
const CardContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 15px;

  margin-bottom: 15px;
  margin-left: 0px;
  position: relative;
  box-shadow: 0 1px 2px 0 gray; /* Position relative for line */
`;

const Period = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2%;

  border-left: 2px solid #00bf63; /* Adjust line color as needed */
`;

const CourseDetails = styled.div`
  margin-top: 10px;
`;

const CourseName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const TeacherName = styled.div`
  margin-top: 2px;
  font-size: 14px;
  color: #666;
`;

const Type = styled.div`
  font-size: 14px;
  color: #666;
`;
