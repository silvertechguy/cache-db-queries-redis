const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  console.log("Start");
  expect(sum(1, 2)).toBe(3);
});
