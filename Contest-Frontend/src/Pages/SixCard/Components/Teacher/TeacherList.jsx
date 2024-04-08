import styled from "styled-components";
import TeacherCard from "../../../../Components/Card/TeacherCard";
import { courseTeacherData } from "../../../../damodata";
// Import your teacher data

const TeacherList = () => {
  return (
    <CourseContain>
      <div className=" grid grid-cols-2 gap-5 mt-5">
        {courseTeacherData.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>
    </CourseContain>
  );
};

export default TeacherList;

const CourseContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
