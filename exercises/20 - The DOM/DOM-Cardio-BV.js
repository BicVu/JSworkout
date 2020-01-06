// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
// const ul = document.createElement('ul');
const myList =
    `<ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>`
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
// ul.insertAdjacentElement('beforebegin', myList);
myDiv.innerHTML = myList;

// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/500';
// set the width to 250
image.width = 250;
image.width = 250; // Adding a height helps maintain position of img
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute puppy';
// Append that image to the wrapper
myDiv.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = 
    `<div class = "selectDiv">
        <p>Paragraph 1</p>
        <p>Paragraph 2</>
    </div>`;
const ulElement = myDiv.querySelector('ul');
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const newDiv = myDiv.querySelector('.selectDiv');
newDiv.children[1].classList.add('warning');
console.log(document.querySelector('.warning'));
// remove the first paragraph
newDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const html = `
    <div class = "playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} inches tall and ${age} years old. In Dog years this person would be ${age/7}.</p>
        <button class = "delete" type = "button">&times; Delete</button>
    </div>`;
    return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Miss Piggy', 25, 64);
cardsHTML += generatePlayerCard('Tom', 25, 64);
cardsHTML += generatePlayerCard('Jerry', 25, 64);
cards.innerHTML = cardsHTML;
cards.insertAdjacentHTML('beforeend', generatePlayerCard('Minnie', 25, 64)); // Alernative method
// append those cards to the div

myDiv.insertAdjacentElement('beforebegin', cards);
console.log(cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
    // Buttons added in HTML above

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make our delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    buttonThatGotClicked.closest('.playerCard').remove(); // Alternative method. 'closest' looks for element closest up the tree that matches class or id criteria
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
