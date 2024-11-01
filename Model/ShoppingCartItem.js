class ShoppingCartItem {
  constructor(product, quantity) {
    if (!product || typeof product.price !== 'number') {
      throw new Error('Invalid product');
    }
    if (typeof quantity !== 'number' || quantity <= 0) {
      throw new Error('Invalid quantity');
    }
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

export default ShoppingCartItem;
