import styled from "styled-components";
import CeCourseCard from "../../../../Components/Card/CeCourseCard";
import { completeCourseData } from "../../../../damodata";
const CompleteCourse = () => {
  const sortedCourses = completeCourseData.sort(
    (a, b) => a.semesterCompleted - b.semesterCompleted
  );

  return (
    <CourseContain>
      <Title>You have completed {sortedCourses.length} courses:</Title>
      {sortedCourses.map((course, index) => (
        <CeCourseCard key={index} index={index} course={course} />
      ))}
    </CourseContain>
  );
};

export default CompleteCourse;
const CourseContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;
