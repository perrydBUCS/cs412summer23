//generally we don't use new() and we don't include methods in class definitions
class Animal {
    __weight;
    getWeight = _ => this.__weight;
    setWeight = weight => this.__weight = weight;
    __eyeColor = 'blue';
}

Animal.prototype.getEyeColor = function() {
    return this.__eyeColor; //adding a function to Animal (it is a singleton, there's only one copy in mem)
}

let dog1 = new Animal(); //this gets a copy of all methods in Animal
let dog2 = new Animal(); //this ALSO gets a DIFFERENT copy of all methods in Animal

let dog3 = Object.create(Animal); //use this instead of new()
let dog4 = Object.create(Animal); //both use the same copy of getEyeColor
dog4.__eyeColor = 'green';

console.log("dog3 eye color: ", dog3.__eyeColor, "dog4 eye color: ", dog4.__eyeColor);