//In JS, ALL class members are PUBLIC
class Animal {
    weight = 20;
    color = 'red'
}

class Dog extends Animal  {
  //gets weight and color by inheritance
}
//no interfaces, can't have more than one parent
//no polymorphism
//

let dog = new Animal();
console.log(dog.weight)

Animal.weight = 40;
Animal.size = 'large'

dog.ears = 2;

console.log(dog.weight, dog.ears, Animal.size)
let anotherDog = new Dog();
console.log(anotherDog.color)


