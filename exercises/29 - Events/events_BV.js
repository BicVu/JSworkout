const cats = document.querySelector('.cats');
const dogsButton = document.querySelector('.dogs');

// Anonymous function
cats.addEventListener('click', function() {
  console.log('YOU CLICKED CATS!')
});

// Named function version
function handleClick() {
  console.log('YOU CLICKED A BUTTON!');
}

cats.addEventListener('click', handleClick);
dogsButton.addEventListener('click', handleClick);

// RemoveEventListener must reference a named function, such as "handleClick". Anonymous functions canno be removed.
cats.removeEventListener('click', handleClick);

// -----
// Listen for event on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('Buying item');
}

// Must loop over each button for even listener to work

// buyButtons.forEach(function(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// });

// -----
// Alternative way to write forEach by naming function
// Name function and create action
function handleBuyButtonClick(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}
// Loop and use function
buyButtons.forEach(handleBuyButtonClick);

// Arrow function with anonymous function
// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('You clicked the button');
//   });
// });