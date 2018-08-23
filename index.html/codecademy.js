console.log("pepperoni");
console.log("5 guys")

console.log('JavaScript');
console.log(33.7);
console.log(true);
console.log(null);

console.log(31 + 3.5);
console.log(2018 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

console.log("Teaching the world how to code".length);

// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

//Opening line
console.log('It was love at first sight.');

/*console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');*/

// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

const entree = 'Enchiladas';
const price = 12;
console.log(entree);
console.log(price);

let changeMe = false;
console.log(changeMe);

let notDefined;
console.log(notDefined);

let valueless;
console.log(valueless);

let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16

// Multiply and assign to particle below
particle *= 6.02

// Increment assay by 1
assay++

var favoriteAnimal = "Koala";
console.log('My favorite animal:' + favoriteAnimal);

var myName = 'Romero';
var myCity = 'Buffalo';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

//Iv'e lost some of my code so this is learn JS for now.

var strength = '50,000 pounds';

console.log('How much stuff can a variable hold? ', strength);

var age = 31;

console.log(age);

var hasPet = true;

var strength = '50,000 pounds';
var age = 31;
var hasPet = true;

console.log(hasPet);
console.log(age);
console.log('How much stuff can a variable hold? ', strength);

var morningAlarm = '6:30AM';

morningAlarm = '8:30AM';
