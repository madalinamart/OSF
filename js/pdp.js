$(document).ready(function(){
    $('.wrapper li').click(function(){
        var currentElement = $(this).html();
        $('.default li').html(currentElement);
        $(this).parents('.wrapper').toggleClass('show');
        
    })
})


//QUANTITY BUTTON
const quantity = document.querySelector('#number');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const valueQuantity = quantity.value;


const increment = () => {   
    valueCount = quantity.value; 
    valueCount++;

    quantity.value = valueCount;
}

const decrement = () => {
    valueCount = quantity.value; 
    valueCount--;

    quantity.value = valueCount;

}

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);


const addToCartButton = document.querySelector('.add');
const cartCount = document.querySelector('#cart-count');
const cartCountMobile = document.querySelector('#cart-count-mobile');
const addToCart = () => {
    cartCount.innerHTML = quantity.value;
    cartCountMobile.innerHTML = quantity.value;
}

addToCartButton.addEventListener('click', addToCart);

//READ MORE

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.'
const readMore = document.querySelector('#read-more');
const initialText = document.querySelector('#initial-text');
initialText.innerHTML = text.substring(0,100);


const showAllText = () => {
    initialText.innerHTML = text;
    readMore.style.display = 'none';
}

readMore.addEventListener('click', showAllText);

//TABS
let tabButtons = document.querySelectorAll('.tablinks');
let tabs = document.querySelectorAll('.tabcontent');

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabButtons.forEach((tabButton) => {
            tabButton.classList.remove('active');
        });

        tabs[index].classList.add('active');
        tabButtons[index].classList.add('active');
    })
})

window.addEventListener('load', () => {
    document.querySelector('#description').classList.add('active');
    document.querySelector('#description-tab').classList.add('active');
})

//CHANGE IMAGES 
$(document).ready(function(){
    $('.small-image > img').click(function(){
        var $smallSrc = $(this).attr('src');
        $('.big-image > img').attr('src', $smallSrc);
    })
})


//SCROLL TO TOP
const backToTop = document.querySelector('#back-to-top');

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

backToTop.addEventListener('click', topFunction);

//IMAGE ZOOM
const zoomButton = document.querySelector('.fa-search-plus');
const image = document.querySelector('.big-image img');


function openFullscreen() {
  if (image.requestFullscreen) {
    image.requestFullscreen();
  } else if (image.webkitRequestFullscreen) { 
    image.webkitRequestFullscreen();
  } else if (image.msRequestFullscreen) {
    image.msRequestFullscreen();
  }
}

zoomButton.addEventListener('click', openFullscreen);