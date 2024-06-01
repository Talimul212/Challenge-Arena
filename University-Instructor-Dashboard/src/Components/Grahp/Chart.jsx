/* eslint-disable react/prop-types */
import "./chart.css";
// import { FaBookReader } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Student A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: " B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: " C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: " D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: " E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: " F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: " G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="80%">
      <p className="  ms-7 my-2 text-lg font-semibold">University Survey:</p>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#38b6ff"
          activeBar={<Rectangle fill="#38b6ff" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#00bf63"
          activeBar={<Rectangle fill="#00bf63" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
