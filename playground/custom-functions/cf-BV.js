

// Define function. 
// Better to pass in parameters such as "billAmount" and "taxRate" that can be updated when function is called, rather than creating stagnant global variables.
function calculateBill(billAmount, taxRate=0.13, tipRate=0.15) {
  // Function block or body
  console.log(`Current bill is ${billAmount} with ${taxRate*100}% tax.`);
  const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate); // Block scoping. Only available locally inside function
  return total; // Return value makes item available for use. Otherwise will return "undefined"
}

// Run or call a function
calculateBill();

// Store return to be available globally
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(`Your total is $${myTotal}.`);
console.log(`Your second total is $${myTotal2}.`)

const bicBill = 300;
const caTax = 0.0725;
const bicTotal = calculateBill(bicBill, caTax);
console.log(`Bic's total is $${bicTotal}.`);
// Run but not save. Prints same result
// console.log(`Your total is $${calculateBill()}.`);

const myTotal3 = calculateBill(200, undefined, 0.17);
console.log(`Your total with default tax rate is $${myTotal3}.`)


// Function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}.`;
}

// const greeting = sayHiTo('Bic');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

// Parameter with default
function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}!`;
}

// console.log(yell(doctorize('Bic')));