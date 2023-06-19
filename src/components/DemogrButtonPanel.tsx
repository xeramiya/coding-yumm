"use client";

import React from "react";
import {
  useSelectedDemogrValue,
  useSetSelectedDemogrValue,
} from "context/SelectedDemogrProvider";

/**
 * 人口構成ボタンパネル
 */
const DemogrButtonPanel = () => {
  // 全ての人口構成ボタンを用意 (valueはAPI返値の配列インデックス)
  const allDemogrs = [
    {
      name: "総人口",
      value: 0,
    },
    {
      name: "年少人口",
      value: 1,
    },
    {
      name: "生産年齢人口",
      value: 2,
    },
    {
      name: "老年人口",
      value: 3,
    },
  ];

  const demogrButtonIdPrefix = `demogrButton-`;
  const setSelectedDemogr = useSetSelectedDemogrValue();
  const selectedDemogur = useSelectedDemogrValue();

  // ラジオボタンを押された時の処理
  const changeDemogr = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ボタンのidからalldmogrsのvalueに当たる部分を抽出
    const targetValue = Number(
      event.target.id.substring(demogrButtonIdPrefix.length)
    );
    setSelectedDemogr(targetValue);
  };

  return (
    <ul className="demogr-button-panel">
      {allDemogrs.map((elem) => {
        const demogrButtonId = `${demogrButtonIdPrefix}${elem.value}`;
        return (
          <li key={elem.value} className="demogr-button">
            <input
              type="radio"
              name="demogrButton"
              id={demogrButtonId}
              onChange={changeDemogr}
              checked={elem.value === selectedDemogur}
            />
            <label htmlFor={demogrButtonId}>{elem.name}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default DemogrButtonPanel;
