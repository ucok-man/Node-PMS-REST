import { greet, HELLO_WORLD } from "./index";

it("should greet you :)", () => {
  expect(greet()).toBe(HELLO_WORLD);
});
