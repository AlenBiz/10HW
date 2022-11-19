const { data, getTheBest, getTheBestInBranch } = require("./10.js");

describe("test:getTheBest", () => {
  //expect(getTheBest(data)).not.toBeUndefined();
  expect(getTheBest(data).name).toEqual("Ivan");
});

describe("test:getTheBestInBranch", () => {
  it.each([
    [data[0], "Ivan"],
    [data[1], "Marina"],
    [data[2], "Varvara"],
  ])("Test %#", (param, result) => {
    expect(getTheBestInBranch(param)).toEqual(result);
  });
});
