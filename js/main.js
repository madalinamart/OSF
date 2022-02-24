



//DISPLAY LOGIN
const loginForm = document.querySelector('.login');
const userIcon = document.querySelector('.fa-user');
const loginMobile = document.querySelector('#login-mobile');

const displayLogin = () => {
  loginForm.classList.toggle('login-show');
};

userIcon.addEventListener('click', displayLogin);
loginMobile.addEventListener('click', displayLogin);

//CLOSE LOGIN
const closeLogin = () => {
  loginForm.classList.remove('login-show');
};

window.addEventListener('keydown', (e) => {
  if (e.keyCode == 27) {
    closeLogin();
  }
});

window.addEventListener('click', (e) => {
  if (e.target == loginForm) {
    closeLogin();
  }
});

//TOGGLE PASSWORD
const password = document.querySelector('#password-input');
const eyeOpen = document.querySelector('#eye-open');
const eyeClose = document.querySelector('#eye-close');
const eyeIcons = document.querySelector('#eyes');

const showPassword = () => {
  if (password.type === 'password') {
    password.type = 'text';
    eyeClose.style.display = 'block';
    eyeOpen.style.display = 'none';
  } else {
    password.type = 'password';
    eyeClose.style.display = 'none';
    eyeOpen.style.display = 'block';
  }
};

eyeIcons.addEventListener('click', showPassword);

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

//LOAD MORE
const productsLoad = document.querySelector('.product-load');
const loadMore = document.querySelector('#load');

const displayProducts = () => {
    productsLoad.classList.add('active');
    loadMore.style.display = 'none';
}

loadMore.addEventListener('click', displayProducts);


//ADD ITEMS TO FAVORITES/CART
const heartCounter = document.querySelector("#heart-count");
const hearts = document.querySelectorAll(".count-heart");
const heartMobile = document.querySelector('#heart-count-mobile');

let heartClicks = 0;


  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      heartClicks += 1;
      heartCounter.innerHTML = heartClicks;
      heartMobile.innerHTML = heartClicks;
    });   
  });  


const cartCounter = document.querySelector("#cart-count");
const carts = document.querySelectorAll(".cart-count");
const cartMobile = document.querySelector('#cart-count-mobile');
const buyNowButton = document.querySelector('#buy-now');

let cartClicks = 0;

 carts.forEach((cart) => {
   cart.addEventListener('click', () => {
     cartClicks += 1;
     cartCounter.innerHTML = cartClicks;
     cartMobile.innerHTML = cartClicks;
   })
 })

 const incrementCart = () => {
   cartClicks += 1;
   cartCounter.innerHTML = cartClicks;
    cartMobile.innerHTML = cartClicks;
 }

 buyNowButton.addEventListener('click', incrementCart);
