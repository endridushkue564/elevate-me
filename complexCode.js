/**
 * Filename: complexCode.js
 * 
 * This code represents a complex and elaborate JavaScript program that aims to showcase various programming concepts and techniques.
 * It includes multiple classes, functions, and algorithms, with a focus on modularity and reusability.
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a BankAccount
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} into ${this.owner}'s account. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew $${amount} from ${this.owner}'s account. New balance: $${this.balance}`);
    } else {
      console.log(`Insufficient funds for withdrawal from ${this.owner}'s account.`);
    }
  }
}

// Class representing a Shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing shape with ${this.color} color.`);
  }
}

// A factory function for creating Shape objects
function createShape(type, color) {
  switch (type) {
    case 'circle':
      return new Circle(color);
    case 'rectangle':
      return new Rectangle(color);
    case 'triangle':
      return new Triangle(color);
    default:
      return null;
  }
}

// Class representing a Circle - a subclass of Shape
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing circle with radius ${this.radius} and ${this.color} color.`);
  }
}

// Class representing a Rectangle - a subclass of Shape
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log(`Drawing rectangle with width ${this.width}, height ${this.height} and ${this.color} color.`);
  }
}

// Class representing a Triangle - a subclass of Shape
class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  draw() {
    console.log(`Drawing triangle with base ${this.base}, height ${this.height} and ${this.color} color.`);
  }
}

// Example usage of the classes and functions above

// Creating Person objects
const john = new Person('John Doe', 25);
const jane = new Person('Jane Smith', 30);

john.sayHello(); // Output: Hello, my name is John Doe and I am 25 years old.
jane.sayHello(); // Output: Hello, my name is Jane Smith and I am 30 years old.

// Creating BankAccount objects
const johnsAccount = new BankAccount(john.name, 2000);
const janesAccount = new BankAccount(jane.name, 5000);

johnsAccount.deposit(500); // Output: Deposited $500 into John Doe's account. New balance: $2500
janesAccount.withdraw(1000); // Output: Withdrew $1000 from Jane Smith's account. New balance: $4000

// Creating Shape objects using the factory function
const redCircle = createShape('circle', 'red');
const blueRectangle = createShape('rectangle', 'blue');

redCircle.draw(); // Output: Drawing circle with radius undefined and red color.
blueRectangle.draw(); // Output: Drawing rectangle with width undefined, height undefined and blue color.

// Creating specific Shape objects
const yellowTriangle = new Triangle('yellow', 10, 5);
const greenRectangle = new Rectangle('green', 20, 15);

yellowTriangle.draw(); // Output: Drawing triangle with base 10, height 5 and yellow color.
greenRectangle.draw(); // Output: Drawing rectangle with width 20, height 15 and green color.