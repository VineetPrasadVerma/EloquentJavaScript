const obj = {}
const arr = [1, 1, 1, 2, 3, 4, 5, 9]
console.log(
  arr.reduce((acc, cv) => {
    if (acc.indexOf(cv) === -1) {
      obj[cv] = 1
      acc.push(cv)
      return acc
    } else {
      obj[cv] = obj[cv] + 1
      return acc
    }
  }, [])
)

console.log(obj)
