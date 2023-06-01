const anArray = [1,2,3];

const arrayIterator = anArray[Symbol.iterator]();

let val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);

val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);

val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);

val = arrayIterator.next();
console.log(`Val: ${val.value}, Flag: ${val.done}`);

