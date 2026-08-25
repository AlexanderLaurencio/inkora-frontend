import {test, expect} from "vitest"
import {render, screen} from "@testing-library/react"
import Navbar from "./navbar";
import '@testing-library/jest-dom/vitest';

test("Links in the navbar should link to their corresponding pages", () => {
    render(<Navbar />);

    screen.debug();

    expect(screen.getByRole("link", {name: /Home/})).toHaveAttribute("href","/");

    expect(screen.getByRole("link", {name: /App/i})).toHaveAttribute("href","/app");

    expect(screen.getByRole("link", {name: /About/i})).toHaveAttribute("href","/about");
});