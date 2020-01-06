// Regular fucntion: Passing an argument. 
// Hoisting moves "function first" so they can be run them before they are defined. Cannot use variables befoe they are defined
// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

// Anonymous function. Does not work as is.
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function expression: store a function as a variable. Can not run this function before the variable has been declared.
const doctorize = function (firstName) {
    return `Dr. ${firstName}`;
};

// Arrow function
// Must always be in a variable
// function inchToCM (inches) {
//     const cm = inches * 2.54;
//     return cm;
// }

// function inchToCM (inches) {
//     return inches * 2.54; // Function stops running after return. Anything after will not run.
// }

const inchToCM = inches => inches * 2.54;
// Implicit return does not need to say return. Remove 'function', {} and 'return'.

// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

const add = (a, b = 3) => a + b;

// Returning an object
// function makeABaby (first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

const makeABaby = (first, last) => ({ 
    name: `${first} ${last}`, 
    age: 0 
});

// IIFE: Immediately Invoked Function Expression
// Parenthesis always run first. This function will automatically run.
(function(age) {
    console.log('Running the anonymous function.');
    return `You are cool at age ${age}`;
})(10);

// Methods: a function that lives inside an object
// const snoopy = {
//     name: 'Snoopy Dog',
//     sayHi: function () {
//         console.log('Hey Snoopy');
//         return 'Hey Snoopy';
//     }
// };

// Shorthand method
const snoopy = {
    name: 'Snoopy Dog',
    yellHi () {
    console.log('HEY SNOOPY!');
    }
};

// Arrow method
// const snoopy = {
//     name: 'Snoopy Dog',
//     whisperHi: () => {
//     console.log('shhh Snoopy...');
//     }
// };


// Callback function when this happens do that
// Click callback
const button = document.querySelector('.clickMe'); // Select HTML element with class 'clickMe'

function handleClick () {
    console.log('Clicked!');
}

button.addEventListener('click', function() {
    console.log('Nice Job!');
});


// Timer callback

// setTimeout(snoopy.yellHi, 1000); // 1000 millisec = 1 sec

// setTimeout(function() {
//     console.log('Fin!');
// }, 1000);

setTimeout(() => {
    console.log('Fin!');
}, 1000);