describe("solution", () =>{
    it("should return itself if there is only one character in the string", () =>{
        expect(solution("h")).toBe("h")
        expect(solution("b")).toBe("b")

    })
    it("should reverse the multiple characters of the string", () =>{
        expect(solution("harsh")).toBe("hsrah")
        expect(solution("tom")).toBe("mot")

    })

    it("should return empty string", () =>{
        expect(solution("")).toBe("")
        expect(solution("")).toBe("")

    })
})