/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "./chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getUser } from "../../features/users/serviceApi";
import { useEffect, useState } from "react";

const Chart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { totalUser } = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getUser(dispatch);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [dispatch]);

  // Extract the semester and year from the batch string and count the number of students in each

  if (isLoading) {
    return (
      <div className="">
        <div className="skeleton rounded h-[264px] w-full"></div>
      </div>
    );
  }
  console.log(totalUser);
  const semesterCounts = totalUser?.reduce((acc, student) => {
    const batch = student?.batch;
    const semester = batch?.match(/\(([^)]+)\)/)[1]; // Extract content within parentheses
    acc[semester] = (acc[semester] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the chart
  const chartData = Object?.keys(semesterCounts).map((semester) => ({
    semester,
    Session: semesterCounts[semester],
    year: parseInt(semester.split("-")[1]), // Extract year
  }));

  // Sort data by year
  chartData.sort((a, b) => a.year - b.year);

  return (
    <ResponsiveContainer width="100%" height="80%">
      <div>
        <p className="ms-7 my-2 text-lg font-semibold">Admission Bar-Chart:</p>
        <BarChart
          width={640}
          height={222}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Session" barSize={40}>
            {chartData?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry?.semester?.startsWith("Spring") ? "#00bf63" : "#38b6ff"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
};

export default Chart;
