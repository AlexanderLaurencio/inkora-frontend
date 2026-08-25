import {test, expect} from "vitest"
import {render, screen} from "@testing-library/react"
import Sidenav from "./sidenav";
import '@testing-library/jest-dom/vitest';

test("Links in the sidenav should link to their corresponding pages", () => {
    render(<Sidenav />);

    screen.debug();

    expect(screen.getByRole("link", {name: /Home/i})).toHaveAttribute("href","/");

    expect(screen.getByRole("link", {name: /App/i})).toHaveAttribute("href","/app");

    expect(screen.getByRole("link", {name: /About/i})).toHaveAttribute("href","/about");
});