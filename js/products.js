fetch("../products.json")
.then(res => res.json())
.then(data => display(data));


function display(products) {
    const section = document.querySelector('.product-load');

    for (const product of products) {
        const myArticle = document.createElement('article');
        const img = document.createElement('img');
        const details = document.createElement('div');
        const name = document.createElement('p');
        const price = document.createElement('p');

        details.classList.add('details');
        img.setAttribute('src', product.image);
        img.setAttribute('alt',product.alt);
        name.textContent = product.name;
        price.textContent = product.price;
        
        price.classList.add('price');
        details.appendChild(name);
        details.appendChild(price);
        myArticle.appendChild(img);
        myArticle.appendChild(details);        
        section.appendChild(myArticle);
    }
}

