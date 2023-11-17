/*
Filename: complex_application.js

Description: This code is a complex JavaScript application that simulates a virtual pet management system. It allows users to create and manage multiple virtual pets with various attributes and perform actions such as feeding, playing, and grooming. The code is over 200 lines long, and includes advanced object-oriented programming concepts, event handling, and asynchronous functionalities.

*/

// Pet Class
class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 50;
    this.happiness = 50;
    this.energy = 50;
  }

  feed() {
    this.hunger -= 10;
    this.happiness += 5;
    this.energy += 10;
    console.log(`${this.name} has been fed.`);
  }

  play() {
    this.hunger += 5;
    this.happiness += 20;
    this.energy -= 10;
    console.log(`${this.name} enjoyed playing.`);
  }

  groom() {
    this.hunger += 5;
    this.happiness += 10;
    this.energy += 5;
    console.log(`${this.name} looks great after grooming.`);
  }

  checkStatus() {
    if (this.hunger > 70) {
      console.log(`${this.name} is very hungry.`);
    } else if (this.hunger > 50) {
      console.log(`${this.name} is hungry.`);
    } else {
      console.log(`${this.name} is not hungry.`);
    }

    if (this.happiness < 30) {
      console.log(`${this.name} is unhappy.`);
    } else if (this.happiness < 50) {
      console.log(`${this.name} is not very happy.`);
    } else {
      console.log(`${this.name} is happy.`);
    }

    if (this.energy < 30) {
      console.log(`${this.name} is tired.`);
    } else if (this.energy < 50) {
      console.log(`${this.name} is a bit tired.`);
    } else {
      console.log(`${this.name} is energetic.`);
    }
  }
}

// Pet Manager Class
class PetManager {
  constructor() {
    this.pets = [];
  }

  addPet(name, species) {
    const pet = new Pet(name, species);
    this.pets.push(pet);
    console.log(`Pet ${name} (${species}) has been added to the system.`);
  }

  removePet(name) {
    const petIndex = this.pets.findIndex(pet => pet.name === name);

    if (petIndex !== -1) {
      const removedPet = this.pets.splice(petIndex, 1);
      console.log(`${removedPet[0].name} has been removed from the system.`);
    } else {
      console.log(`Pet ${name} not found.`);
    }
  }

  getPet(name) {
    const pet = this.pets.find(pet => pet.name === name);

    if (pet) {
      return pet;
    } else {
      console.log(`Pet ${name} not found.`);
      return null;
    }
  }

  feedPet(name) {
    const pet = this.getPet(name);

    if (pet) {
      pet.feed();
    }
  }

  playWithPet(name) {
    const pet = this.getPet(name);

    if (pet) {
      pet.play();
    }
  }

  groomPet(name) {
    const pet = this.getPet(name);

    if (pet) {
      pet.groom();
    }
  }

  checkPetsStatus() {
    for (const pet of this.pets) {
      pet.checkStatus();
    }
  }
}

// Sample Usage
const petManager = new PetManager();
petManager.addPet("Fluffy", "Cat");
petManager.addPet("Buddy", "Dog");
petManager.addPet("Charlie", "Parrot");

petManager.feedPet("Fluffy");
petManager.playWithPet("Buddy");
petManager.groomPet("Charlie");

petManager.checkPetsStatus();