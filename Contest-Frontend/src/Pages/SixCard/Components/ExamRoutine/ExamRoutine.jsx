import styled from "styled-components";
import ExamCard from "../../../../Components/Card/ExamCard";
import { examSchedule } from "../../../../damodata";
import { primaryColor } from "../../../../Components/Color/Color";

const ExamRoutine = () => {
  function getFirstExamDate(schedule) {
    if (schedule.length === 0) {
      return null; // No exams in the schedule
    }

    // Sort the exams by date (ascending order)
    const sortedExams = schedule.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // Return the date of the first exam
    return sortedExams[0].date;
  }

  // Example usage:
  const firstExamDate = getFirstExamDate(examSchedule);
  console.log("First exam date:", firstExamDate);
  return (
    <CourseContain>
      <Title>Your Exam will start: {firstExamDate}</Title>
      {examSchedule.map((daySchedule, index) => (
        <ExamDay key={index}>
          <DayTitle>
            {daySchedule.date} - {daySchedule.day}
          </DayTitle>
          {daySchedule.courses.map((course, idx) => (
            <ExamCard
              key={idx}
              courseCode={course.courseCode}
              courseName={course.courseName}
              semester={course.semester}
            />
          ))}
        </ExamDay>
      ))}
    </CourseContain>
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
