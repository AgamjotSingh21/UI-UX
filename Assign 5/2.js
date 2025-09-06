let num = [12, 5, 33, 1, 20];

let max = Math.max(...num);
let min = Math.min(...num);

let asc = [...num].sort((a, b) => a - b);
let desc = [...num].sort((a, b) => b - a);

console.log("Original:", num);
console.log("Max:", max);
console.log("Min:", min);
console.log("Ascending:", asc);
console.log("Descending:", desc);