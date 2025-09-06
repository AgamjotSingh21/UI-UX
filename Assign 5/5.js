let num = [12, 7, 9, 20, 15, 4];

function f(arr) {
  return arr
    .filter(x => x % 2 === 0)
    .map(x => x * 2)
    .reduce((a, b) => a + b, 0);
}

console.log("Sum of remaining numbers:" + f(num));