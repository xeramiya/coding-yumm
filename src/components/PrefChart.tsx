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
  Legend,
} from "recharts";

import {
  ResasPref,
  ResasPrefPopComp,
  ResasPrefPopCompData1,
  ResasPrefPopCompData2,
} from "lib/type";
import { colorPallet } from "lib/const";

import { useCheckedPrefsValue } from "context/CheckedPrefsProvider";
import { useSelectedDemogrValue } from "context/SelectedDemogrProvider";

const PrefChart = ({
  prefDatas,
  prefPopComps,
}: {
  prefDatas: Array<ResasPref>;
  prefPopComps: Array<ResasPrefPopComp>;
}) => {
  console.log("GRAPH");
  const checkedPrefs = useCheckedPrefsValue();
  const selectedDemogr = useSelectedDemogrValue();

  let data: Array<{ [key: string]: number }> = [];

  if (!data.length) {
    prefPopComps[0].data[selectedDemogr].data.map((elem) => {
      data.push({ year: elem.year });
    });
  }

  checkedPrefs.map((checkedPref) => {
    const checkedPrefIndex = checkedPref - 1;
    prefPopComps[checkedPrefIndex].data[selectedDemogr].data.map(
      (elem, index) => {
        data[index][prefDatas[checkedPrefIndex].prefName] = elem.value;
      }
    );
  });

  console.log(data);

  return (
    <div>
      <div>DEMOGR: {selectedDemogr}</div>
      <ResponsiveContainer width="100%" aspect={1.6}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 60, bottom: 20, left: 30 }}
        >
          <CartesianGrid strokeDasharray="4 2" stroke="#ccc" />
          <XAxis dataKey="year" interval={3} unit="年" stroke="" />
          <YAxis interval="preserveStartEnd" stroke="" />
          <Tooltip />
          <Legend />
          {checkedPrefs.map((elem, index) => {
            return (
              <Line
                key={elem}
                type="monotone"
                strokeWidth="1.5"
                dataKey={prefDatas[elem - 1].prefName}
                unit="人"
                stroke={
                  colorPallet[index] ?? colorPallet[colorPallet.length - 1]
                }
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrefChart;
