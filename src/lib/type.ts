// RESAS API response 都道府県一覧
export type ResasPref = {
  prefCode: number;
  prefName: string;
};

// RESAS API response 人口構成
export type ResasPrefPopComp = {
  boundaryYear: number;
  data: Array<ResasPrefPopCompData1>;
};

export type ResasPrefPopCompData1 = {
  label: string;
  data: Array<ResasPrefPopCompData2>;
};

export type ResasPrefPopCompData2 = {
  year: number;
  value: number;
  rate?: number;
};

// 都道府県ボタンのチェック状態管理用
export type CheckedPref = {
  codes: Array<number>;
  setCodes: (code: Array<number>) => void;
};
