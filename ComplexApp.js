// Filename: ComplexApp.js
// Description: This code demonstrates a complex web application that simulates a virtual online store

// Utility functions
function convertPriceToCurrency(price) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(price);
}

function formatProductInfo(product) {
  return `${product.name} - ${convertPriceToCurrency(product.price)}`;
}

// Data for the store
const products = [
  { id: 1, name: 'Product A', price: 9.99, quantity: 10 },
  { id: 2, name: 'Product B', price: 19.99, quantity: 5 },
  { id: 3, name: 'Product C', price: 14.99, quantity: 20 },
  // ... more products ...
];

// User interface elements
const productListElement = document.getElementById('product-list');
const cartElement = document.getElementById('cart');
const totalElement = document.getElementById('total');

// Render products on the page
function renderProducts() {
  productListElement.innerHTML = ''; // Clear previous content

  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = formatProductInfo(product);
    
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', () => addToCart(product));

    listItem.appendChild(addButton);
    productListElement.appendChild(listItem);
  });
}

// Cart functionality
const cart = [];

function addToCart(product) {
  const cartItem = cart.find(item => item.product.id === product.id);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(cartItem) {
  const cartItemIndex = cart.findIndex(item => item === cartItem);
  cart.splice(cartItemIndex, 1);
  renderCart();
}

// Render the cart
function renderCart() {
  cartElement.innerHTML = ''; // Clear previous content

  cart.forEach(cartItem => {
    const cartItemElement = document.createElement('div');
    cartItemElement.textContent = `${formatProductInfo(cartItem.product)} (${cartItem.quantity})`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeFromCart(cartItem));

    cartItemElement.appendChild(removeButton);
    cartElement.appendChild(cartItemElement);
  });

  const total = cart.reduce((acc, cartItem) => {
    return acc + cartItem.product.price * cartItem.quantity;
  }, 0);

  totalElement.textContent = `Total: ${convertPriceToCurrency(total)}`;
}

// Initialize the app
renderProducts();