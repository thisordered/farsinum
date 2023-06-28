### Simple function to convert English Numbers to Persian Numbers

> ##### Usage

`npm install farsidigits`

```javascript
import farsiDigits from "farsidigits";

const myNumber = 0123456789;

const convertedNumbers = farsiDigits(myNumber);

// you can split numbers by providing a split range

farsiDigits(myNumber, 3);

// output -> 0,123,456,789

// change seperator character

farsiDigits(myNumber, 3, " ");

// output -> 0 123 456 789
```
# farsinum
