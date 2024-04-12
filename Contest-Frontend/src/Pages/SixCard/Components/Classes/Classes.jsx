import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ClassRoutineCard from "../../../../Components/Card/ClassRoutineCard";
import React from "react";
import { getClasses } from "../../../../features/classRoutine/serviceApi.js";
const Classes = () => {
  const { data, isLoading } = useSelector((state) => state?.classRoutine);
  const dispatch = useDispatch();
  useEffect(() => {
    getClasses(dispatch);
  }, [dispatch]);
  if (isLoading) {
    <p>lolo</p>;
  }
  const CourseSchedule = data;
  return (
    <CourseContain>
      <RoutineMapp>
        {CourseSchedule?.map((daySchedule) => (
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
            <div className="block lg:flex justify-between">
              {daySchedule.courses.map((course, idx) => (
                <ClassRoutineCard
                  key={idx}
                  course={course}
                  daySchedule={daySchedule}
                />
              ))}
            </div>
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
