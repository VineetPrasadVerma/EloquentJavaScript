let arr = [1, 2, 3]
const mini = Math.min(...arr)
arr = arr.map(x => {
  if (x - mini !== 0) {
    return x - mini
  } else {
    return 'X'
  }
})
console.log(arr)
