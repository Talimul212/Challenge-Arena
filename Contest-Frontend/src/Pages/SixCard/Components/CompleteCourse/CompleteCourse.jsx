import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CeCourseCard from "../../../../Components/Card/CeCourseCard";
import { useEffect } from "react";
import { getCompleteCourse } from "../../../../features/completeCourse/serviceApi";
import LoaderHub from "../../../../Components/Loader/LoaderHub";
const CompleteCourse = () => {
  const { data, isLoading } = useSelector((state) => state?.completeCourse);
  const dispatch = useDispatch();
  useEffect(() => {
    getCompleteCourse(dispatch);
  }, [dispatch]);
  if (isLoading) {
    <p>waiting....</p>;
  }
  console.log(data);
  const completeCourseData = data;
  const sortedCourses = completeCourseData?.sort(
    (a, b) => a.semesterCompleted - b.semesterCompleted
  );

  return (
    <>
      {!data ? (
        <LoaderHub type={"completeCourse"} />
      ) : (
        <CourseContain>
          <Title>You have completed {sortedCourses?.length} courses:</Title>
          {sortedCourses?.map((course, index) => (
            <CeCourseCard key={index} index={index} course={course} />
          ))}
        </CourseContain>
      )}
    </>
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
