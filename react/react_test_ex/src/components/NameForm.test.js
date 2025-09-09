import userEvent from "@testing-library/user-event";
import NameForm from "./NameForm";
import { fireEvent, render, screen } from "@testing-library/react";


describe("NameForm to be Tested...", () => {
    test("user to be tested with Button Click", async () => {
        render(<NameForm />);
        const input = screen.getByPlaceholderText(/Please Enter Your Name/i);
        await userEvent.type(input, "Charan");

        const button = screen.getByRole("button", { name: /Show/i });
        await userEvent.click(button);

        const buttonClick = jest.fn();
        expect(buttonClick).toHaveBeenCalledTimes(0);


    })

    test("shows entered name after button click", async () => {
        render(<NameForm />);

        const input = screen.getByPlaceholderText(/Please Enter Your Name/i);
        await userEvent.type(input, "Charan");

        // click button
        const button = screen.getByRole("button", { name: /Show/i });
        await userEvent.click(button);

        expect(screen.getByText(/Charan/)).toBeInTheDocument();
        expect(screen.getByText(/Entered Value is Charan/)).toBeInTheDocument();
    })

});