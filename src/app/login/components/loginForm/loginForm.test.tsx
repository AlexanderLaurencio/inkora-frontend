import { beforeEach, describe, expect, test, vi } from "vitest";
import { LoginForm } from "./loginForm";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";

vi.mock("next/navigation", () => ({
    useRouter: vi.fn(() => ({
        push: vi.fn()
    }))
}));

describe("loginForm should be appear in the screen and show the correct messages the when user inserts incorrect data", () => {
    const user = userEvent.setup();

    beforeEach(() => {
        render(<LoginForm />);
        screen.debug();
    });

    test("loginForm should appear in the screen", () => {
        expect(screen.getByRole("heading")).toBeInTheDocument();
    });

    test("The user leaves the username input empty",async () => {
        await user.click(screen.getByRole("button", {name: /Log in/i}));
        waitFor(() => {
            expect(screen.getByRole("alert", {name: /The username field cannot be empty/i})).toBeInTheDocument()
        })
    });
    
    test("The user includes spaces in the username input", async () => {
        await user.type(screen.getByLabelText(/username/i),"Alexander Miranda");
        waitFor(() => {
            expect(screen.getByRole("alert", {name: /The username cannot contain spaces/i})).toBeInTheDocument()
        })
    });

    test("The user leaves the password input empty", async () => {
        await user.type(screen.getByLabelText(/username/i),"Alexander");
        await user.click(screen.getByRole("button", {name: /Log in/i}));
        waitFor(() => {
            expect(screen.getByRole("alert", {name: /The password field cannot be empty/i})).toBeInTheDocument()
        })
    });

    test("the password contains spaces", async () => {
        await user.type(screen.getByLabelText(/username/i),"Alexander");
        await user.type(screen.getByLabelText(/password/i),"password with spaces");
        await user.click(screen.getByRole("button", {name: /Log in/i}));
        waitFor(() => {
            expect(screen.getByRole("alert", {name: /The password cannot contain spaces/i})).toBeInTheDocument()
        })
    });

    test("the password contains less than 7 characters", async () => {
        await user.type(screen.getByLabelText(/username/i),"Alexander");
        await user.type(screen.getByLabelText(/password/i),"short");
        await user.click(screen.getByRole("button", {name: /Log in/i}));
        waitFor(() => {
            expect(screen.getByRole("alert", {name: /The password must contain at least 8 characters/i})).toBeInTheDocument()
        })
    });

    test("The user inserts correct data", async () => {
        await user.type(screen.getByLabelText(/username/i),"Alexander");
        await user.type(screen.getByLabelText(/password/i),"superhardpassword123");
        await user.click(screen.getByRole("button", {name: /Log in/i}));

        expect(screen.queryByRole("alert")).not.toBeInTheDocument()
    })
});