function loop(value, test, update, body){
    for(let start = value; test(start); start = update(start)){
        body(start)
    }   
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1