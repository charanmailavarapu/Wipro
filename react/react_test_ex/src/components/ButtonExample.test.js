import ButtonExample from "./ButtonExample";
import { render, screen, fireEvent, waitFor} from '@testing-library/react';


describe("Button Click Event to be Captured", () => {
    test("Default Message to be Tested", () => {
        render(<ButtonExample />)
        expect(screen.getByText(/Clicked 0 times/i)).toBeInTheDocument();
    })

    test("Button Click to be Activated", () => {
        render(<ButtonExample />)
        const button = screen.getByRole("button", {name: /Increment/i});
        fireEvent.click(button);
        expect(screen.getByText(/Clicked 1 times/i)).toBeInTheDocument();
    })
});