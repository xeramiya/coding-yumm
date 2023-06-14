"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
  useState,
} from "react";

// コンテキスト作成
export const CheckedPrefsContext = createContext<Array<number>>([]);
export const SetCheckedPrefsContext = createContext<
  Dispatch<SetStateAction<Array<number>>>
>(() => undefined);

// Provider用コンポーネント
export const CheckedPrefsProvider = ({ children }: { children: ReactNode }) => {
  const [checkedPrefs, setCheckedPrefs] = useState<Array<number>>([]);

  return (
    <CheckedPrefsContext.Provider value={checkedPrefs}>
      <SetCheckedPrefsContext.Provider value={setCheckedPrefs}>
        {children}
      </SetCheckedPrefsContext.Provider>
    </CheckedPrefsContext.Provider>
  );
};

export const useCheckedPrefsValue = () => useContext(CheckedPrefsContext);
export const useSetCheckedPrefsValue = () => useContext(SetCheckedPrefsContext);
