"use client";

import React from "react";
import {
  useSelectedDemogrValue,
  useSetSelectedDemogrValue,
} from "context/SelectedDemogrProvider";

const DemogrButtonPanel = () => {
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
  // VALUEをなくせ！

  const demogrButtonIdPrefix = `demogrButton-`;
  const setSelectedDemogr = useSetSelectedDemogrValue();
  const selectedDemogur = useSelectedDemogrValue();

  const changeDemogr = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("おされた！")
    const targetValue = Number(
      event.target.id.substring(demogrButtonIdPrefix.length)
    );
    setSelectedDemogr(targetValue);
    console.log('TARGET:', targetValue)
    console.log('SELECTED:', selectedDemogur)
  };

  console.log("RENDERED: DEMOGUR BUTTON PANEL");
  console.log("selectedDemogr", selectedDemogur)
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
