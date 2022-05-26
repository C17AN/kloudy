import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip
} from "recharts";

const data = [
  { name: "기동 중", value: 400, color: "#ccffcc" },
  { name: "장애 발생", value: 300, color: "#ffcdcd" },
  { name: "중지 중", value: 300, colod: "#aaebff" }
];

const StatusSummary = () => {
  return (
    <>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx={"50%"}
            fill="#8884d8"
            innerRadius={50}
            legendType="circle"
          />
          <Tooltip
            contentStyle={{
              color: "red",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: 12
            }}
            itemStyle={{
              color: "rgba(0,0,0,0.7)",
              fontSize: 14
            }}
          />
          <Legend verticalAlign="bottom" height={24} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default StatusSummary;
