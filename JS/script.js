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