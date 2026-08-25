import {test, expect} from "vitest"
import {render, screen} from "@testing-library/react"
import { beforeEach } from "vitest"
import Hero from "./hero"
import '@testing-library/jest-dom/vitest';

test("Links in the hero should link to their corresponding pages", () => {

    render(<Hero />);

    screen.debug();

    expect(screen.getByRole("heading", {name: /A place to share and acquire knowledge/i})).toBeInTheDocument();
   
    expect(screen.getByRole("link", {name: /Log in/i})).toHaveAttribute("href","/login");

    expect(screen.getByRole("link", {name: /Sign up/i})).toHaveAttribute("href","/signup");   
});

