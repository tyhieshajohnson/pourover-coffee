// Product Page
// Product Page
const products = [
    { name: "Product 1", imageSrc: "https://i.postimg.cc/Dfg46tYq/iced-tea-3.png", description: "Description of Product 1.", price: "R19.99" },
    { name: "Product 2", imageSrc: "https://i.postimg.cc/CxQc1vyq/4.png", description: "Description of Product 2.", price: "R24.99" },
    { name: "Product 3", imageSrc: "https://i.postimg.cc/SN59YHsk/5.png", description: "Description of Product 3.", price: "R29.99" },
    { name: "Product 4", imageSrc: "https://i.postimg.cc/vZkCj8Zk/6.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 5", imageSrc: "https://i.postimg.cc/vZkCj8Zk/6.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 6", imageSrc: "https://i.postimg.cc/SN59YHsk/5.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 7", imageSrc: "https://i.postimg.cc/Dfg46tYq/iced-tea-3.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 8", imageSrc: "https://i.postimg.cc/CxQc1vyq/4.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 9", imageSrc: "https://i.postimg.cc/CxQc1vyq/4.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 10", imageSrc: "https://i.postimg.cc/Dfg46tYq/iced-tea-3.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 11", imageSrc: "https://i.postimg.cc/vZkCj8Zk/6.png", description: "Description of Product 4.", price: "R14.99" },
    { name: "Product 12", imageSrc: "https://i.postimg.cc/SN59YHsk/5.png", description: "Description of Product 4.", price: "$14.99" }
];

// Function to create a product element
function createProductElement(product) {
    const template = document.getElementById("productTemplate");
    const productElement = document.importNode(template.content, true);

    productElement.querySelector("h3").textContent = product.name;
    productElement.querySelector(".productImage").src = product.imageSrc;
    productElement.querySelector(".productDescription").textContent = product.description;
    productElement.querySelector(".productPrice").textContent = product.price;

    return productElement;
}

// Populate products in the grid
const shopProducts = document.getElementById("shopProducts");
products.forEach(product => {
    const productElement = createProductElement(product);
    shopProducts.appendChild(productElement);
});

// Cart Page
// Function to create a cart item element
function createCartItemElement(product) {
    const template = document.getElementById("cartItemTemplate");
    const cartItemElement = document.importNode(template.content, true);

    cartItemElement.querySelector("h3").textContent = product.name;
    cartItemElement.querySelector(".cartProductImage").src = product.imageSrc;
    cartItemElement.querySelector(".cartProductDescription").textContent = product.description;
    cartItemElement.querySelector(".cartProductPrice").textContent = product.price;

    return cartItemElement;
}

// Function to add a product to the cart and store it in localStorage
function addToCart(product) {
    const cartItems = document.getElementById("cartItems");
    const cartItemElement = createCartItemElement(product);
    cartItems.appendChild(cartItemElement);

    // Retrieve existing cart items from localStorage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new item to the array
    existingCartItems.push(product);

    // Save the updated array back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
}

// Event listener for Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.grid-item button');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(products[index]);
    });
});

// Load cart items from localStorage on page load
window.addEventListener('load', () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const cartItems = document.getElementById("cartItems");
    existingCartItems.forEach(item => {
        const cartItemElement = createCartItemElement(item);
        cartItems.appendChild(cartItemElement);
    });
});