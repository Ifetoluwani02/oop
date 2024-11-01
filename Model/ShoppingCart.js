import ShoppingCartItem from './ShoppingCartItem.js';

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    if (quantity <= 0) {
      console.error('Quantity must be greater than zero.');
      return;
    }

    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  displayCartItems() {
    this.items.forEach(item => {
      console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total: $${item.getTotalPrice()}`);
    });
  }

  getCartTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

export default ShoppingCart;
