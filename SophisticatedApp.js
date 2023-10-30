/**
 * Filename: SophisticatedApp.js
 * 
 * Description: This JavaScript code demonstrates the implementation of a sophisticated and elaborate application.
 * The application performs various complex operations and includes multiple classes and functions.
 * 
 * Note: This code is an example of a fictional elaborate app and may not make practical sense.
 */

// Utility class
class MathUtils {
  static multiply(a, b) {
    return a * b;
  }

  static sumOfArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }

  // ... other utility functions
}

// Custom Error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Complex data class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Main application class
class SophisticatedApp {
  constructor() {
    this.persons = [];
    this.counter = 0;
  }

  addPerson(name, age) {
    const person = new Person(name, age);
    this.persons.push(person);
    this.counter++;
  }

  removePerson(index) {
    if (index >= 0 && index < this.persons.length) {
      this.persons.splice(index, 1);
      this.counter--;
    } else {
      throw new CustomError("Invalid index");
    }
  }

  getTotalPersons() {
    return this.counter;
  }

  getPersonInfo(index) {
    if (index >= 0 && index < this.persons.length) {
      return this.persons[index].getInfo();
    } else {
      throw new CustomError("Invalid index");
    }
  }

  calculateSumOfAges() {
    const ages = this.persons.map(person => person.age);
    return MathUtils.sumOfArray(ages);
  }

  calculateProductOfAges() {
    const ages = this.persons.map(person => person.age);
    return ages.reduce((product, age) => MathUtils.multiply(product, age), 1);
  }

  // ... other complex operations and functionalities
}

// Usage Example

const app = new SophisticatedApp();
app.addPerson("John Doe", 25);
app.addPerson("Jane Smith", 30);
app.addPerson("David Johnson", 40);

console.log(`Total Persons: ${app.getTotalPersons()}`);
console.log(`Person 1 Info: ${app.getPersonInfo(0)}`);
console.log(`Person 2 Info: ${app.getPersonInfo(1)}`);

console.log(`Sum of Ages: ${app.calculateSumOfAges()}`);
console.log(`Product of Ages: ${app.calculateProductOfAges()}`);

// ... further usage of the SophisticatedApp class and its functionalities