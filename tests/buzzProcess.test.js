function processBuzz(list) {
    return list.map(item => item % 5 === 0 ? 'Buzz' : item)
}


describe('buzzProcess', () => {
    it('should convert one 5 with Buzz', function () {
        const list = [1,2,3,4,5]
        const result = processBuzz(list)
        expect(result.indexOf(5)).toBe(-1)
    });
})