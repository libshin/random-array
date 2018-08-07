# TL;DR

Create a random array based on input array

```js
const randomArray = window["@libshin/random-array"];
// OR
const randomArray = require("@libshin/random-array");
// OR
import randomArray from "@libshin/random-array";

// randomArray(originArray)
randomArray([1, 2, 3, 4, 5, 6]);
// [4, 5, 3, 2, 1]

// randomArray(originArray, maxLength)
randomArray([1, 2, 3, 4, 5, 6], 2);
// [5, 3]

// randomArray(originArray, [minLength, maxLength])
randomArray([1, 2, 3, 4, 5, 6], [3, 5]);
// [4, 6, 2, 3]
```
