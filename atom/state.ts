import { atom } from "recoil";

export const checkedPrefsState = atom({
  key: "checkedPrefsState",
  default: Array<number>,
});
