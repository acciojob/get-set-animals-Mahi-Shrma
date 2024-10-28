//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get(species){
		return this.species=species;
	}
	makeSound(){
		console.log(`${species} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
const animal=new Animal("Siamese");
animal.makeSound();
const cat = new Cat(cat.purr());
const animal1=new Animal("Golden Retriever");
animal1.makeSound();
const dog = new Dog(dog.bark());

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
