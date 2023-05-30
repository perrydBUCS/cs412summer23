
//destructuring

const array1 = [1,2,3];
let [a,b,c] = array1; //a=1, b=2, c=3

const array2 = [1,2,3,4,5,6,7,7,98];
let [a1,,b1,c1,,,d1] = array2; //a1=1, b1=4, c1=5, d1=98

const obj = {
    name: 'Bob',
    age: 42,
    dept: 'CS'
}

//let {name, age, dept} = obj; //name =Bob, age=42, dept = CS
//let {name} = obj; //gives me JUST name from the object

const printName = ({name, age}) => console.log('Name: ' + name)
printName(obj);
printName({age: 42, dept: 'IT', name: 'Fred'})

let {name: n, dept: d} = obj; //n = Bob, d = 'CS' (allows you to rename input params)

