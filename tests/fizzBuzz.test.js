const fizzBuzz = require("../src/fizzBuzz");

describe("FizzBuzz", () => {
  it("should replace multiples of 3 and 5 with fizzbuzz", () => {
    const exampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const expectedData = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      "FizzBuzz",
    ];

    expect(fizzBuzz(exampleData)).toEqual(expectedData);
  });

  it("should honour existing 'Fizzes' or 'Buzzes'", () => {
    const exampleData = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      15,
    ];
    const expectedData = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ];

    expect(fizzBuzz(exampleData)).toEqual(expectedData);
  });

  it("should handle missing data", () => {
    expect(fizzBuzz()).toEqual([]);
  });
});
