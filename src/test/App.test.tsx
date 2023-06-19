import "@testing-library/jest-dom";
import "cross-fetch/polyfill";
import { render, screen, fireEvent } from "@testing-library/react";

import DemogrButtonPanel from "components/DemogrButtonPanel";
import PrefButtonPanel from "components/PrefButtonPanel/PrefButtonPanel";
import PrefButton from "components/PrefButtonPanel/PrefButton";

describe("DemogrButtonPanel", () => {
  test("人口構成ボタンパネルの表示", () => {
    render(<DemogrButtonPanel />);
    expect(screen.getByText("総人口")).toBeTruthy();
    expect(screen.getByText("年少人口")).toBeTruthy();
    expect(screen.getByText("生産年齢人口")).toBeTruthy();
    expect(screen.getByText("老年人口")).toBeTruthy();
  });
  test("人口構成ボタンパネルが初期状態の時、総人口にチェックが入っているか", () => {
    render(<DemogrButtonPanel />);
    const button = screen.getByLabelText("総人口");
    expect(button).toBeChecked();
  });
});

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
  test("都道府県ボタンパネルのボタンを押下した時、チェックされるか", () => {
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
});

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
});
