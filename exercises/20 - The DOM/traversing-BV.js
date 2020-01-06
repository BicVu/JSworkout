// NODES & ELEMENTS
const bic = document.querySelector('.bic');
console.log('children: ');
console.log(bic.children);

console.log('childNodes: ');
console.log(bic.childNodes); // Returns properties within element
console.log('firstElmentChild: ');
console.log(bic.firstElementChild);
console.log('lastElementChild: ');
console.log(bic.lastElementChild);
console.log('previousElementSibling: ');
console.log(bic.previousElementSibling);
console.log('nextElementSibling: ');
console.log(bic.nextElementSibling);
console.log('parentElement: ');
console.log(bic.parentElement);

// $0 in console returns current element

// REMOVE ELEMENT
// $0.remove() Remove current element in console
// Add element
const p = document.createElement('p');
p.textContent = 'Element to be removed';
document.body.appendChild(p);
// Remove element
p.remove();
console.log(p); // Will still log because it's in local memory