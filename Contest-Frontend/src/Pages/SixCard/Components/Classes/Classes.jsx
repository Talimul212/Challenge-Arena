import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ClassRoutineCard from "../../../../Components/Card/ClassRoutineCard";
import React from "react";
import { getClasses } from "../../../../features/classRoutine/serviceApi.js";
import LoaderHub from "../../../../Components/Loader/LoaderHub.jsx";
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
    <>
      {!data ? (
        <LoaderHub type={"classRoutine"} />
      ) : (
        <CourseContain>
          <RoutineMapp>
            {CourseSchedule?.map((daySchedule) => (
              <React.Fragment key={daySchedule.id}>
                <div
                  tabIndex={0}
                  className="collapse w-full border-[1px] mb-1 collapse-arrow   rounded"
                >
                  <input type="checkbox" />
                  <div className="collapse-title  shadow my-[-20px]  text-xl font-medium">
                    <DayDuration>
                      <p className="text-xl text-[#38b6ff]">
                        {daySchedule.day} (
                        <span className="text-lg text-[#00bf63]">
                          {daySchedule.batch}
                        </span>
                        )
                      </p>
                    </DayDuration>
                  </div>
                  <div className="collapse-content bg-transparent">
                    <div className="block lg:flex justify-between mt-8">
                      {daySchedule.courses.map((course, idx) => (
                        <ClassRoutineCard
                          key={idx}
                          course={course}
                          daySchedule={daySchedule}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* <DayDuration> */}
                {/* <p className="text-2xl text-[#38b6ff]"> */}
                {/* {daySchedule.day} ( */}
                {/* <span className="text-lg text-[#00bf63]"> */}
                {/* {daySchedule.batch} */}
                {/* </span> */}
                {/* ) */}
                {/* </p> */}
                {/* </DayDuration> */}
                {/* <div className="block lg:flex justify-between"> */}
                {/* {daySchedule.courses.map((course, idx) => ( */}
                {/* <ClassRoutineCard key={idx} course={course} daySchedule={daySchedule} /> */}
                {/* ))} */}
                {/* </div> */}
              </React.Fragment>
            ))}
          </RoutineMapp>
        </CourseContain>
      )}{" "}
    </>
  );
};

export default Classes;

const CourseContain = styled.div`
  margin-top: 10px;
  margin-bottom: 90px;
`;

const RoutineMapp = styled.div``;
const DayDuration = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 20px 0 15px 0px;
`;
