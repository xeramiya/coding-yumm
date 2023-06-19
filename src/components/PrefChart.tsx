"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { ResasPref, ResasPrefPopComp } from "lib/type";
import { CHART_LINE_COLORS } from "lib/const";
import { useCheckedPrefsValue } from "context/CheckedPrefsProvider";
import { useSelectedDemogrValue } from "context/SelectedDemogrProvider";

/**
 * 都道府県別人口推移グラフ
 */
const PrefChart = ({
  prefDatas,
  prefPopComps,
}: {
  prefDatas: Array<ResasPref>;
  prefPopComps: Array<ResasPrefPopComp>;
}) => {
  const checkedPrefs = useCheckedPrefsValue();
  const selectedDemogr = useSelectedDemogrValue();

  // Rechartsグラフ用データ
  let data: Array<{ [key: string]: number }> = [];

  // データが無い場合
  if (!data.length) {
    // データがなくてもグラフに年代が表示されるようにする
    prefPopComps[0].data[selectedDemogr].data.map((elem) => {
      data.push({ year: elem.year });
    });
  }

  // 都道府県ボタンと、人口構成ボタンの状態に合わせて、Rechartsグラフ用のデータを生成
  checkedPrefs.map((checkedPref) => {
    const checkedPrefIndex = checkedPref - 1;
    prefPopComps[checkedPrefIndex].data[selectedDemogr].data.map(
      (elem, index) => {
        data[index][prefDatas[checkedPrefIndex].prefName] = elem.value;
      }
    );
  });

  return (
    <ResponsiveContainer width="100%" aspect={1.6}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, bottom: 30, left: 30 }}
      >
        <CartesianGrid strokeDasharray="4 2" stroke="#ccc" />
        <XAxis dataKey="year" interval={3} unit="年" stroke="" />
        <YAxis interval="preserveStartEnd" stroke="" />
        <Tooltip
          itemSorter={() => 1}
          animationDuration={200}
          contentStyle={{
            backgroundColor: "#ffffff22",
            backdropFilter: "blur(9px)",
          }}
        />
        {checkedPrefs.map((elem, index) => {
          return (
            <Line
              key={elem}
              type="monotone"
              strokeWidth="1.5"
              dataKey={prefDatas[elem - 1].prefName}
              unit="人"
              animationDuration={600}
              stroke={
                CHART_LINE_COLORS[index] ??
                CHART_LINE_COLORS[CHART_LINE_COLORS.length - 1]
              }
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PrefChart;
