"use client";

import React, { useContext, useEffect, useState } from "react";
import { ResasPref } from "lib/type";

import {
  useCheckedPrefsValue,
  useSetCheckedPrefsValue,
  CheckedPrefsContext,
  SetCheckedPrefsContext,
} from "context/CheckedPrefsProvider";

const PrefButton = async ({ prefData }: { prefData: ResasPref }) => {
  const prefButtonIdPrefix = `prefButton-`;
  const prefButtonId = `${prefButtonIdPrefix}${prefData.prefCode}`;

  const setCheckedPrefs = useSetCheckedPrefsValue();

  // 都道府県ボタンが押された時
  const togglePref = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("RUNNNING togglePref");

    const targetCode = Number(
      event.target.id.substring(prefButtonIdPrefix.length)
    );
    console.log("TARGET", targetCode); // 4 DEBUG

    // チェックがついていたか
    if (event.target.checked) {
      console.log("ついたよ！");
      setCheckedPrefs((prev) => {
        return prev.concat([targetCode]);
      });
    } else {
      console.log("消えたよ！");
      setCheckedPrefs((prev) => prev.filter((elem) => elem !== targetCode));
    }
  };
  console.log("なんでや！", prefData.prefName);

  return (
    <label htmlFor={prefButtonId} className="bg-slate-400">
      <input type="checkbox" id={prefButtonId} onChange={togglePref} />
      {prefData.prefName}
    </label>
  );
};

export default PrefButton;
