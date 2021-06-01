console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const ul = document.querySelector('ul');

function renderProducts(availableProducts) {
  for(let i = 0; i < products.length ; i++){
    const li = document.createElement('li');
    const renderProductName = document.createElement('h2');
    const renderProductPrice = document.createElement('p');
    const renderProductRating = document.createElement('p');

    renderProductName.innerHTML = products[i].name;
    li.appendChild(renderProductName);

    renderProductPrice.innerHTML = `Price: ${products[i].price}`;
    li.appendChild(renderProductPrice);

    renderProductRating.innerHTML = `Rating: ${products[i].rating}`;
    li.appendChild(renderProductRating);

    ul.appendChild(li);
  }
  
}


renderProducts(products); // This should create the ul and the li's with the individual products details



