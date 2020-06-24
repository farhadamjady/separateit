# separateit

Optional separator with any delimeter

```js
const separateit = require('sparateit');
separateit(" 100000000000", { delimiter:",", flag:"g", num:3 } )

// the result will be
// 100,000,000
```

## api

### separateit(string, options)


**options**

  - `delimiter`  The separator character (default comma)
  - `flag`  Special flag of regex (defaults g)
  - `num`  The number of characters to separate (default 3)
