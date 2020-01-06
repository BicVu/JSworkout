const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
// SECURITY: Cross site scripting. User can input their own html if the DOM is created from a string input
// const desc = `Cute pup <img onload="alert('PUPPIES AT PLAY')" src="https://picsum.photos/50"/> <h1>Sneaky HTML inserted</h1>`;
const desc = `Heading Override`

// Note that this overwrite is a string and can't be manipulated!
const myHTML = `
    <div class = "wrapper">
        <h2>${desc}</h2>
        <img src = "${src}" alt = "${desc}"/>
    </div>
`;

// Overwrite inner HTML
// item.innerHTML = `
//     <div>
//         <h1>Hey how are you?</h1>
//     </div>
// `;

// item.innerHTML = myHTML;
// console.log(item.innerHTML);

// NOTICE: the new inner HTML is just a string and can't be altered like an element. Also can throw security warning.
// console.log(typeof myHTML);

// const itemImage = document.querySelector('.wrapper img');

// Adding class transformation form HTML
// itemImage.classList.add('round');
// console.log(itemImage);

// //// Turn a string into a DOM element
// "Range" is a collection of elments.
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);