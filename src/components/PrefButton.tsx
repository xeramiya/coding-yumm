"use client";

import { useEffect, useState } from "react";

type ResasPrefecture = {
  prefCode: number;
  prefName: string;
};

const PrefButton = async ({ prefData }: { prefData: ResasPrefecture }) => {
  const [prefButtonId, setPrefButtonId] = useState(
    `PrefButton-${prefData.prefCode}`
  );

  const togglePref = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id)
    if (!event.target.checked) {

    } else {
  
    }
  };

  useEffect(() => {
    // デバッグ用
    console.log("DEBUG: RULE:", prefData.prefName);
    console.log("PREF BUTTON ID:", prefButtonId);
  }, [prefData, prefButtonId]);

  return (
    <label htmlFor={prefButtonId} className="bg-slate-400">
      <input
        type="checkbox"
        id={prefButtonId}
        onChange={togglePref}
      />
      {prefData.prefName}
    </label>
  );
};

export default PrefButton;
