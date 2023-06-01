
function* listGen () {
    yield 1;
    yield 2;
    yield 3;
}
const values = listGen();
console.log(`${values}`)
let next = values.next();
next = values.next();
next = values.next();
next = values.next();



