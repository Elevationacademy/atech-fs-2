class Animal {
    constructor(name){
        this.name = name
        this.sound = "...."
        }

    makeSound(){
        console.log(this.sound)
    }

}

class Cat extends Animal {
    constructor(name){
        super(name)
    }
    makeSound(){
        console.log("Meow")
    }
    Screech(){
        console.log("Bkhhhhhhh")
    }

}

class Dog extends Animal {
    constructor(name){
        super(name)
    }
    makeSound(){
        $("body").append("Meow")
    }
    Bite(){
        console.log("Ouch")
    }
}

class Rabbit extends Animal {
    constructor(name){
        super(name)
    }
    eatCarrot(){
        console.log("Nmmnmnmnnmm")
    }
}

class Parrot {

}

const Bunny = new Cat("Bunny")
const Stich = new Dog("Stich")
const Chanel = new Rabbit("Chanel")

Chanel.makeSound()

const animalArr = [Bunny,Stich,Chanel,Jawabry]

for(let animal of animalArr){
    animal.makeSound()
}



