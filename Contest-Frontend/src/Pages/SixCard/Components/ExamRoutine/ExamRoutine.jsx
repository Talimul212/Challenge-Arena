import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ExamCard from "../../../../Components/Card/ExamCard";
import { primaryColor } from "../../../../Components/Color/Color";
import { useEffect } from "react";
import { getExamRoutine } from "../../../../features/examRoutine/serviceApi";
import LoaderHub from "../../../../Components/Loader/LoaderHub";

const ExamRoutine = () => {
  const { data, isLoading } = useSelector((state) => state?.examRoutine);
  const dispatch = useDispatch();
  useEffect(() => {
    getExamRoutine(dispatch);
  }, [dispatch]);

  if (isLoading) {
    <p>wating......</p>;
  }
  const examSchedule = data;

  function getFirstExamDate(schedule) {
    if (!Array.isArray(schedule) || schedule.length === 0) {
      return null; // No exams in the schedule or invalid schedule format
    }

    // Filter out any invalid entries before sorting
    const validExams = schedule.filter((exam) => exam && exam.date);

    if (validExams.length === 0) {
      return null; // No valid exam dates found
    }

    // Sort the exams by date (ascending order)
    const sortedExams = validExams.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // Return the date of the first exam
    return sortedExams[0].date;
  }

  // Example usage:
  const firstExamDate = getFirstExamDate(examSchedule);
  return (
    <>
      {!data ? (
        <LoaderHub type={"examRoutine"} />
      ) : (
        <CourseContain>
          <Title>Your Exam will start: {firstExamDate}</Title>
          {examSchedule?.map((daySchedule, index) => (
            <ExamDay key={index}>
              <DayTitle>
                {daySchedule.date} - {daySchedule.day}
              </DayTitle>
              {daySchedule?.courses.map((course) => (
                <ExamCard
                  key={course._id}
                  courseCode={course.courseCode}
                  courseName={course.courseName}
                  semester={course.semester}
                />
              ))}
            </ExamDay>
          ))}
        </CourseContain>
      )}
    </>
  );
};

export default ExamRoutine;

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

const ExamDay = styled.div`
  margin-bottom: 20px;
`;

const DayTitle = styled.h3`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${primaryColor};
`;
