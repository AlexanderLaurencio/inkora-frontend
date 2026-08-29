import {test, expect} from "vitest"
import {render, screen} from "@testing-library/react"
import Footer from "./footer";
import '@testing-library/jest-dom/vitest';

test("Links in the footer should link to their corresponding pages", () => {
    render(<Footer />);

    screen.debug();

    expect(screen.getByText(/© Alexander Neftali Miranda All rights reserved 2026/i))

    expect(screen.getByRole("link", {name: /BLOG/i})).toHaveAttribute("href","/");

    expect(screen.getByRole("link", {name: /Terms/i})).toHaveAttribute("href","/terms");

    expect(screen.getByRole("link", {name: /Privacy policy/i})).toHaveAttribute("href","/privacypolicy");

    expect(screen.getByRole("link", {name: /Home/i})).toHaveAttribute("href","/");

    expect(screen.getByRole("link", {name: /App/i})).toHaveAttribute("href","/app");

    expect(screen.getByRole("link", {name: /About/i})).toHaveAttribute("href","/about");
});