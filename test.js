const math = require('./src/index.js');
console.log(math);

const {add} = math;
let result = add(2,2);
console.log(`2 + 2 = ${result}`);