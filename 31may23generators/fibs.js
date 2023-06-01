function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2;
        //Yes, you need the semicolon on the previous line...try
        //it without!
        //
//        val1 = val2
//        val2 = result
        //instead of two statements use one...
        [val1, val2] = [val2, result]
        yield result
    }
}

//Get a few fibs
myFibs = fibs()
let count = 5;
while (count --> 0) {
    console.log(myFibs.next().value)
}

