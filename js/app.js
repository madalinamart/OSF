const xButton = document.querySelector('.fa-times');
const barButton = document.querySelector('.fa-bars');

window.addEventListener('load', () => {
  xButton.style.visibility = 'hidden';
});

barButton.addEventListener('click', () => {
  xButton.style.visibility = 'visible';
});


//LOAD MORE
const productsLoad = document.querySelector('.product-load');
const loadMore = document.querySelector('#load');

const displayProducts = () => {
    productsLoad.classList.add('active');
    loadMore.style.display = 'none';
}

loadMore.addEventListener('click', displayProducts);


//ADD YEAR TO COPYRIGHT

let year = new Date().getFullYear();
document.querySelector('#year').innerHTML = year;


//COOKIE 

const cookieBox = document.querySelector('.cookie');
const accept = document.querySelector('#accept');
const closeCookie = document.querySelector('#close-cookie')

const cookieFunction = () => {
  document.cookie = "CookieBy=Madalina";
  if(document.cookie) {
    cookieBox.classList.add('hide');
  } else {
    alert("Cookie can't be set!");
  }
}

let checkCookie = document.cookie.indexOf('CookieBy=Madalina');
checkCookie != -1 ? cookieBox.classList.add('hide') : cookieBox.classList.remove('hide');

accept.addEventListener('click',cookieFunction);

const closeCookieFunction = () => {
  cookieBox.classList.add('hide');
}

closeCookie.addEventListener('click', closeCookieFunction);

function showIt() {
  cookieBox.style.visibility = 'visible';
}

setTimeout("showIt()", 10000);