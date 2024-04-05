import styled from "styled-components";
import CourseCard from "../../Components/Card/CourseCard";

const Course = () => {
  return (
    <CourseContain>
      <Title>In this semseter you have 6 course :-</Title>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </CourseContain>
  );
};

export default Course;

const CourseContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
