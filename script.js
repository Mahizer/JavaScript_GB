'use strict';


/* 1-1 */

const products = {
  one: 'один',
  two: 'два',
  three: 'три',
};

for (let prop in products) {
  console.log(prop);
  console.log(products[prop]);
}

/* 1-2 */

let p = document.querySelector('p');
p.innerHTML = '';


/* 1-3 */

let totalString = '';

for (let i = 1; i <= 3; i++) {
  totalString += `слово{i}`;
}

/* 2-2 */

for (let i = 0; i < 2; i++) {
  let markup = `<img src="img/background-${i}.jpg" alt="${i}">`;
  document.body.insertAdjacentHTML('afterbegin', markup);
}

/* 2-3 */

let my_input = document.querySelector('input');
let my_div = document.querySelector('div');
my_input.addEventListener('input', function(event) {
  my_div.style.fontSize = event.target.value + 'px';
})