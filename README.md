# TL;DR

Shuffle and shorten an array.

```js
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

## Import

### Browser

```html
<script src="https://unpkg.com/@libshin/random-array(@version)/build/random-array.umd.js"></script>
```

You don't have to specify the version of the module. By default it will redirect to the latest version.

### NPM

```bash
npm i --save @libshin/random-array
```

### Yarn

```bash
yarn add @libshin/random-array
```

## Import

### Browser

```js
const randomArray = window["@libshin/random-array"];
```

### Node

```js
const randomArray = require("@libshin/random-array");
```

### ES Module

```js
import randomArray from "@libshin/random-array";
```
