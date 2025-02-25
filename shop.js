let cart = {};
let cartCount = document.getElementById("cartCount");
let count = 0;

const books = [
    { title: "Flying Lights", author: "Charles", currentPrice: "140", image: "seller1.jpg" },
    { title: "Skyline", author: "Jane Doe", currentPrice: "112", image: "seller2.jpg" },
    { title: "Ocean Waves", author: "Mark Twain", currentPrice: "180", image: "seller3.jpg" },
    { title: "Silent Shadows", author: "Emily Carter", currentPrice: "153", image: "seller4.jpg" },
    { title: "Golden Horizon", author: "Michael Brown", currentPrice: "200", image: "seller5.jpg" },
];

const productsContainer = document.getElementById("products");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");


function displayProducts(filteredBooks) {
    productsContainer.innerHTML = ""; 

    filteredBooks.forEach(book => {
        let div = document.createElement("div");
        div.classList.add("product");

        let image = document.createElement("img");
        image.src = book.image;
        image.alt = book.title;
        image.classList.add("book-image");

        let title = document.createElement("h3");
        title.innerText = book.title;

        let author = document.createElement("p");
        author.innerText = `By: ${book.author}`;

        let currentPrice = document.createElement("p");
        currentPrice.innerHTML = `<strong>Rs. ${book.currentPrice}</strong>`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.onclick = () => addToCart(book.title, book.currentPrice);

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = () => removeFromCart(book.title);

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(currentPrice);
        div.appendChild(button);
        div.appendChild(removeBtn);

        productsContainer.appendChild(div);
    });
}


displayProducts(books);

function addToCart(name, price) {
    price = parseFloat(price);
    if (cart[name]) {
        cart[name].quantity++;
    } else {
        cart[name] = { price: price, quantity: 1 };
    }
    count++;
    cartCount.innerText = count;
    updateCart();
}


function removeFromCart(name) {
    if (cart[name]) {
        count -= cart[name].quantity;
        delete cart[name];
        cartCount.innerText = count;
        updateCart();
    }
}


function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';

    for (let item in cart) {
        let li = document.createElement('li');
        let itemTotal = cart[item].price * cart[item].quantity;
        total += itemTotal;

        li.innerHTML = `${item} - Rs. ${cart[item].price} x 
            <input type="number" value="${cart[item].quantity}" min="1" 
            onchange="changeQuantity('${item}', this.value)"> = Rs. ${itemTotal}`;

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = () => removeFromCart(item);

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    }

    document.getElementById('total').textContent = total;
}

function filterProducts() {
    let minPrice = parseFloat(minPriceInput.value) || 0; 
    let maxPrice = parseFloat(maxPriceInput.value) || Infinity; 

    let filteredBooks = books.filter(book => {
        let price = parseFloat(book.currentPrice);
        return price >= minPrice && price <= maxPrice;
    });

    displayProducts(filteredBooks);
}
////


const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
  ];
  
 
  function renderProductList(products) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";
  
    products.forEach((product) => {
      const productHTML = `
        <div class="product">
          <img src="./images/seller3.jpg" alt="${product.name}">
          <h2>${product.name}</h2>
          <p class="price">$${product.price}</p>
        </div>
      `;
      productContainer.insertAdjacentHTML("beforeend", productHTML);
    });
  }
  
  
  function filterProductsByPriceRange(minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
  }
  

  document.getElementById("apply-filter").addEventListener("click", () => {
    const minPrice = parseInt(document.getElementById("min-price").value);
    const maxPrice = parseInt(document.getElementById("max-price").value);
  
    const filteredProducts = filterProductsByPriceRange(minPrice, maxPrice);
    renderProductList(filteredProducts);
  });
  
 
  renderProductList(products);
