
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
  
    convertToCurrency(currency){
      const currencyConv = document.createElement('p');
      fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=263fe100ace8aee6407e7866f15ef43a&from=DKK&to=${currency}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          const {rates} = data;
          this.price * rates[currency]; 
        currencyConv.innerHTML = `Currency conversion from EUR to ${currency} :${this.price * rates[currency]}`;
        document.body.appendChild(currencyConv);
      })
    }
  }
    
  class ShoppingCart {
      constructor() {
        this.products = [];
      }
    
      addProduct(product) {
        this.products.push(product);
      }
    
      removeProduct(product) {
          const updatedProducts = this.products.filter((it) => it.name !== product.name)
          this.products = updatedProducts;
      }
    
      searchProduct(productName) { 
        const search = document.createElement('p');
        this.products.filter((product) => {
          if(product.name === productName){
            search.innerHTML = `Searched Product: [${product.name}, ${product.price}]`;
            document.body.appendChild(search);
        }
      });
      }
    
      getTotal() {
          let totalPrice = 0;
          this.products.forEach((it) => totalPrice = it.price+totalPrice)
          const totalprice = document.createElement('p');
          totalprice.innerHTML = `Total Price: ${totalPrice}`;
          document.body.appendChild(totalprice);
      }
    
    renderProducts() {
          const h1 = document.createElement('h1');
              h1.innerHTML = `Products`;
              document.body.appendChild(h1);
              const ul = document.createElement('ul');
              h1.appendChild(ul);
          this.products.map((product)=>{
              const li = document.createElement('li');
  
              const name = document.createElement('p');
              name.innerHTML = `Product name: ${product.name}`;
              li.appendChild(name);
  
              const price = document.createElement('p');
              price.innerHTML = `Price: ${product.price}`;
              li.appendChild(price);
  
              ul.appendChild(li);
          })
          this.getUser();
          this.getTotal();
  
      }
    
      getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
              data;
          const username = document.createElement('p');
          username.innerHTML = `User name: ${data.username}`;
          document.body.appendChild(username);
        })
        
      }
  
    }
    
    const shoppingCart = new ShoppingCart();
    const flatscreen = new Product("Lg flat-screen", 5000);
    const audiosystem = new Product("Samsung speakers", 4500);
    const laptop = new Product("Lenovo ThinkPad", 6000);
    shoppingCart.addProduct(flatscreen);
    shoppingCart.removeProduct(flatscreen);
    shoppingCart.addProduct(audiosystem);
    shoppingCart.addProduct(laptop);
    shoppingCart.searchProduct('Samsung speakers');
    shoppingCart.renderProducts();
  
  const plant = new Product("plant", 10); 
  plant.convertToCurrency('DKK');
  