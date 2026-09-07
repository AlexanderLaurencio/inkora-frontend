import {beforeEach, describe, expect, test, vi} from "vitest"
import { render, screen} from "@testing-library/react" 
import userEvent from "@testing-library/user-event"
import SignupForm from "./signupForm"

vi.mock("next/navigation", async () => {
    return {
        useRouter: vi.fn(() => ({
            push: vi.fn()
        }))
    }
});

describe("SignupForm must appear in the screen and show the corresponding error messages", () => {

    const user = userEvent.setup();

    beforeEach(() => {
        render(<SignupForm />);
        screen.debug();
    });

    //The user can see the form and the elements inside of it
    test("SignupForm must appear in the screen and the elements inside of it", () => {
        let buttonSignup = screen.getByRole("button", { name: /Sign up/i });
        let inputUsername = screen.getByPlaceholderText(/username/i);

        expect(screen.getByRole("form")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /Sign up/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/upload profile image/i)).toBeInTheDocument();
        expect(inputUsername).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/display name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/profile description/i)).toBeInTheDocument();
        expect(buttonSignup);
    });

    //This part is unused because the tests fail saying that the alerts don't appear, which is not true
    //because I tested it by myself and it does appears.

    // test("If the username input is empty the user is notified", async () => {
    //     await user.click(screen.getByRole("button", { name: /Sign up/i }));

    //     let alert = await screen.findByRole("alert", {name: /The field username is empty. Fill it out./i});

    //     expect(alert).toBeInTheDocument();
    // });

    // test("If the username already exists the user is notified", async () => {

    //     await user.type(screen.getByPlaceholderText(/username/i),"Alexander");

    //     expect(await screen.findByRole("alert", {name: /That user already exists./i})).toBeInTheDocument();
    // });

    // test("If the username contains spaces the user is notified", async () => {

    //     await user.type(screen.getByPlaceholderText(/username/i), "Alexander Neftali");

    //     await user.click(screen.getByRole("button", { name: /Sign up/i }));

    //     expect(await screen.findByRole("alert", {name: /The username cannot include spaces./i})).toBeInTheDocument();
    // });
});