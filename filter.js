const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
];

const productContainer = document.querySelector(".product-container");


function renderProducts(productList) {
    productContainer.innerHTML = "";

    if (productList.length === 0) {
        productContainer.innerHTML = "<p>No products found in this price range.</p>";
        return;
    }

    productList.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="./images/r3.jpg" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">Rs. ${product.price}</p>
            </div>
        `;
        productContainer.insertAdjacentHTML("beforeend", productHTML);
    });
}

function filterProducts() {
    let minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    let maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;

    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    renderProducts(filteredProducts);
}


document.getElementById("filter-btn").addEventListener("click", filterProducts);


renderProducts(products);
