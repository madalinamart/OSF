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
    price.innerHTML = '$ ' + 2195 * quantity.value;
    cartSubtotal();
}

const decrement = () => {
    valueCount = quantity.value; 
    valueCount--;

    quantity.value = valueCount;
    price.innerHTML = '$ ' + 2195 * quantity.value;
    cartSubtotal();
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
    cartSubtotal();
}

const decrement2 = () => {
    valueCount = quantity2.value; 
    valueCount--;
    quantity2.value = valueCount;
    price2.innerHTML = '$ ' + 1249*quantity2.value;
   cartSubtotal();
}

minus2.addEventListener('click', decrement2);
plus2.addEventListener('click', increment2);

const subtotal = document.querySelector('#subtotal');



//CHECK CART
function checkCart() {
const removeFromCart = document.getElementsByClassName('fa-times-circle');
for(var i = 0; i < removeFromCart.length; i++){
  removeFromCart[i].addEventListener('click', removeCartItem);  
} 

  var quantityinputs = document.getElementsByClassName('valueQuantity')
   for(var i = 0; i < quantityinputs.length; i++){
     var input = quantityinputs[i];
     input.addEventListener('change', quantityChanged)
   }
}

document.addEventListener('DOMContentLoaded', checkCart);

//REMOVE FROM CART
function removeCartItem(e) {
  e.target.parentElement.remove();
  cartSubtotal(); 
}

//QUANTITY CHANGED
function quantityChanged(e) {
  var input = e.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  cartSubtotal();
}

//CART SUBTOTAL
const cartSubtotal = () => {
  var itemsContainer = document.getElementsByClassName('items')[0];
  var cartItems = itemsContainer.getElementsByClassName('item');
  var radioItems = document.getElementsByClassName('radio-input');
  var subtotal = 0;
  var total = 0;
  for(var i = 0; i < cartItems.length; i++){
    var cartItem = cartItems[i];
    var cartPrice = cartItem.getElementsByClassName('item-price')[0];
    var quantityPrice = cartItem.getElementsByClassName('valueQuantity')[0];
    var price = parseFloat(cartPrice.innerText.replace('$', ''));
    var quantity = quantityPrice.value;
    
    subtotal += (price * quantity);  
  }

  for(var i = 0; i < radioItems.length; i++) {
   
    if(radioItems[i].checked) {
      total = + radioItems[i].value + subtotal;     
    }
    document.querySelector('#total').innerText = '$ ' + total;
  }
  
  document.getElementsByClassName('subtotal')[0].innerText = '$ ' + subtotal;
}