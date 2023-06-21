import "@testing-library/jest-dom";
import "cross-fetch/polyfill";
import { render, screen, fireEvent } from "@testing-library/react";
import PrefButton from "components/PrefButtonPanel/PrefButton";
import { CheckedPrefsProvider } from "context/CheckedPrefsProvider";

describe("PrefButton", () => {
  test("都道府県ボタンの表示", () => {
    render(
      <PrefButton
        prefData={{
          prefCode: 1,
          prefName: "北海道",
        }}
      />
    );
    expect(screen.getByText("北海道")).toBeTruthy();
  });
  test("都道府県ボタンをクリックした時、チェックされるか", () => {
    render(
      <PrefButton
        prefData={{
          prefCode: 1,
          prefName: "北海道",
        }}
      />
    );
    const button = screen.getByLabelText("北海道");
    fireEvent.click(button);
    expect(button).toBeChecked();
  });
  test("都道府県ボタンを複数回クリックした時、色が正しく変更されるか", () => {
    render(
      <PrefButton
        prefData={{
          prefCode: 1,
          prefName: "北海道",
        }}
      />,
      { wrapper: CheckedPrefsProvider }
    );
    const button = screen.getByLabelText("北海道")
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText("北海道")).toHaveStyle({ borderColor: "#ef4444" });
  });
});