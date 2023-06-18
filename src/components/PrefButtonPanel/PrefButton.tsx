"use client";

import React, { useContext, useEffect, useState, useRef } from "react";
import { ResasPref } from "lib/type";

import {
  useCheckedPrefsValue,
  useSetCheckedPrefsValue,
} from "context/CheckedPrefsProvider";

import { CHART_LINE_COLORS } from "lib/const";

const PrefButton = ({ prefData }: { prefData: ResasPref }) => {
  const prefButtonIdPrefix = `prefButton-`;
  const prefButtonId = `${prefButtonIdPrefix}${prefData.prefCode}`;
  const defaultColor = "#00000000";

  const setCheckedPrefs = useSetCheckedPrefsValue();
  const checkedPrefs = useCheckedPrefsValue();
  const [color, setColor] = useState(defaultColor);

  // 都道府県ボタンが押された時
  const togglePref = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("RUNNNING togglePref");

    const targetCode = Number(
      event.target.id.substring(prefButtonIdPrefix.length)
    );
    console.log("TARGET", targetCode); // 4 DEBUG

    // チェックがついたか
    if (event.target.checked) {
      console.log("ついたよ！");
      setCheckedPrefs((prev) => {
        return prev.concat([targetCode]);
      });
    } else {
      console.log("消えたよ！");
      setColor(defaultColor);
      setCheckedPrefs((prev) => prev.filter((elem) => elem !== targetCode));
    }
  };
  console.log("なんでや！", prefData.prefName);

  useEffect(() => {
    const checkedPrefsIndex = checkedPrefs.indexOf(prefData.prefCode);
    if (CHART_LINE_COLORS.length > checkedPrefsIndex) {
      setColor(CHART_LINE_COLORS[checkedPrefsIndex]);
    } else {
      setColor(CHART_LINE_COLORS[CHART_LINE_COLORS.length - 1]);
    }
  }, [prefData, checkedPrefs]);

  return (
    <div className="pref-button">
      <input
        type="checkbox"
        id={prefButtonId}
        onChange={(event) => togglePref(event)}
      />
      <label
        htmlFor={prefButtonId}
        style={{ border: `solid 2px ${color}` }}
      >
        {prefData.prefName}
      </label>
    </div>
  );
};

export default PrefButton;
