import styled from "styled-components";
import ClassRoutineCard from "../../../../Components/Card/ClassRoutineCard";
import { CourseSchedule } from "../../../../damodata";
import React from "react";

const Classes = () => {
  return (
    <CourseContain>
      <RoutineMapp>
        {CourseSchedule.map((daySchedule) => (
          <React.Fragment key={daySchedule.id}>
            <DayDuration>
              <p className="text-2xl text-[#38b6ff]">
                {daySchedule.day} (
                <span className="text-lg text-[#00bf63]">
                  {daySchedule.batch}
                </span>
                )
              </p>
            </DayDuration>
            {daySchedule.courses.map((course, idx) => (
              <ClassRoutineCard
                key={idx}
                course={course}
                daySchedule={daySchedule}
              />
            ))}
          </React.Fragment>
        ))}
      </RoutineMapp>
    </CourseContain>
  );
};

export default Classes;

const CourseContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;

const RoutineMapp = styled.div``;
const DayDuration = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 20px 0 15px 0px;
`;
