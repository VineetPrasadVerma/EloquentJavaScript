function reverseArray(arr){
    let reversedArray = [];
    while(arr.length){
        reversedArray.push(arr.pop());
    }

    return reversedArray;
}

function reverseArrayInPlace(arr){
    // tempArr = arr.slice();
    // temp = arr.length - 1;
    // for(let i = 0; i<arr.length; i++){
    //     arr[i] = tempArr[temp - i]
    // }
    // return arr
    len = arr.length - 1
    for(let i=0; i < parseInt(arr.length/2); i++){
        temp = arr[i]
        arr[i] = arr[len-i]
        arr[len-i] = temp
    }
    return arr
}

console.log(reverseArray([1,2,3]));
console.log(reverseArrayInPlace([1,2,3,4]));
// arr = [1,2]
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)

// console.log(arr.pop())
// console.log(arr)

// if([] !== []){
//     console.log('dfs')
// }

// arr = [1,2,3]
// temp = arr.slice()
// console.log(temp)
// arr[0] = 5
// console.log(temp)

//console.log(parseInt(3/2))