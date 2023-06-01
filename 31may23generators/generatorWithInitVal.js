function* fibs (x = 0) {
    let [val1, val2, result] = [x,x-1,0]
//    let [val1, val2, result] = [0, 1, 0]
    while (result < 60) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
   // yield result;
}
//Get a few fibs
myFibs = fibs(5) //not really fib(4), just shows passing param
let count = 7;
let result = null;
while (count --> 0) {
    result = myFibs.next();
    console.log(result.value, ":", result.done)
}
