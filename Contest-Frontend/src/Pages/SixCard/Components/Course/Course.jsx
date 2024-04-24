import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import CourseCard from "../../../../Components/Card/CourseCard";
import { useEffect } from "react";
import { getCourses } from "../../../../features/course/serviceApi";

const Course = () => {
  const { data, isLoading } = useSelector((state) => state?.courseList);
  const { currentUser } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    getCourses(dispatch, currentUser?.batch);
  }, [dispatch, currentUser?.batch]);
  if (isLoading) {
    <p>lolo</p>;
  }
  const coursesData = data;

  let theoryCount = 0;
  let labCount = 0;

  coursesData?.forEach((course) => {
    if (course.type === "Theory") {
      theoryCount++;
    } else if (course.type === "Lab") {
      labCount++;
    }
  });
  return (
    <CourseContain>
      <div>
        <Title>In this semseter you have {coursesData?.length} course :-</Title>
      </div>
      <div className="flex items-center gap-2 text-[#00bf63]">
        <MdOutlineMenuBook /> Theory: {theoryCount}
      </div>

      <div className=" absolute right-3 top-24 flex items-center gap-2 text-[#38b6ff]">
        <FaComputer /> Lab: {labCount}
      </div>
      <div className="mt-5 w-full">
        {coursesData?.map((course, i) => (
          <CourseCard key={i} index={i} course={course} />
        ))}
      </div>
    </CourseContain>
  );
};

export default Course;

const CourseContain = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;
