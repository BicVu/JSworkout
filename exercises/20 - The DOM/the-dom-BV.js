// // Select first element
// const p = document.querySelector('p');
// // Select all elements
// const divs = document.querySelectorAll('div.item');
// // Select element with class
// // const divs = document.querySelectorAll('div.item');
// // Select class
// // const divs = document.querySelectorAll('.article');

// // Give element specific name like 'item2' for targeted selection
// const item2 = document.querySelector('.item2');
// // Select within element
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(p);
// console.log(divs);
// console.log(item2);
// console.log(item2Image);
// // console.dir(heading); // Console.dir prints attributes of elements

// console.log(heading.textContent); // Prints text content of an element
// // Change text content in console, but not in html.
// heading.textContent = "The cat is hungry."
// console.log(heading.textContent); // Prints text content of an element including nested styles.
// console.log(heading.innerText); // Prints text content only. Newer option.
// console.log(heading.innerHTML);
// console.log(heading.outerHTML); // Prints surrounding tag pairs

// // Select element by class and save to variable
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // SLOW METHOD. Update list with addition upon refresh.
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`

// // Insert adjacent element
// pizzaList.insertAdjacentText('afterbegin', '🍄');
// pizzaList.insertAdjacentText('beforeend', '😋');

// ----- CLASSES -----
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList); // Returns DOMTokenList

function toggleRound() {
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
