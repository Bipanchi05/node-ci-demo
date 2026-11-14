/*global test, expect*/
const add = require("../index.js");
test("adds 5 + 10", () => {
    expect(add(5, 10)).toBe(15);
});