"use client";

import React, { useEffect, useState } from "react";
import { ResasPref } from "lib/type";
import {
  useCheckedPrefsValue,
  useSetCheckedPrefsValue,
} from "context/CheckedPrefsProvider";
import { CHART_LINE_COLORS } from "lib/const";

/**
 * 都道府県ボタン
 */
const PrefButton = ({ prefData }: { prefData: ResasPref }) => {
  const setCheckedPrefs = useSetCheckedPrefsValue();
  const checkedPrefs = useCheckedPrefsValue();

  const prefButtonIdPrefix = `prefButton-`;
  const prefButtonId = `${prefButtonIdPrefix}${prefData.prefCode}`;

  const defaultColor = "#00000000"; // 選択されていないボタンのborder色
  const [color, setColor] = useState(defaultColor);

  // 都道府県ボタンが押された時
  const togglePref = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ボタンのidからalldmogrsのvalueに当たる部分を抽出
    const targetCode = Number(
      event.target.id.substring(prefButtonIdPrefix.length)
    );

    // ボタンが押下された時、チェックがついたのかを判定
    if (event.target.checked) {
      setCheckedPrefs((prev) => {
        return prev.concat([targetCode]);
      });
    } else {
      setColor(defaultColor);
      // チェック済の都道府県ボタンのリストから、チェックが外された都道府県を削除
      setCheckedPrefs((prev) => prev.filter((elem) => elem !== targetCode));
    }
  };

  // 都道府県ボタンが押されるたびに、全てのボタンを再描画し、グラフの線の色と同期
  useEffect(() => {
    const checkedPrefsIndex = checkedPrefs.indexOf(prefData.prefCode);
    if (CHART_LINE_COLORS.length > checkedPrefsIndex) {
      setColor(CHART_LINE_COLORS[checkedPrefsIndex]);
    } else {
      // 色を全種使い切ってしまった場合、色用の配列の最後の色を使い続ける
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
        style={{ borderColor: `${color}` }}
      >
        {prefData.prefName}
      </label>
    </div>
  );
};

export default PrefButton;
