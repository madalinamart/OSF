//DISPLAY 4 MORE ITEMS 

const loadMoreButton = document.querySelector('#load-more');
const mobileProducts = document.querySelector('.mobile');

const displayItems = () => {
    mobileProducts.classList.toggle('load');
}

loadMoreButton.addEventListener('click', displayItems);