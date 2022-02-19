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