const xButton = document.querySelector('.fa-times');
const barButton = document.querySelector('.fa-bars');

window.addEventListener('load', () => {
  xButton.style.visibility = 'hidden';
});

barButton.addEventListener('click', () => {
  xButton.style.visibility = 'visible';
});



//ADD YEAR TO COPYRIGHT

let year = new Date().getFullYear();
document.querySelector('#year').innerHTML = year;


//QUANTITY BUTTON
const quantity = document.querySelector('#number');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const valueQuantity = quantity.value;
const price = document.querySelector('#price');


const increment = () => {   
    valueCount = quantity.value; 
    valueCount++;
    quantity.value = valueCount;
    price.innerHTML = '$ ' + 2195*quantity.value;
}

const decrement = () => {
    valueCount = quantity.value; 
    valueCount--;

    quantity.value = valueCount;
    price.innerHTML = '$ ' + 2195*quantity.value;
}

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);



const quantity2 = document.querySelector('#number2');
const minus2 = document.querySelector('#minus2');
const plus2 = document.querySelector('#plus2');
const valueQuantity2 = quantity2.value;
const price2 = document.querySelector('#price2');


const increment2 = () => {   
    valueCount = quantity2.value; 
    valueCount++;
    quantity2.value = valueCount;
    price2.innerHTML = '$ ' + 1249*quantity2.value;
}

const decrement2 = () => {
    valueCount = quantity2.value; 
    valueCount--;
    quantity2.value = valueCount;
    price2.innerHTML = '$ ' + 1249*quantity2.value;

}

minus2.addEventListener('click', decrement2);
plus2.addEventListener('click', increment2);

const subtotal = document.querySelector('#subtotal');


