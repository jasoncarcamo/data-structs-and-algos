const { QuickSort} = require('./QuickSort');

let numbers = [];
let max = 1000000;
for (let i = max; i > 0; i--) {
  numbers.push(i);
}


console.log(`Before  QuickSort number @ index      0 = ${numbers[0]}`);
console.log(`Before  QuickSort number @ index ${max/4} = ${numbers[max/4]}`);
console.log(`Before  QuickSort number @ index ${max/2} = ${numbers[max/2]}`);
console.log(`Before  QuickSort number @ index ${3*max/4} = ${numbers[3*max/4]}`);
console.log(`Before  QuickSort number @ index ${max-1} = ${numbers[max - 1]}`);
const sorted = QuickSort(numbers);
console.log(`---`);
console.log(`After   QuickSort number @ index      0 = ${sorted[0]}`);
console.log(`After   QuickSort number @ index ${max/4-1} = ${sorted[max/4-1]}`);
console.log(`After   QuickSort number @ index ${max/2-1} = ${sorted[max/2-1]}`);
console.log(`After   QuickSort number @ index ${3*max/4-1} = ${sorted[3*max/4-1]}`);
console.log(`After   QuickSort number @ index ${max-1} = ${sorted[max - 1]}`);