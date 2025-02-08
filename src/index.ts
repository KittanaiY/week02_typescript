console.log("Hello, TypeScript with Node.js!");

import add, { subtract } from './functions';
import findMax from './function2';

const result = add(1,2) + 0;
console.log(result, 'type of result:', typeof result);

const result2 = subtract(1,2);
console.log(result2, 'type of result2:', typeof result2);

const result3 = findMax([1,2,3,4,5]);
console.log(result3, 'type of result3:', typeof result3);