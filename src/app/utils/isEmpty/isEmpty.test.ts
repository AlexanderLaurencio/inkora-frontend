import {test, expect} from "vitest"
import { isEmpty } from "./isEmpty.ts"

test("isEmpty() should return true when a value is undefine and false it is not", () => {
    let name = " alexander ";
    let lastname;
    let country = "     ";

    expect(isEmpty(name)).toBeFalsy();
    expect(isEmpty(lastname)).toBeTruthy();
    expect(isEmpty(country)).toBeTruthy()
});