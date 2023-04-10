import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import bg2 from "../assets/images/Vector-1.png";
import bg1 from "../assets/images/Vector.png";

const Statistics = () => {
  const assignment_marks = useLoaderData();
  console.log(assignment_marks);
  return (
    <section>
      <div
        className="banner bg-[#F9F9FF] h-72 md:h-80 lg:h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${bg1}), url(${bg2})` }}
      >
        <h1 className="text-3xl font-bold text-primary">Statistics</h1>
      </div>
      <div className="my-12">
        <h2 className="text-center text-linear text-3xl font-semibold mb-8">
          Assignment Analytics
        </h2>
        <ResponsiveContainer
          className="container mx-auto"
          width="100%"
          height={250}
        >
          <ComposedChart data={assignment_marks}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="Full Mark" barSize={20} fill="#413ea0" />
            {/* <Line type="monotone" dataKey="Obtain Mark" stroke="#ff7300" /> */}
            <Area
              type="monotone"
              dataKey="Obtain Mark"
              fill="#8884d8"
              stroke="#ff7300"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
