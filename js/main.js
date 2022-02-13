const xButton = document.querySelector('.fa-times');
const barButton = document.querySelector('.fa-bars');

window.addEventListener('load', () => {
  xButton.style.visibility = 'hidden';
});

barButton.addEventListener('click', () => {
  xButton.style.visibility = 'visible';
});

//SHOW MEGA MENU
/* 
const serviceButton = document.querySelector('#hover');
const mega = document.querySelector('.menu');

const showMega = () => {
    mega.classList.toggle('close');
}

serviceButton.addEventListener('click', showMega);

 */

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

//ADD YEAR TO COPYRIGHT

let year = new Date().getFullYear();
document.querySelector('#year').innerHTML = year;


//ADD ITEMS TO FAVORITES/CART
const heartCounter = document.querySelector("#heart-count");
const hearts = document.querySelectorAll(".count-heart");
let heartClicks = 0;


  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      heartClicks += 1;
      heartCounter.innerHTML = heartClicks;
    });   
  });  


const cartCounter = document.querySelector("#cart-count");
const carts = document.querySelectorAll(".cart-count");

let cartClicks = 0;

 carts.forEach((cart) => {
   cart.addEventListener('click', () => {
     cartClicks += 1;
     cartCounter.innerHTML = cartClicks;
   })
 })

