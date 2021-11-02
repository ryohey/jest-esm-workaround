import { foo } from "./foo"

describe("foo", () => {
  it("should groups even numbers", () => {
    expect(foo([1, 2, 3, 4])).toStrictEqual({
      even: [2, 4], 
      odd: [1, 3]
    })
  })
})
