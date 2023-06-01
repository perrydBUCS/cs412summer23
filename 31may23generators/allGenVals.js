function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (result < 100) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}
//Get a few fibs
for (fib of fibs()) {
    console.log(fib)
}

console.log(...fibs())

//POJO = Plain Old Javascript Object
