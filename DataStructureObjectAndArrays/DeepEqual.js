// var keysA, keysB;
function deepEqual(a, b) {
  if (a === b) {
    console.log('test')
    return true
  }
  if (
    a == null ||
    typeof a !== 'object' ||
    b == null ||
    typeof b !== 'object'
  ) {
    console.log('test3')
    return false
  }
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  console.log(keysA, ' + ', keysB)
  if (keysA.length !== keysB.length) {
    // console.log(keysA," test ",keysB)
    return false
  }

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return 'falsee'
    }
  }
  console.log('Test2')
  return true
}
const obj = { here: { is: 'an' }, object: 2 }
// console.log(deepEqual(obj, obj));
// → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
// → true
// console.log(deepEqual(1,1));
// obj1 = {a:1}
// obj2 = {a:1}
// if(obj1 === obj2){
//     console.log("t")
// }else{
//     console.log("f")
// }
