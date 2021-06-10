console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    productsUl.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${
            product.name
        }</li>
                <li>${
            product.price
        }</li>
                <li>${
            product.rating
        }</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);


const userInput = document.getElementById('search-box');
const userPrice = document.getElementById('start');
const sortPrice = document.getElementById('sortprice');
const sortName = document.getElementById('sortname');
const sortRating = document.getElementById('sortrating');
let filteredNameProducts,filteredPriceProducts;

//checks for the user input name and displays those products:
userInput.addEventListener('input', (event) => {
    const productName = event.target.value.toLowerCase().trim();
    filteredPriceProducts=filteredNameProducts;
    filteredNameProducts = products.filter(product => 
        product.name.toLowerCase().includes(productName));
    if(productName){
        return renderProducts(filteredNameProducts)
     }else{
        return renderProducts(products);
     } 
    });

//checks the list for the range of price and displays the products in that range and according to user input name if user inputs a name:
userPrice.addEventListener('change', () => {
    const productPrice = parseInt(userPrice.value);
    let tempProducts = filteredNameProducts? filteredNameProducts:products;
    filteredPriceProducts = tempProducts.filter(product => product.price < productPrice);
    if(productPrice){
        return renderProducts(filteredPriceProducts);
    }else{
        return renderProducts(tempProducts);
    }
});

//sort price by cheap or expensive:
sortPrice.addEventListener('change', () => {
    const value = sortPrice.value;
    let sortedPrice;
    let tempProducts = products;
    if(filteredPriceProducts){
        tempProducts = filteredPriceProducts;
    } 
    if(value === 'cheap'){
        sortedPrice = tempProducts.sort((a,b) => a.price - b.price);
    }else if(value === 'expensive'){
        sortedPrice = tempProducts.sort((a,b) => b.price - a.price);
    }
    return renderProducts(sortedPrice);
});

//sort the names by ascending or descending order:
sortName.addEventListener('change', () => {
    const value = sortName.value;
   if(value === 'desc'){
    renderProducts(products.sort((firstProduct,secondProduct) => {
            let firstProductName = firstProduct.name.toLowerCase(),
            secondProductName = secondProduct.name.toLowerCase();
    
        if (firstProductName > secondProductName) {
            return -1;
        }
        if (firstProductName < secondProductName) {
            return 1;
        }
        return 0;
            
        }));
    }
    else if(value === 'asc'){
        renderProducts(products.sort((firstProduct, secondProduct) => {
            let firstProductName = firstProduct.name.toLowerCase(),
            secondProductName = secondProduct.name.toLowerCase();
    
        if (firstProductName < secondProductName) {
            return -1;
        }
        if (firstProductName > secondProductName) {
            return 1;
        }
        return 0;
            
        }));

    }
});

//sort the list according to their rating and the user input name(if user provided a name):
sortRating.addEventListener('change', () => {
    const value = sortRating.value;
    let sortedRating;
    let tempProducts = products;
    if(filteredNameProducts){
        tempProducts = filteredNameProducts;
    } 
    if(value === 'low'){
        sortedRating = tempProducts.sort((a,b) => a.rating - b.rating);
    }else if(value === 'high'){
        sortedRating = tempProducts.sort((a,b) => b.rating - a.rating);
    }
    return renderProducts(sortedRating);
});


