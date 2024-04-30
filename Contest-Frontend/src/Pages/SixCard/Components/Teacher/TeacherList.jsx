import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import TeacherCard from "../../../../Components/Card/TeacherCard";
import { useEffect } from "react";
import { getTeachers } from "../../../../features/teachers/serviceApi";
import LoaderHub from "../../../../Components/Loader/LoaderHub";
// Import your teacher data

const TeacherList = () => {
  const { data, isLoading } = useSelector((state) => state?.teachers);
  const dispatch = useDispatch();
  useEffect(() => {
    getTeachers(dispatch);
  }, [dispatch]);
  if (isLoading) {
    <p>wating.......</p>;
  }
  console.log(data);
  const courseTeacherData = data;
  return (
    <>
      {!data ? (
        <LoaderHub type={"teachers"} />
      ) : (
        <CourseContain>
          <div className=" grid grid-cols-2 gap-5 mt-5">
            {courseTeacherData?.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
        </CourseContain>
      )}
    </>
  );
};

export default TeacherList;

const CourseContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
