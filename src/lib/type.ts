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
