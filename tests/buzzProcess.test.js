const processBuzz = require("../buzzProcess");

describe('buzzProcess', () => {
    it('should not process anything', function () {
        const list = [1, 2, 3, 4]
        const result = processBuzz(list)
        expect(result.indexOf('Buzz')).toBe(-1)
    });    it('should remove 5 from list', function () {
        const list = [1, 2, 3, 4, 5]
        const result = processBuzz(list)
        expect(result.indexOf(5)).toBe(-1)
    });
    it('should Buzz have replaced 5', () => {
        const list = [1, 2, 3, 4, 5]
        const result = processBuzz(list)
        expect(result.indexOf('Buzz')).toBe(4)
    })
    it('should convert multiple 5s with Buzz', () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const result = processBuzz(list)
        expect(result.filter(i => i === 'Buzz').length).toBe(2)
    })
})