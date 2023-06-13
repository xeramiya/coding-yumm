import { NextResponse } from "next/server";

/**
 * RESASからのデータ取得
 */
export const getResasData = async (params: string) => {
  const resasApiEndpoint = "https://opendata.resas-portal.go.jp/";
  const resasApiKey = process.env.RESAS_API;

  if (resasApiKey) {
    const response = await fetch(`${resasApiEndpoint}${params}`, {
      method: "GET",
      headers: { "X-API-KEY": resasApiKey },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
    return response.result;
  } else {
    console.log(`ERROR: 環境変数が設定されていません >>RESAS_API`);
    return;
  }
};
