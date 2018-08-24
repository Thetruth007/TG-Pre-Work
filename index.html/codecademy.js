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

console.log('morning alarm is set to:', morningAlarm)

var favoriteAnimal = 'favorite animal';

var favoriteAnimal = 'favorite animal';
favoriteAnimal = rabbit;
console.log 'My favorite animal' + favoriteAnimal;

var harryPotterFan = false;

if (harryPotterFan) {
  console.log('Mischief managed');
} else {
  console.log('I lead a muggle\'s life');
}

var hungerLevel = 10;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later');
}

var moonPhase = 'full';

switch (moonPhase){
  case 'full':
  console.log('Howwlll!');
    break;
} case 'mostly full': {
  console.log('Arms and legs are getting hairier');
break;
} case 'mostly new': {
  console.log('Back on two feet');
break;
  default:
  console.log('Invalid moon phase');
  break;
}

const takeOrder = () =>{
  console.log('Order: pizza')
}
takeOrder();

const takeOrder = (topping) => {
  console.log("Order: pizza topped with" +  topping);
};

takeOrder("mushrooms");

const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const takeOrder = (topping, crustType) => {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

let getSubTotal = (itemCount) =>

const takeOrder = (topping, crustType) => {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

let getSubTotal = (itemCount) => {
  return(itemCount * 7.5)
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

console.log(getSubTotal(orderCount));

let orderCount = 0;

const getTax = (itemCount) => {
return getSubTotal(itemCount) * 0.06
}

const getTotal = (itemCount) => {
  return getTax(itemCount) + getSubTotal(itemCount)
}

console.log(getSubTotal(orderCount));

console.log(getTotal(orderCount))

function isGreaterThan(numberOne, numberTwo)

function isGreaterThan(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(3, 4)

const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)

const volumeOfSphere = diameter =>
(1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
  let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

}

visibleLightWaves();

const starCount = () => {
  let i = 1;
  console.log(i);
  for (i = 0; i < 12; i++) {
    console.log(i);
  }
}
starCount();

let newYearsResolutions = [
  'kobe', 'Learn a new language', 'MJ'
];

console.log(newYearsResolutions);

let listItem = 'kobe';
console.log(listItem[0]);

console.log(newYearsResolutions[3]);

let newYearsResolutions = [
  'kobe', 'Learn a new languages', 'MJ'
];

console.log(newYearsResolutions.length);

newYearsResolutions.push('Drake', 'Eminem');

newYearsResolutions.pop();

groceryList.shift();

groceryList.unshift('popcorn');

console.log(groceryList.slice(1, 4));

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

console.log(utensils.pop());

utensils = ['Fork', 'Knife'];

let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}

let vacationSpots = ['colorado', 'NY', 'China'];
for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--){
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

let vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];
for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex++){
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

let myPlaces = ['Houston', 'Sioux Falls', 'Phoenix'];
let friendPlaces = ['Sioux Falls', 'Missoula', 'Buffalo'];
for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++)

{
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';
while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log("found a spade")

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitItem =>
  console.log('I want to eat' + fruits));
