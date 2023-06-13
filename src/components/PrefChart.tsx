"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {} from "lib/api";
import {
  ResasPrefPopComp,
  ResasPrefPopCompData1,
  ResasPrefPopCompData2,
} from "lib/type";

const PrefChart = ({
  prefPopComps,
}: {
  prefPopComps: Array<ResasPrefPopComp>;
}) => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 200, pv: 2100, amt: 2300 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={1.6}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrefChart;
