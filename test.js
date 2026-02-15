const assert = require("assert")
const at = require(".")

describe("at()", () => {
  it("should return the last element when index is -1", () => {
    const input = [10, 20, 30]
    assert.strictEqual(at(input, -1), 30)
  })

  it("should return the second to last element when index is -2", () => {
    const input = ["apple", "banana", "cherry"]
    assert.strictEqual(at(input, -2), "banana")
  })

  it("should return the first element when index is 0", () => {
    const input = ["first", "second"]
    assert.strictEqual(at(input, 0), "first")
  })

  it("should return undefined for out-of-bounds negative index", () => {
    const input = [1, 2]
    assert.strictEqual(at(input, -3), undefined)
  })

  it("should throw for non-array input", () => {
    assert.throws(() => at(null, 0), /Expects an array/)
  })

  it("should handle large arrays", () => {
    const bigArray = Array.from({ length: 15000 }, (_, i) => i)
    assert.strictEqual(at(bigArray, -1), 14999)
  })
})