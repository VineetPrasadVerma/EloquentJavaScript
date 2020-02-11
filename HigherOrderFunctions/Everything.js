function every(array, test) {
  // Your code here.
  for (let ele of array) {
    if (!test(ele)) {
      return false
    }
  }
  return true
}

function everyUsingSome(array, test) {
  // Your code here.
  if (array.some(ele => !test(ele))) {
    return false
  }
  return true
}

console.log(everyUsingSome([1, 3, 5], n => n < 10))
// → true
console.log(everyUsingSome([2, 4, 16], n => n < 10))
// → false
console.log(everyUsingSome([], n => n < 10))
// → true
