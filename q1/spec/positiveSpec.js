describe("positiveSum", () => {
    it("should give the sum", () => {
        expect(positiveSum([10,10])).toBe(20)
        expect(positiveSum([1,2])).toBe(3)
    })
   
    it("should ignore the negative numbers", () => {
        expect(positiveSum([-1, 1])).toBe(1)
        expect(positiveSum([-2,12])).toBe(12)
    })

    it("should provide an empty array", () => {
        expect(positiveSum([])).toBe(0)
        expect(positiveSum([])).toBe(0)
    })
    it("should not sum up negative numbers", () => {
        expect(positiveSum([-1,-1])).toBe(0)
        expect(positiveSum([-12,-4])).toBe(0)
    })


})