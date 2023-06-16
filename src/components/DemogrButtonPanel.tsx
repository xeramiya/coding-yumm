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

  const demogrButtonIdPrefix = `demogrButton-`;
  const setSelectedDemogr = useSetSelectedDemogrValue();
  const selectedDemogur = useSelectedDemogrValue();

  const changeDemogr = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(
      event.target.id.substring(demogrButtonIdPrefix.length)
    );
    setSelectedDemogr(targetValue);
  };

  console.log("RENDERED: DEMOGUR BUTTON PANEL")
  return (
    <ul>
      {allDemogrs.map((elem) => {
        const demogrButtonId = `${demogrButtonIdPrefix}${elem.value}`;

        return (
          <li key={elem.value}>
            <label htmlFor={demogrButtonId}>
              <input
                type="radio"
                name="demogrButton"
                id={demogrButtonId}
                onChange={changeDemogr}
                checked={elem.value === selectedDemogur}
              />
              {elem.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default DemogrButtonPanel;
