import React from "react";
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent"

describe("renders heading", () => {
    test("renders Hello, World! text", () => {

        render(<MyComponent />);
        const headingElement = screen.getByText(/Hello, World!/i);
        expect(headingElement).toBeInTheDocument();
    });

    test("renders an h1 element", () => {
    render(<MyComponent />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent("Hello, World!");
  });
})