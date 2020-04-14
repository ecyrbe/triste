import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Triste Next Block", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Next Block/i);
  expect(textElement).toBeInTheDocument();
});
