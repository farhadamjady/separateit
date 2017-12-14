# separateit

an optional separator with any delimeter

```js
const separateit=require('sparateit');
separateit("100000000000",{delimeter:",",flag:"g",num:3})
// the result will be
// 100,000,000
```

## api

### separateit(string, options)


**options**

  - `delimeter`  the separator character (default comma)
  - `flag`  special flag of regex (defaults g)
  - `num`  the number of characters to separate (default 3)
