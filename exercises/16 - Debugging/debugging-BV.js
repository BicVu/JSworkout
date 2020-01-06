const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//     // Diff ways of displaying statements
//   console.log(person.name);
// //   console.error(person.name);
// //   console.warn(person.name);
// });

// people.forEach((person, index) => {
//     console.groupCollapsed(`${person.name}`);
//     console.log(person.country);
//     console.log(person.cool);
//     console.log('DONE!');
//     console.groupEnd(`${person.name}`);
// });

people.forEach((person, index) => {
    debugger; // Pauses JS while running
    console.log(person.name);
});

// Console Methods
// console.table(people);

// Callstack

// Grabbing Elements
// $0 // Shows in console what has been selected in inspect
// $0.value
// $1 // Gives you the second last element selected
// $
// $$
// $('p') // Find first matching element
// $$('p') // Find all matching element

// Breakpoints

// Scope

// Network Requests


// Break On Attribute
// Inspect element
// Elements > Right click on line being inspected > Break On > Break on attribute
// Adds a pause at this point in the debugger

// Some Setup Code
function doALotOfStuff() {
    console.group('Doing some stuff'); // Group all the following messages
    console.log('Do you like green eggs and ham?');
    console.warn('I do not like them, Sam-I-am.');
    console.error('I do not like green eggs and ham.');
    console.groupEnd();
}

function doctorize(name) {
    console.count('Running doctorize.'); // Run in console. doctorize('string');
    return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Read the error statement
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

// Error: 'at <anonymous>:1:1 means the error was ran from the console

function bootstrap() {
    console.log('Starting the app.');
    go();
}
// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
