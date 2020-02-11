let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

console.log(arrays.reduce((a, b) => a.concat(b)));

// let arr = [1, 2, 3, 4]
// console.log(arr.reduce((a, b) => a + b, 5));
// console.log(arr.concat(arrays));