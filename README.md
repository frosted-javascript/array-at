# @frosted/array-at
Ponyfill for Array.prototype.at

## Installation
```bash
npm install @frosted/array-at
```

## Usage
```js
const at = require("@frosted/array-at")

console.log(at([1, 2, 3], 1)) // 2

console.log(at([20, 40, 60, 80], -2)) // 60

console.log(at("not array", 2)) // Error: Expects an array
```

Shimming Array.prototype.at:
```js
require("@frosted/array-at/shim")

console.log([1, 2, 3].at(1)) // 2
```

## Tests
Simply clone the repo and run npm test