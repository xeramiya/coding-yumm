import "@testing-library/jest-dom";
import "cross-fetch/polyfill";
import { getResasData } from "lib/api";

describe("getResasData", () => {
  test("RESASから正常にデータを取得できるか", async () => {
    const data = await getResasData(`api/v1/prefectures`);
    expect(data[0]).toEqual({"prefCode": 1, "prefName": "北海道"})
  });
});