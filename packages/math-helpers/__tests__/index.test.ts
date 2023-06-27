import { add } from "../src/index";

describe("math-helpers", () => {
  it("add", async () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});
