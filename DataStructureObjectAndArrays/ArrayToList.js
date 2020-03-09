function arrayToList (arr) {
  let lst = null
  for (let i = arr.length - 1; i >= 0; i--) {
    lst = { value: arr[i], rest: lst }
  }
  return lst
}

function listToArray (lst) {
  const arr = []
  while (lst.rest != null) {
    arr.push(lst.value)
    lst = lst.rest
  }
  arr.push(lst.value)
  return arr
}

// function prepend(value, list) {
//     return {value:value, rest:list}
// }
function prepend (value, list) {
  return {
    value: value,
    rest: list
  }
}

function nth (lst, position) {
  // count = 0
  // while(count != position && lst != null ){
  //     lst = lst.rest
  //     count += 1
  // }
  // if(lst){
  //     return lst.value;
  // }else{
  //     return "Undefined";
  // }
  if (lst == null) {
    return undefined
  } else if (position === 0) {
    return lst.value
  } else {
    return nth(lst.rest, position - 1)
  }
}

console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(1, arrayToList([10, 20, 30])))
console.log(nth(arrayToList([10, 20, 30]), 1))
