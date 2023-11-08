// Filename: ComplexCode.js
// Description: A complex and elaborate JavaScript code demonstrating multiple concepts and functionalities

// Global variables
let counter = 0;
const maxCount = 10;

// Arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];

// Objects
const person = {
  name: 'John Doe',
  age: 25,
  profession: 'Developer',
};

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2021,
};

// Functions
function incrementCounter() {
  counter++;
  console.log('Counter:', counter);
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function calculateSum(a, b) {
  return a + b;
}

// Loops and conditionals
for (let i = 0; i < maxCount; i++) {
  if (i % 2 === 0) {
    console.log('Even number:', i);
  } else {
    console.log('Odd number:', i);
  }
}

// Array manipulation
fruits.push('grape');
numbers.pop();

// Object manipulation
person.name = 'Jane Smith';
delete car.year;

// Event handling
document.getElementById('myButton').addEventListener('click', () => {
  console.log('Button clicked!');
});

// Promises and asynchronous operations
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async operation completed');
    }, 2000);
  });
}

async function performAsyncTask() {
  const result = await asyncOperation();
  console.log(result);
}

performAsyncTask();

// Classes and inheritance
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log('Engine started');
  }

  static honkHorn() {
    console.log('Honk honk!');
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }

  accelerate() {
    console.log('Accelerating...');
  }
}

const myCar = new Car('Tesla', 'Model S', 2022);
myCar.startEngine();
myCar.accelerate();

// Error handling
try {
  throw new Error('This is an error');
} catch (error) {
  console.error('Error:', error.message);
}

// Regular expressions
const regex = /\d+/g;
const string = '123 abc 456 def';
const matches = string.match(regex);
console.log('Matches:', matches);

// Date manipulation
const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
console.log('Formatted date:', formattedDate);

// Execution
incrementCounter();
greet('Alice');
console.log('Sum:', calculateSum(3, 4));
Vehicle.honkHorn();
console.log(person);
console.log(car);