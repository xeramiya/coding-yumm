import "@testing-library/jest-dom";
import "cross-fetch/polyfill";
import { render, screen, fireEvent } from "@testing-library/react";

import DemogrButtonPanel from "components/DemogrButtonPanel/DemogrButtonPanel";
import { SelectedDemogrProvider } from "context/SelectedDemogrProvider";

describe("DemogrButtonPanel", () => {
  test("人口構成ボタンパネルの表示", () => {
    render(<DemogrButtonPanel />);
    expect(screen.getByText("総人口")).toBeTruthy();
    expect(screen.getByText("年少人口")).toBeTruthy();
    expect(screen.getByText("生産年齢人口")).toBeTruthy();
    expect(screen.getByText("老年人口")).toBeTruthy();
  });
  test("人口構成ボタンパネルが初期状態の時、総人口にチェックが入っているか", () => {
    render(<DemogrButtonPanel />, { wrapper: SelectedDemogrProvider });
    const button = screen.getByLabelText("総人口");
    expect(button).toBeChecked();
  });
  test("人口構成ボタンをクリックした時、適切にチェックが切り替わるか", () => {
    render(<DemogrButtonPanel />, { wrapper: SelectedDemogrProvider });
    const button1 = screen.getByLabelText("総人口");
    const button2 = screen.getByLabelText("年少人口");
    fireEvent.click(button2);
    expect(button2).toBeChecked();
  });
});
