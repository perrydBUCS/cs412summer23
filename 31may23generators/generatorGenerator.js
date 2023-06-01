function* fib () {
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

function* getArrayElements () {
    yield* fib(); //note the *
    //yield* [1,2,3,4,5,6]

}

const gae = getArrayElements();
console.table(gae.next());
console.table(gae.next());
console.table(gae.next());
