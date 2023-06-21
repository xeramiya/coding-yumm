import "@testing-library/jest-dom";
import "cross-fetch/polyfill";
import { render, screen, fireEvent } from "@testing-library/react";
import PrefButtonPanel from "components/PrefButtonPanel/PrefButtonPanel";
import { CheckedPrefsProvider } from "context/CheckedPrefsProvider";

describe("PrefButtonPanel", () => {
  test("都道府県ボタンパネルの表示", () => {
    render(
      <PrefButtonPanel
        prefDatas={[
          {
            prefCode: 1,
            prefName: "北海道",
          },
          {
            prefCode: 2,
            prefName: "青森県",
          },
          {
            prefCode: 3,
            prefName: "岩手県",
          },
        ]}
      />
    );
    expect(screen.getByText("北海道")).toBeTruthy();
    expect(screen.getByText("青森県")).toBeTruthy();
    expect(screen.getByText("岩手県")).toBeTruthy();
  });
  test("都道府県ボタンを複数クリックした時、チェックされるか", () => {
    render(
      <PrefButtonPanel
        prefDatas={[
          {
            prefCode: 1,
            prefName: "北海道",
          },
          {
            prefCode: 2,
            prefName: "青森県",
          },
          {
            prefCode: 3,
            prefName: "岩手県",
          },
        ]}
      />,
      { wrapper: CheckedPrefsProvider }
    );
    const button1 = screen.getByLabelText("北海道");
    fireEvent.click(button1);
    expect(button1).toBeChecked();
    const button2 = screen.getByLabelText("青森県");
    fireEvent.click(button2);
    expect(button2).toBeChecked();
    const button3 = screen.getByLabelText("岩手県");
    fireEvent.click(button3);
    expect(button3).toBeChecked();
  });
  test("都道府県ボタンを複数クリックした時、押した順に色がつくか", () => {
    render(
      <PrefButtonPanel
        prefDatas={[
          {
            prefCode: 1,
            prefName: "北海道",
          },
          {
            prefCode: 2,
            prefName: "青森県",
          },
          {
            prefCode: 3,
            prefName: "岩手県",
          },
        ]}
      />,
      { wrapper: CheckedPrefsProvider }
    );
    const button1 = screen.getByLabelText("北海道");
    const button2 = screen.getByLabelText("青森県");
    const button3 = screen.getByLabelText("岩手県");
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button1);
    fireEvent.click(button1);
    expect(screen.getByText("青森県")).toHaveStyle({ borderColor: "#ef4444" });
    expect(screen.getByText("岩手県")).toHaveStyle({ borderColor: "#eab308" });
    expect(screen.getByText("北海道")).toHaveStyle({ borderColor: "#10b981" });
  });
});
