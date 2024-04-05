import styled from "styled-components";

import { FaComputer } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import CourseCard from "../../../../Components/Card/CourseCard";
import { coursesData } from "../../../../damodata";

const Course = () => {
  let theoryCount = 0;
  let labCount = 0;

  coursesData.forEach((course) => {
    if (course.type === "Theory") {
      theoryCount++;
    } else if (course.type === "Lab") {
      labCount++;
    }
  });
  return (
    <CourseContain>
      <div>
        <Title>In this semseter you have 6 course :-</Title>
      </div>
      <div className="flex items-center gap-2 text-[#00bf63]">
        <MdOutlineMenuBook /> Theory: {theoryCount}
      </div>

      <div className=" absolute right-3 top-24 flex items-center gap-2 text-[#38b6ff]">
        <FaComputer /> Lab: {labCount}
      </div>
      {coursesData.map((course, i) => (
        <CourseCard key={i} index={i} course={course} />
      ))}
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
  margin-bottom: 10px;
`;
