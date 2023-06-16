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
  ResasPref,
  ResasPrefPopComp,
  ResasPrefPopCompData1,
  ResasPrefPopCompData2,
} from "lib/type";

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

  checkedPrefs.map((checkedPref) => {
    const checkedPrefIndex = checkedPref - 1;

    if (!data.length) {
      prefPopComps[checkedPrefIndex].data[selectedDemogr].data.map((elem) => {
        data.push({ year: elem.year });
      });
    }
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
          {checkedPrefs.map((elem) => {
            return (
              <Line
                key={elem}
                type="monotone"
                dataKey={prefDatas[elem - 1].prefName}
              />
            );
          })}
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
