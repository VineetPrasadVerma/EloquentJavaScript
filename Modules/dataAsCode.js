const x = 1
function evalAndReturnX (code) {
  eval(code)
  console.log(x)
  return x
}

console.log(evalAndReturnX('var x = 2'))
// → 2
console.log(x)
// → 1
