import Product from '../Model/Product.js';
import ShoppingCart from '../Model/ShoppingCart.js';

const product1 = new Product(1, 'Laptop', 1200);
const product2 = new Product(2, 'Headphones', 200);
const product3 = new Product(3, 'Mouse', 50);

const cart = new ShoppingCart();

cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

console.log('Cart items:');
cart.displayCartItems();

console.log(`Total items in cart: ${cart.getTotalItems()}`);
console.log(`Total cart price: $${cart.getCartTotalPrice()}`);

cart.removeItem(2);

console.log('Cart items after removal:');
cart.displayCartItems();
console.log(`Total items in cart: ${cart.getTotalItems()}`);
console.log(`Total cart price: $${cart.getCartTotalPrice()}`);
