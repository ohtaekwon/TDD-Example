import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * Title 태그 테스트
 * Awesome Counter일 경우 테스트 통과
 * AwesomeCounter일 경우 테스트 통과 x
 */

// 타이틀 테스트
test("it should have the correct title", () => {
  render(<App />);
  const text = screen.getByText("Awesome Counter");
  expect(text).toBeInTheDocument();
});
