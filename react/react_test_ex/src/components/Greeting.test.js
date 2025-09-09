import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting Component Testing', () => {
    test("renders Good morning message", () => {

        render(<Greeting />);
        const messageElement = screen.getByText("Good Morning to All...");
        expect(messageElement).toBeInTheDocument();
    });

    test("renders Good Afternoon message", () => {

        render(<Greeting />)
        expect(screen.queryByText("Good Afternoon to All...")).toBeNull();
    });

    test("does not render Good Evening by default", () => {

        render(<Greeting />)
        expect(screen.queryByText("Good Evening to All...")).toBeNull();
    })
});