import React from "react";
import { render, screen } from "@testing-library/react";

import HelloWorld from "./index";

describe("HelloWorld", () => {
  test("it renders without an error", () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
