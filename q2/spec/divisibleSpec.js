describe("isDivisible", () =>{
    it("should return true when the number is divisible by both the divisors", () =>{
        expect(isDivisible([20,2,5])).toBe(true)
        expect(isDivisible([64,8,2])).toBe(true)

    })
})