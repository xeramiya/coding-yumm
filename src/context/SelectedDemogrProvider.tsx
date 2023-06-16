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
const SelectedDemogrContext = createContext<number>(0);
const SetSelectedDemogrContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => undefined);

// Provider用コンポーネント
export const SelectedDemogrProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDemogr, setSelectedDemogr] = useState<number>(0);

  return (
    <SelectedDemogrContext.Provider value={selectedDemogr}>
      <SetSelectedDemogrContext.Provider value={setSelectedDemogr}>
        {children}
      </SetSelectedDemogrContext.Provider>
    </SelectedDemogrContext.Provider>
  );
};

export const useSelectedDemogrValue = () => useContext(SelectedDemogrContext);
export const useSetSelectedDemogrValue = () => useContext(SetSelectedDemogrContext);
