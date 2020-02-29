const arr = [1, 55, 89, 2, 3, 19, 21, 54, 1, 55, 55, 55, 1, 9, 21, 19]
console.log(
  arr.filter((val, idx) => {
    console.log(val, idx)
  })
)

const obj = {}
// filter using reduce
console.log(
  arr.reduce((acc, currValue) => {
    if (acc.indexOf(currValue) === -1) {
      acc.push(currValue)
      obj[currValue] = 1
      return acc
    }
    obj[currValue] = obj[currValue] + 1
    return acc
  }, [])
)

console.log(obj)

// map using reduce
console.log(
  arr.reduce((acc, value) => {
    acc.push(value / 2)
    return acc
  }, [])
)
