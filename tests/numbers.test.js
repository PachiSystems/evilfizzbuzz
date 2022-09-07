const numbers = require('../numbers');

describe("numbers", () => {
    it("should generate 100 numbers", () => {
        expect(numbers).toHaveLength(100);
    });

    it("doesn't exceed expected value", () => {
        expect(numbers).not.toHaveLength(101);
    });

    const spotCheck = [
        [0, 1],
        [49, 50],
        [99, 100],
    ]

    spotCheck.forEach(([index, value]) => {
        it(`should have the correct value at index ${index}`, () => {
            expect(numbers[index]).toBe(value);
        });
    });
});