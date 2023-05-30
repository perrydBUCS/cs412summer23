//PS1
// function reverseString(st){
//     let list = st.split("");
//     let sortedList = list.sort();
//     let reverseSortedList = sortedList.reverse();
//     let answerString = reverseSortedList.join("");
//     return answerString;
// }
const reverseString = aString => aString.split("").sort().reverse().join("");
console.log(reverseString("supercalifragilisticexpialidocious"));


//P2
//destructuring
const p2 = ([left, operator, right]) => {
    switch (operator) {
        case '+': return () => Number(left) + Number(right); //just for addition because overloading of +
        break;
        case '-': return () => left - right;
        break;
    }
}
let theFunc =  p2('5+2') //char strings are stored as an array
let value = theFunc();
console.log(p2('5+2')())

//p2('4-5');

//[a,b,c] = [42,12,5] //destructuring
const foo='4+2';
const left = Number(foo.charAt(0)) //this is just ugly

const p3 = (someString, decorator) => decorator(someString);

const p31a = p3('supercalifragilisticexpialidocious',
    str => str.replace(/c/g, "*c").split("*"));
const p31b = p3('supercalifragilisticexpialidocious',
    str => str.split(/(?=c)/g))
console.log(p31a);
console.log(p31b);

const p32 = (someString, decorator) => {    
    return {
        originalString: someString,
        modifiedString: decorator(someString),
        numberReplaced: someString.match(/a/g).length,
        length: someString.length
    }
}

const p32a = p32('supercalifragilisticexpialidocious',
    (str) => str.replace(/a/g, 'A')
    )

console.log(p32a);