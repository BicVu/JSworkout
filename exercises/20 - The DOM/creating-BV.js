console.log('It works.');

// Creating an HTML element
const myParagraph = document.createElement('p');
myParagraph.textContent = 'New paragraph added.'; // Add content
myParagraph.classList.add('special'); // Add class
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/300';
myImage.alt = 'New image added';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Append children first, then append 'div' for faster flow
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// Adding an element to the top of the element
const heading = document.createElement('h2');
heading.textContent = 'New Heading Added';
myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');
const li= document.createElement('li');
li.textContent = 'Three';
myList.appendChild(li);
// Add element at the top of the page
document.body.insertAdjacentElement('afterbegin', myList);

const li5 = document.createElement('li');
li5.textContent = 'Five';
myList.append(li5);

// Clone an element
const li1 = li5.cloneNode(true); // True pass content of element
li1.textContent = 'One';
myList.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);