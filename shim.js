var define = require("define-properties")
var polyfill = require("ununcurry-this-x")(require("."))
var $ArrayPrototype = require("es-intrinsic-cache")("Array.prototype")
var isNotEqual = require("@not-js/not")(require("@10xly/strict-equals"))

define(
  $ArrayPrototype,
  { at: polyfill },
  { at: function () { return isNotEqual($ArrayPrototype.at, polyfill) } }
)

module.exports = polyfill