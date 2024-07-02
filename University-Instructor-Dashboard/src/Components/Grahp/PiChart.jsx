/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { getUser } from "../../features/users/serviceApi";

const COLORS = [
  "#00bf63",
  "#38b6ff",
  "#1af38a",
  "#bddef1",
  "#b4d0e0",
  "#89ddb4",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PiChart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { totalUser } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="">
        <div className="skeleton rounded h-[370px] w-full"></div>
      </div>
    );
  }

  // Count the number of students per department
  const departmentCounts = totalUser.reduce((acc, user) => {
    const department = user.department;
    if (acc[department]) {
      acc[department]++;
    } else {
      acc[department] = 1;
    }
    return acc;
  }, {});

  // Convert the counts to the format required by recharts
  const data = Object.entries(departmentCounts).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <>
      <ResponsiveContainer width="100%" height={380}>
        <PieChart className="mt-2" width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PiChart;
