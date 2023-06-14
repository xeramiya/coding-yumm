"use client";

import { useContext, useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  ResasPrefPopComp,
  ResasPrefPopCompData1,
  ResasPrefPopCompData2,
  CheckedPref,
} from "lib/type";

import {
  useCheckedPrefsValue,
  CheckedPrefsContext,
} from "context/CheckedPrefsProvider";

const PrefChart = ({
  prefPopComps,
}: {
  prefPopComps: Array<ResasPrefPopComp>;
}) => {
  console.log("GRAPH");
  console.log(prefPopComps[0].data[0].data);
  const checkedPrefs = useCheckedPrefsValue();
  const dataOne = prefPopComps[0].data[0].data;

  return (
    <div>
      <div>CODES: {checkedPrefs}</div>
      <ResponsiveContainer width="100%" aspect={1.6}>
        <LineChart
          data={dataOne}
          margin={{ top: 10, right: 60, bottom: 20, left: 30 }}
        >
          <Line type="monotone" dataKey="value" stroke="#008899" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrefChart;
