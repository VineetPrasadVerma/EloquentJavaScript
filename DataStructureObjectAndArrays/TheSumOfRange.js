function range(start, end, step = 1){
    let arr = []
    if(step > 0){
        while(start <= end){
            arr.push(start)
            start += step;
        }
    }else{
        while(start >= end){
            arr.push(start)
            start += step;
        }
    }
    
    return arr
}

function sum(arr){
    let total = 0
    for(let num of arr){
        total += num
    }
    return total
}
console.log(range(5, 2,-1));
console.log(sum(range(1,10,2)));