var isNotArray = require("@not-js/not")(require("@is-(unknown)/is-array"))
var immediateError = require("immediate-error")
var reverse = require("@frosted/array-reverse")
var isNegative = require("is-negative")
var abs = require("lolite.abs")
var addOne = require("add-one")

function at(array, index) {
  if (isNotArray(array)) {
    immediateError("Expects an array")
  }

  if (isNegative(index)) {
    return at(reverse(array), abs(addOne(index)))
  }

  return array[index]
}

module.exports = at